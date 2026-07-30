import Image from "next/image";
import { COMPANY } from "@/constants/company";

type Props = { page: "lp" | "company" | "recruit" };

export default function Footer({ page }: Props) {
  return (
    <footer className="border-t border-gray-200 bg-offwhite">
      <div className="mx-auto max-w-5xl px-5 py-12 md:px-4 md:py-16">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <a href={page === "lp" ? "#top" : "/"}>
              <Image
                src="/images/logo-wide.png"
                alt={COMPANY.name}
                width={184}
                height={34}
                className="mx-auto object-contain"
                style={{ height: "auto" }}
              />
            </a>
            <div className="mt-5 space-y-3 text-sm leading-relaxed text-gray-600">
              <p>{COMPANY.address}</p>
              <a
                href={`mailto:${COMPANY.email}`}
                className="inline-block min-h-11 leading-[2.75rem] underline decoration-gray-300 underline-offset-4 transition-colors hover:text-bronze"
              >
                メールで問い合わせる
              </a>
            </div>
          </div>
          <nav className="mt-5 grid w-full grid-cols-3 gap-x-2 border-t border-gray-200 pt-4 text-sm md:mt-7 md:max-w-lg">
            {page !== "recruit"
              ? [
                  { label: "トップ", href: "/" },
                  { label: "事業内容", href: "/#services" },
                  { label: "会社案内", href: "/company" },
                  { label: "お問い合わせ", href: "/#contact" },
                  { label: "採用情報", href: "/recruit" },
                ].map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    className="flex min-h-11 items-center text-gray-600 transition-colors hover:text-bronze"
                  >
                    {label}
                  </a>
                ))
              : [
                  { label: "募集要項", href: "#jobspec" },
                  { label: "働く環境", href: "#promise" },
                  { label: "1日の流れ", href: "#schedule" },
                  { label: "よくある質問", href: "#faq" },
                  { label: "今すぐ応募", href: "#apply" },
                ].map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    className="flex min-h-11 items-center text-gray-600 transition-colors hover:text-bronze"
                  >
                    {label}
                  </a>
                ))}
          </nav>
        </div>
        <p className="mt-8 border-t border-gray-200 pt-6 text-center text-xs leading-relaxed text-gray-400">
          <span className="block md:inline">
            © {new Date().getFullYear()} {COMPANY.name}
          </span>{" "}
          <span className="block md:inline">All Rights Reserved.</span>
        </p>
      </div>
    </footer>
  );
}
