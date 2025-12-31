// お問い合わせ
export default function Contact() {
  return (
    <section id="contact" className="border-t border-slate-100 scroll-mt-4">
      <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          お問い合わせ
        </h2>
        <p className="mt-2 text-slate-700">
          相談・見積り・採用応募など、
          <br className="sm:hidden" />
          お気軽にご連絡ください。
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="font-semibold">電話・メール</h3>
            <div className="mt-3 space-y-2 text-sm text-slate-700">
              <p>
                TEL：
                <a className="underline" href="tel:000-0000-0000">
                  0256-55-5048
                </a>
              </p>
              <p>
                Mail：
                <a className="underline" href="mailto:info@example.com">
                  info@example.com
                </a>
              </p>
              <p className="text-xs text-slate-500">
                受付時間：平日 8:00〜17:30（仮）
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h3 className="font-semibold">フォーム（最小手間の案）</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              まずは Googleフォーム を作ってリンクするのが最短です。
              将来必要になれば本格フォームに置き換えられます。
            </p>
            <div className="mt-4">
              <a
                href="https://forms.gle/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:opacity-90"
              >
                フォームを開く（仮リンク）
              </a>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※あとで本物のURLに差し替えてOK
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
