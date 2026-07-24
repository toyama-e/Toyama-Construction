export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[720px] scroll-mt-4 overflow-hidden bg-ink pt-16 text-white md:min-h-[760px] md:pt-20"
    >
      <div
        className="hero-bg-a absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/office4-3.webp)" }}
      />
      <div
        className="hero-bg-b absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/yunbo.JPG)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />

      <div className="relative mx-auto flex min-h-[656px] max-w-7xl items-end px-5 pb-12 md:min-h-[680px] md:px-12 md:pb-16">
        <div className="animate-enter max-w-2xl">
          <p className="mb-4 flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-white/85">
            <span className="h-px w-8 bg-bronze" />
            新潟県 三条市
          </p>
          <h1 className="font-display text-[2.25rem] font-bold leading-[1.35] tracking-[0.02em] text-white md:text-6xl">
            新潟県 県央地域の
            <br />
            土木・外構工事
          </h1>

          <p className="mt-5 max-w-md text-sm leading-loose tracking-wide text-white/90 md:text-base">
            ご自宅の駐車場・お庭の整備や工事など、お任せください。
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex min-h-12 min-w-52 items-center justify-between rounded-full border border-white/70 bg-black/20 px-6 font-medium text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-ink"
          >
            ご相談はこちら
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-7 right-4 hidden items-center gap-3 text-[10px] tracking-[0.24em] text-white/80 sm:flex">
        <span>SCROLL</span>
        <span className="h-12 w-px bg-white/60" />
      </div>
    </section>
  );
}
