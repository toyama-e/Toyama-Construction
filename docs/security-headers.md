# Cloudflare Pagesの防御用ヘッダー

対象：[Issue #64](https://github.com/toyama-e/Toyama-Construction/issues/64)

## 配信設定

`public/_headers`に共通の防御用ヘッダーを定義する。`npm run build`はNext.jsの静的出力後に`scripts/generate-security-headers.mjs`を実行し、全HTML（404を含む）のインラインscript本文からSHA-256を計算して`out/_headers`へCSPを追加する。生成物を直接編集・コミットしない。

| ヘッダー                  | 設定・目的                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------ |
| Content-Security-Policy   | 既定は強制適用。スクリプトは同一オリジン、Google tagのホスト、ビルド時に生成したハッシュだけ許可 |
| X-Frame-Options           | DENY。CSPのframe-ancestors 'none'とともに第三者の埋め込みを拒否                                  |
| Strict-Transport-Security | max-age=86400（1日）。includeSubDomains・preloadは指定しない                                     |
| Permissions-Policy        | camera / microphone / geolocation / payment / usbを禁止                                          |
| X-Content-Type-Options    | nosniff                                                                                          |
| Referrer-Policy           | strict-origin-when-cross-origin                                                                  |

LINE通話は別サイト・アプリへ移動するリンクのため、このサイト内のmicrophone禁止はLINE通話先の権限を変更しない。問い合わせ・応募のメールリンクも維持する。HSTSはHTTPSを維持する運用が前提であり、HTTPへ戻してもブラウザーの有効期限までは解除されない。まず1日で確認し、期間延長は別途判断する。全サブドメインの利用状況を確認するまではincludeSubDomainsやpreloadを追加しない。

## 静的サイトのCSP

動的レスポンスを前提とするnonceは導入しない。Next.jsのRSC初期化・JSON-LDを含むすべてのインラインscriptを、出力された本文そのもの（空白を含む）でハッシュ化する。ページ内移動・クライアント側遷移の両方で使えるよう、全出力HTMLのハッシュを共通ポリシーへまとめる。

スクリプトの`unsafe-inline`と`unsafe-eval`は許可しない。GA4の初期化は`public/analytics-init.js`へ分離し、next/scriptの`data-measurement-id`から測定IDを取得する。測定IDが未設定なら従来どおりGA4を描画しない。本番の測定IDはCloudflareの環境変数で管理し、リポジトリへ保存しない。

Next/Imageや既存のReactコンポーネントがstyle属性を使うため、`style-src`に限り`unsafe-inline`を許可する。CSPだけであらゆるHTML/CSSインジェクションを防げるとは扱わない。外部スタイルシートは許可せず、next/fontで自己配信されるフォントを使う。

GA4は広告機能なしの公式CSP指針に合わせ、Google tag、Google Analytics、Googleの接続先を許可する。広告・DoubleClick・GTMプレビューモードのために許可先を広げない。地図のiframeはmaps.google.com / www.google.comを許可する。地図内部の画像・スクリプトはiframe先のドキュメントの制御となる。

Cloudflare Pagesの`_headers`は1行2,000文字までで、同名ヘッダーの重複はカンマ結合される。共通ルールにCSPを1つだけ生成し、行長が上限を超えた場合はビルドを失敗させる。ページ増加等で上限に近づいたら、ページ別ポリシーへの分割などを検討し、`unsafe-inline`で回避しない。Cloudflare側のHTML・インラインscript改変機能を追加するときも、配信後HTMLとハッシュの一致を再検証する。

## 検証と段階導入

```bash
# 許可候補をReport-Onlyで検証する出力
CSP_MODE=report-only npm run build

# 強制適用（通常のCloudflareビルドもこちら）
npm run build

# ハッシュ生成・GA4初期化のテスト
npm run test:security-headers

# 公開4ページの実レスポンスとインラインscriptのハッシュを検査
npm run check:security-headers

# Cloudflare Previewを検査する場合
npm run check:security-headers -- https://PREVIEW-HOST.pages.dev
```

Report-Only時もbase-uri / object-src / frame-ancestorsの小さい強制ポリシーとX-Frame-Optionsは維持する。Report-Onlyは外部へのレポート送信先を設けず、ブラウザーのConsoleで違反を確認する方式。自動収集・集中監視は行わない。公開レスポンス検査コマンドは強制適用の検査用なので、Report-Only段階では失敗するのが正常。

1. Preview環境の`CSP_MODE=report-only`でビルドし、主要4ページのConsoleとNetworkを確認する。Cloudflareの本番GA4測定IDをPreviewへ無断複製せず、GA4あり/なしの両方を検証する。
2. CSP違反がないことを確認後、PreviewのCSP_MODEを解除するかenforceへ変更して再ビルド。メニュー、ページ移動、募集要項展開、LINE・メールのhref、Googleマップの表示をスマートフォンとPCで確認する。自サイトがiframeへ埋め込めないことも確認する。
3. develop→mainで反映し、ProductionのCSP_MODEがreport-onlyになっていないこと、ビルドコマンドが`npm run build`であること、出力先がoutであることを確認する。`next build`だけではハッシュ生成が走らない。
4. 本番反映後に`npm run check:security-headers`を実行し、4ページの200応答、強制CSP、埋め込み防止、HSTS、Permissions-Policy、配信HTMLの全インラインscriptハッシュを確認する。Report-OnlyのみではIssueを完了にしない。
5. iPhone Safari / Android Chrome / PCで表示とリンク・地図を確認する。GA4はNetworkの送信と管理画面の受信も確認する。LINE発信や応募メール送信は表示検証に含めず、実送信が必要な場合は別途実施する。

HTTPS・HTTP→HTTPSの転送はCloudflare側の既存設定を維持する。Pages FunctionsやWorkersへ配信を変更した場合は、静的`_headers`がそのレスポンスへ自動適用されると想定せず、新しい配信経路で再確認する。

## 戻し方

問題が起きたときは原因を確認し、必要ならCSP_MODE=report-onlyで再ビルド・配信して違反を調査する。埋め込み防止等の共通ヘッダーは維持する。CSPを緩めたまま完了にせず、Issue #64で強制適用へ戻す作業を追跡する。HSTSを解除する場合はHTTPS応答でmax-age=0を配信する必要がある。Cloudflare全体のHTTPSや証明書検証を無効にしない。

## 2026年11月3日の確認記録

- 変更前の本番HTMLには自己配信のNext.jsスクリプトとCloudflareのemail-decodeがあり、後者も同一オリジンの許可対象。Google tagはクライアントで読み込まれる。
- Report-Onlyの静的出力を、生成ヘッダーを付けるローカルサーバーで配信。主要4ページにConsole上のCSP違反なし。
- テスト用ID（G-CSPTEST64、本番IDは不使用）でGA4ありのビルドも確認。外部初期化ファイルのID属性と、強制適用後の違反ログなしを確認。初期化とクリックイベントをキューへ追加できることは自動テストで確認。本番GA4管理画面での受信は未確認。
- 同じ出力を強制適用へ切り替え、375pxでトップ表示、メニュー開閉、採用ページへの移動、募集要項の展開、Googleマップの実表示を確認。
- 最終通常ビルドで主要4ページを320 / 375 / 390 / 430 / 768 / 1024 / 1440pxで確認し、横幅超過なし。1440pxでプライバシーポリシーを目視確認。ConsoleのCSP違反なし。許可していない一時検証用インラインscriptがDOMを書き換えられないことも確認し、検証用ページは除去した。
- ハッシュ生成・再生成、Report-Only時の強制埋め込み防止、設定値不正・行長超過時の失敗、外部GA初期化の自動テスト4件が成功。
- 既存テスト29件・lint（既存警告4件、エラー0）・Report-Only / 強制適用の本番ビルドが成功。ローカル配信した4ページの実ヘッダーと全インラインscriptハッシュの検査も成功。最終出力はテスト用GA4 IDを外した通常ビルドへ戻した。
- 本番へのデプロイ・公開4ページの変更後レスポンス検査・実機Safari / Chrome・本番GA4受信は、反映後の残確認。Issue #64はこれらの確認が済むまでクローズしない。

## 2026年11月10日の再確認

- 既存の未コミット実装を保持して再検証した。既存テスト29件、ヘッダー用テスト4件が成功。lintはエラー0件・既存の画像モック警告4件。通常の本番ビルドも成功し、6つのHTMLから8種類のインラインscriptハッシュを生成した。
- 生成した`out/_headers`を付ける一時ローカルサーバーで、主要4ページの実レスポンスを`check:security-headers`で検査し、すべて成功した。ブラウザーでトップから採用ページへ遷移でき、両ページでConsoleの警告・エラーは検出されなかった。この再確認ではGA4の測定IDを追加していない。
- 本番の主要4ページは取得できたが、X-Frame-Options、HSTS、Permissions-Policy、強制CSPとハッシュ検査はいずれも未達だった。本番への変更反映はまだ確認できていない。
- この作業ではコミット・push・デプロイを実施していない。公開後の4ページ検査、実機での主要機能確認、本番GA4受信確認が残るため、Issue #64は未完了として維持する。

## 公式情報

- [Cloudflare Pages headers（書式・行長・重複）](https://developers.cloudflare.com/pages/configuration/headers/)
- [Cloudflare HSTS](https://developers.cloudflare.com/ssl/edge-certificates/additional-options/http-strict-transport-security/)
- [Google tag / GA4のCSP](https://developers.google.com/tag-platform/security/guides/csp)
- [script-srcのハッシュ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src)
