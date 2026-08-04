import { COMPANY } from "@/constants/company";

const items = [
  {
    category: "建設業許可",
    entries: [COMPANY.constructionLicense],
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
    entries: COMPANY.insurance,
  },
];

export default function License() {
  return (
    <section id="license" className="scroll-mt-16 bg-offwhite">
      <div className="mx-auto max-w-5xl px-4 py-12 md:py-24">
        <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-bronze">
          <span className="h-px w-6 bg-bronze" />
          <span className="min-[360px]:hidden">License</span>
          <span className="hidden min-[360px]:inline">License &amp; Qualification</span>
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-black md:text-5xl">
          許可・資格・保険
        </h2>
        <p className="mt-4 max-w-xl leading-[1.9] text-sub">
          適切な許可と資格のもと、
          <br className="md:hidden" />
          安全・確実に施工を行います。
        </p>

        <div className="mt-8 border-t border-bronze/60 md:mt-12 md:grid md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.category}
              className="border-b border-bronze/60 py-6 md:border-b-0 md:border-r md:px-7 md:py-8 md:last:border-r-0"
            >
              <h3 className="font-display text-xl font-bold text-black">{item.category}</h3>
              <ul className="mt-4 space-y-2">
                {item.entries.map((e) => (
                  <li key={e} className="break-words text-sm leading-[1.9] text-gray-700">
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
