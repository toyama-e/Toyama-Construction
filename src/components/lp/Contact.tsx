"use client";

import Image from "next/image";
import { COMPANY } from "@/constants/company";
import { trackConversion } from "@/lib/analytics";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-offwhite">
      <div className="mx-auto max-w-5xl px-4 py-12 md:py-24">
        <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-bronze">
          <span className="h-px w-6 bg-bronze" />
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-black md:text-5xl">
          お問い合わせ
        </h2>
        <p className="mt-4 text-sm text-gray-700">相談・見積りなど、お気軽にご連絡ください。</p>

        <div className="mt-8 border-y border-bronze/60 py-6 sm:hidden">
          <p className="font-display text-xl font-bold text-ink">LINEなら、そのまま相談できます</p>
          <p className="mt-2 text-sm leading-relaxed text-sub">
            工事の相談はLINE通話またはチャットから。写真を送っていただくこともできます。
          </p>
          <div className="mt-5 grid gap-3">
            <a
              href={COMPANY.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversion("line_call", "contact")}
              className="flex min-h-12 items-center justify-center rounded-full bg-[#06C755] px-5 font-bold text-white"
            >
              LINE通話で相談する
            </a>
            <a
              href={COMPANY.lineAddUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackConversion("line_add", "contact")}
              className="flex min-h-12 items-center justify-center rounded-full border border-[#06C755] bg-white px-5 font-bold text-[#069c43]"
            >
              LINEチャットで相談する
            </a>
          </div>
          <a
            href={`mailto:${COMPANY.email}`}
            onClick={() => trackConversion("email", "contact")}
            className="mt-4 block min-h-11 text-center text-sm leading-[2.75rem] text-sub underline underline-offset-4"
          >
            メールで問い合わせる
          </a>
        </div>

        <div className="mt-10 hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {/* 1. 電話 */}
          <div className="flex flex-col rounded-2xl border border-gray-200 bg-gray-100 p-6">
            <p className="text-base font-bold text-bronze">電話で問い合わせる</p>
            <div className="mt-3 flex flex-1 flex-col items-center justify-center gap-3">
              <a
                href={COMPANY.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion("line_call", "contact")}
                className="inline-block rounded-full bg-[#06C755] px-6 py-2 text-sm font-bold text-white transition-opacity hover:opacity-75"
              >
                LINE通話をかける
              </a>
              <Image src="/images/call.png" alt="電話" width={80} height={80} />
            </div>
            <p className="mt-3 text-center text-xs text-black">
              QRコードを読み取るか、ボタンをタップ
            </p>
            <p className="mt-1 text-center text-xs text-black">受付時間：平日 {COMPANY.hours}</p>
          </div>
          {/* 2. LINE */}
          <div className="flex flex-col rounded-2xl border border-gray-200 bg-gray-100 p-6">
            <p className="text-base font-bold text-bronze">LINEで問い合わせる</p>
            <div className="mt-3 flex flex-1 flex-col items-center justify-center gap-3">
              <a
                href={COMPANY.lineAddUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion("line_add", "contact")}
                className="inline-block rounded-full bg-[#06C755] px-6 py-2 text-sm font-bold text-white transition-opacity hover:opacity-75"
              >
                友だち追加
              </a>
              <a
                href={COMPANY.lineAddUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackConversion("line_add", "contact")}
                className="transition-opacity hover:opacity-70"
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
          <div className="flex flex-col rounded-2xl border border-gray-200 bg-gray-100 p-6">
            <p className="text-base font-bold text-bronze">メールで問い合わせる</p>
            <div className="mt-3 flex flex-1 flex-col items-center justify-center gap-3">
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
                onClick={() => trackConversion("email", "contact")}
                className="inline-block rounded-full bg-black px-6 py-2 text-sm font-bold text-white transition-opacity hover:opacity-75"
              >
                メールを送る
              </a>
            </div>
            <p className="mt-3 text-center text-xs text-black">{COMPANY.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
