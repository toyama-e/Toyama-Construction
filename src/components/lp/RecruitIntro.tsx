export default function RecruitIntro() {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-5xl px-4 py-12 md:flex md:items-end md:justify-between md:gap-12 md:py-20">
        <div>
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-bronze">
            <span className="h-px w-6 bg-bronze" />
            Recruit
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            一緒に働く仲間を、
            <br />
            募集しています。
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-white/75">
            未経験から、地元で手に職を。小さな会社だからこそ、一人ひとり丁寧に向き合います。
          </p>
        </div>
        <a
          href="/recruit"
          className="mt-7 inline-flex min-h-12 w-full items-center justify-between rounded-full border border-white/70 px-6 font-bold text-white transition-colors hover:bg-white hover:text-navy md:w-64 md:shrink-0"
        >
          採用情報を見る
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
