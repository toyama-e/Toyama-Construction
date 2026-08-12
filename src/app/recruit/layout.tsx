import type { Metadata } from "next";
import { RECRUITMENT } from "@/constants/recruitment";
import { OGP_IMAGE_URL, SITE_URL } from "@/constants/site";

const salary = RECRUITMENT.summary.find((item) => item.label === "給与")?.value;
const recruitDescription = `新潟県三条市の外山建設では正社員を募集しています。未経験歓迎・資格取得支援あり・${salary}。土木工事の仕事に興味のある方はお気軽にご連絡ください。`;

export const metadata: Metadata = {
  title: "採用情報｜株式会社 外山建設",
  description: recruitDescription,
  alternates: {
    canonical: "/recruit",
  },
  openGraph: {
    title: "採用情報｜株式会社 外山建設",
    description: recruitDescription,
    url: `${SITE_URL}/recruit`,
    siteName: "株式会社 外山建設",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: OGP_IMAGE_URL,
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
    images: [OGP_IMAGE_URL],
  },
};

export default function RecruitLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
