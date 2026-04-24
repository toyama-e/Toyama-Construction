import { COMPANY } from "@/constants/company";

const rows = [
  { k: "会社名", v: COMPANY.name },
  { k: "所在地", v: COMPANY.address },
  { k: "代表", v: "外山 澄男" },
  { k: "事業内容", v: "土木一式工事・外構工事・改修・修繕" },
  { k: "対応エリア", v: COMPANY.area },
  { k: "建設業許可", v: "○○ 第○○号（差し替え予定）" },
  { k: "営業時間", v: COMPANY.hours },
  { k: "定休日", v: COMPANY.holiday },
];

export default function About() {
  return (
    <section id="about" className="border-t border-navy/10 scroll-mt-16">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <p className="text-sm font-medium tracking-widest text-gold uppercase">
          About Us
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-navy md:text-3xl">
          会社概要
        </h2>

        <div className="mt-10 overflow-hidden rounded-2xl border border-navy/15 bg-white">
          <dl className="divide-y divide-navy/10">
            {rows.map((r) => (
              <div
                key={r.k}
                className="grid gap-1 px-5 py-4 md:grid-cols-[160px_1fr] md:gap-4 md:px-8"
              >
                <dt className="text-sm font-medium text-sub">{r.k}</dt>
                <dd className="text-sm text-ink">{r.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-navy/15">
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(COMPANY.address)}`}
            width="100%"
            height="360"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="株式会社 外山建設 地図"
          />
        </div>
      </div>
    </section>
  );
}
