import type { Metadata } from "next";
import { OGP_IMAGE_URL, SITE_URL } from "@/constants/site";

const description = "株式会社外山建設における個人情報の取り扱いについてご案内します。";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜株式会社 外山建設",
  description,
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "プライバシーポリシー｜株式会社 外山建設",
    description,
    url: `${SITE_URL}/privacy`,
    siteName: "株式会社 外山建設",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: OGP_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "プライバシーポリシー｜株式会社 外山建設",
      },
    ],
  },
};

export default function PrivacyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
