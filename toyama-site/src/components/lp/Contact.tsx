import { COMPANY } from "@/constants/company";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-navy/10 scroll-mt-16 bg-navy">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <p className="text-sm font-medium tracking-widest text-gold uppercase">
          Contact
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
          お問い合わせ
        </h2>
        <p className="mt-3 text-white/70">
          相談・見積りなど、お気軽にご連絡ください。
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-white/15 bg-white/10 p-6">
            <h3 className="font-bold text-gold">お電話</h3>
            <div className="mt-4 space-y-3 text-sm">
              <p>
                <span className="text-white/60">TEL</span>
                <br />
                <a
                  href={`tel:${COMPANY.tel}`}
                  className="mt-1 inline-block text-xl font-bold text-white hover:text-gold transition-colors"
                >
                  {COMPANY.tel}
                </a>
              </p>
              <p className="text-xs text-white/50">
                受付時間：平日 {COMPANY.hours}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-6">
            <h3 className="font-bold text-gold">メールで問い合わせ</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              メールでのお問い合わせも受け付けています。<br />
              内容を確認次第、担当者よりご連絡いたします。
            </p>
            <div className="mt-5">
              <a
                href={`mailto:${COMPANY.email}`}
                className="inline-flex items-center justify-center rounded-xl bg-gold px-5 py-3 text-sm font-medium text-navy hover:opacity-90 transition-opacity"
              >
                メールを送る
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
