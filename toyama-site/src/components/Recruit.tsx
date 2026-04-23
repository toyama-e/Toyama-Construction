import { COMPANY } from "@/constants/company";

const jobs = [
  {
    title: "現場スタッフ（正社員）",
    items: [
      `仕事内容：土木工事 現場作業・補助`,
      `勤務地：${COMPANY.area}`,
      `勤務時間：実質8時間程度（休憩含む）`,
      `給与：月給220,000円〜（経験・能力考慮）`,
      `休日：${COMPANY.holiday}`,
      `会社都合休み：6日/月まで補償`,
      `応募方法：お電話にてご連絡ください`,
    ],
  },
];

export default function Recruit() {
  return (
    <section id="recruit" className="border-t border-navy/10 scroll-mt-16">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <p className="text-sm font-medium tracking-widest text-gold uppercase">
          Recruit
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy md:text-3xl">
          採用情報
        </h2>
        <p className="mt-3 text-sub">
          少人数だからこそ、丁寧に教えます。未経験の方もお気軽にご相談ください。
        </p>

        <div className="mt-10 space-y-5">
          {jobs.map((j) => (
            <div
              key={j.title}
              className="rounded-2xl border border-navy/15 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-navy">{j.title}</h3>
              <ul className="mt-4 space-y-2">
                {j.items.map((x) => (
                  <li key={x} className="flex gap-2 text-sm text-sub">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {x}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${COMPANY.tel}`}
                  className="inline-flex items-center justify-center rounded-xl bg-navy px-5 py-3 text-sm font-medium text-white hover:opacity-90 transition-opacity"
                >
                  電話で応募する　{COMPANY.tel}
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl border border-navy/30 px-5 py-3 text-sm font-medium text-navy hover:bg-navy/5 transition-colors"
                >
                  フォームで問い合わせる
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
