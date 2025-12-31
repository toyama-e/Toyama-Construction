import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        {/* ロゴ＋会社名 */}
        <Link href="#top" className="flex items-center gap-3">
          <Image
            src="/images/simple.png"
            alt="株式会社 外山建設 ロゴ"
            width={45}
            height={45}
            priority
          />
          <span className="text-lg md:text-xl font-semibold tracking-tight">
            株式会社 外山建設
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm md:flex">
          <a className="hover:underline" href="#services">
            事業内容
          </a>
          <a className="hover:underline" href="#works">
            施工実績
          </a>
          <a className="hover:underline" href="#company">
            会社概要
          </a>
          <a className="hover:underline" href="#recruit">
            採用情報
          </a>
          <a className="hover:underline" href="#contact">
            お問い合わせ
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:000-0000-0000"
            className="rounded-full border border-slate-300 px-3 py-2 text-sm font-medium hover:bg-slate-50"
          >
            電話する
          </a>
          <a
            href="#recruit"
            className="rounded-full bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            採用応募
          </a>
        </div>
      </div>
    </header>
  );
}
