# セキュリティ調査報告書

調査日：2026年10月25日（日本時間）  
対象：株式会社 外山建設 コーポレートサイト  
ソース：develop / `7eca1fa`、公開サイト：`https://toyama-kensetsu.com`

## 結論

調査範囲では、公開サイトで直ちに悪用できる重大な攻撃経路は確認できませんでした。ただし、既知の脆弱性を含む依存関係と開発環境、公開ヘッダーの改善点があり、「脆弱性なし」とは判断できません。

Next.jsを静的エクスポートし、Cloudflare Pagesから配信する構成は、サーバー向けの脆弱性の多くを本番から切り離しています。これは更新を不要にする理由にはならず、開発・ビルド環境は別途保護が必要です。

この調査ではアプリケーションのソース・設定・依存関係を変更していません。報告書のみを追加しました。

## 調査方法と範囲

1. 技術スタックを確認し、各プロジェクトの公式セキュリティ告知・公式GitHub Security Advisoriesを参照。
2. `package.json`・`package-lock.json`の固定バージョンを照合。
3. `npm audit --json` と `npm audit --omit=dev --json` を実行。
4. `src`のTypeScript/TSX/CSS 45ファイルを対象に、外部入力、HTML・スクリプト生成、サーバー機能、外部通信、リンクを調査。該当箇所を個別確認。
5. 設定ファイル、公開ファイル、Git追跡中のテキストに対して秘密鍵・主要トークン・認証情報のパターン検索を実施。
6. 公開4ページの通常のGET、HTTPからHTTPSへの転送、`.env`・`.git/config`・画像最適化エンドポイントの応答を確認。
7. ローカルの既存静的出力も確認。ソースマップは0件、Pages Functions用の出力は検出せず。

破壊的な試験、脆弱性の攻撃コード実行、負荷試験は実施していません。静的出力と公開サイトのコミット一致は確認していませんが、取得済みorigin/mainとdevelopの比較では、差分は直近の採用条件修正3ファイルのみでした。

## 優先対応事項

| 優先度 | 項目                              | 判断と影響                                                                                                                | 推奨対応                                                                         |
| ------ | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 高     | Next.js 16.2.4                    | 複数の既知脆弱性の対象。サーバー向けRCE等の本番成立条件は現構成に見当たらないが、`next dev`の情報漏えいは開発時に関係する | 監査が提示する16.4.3等の修正版へ更新し、eslint-config-nextも整合させる           |
| 高     | 調査コマンドのNode.js 24.10.0     | 2026年10月のセキュリティリリースより古い。公開サイトのサーバーではなく、開発・ビルド側の問題                              | 24.22.1以降の修正済み24系LTS等へ更新。Cloudflareのビルド環境も別途確認           |
| 中     | PostCSS・Vite・Vitest等の依存関係 | 既知脆弱性あり。主に悪意ある入力をビルドに取り込む場合、または開発用サーバーの公開時に問題となる                          | 依存関係・lockfileを更新し、監査を再実行                                         |
| 中〜低 | CSP・埋め込み防止ヘッダー         | 公開4ページで未設定。他サイトへの埋め込みや、将来のXSSに対する防御層が不足                                                | Cloudflare Pagesの`public/_headers`等で設定。CSPは検証用設定から導入             |
| 低     | HSTS                              | HTTPSは有効、HTTPも301転送。ただしHSTSは未設定                                                                            | HTTPS運用を確認したうえで導入。サブドメイン一括適用・preloadは影響を確認して判断 |

優先度はこのプロジェクトでの対応順であり、各アドバイザリのCVSSやnpmのseverityとは別の評価です。

## 1. Next.js・Reactの既知脆弱性

根拠：`package.json:26`、`package-lock.json`、`next.config.ts:4`。

