import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { COMPANY } from "@/constants/company";

const sections = [
  {
    title: "1. 取得する情報",
    body: "当社は、LINE通話、LINEチャット、メールなどを通じて、次の情報を取得することがあります。",
    items: [
      "氏名、住所",
      "電話番号、メールアドレス、LINEアカウントなどの連絡先",
      "工事の相談内容、見積りに必要な情報、送付された写真",
      "採用への応募内容、経歴、保有資格などの情報",
      "その他、お問い合わせへの対応に必要な情報",
    ],
  },
  {
    title: "2. 利用目的",
    body: "取得した個人情報は、次の目的で利用します。",
    items: [
      "工事に関する相談、お問い合わせへの対応",
      "現地確認、見積り、契約、施工およびアフターフォロー",
      "採用に関する連絡、選考および入社手続き",
      "当社からの必要な連絡",
      "トラブルの防止および対応",
      "法令上必要な手続き",
    ],
    note: "上記以外の目的で利用する場合は、あらかじめ本人の同意を得ます。",
  },
  {
    title: "3. 第三者提供および業務委託",
    body: "当社は、法令に基づく場合や、人の生命、身体または財産を守るために必要で本人の同意を得ることが難しい場合を除き、本人の同意なく個人情報を第三者へ提供しません。",
    note: "工事その他の業務に必要な範囲で、協力会社や業務委託先へ個人情報の取り扱いを委託することがあります。その場合は、提供する情報を必要最小限に限定し、委託先に適切な管理を求めます。",
  },
  {
    title: "4. 個人情報の管理",
    body: "当社は、個人情報の漏えい、紛失、改ざん、不正アクセスなどを防ぐため、必要かつ適切な安全管理措置を講じます。個人情報は利用目的に必要な期間だけ保管し、不要になった場合は適切な方法で削除または廃棄します。",
  },
  {
    title: "5. 採用応募者の情報",
    body: "不採用となった応募者の個人情報は、選考終了後、保管する必要がなくなり次第、速やかに削除または廃棄します。採用した方の情報は、雇用管理に必要な範囲で引き続き利用します。",
  },
  {
    title: "6. LINEおよびメールの利用",
    body: "当社へのお問い合わせや応募には、LINEおよびメールを利用できます。これらの外部サービスにおける情報の取り扱いには、各サービス提供会社の利用規約およびプライバシーポリシーも適用されます。当社では、LINE通話の内容を録音しません。",
    note: "個人番号、金融機関の暗証番号、クレジットカード番号など、相談や応募に必要のない重要な情報は送信しないでください。",
  },
  {
    title: "7. アクセス解析とCookie等の利用",
    body: "当サイトでは、サイトの利用状況を把握し、サービスや採用情報の改善に役立てるため、Google Analyticsを利用します。Google AnalyticsはCookie等を使用し、閲覧ページ、流入元、サイト内のリンク操作等の利用情報を収集します。収集された情報はGoogle社のプライバシーポリシー等に基づいて管理されます。",
    note: "Cookieはブラウザの設定により無効にできます。ただし、その場合はアクセス解析に関する一部の情報が収集されなくなります。",
    externalLink: {
      href: "https://policies.google.com/technologies/partner-sites?hl=ja",
      label: "Googleのサービスを使用するサイトやアプリから収集した情報のGoogleによる使用",
    },
  },
  {
    title: "8. 開示・訂正・利用停止等",
    body: "本人から、当社が保有する個人情報について、開示、訂正、追加、削除、利用停止または第三者提供の停止を求められた場合は、本人確認を行ったうえで、法令に従って対応します。ご希望の場合は、下記のお問い合わせ窓口までご連絡ください。",
  },
  {
    title: "9. 本ポリシーの変更",
    body: "当社は、法令の改正や運用内容の変更などに応じて、本プライバシーポリシーを変更することがあります。変更後の内容は、このホームページへ掲載した時点から適用します。",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-dvh bg-offwhite text-ink">
      <Header page="privacy" alwaysVisible />
      <main className="pt-16 lg:pt-20">
        <section className="bg-paleblue">
          <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-20">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-bronze">
              <span className="h-px w-6 bg-bronze" />
              Privacy Policy
            </p>
            <h1 className="font-display mt-3 text-3xl font-bold tracking-tight text-black md:text-5xl">
              プライバシーポリシー
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-sub md:text-base">
              {COMPANY.name}（以下「当社」といいます）は、お客様および採用応募者の個人情報を
              適切に取り扱うため、以下のとおりプライバシーポリシーを定めます。
            </p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-5 py-12 md:px-8 md:py-20">
            <div className="divide-y divide-navy/10 border-y border-bronze/60">
              {sections.map((section) => (
                <section key={section.title} className="py-7 md:py-10">
                  <h2 className="font-display text-xl font-bold text-black md:text-2xl">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-[15px] leading-8 text-sub md:text-base">{section.body}</p>
                  {section.items && (
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-7 text-sub md:text-base">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {section.note && (
                    <p className="mt-4 text-[15px] leading-8 text-sub md:text-base">
                      {section.note}
                    </p>
                  )}
                  {"externalLink" in section && section.externalLink && (
                    <p className="mt-4 text-[15px] leading-8 md:text-base">
                      <a
                        href={section.externalLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-gray-300 underline-offset-4 transition-colors hover:text-bronze"
                      >
                        {section.externalLink.label}
                        <span className="ml-1" aria-hidden="true">
                          ↗
                        </span>
                      </a>
                    </p>
                  )}
                </section>
              ))}
            </div>

            <section className="mt-10 bg-gray-100 p-5 md:p-8">
              <h2 className="font-display text-xl font-bold text-black md:text-2xl">
                10. お問い合わせ窓口
              </h2>
              <div className="mt-4 space-y-2 text-[15px] leading-7 text-sub md:text-base">
                <p>{COMPANY.name}</p>
                <p>{COMPANY.address}</p>
                <p>
                  メール：
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="break-all underline decoration-gray-300 underline-offset-4 hover:text-bronze"
                  >
                    {COMPANY.email}
                  </a>
                </p>
              </div>
            </section>

            <div className="mt-8 text-right text-sm leading-6 text-sub">
              <p>制定日：2026年8月4日</p>
              <p>最終改定日：2026年8月18日</p>
            </div>
          </div>
        </section>
      </main>
      <Footer page="privacy" />
    </div>
  );
}
