// 事業内容

const services = [
  {
    title: "外構工事",
    desc: (
      <>
        駐車場・フェンス・門扉など。
        <br className="sm:hidden" />
        使い勝手と安全性を両立。
      </>
    ),
  },
  {
    title: "改修・修繕",
    desc: (
      <>
        雨漏り、段差、老朽化の補修など。
        <br className="sm:hidden" />
        現地確認から対応。
      </>
    ),
  },
  {
    title: "小規模リフォーム",
    desc: (
      <>
        部分的なリフォームもOK。
        <br className="sm:hidden" />
        暮らしの困りごとを改善。
      </>
    ),
  },
  {
    title: "公共・法人対応（仮）",
    desc: "小規模案件や継続保守など、柔軟にご相談ください。"
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-slate-100 scroll-mt-4">
      <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          事業内容
        </h2>
        <p className="mt-2 text-slate-700">
          現場の状況に合わせて、最適な進め方をご提案します（仮）。
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-slate-200 p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
