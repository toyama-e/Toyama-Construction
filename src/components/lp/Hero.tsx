import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate scroll-mt-4 overflow-hidden bg-offwhite pt-16 text-ink md:min-h-[760px] md:pt-20"
    >
      <div className="mx-auto grid max-w-7xl md:min-h-[680px] md:grid-cols-[46%_54%] md:items-center md:px-12">
        <div className="animate-enter order-2 px-5 pb-12 pt-9 md:order-1 md:px-0 md:pb-0 md:pr-10 md:pt-0">
          <p className="mb-4 flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-bronze">
            <span className="h-px w-8 bg-bronze" />
            新潟県 三条市
          </p>
          <h1 className="font-display text-[2rem] font-bold leading-[1.45] tracking-[0.02em] text-ink min-[370px]:text-[2.25rem] md:text-5xl lg:text-[3.5rem]">
            県央地域の
            <br />
            土木・外構工事
          </h1>

          <p className="mt-5 max-w-md text-base font-medium leading-[1.9] tracking-wide text-sub">
            ご自宅の駐車場、お庭の整備や工事など、
            <br />
            お任せください。
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex min-h-12 min-w-52 items-center justify-between rounded-full bg-navy px-6 font-medium text-white transition-colors hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze"
          >
            ご相談はこちら
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="relative order-1 h-[min(100vw,430px)] overflow-hidden bg-gray-200 md:order-2 md:h-[600px]">
          <div className="hero-photo-people absolute inset-0 z-10">
            <Image
              src="/images/yunbo.JPG"
              alt="重機を使った工事の様子（現在は仮写真）"
              fill
              priority
              sizes="(min-width: 768px) 54vw, 100vw"
              className="object-cover object-[56%_50%] md:object-[55%_50%]"
            />
          </div>
          <div className="hero-photo-office absolute inset-0">
            <Image
              src="/images/office4-3.webp"
              alt="株式会社外山建設の会社外観"
              fill
              sizes="(min-width: 768px) 54vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
