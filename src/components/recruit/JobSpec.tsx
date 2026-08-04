import { COMPANY } from "@/constants/company";

const SPECS: { label: string; value: string; mobileLines?: string[] }[] = [
  {
    label: "仕事内容",
    value: "土木工事の現場作業・補助（道路・水路・外構など）",
    mobileLines: ["土木工事の現場作業・補助", "（道路・水路・外構など）"],
  },
  { label: "勤務地", value: COMPANY.area },
  {
    label: "勤務時間",
    value: "7:30〜17:30（実働8時間・休憩1時間）",
    mobileLines: ["7:30〜17:30", "（実働8時間・休憩1時間）"],
  },
  {
    label: "給与",
    value: "月給220,000円〜（経験・能力を考慮）",
    mobileLines: ["月給220,000円〜", "（経験・能力を考慮）"],
  },
  { label: "昇給", value: "年1回（実績・資格取得を評価）" },
  {
    label: "休日",
    value: COMPANY.holiday,
    mobileLines: ["第2・第4土曜・日曜・祝日", "年末年始"],
  },
  { label: "会社都合休み", value: "6日/月まで補償" },
  {
    label: "応募資格",
    value: "普通自動車免許（AT可）/未経験可",
    mobileLines: ["普通自動車免許（AT可）", "未経験可"],
  },
  {
    label: "待遇",
    value: "社会保険完備・資格取得費用全額会社負担",
    mobileLines: ["社会保険完備", "資格取得費用全額会社負担"],
  },
  {
    label: "応募方法",
    value: "LINE通話・LINEチャット・メールにてご連絡ください",
    mobileLines: ["LINE通話・LINEチャット", "メールにてご連絡ください"],
  },
];

export default function JobSpec() {
  const primarySpecs = SPECS.slice(0, 4);
  const secondarySpecs = SPECS.slice(4);

  const renderRows = (specs: typeof SPECS, startIndex = 0) =>
    specs.map((s, i) => (
      <div
        key={s.label}
        className={`grid grid-cols-[96px_1fr] gap-3 px-4 py-3 text-sm sm:flex sm:gap-4 sm:px-6 sm:py-4 ${
          (i + startIndex) % 2 === 0 ? "bg-gray-100" : "bg-white"
        }`}
      >
        <dt className="font-medium text-black sm:w-28 sm:shrink-0">{s.label}</dt>
        <dd className="min-w-0 text-sub">
          {s.mobileLines ? (
            <>
              <span className="md:hidden">
                {s.mobileLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
              <span className="hidden md:inline">{s.value}</span>
            </>
          ) : (
            s.value
          )}
        </dd>
      </div>
    ));

  return (
    <section id="jobspec" className="scroll-mt-16 bg-offwhite">
      <div className="mx-auto max-w-5xl px-4 py-12 md:py-24">
        <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-bronze">
          <span className="h-px w-6 bg-bronze" />
          Job Details
        </p>
        <h2 className="mt-3 text-[1.7rem] font-bold leading-snug tracking-tight text-black md:text-5xl">
          現場スタッフ（正社員）
          <br className="md:hidden" />
          募集要項
        </h2>

        <div className="mt-8 overflow-hidden border-y border-bronze/60 bg-gray-100 md:mt-12 md:max-w-4xl">
          <dl>{renderRows(primarySpecs)}</dl>
          <details className="group md:hidden">
            <summary className="flex min-h-12 cursor-pointer list-none items-center justify-center border-t border-navy/10 bg-white text-sm font-bold text-ink">
              <span className="group-open:hidden">詳しい募集要項を見る +</span>
              <span className="hidden group-open:inline">閉じる -</span>
            </summary>
            <dl>{renderRows(secondarySpecs, primarySpecs.length)}</dl>
          </details>
          <dl className="hidden md:block">{renderRows(secondarySpecs, primarySpecs.length)}</dl>
        </div>
      </div>
    </section>
  );
}
