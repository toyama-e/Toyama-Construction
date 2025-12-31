// 採用
const jobs = [
  {
    title: "現場スタッフ（正社員 / 仮）",
    items: [
      "仕事内容：土木工事 現場作業・補助",
      "勤務地：新潟県 県央地区/近隣エリア",
      "勤務時間：応相談 実質8時間程度（休憩あり / 仮）",
      "給与：月給220,000円〜（経験考慮 / 仮）",
      "応募：電話",
      "休日：第2・第4土曜、日曜、祝日、年末年始",
      "会社都合休み：6日/月まで補償"
    ],
  },
];

export default function Recruit() {
  return (
    <section id="recruit" className="border-t border-slate-100 scroll-mt-4">
      <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          採用情報
        </h2>
        <p className="mt-2 text-slate-700">
          少人数だからこそ、丁寧に教えます。
          <br className="sm:hidden" />
          未経験でもご相談ください。
        </p>

        <div className="mt-8 space-y-4">
          {jobs.map((j) => (
            <div
              key={j.title}
              className="rounded-2xl border border-slate-200 p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold">{j.title}</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                {j.items.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:opacity-90"
                  href="#contact"
                >
                  応募・相談する
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium hover:bg-slate-50"
                  href="tel:000-0000-0000"
                >
                  電話で応募
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
