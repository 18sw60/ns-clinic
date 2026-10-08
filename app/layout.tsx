import type { Metadata } from "next";
import "./globals.css";
import { business } from "@/lib/clinic";
export const metadata: Metadata = {
  title: "Aesthetics & Skin Clinic Leeds | NS Clinic",
  description:
    "Advanced aesthetics, skin, body and laser treatments at NS Clinic in Stanningley, Leeds. Explore treatments, meet Rosa and book your appointment.",
  metadataBase: new URL(business.siteURL),
  alternates: { canonical: "/" },
  robots: { index: business.publicLaunch, follow: business.publicLaunch },
  openGraph: {
    title: "NS Clinic | Aesthetics & Skin in Leeds",
    description:
      "A personal approach to aesthetics, skin and body care in Stanningley, Leeds.",
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: "/images/editorial/hero.webp",
        width: 867,
        height: 1300,
        alt: "NS Clinic — aesthetics, skin & body in Leeds",
      },
    ],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${business.siteURL}/#clinic`,
      name: business.name,
      description:
        "Advanced aesthetics, skin and body clinic in Stanningley, Leeds.",
      url: business.siteURL,
      telephone: business.internationalPhone,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${business.address[0]}, ${business.address[1]}`,
        addressLocality: `${business.address[2]}, ${business.address[3]}`,
        postalCode: business.address[4],
        addressRegion: "West Yorkshire",
        addressCountry: "GB",
      },
      hasMap: business.googleMapsURL,
      sameAs: [business.treatwellURL],
      areaServed: [
        "Stanningley",
        "Pudsey",
        "Leeds",
        "Bradford",
        "West Yorkshire",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${business.siteURL}/#website`,
      url: business.siteURL,
      name: business.name,
      inLanguage: "en-GB",
      publisher: { "@id": `${business.siteURL}/#clinic` },
    },
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body>
        <a href="#main" className="skip">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
