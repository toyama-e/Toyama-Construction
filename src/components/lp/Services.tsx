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
    <section
      id="services"
      className="scroll-mt-16 bg-gradient-to-b from-offwhite via-warmmiddle to-taupe"
    >
      <div className="mx-auto max-w-6xl py-12 md:px-4 md:py-24">
        <div className="grid grid-cols-[44%_56%] items-stretch md:grid-cols-[1.12fr_0.88fr] md:items-center md:gap-14">
          <div className="flex flex-col justify-center px-5 py-8 md:px-0 md:py-0">
            <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-bronze md:gap-3 md:text-xs md:tracking-[0.2em]">
              <span className="h-px w-5 bg-bronze md:w-6" />
              Services
            </p>
            <h2 className="mt-3 text-[1.7rem] font-bold tracking-tight text-black md:text-5xl">
              事業内容
            </h2>
            <p className="mt-4 text-sm leading-[1.9] text-black md:max-w-xl md:text-base">
              現場の状況に合わせて、最適な進め方をご提案します。
            </p>
          </div>

          <div
            role="img"
            aria-label="事業内容に掲載する施工写真の仮置き"
            className="flex min-h-72 items-center justify-center bg-[#BCC3C8] md:aspect-[3/4] md:min-h-0"
          >
            <span className="text-[10px] font-bold tracking-[0.18em] text-navy/65 md:text-xs md:tracking-[0.2em]">
              PHOTO MOCK
            </span>
          </div>
        </div>

        <div className="px-4">
          <div className="mt-8 border-t border-bronze/60 md:mt-12">
            {services.map((s, index) => (
              <div
                key={s.title}
                className="grid grid-cols-[42px_1fr] gap-2 border-b border-bronze/60 py-5"
              >
                <span className="text-xs font-bold text-bronze">0{index + 1}</span>
                <h3 className="font-display text-xl font-bold text-black md:text-2xl">{s.title}</h3>
                <p className="col-start-2 mt-1 text-sm leading-relaxed text-sub">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
