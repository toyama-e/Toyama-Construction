import { COMPANY } from "@/constants/company";

export default function Footer() {
  return (
    <footer className="border-t border-navy/20 bg-ink">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-bold text-white">{COMPANY.name}</p>
            <p className="mt-1 text-sm text-white/60">{COMPANY.address}</p>
            <p className="mt-1 text-sm text-white/60">TEL：{COMPANY.tel}</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
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
                className="text-white/60 hover:text-gold transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
        <p className="mt-8 text-center text-xs text-white/40">
          © {new Date().getFullYear()} {COMPANY.name} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
