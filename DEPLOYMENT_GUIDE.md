# abby-hr.com デプロイメントガイド

## 📋 デプロイ完全手順

このガイドでは、abby-hr.comサイトをGitHub Pages + Cloudflareでデプロイする手順を詳しく説明します。

---

## ✅ 事前準備チェックリスト

- [x] ドメイン購入完了（abby-hr.com / Cloudflare）
- [x] GitHubアカウント（abbyc228）
- [x] すべてのファイル準備完了（HTML, CSS, JS, images）
- [ ] GitHubリポジトリ作成
- [ ] ファイルアップロード
- [ ] Cloudflare DNS設定
- [ ] GitHub Pages設定
- [ ] Google Workspace契約（オプション）

---

## 🚀 Step 1: GitHubリポジトリを作成

### 1-1. GitHubにログイン
https://github.com にアクセスしてログインします。

### 1-2. 新しいリポジトリを作成
1. 右上の **"+"** ボタンをクリック → **"New repository"** を選択
2. リポジトリ情報を入力：
   - **Repository name**: `abby-hr-website`
   - **Description**: `株式会社abby 人材ソリューション事業サイト`
   - **Public** を選択（GitHub Pages無料利用のため）
   - **Add a README file**: チェックを**入れない**
   - **Add .gitignore**: None
   - **Choose a license**: None
3. **"Create repository"** ボタンをクリック

---

## 📤 Step 2: ファイルをGitHubにアップロード

### 2-1. リポジトリページで "Add file" を選択
1. 作成されたリポジトリのページで **"Add file"** → **"Upload files"** をクリック

### 2-2. ファイルをアップロード（以下の順序で）

#### ① HTMLファイル（3個）
- `index.html`
- `inquiry.html`
- `privacy.html`

**アップロード方法**:
1. ドラッグ&ドロップ or "choose your files"
2. コミットメッセージ: `Add HTML files`
3. **"Commit changes"** をクリック

---

#### ② CSSフォルダ（1個）
1. **"Add file"** → **"Create new file"**
2. ファイル名に `css/sales-support.css` と入力
3. `css/sales-support.css` の内容をコピー&ペースト
4. コミットメッセージ: `Add CSS styles`
5. **"Commit changes"** をクリック

---

#### ③ JavaScriptフォルダ（1個）
1. **"Add file"** → **"Create new file"**
2. ファイル名に `js/main.js` と入力
3. `js/main.js` の内容をコピー&ペースト
4. コミットメッセージ: `Add JavaScript`
5. **"Commit changes"** をクリック

---

#### ④ 画像フォルダ（5個）
1. **"Add file"** → **"Upload files"**
2. `images/` フォルダ内の画像を**1つずつ**アップロード：
   - `illustration-meeting-1.png`
   - `illustration-customer-service.png`
   - `illustration-handshake.png`
   - `illustration-interview.png`
   - `kpi-illustration.png`

**重要**: GitHubは一度に100ファイルまでの制限があります。
- 画像は **1つずつ** アップロードすることをおすすめします
- または、フォルダごとアップロード（GitHub Desktopアプリ使用）

コミットメッセージ: `Add images`

---

#### ⑤ README.md
1. **"Add file"** → **"Upload files"**
2. `README.md` をアップロード
3. コミットメッセージ: `Add README`
4. **"Commit changes"** をクリック

---

### 2-3. ファイル構造の確認

アップロード完了後、以下の構造になっているか確認：

```
abby-hr-website/
├── index.html
├── inquiry.html
├── privacy.html
├── README.md
├── css/
│   └── sales-support.css
├── js/
│   └── main.js
└── images/
    ├── illustration-meeting-1.png
    ├── illustration-customer-service.png
    ├── illustration-handshake.png
    ├── illustration-interview.png
    └── kpi-illustration.png
```

---

## ⚙️ Step 3: GitHub Pagesを有効化

### 3-1. Settings → Pages
1. リポジトリページで **"Settings"** タブをクリック
2. 左サイドバーの **"Pages"** をクリック

### 3-2. Source設定
1. **Source**: `Deploy from a branch`
2. **Branch**: `main` / `/ (root)` を選択
3. **"Save"** ボタンをクリック

### 3-3. 確認
数分待つと、ページ上部に以下のメッセージが表示されます：
```
Your site is live at https://abbyc228.github.io/abby-hr-website/
```

このURLにアクセスして、サイトが正常に表示されるか確認してください。

---

## 🌐 Step 4: Cloudflare DNS設定

### 4-1. Cloudflareにログイン
https://dash.cloudflare.com/ にアクセスしてログインします。

### 4-2. abby-hr.com を選択
1. ダッシュボードで **abby-hr.com** ドメインをクリック
2. 左サイドバーの **"DNS"** → **"Records"** をクリック

### 4-3. DNSレコードを追加

#### A Records（4つ）
GitHub Pagesの IPアドレスを設定します。

**"Add record"** ボタンをクリックして、以下を4回繰り返し：

| Type | Name | IPv4 address | Proxy status |
|------|------|--------------|--------------|
| A | @ | 185.199.108.153 | DNS only (灰色の雲) |
| A | @ | 185.199.109.153 | DNS only (灰色の雲) |
| A | @ | 185.199.110.153 | DNS only (灰色の雲) |
| A | @ | 185.199.111.153 | DNS only (灰色の雲) |

**重要**: Proxy statusは必ず **"DNS only"** （灰色の雲アイコン）を選択してください！

---

#### CNAME Record（1つ）
wwwサブドメインをGitHub Pagesに向けます。

**"Add record"** ボタンをクリック：

| Type | Name | Target | Proxy status |
|------|------|--------|--------------|
| CNAME | www | abbyc228.github.io | DNS only (灰色の雲) |

