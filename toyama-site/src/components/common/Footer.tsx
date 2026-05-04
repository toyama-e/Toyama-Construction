import Image from "next/image";
import { COMPANY } from "@/constants/company";

type Props = { page: "lp" | "recruit" };

export default function Footer({ page }: Props) {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <a href={page === "recruit" ? "/" : "#top"}>
              <Image
                src="/images/logo-wide.jpg"
                alt={COMPANY.name}
                width={160}
                height={40}
                className="h-10 w-auto object-contain mb-2"
              />
            </a>
            <p className="mt-1 text-sm text-gray-600">{COMPANY.address}</p>
            <p className="mt-1 text-sm text-gray-600">
              <a href={COMPANY.lineUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">電話：LINE通話をかける（受付時間：平日 8:00〜17:30）</a>
            </p>
            <p className="mt-1 text-sm text-gray-600">
              FAX：{COMPANY.fax}
            </p>
            <p className="mt-1 text-sm text-gray-600">
              MAIL：<a href={`mailto:${COMPANY.email}`} className="hover:text-gold transition-colors">{COMPANY.email}</a>
            </p>
          </div>
          {page === "lp" && (
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {[
                { label: "事業内容", href: "#services" },
                { label: "許可・資格", href: "#license" },
                { label: "会社概要", href: "#about" },
                { label: "お問い合わせ", href: "#contact" },
              ].map(({ label, href }) => (
                <a key={href} href={href} className="text-gray-600 hover:text-gold transition-colors">
                  {label}
                </a>
              ))}
              <a href="/recruit" className="text-gray-600 hover:text-gold transition-colors">
                採用情報
              </a>
            </nav>
          )}
        </div>
        <p className="mt-8 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} {COMPANY.name} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
