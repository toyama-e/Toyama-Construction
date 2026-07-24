const services = [
  {
    title: "土木一式工事",
    desc: "道路・水路・造成など、土木工事全般に対応。公共・民間を問わず幅広く請け負います。",
  },
  {
    title: "外構工事",
    desc: "駐車場・フェンス・門扉・舗装など。使い勝手と安全性を両立した外構を提案します。",
  },
  {
    title: "改修・修繕",
    desc: "老朽化した構造物の補修・修繕に対応。現地確認を行い、最適な工法で丁寧に施工します。",
  },
  {
    title: "小規模リフォーム",
    desc: "部分的なリフォームや住宅周りの改善工事もお任せください。お困りごとをスピーディに解決します。",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-16 bg-offwhite">
      <div className="mx-auto max-w-5xl px-4 py-12 md:py-24">
        <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-bronze">
          <span className="h-px w-6 bg-bronze" />
          Services
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-black md:text-5xl">事業内容</h2>
        <p className="mt-4 max-w-xl leading-relaxed text-black">
          現場の状況に合わせて、最適な進め方をご提案します。
        </p>

        <div className="mt-8 border-t border-bronze/60 md:mt-12">
          {services.map((s, index) => (
            <div
              key={s.title}
              className="group grid grid-cols-[42px_1fr] gap-2 border-b border-bronze/60 py-5 md:grid-cols-[64px_220px_1fr_24px] md:items-center md:gap-5 md:py-7"
            >
              <span className="text-xs font-bold text-bronze">0{index + 1}</span>
              <h3 className="font-display text-xl font-bold text-black md:text-2xl">{s.title}</h3>
              <p className="col-start-2 mt-1 text-sm leading-relaxed text-sub md:col-start-auto md:mt-0">
                {s.desc}
              </p>
              <span className="hidden text-xl text-bronze transition-transform group-hover:translate-x-1 md:block">
                →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
