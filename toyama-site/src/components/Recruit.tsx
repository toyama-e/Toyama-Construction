import { COMPANY } from "@/constants/company";

const PROMISES = [
  {
    num: "01",
    title: "入社後3ヶ月は先輩と2人体制",
    desc: "ひとりで現場に出すことはしません。わからないことは、現場でその場で一緒に解決します。",
  },
  {
    num: "02",
    title: "資格取得は会社が全力サポート",
    desc: "受験費用は全額会社負担。勉強する時間も、業務の中で確保します。",
  },
  {
    num: "03",
    title: "会社都合の休みは6日/月まで補償",
    desc: "天気や工期の都合で急に休みになっても、給与はきちんと守ります。",
  },
];

const SCHEDULE = [
  { time: "07:30", task: "集合・朝礼（現場または事務所）" },
  { time: "08:00", task: "作業開始（掘削・舗装・外構など）" },
  { time: "12:00", task: "昼休憩（1時間）" },
  { time: "13:00", task: "午後作業" },
  { time: "17:00", task: "片付け・日報記録" },
  { time: "17:30", task: "終業" },
];

const CAREER = [
  {
    phase: "スタート",
    period: "入社〜6ヶ月",
    desc: "先輩と一緒に現場補助。道具の使い方・安全ルールを体で覚える。",
  },
  {
    phase: "資格取得",
    period: "〜1年",
    desc: "2級土木施工管理技士を受験。費用・勉強時間は会社がサポート。",
  },
  {
    phase: "独り立ち",
    period: "2〜3年",
    desc: "担当現場を任される。現場リーダー候補へ。",
  },
  {
    phase: "ステップアップ",
    period: "5年〜",
    desc: "1級取得・工事全体の管理へ。給与も上がります。",
  },
];

const SPECS = [
  { label: "仕事内容", value: "土木工事の現場作業・補助（道路・水路・外構など）" },
  { label: "勤務地", value: COMPANY.area },
  { label: "勤務時間", value: "7:30〜17:30（実働8時間・休憩1時間）" },
  { label: "給与", value: "月給220,000円〜（経験・能力を考慮）" },
  { label: "昇給", value: "年1回（実績・資格取得を評価）" },
  { label: "休日", value: COMPANY.holiday },
  { label: "会社都合休み", value: "6日/月まで補償" },
  { label: "応募資格", value: "普通自動車免許（AT可）／未経験可" },
  { label: "待遇", value: "社会保険完備・資格取得費用全額会社負担" },
  { label: "応募方法", value: "お電話またはフォームにてご連絡ください" },
];

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
    q: "入社前に必要な資格はありますか？",
    a: "普通免許があれば問題ありません。現場で必要な特殊免許は、入社後に会社がサポートして取得できます。",
  },
];

const TAGS = ["未経験OK", "資格取得支援あり", "月給22万円〜", "正社員雇用", "会社都合休み補償あり"];