---

### 4-4. DNS設定完了

設定後、DNSレコード一覧は以下のようになります：

```
Type    Name    Content                    Proxy status
A       @       185.199.108.153           DNS only
A       @       185.199.109.153           DNS only
A       @       185.199.110.153           DNS only
A       @       185.199.111.153           DNS only
CNAME   www     abbyc228.github.io        DNS only
```

**DNS反映時間**: 通常5〜30分、最大48時間かかる場合があります。

---

## 🔗 Step 5: GitHub Pagesにカスタムドメインを設定

### 5-1. GitHubリポジトリのSettings → Pages
1. リポジトリページで **"Settings"** タブをクリック
2. 左サイドバーの **"Pages"** をクリック

### 5-2. Custom domain設定
1. **"Custom domain"** 欄に `abby-hr.com` と入力
2. **"Save"** ボタンをクリック

### 5-3. DNS設定確認
- GitHub が自動的にDNS設定を確認します
- 緑色のチェックマークが表示されればOK
- エラーが出た場合は、DNSの反映を待ってから再度試してください

### 5-4. HTTPS有効化
1. **"Enforce HTTPS"** チェックボックスにチェックを入れる
2. 最初は選択できないことがあります（DNS反映待ち）
3. 数分〜数時間待つと選択可能になります

**重要**: HTTPS証明書の発行には数時間かかることがあります。

---

## ✅ Step 6: デプロイ完了確認

### 6-1. サイトへアクセス

以下のURLにアクセスして、サイトが正常に表示されるか確認：

- https://abby-hr.com/
- https://www.abby-hr.com/
- https://abby-hr.com/inquiry.html
- https://abby-hr.com/privacy.html

### 6-2. 確認項目

- [ ] トップページが正しく表示される
- [ ] ヘッダーナビゲーションが機能する
- [ ] モバイルメニューが動作する
- [ ] お問い合わせフォームが表示される
- [ ] 画像がすべて表示される
- [ ] フッターに「関連事業」リンクが表示される
- [ ] abby-inc.comへのリンクが機能する
- [ ] HTTPSで接続される（鍵マークが表示）

---

## 📧 Step 7: Google Workspace設定（オプション）

info@abby-hr.com のメールアドレスを有効化する場合。

### 7-1. Google Workspaceに申し込み
https://workspace.google.com/

**プラン**: Business Starter（月額 ¥680/ユーザー）

### 7-2. Cloudflareで MXレコードを設定

CloudflareのDNS設定ページで、Google Workspaceから提供されたMXレコードを追加します。

典型的な設定例：

| Type | Name | Mail server | Priority | Proxy status |
|------|------|-------------|----------|--------------|
| MX | @ | aspmx.l.google.com | 1 | DNS only |
| MX | @ | alt1.aspmx.l.google.com | 5 | DNS only |
| MX | @ | alt2.aspmx.l.google.com | 5 | DNS only |
| MX | @ | alt3.aspmx.l.google.com | 10 | DNS only |
| MX | @ | alt4.aspmx.l.google.com | 10 | DNS only |

### 7-3. TXTレコード設定（SPF/DKIM）
Google Workspaceの指示に従って、SPF・DKIMのTXTレコードを追加します。

### 7-4. メール確認
設定後、info@abby-hr.com でメールの送受信ができるか確認します。

---

## 🔄 ファイル更新方法

サイトのファイルを更新する場合：

1. GitHubリポジトリページにアクセス
2. 編集したいファイルをクリック
3. 鉛筆アイコン（Edit）をクリック
4. ファイルを編集
5. **"Commit changes"** をクリック
6. 数分待つと、自動的にサイトに反映されます

---

## 🚨 トラブルシューティング

### 問題1: サイトが表示されない（404エラー）
**原因**: DNS設定が反映されていない、またはGitHub Pagesの設定ミス

**解決策**:
1. DNS設定を確認（Cloudflare）
2. GitHub PagesのCustom domain設定を確認
3. 数時間待ってから再度アクセス

---

### 問題2: HTTPSが有効にならない
**原因**: DNS反映待ち、またはHTTPS証明書発行待ち

**解決策**:
1. DNS設定後、数時間待つ
2. GitHub Pagesの "Enforce HTTPS" が選択可能になるまで待つ
3. 最大24時間かかる場合があります

---

### 問題3: 画像が表示されない
**原因**: 画像ファイルがアップロードされていない、またはパスが間違っている

**解決策**:
1. GitHubリポジトリの `images/` フォルダを確認
2. すべての画像ファイルがアップロードされているか確認
3. ファイル名の大文字・小文字を確認（厳密に一致する必要があります）

---

### 問題4: お問い合わせフォームが動作しない
**原因**: Formspreeの設定が完了していない

**解決策**:
1. Formspree（https://formspree.io/）にログイン
2. フォームの設定を確認
3. フォームIDが正しいか確認（`xpqykabj`）

---

## 📞 サポート

デプロイに関する質問や問題が発生した場合は、以下をご確認ください：

- **GitHub Pages ドキュメント**: https://docs.github.com/pages
- **Cloudflare DNS ドキュメント**: https://developers.cloudflare.com/dns/
- **Google Workspace サポート**: https://support.google.com/a/

---

## 🎉 デプロイ完了！

すべての手順が完了すると、以下の状態になります：

- ✅ https://abby-hr.com でサイトにアクセス可能
- ✅ HTTPSで安全に通信
- ✅ お問い合わせフォームが動作
- ✅ abby-inc.comへのリンクが機能
- ✅ メールアドレス info@abby-hr.com が使用可能（Google Workspace契約後）

---

**最終更新日**: 2026年8月21日
