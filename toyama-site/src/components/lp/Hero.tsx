import { COMPANY } from "@/constants/company";

const NAV_ITEMS = [
  { label: "事業内容", href: "#services" },
  { label: "許可・資格", href: "#license" },
  { label: "会社概要", href: "#about" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden scroll-mt-4">
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
              電話：{COMPANY.tel}
            </a>
            <a
              href="/recruit"
              className="rounded-full bg-gold px-3 py-2 text-sm font-medium text-navy hover:opacity-90 transition-opacity"
            >
              正社員募集中！
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-32 pb-20 md:pt-44 md:pb-36">
        <div className="mb-10">
          <p className="text-3xl font-bold text-white md:text-5xl">{COMPANY.name}</p>
        </div>

        <p className="mb-2 text-sm font-medium tracking-widest text-gold/80">
          TOYAMA CONSTRUCTION
        </p>

        <h1 className="text-2xl font-bold leading-snug tracking-tight text-white md:text-4xl">
          新潟県 県央地域の土木・外構工事
        </h1>

        <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
          ご自宅の駐車場・お庭の整備や工事など、お任せください。
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
