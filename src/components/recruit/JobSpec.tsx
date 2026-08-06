import { RECRUITMENT, type RecruitmentSpec } from "@/constants/recruitment";

export default function JobSpec() {
  const primarySpecs = RECRUITMENT.specs.slice(0, 4);
  const secondarySpecs = RECRUITMENT.specs.slice(4);

  const renderRows = (specs: RecruitmentSpec[], startIndex = 0) =>
    specs.map((s, i) => (
      <div
        key={s.label}
        className={`grid grid-cols-1 gap-1.5 border-b border-navy/10 px-4 py-3 min-[360px]:grid-cols-[96px_1fr] min-[360px]:gap-3 min-[360px]:border-b-0 min-[360px]:text-sm sm:flex sm:gap-4 sm:px-6 sm:py-4 ${
          (i + startIndex) % 2 === 0 ? "bg-gray-100" : "bg-white"
        }`}
      >
        <dt className="text-[13px] font-bold text-bronze min-[360px]:text-sm min-[360px]:font-medium min-[360px]:text-black sm:w-28 sm:shrink-0">
          {s.label}
        </dt>
        <dd className="min-w-0 text-[15px] leading-relaxed text-ink min-[360px]:text-sm min-[360px]:leading-normal min-[360px]:text-sub">
          {s.mobileLines ? (
            <>
              <span className="md:hidden">
                {s.mobileLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
              <span className="hidden md:inline">{s.value}</span>
            </>
          ) : (
            s.value
          )}
        </dd>
      </div>
    ));

  return (
    <section id="jobspec" className="scroll-mt-16 bg-offwhite">
      <div className="mx-auto max-w-5xl px-4 py-12 md:py-24">
        <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-bronze">
          <span className="h-px w-6 bg-bronze" />
          Job Details
        </p>
        <h2 className="mt-3 text-[1.7rem] font-bold leading-snug tracking-tight text-black md:text-5xl">
          現場スタッフ
          <br className="min-[360px]:hidden" />
          （正社員）
          <br className="md:hidden" />
          募集要項
        </h2>

        <div className="mt-8 overflow-hidden border-y border-bronze/60 bg-gray-100 md:mt-12 md:max-w-4xl lg:mx-auto">
          <dl>{renderRows(primarySpecs)}</dl>
          <details className="group md:hidden">
            <summary className="flex min-h-12 cursor-pointer list-none items-center justify-center border-t border-navy/10 bg-white text-sm font-bold text-ink">
              <span className="group-open:hidden">詳しい募集要項を見る +</span>
              <span className="hidden group-open:inline">閉じる -</span>
            </summary>
            <dl>{renderRows(secondarySpecs, primarySpecs.length)}</dl>
          </details>
          <dl className="hidden md:block">{renderRows(secondarySpecs, primarySpecs.length)}</dl>
        </div>
      </div>
    </section>
  );
}
