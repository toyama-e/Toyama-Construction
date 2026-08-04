"use client";

import Image from "next/image";
import { COMPANY } from "@/constants/company";
import { trackConversion } from "@/lib/analytics";

export default function Apply() {
  return (
    <section id="apply" className="scroll-mt-16 bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-12 md:py-24">
        <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-bronze">
          <span className="h-px w-6 bg-bronze" />
          Apply
        </p>
        <h2 className="mt-3 whitespace-nowrap text-[1.15rem] font-bold tracking-tight text-black min-[360px]:text-[1.35rem] min-[390px]:text-2xl md:text-5xl">
          まずは気軽に連絡してください
        </h2>

        <p className="mt-4 text-sm text-gray-600">
          <span className="md:hidden">
            「まだ迷っている」「話だけ聞きたい」
            <br />
            そんな方も大歓迎です。
          </span>
          <span className="hidden md:inline">
            「まだ迷っている」「話だけ聞きたい」そんな方も大歓迎です。
          </span>
        </p>

        <div className="mt-8 border-y border-bronze/60 py-6 sm:hidden">
          <p className="font-display text-xl font-bold text-ink">
            まずはLINEで
            <br className="min-[360px]:hidden" />
            話してみませんか？
          </p>
          <p className="mt-2 text-sm leading-relaxed text-sub">
            応募を決める前の質問や、
            <br />
            仕事内容を聞くだけでも大丈夫です。
          </p>
          <div className="mt-5 grid gap-3">
            <a
              href={COMPANY.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversion("line_call", "recruit")}
              className="flex min-h-12 items-center justify-center rounded-full bg-[#06C755] px-5 font-bold text-white"
            >
              LINE通話で応募・相談
            </a>
            <a
              href={COMPANY.lineAddUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversion("line_add", "recruit")}
              className="flex min-h-12 items-center justify-center rounded-full border border-[#06C755] bg-white px-5 font-bold text-[#069c43]"
            >
              LINEチャットで応募・相談
            </a>
          </div>
          <a
            href={`mailto:${COMPANY.email}`}
            onClick={() => trackConversion("email", "recruit")}
            className="mt-4 block min-h-11 text-center text-sm leading-[2.75rem] text-sub underline underline-offset-4"
          >
            メールで応募・相談
          </a>
        </div>

        <div className="mt-10 hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {/* 1. 電話 */}
          <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6">
            <p className="text-base font-bold text-bronze">電話で応募する</p>
            <div className="mt-3 flex flex-1 flex-col items-center justify-center gap-3">
              <a
                href={COMPANY.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion("line_call", "recruit")}
                className="flex min-h-10 w-44 items-center justify-center rounded-full bg-[#06C755] px-5 text-sm font-bold text-white transition-opacity hover:opacity-75"
              >
                LINE通話をかける
              </a>
              <Image src="/images/call.png" alt="LINE通話QRコード" width={120} height={120} />
            </div>
            <p className="mt-3 text-center text-xs text-black">
              QRコードを読み取るか、ボタンをタップ
            </p>
            <p className="mt-1 text-center text-xs text-black">受付時間：平日 {COMPANY.hours}</p>
          </div>
          {/* 2. LINE */}
          <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6">
            <p className="text-base font-bold text-bronze">LINEで応募する</p>
            <div className="mt-3 flex flex-1 flex-col items-center justify-center gap-3">
              <a
                href={COMPANY.lineAddUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion("line_add", "recruit")}
                className="flex min-h-10 w-44 items-center justify-center rounded-full bg-[#06C755] px-5 text-sm font-bold text-white transition-opacity hover:opacity-75"
              >
                友だち追加
              </a>
              <a
                href={COMPANY.lineAddUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion("line_add", "recruit")}
                className="block h-[120px] w-[120px] transition-opacity hover:opacity-70"
              >
                <Image
                  src="/images/line-qr.png"
                  alt="LINE友だち追加QRコード"
                  width={120}
                  height={120}
                />
              </a>
            </div>
            <p className="mt-3 text-center text-xs text-black">
              QRコードを読み取るか、ボタンをタップ
            </p>
            <p className="mt-1 text-center text-xs text-black">LINE ID：{COMPANY.line}</p>
          </div>
          {/* 3. メール */}
          <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 sm:col-span-2 sm:grid sm:grid-cols-[1fr_auto] sm:items-center sm:gap-x-8 lg:col-span-1 lg:flex lg:items-stretch">
            <p className="text-base font-bold text-bronze">メールで応募する</p>
            <div className="mt-3 flex flex-1 flex-col items-center justify-center gap-3 sm:col-start-2 sm:row-span-2 sm:mt-0 lg:mt-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <a
                href={`mailto:${COMPANY.email}`}
                onClick={() => trackConversion("email", "recruit")}
                className="flex min-h-10 w-44 items-center justify-center rounded-full bg-navy px-5 text-sm font-bold text-white transition-opacity hover:opacity-75"
              >
                メールを送る
              </a>
            </div>
            <p className="mt-3 break-all text-center text-xs text-black sm:text-left lg:text-center">
              {COMPANY.email}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
