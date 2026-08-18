import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import GoogleAnalytics from "@/components/common/GoogleAnalytics";
import { COMPANY } from "@/constants/company";
import { OGP_IMAGE_URL, SITE_URL } from "@/constants/site";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-serif-ja",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "株式会社 外山建設｜新潟県三条市の土木・外構工事",
  description:
    "新潟県三条市・県央地域を中心に土木一式工事・外構工事を手がける株式会社外山建設の公式サイトです。ご自宅の外構・改修・小規模工事まで、地域密着で丁寧に対応します。",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "株式会社 外山建設｜新潟県三条市の土木・外構工事",
    description:
      "新潟県三条市・県央地域を中心に土木一式工事・外構工事を手がける株式会社外山建設の公式サイトです。ご自宅の外構・改修・小規模工事まで、地域密着で丁寧に対応します。",
    url: SITE_URL,
    siteName: "株式会社 外山建設",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: OGP_IMAGE_URL,
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
      "新潟県三条市・県央地域を中心に土木一式工事・外構工事を手がける株式会社外山建設の公式サイトです。ご自宅の外構・改修・小規模工事まで、地域密着で丁寧に対応します。",
    images: [OGP_IMAGE_URL],
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
  faxNumber: COMPANY.fax,
  email: COMPANY.email,
  url: SITE_URL,
  logo: OGP_IMAGE_URL,
  image: OGP_IMAGE_URL,
  openingHours: "Mo-Fr 08:00-17:30",
  areaServed: COMPANY.area,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={notoSerifJP.variable}>
        {children}
        <GoogleAnalytics measurementId={measurementId} />
      </body>
    </html>
  );
}
