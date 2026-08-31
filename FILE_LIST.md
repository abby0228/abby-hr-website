# abby-hr.com ファイルリスト

## 📁 完全なファイル構造

```
abby-hr-site/
├── index.html                      # トップページ（人材ソリューション事業）
├── inquiry.html                    # お問い合わせフォーム
├── privacy.html                    # プライバシーポリシー
├── README.md                       # プロジェクト説明
├── DEPLOYMENT_GUIDE.md             # デプロイメント完全ガイド
├── FILE_LIST.md                    # このファイル（ファイルリスト）
│
├── css/
│   └── sales-support.css           # メインスタイルシート（統一デザイン）
│
├── js/
│   └── main.js                     # JavaScript（メニュー切り替え、スムーススクロール）
│
└── images/
    ├── illustration-meeting-1.png          # サービス画像1（ミーティング）
    ├── illustration-customer-service.png   # サービス画像2（インサイドセールス）
    ├── illustration-handshake.png          # サービス画像3（フィールドセールス）
    ├── illustration-interview.png          # サービス画像4（採用・教育）
    └── kpi-illustration.png                # サービス画像5（KPI設計）
```

---

## ✅ ファイル準備状況

### HTMLファイル（3個）
- [x] **index.html** - トップページ
  - "abby HR" ロゴ（Montserrat 900）
  - 6つのサービスカード
  - 3つの強み
  - 12の業界カード
  - 会社概要（人材ソリューション事業のみ）
  - フッター「関連事業」にabby-inc.comへのリンク

- [x] **inquiry.html** - お問い合わせフォーム
  - Formspree統合（フォームID: xpqykabj）
  - メールアドレス: info@abby-hr.com
  - ラジオボタン: 営業支援 / 人材ソリューション / その他

- [x] **privacy.html** - プライバシーポリシー
  - 個人情報保護方針
  - 連絡先: info@abby-hr.com

---

### CSSファイル（1個）
- [x] **css/sales-support.css** - 統一デザイン
  - 0.5px極細ボーダー
  - Montserrat 900（ロゴ）
  - Noto Sans JP 300/400/600（本文）
  - レスポンシブデザイン（モバイル対応）
  - Flexboxレイアウト

---

### JavaScriptファイル（1個）
- [x] **js/main.js**
  - モバイルメニュー切り替え
  - スムーススクロール
  - メニュー自動クローズ

---

### 画像ファイル（5個）
- [x] **illustration-meeting-1.png** - 営業支援サービス
- [x] **illustration-customer-service.png** - インサイドセールス
- [x] **illustration-handshake.png** - フィールドセールス
- [x] **illustration-interview.png** - 採用・教育
- [x] **kpi-illustration.png** - KPI設計

---

### ドキュメントファイル（3個）
- [x] **README.md** - プロジェクト情報、技術スタック、更新履歴
- [x] **DEPLOYMENT_GUIDE.md** - デプロイ完全手順（7ステップ）
- [x] **FILE_LIST.md** - このファイル（ファイルリスト）

---

## 📊 ファイル統計

- **合計ファイル数**: 14個
  - HTML: 3個
  - CSS: 1個
  - JavaScript: 1個
  - 画像: 5個
  - ドキュメント: 3個
  - フォルダ: 3個（css, js, images）

---

## 🚀 次のステップ

1. **GitHubリポジトリ作成**: `abby-hr-website`
2. **ファイルアップロード**: 上記14個のファイルをすべてアップロード
3. **Cloudflare DNS設定**: A レコード（4個）+ CNAME レコード（1個）
4. **GitHub Pages設定**: カスタムドメイン `abby-hr.com`
5. **HTTPS有効化**: Enforce HTTPS をチェック
6. **動作確認**: https://abby-hr.com でサイトが表示されるか確認

詳細は **DEPLOYMENT_GUIDE.md** を参照してください。

---

## 📝 重要な設定情報

### ドメイン
- **メインドメイン**: abby-hr.com
- **サブドメイン**: www.abby-hr.com
- **管理**: Cloudflare

### メールアドレス
- **お問い合わせ**: info@abby-hr.com
- **メール管理**: Google Workspace（契約後）

### 外部サービス
- **ホスティング**: GitHub Pages
- **フォーム**: Formspree（フォームID: xpqykabj）
- **DNS**: Cloudflare
- **フォント**: Google Fonts（Montserrat, Noto Sans JP, Inter）
- **アイコン**: Font Awesome 6.4.0

### リンク
- **関連事業**: https://abby-inc.com/（フッターからリンク）
- **abby-inc.com からのリンク**: なし（完全分離）

---

## 🔗 関連リンク

- **GitHubリポジトリ**: https://github.com/abbyc228/abby-hr-website（作成後）
- **公開URL**: https://abby-hr.com（デプロイ後）
- **Cloudflareダッシュボード**: https://dash.cloudflare.com/
- **Formspree**: https://formspree.io/

---

**作成日**: 2026年8月21日
**最終更新**: 2026年8月21日
