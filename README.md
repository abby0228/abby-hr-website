# 株式会社abby 人材ソリューション事業サイト (abby-hr-site)

## 🎯 プロジェクト概要

このプロジェクトは、株式会社abbyの人材ソリューション事業専用サイトです。  
独自ドメイン **abby-hr.com** で公開予定の統合型コーポレートサイトです。

## ✅ 復元完了ステータス (2026-08-26)

### 復元されたファイル

#### 1. **index.html** - メインページ (完全復元完了)
- ✅ タイピングアニメーション機能搭載
- ✅ 「abby」ロゴが1文字ずつ表示されるアニメーション
- ✅ カーソル点滅エフェクト
- ✅ スムーススクロールナビゲーション
- ✅ ビジネスカード表示:
  - 人材ソリューション事業 (→ hr-solutions.html)
- ✅ ABOUT USセクション
- ✅ COMPANYセクション (会社情報)
- ✅ CONTACTセクション
- ✅ フッター

#### 2. **css/corporate.css** - コーポレートデザインCSS (復元完了)
- ✅ タイピングアニメーションスタイル
- ✅ カーソル点滅アニメーション
- ✅ ビジネスカードレイアウト
- ✅ レスポンシブデザイン対応
- ✅ Montserrat 900フォント使用 (ロゴ)
- ✅ 0.5px極細ボーダーデザイン統一

#### 3. **js/handwriting.js** - タイピングアニメーションスクリプト (復元完了)
- ✅ 「abby」文字を200ms間隔で1文字ずつ表示
- ✅ 0.5秒後にアニメーション開始
- ✅ カーソル点滅効果
- ✅ ナビゲーションリンクのスムーススクロール機能
- ✅ スクロールインジケーター制御

#### 4. **画像ファイル** - 全て復元完了
- ✅ business-growth-team.png (人材ソリューション事業カード画像)
- ✅ illustration-meeting-1.png
- ✅ illustration-meeting-2.png
- ✅ illustration-handshake.png
- ✅ illustration-customer-service.png
- ✅ illustration-interview.png
- ✅ kpi-illustration.png

## 📁 ファイル構成

```
abby-hr-site/
├── index.html                    # メインページ (タイピングアニメーション付き) ✅
├── hr-solutions.html             # 人材ソリューション詳細ページ
├── inquiry.html                  # お問い合わせフォーム
├── privacy.html                  # プライバシーポリシー (14条項)
├── README.md                     # このファイル
├── DEPLOYMENT_GUIDE.md           # デプロイ手順書
├── FILE_LIST.md                  # ファイル一覧
├── css/
│   ├── corporate.css             # コーポレートデザインCSS (タイピングアニメーション) ✅
│   ├── sales-support.css         # 人材ソリューション詳細ページCSS
│   └── style.css                 # 共通スタイル
├── js/
│   ├── handwriting.js            # タイピングアニメーションスクリプト ✅
│   └── main.js                   # メイン JavaScript
└── images/
    ├── business-growth-team.png      # 人材ソリューションカード画像 ✅
    ├── illustration-meeting-1.png    # イラスト1 ✅
    ├── illustration-meeting-2.png    # イラスト2 ✅
    ├── illustration-handshake.png    # イラスト3 ✅
    ├── illustration-customer-service.png # イラスト4 ✅
    ├── illustration-interview.png    # イラスト5 ✅
    └── kpi-illustration.png          # KPIイラスト ✅
```

## 🎨 デザイン特徴

### タイポグラフィ
- **ロゴ**: Montserrat 900 (タイピングアニメーション)
- **本文**: Noto Sans JP (300/400/600), Inter

### カラーパレット
- **メインカラー**: #1a1a1a (ほぼ黒)
- **背景**: #ffffff (白)
- **アクセントカラー**: #3b82f6 (青 - 人材ソリューション)

