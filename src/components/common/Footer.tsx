import Image from "next/image";
import { COMPANY } from "@/constants/company";

type Props = { page: "lp" | "company" | "recruit" };

export default function Footer({ page }: Props) {
  const navItems =
    page !== "recruit"
      ? [
          { label: "トップ", href: "/" },
          { label: "事業内容", href: "/#services" },
          { label: "会社案内", href: "/company" },
          { label: "お問い合わせ", href: "/#contact" },
          { label: "採用情報", href: "/recruit" },
        ]
      : [
          { label: "募集要項", href: "#jobspec" },
          { label: "働く環境", href: "#promise" },
          { label: "1日の流れ", href: "#schedule" },
          { label: "よくある質問", href: "#faq" },
          { label: "今すぐ応募", href: "#apply" },
        ];

  return (
    <footer className="border-t border-gray-200 bg-offwhite">
      <div className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-16">
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-16">
          <div className="text-center md:text-left">
            <a href={page === "lp" ? "#top" : "/"}>
              <Image
                src="/images/logo-wide.png"
                alt={COMPANY.name}
                width={184}
                height={34}
                className="mx-auto object-contain md:mx-0"
                style={{ height: "auto" }}
              />
            </a>
            <div className="mt-3 space-y-1 text-sm leading-relaxed text-gray-600 md:mt-5 md:space-y-3">
              <p>{COMPANY.address}</p>
              <a
                href={`mailto:${COMPANY.email}`}
                className="inline-block min-h-11 leading-[2.75rem] underline decoration-gray-300 underline-offset-4 transition-colors hover:text-bronze"
              >
                メールで問い合わせる
              </a>
            </div>
          </div>
          <nav className="mt-3 grid w-full grid-cols-6 border-t border-gray-200 pt-2 text-sm md:mt-0 md:w-[22rem] md:max-w-none md:grid-cols-3 md:border-t-0 md:pt-0 lg:w-[30rem]">
            {navItems.map(({ label, href }, index) => (
              <a
                key={href}
                href={href}
                className={`flex min-h-11 items-center justify-center text-center text-gray-600 transition-colors hover:text-bronze md:col-span-1 md:justify-start md:text-left ${
                  index < 3 ? "col-span-2" : "col-span-3"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
        <p className="mt-4 border-t border-gray-200 pt-4 text-center text-xs leading-relaxed text-gray-400 md:mt-8 md:pt-6">
          <span className="block md:inline">
            © {new Date().getFullYear()} {COMPANY.name}
          </span>{" "}
          <span className="block md:inline">All Rights Reserved.</span>
        </p>
      </div>
    </footer>
  );
}
