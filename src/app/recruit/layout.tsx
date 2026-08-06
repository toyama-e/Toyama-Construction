import type { Metadata } from "next";
import { RECRUITMENT } from "@/constants/recruitment";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://toyama-kensetsu.example.com";
const salary = RECRUITMENT.summary.find((item) => item.label === "給与")?.value;
const recruitDescription = `新潟県三条市の外山建設では正社員を募集しています。未経験歓迎・資格取得支援あり・${salary}。土木工事の仕事に興味のある方はお気軽にご連絡ください。`;

export const metadata: Metadata = {
  title: "採用情報｜株式会社 外山建設",
  description: recruitDescription,
  openGraph: {
    title: "採用情報｜株式会社 外山建設",
    description: recruitDescription,
    url: `${siteUrl}/recruit`,
    siteName: "株式会社 外山建設",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "採用情報｜株式会社 外山建設",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "採用情報｜株式会社 外山建設",
    description: recruitDescription,
    images: [`${siteUrl}/images/og-image.jpg`],
  },
};

export default function RecruitLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
