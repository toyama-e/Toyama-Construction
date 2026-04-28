import { COMPANY } from "@/constants/company";

export default function Apply() {
  return (
    <section id="apply" className="border-t border-navy/10 scroll-mt-16 bg-navy">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <p className="text-sm font-medium tracking-widest text-gold uppercase">Apply</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
          まずは気軽に連絡してください
        </h2>

        <p className="mt-4 text-sm text-white/70">
          「まだ迷っている」「話だけ聞きたい」でも大歓迎です。
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href={`tel:${COMPANY.tel}`}
            className="group rounded-2xl border border-white/15 bg-white/10 p-6 hover:bg-white/20 hover:border-white/30 transition-colors"
          >
            <p className="text-base font-bold text-gold">電話で応募する</p>
            <p className="mt-1 text-xl font-bold text-white group-hover:text-white/80 transition-colors">
              {COMPANY.tel}
            </p>
            <p className="mt-2 text-xs text-white/50">受付時間：平日 {COMPANY.hours}</p>
          </a>
          <a
            href={`mailto:${COMPANY.email}`}
            className="group rounded-2xl border border-white/15 bg-white/10 p-6 hover:bg-white/20 hover:border-white/30 transition-colors"
          >
            <p className="text-base font-bold text-gold">メールで問い合わせる</p>
            <p className="mt-1 text-base font-medium text-white underline group-hover:text-white/80 transition-colors">
              {COMPANY.email}
            </p>
            <p className="mt-2 text-xs text-white/50">受付時間：平日 {COMPANY.hours}</p>
          </a>
        </div>
      </div>
    </section>
  );
}
