import Image from "next/image";
import { COMPANY } from "@/constants/company";
import { PAGE_CTA, PAGE_NAV, type PageKey } from "@/constants/navigation";

type Props = { page: PageKey };

export default function Footer({ page }: Props) {
  const navItems = PAGE_NAV[page];
  const cta = PAGE_CTA[page];

  return (
    <footer className="border-t border-gray-200 bg-offwhite">
      <div className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-16">
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-16">
          <div className="text-center md:text-left">
            <Image
              src="/images/logo-wide.png"
              alt={COMPANY.name}
              width={184}
              height={34}
              className="mx-auto object-contain md:mx-0"
              style={{ height: "auto" }}
            />
            <div className="mt-3 space-y-1 text-sm leading-relaxed text-gray-600 md:mt-5 md:space-y-3">
              <p>{COMPANY.address}</p>
              {page !== "recruit" && (
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="inline-block min-h-11 leading-[2.75rem] underline decoration-gray-300 underline-offset-4 transition-colors hover:text-bronze"
                >
                  メールで問い合わせる
                </a>
              )}
            </div>
          </div>
          <div
            className={`w-full md:w-[22rem] ${page === "company" ? "lg:w-[34rem]" : "lg:w-[30rem]"}`}
          >
            <nav
              aria-label="フッターメニュー"
              className={`mt-3 flex w-full flex-wrap border-t border-gray-200 pt-2 text-sm md:mt-0 md:border-t-0 md:pt-0 ${
                page === "recruit" ? "justify-start" : "justify-center"
              }`}
            >
              {navItems.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className={`flex min-h-11 items-center justify-center text-center text-gray-600 transition-colors hover:text-bronze md:justify-start md:text-left ${
                    page === "lp"
                      ? "basis-auto px-1.5 sm:px-3"
                      : page === "company"
                        ? "basis-1/2 whitespace-nowrap px-1 lg:basis-1/4 lg:justify-center lg:text-center"
                        : page === "recruit"
                          ? "basis-1/2 whitespace-nowrap px-1 lg:basis-1/3"
                          : "basis-1/3 px-1"
                  }`}
                >
                  {label}
                </a>
              ))}
            </nav>
            {cta && (
              <a
                href={cta.href}
                className={`mx-auto mt-3 flex min-h-11 w-full max-w-xs items-center justify-center rounded-full bg-navy px-5 text-sm font-bold text-white transition-opacity hover:opacity-85 ${
                  page === "recruit" ? "md:mx-0" : "md:mx-auto"
                }`}
              >
                {cta.label}
              </a>
            )}
          </div>
        </div>
        <div className="mt-4 border-t border-gray-200 pt-4 text-center md:mt-8 md:pt-6">
          <a
            href="/privacy"
            className="inline-flex min-h-11 items-center text-xs text-gray-500 underline decoration-gray-300 underline-offset-4 transition-colors hover:text-bronze"
          >
            プライバシーポリシー
          </a>
        </div>
        <p className="mt-1 text-center text-xs leading-relaxed text-gray-400">
          <span className="block md:inline">
            © {new Date().getFullYear()} {COMPANY.name}
          </span>{" "}
          <span className="block md:inline">All Rights Reserved.</span>
        </p>
      </div>
    </footer>
  );
}
