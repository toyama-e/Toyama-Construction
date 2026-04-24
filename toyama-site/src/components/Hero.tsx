import { COMPANY } from "@/constants/company";

const NAV_ITEMS = [
  { label: "事業内容", href: "#services" },
  { label: "許可・資格", href: "#license" },
  { label: "会社概要", href: "#about" },
  { label: "採用情報", href: "#recruit" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden scroll-mt-4">
      {/* 背景 */}
      <div className="absolute inset-0 -z-10">
        <div
          className="hero-bg-a absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/river.png)" }}
        />
        <div
          className="hero-bg-b absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/tanbo.png)" }}
        />
        <div className="absolute inset-0 bg-navy/50" />
      </div>

      {/* Hero内ナビバー */}
      <div className="absolute inset-x-0 top-0 z-20 border-b border-white/10">
        <div className="mx-auto grid max-w-5xl grid-cols-3 items-center px-4 py-3">
          <div />
          <nav className="hidden items-center justify-center gap-4 text-sm md:flex whitespace-nowrap">
            {NAV_ITEMS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-white/80 hover:text-gold transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center justify-end gap-2">
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
      </div>

      {/* メインコンテンツ */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-32 pb-20 md:pt-44 md:pb-36">
        <div className="mb-10">
          <p className="text-xs font-medium tracking-[0.3em] text-gold/70 mb-1">
            株式会社
          </p>
          <p className="text-5xl font-bold tracking-wider text-white md:text-7xl">
            外山建設
          </p>
          <p className="mt-2 text-xs tracking-[0.25em] text-white/50">
            TOYAMA CONSTRUCTION
          </p>
        </div>

        <h1 className="text-2xl font-bold leading-snug tracking-tight text-white md:text-4xl">
          新潟県央の土木・外構工事を、
          <br />
          丁寧に。
        </h1>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#recruit"
            className="inline-flex items-center justify-center rounded-xl bg-gold px-8 py-3 font-medium text-navy hover:opacity-90 transition-opacity"
          >
            採用情報を見る
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-white/50 px-8 py-3 font-medium text-white hover:bg-white/10 transition-colors"
          >
            まずは相談する
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-1 h-24 bg-gradient-to-b from-transparent to-offwhite" />
    </section>
  );
}
