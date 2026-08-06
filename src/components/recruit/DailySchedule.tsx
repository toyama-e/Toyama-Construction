import { RECRUITMENT } from "@/constants/recruitment";

export default function DailySchedule() {
  return (
    <section id="schedule" className="scroll-mt-16 bg-offwhite">
      <div className="mx-auto max-w-5xl px-4 py-12 md:py-24">
        <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-bronze">
          <span className="h-px w-6 bg-bronze" />A Day&apos;s Work
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-black md:text-5xl">1日の流れ</h2>

        <div className="mt-8 border-y border-bronze/60 bg-gray-100 p-5 md:mt-12 md:max-w-3xl md:p-8 lg:mx-auto">
          <ol>
            {RECRUITMENT.schedule.map((s, i) => (
              <li key={s.time} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-bronze text-[10px] font-bold text-white">
                    {i + 1}
                  </span>
                  {i < RECRUITMENT.schedule.length - 1 && (
                    <div className="mt-1 min-h-6 w-px flex-1 bg-navy/10" />
                  )}
                </div>
                <div className="pb-4">
                  <span className="text-xs font-bold text-bronze">{s.time}</span>
                  <p className="mt-0.5 text-sm text-black">
                    {s.time === "12:00" ? (
                      <>
                        <span className="md:hidden">
                          昼休憩
                          <span className="block whitespace-nowrap text-[13px]">
                            （1時間・作業により前後あり）
                          </span>
                        </span>
                        <span className="hidden md:inline">{s.task}</span>
                      </>
                    ) : (
                      s.task
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-2 border-t border-navy/10 pt-4 text-xs text-sub">
            {RECRUITMENT.overtime}
            <br className="md:hidden" />
            仕事終わりの時間をしっかり確保できます。
          </p>
        </div>
      </div>
    </section>
  );
}
