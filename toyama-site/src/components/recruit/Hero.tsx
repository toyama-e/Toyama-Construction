import { COMPANY } from "@/constants/company";

const TAGS = ["未経験OK", "資格取得支援あり", "月給22万円〜", "正社員雇用", "会社都合休み補償あり"];

export default function Hero() {
  return (
    <section id="top" className="bg-navy text-white scroll-mt-4">
      <div className="mx-auto max-w-5xl px-4 py-20 md:py-32">
        <span className="inline-block rounded-full bg-gold px-4 py-1 text-sm font-medium text-navy">
          未経験歓迎
        </span>

        <h1 className="mt-6 text-2xl font-bold leading-snug tracking-tight md:text-4xl">
          「建設の仕事って、無理だと思ってた。」
        </h1>

        <p className="mt-6 leading-relaxed text-white/80 md:text-lg">
          でも、うちで働いているスタッフの多くは、未経験からスタートしています。<br />
          特別なスキルも、体力自慢も、最初はいりません。<br />
          丁寧に教えます。資格も一緒に取ります。手に職をつけてください。
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/30 px-4 py-1 text-sm text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-10">
          <a
            href={`tel:${COMPANY.tel}`}
            className="inline-flex items-center justify-center rounded-xl bg-gold px-6 py-3 font-bold text-navy hover:opacity-90 transition-opacity"
          >
            今すぐ電話で話を聞く　{COMPANY.tel}
          </a>
        </div>
      </div>
    </section>
  );
}
