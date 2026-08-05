"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { COMPANY } from "@/constants/company";
import { PAGE_CTA, PAGE_NAV, type PageKey } from "@/constants/navigation";

type Props = { page: PageKey; alwaysVisible?: boolean };

export default function Header({ page, alwaysVisible = false }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const visible = alwaysVisible || scrolled;
  const navItems = PAGE_NAV[page];
  const cta = PAGE_CTA[page];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-gray-200/70 bg-offwhite/95 backdrop-blur transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 lg:h-auto lg:px-8 lg:py-5">
        <a href={page === "lp" ? "#top" : "/"} className="relative z-50 shrink-0">
          <Image
            src="/images/logo-wide.png"
            alt={COMPANY.name}
            width={148}
            height={27}
            className="w-[132px] object-contain lg:w-40"
            style={{ height: "auto" }}
          />
        </a>

        <nav className="hidden items-center gap-5 text-base lg:flex">
          {navItems.map(({ label, href }) => (
            <a key={href} href={href} className="text-black transition-colors hover:text-bronze">
              {label}
            </a>
          ))}
        </nav>

        {cta && (
          <div className="hidden items-center gap-2 lg:flex">
            {page !== "recruit" ? (
              <a
                href={cta.href}
                className="relative text-base font-medium text-black after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:scale-x-100 after:bg-bronze after:transition-transform after:duration-200 hover:after:scale-x-75"
              >
                正社員募集中！ →
              </a>
            ) : (
              <a
                href={cta.href}
                className="relative text-base font-medium text-black after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:scale-x-100 after:bg-bronze after:transition-transform after:duration-200 hover:after:scale-x-75"
              >
                今すぐ応募する →
              </a>
            )}
          </div>
        )}

        <button
          type="button"
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-navy/20 lg:hidden"
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? "メニューを閉じる" : "メニューを開く"}</span>
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-ink transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-[7px] h-px w-5 bg-ink transition-opacity ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 top-[14px] h-px w-5 bg-ink transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`absolute inset-x-0 top-0 z-40 h-dvh bg-offwhite px-6 pb-8 pt-24 transition-[opacity,visibility] duration-200 lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="スマートフォンメニュー" className="border-t border-navy/10">
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="flex min-h-14 items-center justify-between border-b border-navy/10 text-lg font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {label}
              <span aria-hidden="true" className="text-bronze">
                →
              </span>
            </a>
          ))}
        </nav>
        {cta && (
          <a
            href={cta.href}
            className="mt-8 flex min-h-12 items-center justify-center rounded-full bg-navy px-5 font-bold text-white"
            onClick={() => setMenuOpen(false)}
          >
            {cta.label}
          </a>
        )}
      </div>
    </header>
  );
}
