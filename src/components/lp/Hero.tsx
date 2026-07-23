export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate mb-[1cm] flex h-[calc(100dvh-4rem)] scroll-mt-4 flex-col pt-20"
    >
      {/* 画像エリア：残りスペースをすべて使う */}
      <div className="relative ml-0 flex-1 overflow-hidden">
        <div
          className="hero-bg-a absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/office4-3.webp)" }}
        />
        <div
          className="hero-bg-b absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/yunbo.JPG)" }}
        />
      </div>

      {/* テキストエリア：画像の下に固定 */}
      <div className="px-6 py-6 md:py-8 md:pl-16">
        <h1 className="font-mincho text-2xl font-bold leading-snug tracking-tight text-ink md:text-4xl">
          新潟県 県央地域の土木・外構工事
        </h1>

        <p className="mt-4 max-w-md text-sm leading-loose tracking-wide text-ink md:text-base">
          ご自宅の駐車場・お庭の整備や工事など、お任せください。
        </p>

        <div className="mt-6">
          <a
            href="#contact"
            className="relative text-lg font-medium text-ink after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:scale-x-100 after:bg-gold after:transition-transform after:duration-200 hover:after:scale-x-75"
          >
            ご相談はこちら →
          </a>
        </div>
      </div>
    </section>
  );
}
