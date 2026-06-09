# 株式会社 外山建設 コーポレートサイト

## プロジェクト概要

新潟県県央地区を中心とした土木・外構工事会社のコーポレートサイト。
問い合わせ・採用応募の促進を目的とする1ページ（スクロール型）サイト。

## 技術スタック

- **フレームワーク**: Next.js（静的生成・SSG）
- **スタイリング**: Tailwind CSS
- **言語**: TypeScript
- **ホスティング**: Cloudflare Pages
- **コード管理**: GitHub

## ディレクトリ構成

```
/
├── public/
│   └── images/          # 画像ファイル（200KB以下に圧縮済みのもの）
├── src/
│   ├── app/
│   │   ├── layout.tsx        # 共通レイアウト（フッターのみ）
│   │   ├── page.tsx          # 営業LP（/）
│   │   └── recruit/
│   │       ├── layout.tsx    # 採用ページ用レイアウト
│   │       └── page.tsx      # 採用専用ページ（/recruit）
│   └── components/
│       ├── common/
│       │   ├── Header.tsx    # ヘッダー（ページごとに nav が異なるため props で切替）
│       │   └── Footer.tsx
│       ├── lp/
│       │   ├── Hero.tsx
│       │   ├── Services.tsx
│       │   ├── WhyUs.tsx
│       │   ├── License.tsx
│       │   ├── About.tsx
│       │   └── Contact.tsx
│       └── recruit/
│           ├── Hero.tsx
│           ├── Promise.tsx
│           ├── DailySchedule.tsx
│           ├── CareerPath.tsx
│           ├── Message.tsx
│           ├── JobSpec.tsx
│           ├── Faq.tsx
│           └── Apply.tsx
├── CLAUDE.md
└── package.json
```

## デザイン・カラー

サイト全体で以下のカラーを統一して使用する。

```
メインカラー : #1E3A5F（紺）
アクセント   : #C9A84C（ゴールド）
背景        : #F7F5F2（オフホワイト）
テキスト    : #1A1A1A
サブテキスト : #666666
```

## コーディング規約

- コンポーネントは1ファイル1コンポーネント
- ファイル名はPascalCase（例: `RecruitSection.tsx`）
- 画像は必ず `next/image` の `<Image>` コンポーネントを使う
- `className` はTailwind CSSのユーティリティクラスで記述
- ハードコードの文字列・電話番号・住所は `src/constants/company.ts` にまとめる

## 会社情報定数（company.ts）

```ts
export const COMPANY = {
  name: "株式会社 外山建設",
  address: "〒955-0014 新潟県三条市西潟14-23",
  fax: "0256-55-5048",
  line: "@264ghvzz",
  lineUrl: "https://lin.ee/WdKxxdx",
  lineAddUrl: "https://lin.ee/svXKisk",
  email: "toyama.kensetsu@outlook.com",
  hours: "8:00〜17:30",
  holiday: "第2・第4土曜・日曜・祝日・年末年始",
  area: "新潟県 県央地区 / 近隣エリア",
};
```

## ページ構成（セクション順）

1. Header（固定ナビ・電話ボタン・採用応募ボタン）
2. Hero（メインビジュアル・キャッチコピー・CTA）
3. Services（事業内容 4項目カード）
4. License（建設業許可・資格・保険）
5. About（会社概要テーブル + Googleマップ）
6. Recruit（採用情報・給与・1日の流れ）
7. Contact（LINE通話・LINEチャット・メール）
8. Footer

> 施工実績セクションは **フェーズ2** で追加予定。現時点では実装しない。

## 画像の扱い

- 保存先: `public/images/`
- 命名規則: `hero-bg.jpg` / `works-01.jpg`（小文字・ハイフン区切り）
- 必ずSquoosh等で圧縮し **1枚200KB以下** にしてからコミットする
- 外部ストレージ（S3等）は使用しない

## お問い合わせ

LINE通話・LINEチャット・メールの3手段で実装する。Googleフォームは使用しない。

```tsx
{
  /* LINE通話 */
}
<a href="https://line.me/R/XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
  LINE通話で相談する
</a>;

{
  /* LINEチャット */
}
<a href="https://line.me/ti/p/XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
  LINEチャットで相談する
</a>;

{
  /* メール */
}
<a href="mailto:info@example.com">メールで相談する</a>;
```

LINE URLは `src/constants/company.ts` の `lineUrl` に定数化する。

## Googleマップ埋め込み

会社概要セクションにiframeで埋め込む。APIキーは不要。
Google マップの「共有 → 地図を埋め込む」から取得したiframe URLをそのまま使用する。

## ローカル開発

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 本番ビルド確認
```

## デプロイ

git push → GitHub → Cloudflare Pagesが自動ビルド・デプロイ。
手動操作は不要。

## 未完了・仮データ（差し替えリスト）

- [ ] メールアドレス（現在 `info@example.com`）
- [ ] 建設業許可番号（現在「○○」）
- [ ] 加入保険の正式名称
- [ ] LINE公式アカウントのURL
- [ ] ヒーロー背景画像（実際の施工・現場写真）
