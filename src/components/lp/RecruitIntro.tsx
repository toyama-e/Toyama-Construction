export default function RecruitIntro() {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-6xl py-12 md:px-4 md:py-20">
        <div
          role="img"
          aria-label="採用案内に掲載する人物写真の仮置き"
          className="relative h-[min(86vw,420px)] bg-[#9FAAB2] md:h-[560px]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 px-5 pb-7 md:px-10 md:pb-10">
            <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/80 md:text-xs md:tracking-[0.2em]">
              <span className="h-px w-5 bg-white md:w-6" />
              Recruit
            </p>
            <h2 className="mt-3 text-[1.8rem] font-bold leading-[1.5] tracking-tight md:text-5xl md:leading-tight">
              一緒に働く仲間を
              <br />
              募集しています
            </h2>
          </div>
          <span className="absolute right-4 top-4 text-[10px] font-bold tracking-[0.18em] text-navy/55 md:text-xs">
            PHOTO MOCK
          </span>
        </div>

        <div className="px-5 pt-7 md:max-w-2xl md:px-0 md:pt-9">
          <p className="text-base leading-[2] text-white/75">
            未経験から、地元で手に職を。
            <br />
            小さな会社だからこそ、
            <br />
            一人ひとり丁寧に向き合います。
          </p>
          <a
            href="/recruit"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-between border border-white/70 px-5 font-bold text-white transition-colors hover:bg-white hover:text-navy md:w-64 md:px-6"
          >
            採用情報を見る
            <span aria-hidden="true">→</span>
          </a>
          <p className="mt-3 text-xs text-white/55">※写真領域はMock（仮）です。</p>
        </div>
      </div>
    </section>
  );
}
