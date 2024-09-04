# Backend Setup Instructions

Use this guide to setup the backend for this project.

It uses Supabase, Drizzle ORM, and Server Actions.

Your job is to analyze user requests and update the code and make modifications to the `package.json` as needed. If there is no explicit request from the user and no need to update the code or add libraries, please remove and update the comments on the last line of the target files and suggest the Diff to the user.

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

- Target Files(step by step, with open to load files and Update the code)
  1. `drizzle.config.ts`
  2. `actions/example-actions.ts` 
  3. `db/migrations/0000_brave_sengi.sql`
  4. `db/queries/example-queries.ts`
  5. `db/schema/example-schema.ts`
  6. `db/schema/index.ts`
  7. `db/db.ts`
  8. `types/action-types.ts`
  9. `types/index.ts`


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
