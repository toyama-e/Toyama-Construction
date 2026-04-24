const PROMISES = [
  {
    num: "01",
    title: "入社後3ヶ月は先輩と2人体制",
    desc: "ひとりで現場に出すことはしません。わからないことは、現場でその場で一緒に解決します。",
  },
  {
    num: "02",
    title: "資格取得は会社が全力サポート",
    desc: "入社後に取れる資格もたくさんあります。受験費用は全額会社負担。",
  },
  {
    num: "03",
    title: "会社都合の休みは6日/月まで補償",
    desc: "天気や工期の都合で急に休みになっても、給与はきちんと守ります。",
  },
];

export default function Promise() {
  return (
    <section className="border-t border-navy/10 scroll-mt-16">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <p className="text-sm font-medium tracking-widest text-gold uppercase">Our Promise</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy md:text-3xl">
          入社後の3つの約束
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {PROMISES.map((p) => (
            <div key={p.num} className="rounded-2xl border border-navy/15 bg-white p-6 shadow-sm">
              <span className="text-3xl font-black text-gold/50">{p.num}</span>
              <p className="mt-3 font-bold text-navy leading-snug">{p.title}</p>
              <p className="mt-2 text-sm text-sub leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
