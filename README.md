# NS Clinic website

An editorial aesthetics, skin and body website for NS Clinic on Swinnow Crescent, Stanningley, Pudsey, Leeds LS28 6NZ. The existing React / Vinext / Vite application and its compact route architecture are preserved.

## Run locally

```sh
npm run dev
npm run build
npm run lint
npx tsc --noEmit
node --import tsx scripts/qa/content-audit.ts
```

The development preview runs at http://127.0.0.1:5173. Production builds retain the existing static export and Cloudflare-compatible server output. No deployment is performed by this revamp.

## Content and configuration

- `lib/clinic.ts`: one source for business contacts, exact Google Place ID, verified Treatwell booking URL, review counts, treatment data, gallery and page metadata.
- `lib/content.ts`: category introductions, guidance and FAQs.
- `lib/image-sources.json`: provenance and usage notes for the image library.
- `app/clinic-ui.tsx`: shared editorial sections, catalogue filtering/search, treatment finder, accessible gallery and reviews, enquiry drafting and responsive navigation.
- `app/globals.css`: responsive design system, locally hosted typefaces and reduced-motion support.

15 core pages plus four legal/information pages. All 66 treatment entries have distinct source photographs, descriptive alt text, useful descriptions, related treatments and enquiry messages. HIFU body areas and other sub-options are maintained as variants, avoiding unnecessary individual pages.

Booking buttons open the verified Leeds Treatwell listing. Calls and WhatsApp use the supplied clinic number. The contact form validates the enquiry and prepares a WhatsApp draft; it never sends automatically or implies a reserved appointment. Editing a field invalidates the old draft. Hours are described as available by enquiry because the supplied brief warns of conflicting listings. Prices and current offers are checked through Treatwell or directly with the clinic, rather than copied from variable promotions.

## Sources and publication settings

The Leeds listing at https://www.treatwell.co.uk/place/ns-clinic/ was checked on 8 October 2026. Rosa, Treatwell's 5.0 / 14 reviews, selected review excerpts and portfolio images are from that listing. Google 5.0 / 18 and the exact Place ID are client-supplied. Maintain counts in `business` rather than editing components. Helen's feedback is explicitly a summary; Linda and Lauren have accurately reproduced short excerpts. No reviewer portraits or credentials have been fabricated.

NS Clinic photographs are credited as its public Treatwell listing/portfolio. Public availability does not itself grant a republication licence: the business owner must confirm reuse rights and client consent before public launch. Stock photographs are separately identified as illustrative; images do not claim to show the clinic's actual equipment or every specific technique. Some services use treatment-area illustrations where an exact procedure photograph is unavailable. Pexels licence: https://www.pexels.com/license/. Locally hosted Cormorant Garamond and Manrope include their SIL Open Font Licence notices.

General clinical guidance was checked against NHS advice on cosmetic procedures and choosing a practitioner. Medical content, the offered treatment inventory, any prescribing/dental arrangements and the legal policies still require clinic sign-off before public launch. No durations, prices, professional registrations or guaranteed results are invented.

The existing registered preview origin remains centralised in `business.siteURL`. Indexing stays disabled via `business.publicLaunch = false` until the business details, domain and policies are approved. Update the site URL and publication setting together before launch. Structured data describes the business, website, breadcrumbs and relevant services; it deliberately does not include self-serving aggregate review markup.

## Verification

The browser audit covers all 19 routes at 375, 390, 430, 768, 1024 and 1440 pixels, and tests catalogue search/filters, variants, empty states, gallery lightbox, keyboard dismissal, FAQ, reviews, desktop/mobile navigation and the enquiry draft without sending it.

```sh
NS_QA_PLAYWRIGHT=/path/to/playwright NS_QA_CHROME=/path/to/chrome node scripts/qa/browser-audit.mjs
```

Set `NS_QA_URL` to audit a different local server. Reports and full-page screenshots default to `/private/tmp/ns-clinic-qa`; the latest compact verified report is saved in `docs/verification.json`.

Final verification: production build, lint, TypeScript and the content audit passed. All 19 routes passed six viewport checks and eight interaction checks, with no unexpected console errors or missing local assets. The intentional missing-page test returns 404. The axe-core WCAG A/AA scan returned zero automated violations across the 19 routes; results are saved in `docs/accessibility.json`. Automated scanning complements the visual and interaction review and does not establish full accessibility conformance.
