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
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <p className="text-sm font-medium uppercase tracking-widest text-gold">Services</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-black md:text-3xl">事業内容</h2>
        <p className="mt-3 text-black">現場の状況に合わせて、最適な進め方をご提案します。</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-navy/15 bg-gray-100 p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-black">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sub">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
