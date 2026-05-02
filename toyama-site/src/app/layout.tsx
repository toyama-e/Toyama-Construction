import type { Metadata } from "next";
import { COMPANY } from "@/constants/company";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://toyama-kensetsu.example.com";

export const metadata: Metadata = {
  title: "株式会社 外山建設｜新潟県三条市の土木・外構工事",
  description:
    "新潟県県央地区を中心に土木一式工事・外構工事を手がける株式会社外山建設の公式サイトです。外構・改修・小規模工事まで、地域密着で丁寧に対応します。",
  openGraph: {
    title: "株式会社 外山建設｜新潟県三条市の土木・外構工事",
    description:
      "新潟県県央地区を中心に土木一式工事・外構工事を手がける株式会社外山建設の公式サイトです。外構・改修・小規模工事まで、地域密着で丁寧に対応します。",
    url: siteUrl,
    siteName: "株式会社 外山建設",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "株式会社 外山建設",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社 外山建設｜新潟県三条市の土木・外構工事",
    description:
      "新潟県県央地区を中心に土木一式工事・外構工事を手がける株式会社外山建設の公式サイトです。外構・改修・小規模工事まで、地域密着で丁寧に対応します。",
    images: [`${siteUrl}/images/og-image.png`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: COMPANY.name,
  address: {
    "@type": "PostalAddress",
    streetAddress: "西潟14-23",
    addressLocality: "三条市",
    addressRegion: "新潟県",
    postalCode: "955-0014",
    addressCountry: "JP",
  },
  telephone: COMPANY.fax,
  email: COMPANY.email,
  url: siteUrl,
  openingHours: "Mo-Fr 08:00-17:30",
  areaServed: COMPANY.area,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
