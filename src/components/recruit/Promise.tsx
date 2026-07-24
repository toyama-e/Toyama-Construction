const PROMISES = [
  {
    num: "01",
    title: "資格取得は会社が全力サポート",
    desc: "入社後に取れる資格もたくさんあります。受験費用は全額会社負担。",
  },
  {
    num: "02",
    title: "会社都合の休みは6日/月まで補償",
    desc: "天気や工期の都合で急に休みになっても、給与はきちんと守ります。",
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

        <div className="mt-8 border-t border-navy/15 md:mt-12 md:grid md:grid-cols-2">
          {PROMISES.map((p) => (
            <div
              key={p.num}
              className="grid grid-cols-[48px_1fr] border-b border-navy/15 py-6 md:block md:border-b-0 md:border-r md:px-7 md:py-8 md:last:border-r-0"
            >
              <span className="row-span-2 text-sm font-bold tracking-widest text-bronze">
                {p.num}
              </span>
              <p className="font-display text-xl font-bold leading-snug text-black md:mt-8 md:text-2xl">
                {p.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-sub md:mt-4">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
