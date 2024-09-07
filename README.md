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
DATABASE_URL=your_database_url
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
NEXT_PUBLIC_STRIPE_PORTAL_LINK=your_stripe_portal_link
NEXT_PUBLIC_STRIPE_PAYMENT_LINK_YEARLY=your_stripe_payment_link_yearly
NEXT_PUBLIC_STRIPE_PAYMENT_LINK_MONTHLY=your_stripe_payment_link_monthly
```

### 4. 必要なライブラリのインストール

以下のコマンドを実行して、必要なライブラリをインストールします。
```bash
npm install
npm i drizzle-orm dotenv postgres
npm i -D drizzle-kit
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs
npm i stripe
npm i framer-motion
```

### 5. データベースのセットアップ

データベースのテーブルを生成し、マイグレーションを実行します。
```bash
npm run db:generate
npm run db:migrate
```

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
│   │   └── 0000_brave_sengi.sql
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