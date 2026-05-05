import { COMPANY } from "@/constants/company";

const SPECS = [
  { label: "仕事内容", value: "土木工事の現場作業・補助（道路・水路・外構など）" },
  { label: "勤務地", value: COMPANY.area },
  { label: "勤務時間", value: "7:30〜17:30（実働8時間・休憩1時間）" },
  { label: "給与", value: "月給220,000円〜（経験・能力を考慮）" },
  { label: "昇給", value: "年1回（実績・資格取得を評価）" },
  { label: "休日", value: COMPANY.holiday },
  { label: "会社都合休み", value: "6日/月まで補償" },
  { label: "応募資格", value: "普通自動車免許（AT可）／未経験可" },
  { label: "待遇", value: "社会保険完備・資格取得費用全額会社負担" },
  { label: "応募方法", value: "お電話またはメールにてご連絡ください" },
];

export default function JobSpec() {
  return (
    <section id="jobspec" className="scroll-mt-16 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <p className="text-sm font-medium tracking-widest text-gold uppercase">Job Details</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-black md:text-3xl">
          現場スタッフ（正社員）募集要項
        </h2>

        <div className="mt-10 rounded-2xl border border-navy/15 bg-gray-100 shadow-sm overflow-hidden">
          <dl>
            {SPECS.map((s, i) => (
              <div
                key={s.label}
                className={`flex gap-4 px-6 py-4 text-sm ${i % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
              >
                <dt className="w-28 shrink-0 font-medium text-black">{s.label}</dt>
                <dd className="text-sub">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
