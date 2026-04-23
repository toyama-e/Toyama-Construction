import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "株式会社 外山建設｜新潟県三条市の土木・外構工事",
  description:
    "新潟県県央地区を中心に土木一式工事・外構工事を手がける株式会社外山建設の公式サイトです。外構・改修・小規模工事まで、地域密着で丁寧に対応します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
