import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "外山建設について｜株式会社 外山建設",
  description: "株式会社外山建設の特徴、会社概要、建設業許可、保有資格、加入保険をご紹介します。",
};

export default function CompanyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
