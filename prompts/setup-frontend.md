# Instructions

Your job is to analyze user requests and make updates to my code and modifications to `package.json` as needed. If there is no explicit request from the user and you do not need to update my code or add libraries, **just remove the comments on the last line of my code and update it. **Please do not change my code without permission in unrelated areas.

## Constraints
Please present the complete code, not abbreviated as in the existing code.

## Helpful Links

If the user gets stuck, refer them to the following links:

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS with Next.js Guide](https://tailwindcss.com/docs/guides/nextjs)
- [Shadcn UI Installation for Next.js](https://ui.shadcn.com/docs/installation/next)
- [Framer Motion Introduction](https://www.framer.com/motion/introduction/)

## Setup Scripts

Make sure the user knows to run the following scripts:

```bash
npx create-next-app@latest my-app --typescript --tailwind --eslint
npx shadcn-ui@latest init
npx shadcn-ui@latest add
```

## Install Libraries

Make sure the user knows to install the following libraries:

```bash
npm i framer-motion
```

## Code Templates

I will give you my Directory Structure as context.
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
│   │   └── 0000_XXXXX.sql
│   ├── queries
│   │   └── example-queries.ts
│   └── schema
│       ├── example-schema.ts
│       └── index.ts
├── .env.local
├── .gitignore
├── components
│   └── utilities
│       └── providers.tsx
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

- My Codes
  1. `components/utilities/providers.tsx`
  2. `app/layout.tsx`
  3. `app/page.tsx`

## Finish

- The frontend is now setup.