### デザインコンセプト
- **0.5px極細ボーダー**: 全体で統一された繊細なデザイン
- **ミニマルデザイン**: font-weight 300 を基調とした軽やかな印象
- **タイピングアニメーション**: ブランドロゴを印象的に表現

## 🚀 アニメーション仕様

### ロゴタイピングアニメーション
1. ページ読み込み後、0.5秒待機
2. 「a」「b」「b」「y」の順に200ms間隔で表示
3. カーソル (|) が常に点滅
4. アニメーション完了後もカーソルは点滅し続ける

### スムーススクロール
- ナビゲーションリンクをクリックすると該当セクションへスムーススクロール
- スクロールインジケーターは100px以上スクロールすると非表示

## 🔗 リンク構造

### 内部リンク
- 人材ソリューション事業 → `hr-solutions.html`
- お問い合わせ → `inquiry.html`
- プライバシーポリシー → `privacy.html`

## 📧 連絡先情報

- **メールアドレス**: info@abby-hr.com
- **電話番号**: 080-8954-7584
- **LINE**: @310qcqmq

## 🌐 ドメイン戦略

### サイト運用
- **abby-hr.com** (このサイト)
  - 人材ソリューション事業に特化
  - **完全独立運用**

## 📝 メタ情報

- **タイトル**: 株式会社abby | 人材ソリューション事業
- **ディスクリプション**: 人材ソリューション事業を展開する株式会社abby
- **キーワード**: abby, 人材ソリューション, 営業支援, 東京, 渋谷
- **OGP対応**: Twitter Card, Open Graph 設定済み

## 🔄 次のステップ (デプロイ準備)

### 1. GitHubリポジトリ作成
```bash
# 新しいリポジトリ名
abby-hr-website
```

### 2. ファイルアップロード
- abby-hr-site/ フォルダ内の全ファイルをアップロード
- index.html をルートに配置

### 3. GitHub Pages 設定
- Settings → Pages
- Source: Deploy from a branch
- Branch: main / root
- Save

### 4. Cloudflare DNS 設定 (abby-hr.com)

#### A レコード (apex domain)
```
Type: A
Name: @
Content: 185.199.108.153
Proxy status: Proxied (オレンジ色)
```
```
Type: A
Name: @
Content: 185.199.109.153
Proxy status: Proxied
```
```
Type: A
Name: @
Content: 185.199.110.153
Proxy status: Proxied
```
```
Type: A
Name: @
Content: 185.199.111.153
Proxy status: Proxied
```

#### CNAME レコード (www)
```
Type: CNAME
Name: www
Content: <GitHubユーザー名>.github.io
Proxy status: Proxied
```

### 5. GitHub Pages カスタムドメイン設定
- Settings → Pages → Custom domain
- 入力: `abby-hr.com`
- Save
- Enforce HTTPS にチェック

## ✅ 復元完了チェックリスト

- [x] index.html 復元 (タイピングアニメーション構造)
- [x] css/corporate.css 復元 (アニメーションスタイル)
- [x] js/handwriting.js 復元 (アニメーションスクリプト)
- [x] 画像ファイル全て復元
- [x] リンク先修正 (hr-solutions.html)
- [x] ビジネスカード表示確認
- [x] ナビゲーションメニュー確認
- [x] フッター情報確認
- [ ] GitHubへアップロード (ユーザー作業)
- [ ] GitHub Pages 設定 (ユーザー作業)
- [ ] Cloudflare DNS 設定 (ユーザー作業)
- [ ] カスタムドメイン設定 (ユーザー作業)
- [ ] HTTPS 有効化 (ユーザー作業)

## 🎉 復元完了!

元のダウンロードファイルから完全に復元されました!
- タイピングアニメーション機能
- ビジネスカード表示
- スムーススクロール
- カーソル点滅エフェクト
- レスポンシブデザイン

全てのファイルが正しく配置され、準備完了です!

---

**最終更新**: 2026年8月26日  
**ステータス**: ✅ 復元完了 - GitHubアップロード待ち
