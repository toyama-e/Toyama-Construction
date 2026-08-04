import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜株式会社 外山建設",
  description: "株式会社外山建設における個人情報の取り扱いについてご案内します。",
};

export default function PrivacyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