Next.js 16.2.4が固定されています。公式の2026年10月14日告知には、Cache Componentsと型付き配列のRCE、画像最適化APIのSVG処理に関するRCE、Server ActionsのDoSが含まれ、修正版は16.4.1です。今回のnpm監査は更新先として16.4.3を提示しています。[Next.js公式告知](https://nextjs.org/blog/nextjs-security-update-october-14-2026)

本プロジェクトは`output: "export"`、`images.unoptimized: true`です。Server Actions、`use cache`、Middleware/Proxy、`next/og`、API Route Handlerは検出していません。公開の`/_next/image`も404です。これらから、上記のサーバー向け攻撃が現在の公開構成で成立する経路は確認できませんでした。AVIF画像があることだけで画像最適化APIの脆弱性が成立するわけではありません。[静的エクスポートの公式仕様](https://nextjs.org/docs/app/guides/static-exports)

一方、GHSA-39w2-rjm5-chcvは`next dev`のMCPエンドポイントから、悪意あるWebサイトを介して開発情報が漏れる問題です。`package.json:6`で開発サーバーを利用するため、開発時は対応対象です。`devIndicators: false`はこの問題の修正ではありません。外部公開を避けることに加え、パッケージ更新が必要です。[公式アドバイザリ](https://github.com/vercel/next.js/security/advisories/GHSA-39w2-rjm5-chcv)

React/React DOMは19.2.5です。10月のRCE告知は主として`react-server-dom-*`を対象にしており、React本体のバージョン名だけからブラウザ上のRCEと判断していません。Next.js内部に含まれる実装もあるため、Reactだけを更新してNext.jsを据え置く対応では不十分です。Next.jsを更新し、React/React DOMは対応する安定版へ揃える方針が適切です。[React公式アドバイザリ](https://github.com/react/react/security/advisories/GHSA-xqc2-xf4c-x3h3)

## 2. 開発・ビルド用依存関係

PostCSSは直接依存8.5.15とNext.js配下8.4.31が存在します。悪意あるCSSの`sourceMappingURL`からファイルを読み取る問題などがあり、8.5.23までに修正された告知を確認しました。現在は訪問者からCSSを受け取る機能がないため、本番HTTP経由の成立経路は確認できません。ビルドに取り込むCSSや依存パッケージを含めた更新対象です。[PostCSS公式告知](https://github.com/postcss/postcss/security/advisories/GHSA-fxqj-rqcc-2cmp)

Vitest / @vitest/mocker 4.1.8、Vite 8.0.16にも指摘があります。@vitest/mockerの修正版は4.1.12。Vite 8.0〜8.1系については8.1.6で修正されたファイル公開問題があります。現在のVitest設定はjsdomによるテストで、Browser Mode、独立したmockerPlugin、APIサーバーの公開設定はありません。したがって、パッケージは該当しても、告知のリモート悪用条件は現設定では確認できませんでした。[Vitest公式告知](https://github.com/vitest-dev/vitest/security/advisories/GHSA-qxg6-89mg-rqv8)、[Vite公式告知](https://github.com/vitejs/vite/security/advisories/GHSA-rq7h-c2jc-7f22)

Undici 7.27.1はjsdom経由、js-yaml 4.1.1はESLint関連、Zod 4.2.1はeslint-plugin-react-hooks等の開発依存です。これらを、サイト訪問者から使えるAPIの脆弱性として数えていません。未信頼のソース・設定・リソースを開発ツールへ渡す場合のリスクとして更新します。

`npm audit`の結果は次のとおりです。

| 対象          | Critical | High | Moderate | Low | 合計 |
| ------------- | -------: | ---: | -------: | --: | ---: |
| 全依存        |        1 |   10 |        5 |   1 |   17 |
| dev依存を除外 |        1 |    4 |        1 |   0 |    6 |

この数値はnpmが集計したパッケージ項目数です。独立した脆弱性の件数や、本番で悪用可能な問題の件数ではありません。`--omit=dev`の結果にも、静的ビルド時だけ利用されるものが含まれます。[npm auditの公式仕様](https://docs.npmjs.com/cli/v11/commands/npm-audit/)

## 3. Node.js

調査コマンドの実行環境はNode.js `v24.10.0`、npm `11.6.0`でした。Node.js公式では10月21日に24.22.1等のセキュリティ更新が公開されています。TLS・DNS・Brotli等の修正を含むため、開発・ビルド用ランタイムの更新を推奨します。[公式リリース](https://nodejs.org/en/blog/release/v24.22.1)

`.nvmrc`、`.node-version`、package.jsonの`engines`によるNodeの指定は検出できません。`@types/node: ^20`は型定義の指定であり、実際のNodeバージョンを意味しません。Cloudflareのビルドランタイムの値は今回確認しておらず、Node 20で動いているとは断定していません。

## 4. 公開サイトのヘッダー

トップ・会社案内・採用・プライバシーの4ページがHTTPSで200を返すことを確認しました。

| 項目                                  | 確認結果                          | 評価                                                   |
| ------------------------------------- | --------------------------------- | ------------------------------------------------------ |
| HTTP→HTTPS                            | トップで301転送                   | 良好                                                   |
| X-Content-Type-Options                | `nosniff`                         | 良好                                                   |
| Referrer-Policy                       | `strict-origin-when-cross-origin` | 良好                                                   |
| Content-Security-Policy               | なし                              | 外部スクリプト・接続先等を制限する防御層が不足         |
| X-Frame-Options / CSP frame-ancestors | 両方なし                          | 第三者サイトへの埋め込みを制限できない                 |
| Strict-Transport-Security             | なし                              | HTTPS固定の追加対策を推奨                              |
| Permissions-Policy                    | なし                              | 未使用のカメラ・マイク等を制限する任意の強化策         |
| Access-Control-Allow-Origin           | `*`                               | 公開の静的コンテンツであり、単独では脆弱性と判断しない |

ヘッダー不足だけでXSSや情報漏えいが成立したと判断していません。ログイン・決済操作がないことから、クリックジャッキングの影響も限定的です。

Cloudflare Pagesでは`public/_headers`で静的応答のヘッダーを管理できます。CSPはNext.jsのインラインスクリプト、GA4、Googleマップを考慮し、Report-Onlyで確認してから適用するのが適切です。静的配信では、リクエストごとのnonceを前提としたサーバー実装をそのまま持ち込まず、ビルド時のハッシュ等を検討します。[Cloudflare公式仕様](https://developers.cloudflare.com/pages/configuration/headers/)

HSTSの導入時はサブドメインも含めたHTTPS運用を確認します。[Cloudflare公式HSTS説明](https://developers.cloudflare.com/ssl/edge-certificates/additional-options/http-strict-transport-security/)

## 5. ソースコードと公開情報

今回の確認で問題を見つけなかった項目：

- SQL、認証、アップロード、フォーム送信API、データベース、Server Actionsは実装されていません。SQLインジェクション、認証バイパス、ファイルアップロード、CSRFに対応する独自処理はありません。
- HTML直接挿入はJSON-LDの1か所。値はコード内の定数であり、訪問者入力やCMS入力から到達する経路は検出していません。
- Googleマップの住所は`encodeURIComponent`で処理されています。
- 静的HTML内の`target="_blank"`リンクは`noopener noreferrer`を確認しました。
- Git追跡中のテキストについて、秘密鍵・AWS/GitHub/Slackトークン・認証情報代入のパターンに一致する候補はありませんでした。これは網羅的な秘密情報検出を保証するものではありません。
- `.env`や秘密鍵等が追跡されているパスは検出せず、公開の`/.env`と`/.git/config`も404でした。GA4測定IDは公開前提の識別子であり、API秘密鍵として扱いません。
- lockfile内の取得先はnpm公式レジストリでした。ただし、これだけで依存パッケージの無害性を保証できません。
- GA4の独自クリックイベントはページ種別とリンク表示文言を送っており、応募内容やLINEの会話内容を送信する実装はありません。GA4の自動収集や管理画面の実設定は別途確認が必要です。

低優先の防御改善として、`GoogleAnalytics.tsx:41`の測定IDをJavaScriptへ直接埋め込む処理には形式検証を加えられます。現在は信頼するビルド環境変数だけが入力であり、外部の訪問者が値を書き換える経路はありません。現状のリモートXSSとしては計上していません。将来、CMS等へ入力元を変える際は必須の検討事項です。

## 6. 継続運用の改善

- まずNext.js・関連依存とNodeを更新し、その後にdev依存も含めて監査を再実行する。
- `npm audit fix --force`による一括適用を前提にせず、互換性と依存経路を確認する。
- `npm ci`を使った再現可能なビルド、テスト・lint・本番ビルド、LINE・地図・GA4の動作確認を行う。
- CSP等は公開後のレスポンスでも再確認する。Next.jsの設定だけで静的ホストのヘッダーが付くとは限らない。
- `.github`内の監査ワークフロー・Dependabot設定は現在のリポジトリにありません。GitHub管理画面側の既存設定を確認したうえで継続的な通知・監査を検討する。

## 7. 確認できていない範囲

Cloudflare/GitHub/Googleの管理画面には立ち入っていないため、MFA、権限、APIトークン、ブランチ保護、Secrets、Cloudflare WAF・ビルド環境変数、実際の公開成果物の全内容、GA4保持期間等の実設定は未確認です。LINE・メールアカウントの保護状況も対象外です。

Git履歴全体の秘密情報スキャン、全公開JavaScriptの逆解析、画像の位置情報等のメタデータ精査、侵害履歴・ログの調査は実施していません。今回の結果は「侵害がなかった」ことの証明ではありません。

## 付録A：主要スタックの確認先

| スタック                | 確認した値                                  | 公式セキュリティ情報と判定                                                                                                                                                                                         |
| ----------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Next.js                 | 16.2.4                                      | [公式Advisories](https://github.com/vercel/next.js/security/advisories)：対象あり                                                                                                                                  |
| React / React DOM       | 19.2.5 / 19.2.5                             | [公式Advisories](https://github.com/react/react/security/advisories)：RSC実装の条件を個別評価                                                                                                                      |
| TypeScript              | 5.9.3                                       | [公式Security](https://github.com/microsoft/TypeScript/security)：今回の監査で本体の該当指摘なし                                                                                                                   |
| Tailwind CSS            | 3.4.17（@tailwindcss/postcss 4.1.18も存在） | [公式Security](https://github.com/tailwindlabs/tailwindcss/security)：公開Advisoryなし。下位依存には指摘あり                                                                                                       |
| PostCSS                 | 8.5.15 / Next.js配下8.4.31                  | [公式Advisories](https://github.com/postcss/postcss/security/advisories)：対象あり                                                                                                                                 |
| Vitest / Vite           | 4.1.8 / 8.0.16                              | [Vitest](https://github.com/vitest-dev/vitest/security/advisories)、[Vite](https://github.com/vitejs/vite/security/advisories)：対象あり                                                                           |
| Testing Library / jsdom | React Testing Library 16.3.2 / jsdom 29.1.1 | [Testing Library](https://github.com/testing-library/react-testing-library/security/advisories)、[jsdom](https://github.com/jsdom/jsdom/security/advisories)：本体の今回の監査指摘なし。jsdom配下Undiciに指摘あり  |
| ESLint                  | 9.39.2                                      | [公式Advisories](https://github.com/eslint/eslint/security/advisories)：公開Advisoryなし。下位依存には指摘あり                                                                                                     |
| Prettier                | 3.8.3                                       | [公式告知](https://github.com/prettier/prettier/security/advisories/GHSA-4cm8-f57v-mqm6)は3.9.0〜3.9.9が対象で、現バージョンは対象外                                                                               |
| Node.js                 | 調査環境24.10.0                             | [公式Security Releases](https://nodejs.org/en/blog/vulnerability/october-2026-security-releases)：更新対象                                                                                                         |
| Cloudflare Pages        | マネージドサービス                          | [静的Next.jsガイド](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/)、[Headers](https://developers.cloudflare.com/pages/configuration/headers/)を参照。公開応答は実測 |

## 付録B：npm監査が指摘した全パッケージ

「区分」はnpmのdev除外監査に残るかを示します。公開サーバーで実行されることを意味しません。修正候補は監査日時点の情報であり、更新時には再確認が必要です。

| パッケージ               | インストール済み | npm重要度 | 区分            | アドバイザリ例                                                           |
| ------------------------ | ---------------- | --------- | --------------- | ------------------------------------------------------------------------ |
| @babel/core              | 7.28.5           | low       | 開発依存        | [GHSA-4x5r-pxfx-6jf8](https://github.com/advisories/GHSA-4x5r-pxfx-6jf8) |
| @humanfs/node            | 0.16.7           | moderate  | 開発依存        | [GHSA-p498-v437-472g](https://github.com/advisories/GHSA-p498-v437-472g) |
| @vitest/mocker           | 4.1.8            | moderate  | 開発依存        | [GHSA-82fw-gwwq-j7x9](https://github.com/advisories/GHSA-82fw-gwwq-j7x9) |
| baseline-browser-mapping | 2.10.21          | moderate  | dev除外でも残る | [GHSA-w5vr-8v7q-w6rv](https://github.com/advisories/GHSA-w5vr-8v7q-w6rv) |
| brace-expansion          | 2.1.0, 1.1.14    | high      | 開発依存        | [GHSA-3jxr-9vmj-r5cp](https://github.com/advisories/GHSA-3jxr-9vmj-r5cp) |
| browserslist             | 4.28.1           | high      | 開発依存        | [GHSA-c83g-rgw3-j3cx](https://github.com/advisories/GHSA-c83g-rgw3-j3cx) |
| js-yaml                  | 4.1.1            | high      | 開発依存        | [GHSA-h67p-54hq-rp68](https://github.com/advisories/GHSA-h67p-54hq-rp68) |
| nanoid                   | 3.3.12           | high      | dev除外でも残る | [GHSA-28wg-ghj8-5hjv](https://github.com/advisories/GHSA-28wg-ghj8-5hjv) |
| next                     | 16.2.4           | critical  | dev除外でも残る | [GHSA-8h8q-6873-q5fj](https://github.com/advisories/GHSA-8h8q-6873-q5fj) |
| postcss                  | 8.4.31, 8.5.15   | high      | dev除外でも残る | [GHSA-qx2v-qp2m-jg93](https://github.com/advisories/GHSA-qx2v-qp2m-jg93) |
| postcss-selector-parser  | 6.1.2            | moderate  | 開発依存        | [GHSA-w9m9-85wc-3x92](https://github.com/advisories/GHSA-w9m9-85wc-3x92) |
| sharp                    | 0.34.5           | high      | dev除外でも残る | [GHSA-f88m-g3jw-g9cj](https://github.com/advisories/GHSA-f88m-g3jw-g9cj) |
| source-map-js            | 1.2.1            | high      | dev除外でも残る | [GHSA-68fv-2mgg-jv7q](https://github.com/advisories/GHSA-68fv-2mgg-jv7q) |
| undici                   | 7.27.1           | high      | 開発依存        | [GHSA-vmh5-mc38-953g](https://github.com/advisories/GHSA-vmh5-mc38-953g) |
| vite                     | 8.0.16           | high      | 開発依存        | [GHSA-698v-4r3x-3vcv](https://github.com/advisories/GHSA-698v-4r3x-3vcv) |
| vitest                   | 4.1.8            | moderate  | 開発依存        | [GHSA-82fw-gwwq-j7x9](https://github.com/advisories/GHSA-82fw-gwwq-j7x9) |
| zod                      | 4.2.1            | high      | 開発依存        | [GHSA-mrhx-c7xc-m3w5](https://github.com/advisories/GHSA-mrhx-c7xc-m3w5) |

各行は複数のアドバイザリを含む場合があります。全17項目について監査は修正可能と報告していますが、更新後の互換性・残存脆弱性は本調査では検証していません。
