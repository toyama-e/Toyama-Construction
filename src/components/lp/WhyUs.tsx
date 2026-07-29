const reasons = [
  {
    num: "01",
    title: "ご要望に合わせ、柔軟に対応",
    desc: "小さな工事・急な依頼もOK。無駄な中間マージンを省き、適正価格でお応えします。",
  },
  {
    num: "02",
    title: "土木から外構まで一式対応",
    desc: "道路・水路・外構・改修を一手に引き受け。窓口がひとつで完結するので手間がかかりません。",
  },
  {
    num: "03",
    title: "新潟県央エリア密着",
    desc: "地元をよく知るスタッフが現地確認から施工まで担当。スピーディな対応が自慢です。",
  },
];

export default function WhyUs() {
  return (
    <section id="strengths" className="scroll-mt-16 bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-12 md:py-24">
        <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-bronze">
          <span className="h-px w-6 bg-bronze" />
          OUR STRENGTHS
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-black md:text-5xl">3つの強み</h2>
        <p className="mt-4 max-w-xl leading-relaxed text-black">
          小さな会社だからこそできる、柔軟で身近な対応をご紹介します。
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
              <h3 className="font-display text-xl font-bold leading-snug text-black md:mt-8 md:text-2xl">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-sub md:mt-4">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
