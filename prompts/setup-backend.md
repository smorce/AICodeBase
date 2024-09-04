# Backend Setup Instructions

Use this guide to setup the backend for this project.

It uses Supabase, Drizzle ORM, and Server Actions.

I have prepared a code templates and list of installed libraries for you.

Your task is to analyze user requests and make modifications to the code templates and `package.json` as needed. If there is no explicit request from the user and you do not need to modify the code or add libraries, just execute the modification to remove the comment on the last line of the code templates and suggest it to the user.

Your goal is to completely finish the backend setup.

## Helpful Links

If the user gets stuck, refer them to the following links:

- [Supabase](https://supabase.com/)
- [Drizzle Docs](https://orm.drizzle.team/docs/overview)
- [Drizzle with Supabase Quickstart](https://orm.drizzle.team/learn/tutorials/drizzle-with-supabase)

## Required Environment Variables

Make sure the user knows to set the following environment variables:

```bash
DATABASE_URL=
```

## Install Libraries

Make sure the user knows to install the following libraries:

```bash
npm i drizzle-orm dotenv postgres
npm i -D drizzle-kit
```

## Installed Libraries(Reference)
- `package.json`
```package.json
{
  "name": "test-supabk",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "db:generate": "npx drizzle-kit generate",
    "db:migrate": "npx drizzle-kit migrate"
  },
  "dependencies": {
    "react": "^18",
    "react-dom": "^18",
    "next": "14.2.7"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "eslint": "^8",
    "eslint-config-next": "14.2.7"
  }
}
```

## Code Templates

- `Directory Structure`
```Directory Structure
AICodeBase/
├── actions
│   └── example-actions.ts
├── app
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
├── drizzle.config.ts
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
└── types
    ├── action-types.ts
    └── index.ts
```

- Target Codes
  - `drizzle.config.ts`
  - `actions/example-actions.ts` 
  - `db/migrations/0000_brave_sengi.sql`
  - `db/queries/example-queries.ts`
  - `db/schema/example-schema.ts`
  - `db/schema/index.ts`
  - `db/db.ts`
  - `types/action-types.ts`
  - `types/index.ts`


## Command Instructions

- Run the following command to generate the tables:

```bash
npm run db:generate
```

- Run the following command to migrate the tables:

```bash
npm run db:migrate
```

## Finish

- The backend is now setup.
