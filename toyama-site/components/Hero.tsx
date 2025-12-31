// ファーストビュー
export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden scroll-mt-4">
      {/* 背景（トップのみ） */}
      <div className="absolute inset-0 -z-10">
      {/* 信濃川 */}
      <div
      className="hero-bg-a absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url(/images/river.png)" }}
      />

    {/* 田んぼ */}
    <div
      className="hero-bg-b absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url(/images/tanbo.png)" }}
    />

    {/* 読みやすさ用の白オーバーレイ */}
    <div className="absolute inset-0 bg-white/45" />
  </div>

      <div className="relative z-10 mx-auto grid max-w-5xl items-center gap-10 px-4 py-16 md:py-24">
        <div>
          <p className="text-sm font-medium text-slate-600">
            地域の暮らしを支える確かな技術力
          </p>

         <h1 className="mt-3 text-lg font-semibold tracking-tight md:text-3xl whitespace-nowrap">
            株式会社 外山建設は、
            <br />
            新潟県県央地区を中心に
            <br />
            土木一式工事を行う総合建設会社です。
          </h1>

          <p className="mt-4 leading-relaxed text-slate-700 md:text-lg">
            外構・改修・小規模工事まで。
            <br />
            見積りは迅速、相談は無料（仮）。
            <br />
            現場目線で、丁寧に進めます。
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 font-medium text-white hover:opacity-90"
            >
              まずは相談する
            </a>
            <a
              href="#recruit"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 font-medium hover:bg-slate-50"
            >
              採用情報を見る
            </a>
          </div>

          {/* <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-600">
            <span className="rounded-full bg-slate-100 px-3 py-1">見積り無料（仮）</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">小回り対応</span>
            <span className="rounded-full bg-slate-100 px-3 py-1">地域密着</span>
          </div> */}
        </div>

         <div className="mt-2 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <div className="space-y-4">
            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm font-medium">対応エリア</p>
              <p className="mt-1 text-sm text-slate-700">
                新潟県 県央地区 / 近隣エリア
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4">
              <p className="text-sm font-medium">よくある相談</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                <li>外構（フェンス・駐車場）</li>
                <li>修繕（雨漏り・段差）</li>
                <li>小規模リフォーム</li>
              </ul>
            </div>

            {/* <div className="rounded-2xl bg-white p-4">
              <p className="text-sm font-medium">連絡先（仮）</p>
              <p className="mt-1 text-sm text-slate-700">
                TEL: 0256-55-5048
                <br />
                Mail: info@example.com
              </p>
            </div> */}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-16 h-40 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
