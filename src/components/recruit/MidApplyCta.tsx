export default function MidApplyCta() {
  return (
    <section aria-label="応募相談のご案内" className="bg-offwhite px-4 pb-12 md:pb-24">
      <div className="mx-auto flex max-w-4xl flex-col gap-5 border-y border-bronze/50 bg-gray-100 px-5 py-7 md:flex-row md:items-center md:justify-between md:gap-8 md:px-8 md:py-8">
        <div>
          <h2 className="text-2xl font-bold leading-snug text-black md:text-3xl">
            <span className="min-[390px]:hidden">
              仕事内容について
              <br />
              聞いてみませんか
            </span>
            <span className="hidden min-[390px]:inline lg:hidden">
              仕事について
              <br />
              聞いてみませんか
            </span>
            <span className="hidden lg:inline">仕事内容について聞いてみませんか</span>
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-sub md:text-base">
            応募を決める前の質問だけでも
            <br className="min-[390px]:hidden" />
            大丈夫です
          </p>
        </div>
        <a
          href="#apply"
          className="flex min-h-12 w-full shrink-0 items-center justify-between rounded-full bg-navy px-6 font-bold text-white transition-colors hover:bg-ink md:w-64"
        >
          LINEで応募・相談する
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
