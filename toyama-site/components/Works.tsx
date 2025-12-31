// 施工実績（任意）
const works = [
  { title: "駐車場整備（仮）", meta: "〇〇市 / 2週間 / 外構" },
  { title: "屋根の修繕（仮）", meta: "〇〇町 / 3日 / 修繕" },
  { title: "フェンス設置（仮）", meta: "〇〇市 / 1日 / 外構" },
];

export default function Works() {
  return (
    <section id="works" className="border-t border-slate-100 scroll-mt-4">
      <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              施工実績
            </h2>
            <p className="mt-2 text-slate-700">
              実績は随時更新予定です（仮）。
            </p>
          </div>
          <a
            href="#contact"
            className="hidden rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-50 md:inline-flex"
          >
            相談する
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {works.map((w) => (
            <div
              key={w.title}
              className="rounded-2xl border border-slate-200 p-6 shadow-sm"
            >
              <div className="h-24 rounded-xl bg-slate-100" />
              <h3 className="mt-4 font-semibold">{w.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{w.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
