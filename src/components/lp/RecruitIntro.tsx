import Image from "next/image";

export default function RecruitIntro() {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-6xl py-12 md:px-4 md:py-20">
        <div className="xl:grid xl:grid-cols-[1.08fr_0.92fr] xl:items-stretch">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-[960px] overflow-hidden bg-[#9FAAB2] xl:aspect-auto xl:min-h-[420px] xl:max-w-none">
            <Image
              src="/images/president-director-truck-1600x1200.avif"
              alt="ダンプの前に立つ代表と役員"
              fill
              sizes="(min-width: 1280px) 620px, (min-width: 1024px) 960px, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-navy/95 via-navy/20 to-transparent xl:hidden" />
            <div className="absolute inset-x-0 bottom-0 z-20 px-5 pb-7 md:px-10 md:pb-10 xl:hidden">
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
          </div>
          <div className="hidden flex-col justify-center bg-white px-12 text-navy xl:flex">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-bronze">
              <span className="h-px w-7 bg-bronze" />
              Recruit
            </p>
            <h2 className="font-display mt-5 text-5xl font-bold leading-tight">
              一緒に働く仲間を
              <br />
              募集しています
            </h2>
            <p className="mt-7 text-base leading-[2] text-sub">
              未経験から、地元で手に職を。
              <br />
              小さな会社だからこそ、一人ひとり丁寧に向き合います。
            </p>
            <a
              href="/recruit"
              className="mt-7 inline-flex min-h-12 w-64 items-center justify-between border border-navy px-6 font-bold text-navy transition-colors hover:bg-navy hover:text-white"
            >
              採用情報を見る
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="px-5 pt-7 md:max-w-3xl md:px-0 md:pt-9 xl:hidden">
          <p className="text-base leading-[2] text-white/75">
            未経験から、地元で手に職を。
            <br className="md:hidden" />
            小さな会社だからこそ、
            <br className="md:hidden" />
            一人ひとり丁寧に向き合います。
          </p>
          <a
            href="/recruit"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-between border border-white/70 px-5 font-bold text-white transition-colors hover:bg-white hover:text-navy md:w-64 md:px-6"
          >
            採用情報を見る
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
