const services = [
  {
    title: "土木一式工事",
    descLines: ["道路、水路、造成など、", "土木工事全般に対応します。"],
    narrowLines: ["道路、水路、造成など、", "土木工事全般に対応します。"],
  },
  {
    title: "外構工事",
    descLines: ["駐車場、フェンス、舗装など、", "使いやすく安全な外構をつくります。"],
    narrowLines: ["駐車場、フェンス、舗装など、", "使いやすく安全な", "外構をつくります。"],
  },
  {
    title: "改修・修繕",
    descLines: ["老朽化した構造物を確認し、", "適切な方法で修繕します。"],
    narrowLines: ["老朽化した構造物を確認し、", "適切な方法で修繕します。"],
  },
  {
    title: "小規模リフォーム",
    descLines: ["住宅周りの小さな改修やリフォームにも、", "対応します。"],
    narrowLines: ["住宅周りの小さな改修や", "リフォームにも、", "対応します。"],
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-16 bg-white">
      <div className="mx-auto max-w-6xl py-12 md:px-4 md:py-24">
        <div
          role="img"
          aria-label="事業内容に掲載する本番写真の仮置き"
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
            <span className="min-[360px]:hidden">
              現場に合わせて、
              <br />
              最適な工事をご提案します。
            </span>
            <span className="hidden min-[360px]:inline">
              現場に合わせて、最適な工事をご提案します。
            </span>
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
                  <span className="min-[360px]:hidden">
                    {s.narrowLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                  <span className="hidden min-[360px]:inline">
                    {s.descLines.map((line) => (
                      <span key={line} className="block md:inline">
                        {line}
                      </span>
                    ))}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
