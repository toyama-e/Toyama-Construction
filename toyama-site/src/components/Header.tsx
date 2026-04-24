"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { COMPANY } from "@/constants/company";

export default function Header() {
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
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/images/simple.png"
            alt={`${COMPANY.name} ロゴ`}
            width={40}
            height={40}
            priority
          />
          <span className="text-base font-semibold tracking-tight text-white md:text-lg">
            {COMPANY.name}
          </span>
        </a>

        <nav className="hidden items-center gap-5 text-sm md:flex">
          {[
            { label: "事業内容", href: "#services" },
            { label: "許可・資格", href: "#license" },
            { label: "会社概要", href: "#about" },
            { label: "採用情報", href: "#recruit" },
            { label: "お問い合わせ", href: "#contact" },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-white/80 hover:text-gold transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${COMPANY.tel}`}
            className="rounded-full border border-white/40 px-3 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors"
          >
            {COMPANY.tel}
          </a>
          <a
            href="#recruit"
            className="rounded-full bg-gold px-3 py-2 text-sm font-medium text-navy hover:opacity-90 transition-opacity"
          >
            採用応募
          </a>
        </div>
      </div>
    </header>
  );
}
