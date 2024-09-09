<p align="center">
<img src="https://huggingface.co/datasets/smorce/IconAssets/resolve/2d4924e59be287682696c4407f0a26e73218b4da/AICodeBase_Header_image.png" width="100%">
<h1 align="center">AICodeBase</h1>
<p align="center">
  <a href="https://note.com/smorce/"><b>[🌐 Website]</b></a> •
  <a href="https://github.com/smorce"><b>[🐱 GitHub]</b></a>
  <a href="https://x.com/smorce1"><b>[🐦 Twitter]</b></a> •
  <a href="https://note.com/smorce/"><b>[🍀 Official Blog]</b></a>
</p>

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## プロジェクトのセットアップ

このガイドでは、AICodeBaseプロジェクトのセットアップ方法を説明します。以下の手順に従って、プロジェクトをローカル環境で実行できるようにします。

### 1. リポジトリのクローン

まず、GitHubからリポジトリをクローンします。
```bash
git clone https://github.com/your-username/AICodeBase.git
cd AICodeBase
```

### 2. Cursor Composer を使用してボイラーテンプレートをアップデート
Cursor Composer を使ってボイラーテンプレートを更新します。

- ボイラーテンプレートとは、プロジェクトのテンプレートを指します。
- Gemini と Claude で使用しているプロンプトは異なります。LLM に合わせて以下のプロンプトを入力してください。

**GPT-4o 実行の様子**

