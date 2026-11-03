# 依存関係のセキュリティ運用

対象：[Issue #65](https://github.com/toyama-e/Toyama-Construction/issues/65)

## 更新通知とブランチ運用

GitHubのDependabot alertsで、既定ブランチmainの既知の脆弱性を通知する。通知の配送先・メール頻度は各管理者のGitHub通知設定による。定期更新は`.github/dependabot.yml`でnpmとGitHub Actionsを毎週月曜09:00（日本時間）に確認し、develop宛てに更新PRを作成する。実行時刻にはGitHub側の遅延があり得る。

Next.jsとeslint-config-next、ReactとReact DOM・対応する型定義はグループ化する。ただし同一バージョンや互換性を保証する機能ではないため、差分で整合性を確認する。メジャー更新は除外せず、レビューして個別判断する。自動マージは設定しない。

Dependabotの更新ブランチはbotの提案用。アプリの修正・検証はdevelopで行い、本番反映はdevelop→mainのPRを経由する。通知・提案は人によるレビューを置き換えない。

GitHubの自動セキュリティ修正PRは既定ブランチmainを対象とし、`target-branch: develop`では変更できない。そのためsecurity updatesは無効を維持し、alertsとdevelop向け定期更新を使う。緊急のアラートは週次PRを待たずdevelopで修正する。

## 継続監査

`.github/workflows/security-audit.yml`を次の条件で実行する。

- develop / main宛てのPR、develop / mainへのpush
- 毎週月曜09:30（日本時間）：既定ブランチmainを監査
- Actions画面の手動実行：mainまたはdevelopを選択

Node.jsは`.node-version`へ統一する。使い捨てのGitHub-hosted runner上で`npm ci --ignore-scripts --no-audit --fund=false`を実行し、lockfileからインストールできるかを確認する。このジョブは監査用なので依存のlifecycle scriptsを実行せず、テスト・lint・ビルド成功の代わりとはしない。

全依存と開発依存除外の2つの監査を独立して実行する。片方が失敗しても、インストールに成功していればもう片方と結果保存を実行する。

| 結果                                 | CIの扱い                       | 対応                                                 |
| ------------------------------------ | ------------------------------ | ---------------------------------------------------- |
| どちらかでHigh / Critical            | 失敗                           | 更新・到達条件・暫定対策を優先調査し、PRに判断を記録 |
| Moderate / Low / Infoのみ            | 成功、警告と全件レポートを表示 | Advisoryを読み、未追跡の指摘はIssue化して対応判断    |
| 通信障害・JSON不正・インストール失敗 | 失敗                           | ログとレポートから原因を確認し、修復後に再実行       |

`--audit-level=high`は失敗する閾値のみを変更し、レポートの低いseverityを除外しない。パッケージの除外リストや`continue-on-error`は使わない。全severityの件数をActionsのSummaryへ表示し、詳細JSONを`audit-reports` artifactとして14日間保存する。残存指摘が増えても閾値を下げて隠さず、新しいAdvisoryと既存Issueを照合する。

本番依存への分類と、本番で攻撃が成立するかは別に判断する。本サイトは静的エクスポートであるため、npmのprod分類だけで訪問者からの到達可能性を断定しない。

## CIの権限

permissionsは`contents: read`のみ。checkoutの認証情報は保持せず、npmキャッシュは使わない。公式ActionsをコミットSHAへ固定し、Dependabotで更新を提案する。`pull_request_target`やself-hosted runnerを使わず、PRコードへSecrets・本番環境変数を渡さない。個別のSecret参照やデプロイ操作は含めない。

## アラートが来たとき

1. GitHubのSecurity画面またはActionsの失敗した実行を開く。Summaryとartifactの`all.json` / `production.json`を確認する。インストール失敗時は該当ステップのログを確認する。
2. Advisory URLを確認し、`npm explain パッケージ名`で依存経路を調べる。severity、開発/本番の分類、入力経路、実行条件を分けて記録する。
3. developで互換範囲内の親依存更新を優先する。`npm audit fix --force`や全体overrideで強制置換しない。Next.jsとeslint-config-next、ReactとReact DOMのバージョンを揃える。
4. `npm ci`、`npm test -- --run`、`npm run lint`、`npm run build`と必要な表示確認を行う。全依存・開発依存除外を再監査する。
5. PRへ更新前後の結果を記録し、develop→mainで反映する。自動生成の更新PRもテスト・lint・ビルド・表示確認を経てレビューする。
6. 解消できない項目はAdvisory、対象バージョン、到達可能性、暫定対策、追跡Issue、見直し条件を残す。通知を黙ってdismissしない。例外がHigh以上ならCIは失敗のままとし、原因を解消するか明示的な方針変更をレビューする。

## 既知の残存指摘

2026年11月3日時点：全依存17パッケージ項目（Moderateのみ）、開発依存除外0項目。原因はminimatchの[GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249)の1件で、[Issue #70](https://github.com/toyama-e/Toyama-Construction/issues/70)で追跡する。件数は依存元への波及を含む。

lint用途で訪問者からglobを受け付ける機能は確認していない。信頼できないglob・lint設定を渡さず、外部変更は設定を先に確認し、秘密情報や本番権限を持たない環境で検査する。11系への強制置換は既存APIとの互換性を保証できないため避ける。親パッケージの修正版が出たとき、到達条件が変わったとき、新しいAdvisoryが出たときに再評価する。詳細は`docs/security-update-issue-63.md`を参照する。

## 導入時の確認

Dependabot設定と定期・手動実行ワークフローはmainに配置されてから有効になる。ローカル検証だけでは導入完了としない。

- GitHubのalerts有効、security updates無効の状態をAPIまたは管理画面で再確認する。
- mainへ反映後、Actionsでmainとdevelopの監査を手動実行し、Summary・artifact・終了状態を確認する。
- PRイベントでも監査ジョブが起動することを確認する。
- Dependabotの更新ジョブログでnpm / GitHub Actionsのチェック成功、作成されたPRのbaseがdevelopであることを確認する。更新候補がなければPRが作られないこと自体は異常ではない。
- Actionsの通知設定を管理者が確認し、失敗した実行から原因へたどれることを確認する。

### 2026年11月3日の実装・検証記録

- GitHub APIで既存設定を調査：alerts / security updatesはいずれも無効、main上の`.github`は未作成だった。
- alertsを有効化し、確認APIの成功を確認。実際にminimatchのアラート#1（medium / open）が生成された。security updatesは無効を維持。
- YAMLの読み取り、イベント・権限・Action SHA・develop宛て設定、runブロックのbash構文を確認。
- 一時ディレクトリでCIと同じ`npm ci --ignore-scripts --no-audit --fund=false`が成功。全依存High閾値の監査と本番依存High閾値の監査はいずれも終了0。全依存のModerate 17項目はSummary・警告に表示され、本番依存は0項目だった。
- 実際の監査JSONからワークフローのSummary処理を実行して成功。不正なレポート（通信エラー相当）と欠落したレポートでは終了1になることを確認した。
- 既存テスト9ファイル29件、lint（既存警告4件・エラー0）、本番ビルドが成功。
- GitHub上の定期実行・PR実行・artifact保存とDependabot更新ジョブは、設定ファイルのpush・main反映後に確認する。GitHub上のCI成功や更新PR生成まで検証済みとは扱わない。

## 公式資料

- [Dependabot設定とtarget-branchの制限](https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference)
- [Dependabot alerts](https://docs.github.com/en/code-security/concepts/supply-chain-security/dependabot-alerts)
- [Actionsの権限と安全な実行](https://docs.github.com/en/actions/reference/security/secure-use)
- [npm auditの失敗閾値](https://docs.npmjs.com/cli/v11/commands/npm-audit/)
