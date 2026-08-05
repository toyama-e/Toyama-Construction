export type PageKey = "lp" | "company" | "recruit" | "privacy";

export const PAGE_NAV = {
  lp: [
    { label: "事業内容", href: "#services" },
    { label: "外山建設について", href: "#company" },
    { label: "お問い合わせ", href: "#contact" },
  ],
  company: [
    { label: "私たちの特徴", href: "#strengths" },
    { label: "会社概要", href: "#about" },
    { label: "許可・資格・保険", href: "#license" },
    { label: "お問い合わせ", href: "#contact" },
  ],
  recruit: [
    { label: "募集要項", href: "#jobspec" },
    { label: "入社後の2つの約束", href: "#promise" },
    { label: "1日の流れ", href: "#schedule" },
    { label: "代表より", href: "#message" },
    { label: "よくある質問", href: "#faq" },
  ],
  privacy: [
    { label: "トップ", href: "/" },
    { label: "事業内容", href: "/#services" },
    { label: "会社案内", href: "/company" },
    { label: "採用情報", href: "/recruit" },
  ],
} satisfies Record<PageKey, ReadonlyArray<{ label: string; href: string }>>;

export const PAGE_CTA = {
  lp: { label: "採用情報を見る", href: "/recruit" },
  company: { label: "採用情報を見る", href: "/recruit" },
  recruit: { label: "今すぐ応募", href: "#apply" },
  privacy: null,
} satisfies Record<PageKey, { label: string; href: string } | null>;
