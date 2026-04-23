import { COMPANY } from "@/constants/company";

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

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 md:py-32">
        <p className="text-sm font-medium tracking-widest text-gold uppercase">
          Civil Engineering &amp; Exterior Construction
        </p>
        <h1 className="mt-4 text-2xl font-bold leading-snug tracking-tight text-white md:text-4xl">
          地域の暮らしを支える、
          <br />
          確かな技術力。
        </h1>
        <p className="mt-5 max-w-lg leading-relaxed text-white/80 md:text-lg">
          {COMPANY.name}は、{COMPANY.area}を中心に
          <br />
          土木一式工事・外構工事を手がける建設会社です。
          <br />
          外構・改修・小規模工事まで、現場目線で丁寧に進めます。
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-gold px-6 py-3 font-medium text-navy hover:opacity-90 transition-opacity"
          >
            まずは相談する
          </a>
          <a
            href="#recruit"
            className="inline-flex items-center justify-center rounded-xl border border-white/50 px-6 py-3 font-medium text-white hover:bg-white/10 transition-colors"
          >
            採用情報を見る
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {[`対応エリア：${COMPANY.area}`, "見積り無料", "地域密着"].map(
            (tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/15 px-4 py-1 text-sm text-white backdrop-blur-sm"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-1 h-24 bg-gradient-to-b from-transparent to-offwhite" />
    </section>
  );
}
