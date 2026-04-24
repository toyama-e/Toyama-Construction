import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "採用情報｜株式会社 外山建設",
  description:
    "新潟県三条市の外山建設では正社員を募集しています。未経験歓迎・資格取得支援あり・月給22万円〜。土木工事の仕事に興味のある方はお気軽にご連絡ください。",
};

export default function RecruitLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
