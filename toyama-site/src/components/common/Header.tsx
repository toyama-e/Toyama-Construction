"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { COMPANY } from "@/constants/company";

type Props = { page: "lp" | "recruit"; alwaysVisible?: boolean };

const LP_NAV = [
  { label: "事業内容", href: "#services" },
  { label: "許可・資格", href: "#license" },
  { label: "会社概要", href: "#about" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Header({ page, alwaysVisible = false }: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visible = alwaysVisible || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white backdrop-blur transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href={page === "recruit" ? "/" : "#top"}>
          <Image
            src="/images/logo-wide.jpg"
            alt={COMPANY.name}
            width={160}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </a>

        {page === "lp" && (
          <nav className="hidden items-center gap-5 text-sm md:flex">
            {LP_NAV.map(({ label, href }) => (
              <a key={href} href={href} className="text-black hover:text-gold transition-colors">
                {label}
              </a>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-2">
          {page === "lp" ? (
            <a
              href="/recruit"
              className="relative text-sm font-medium text-black after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-gold after:transition-transform after:duration-200 after:scale-x-100 hover:after:scale-x-75"
            >
              正社員募集中！ ›
            </a>
          ) : (
            <a
              href="#apply"
              className="relative text-sm font-medium text-black after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-gold after:transition-transform after:duration-200 after:scale-x-100 hover:after:scale-x-75"
            >
              今すぐ応募する ›
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
