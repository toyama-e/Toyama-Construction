export default function CompanyIntro() {
  return (
    <section id="company" className="scroll-mt-16 bg-gray-100">
      <div className="mx-auto max-w-6xl py-12 md:px-4 md:py-24">
        <div className="xl:grid xl:grid-cols-[0.92fr_1.08fr] xl:items-stretch">
          <div className="hidden flex-col justify-center bg-white px-12 xl:flex">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-bronze">
              <span className="h-px w-7 bg-bronze" />
              About Us
            </p>
            <h2 className="font-display mt-5 text-5xl font-bold leading-tight text-black">
              いつでも頼れる
              <br />
              地域の建設会社へ
            </h2>
            <p className="mt-7 text-base leading-[2] text-sub">
              社長と役員を中心に、地域に根ざして仕事をしています。
              <br />
              ご相談から施工まで、一つひとつ丁寧に対応します。
            </p>
            <a
              href="/company"
              className="mt-7 inline-flex min-h-12 w-64 items-center justify-between border border-navy px-6 font-bold text-navy transition-colors hover:bg-navy hover:text-white"
            >
              外山建設について
              <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-[760px] overflow-hidden bg-[#AEB8BE] lg:aspect-[4/3] xl:aspect-auto xl:min-h-[420px] xl:max-w-none">
            <picture>
              <source media="(min-width: 1024px)" srcSet="/images/president-at-desk-wide.avif" />
              <img
                src="/images/president-at-desk.avif"
                alt="事務所でパソコンを操作する代表"
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent xl:hidden" />
            <div className="absolute inset-x-0 bottom-0 z-20 px-5 pb-7 text-white md:px-10 md:pb-10 xl:hidden">
              <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/80 md:text-xs md:tracking-[0.2em]">
                <span className="h-px w-5 bg-white md:w-6" />
                About Us
              </p>
              <h2 className="mt-3 text-[1.8rem] font-bold leading-[1.5] tracking-tight md:text-5xl md:leading-tight">
                いつでも頼れる
                <br />
                地域の建設会社へ
              </h2>
            </div>
          </div>
        </div>

        <div className="px-5 pt-7 md:max-w-3xl md:px-0 md:pt-9 xl:hidden">
          <p className="text-base leading-[2] text-sub">
            社長と役員を中心に、
            <br className="md:hidden" />
            地域に根ざして仕事をしています。
            <br />
            ご相談から施工まで、
            <br className="md:hidden" />
            一つひとつ丁寧に対応します。
          </p>
          <a
            href="/company"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-between border border-navy px-5 font-bold text-navy transition-colors hover:bg-navy hover:text-white md:w-64 md:px-6"
          >
            外山建設について
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
