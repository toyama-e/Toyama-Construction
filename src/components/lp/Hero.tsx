import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate scroll-mt-4 overflow-hidden bg-white pt-16 text-ink lg:pt-20"
    >
      <div className="mx-auto max-w-7xl md:px-12">
        <div className="relative h-[min(100vw,500px)] overflow-hidden bg-gray-200 md:h-[600px]">
          <div className="hero-photo-people absolute inset-0 z-10">
            <Image
              src="/images/yunbo.JPG"
              alt="重機を使った工事の様子（現在は仮写真）"
              fill
              priority
              sizes="(min-width: 1280px) 1184px, 100vw"
              className="object-cover object-[56%_50%] md:object-[55%_50%]"
            />
          </div>
          <div className="hero-photo-office absolute inset-0">
            <Image
              src="/images/office4-3.webp"
              alt="株式会社外山建設の会社外観"
              fill
              sizes="(min-width: 1280px) 1184px, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-navy/90 via-navy/15 to-transparent" />
          <div className="animate-enter absolute inset-x-0 bottom-0 z-30 px-5 pb-7 text-white md:px-10 md:pb-10">
            <p className="mb-3 flex items-center gap-2 text-[10px] font-medium tracking-[0.18em] text-white/85 md:text-xs md:tracking-[0.2em]">
              <span className="h-px w-6 bg-white md:w-8" />
              新潟県 三条市
            </p>
            <h1 className="font-display text-[2rem] font-bold leading-[1.45] tracking-[0.02em] min-[370px]:text-[2.25rem] md:text-6xl">
              県央地域の
              <br />
              土木・外構工事
            </h1>
          </div>
        </div>

        <div className="px-5 pb-12 pt-7 md:max-w-3xl md:px-0 md:pt-9">
          <p className="mt-5 text-base font-medium leading-[1.9] tracking-wide text-sub">
            <span className="min-[360px]:hidden">
              ご自宅の駐車場、
              <br />
              お庭の整備や工事など、
              <br />
              お任せください。
            </span>
            <span className="hidden min-[360px]:inline">
              ご自宅の駐車場、お庭の整備や工事など、
              <br className="md:hidden" />
              お任せください。
            </span>
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex min-h-12 min-w-52 items-center justify-between rounded-full bg-navy px-6 font-medium text-white transition-colors hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze"
          >
            ご相談はこちら
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
