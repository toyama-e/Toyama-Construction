"use client";

import { useEffect, useState } from "react";
import { COMPANY } from "@/constants/company";

type Props = { page: "lp" | "recruit" };

const LP_NAV = [
  { label: "事業内容", href: "#services" },
  { label: "許可・資格", href: "#license" },
  { label: "会社概要", href: "#about" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Header({ page }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-navy/20 bg-navy/95 backdrop-blur transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href={page === "recruit" ? "/" : "#top"} className="text-lg font-bold text-white">
          {COMPANY.name}
        </a>

        {page === "lp" ? (
          <nav className="hidden items-center gap-5 text-sm md:flex">
            {LP_NAV.map(({ label, href }) => (
              <a key={href} href={href} className="text-white/80 hover:text-gold transition-colors">
                {label}
              </a>
            ))}
          </nav>
        ) : (
          <nav className="hidden md:flex">
            <a href="/" className="text-sm text-white/80 hover:text-gold transition-colors">
              ← 会社サイトへ戻る
            </a>
          </nav>
        )}

        <div className="flex items-center gap-2">
          <a
            href={`tel:${COMPANY.tel}`}
            className="rounded-full border border-white/40 px-3 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            電話：{COMPANY.tel}
          </a>
          {page === "lp" ? (
            <a
              href="/recruit"
              className="rounded-full bg-gold px-3 py-2 text-sm font-medium text-navy hover:opacity-90 transition-opacity"
            >
              正社員募集中！
            </a>
          ) : (
            <a
              href="#apply"
              className="rounded-full bg-gold px-3 py-2 text-sm font-medium text-navy hover:opacity-90 transition-opacity"
            >
              今すぐ応募する
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
