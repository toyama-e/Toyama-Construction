const items = [
  {
    category: "建設業許可",
    entries: ["建設業許可番号：○○ 第○○号（差し替え予定）"],
  },
  {
    category: "保有資格",
    entries: [
      "1級土木施工管理技士",
      "2級土木施工管理技士",
      "車両系建設機械運転技能者",
      "小型移動式クレーン運転技能者",
    ],
  },
  {
    category: "加入保険",
    entries: ["建設工事保険（正式名称差し替え予定）", "労働者災害補償保険"],
  },
];

export default function License() {
  return (
    <section id="license" className="scroll-mt-16 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <p className="text-sm font-medium tracking-widest text-gold uppercase">
          License &amp; Qualification
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-black md:text-3xl">
          許可・資格・保険
        </h2>
        <p className="mt-3 text-gray-600">
          適切な許可と資格のもと、安全・確実に施工を行います。
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.category}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-6"
            >
              <h3 className="text-base font-bold text-gold">{item.category}</h3>
              <ul className="mt-3 space-y-2">
                {item.entries.map((e) => (
                  <li key={e} className="text-sm text-gray-700">
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
