const reasons = [
  {
    num: "01",
    title: "ご要望に合わせ、柔軟に対応",
    descLines: ["小さな工事・急な依頼もOK。", "中間コストを抑え、適正価格で対応します。"],
  },
  {
    num: "02",
    title: "土木から外構まで一式対応",
    descLines: ["道路・水路・外構・改修まで対応。", "相談から施工まで、窓口ひとつで完結します。"],
  },
  {
    num: "03",
    title: "新潟県央エリア密着",
    descLines: ["地元スタッフが現地確認から施工まで担当。", "スピーディな対応が自慢です。"],
  },
];

export default function WhyUs() {
  return (
    <section id="strengths" className="scroll-mt-16 bg-white">
      <div className="mx-auto max-w-5xl px-3 py-12 min-[360px]:px-4 md:py-24">
        <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-bronze">
          <span className="h-px w-6 bg-bronze" />
          OUR STRENGTHS
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-black md:text-5xl">3つの強み</h2>
        <p className="mt-4 max-w-xl leading-[1.9] text-sub">
          小さな会社だからこそできる、
          <br className="md:hidden" />
          柔軟で身近な対応をご紹介します。
        </p>

        <div className="mt-8 border-t border-navy/15 md:mt-12 md:grid md:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="grid grid-cols-[48px_1fr] border-b border-navy/15 py-6 md:block md:border-b-0 md:border-r md:px-7 md:py-8 md:last:border-r-0"
            >
              <span className="row-span-2 text-sm font-bold tracking-widest text-bronze">
                {r.num}
              </span>
              <h3 className="font-display text-xl font-bold leading-[1.6] text-black md:mt-8 md:text-2xl">
                {r.title === "ご要望に合わせ、柔軟に対応" ? (
                  <>
                    ご要望に合わせ、
                    <br />
                    柔軟に対応
                  </>
                ) : r.title === "土木から外構まで一式対応" ? (
                  <>
                    土木から外構まで
                    <br />
                    一式対応
                  </>
                ) : (
                  r.title
                )}
              </h3>
              <p className="col-span-2 mt-4 text-sm leading-[1.9] text-sub md:mt-4 md:block">
                {r.descLines.map((line) => (
                  <span key={line} className="block md:inline">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
