const FAQS = [
  {
    q: "40代・50代でも応募できますか？",
    a: "はい。年齢は問いません。現在のスタッフも幅広い年齢層です。「丁寧にやろう」という姿勢さえあれば大丈夫です。",
  },
  {
    q: "体力に自信がなくても大丈夫ですか？",
    a: "最初はそれほど重い作業はありません。慣れながら少しずつ担当範囲を広げていきます。",
  },
  {
    q: "車の免許以外に、入社前に必要な資格はありますか？",
    a: "普通免許があれば問題ありません。現場で必要な特殊免許は、入社後に会社がサポートして取得できます。",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-16 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <p className="text-sm font-medium tracking-widest text-gold uppercase">FAQ</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-black md:text-3xl">
          よくある質問
        </h2>

        <div className="mt-10 space-y-6">
          {FAQS.map((f) => (
            <div key={f.q} className="rounded-2xl border border-navy/15 bg-gray-100 p-6 shadow-sm">
              <p className="font-medium text-black">
                <span className="mr-1.5 font-bold text-gold">Q.</span>{f.q}
              </p>
              <p className="mt-3 pl-5 text-sm text-black">
                <span className="font-medium text-black">A.</span>　{f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
