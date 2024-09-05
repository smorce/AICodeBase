# Instructions

Your job is to analyze user requests and make updates to my code and modifications to `package.json` as needed. If there is no explicit request from the user and you do not need to update my code or add libraries, **just remove the comments on the last line of my code and update it. **Please do not change my code without permission in unrelated areas.

## Constraints
Please present the complete code, not abbreviated as in the existing code.

## Helpful Links

If the user gets stuck, they can refer to the following links:

- [Supabase](https://supabase.com/)
- [Supabase Auth Docs](https://supabase.com/docs/guides/auth)

## Required Environment Variables

Instruct the user to set the following environment variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## Install Libraries

Instruct the user to install the following libraries:

```bash
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs
```

## Code Templates

I will give you my Directory Structure as context.
- `Directory Structure`
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

- My Codes
  1. `utils/supabaseClient.ts`
  2. `components/header.tsx`
  3. `app/(auth)/layout.tsx`
  4. `app/(auth)/login/page.tsx`
  5. `app/(auth)/signup/page.tsx`
  6. `app/layout.tsx`
  7. `app/page.tsx`

## Finish

- The authentication system is now set up.
