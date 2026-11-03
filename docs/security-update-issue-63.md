# Issue #63：開発・ビルド依存のセキュリティ更新

確認日：2026年11月3日  
対象：[Issue #63](https://github.com/toyama-e/Toyama-Construction/issues/63)

## 更新方針と内容

Node.js 24.22.1 / npm 11.19.1で、既存のpackage.jsonが許可する範囲の依存関係を`npm update`で更新した。Next.js / Reactの固定バージョンと静的エクスポート設定は維持している。直接依存のPostCSSとVitestは、package.jsonにも更新後の最低バージョンを明記した。`npm audit fix --force`、依存の強制置換、監査の除外設定は使用していない。

| パッケージ               | 更新前  | 更新後  |
| ------------------------ | ------- | ------- |
| postcss（直接依存）      | 8.5.23  | 8.5.32  |
| vitest / @vitest/mocker  | 4.1.8   | 4.1.12  |
| vite                     | 8.0.16  | 8.3.5   |
| @humanfs/node            | 0.16.7  | 0.16.8  |
| baseline-browser-mapping | 2.11.32 | 2.11.35 |
| brace-expansion（1系）   | 1.1.14  | 1.1.21  |
| browserslist             | 4.28.1  | 4.29.5  |
| js-yaml                  | 4.1.1   | 4.3.2   |
| postcss-selector-parser  | 6.1.2   | 6.1.5   |
| undici（jsdom経由）      | 7.27.1  | 7.30.1  |
| eslint                   | 9.39.2  | 9.39.5  |
| tailwindcss              | 3.4.17  | 3.4.19  |

Next.js配下のPostCSSは修正済みの8.5.23を維持する。Issueにある@babel/core 7.29.7、nanoid 3.3.20、sharp 0.35.5、source-map-js 1.2.2、zod 4.6.7には今回の監査で指摘なし。その他の互換範囲内の更新はpackage-lock.jsonに記録している。

公式根拠：[PostCSS](https://github.com/postcss/postcss/security/advisories/GHSA-fxqj-rqcc-2cmp)、[Vitest mocker](https://github.com/vitest-dev/vitest/security/advisories/GHSA-qxg6-89mg-rqv8)、[Vite](https://github.com/vitejs/vite/security/advisories/GHSA-rq7h-c2jc-7f22)。

## 監査結果

| 監査                   | 更新前                         | 更新後                 |
| ---------------------- | ------------------------------ | ---------------------- |
| `npm audit`            | 26項目（High 5 / Moderate 21） | 17項目（Moderateのみ） |
| `npm audit --omit=dev` | 0項目                          | 0項目                  |

件数は依存元への波及を含むパッケージ項目数であり、独立した脆弱性数ではない。10月25日の9項目という記録とは監査日が異なる。更新後に残る17項目の根本原因は、10月27日公開の[GHSA-g3hv-75wg-m249 / CVE-2026-118764](https://github.com/advisories/GHSA-g3hv-75wg-m249)の1件。Issue作成時に挙がっていた指摘は今回の監査では解消した。

## 新たな残存項目の個別判断

- 対象：ESLint / eslint-config-next / 各lintプラグイン経由のminimatch 3.1.5、およびtypescript-eslint経由の10.2.6。
- 告知の対象範囲は11.0.1未満。記載された攻撃条件は、攻撃者がglobパターンを制御し、`optimizationLevel >= 2`の前処理でCPU・メモリを消費させること。
- 現構成はリポジトリ内のファイル・設定を対象とする開発時のlint用途。訪問者からglobパターンを受け取る機能はなく、静的サイトの本番HTTP経由の到達経路は確認していない。確認したESLint / config-array / typescript-estreeのコードに`optimizationLevel`の明示指定はなかった。監査結果は除外せず残す。
- 強制更新を避けた理由：ESLint 9やeslint-plugin-react等は`require('minimatch')`を関数として使用している。11系への一括overrideは3系からのAPI互換性を保証できない。npmが提案するESLint 4や古いeslint-config-nextへのダウングレードも採用しない。npm公式レジストリで確認した最新ESLint 10.14.0もminimatch `^10.2.6`へ依存しており、ESLint本体のメジャー更新だけでは解消しない。
- 暫定対策：信頼できないglob・lint設定を外部入力から渡さない。外部の変更をlintする際は設定変更を先に確認し、秘密情報や本番権限を持たない環境で実行する。
- 追跡先：上記Advisoryと[Issue #63](https://github.com/toyama-e/Toyama-Construction/issues/63)。ESLint、eslint-plugin-import / jsx-a11y / react、typescript-eslintの互換性のある修正版を確認し、更新後に全依存監査を再実行する。現時点で監査0件とは扱わず、Issueのクローズ時にこの残存項目を判断する。

## 検証結果

- `npm ci`：成功。lockfileから再インストールできる。
- `npm test -- --run`：9ファイル・29テスト成功。
- `npm run lint`：エラー0。既存のテスト用imgモックの警告4件を維持。
- `npm run build`：成功。主要4ページを含む全ルートを静的出力。
- 主要4ページの静的HTMLから参照するローカル画像・スクリプト・スタイルの存在、LINE通話・友だち追加・メールのhref、新規タブリンクのnoopener / noreferrerを確認。参照切れ・設定漏れなし。Prettierと`git diff --check`も成功。
- 通常環境の初回ビルドはGoogle Fontsへ接続できず失敗。ネットワークアクセスを許可した再実行でもTurbopackのキャンセルされたキャッシュに起因する解決エラーが出たため、生成物`.next`を削除して再実行し成功した。フォントやソースを代替実装へ変更していない。
- Vitest実行時に、将来のViteのnative config loaderに関する設定形式の警告あり。現バージョンのテストは成功しており、警告の抑制設定は追加していない。
- npmはESLint 9.39.5のサポート終了と、任意依存fseventsのinstall scriptが未承認である旨を通知した。スクリプトの許可設定は拡張していない。

## 表示確認

静的出力をローカル配信し、アプリ内ブラウザーで主要4ページを確認した。375 / 320 / 390 / 430 / 768 / 1024 / 1440pxの各幅でdocumentの横幅超過なし、確認時点で読込失敗が確定した画像なし。375pxでトップと会社案内、採用の表示、1440pxでプライバシーポリシーの表示を目視確認。スマートフォンメニューの展開と募集要項の展開も確認した。

実機iPhone Safari / Android Chromeでの確認、Googleマップの外部読込・GA4の実受信は未確認。LINE発信・メッセージ・応募メールの送信は行っていない。公開前の実機確認は引き続き必要。