export default function Recruit() {
  return (
    <section id="recruit" className="border-t border-navy/10 scroll-mt-16">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">

        {/* Section header */}
        <p className="text-sm font-medium tracking-widest text-gold uppercase">Recruit</p>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <h2 className="text-2xl font-bold tracking-tight text-navy md:text-3xl">正社員募集中</h2>
          <span className="rounded-full bg-gold px-3 py-1 text-sm font-medium text-navy">未経験歓迎</span>
        </div>

        {/* Catch copy */}
        <div className="mt-10 rounded-2xl bg-navy px-8 py-10 text-white">
          <p className="text-xl font-bold leading-relaxed md:text-2xl">
            「建設って、向き不向きがあると思ってた。」
          </p>
          <p className="mt-4 leading-relaxed text-white/75">
            でも、うちで働いているスタッフの多くは、未経験からスタートしています。<br />
            特別なスキルも、体力自慢も、最初はいりません。<br />
            丁寧に教えます。資格も一緒に取ります。手に職をつけてください。
          </p>
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-3">
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-navy/20 bg-white px-4 py-1 text-sm font-medium text-navy"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 3つの約束 */}
        <div className="mt-16">
          <h3 className="text-lg font-bold text-navy md:text-xl">入社前に知ってほしい、3つのこと</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {PROMISES.map((p) => (
              <div key={p.num} className="rounded-2xl border border-navy/15 bg-white p-6 shadow-sm">
                <span className="text-3xl font-black text-gold/50">{p.num}</span>
                <p className="mt-3 font-bold text-navy leading-snug">{p.title}</p>
                <p className="mt-2 text-sm text-sub leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 1日の流れ + キャリアパス */}
        <div className="mt-16 grid gap-10 md:grid-cols-2">

          {/* 1日の流れ */}
          <div>
            <h3 className="text-lg font-bold text-navy md:text-xl">1日の流れ</h3>
            <div className="mt-6 rounded-2xl border border-navy/15 bg-white p-6 shadow-sm">
              <ol>
                {SCHEDULE.map((s, i) => (
                  <li key={s.time} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-navy">
                        {i + 1}
                      </span>
                      {i < SCHEDULE.length - 1 && (
                        <div className="mt-1 w-px flex-1 min-h-6 bg-navy/10" />
                      )}
                    </div>
                    <div className="pb-4">
                      <span className="text-xs font-bold text-gold">{s.time}</span>
                      <p className="mt-0.5 text-sm text-navy">{s.task}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-2 text-xs text-sub border-t border-navy/10 pt-4">
                残業は月10時間以内がほとんど。仕事終わりの時間をしっかり確保できます。
              </p>
            </div>
          </div>

          {/* キャリアパス */}
          <div>
            <h3 className="text-lg font-bold text-navy md:text-xl">キャリアパス</h3>
            <div className="mt-6 space-y-0">
              {CAREER.map((c, i) => (
                <div key={c.phase} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    {i < CAREER.length - 1 && (
                      <div className="mt-1 w-px flex-1 min-h-8 bg-navy/20" />
                    )}
                  </div>
                  <div className="pb-6 pt-0.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-bold text-navy text-sm">{c.phase}</span>
                      <span className="text-xs text-sub">{c.period}</span>
                    </div>
                    <p className="mt-1 text-sm text-sub leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 社長メッセージ */}
        <div className="mt-16 rounded-2xl border border-gold/40 bg-[#fdfaf4] px-8 py-10">
          <p className="text-xs font-medium tracking-widest text-gold uppercase">Message</p>
          <blockquote className="mt-4 text-base leading-loose text-navy md:text-lg">
            うちに来る人に、特別なスキルは求めていません。<br />
            現場をやってみたい、手に職をつけたい、地元で働きたい。<br />
            それだけで十分です。あとは一緒に育てていきます。
          </blockquote>
          <p className="mt-3 leading-relaxed text-sub text-sm">
            小さい会社だからこそ、一人ひとりをちゃんと見られる。それがうちの強みだと思っています。
          </p>
          <p className="mt-6 text-sm font-medium text-navy">代表　外山 澄男</p>
        </div>

        {/* 募集要項 */}
        <div className="mt-16">
          <h3 className="text-lg font-bold text-navy md:text-xl">募集要項</h3>
          <div className="mt-6 rounded-2xl border border-navy/15 bg-white shadow-sm overflow-hidden">
            <dl>
              {SPECS.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex gap-4 px-6 py-4 text-sm ${i % 2 === 0 ? "bg-white" : "bg-navy/[0.025]"}`}
                >
                  <dt className="w-28 shrink-0 font-medium text-navy">{s.label}</dt>
                  <dd className="text-sub">{s.value}</dd>
                </div>
              ))}
            </dl>

            {/* FAQ */}
            <div className="border-t border-navy/10 px-6 py-6">
              <p className="text-sm font-bold text-navy">よくある質問</p>
              <div className="mt-4 space-y-5">
                {FAQS.map((f) => (
                  <div key={f.q}>
                    <p className="text-sm font-medium text-navy">
                      <span className="mr-1.5 font-bold text-gold">Q.</span>{f.q}
                    </p>
                    <p className="mt-1.5 pl-5 text-sm text-sub">
                      <span className="font-medium text-navy">A.</span>　{f.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="border-t border-navy/10 px-6 py-6">
              <p className="mb-4 text-xs text-sub">「まだ迷っている」「話だけ聞きたい」でも大歓迎です。</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${COMPANY.tel}`}
                  className="inline-flex items-center justify-center rounded-xl bg-gold px-5 py-3 text-sm font-bold text-navy hover:opacity-90 transition-opacity"
                >
                  今すぐ電話で応募する　{COMPANY.tel}
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl border border-navy/30 px-5 py-3 text-sm font-medium text-navy hover:bg-navy/5 transition-colors"
                >
                  フォームで気軽に問い合わせる
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
