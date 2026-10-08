/* Run with NS_QA_PLAYWRIGHT pointing to an installed Playwright package if it is not in this checkout. */
import fs from "node:fs";
import assert from "node:assert/strict";
import { pathToFileURL } from "node:url";
const { chromium } = await import(
  process.env.NS_QA_PLAYWRIGHT
    ? pathToFileURL(process.env.NS_QA_PLAYWRIGHT + "/index.mjs").href
    : "playwright"
);
const output = process.env.NS_QA_OUTPUT || "/private/tmp/ns-clinic-qa";
fs.mkdirSync(output, { recursive: true });
const widths = [375, 390, 430, 768, 1024, 1440];
const routes = [
  "/",
  "/treatments",
  "/facial-aesthetics",
  "/skin-treatments",
  "/hifu-advanced-skin",
  "/body-contouring",
  "/laser-treatments",
  "/beauty",
  "/lip-fillers-leeds",
  "/results",
  "/about",
  "/reviews",
  "/prices",
  "/areas",
  "/contact",
  "/privacy",
  "/cookies",
  "/terms",
  "/treatment-disclaimer",
];
const base = process.env.NS_QA_URL || "http://127.0.0.1:5173";
(async () => {
  const browser = await chromium.launch({
    executablePath:
      process.env.NS_QA_CHROME ||
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: true,
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  const report = {
    checkedAt: new Date().toISOString(),
    base,
    routes: [],
    errors: [],
    consoleErrors: [],
    missingAssets: [],
    checks: [],
  };
  page.on("pageerror", (e) =>
    report.errors.push({ route: page.url(), message: e.message }),
  );
  page.on("console", (msg) => {
    if (msg.type() === "error")
      report.consoleErrors.push({
        route: page.url(),
        message: msg.text(),
        location: msg.location(),
      });
  });
  page.on("response", (res) => {
    if (res.url().startsWith(base) && res.status() >= 400)
      report.missingAssets.push({ url: res.url(), status: res.status() });
  });
  for (const route of routes) {
    const response = await page.goto(base + route, {
      waitUntil: "domcontentloaded",
    });
    assert.equal(response.status(), 200, `Route failed: ${route}`);
    await page.locator("h1").waitFor();
    await page.evaluate(() => document.fonts.ready);
    const row = {
      route,
      title: await page.title(),
      h1Count: await page.locator("h1").count(),
      words: (await page.locator("main").innerText()).split(/\s+/).length,
      widths: [],
    };
    assert.equal(row.h1Count, 1, `Exactly one h1: ${route}`);
    const emptyLinks = await page
      .locator("a")
      .evaluateAll((as) =>
        as
          .filter(
            (a) =>
              !a.getAttribute("href") ||
              a.getAttribute("href") === "#" ||
              a.getAttribute("href").startsWith("javascript:"),
          )
          .map((a) => a.outerHTML),
      );
    assert.equal(emptyLinks.length, 0, `Invalid link: ${route}`);
    for (const width of widths) {
      await page.setViewportSize({ width, height: 900 });
      const overflow = await page.evaluate(() => ({
        width: document.documentElement.clientWidth,
        scroll: document.documentElement.scrollWidth,
        bad: [...document.querySelectorAll("main *")]
          .filter(
            (e) =>
              e.getBoundingClientRect().right > innerWidth + 2 &&
              getComputedStyle(e).position !== "fixed",
          )
          .slice(0, 5)
          .map((e) => e.tagName + "." + e.className),
      }));
      row.widths.push({ width, overflow: overflow.scroll > width + 1 });
      assert(
        overflow.scroll <= width + 1,
        `Horizontal overflow on ${route} at ${width}: ${JSON.stringify(overflow)}`,
      );
    }
    if (routes.indexOf(route) < 15) {
      for (const width of [1440, 390]) {
        await page.setViewportSize({ width, height: 900 });
        await page.evaluate(async () => {
          for (let y = 0; y < document.body.scrollHeight; y += 700) {
            window.scrollTo({ top: y, behavior: "instant" });
            await new Promise((r) => setTimeout(r, 30));
          }
        });
        await page.waitForFunction(
          () => [...document.images].every((image) => image.complete),
          null,
          { timeout: 10000 },
        );
        await page.evaluate(() =>
          window.scrollTo({ top: 0, behavior: "instant" }),
        );
        await page.waitForTimeout(250);
        const broken = await page
          .locator("img")
          .evaluateAll((imgs) =>
            imgs
              .filter((i) => i.complete && i.naturalWidth === 0)
              .map((i) => i.src),
          );
        assert.equal(broken.length, 0, `Broken images on ${route}: ${broken}`);
        await page.screenshot({
          path: `${output}/${route === "/" ? "home" : route.slice(1)}-${width}.png`,
          fullPage: true,
        });
      }
    }
    report.routes.push(row);
    console.log(`Checked ${route}: ${row.words} words, six viewport widths.`);
  }
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(base + "/treatments");
  const filter = page.getByRole("group", {
    name: "Filter treatments by category",
  });
  await filter.getByRole("button", { name: "Laser", exact: true }).click();
  assert.equal(await page.locator(".treatment-card").count(), 3);
  await filter.getByRole("button", { name: "All", exact: true }).click();
  await page.getByRole("searchbox").fill("HIFU Arms");
  assert.equal(await page.locator(".treatment-card").count(), 1);
  await page.getByRole("searchbox").fill("zzzz-nothing");
  await page.getByRole("button", { name: "Show all treatments" }).click();
  assert.equal(await page.locator(".treatment-card").count(), 66);
  report.checks.push("Category filters, variant search and empty-search reset");
  await page.goto(base + "/lip-fillers-leeds");
  await page
    .getByRole("button", { name: "How much filler will I need?" })
    .click();
  assert.equal(
    await page
      .getByRole("button", { name: "How much filler will I need?" })
      .getAttribute("aria-expanded"),
    "true",
  );
  report.checks.push("Accessible FAQ opens and exposes its answer");
  await page.goto(base + "/reviews");
  assert(
    await page
      .locator(".review-slide")
      .innerText()
      .then((t) => t.includes("Linda")),
  );
  await page.getByRole("button", { name: "Next review" }).click();
  assert(
    await page
      .locator(".review-slide")
      .innerText()
      .then((t) => t.includes("Lauren")),
  );
  report.checks.push(
    "Review carousel advances to authentic attributed feedback",
  );
  await page.goto(base + "/results");
  await page.getByRole("button", { name: "Beauty", exact: true }).click();
  assert.equal(await page.locator(".gallery-card").count(), 2);
  await page
    .getByRole("button", { name: "View Lash detail photograph" })
    .click();
  await page.getByRole("dialog").waitFor();
  await page.keyboard.press("Escape");
  await page.getByRole("dialog").waitFor({ state: "hidden" });
  assert.equal(await page.getByRole("dialog").count(), 0);
  report.checks.push(
    "Portfolio category filtering and keyboard-dismissable photo dialog",
  );
  await page.goto(base + "/contact?treatment=Lip%20Fillers");
  await page.waitForFunction(
    () => document.querySelector("select")?.value === "Lip Fillers",
  );
  assert.equal(await page.locator("select").inputValue(), "Lip Fillers");
  await page.getByLabel("Your name", { exact: true }).fill("Website QA");
  await page.getByLabel("Phone number", { exact: true }).fill("abc");
  await page
    .getByLabel("Your message", { exact: true })
    .fill("Testing the local draft without sending any message.");
  await page.locator("input[type=checkbox]").check();
  await page.getByRole("button", { name: "Prepare WhatsApp Enquiry" }).click();
  await page.getByRole("alert").waitFor();
  await page.getByLabel("Phone number", { exact: true }).fill("07453 296000");
  await page.getByRole("button", { name: "Prepare WhatsApp Enquiry" }).click();
  await page.getByRole("status").waitFor();
  const draftLink = await page
    .getByRole("link", { name: "Review & Send in WhatsApp" })
    .getAttribute("href");
  assert(draftLink.startsWith("https://wa.me/447453296000?text="));
  assert(decodeURIComponent(draftLink).includes("Lip Fillers"));
  await page.getByLabel("Your name", { exact: true }).fill("Updated QA");
  assert.equal(
    await page.getByRole("link", { name: "Review & Send in WhatsApp" }).count(),
    0,
  );
  report.checks.push(
    "Treatment preselection, phone validation, WhatsApp draft and stale-draft reset; no message sent",
  );
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base);
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page.getByRole("dialog").waitFor();
  await page.getByRole("link", { name: "All Treatments", exact: true }).click();
  await page.waitForURL("**/treatments");
  await page.getByRole("dialog").waitFor({ state: "hidden" });
  assert.equal(await page.getByRole("dialog").count(), 0);
  report.checks.push("Mobile navigation opens, follows a route and closes");
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(base);
  await page.getByRole("button", { name: "Treatments", exact: true }).click();
  await page.getByRole("menu").waitFor();
  await page.getByRole("menuitem", { name: "Skin & Skin Boosters" }).click();
  await page.waitForURL("**/skin-treatments");
  report.checks.push("Desktop treatment menu and client route navigation");
  await page.goto(base + "/missing-page");
  assert((await page.locator("h1").innerText()).includes("Page not found"));
  report.checks.push("Custom missing-page recovery");
  const unexpectedLocalFailures = report.missingAssets.filter(
    (request) => request.url.split("?")[0] !== `${base}/missing-page`,
  );
  assert.equal(
    unexpectedLocalFailures.length,
    0,
    `Failed local assets: ${JSON.stringify(unexpectedLocalFailures)}`,
  );
  assert.equal(
    report.errors.length,
    0,
    `Browser exceptions: ${JSON.stringify(report.errors)}`,
  );
  const unexpectedConsoleErrors = report.consoleErrors.filter(
    (entry) => entry.location.url !== `${base}/missing-page`,
  );
  assert.equal(
    unexpectedConsoleErrors.length,
    0,
    `Unexpected console errors: ${JSON.stringify(unexpectedConsoleErrors)}`,
  );
  fs.writeFileSync(
    `${output}/browser-report.json`,
    JSON.stringify(report, null, 2),
  );
  console.log(
    `PASS: ${routes.length} routes × ${widths.length} widths, ${report.checks.length} interaction checks, ${report.errors.length} browser exceptions.`,
  );
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
