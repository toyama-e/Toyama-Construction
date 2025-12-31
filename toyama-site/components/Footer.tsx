export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()} 株式会社 外山建設
        </p>

        <div className="flex flex-wrap gap-4 text-sm">
          <a className="text-slate-600 hover:underline" href="#company">
            会社概要
          </a>
          <a className="text-slate-600 hover:underline" href="#recruit">
            採用
          </a>
          <a className="text-slate-600 hover:underline" href="#contact">
            お問い合わせ
          </a>
        </div>
      </div>
    </footer>
  );
}
