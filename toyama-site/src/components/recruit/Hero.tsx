import Link from "next/link";
import { COMPANY } from "@/constants/company";

const TAGS = ["未経験OK", "資格取得支援あり", "月給22万円〜", "正社員雇用", "会社都合休み補償あり"];

export default function Hero() {
  return (
    <section id="top" className="bg-navy text-white scroll-mt-4">
      <div className="mx-auto max-w-5xl px-4 pt-4 pb-20 md:pt-8 md:pb-32">
        <div className="flex flex-col items-start gap-10">
          <Link href="/" className="text-3xl font-bold text-white/60 hover:text-gold transition-colors underline underline-offset-4">{COMPANY.name}</Link>
          <span className="inline-block rounded-full bg-gold px-4 py-1 text-sm font-medium text-navy">
            未経験歓迎
          </span>
        </div>

        <h1 className="mt-6 text-2xl font-bold leading-snug tracking-tight md:text-4xl">
          「手を動かす人間が、いちばん強い時代がくる。」
        </h1>

        <p className="mt-6 leading-relaxed text-white/80 md:text-lg">
          AIがどれだけ進化しても、現場に立つのは人間です。<br />
          うちで働いているスタッフの多くは、未経験からスタートしています。<br />
          丁寧に教えます。資格も一緒に取ります。<br />
          手を動かすことが、これからいちばんの強みになります。
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
            今すぐ電話で話を聞く：{COMPANY.tel}
          </a>
        </div>
      </div>
    </section>
  );
}
