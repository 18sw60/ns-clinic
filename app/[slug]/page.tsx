import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { business, categories, pages } from "@/lib/clinic";
import {
  PageShell,
  Title,
  Directory,
  CategoryPage,
  Results,
  Reviews,
  About,
  Contact,
  LipPage,
  Prices,
  Areas,
  Legal,
  CTA,
  Process,
} from "../clinic-ui";
export function generateStaticParams() {
  return [...Object.keys(pages), ...categories.map((c) => c.slug)].map(
    (slug) => ({ slug }),
  );
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = categories.find((c) => c.slug === slug);
  const p = pages[slug];
  const title = c?.seoTitle || p?.seoTitle || "Page Not Found | NS Clinic";
  const description = c?.intro || p?.description;
  return {
    title,
    description,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      title,
      description,
      url: `${business.siteURL}/${slug}`,
      type: "website",
      locale: "en_GB",
    },
  };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = categories.find((c) => c.slug === slug);
  const p = pages[slug];
  if (!c && !p) notFound();
  const title = c?.title || p.title;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: business.siteURL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: title,
            item: `${business.siteURL}/${slug}`,
          },
        ],
      },
      ...(c || slug === "lip-fillers-leeds"
        ? [
            {
              "@type": "Service",
              name: title,
              serviceType: c?.name || "Lip Fillers",
              provider: { "@id": `${business.siteURL}/#clinic` },
              areaServed: "Leeds",
              url: `${business.siteURL}/${slug}`,
            },
          ]
        : []),
    ],
  };
  const content = c ? (
    <CategoryPage slug={slug} />
  ) : slug === "treatments" ? (
    <Directory />
  ) : slug === "results" ? (
    <>
      <Results />
      <Process />
      <CTA />
    </>
  ) : slug === "reviews" ? (
    <>
      <Reviews />
      <Process />
      <CTA />
    </>
  ) : slug === "about" ? (
    <About />
  ) : slug === "contact" ? (
    <Contact />
  ) : slug === "lip-fillers-leeds" ? (
    <LipPage />
  ) : slug === "prices" ? (
    <Prices />
  ) : slug === "areas" ? (
    <Areas />
  ) : (
    <Legal slug={slug} />
  );
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <Title title={title} description={c?.intro || p.description} />
      {content}
    </PageShell>
  );
}
