export default function Hero() {
  return (
    <section id="top" className="scroll-mt-16 bg-gray-100 pt-16 md:pt-20">
      <div className="mx-auto max-w-5xl px-4 py-12 md:py-20">
        <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-bronze">
          <span className="h-px w-6 bg-bronze" />
          Company
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-black md:text-6xl">
          外山建設について
        </h1>
        <p className="mt-5 max-w-2xl leading-relaxed text-sub">
          私たちの仕事への向き合い方と、会社の基本情報をご紹介します。
        </p>
      </div>
    </section>
  );
}
