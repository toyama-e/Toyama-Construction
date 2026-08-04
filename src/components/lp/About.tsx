import Image from "next/image";
import { COMPANY } from "@/constants/company";

const rows = [
  { k: "会社名", v: COMPANY.name },
  { k: "所在地", v: COMPANY.address },
  { k: "代表", v: "外山 澄男" },
  { k: "事業内容", v: "土木一式工事・外構工事・改修・修繕" },
  { k: "対応エリア", v: COMPANY.area },
  { k: "FAX", v: COMPANY.fax },
  { k: "LINE", v: COMPANY.line },
  { k: "営業時間", v: COMPANY.hours },
  { k: "定休日", v: COMPANY.holiday },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-12 md:py-24">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-6">
          <div className="relative overflow-hidden md:w-2/5 md:shrink-0">
            <Image
              src="/images/office1-1.jpeg"
              alt="株式会社 外山建設 事務所"
              width={3024}
              height={3024}
              className="w-full object-cover"
              style={{ height: "auto" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 px-5 pb-6 text-white">
              <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">
                <span className="h-px w-5 bg-white" />
                About Us
              </p>
              <h2 className="mt-3 text-[1.8rem] font-bold tracking-tight md:text-4xl">会社概要</h2>
            </div>
          </div>

          <div className="overflow-hidden border-y border-bronze/60 md:flex-1">
            <dl className="divide-y divide-navy/15">
              {rows.map((r) => (
                <div
                  key={r.k}
                  className="grid grid-cols-1 gap-1 px-0 py-3 sm:grid-cols-[140px_1fr] sm:gap-4 sm:px-6 sm:py-4 md:grid-cols-[84px_minmax(0,1fr)] md:gap-3 md:px-4 lg:grid-cols-[140px_1fr] lg:gap-4 lg:px-6"
                >
                  <dt className="text-sm font-medium text-sub">{r.k}</dt>
                  <dd className="break-words text-sm leading-relaxed text-ink md:whitespace-nowrap md:text-[13px] lg:whitespace-normal lg:text-sm">
                    {r.k === "会社名" ? (
                      <>
                        株式会社{" "}
                        <ruby>
                          外山<rt className="text-[0.55em] font-normal tracking-normal">とやま</rt>
                        </ruby>
                        建設
                      </>
                    ) : (
                      r.v
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-5 overflow-hidden border-y border-navy/15 md:mt-8">
          <iframe
            src={`https://maps.google.com/maps?q=${encodeURIComponent(COMPANY.address)}&output=embed`}
            width="100%"
            height="280"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="株式会社 外山建設 地図"
          />
          <div className="flex items-center gap-2 border-t border-navy/10 bg-gray-100 px-4 py-3 text-sm text-sub">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 shrink-0 text-bronze"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.218-4.402 3.218-7.327 0-4.418-3.582-8-8-8s-8 3.582-8 8c0 2.925 1.274 5.248 3.218 7.327a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 13.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
                clipRule="evenodd"
              />
            </svg>
            <span>{COMPANY.address}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
