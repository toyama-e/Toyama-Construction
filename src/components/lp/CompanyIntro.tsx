export default function CompanyIntro() {
  return (
    <section id="company" className="scroll-mt-16 bg-gray-100">
      <div className="mx-auto max-w-6xl py-12 md:px-4 md:py-24">
        <div
          role="img"
          aria-label="社長と役員の人物写真の仮置き"
          className="relative h-[min(86vw,420px)] bg-[#AEB8BE] md:h-[560px]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 px-5 pb-7 text-white md:px-10 md:pb-10">
            <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/80 md:text-xs md:tracking-[0.2em]">
              <span className="h-px w-5 bg-bronze md:w-6" />
              About Us
            </p>
            <h2 className="mt-3 text-[1.8rem] font-bold leading-[1.5] tracking-tight md:text-5xl md:leading-tight">
              いつでも頼れる
              <br />
              地域の建設会社へ
            </h2>
          </div>
          <span className="absolute right-4 top-4 text-[10px] font-bold tracking-[0.18em] text-navy/55 md:text-xs">
            PHOTO MOCK
          </span>
        </div>

        <div className="px-5 pt-7 md:max-w-2xl md:px-0 md:pt-9">
          <p className="text-base leading-[2] text-sub">
            社長と役員を中心に、
            <br />
            地域に根ざして仕事をしています。
            <br />
            ご相談から施工まで、一つひとつ丁寧に対応します。
          </p>
          <a
            href="/company"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-between border border-navy px-5 font-bold text-navy transition-colors hover:bg-navy hover:text-white md:w-64 md:px-6"
          >
            外山建設について
            <span aria-hidden="true">→</span>
          </a>
          <p className="mt-3 text-xs text-sub">※写真領域はMock（仮）です。</p>
        </div>
      </div>
    </section>
  );
}
