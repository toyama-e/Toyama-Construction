import Image from "next/image";
import { COMPANY } from "@/constants/company";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
        <p className="text-sm font-medium uppercase tracking-widest text-gold">Contact</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-black md:text-3xl">
          お問い合わせ
        </h2>
        <p className="mt-4 text-sm text-gray-700">相談・見積りなど、お気軽にご連絡ください。</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* 1. 電話 */}
          <div className="flex flex-col rounded-2xl border border-gray-200 bg-gray-100 p-6">
            <p className="text-base font-bold text-gold">電話で問い合わせる</p>
            <div className="mt-3 flex flex-1 flex-col items-center justify-center gap-3">
              <a
                href={COMPANY.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-[#06C755] px-6 py-2 text-sm font-bold text-white transition-opacity hover:opacity-75"
              >
                LINE通話をかける
              </a>
              <Image src="/call.png" alt="電話" width={80} height={80} />
            </div>
            <p className="mt-3 text-center text-xs text-black">
              QRコードを読み取るか、ボタンをタップ
            </p>
            <p className="mt-1 text-center text-xs text-black">受付時間：平日 {COMPANY.hours}</p>
          </div>
          {/* 2. LINE */}
          <div className="flex flex-col rounded-2xl border border-gray-200 bg-gray-100 p-6">
            <p className="text-base font-bold text-gold">LINEで問い合わせる</p>
            <div className="mt-3 flex flex-1 flex-col items-center justify-center gap-3">
              <a
                href="https://lin.ee/TjLtnmk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-[#06C755] px-6 py-2 text-sm font-bold text-white transition-opacity hover:opacity-75"
              >
                友だち追加
              </a>
              <a
                href="https://lin.ee/TjLtnmk"
                target="_blank"
                rel="noopener noreferrer"
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
          </div>
          {/* 3. メール */}
          <div className="flex flex-col rounded-2xl border border-gray-200 bg-gray-100 p-6">
            <p className="text-base font-bold text-gold">メールで問い合わせる</p>
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
