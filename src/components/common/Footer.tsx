import Image from "next/image";
import { COMPANY } from "@/constants/company";

type Props = { page: "lp" | "recruit" };

export default function Footer({ page }: Props) {
  return (
    <footer className="border-t border-gray-200 bg-offwhite">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <a href={page === "recruit" ? "/" : "#top"}>
              <Image
                src="/images/logo-wide.png"
                alt={COMPANY.name}
                width={160}
                height={29}
                className="mb-2 object-contain"
                style={{ height: "auto" }}
              />
            </a>
            <p className="mt-1 text-sm text-gray-600">{COMPANY.address}</p>
            <p className="mt-1 text-sm text-gray-600">
              <a
                href={COMPANY.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-bronze"
              >
                電話：LINE通話をかける（受付時間：平日 8:00〜17:30）
              </a>
            </p>
            <p className="mt-1 text-sm text-gray-600">FAX：{COMPANY.fax}</p>
            <p className="mt-1 text-sm text-gray-600">
              <a
                href={COMPANY.lineAddUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-bronze"
              >
                LINE：{COMPANY.line}
              </a>
            </p>
            <p className="mt-1 text-sm text-gray-600">
              MAIL：
              <a href={`mailto:${COMPANY.email}`} className="transition-colors hover:text-bronze">
                {COMPANY.email}
              </a>
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {page === "lp"
              ? [
                  { label: "事業内容", href: "#services" },
                  { label: "許可・資格", href: "#license" },
                  { label: "会社概要", href: "#about" },
                  { label: "お問い合わせ", href: "#contact" },
                  { label: "採用情報", href: "/recruit" },
                ].map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    className="text-gray-600 transition-colors hover:text-bronze"
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
                    className="text-gray-600 transition-colors hover:text-bronze"
                  >
                    {label}
                  </a>
                ))}
          </nav>
        </div>
        <p className="mt-8 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} {COMPANY.name} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
