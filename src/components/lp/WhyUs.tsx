const reasons = [
  {
    num: "01",
    title: "他社より安く、柔軟に対応",
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
    <section className="bg-offwhite">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <p className="text-sm font-medium uppercase tracking-widest text-gold">Why Us</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-black md:text-3xl">
          選ばれる理由
        </h2>
        <p className="mt-3 text-black">地域のお客様に長く選ばれ続ける、3つの強みをご紹介します。</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl border border-navy/15 bg-gray-100 p-6 shadow-sm"
            >
              <span className="text-3xl font-black text-gold/50">{r.num}</span>
              <h3 className="mt-3 text-lg font-bold text-black">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sub">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
