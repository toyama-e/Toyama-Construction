const FAQS: {
  q: string;
  a: string;
  mobileQuestionLines?: string[];
  mobileAnswerLines?: string[];
  desktopAnswerLines?: string[];
  largeAnswerLines?: string[];
}[] = [
  {
    q: "40代・50代でも応募できますか？",
    a: "はい。年齢は問いません。現在のスタッフも幅広い年齢層です。「丁寧にやろう」という姿勢さえあれば大丈夫です。",
    mobileAnswerLines: [
      "はい。",
      "年齢は問いません。",
      "現在のスタッフも幅広い年齢層です。",
      "「丁寧にやろう」という姿勢さえあれば",
      "大丈夫です。",
    ],
    desktopAnswerLines: [
      "はい。年齢は問いません。現在のスタッフも幅広い年齢層です。",
      "「丁寧にやろう」という姿勢さえあれば大丈夫です。",
    ],
  },
  {
    q: "体力に自信がなくても大丈夫ですか？",
    a: "はい。最初は重い作業を任せません。慣れながら、少しずつ担当範囲を広げます。",
    largeAnswerLines: [
      "はい。最初は重い作業を任せません。",
      "慣れながら、少しずつ担当範囲を広げます。",
    ],
  },
  {
    q: "車の免許以外に、入社前に必要な資格はありますか？",
    a: "普通免許があれば問題ありません。現場で必要な特殊免許は、入社後に会社の支援で取得できます。",
    mobileQuestionLines: ["車の免許以外に、", "必要な資格はありますか？"],
    mobileAnswerLines: [
      "普通免許があれば問題ありません。",
      "現場で必要な特殊免許は、",
      "入社後に会社の支援で取得できます。",
    ],
    largeAnswerLines: [
      "普通免許があれば問題ありません。",
      "現場で必要な特殊免許は、入社後に会社の支援で取得できます。",
    ],
  },
];

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-16 bg-offwhite">
      <div className="mx-auto max-w-5xl px-4 py-12 md:py-24">
        <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-bronze">
          <span className="h-px w-6 bg-bronze" />
          FAQ
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-black md:text-5xl">
          よくある質問
        </h2>

        <div className="mt-8 divide-y divide-bronze/50 border-y border-bronze/60 md:mt-12">
          {FAQS.map((f) => (
            <div key={f.q} className="grid gap-3 py-6 md:py-8 lg:grid-cols-[1fr_1.4fr] lg:gap-10">
              <p className="font-display text-lg font-bold text-black">
                <span className="mr-1.5 font-bold text-bronze">Q.</span>
                {f.mobileQuestionLines ? (
                  <>
                    <span className="md:hidden">
                      {f.mobileQuestionLines.map((line, index) => (
                        <span
                          key={line}
                          className={index === 0 ? "inline" : "block min-[360px]:pl-7"}
                        >
                          {line}
                        </span>
                      ))}
                    </span>
                    <span className="hidden md:inline">{f.q}</span>
                  </>
                ) : (
                  f.q
                )}
              </p>
              <p className="text-sm leading-relaxed text-black min-[360px]:pl-5 lg:pl-0">
                <span className="font-medium text-black">A.</span>　
                <span className="md:hidden">
                  {(f.mobileAnswerLines ?? f.a.match(/[^。]+。?/g) ?? []).map((sentence, index) => (
                    <span key={sentence} className={index === 0 ? "inline" : "block"}>
                      {sentence}
                    </span>
                  ))}
                </span>
                <span className={`hidden md:inline ${f.largeAnswerLines ? "lg:hidden" : ""}`}>
                  {f.desktopAnswerLines
                    ? f.desktopAnswerLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))
                    : f.a}
                </span>
                {f.largeAnswerLines && (
                  <span className="hidden lg:inline">
                    {f.largeAnswerLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