[https://youtu.be/9fjuSgshQcE](https://youtu.be/9fjuSgshQcE)

```plaintext
@Codebase @setup-project.md を実行してください。
```

**Gemini 1.5 Pro exp 0827 実行の様子**

[https://youtu.be/CzscaU8zIG8](https://youtu.be/CzscaU8zIG8)

```plaintext
@Codebase @setup-project.md を読み込んでください。
```

**Claude 3.5 Sonnet 実行の様子**

[https://youtu.be/Cb_8I8knQHw](https://youtu.be/Cb_8I8knQHw)

```plaintext
@Codebase @setup-project.md あなたが実行してください。
```
もしくは
```plaintext
@Codebase @setup-project.md Run Commands
```

実行後にファイル漏れがないか確認する場合は
```plaintext
@setup-completed.md で漏れているファイルを確認してください。
```

- 上記のプロンプトを入力するとボイラーテンプレートに埋め込まれた不要なコメント(//WARNING)が削除されてコードがアップデートされます。コメントが削除されるだけで他に変更はありません
- 上記のプロンプトを入力するときにプロジェクト固有の要求仕様を同時に入力すると、Composer に搭載された LLM が要求を汲み取ってコードをアップデートしてくれます。あなたの要求を反映したコードが完成した後は、不要なコメント(//WARNING)がきちんと削除されているか最後に確認してください。

**Cursor の仕様**

- Free プランでは Composer 機能は利用できません。
- Pro プランにアップグレードすると、Composer を含む追加機能が利用可能になります。

### 3. 環境変数の設定

プロジェクトのルートディレクトリに`.env.local`ファイルを作成し、以下の環境変数を設定します。
```bash
DATABASE_URL=your_database_uri
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
NEXT_PUBLIC_STRIPE_PORTAL_LINK=your_stripe_portal_link
NEXT_PUBLIC_STRIPE_PAYMENT_LINK_YEARLY=your_stripe_payment_link_yearly
NEXT_PUBLIC_STRIPE_PAYMENT_LINK_MONTHLY=your_stripe_payment_link_monthly
```

your_database_uri はパスワードを %エンコーディング したものをお勧めします。<br>
まず、Supabase の Database Settings の Connection string の URI をコピーします。<br>
[Connection string の参考画像](./docs/Supabase_Database_Settings.png)<br>
次に、以下のコードを実行して DATABASE_PASS を %エンコーディング します。<br>

```python
import urllib.parse

DATABASE_PASS = "Supabase の New Project 作成時に設定したあなたの Password"

percent_encoded_password = urllib.parse.quote(DATABASE_PASS, safe=':/')

print(percent_encoded_password)
```
percent_encoded_password が %エンコーディング されたパスワードになります。<br>
<br>
Connection string の URI に記載された [YOUR-PASSWORD] を percent_encoded_password に置換してください。<br>
置換したものを DATABASE_URL に設定してください。

### 4. 必要なライブラリのインストール

以下のコマンドを実行して、必要なライブラリをインストールします。
```bash
npm install
npm install shadcn-ui
npm install @supabase/auth-ui-react
npx shadcn-ui@latest init
npx shadcn-ui@latest add tooltip
npx shadcn-ui@latest add toast
```

- npx shadcn-ui@latest init は shadcn-ui のコンポーネントを初期化します。全てエンターをします。

### 5. データベースのセットアップ

データベースのテーブルを生成し、マイグレーションを実行します。
```bash
npm run db:generate
npm run db:migrate
```

[以下は解説] 上記のコマンドで実行されるスクリプトは以下の通りです。
```
"scripts": {
  "db:generate": "npx drizzle-kit generate:pg",
  "db:migrate": "yes | npx drizzle-kit push:pg"
}
```
- Drizzle Kit では、migrate コマンドではなく push コマンドを使用します。データベーススキーマを直接更新するためのコマンドです。
- ユーザー確認を Skip するために Linux コマンドとして yes を使用しています。
- generate, push する際は :pg をつけ、使用するデータベースタイプを指定する必要があります
- drizzle.config.ts は「dialect: "postgresql"」ではなく「driver: "pg"」を指定

### 6. 開発サーバーの起動

以下のコマンドを実行して、開発サーバーを起動します。
```bash
npm run dev
```

ブラウザで[http://localhost:3000](http://localhost:3000)を開き、アプリケーションが正しく動作することを確認します。

## ディレクトリ構造

プロジェクトのディレクトリ構造は以下の通りです。

```Directory Structure
AICodeBase/
├── actions
│   ├── favicon.ico
│   └── stripe-actions.ts
├── app
│   ├── (auth)
│   │   ├── layout.tsx
│   │   ├── login
│   │   │   └── page.tsx
│   │   └── signup
│   │       └── page.tsx
│   ├── api
│   │   └── stripe
│   │       └── webhooks
│   │           └── route.ts
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── backend
├── db
│   ├── db.ts
│   ├── migrations
│   │   └── 0000_XXXXX.sql
│   ├── queries
│   │   └── example-queries.ts
│   └── schema
│       ├── example-schema.ts
│       └── index.ts
├── .env.local
├── .gitignore
├── components
│   ├── utilities
│   │   └── providers.tsx
│   └── header.tsx
├── drizzle.config.ts
├── lib
│   └── stripe.ts
├── next.config.mjs
├── next-env.d.ts
├── node_modules
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── prompts
│   ├── setup-backend.md
│   ├── setup-frontend.md
│   ├── setup-payments.md
│   ├── setup-project.md
│   └── setup-supabase-auth.md
├── public
│   ├── next.svg
│   └── vercel.svg
├── README.md
├── tailwind.config.ts
├── tsconfig.json
├── types
│   ├── action-types.ts
│   └── index.ts
└── utils
    └── supabaseClient.ts
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Supabaseの無料アカウントでキーを取得する

### Supabaseキーの取得

1. Supabaseのウェブサイト（[こちらをクリック](https://supabase.com/)）にアクセスし、無料アカウントを作成します。

2. アカウント作成後、新しいプロジェクトを作成します。

3. プロジェクトが作成されたら、ダッシュボードの「Settings」（設定）セクションに移動します。

4. 左側のメニューから「API」を選択します。

5. このページで以下の情報が表示されます:

   - **Project URL**: これが`NEXT_PUBLIC_SUPABASE_URL`の値になります。
   
   - **anon public**: これが`NEXT_PUBLIC_SUPABASE_ANON_KEY`の値になります。

6. これらの値をコピーして、あなたのアプリケーションの環境変数として設定します。

無料プランには一定の制限がありますが、開発やテスト目的には十分な機能が提供されています。無料プランの制限には以下のようなものがあります:

- 最大2つのプロジェクト
- 1プロジェクトあたり最大500MBのデータベース容量
- 1日あたり最大50,000回のAPI呼び出し

これらの制限内であれば、完全に無料でSupabaseの機能を利用することができます。

## Stripeの無料アカウントでキーを取得する

### Stripeキーの取得

1. Stripeアカウントにログインし、ダッシュボードにアクセスします。

2. 左側のメニューから「開発者」を選択し、次に「APIキー」をクリックします。

3. 「標準キー」セクションで以下の情報が表示されます:

   - **STRIPE_SECRET_KEY**: 「シークレットキー」として表示されます。「ライブキーを表示」ボタンをクリックして確認できます。

   - **NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY**: 「公開可能キー」として表示されます。
     - AICodeBase では、このキーは使用しません。

### Webhook Secretの取得

1. Stripeダッシュボードの「開発者」セクションで「Webhooks」を選択します。

2. 新しいWebhookエンドポイントを追加するか、既存のものを選択します。

   2-1. Webhook用のエンドポイントURLは、Stripeからのイベント通知を受け取るためのあなたのアプリケーションのURLです。一般的に、以下のような形式になります。<br>
   https://あなたのドメイン.com/stripe/webhook

3. Webhookの詳細ページで「署名シークレットを表示」をクリックすると、**STRIPE_WEBHOOK_SECRET**が表示されます。

### カスタマーポータルリンクの設定

1. Stripeダッシュボードで「設定」→「カスタマーポータル」([こちらをクリック](https://dashboard.stripe.com/test/settings/billing/portal))に移動します。

2. ポータルの設定を行い、有効化します。

3. 設定完了後、カスタマーポータルへのリンクが生成され、これが**NEXT_PUBLIC_STRIPE_PORTAL_LINK**となります。

### 支払いリンクの作成

1. Stripeダッシュボードで「支払い」→「支払いリンク」に移動します。

2. 「新しい支払いリンク」をクリックし、月額と年額のプランに対応する2つの支払いリンクを作成します。

3. 作成されたリンクが**NEXT_PUBLIC_STRIPE_PAYMENT_LINK_YEARLY**と**NEXT_PUBLIC_STRIPE_PAYMENT_LINK_MONTHLY**になります。

これらの設定はすべてStripeの無料アカウントで行うことができます。ただし、実際の決済を処理するには、アカウントを本番モードに切り替え、必要な認証手続きを完了する必要があります。

**テスト中は「テストモード」を使用し、本番環境に移行する準備ができたら「ライブモード」に切り替えることをお勧めします。** これにより、実際の取引を開始する前に、安全にインテグレーションをテストすることができます。<br>
**テスト中はサンドボックス環境で作業することをお勧めします。**

## to do
- GCPコンソール画面でプロバイダ登録をしていないためサインアップもサインインもできないので、ユーザーのE-mailとパスワードで登録できる仕組みも追加する
- 以下をproject_summary.md と setup-completed.md に追記か更新する
  - ClientWrapper.tsx（追記）
  - app/layout.tsx（更新）
  - app/page.tsx（更新）

## memo
- mainブランチはボイラーテンプレートのままにしたいため、マージはしないこと