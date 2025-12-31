// 会社概要
const rows = [
  { k: "会社名", v: "株式会社 外山建設" },
  { k: "所在地", v: "〒955-0014 新潟県三条市西潟14-23" },
  { k: "代表", v: "外山 澄男" },
  { k: "事業内容", v: "外構 / 修繕 / 小規模工事（仮）" },
  { k: "対応エリア", v: "新潟県 県央地区 / 近隣エリア" },
  { k: "許可・資格", v: "建設業許可：〇〇（仮）" },
  { k: "営業時間", v: "8:00〜17:30" },
  { k: "定休日", v: "第2、第4土曜・日曜・祝日・年末年始" },
];

export default function Company() {
  return (
    <section id="company" className="border-t border-slate-100 scroll-mt-4">
      <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          会社概要
        </h2>
        {/* <p className="mt-2 text-slate-700">
          まずは安心してご相談いただけるよう、基本情報を掲載します（仮）。
        </p> */}

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
          <dl className="divide-y divide-slate-200">
            {rows.map((r) => (
              <div
                key={r.k}
                className="grid gap-1 px-4 py-4 md:grid-cols-[180px_1fr] md:gap-4 md:px-6"
              >
                <dt className="text-sm font-medium text-slate-700">{r.k}</dt>
                <dd className="text-sm text-slate-900">{r.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
