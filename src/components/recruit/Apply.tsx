"use client";

import Image from "next/image";
import { COMPANY } from "@/constants/company";

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
              className="flex min-h-12 items-center justify-center rounded-full bg-[#06C755] px-5 font-bold text-white"
            >
              LINE通話で応募・相談
            </a>
            <a
              href={COMPANY.lineAddUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-center rounded-full border border-[#06C755] bg-white px-5 font-bold text-[#069c43]"
            >
              LINEチャットで応募・相談
            </a>
          </div>
          <a
            href={`mailto:${COMPANY.email}`}
            className="mt-4 flex min-h-12 w-full items-center justify-center rounded-full border border-navy bg-white px-5 text-sm font-bold text-navy"
          >
            メールで応募する
          </a>
        </div>

        <div className="mt-10 hidden sm:block">
          <div className="grid grid-cols-2 gap-4">
            {/* 1. 電話 */}
            <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6">
              <p className="text-base font-bold text-bronze">電話で応募する</p>
              <div className="mt-3 flex flex-1 flex-col items-center justify-center gap-3">
                <a
                  href={COMPANY.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  className="flex min-h-10 w-44 items-center justify-center rounded-full bg-[#06C755] px-5 text-sm font-bold text-white transition-opacity hover:opacity-75"
                >
                  友だち追加
                </a>
                <Image
                  src="/images/line-qr.png"
                  alt="LINE友だち追加QRコード"
                  width={120}
                  height={120}
                />
              </div>
              <p className="mt-3 text-center text-xs text-black">
                QRコードを読み取るか、ボタンをタップ
              </p>
              <p className="mt-1 text-center text-xs text-black">LINE ID：{COMPANY.line}</p>
            </div>
          </div>
          <a
            href={`mailto:${COMPANY.email}`}
            className="mx-auto mt-6 flex min-h-12 w-full max-w-lg items-center justify-center rounded-full border border-navy bg-white px-6 text-sm font-bold text-navy transition-colors hover:bg-navy hover:text-white"
          >
            メールで応募する
          </a>
        </div>
      </div>
    </section>
  );
}
