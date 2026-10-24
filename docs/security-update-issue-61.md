# Issue #61：Next.jsセキュリティ更新の検証記録

確認日：2026年10月25日  
対象：[Issue #61](https://github.com/toyama-e/Toyama-Construction/issues/61)

## 更新内容

| パッケージ               | 更新前                     | 更新後       |
| ------------------------ | -------------------------- | ------------ |
| next                     | 16.2.4                     | 16.4.3       |
| eslint-config-next       | 16.2.4                     | 16.4.3       |
| react / react-dom        | 19.2.5                     | 19.2.9       |
| sharp（Next.js経由）     | 0.34.5                     | 0.35.5       |
| postcss                  | 8.5.15 / Next.js配下8.4.31 | 8.5.23へ統一 |
| baseline-browser-mapping | 2.10.21                    | 2.11.32      |
| source-map-js            | 1.2.1                      | 1.2.2        |

Next.jsとReact本体を併せて更新し、Next.js内部のRSC実装もフレームワークの修正版へ更新した。`output: "export"`と`images.unoptimized: true`を維持し、サーバー機能は追加していない。更新範囲はpackage.jsonとpackage-lock.json、および調査報告書・本記録。

公式根拠：[Next.jsセキュリティ更新](https://nextjs.org/blog/nextjs-security-update-october-14-2026)、[開発用MCPエンドポイントの情報漏えい](https://github.com/vercel/next.js/security/advisories/GHSA-39w2-rjm5-chcv)、[React RSCの公式告知](https://github.com/react/react/security/advisories/GHSA-xqc2-xf4c-x3h3)。公開バージョンとpeerDependenciesはnpm公式レジストリでも確認した。

## 確認結果

- `npm ci`：成功。更新したlockfileから再インストールできる。
- `npm test -- --run`：9ファイル・29テスト成功。
- `npm run lint`：エラー0。既存テストのimg関連警告4件のみ。
- `npm run build`：成功。主要4ページを含め全ルートを静的出力。
- `npm audit --omit=dev`：指摘0件（更新前6項目）。
- `npm audit`：9項目（High 5 / Moderate 4 / Critical 0）。更新前17項目から減少。
- package.json / package-lock.jsonのPrettier確認と`git diff --check`：成功。
- 主要4ページの静的HTML：ローカル画像・スクリプト等の参照切れなし。新規タブの外部リンクにnoopener / noreferrerを確認。

## ブラウザー確認

静的出力をローカルで配信して確認した。375px幅と1440px幅でトップ・会社案内・採用・プライバシーの各ページを確認。スマートフォンメニューからの遷移、募集要項の展開、Googleマップの実表示を確認した。採用ページは月給20万円〜、募集要項の休憩2時間、1日の流れの昼休憩1時間・午後13:00開始を維持している。

LINE通話・友だち追加・メール・Googleマップのリンク先を確認した。実際の発信・メッセージ送信・応募送信は実行していない。

GA4の独自クリック処理は既存のテスト5件が成功。ローカルに本番測定IDを設定していないため、Googleへの実送信や管理画面での受信は未確認。公開時にProduction環境変数を使ったプレビュービルドとGA4での受信を確認する。

## 残る指摘と追跡先

残る9項目はすべて開発依存で、[Issue #63](https://github.com/toyama-e/Toyama-Construction/issues/63)で対応する。

| パッケージ              | npm重要度 | 依存経路・現構成での条件                                                                           |
| ----------------------- | --------- | -------------------------------------------------------------------------------------------------- |
| @humanfs/node           | Moderate  | ESLint経由。悪意あるシンボリックリンクを含むコピー処理の問題。サイト訪問者の入力を処理する機能なし |
| @vitest/mocker / vitest | Moderate  | Vitest経由。独立mockerPluginやBrowser Modeを公開する設定なし                                       |
| brace-expansion         | High      | 開発ツールのパターン展開。訪問者からパターンを受け付けない                                         |
| browserslist            | High      | ビルド時の設定・カスタム統計等が対象。訪問者の入力経路なし                                         |
| js-yaml                 | High      | ESLint関連。訪問者のYAML受付なし                                                                   |
| postcss-selector-parser | Moderate  | Tailwind CSS経由のビルド処理。訪問者のCSS受付なし                                                  |
| undici                  | High      | jsdom経由。テスト環境での外部通信等の使用条件に依存                                                |
| vite                    | High      | Vitest / plugin-react経由。Vite開発サーバーを公開する構成なし                                      |

この表は監査severityと現構成の到達条件を分けた整理であり、開発環境の安全性を保証するものではない。Node.jsの更新は[Issue #62](https://github.com/toyama-e/Toyama-Construction/issues/62)で扱う。

本記録は公開前の検証結果。GA4の実受信は公開時の残確認とし、IssueのクローズはPR・公開後の確認を含めて判断する。
