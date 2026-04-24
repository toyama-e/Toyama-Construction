const CAREER = [
  {
    phase: "スタート",
    period: "入社〜6ヶ月",
    desc: "先輩と一緒に現場補助。道具の使い方・安全ルールを体で覚える。",
  },
  {
    phase: "資格取得",
    period: "〜1年",
    desc: "2級土木施工管理技士を受験。費用・勉強時間は会社がサポート。",
  },
  {
    phase: "独り立ち",
    period: "2〜3年",
    desc: "担当現場を任される。現場リーダー候補へ。",
  },
  {
    phase: "ステップアップ",
    period: "5年〜",
    desc: "1級取得・工事全体の管理へ。給与も上がります。",
  },
];

export default function CareerPath() {
  return (
    <section className="border-t border-navy/10 scroll-mt-16">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <p className="text-sm font-medium tracking-widest text-gold uppercase">Career Path</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy md:text-3xl">
          キャリアパス
        </h2>

        <div className="mt-10 space-y-0">
          {CAREER.map((c, i) => (
            <div key={c.phase} className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                  {i + 1}
                </span>
                {i < CAREER.length - 1 && (
                  <div className="mt-1 w-px flex-1 min-h-8 bg-navy/20" />
                )}
              </div>
              <div className="pb-6 pt-0.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-bold text-navy text-sm">{c.phase}</span>
                  <span className="text-xs text-sub">{c.period}</span>
                </div>
                <p className="mt-1 text-sm text-sub leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
