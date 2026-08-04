const PROMISES = [
  {
    num: "01",
    title: "資格取得は会社が全力サポート",
    descLines: ["入社後に取れる資格もたくさんあります。", "受験費用は全額会社負担。"],
  },
  {
    num: "02",
    title: "会社都合の休みは6日/月まで補償",
    descLines: ["天気や工期の都合で急に休みになっても、", "給与はきちんと守ります。"],
  },
];

export default function Promise() {
  return (
    <section id="promise" className="scroll-mt-16 bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-12 md:py-24">
        <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-bronze">
          <span className="h-px w-6 bg-bronze" />
          Our Promise
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-black md:text-5xl">
          入社後の2つの約束
        </h2>

        <div className="mt-8 border-t border-navy/15 md:mt-12 lg:grid lg:grid-cols-2">
          {PROMISES.map((p) => (
            <div
              key={p.num}
              className="grid grid-cols-[48px_1fr] border-b border-navy/15 py-6 lg:block lg:border-b-0 lg:border-r lg:px-7 lg:py-8 lg:last:border-r-0"
            >
              <span className="row-span-2 text-sm font-bold tracking-widest text-bronze">
                {p.num}
              </span>
              <p className="font-display text-xl font-bold leading-snug text-black lg:mt-8 lg:text-2xl">
                {p.num === "02" ? (
                  <>
                    会社都合の休みは
                    <br className="md:hidden" />
                    6日/月まで補償
                  </>
                ) : (
                  p.title
                )}
              </p>
              <p className="col-span-2 mt-4 text-sm leading-relaxed text-sub lg:mt-4">
                {p.descLines.map((line) => (
                  <span key={line} className="block md:inline">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
