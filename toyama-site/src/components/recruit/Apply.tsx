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
          <div className="rounded-2xl border border-white/15 bg-white/10 p-6">
            <p className="text-xs text-white/60">TEL</p>
            <a
              href={`tel:${COMPANY.tel}`}
              className="mt-1 inline-block text-xl font-bold text-white hover:text-gold transition-colors"
            >
              {COMPANY.tel}
            </a>
            <p className="mt-2 text-xs text-white/50">受付時間：平日 {COMPANY.hours}</p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10 p-6">
            <p className="text-xs text-white/60">Mail</p>
            <a
              href={`mailto:${COMPANY.email}`}
              className="mt-1 inline-block text-base font-medium text-white underline hover:text-gold transition-colors"
            >
              {COMPANY.email}
            </a>
            <p className="mt-2 text-xs text-white/50">受付時間：平日 {COMPANY.hours}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={`tel:${COMPANY.tel}`}
            className="inline-flex items-center justify-center rounded-xl bg-gold px-6 py-3 font-bold text-navy hover:opacity-90 transition-opacity"
          >
            今すぐ電話で応募する　{COMPANY.tel}
          </a>
          <a
            href={`mailto:${COMPANY.email}`}
            className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-3 font-medium text-white hover:bg-white/10 transition-colors"
          >
            メールで問い合わせる
          </a>
        </div>
      </div>
    </section>
  );
}
