import Image from "next/image";

export default function CompanyIntro() {
  return (
    <section id="company" className="scroll-mt-16 bg-gray-100">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-12 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-14 md:py-24">
        <div className="overflow-hidden">
          <Image
            src="/images/jiji&kento.jpeg"
            alt="株式会社 外山建設の人物写真（Mock）"
            width={1200}
            height={900}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        <div>
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-bronze">
            <span className="h-px w-6 bg-bronze" />
            About Us
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-black md:text-5xl">
            顔の見える、
            <br />
            身近な建設会社です。
          </h2>
          <p className="mt-5 leading-relaxed text-sub">
            外山建設は、社長と役員を中心に営む小さな会社です。相談から施工まで、お客様との距離を大切にしながら、一つひとつの現場に丁寧に向き合います。
          </p>
          <a
            href="/company"
            className="mt-7 inline-flex min-h-12 min-w-52 items-center justify-between rounded-full border border-navy px-6 font-bold text-navy transition-colors hover:bg-navy hover:text-white"
          >
            外山建設について
            <span aria-hidden="true">→</span>
          </a>
          <p className="mt-3 text-xs text-sub">※現在の人物写真はMock（仮）です。</p>
        </div>
      </div>
    </section>
  );
}
