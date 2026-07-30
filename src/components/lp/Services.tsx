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
    <section id="services" className="scroll-mt-16 bg-white">
      <div className="mx-auto max-w-6xl py-12 md:px-4 md:py-24">
        <div
          role="img"
          aria-label="事業内容に掲載する施工写真の仮置き"
          className="relative h-[min(86vw,420px)] bg-[#A9B4BA] md:h-[560px]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 px-5 pb-7 text-white md:px-10 md:pb-10">
            <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/80 md:text-xs md:tracking-[0.2em]">
              <span className="h-px w-5 bg-white md:w-6" />
              Services
            </p>
            <h2 className="mt-3 text-[1.8rem] font-bold leading-[1.5] tracking-tight md:text-5xl md:leading-tight">
              事業内容
            </h2>
          </div>
          <span className="absolute right-4 top-4 text-[10px] font-bold tracking-[0.18em] text-navy/55 md:text-xs">
            PHOTO MOCK
          </span>
        </div>

        <div className="px-5 pt-7 md:px-0 md:pt-9">
          <p className="text-base leading-[2] text-sub">
            現場の状況に合わせて、
            <br />
            最適な進め方をご提案します。
          </p>
          <div className="mt-7 border-t border-bronze/60 md:mt-9">
            {services.map((s, index) => (
              <div
                key={s.title}
                className="grid grid-cols-[42px_1fr] gap-2 border-b border-bronze/60 py-5"
              >
                <span className="text-xs font-bold text-bronze">0{index + 1}</span>
                <h3 className="font-display text-xl font-bold text-black md:text-2xl">{s.title}</h3>
                <p className="col-start-2 mt-1 text-sm leading-[1.9] text-sub">
                  {s.desc.split("。").map(
                    (sentence) =>
                      sentence && (
                        <span key={sentence} className="block">
                          {sentence}。
                        </span>
                      )
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
