export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden scroll-mt-4">
      <div className="absolute inset-0 -z-10">
        <div
          className="hero-bg-a absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/river.png)" }}
        />
        <div
          className="hero-bg-b absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/tanbo.png)" }}
        />
        <div className="absolute inset-0 bg-navy/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-32 pb-20 md:pt-44 md:pb-36">
        <h1 className="text-2xl font-bold leading-snug tracking-tight text-white md:text-4xl">
          新潟県 県央地域の土木・外構工事
        </h1>

        <p className="mt-4 max-w-md text-sm leading-loose tracking-wide text-white/80 md:text-base">
          ご自宅の駐車場・お庭の整備や工事など、お任せください。
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-none border border-gold/70 px-10 py-3 text-sm font-medium tracking-widest text-white hover:bg-gold/10 transition-colors"
          >
            ご相談はこちら
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-1 h-24 bg-gradient-to-b from-transparent to-offwhite" />
    </section>
  );
}
