import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { strict as assert } from "node:assert";
import {
  business,
  categories,
  pages,
  treatments,
  portfolio,
  guideLinks,
} from "../../lib/clinic";
const routes = new Set([
  "/",
  ...Object.keys(pages).map((s) => `/${s}`),
  ...categories.map((c) => `/${c.slug}`),
]);
const ids = new Set(treatments.map((t) => t.id));
assert.equal(
  ids.size,
  treatments.length,
  "Treatment identifiers must be unique",
);
assert.equal(
  new Set(treatments.map((t) => t.photo)).size,
  treatments.length,
  "Every treatment must use a distinct original photograph",
);
assert.equal(
  new Set(treatments.map((t) => t.image)).size,
  treatments.length,
  "Treatment image paths must be unique",
);
for (const t of treatments) {
  assert(existsSync(join("public", t.image)), `Missing image ${t.image}`);
  assert(t.imageAlt.length > 20, `Descriptive alt text required for ${t.name}`);
  assert(
    t.description.split(/\s+/).length >= 27,
    `Thin description: ${t.name}`,
  );
  assert(routes.has(t.link.split("#")[0]), `Dead treatment route: ${t.link}`);
  assert(
    t.relatedTreatments.every((id) => ids.has(id)),
    `Broken related treatment: ${t.name}`,
  );
  assert(t.whatsappMessage.includes(t.name));
}
for (const c of categories)
  assert(
    existsSync(join("public", c.image)),
    `Missing collection image ${c.image}`,
  );
for (const p of portfolio)
  assert(existsSync(`public/images/ns-clinic/portfolio-${p.id}.webp`));
for (const [, link] of guideLinks)
  assert(routes.has(link.split("#")[0]), `Dead finder route ${link}`);
assert(business.googleMapsURL.includes(business.googlePlaceId));
assert(
  business.mapEmbedURL.includes("NS+Clinic") &&
    business.mapEmbedURL.includes("LS28+6NZ"),
);
for (const file of [
  "app/clinic-ui.tsx",
  "lib/clinic.ts",
  "lib/content.ts",
  "app/page.tsx",
]) {
  assert(
    !/lorem ipsum|coming soon|£XX|John Doe|Jane Doe|javascript:void|sales demo|awaiting approval|to be added/i.test(
      readFileSync(file, "utf8"),
    ),
    `Client-visible filler found in ${file}`,
  );
}
console.log(
  `Content audit passed: ${routes.size} routes, ${treatments.length} complete treatments, ${treatments.length} unique source photographs, ${portfolio.length} public portfolio images.`,
);
