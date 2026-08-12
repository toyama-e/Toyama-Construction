import type { Metadata } from "next";
import { OGP_IMAGE_URL, SITE_URL } from "@/constants/site";

const description =
  "株式会社外山建設の特徴、会社概要、建設業許可、保有資格、加入保険をご紹介します。";

export const metadata: Metadata = {
  title: "外山建設について｜株式会社 外山建設",
  description,
  alternates: {
    canonical: "/company",
  },
  openGraph: {
    title: "外山建設について｜株式会社 外山建設",
    description,
    url: `${SITE_URL}/company`,
    siteName: "株式会社 外山建設",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: OGP_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "外山建設について｜株式会社 外山建設",
      },
    ],
  },
};

export default function CompanyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
