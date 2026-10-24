# Issue #62：Node.js更新の検証記録

確認日：2026年10月25日（日本時間）

## 選定・設定

Node.js 24.22.1 LTSを選定しました。10月21日の公式セキュリティリリースであり、TLS・DNS・Brotli等の修正を含みます。

- `.node-version`：`24.22.1`。ローカル・Cloudflare Pages向けの固定指定。
- `package.json`と`package-lock.json`ルートの`engines.node`：`>=24.22.1 <25`。
- README：環境構築、バージョン更新、Cloudflare側の確認手順を追加。
- アプリの依存パッケージのバージョンは変更していません。`@types/node`は実行ランタイムの指定ではないため、本対応での変更対象にはしていません。

公式資料：

- [Node.js 24.22.1 LTS](https://nodejs.org/en/blog/release/v24.22.1)
- [Cloudflare Pages Build image](https://developers.cloudflare.com/pages/configuration/build-image/)

## ローカル環境

macOS arm64用の公式配布ファイルを取得し、公式のSHASUMS256.txtとのSHA-256一致を確認しました。

ユーザー領域の `~/.local/share/toyama-node/node-v24.22.1-darwin-arm64` に配置し、`~/.zprofile`にPATHを追加しました。既存Homebrew版は削除していません。変更前のシェル設定は作業時に一時領域へバックアップしました。

新しいログインシェルで次を確認しました。

- Node.js：`v24.22.1`
- npm：`11.19.1`（公式配布同梱）

既に開いているターミナルでは、新しいターミナルを開くか `source ~/.zprofile` で設定を読み直してください。

## 検証

Node.js 24.22.1で実行しました。

- `npm ci`：成功。
- `npm test -- --run`：9ファイル・29件成功。
- `npm run lint`：エラー0、既存のimg関連警告4件。
- `npm run build`：TurbopackのCSS処理が内部でポートを作成する際、実行環境の制限で `Operation not permitted`。標準ビルドの成功とは扱いません。
- 代替の `npm run build -- --webpack`：成功。主要4ページを含む全ルートを静的出力しました。本番のビルドコマンドは変更していません。
- npm ci時の監査：既存の開発依存9項目（High 5 / Moderate 4）。#63で追跡。

## Cloudflare側の更新前の確認

ユーザー提供の本番ログで、2026年10月25日6:25〜6:26（日本時間）のデプロイを確認しました。

- コミット：`9e5c106766b1fc2195c334fec032d406067bb648`（PR #66のマージ）
- 使用ツール：`npm@10.9.9, nodejs@22.23.4`
- ビルドコマンド：`npx next build`
- Next.js 16.4.3のTurbopackビルド・静的出力・公開が成功。
- ユーザーが確認した環境変数は`NEXT_PUBLIC_GA_MEASUREMENT_ID`。確認した画面には`NODE_VERSION`の報告なし。Production・Preview両方を確認したかは未確認。

GA4の環境変数と既存ビルドコマンドは維持し、Node.jsの版は追加した`.node-version`で指定します。このログは変更反映前のものであり、24.22.1での成功を示すものではありません。

## Cloudflare側の残確認（未完了）

Issue #62は、更新反映後のビルド確認まで完了扱いにしません。

1. Production・Previewの `NODE_VERSION` 環境変数の有無を確認する。
2. 設定済みの場合は `24.22.1` と一致させるか、削除して `.node-version` の指定に統一する。
3. 本変更を反映したデプロイのログでNode.js 24.22.1と既存の `npx next build`（Turbopack）の成功を確認する。
4. 確認した環境・デプロイ・ログを記録してから完了とする。

本記録はCloudflareへの変更反映前の検証結果です。変更反映後に上記のログ確認が必要です。
