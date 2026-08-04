const TAGS = ["未経験OK", "資格取得支援あり", "正社員雇用"];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative scroll-mt-4 overflow-hidden bg-gradient-to-br from-bluegray via-paleblue to-lightblue text-ink"
    >
      <span className="pointer-events-none absolute -right-16 top-24 h-56 w-56 rounded-full border border-bronze/20" />
      <span className="pointer-events-none absolute -right-4 top-36 h-40 w-40 rounded-full border border-bronze/30" />
      <div className="mx-auto max-w-5xl px-4 pb-12 pt-20 md:pb-32 md:pt-24">
        <div className="animate-enter relative flex flex-col items-start">
          <div className="flex items-center gap-4">
            <span className="inline-block rounded-full border border-bronze bg-navy px-4 py-1 text-sm font-medium text-white">
              未経験者歓迎
            </span>
          </div>

          <h1 className="mt-7 text-[2.2rem] font-bold leading-[1.35] tracking-tight md:mt-10 md:text-6xl">
            手を動かす人が、
            <br />
            これから強い。
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-gray-700 md:mt-6 md:text-lg">
            未経験から始めて、地元で手に職を。
            <br className="md:hidden" />
            <span className="min-[360px]:hidden">
              小さな会社だからこそ、
              <br />
              一人ひとり丁寧に教えます。
            </span>
            <span className="hidden min-[360px]:inline">
              小さな会社だからこそ、一人ひとり丁寧に教えます。
            </span>
          </p>

          <dl className="mt-6 grid w-full grid-cols-2 overflow-hidden border-y border-bronze/50 bg-offwhite/60 md:max-w-xl">
            <div className="border-b border-r border-navy/10 p-4">
              <dt className="text-xs text-sub">給与</dt>
              <dd className="mt-1 font-bold text-ink">月給22万円〜</dd>
            </div>
            <div className="border-b border-navy/10 p-4">
              <dt className="text-xs text-sub">勤務地</dt>
              <dd className="mt-1 font-bold text-ink">新潟県央地区</dd>
            </div>
            <div className="border-r border-navy/10 p-4">
              <dt className="text-xs text-sub">経験</dt>
              <dd className="mt-1 font-bold text-ink">未経験歓迎</dd>
            </div>
            <div className="p-4">
              <dt className="text-xs text-sub">勤務時間</dt>
              <dd className="mt-1 font-bold text-ink">7:30〜17:30</dd>
            </div>
          </dl>

          <a
            href="#apply"
            className="mt-5 flex min-h-12 w-full items-center justify-between rounded-full bg-navy px-6 font-bold text-white md:w-64"
          >
            LINEで応募・相談する
            <span aria-hidden="true">→</span>
          </a>

          <div className="mt-4 flex flex-wrap gap-2 md:mt-6">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-600 md:px-4 md:text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
