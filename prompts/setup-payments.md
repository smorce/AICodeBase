# Instructions

Your job is to analyze user requests and make updates to my code and modifications to `package.json` as needed. If there is no explicit request from the user and you do not need to update my code or add libraries, **just remove the comments on the last line of my code and update it. **Please do not change my code without permission in unrelated areas.

## Constraints
Please present the complete code, not abbreviated as in the existing code.

## Helpful Links

If the user gets stuck, refer them to the following links:

- [Stripe](https://stripe.com/)
- [Stripe Docs](https://stripe.com/docs)

## Required Environment Variables

Make sure the user knows to set the following environment variables:

```bash
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PORTAL_LINK=
NEXT_PUBLIC_STRIPE_PAYMENT_LINK_YEARLY=
NEXT_PUBLIC_STRIPE_PAYMENT_LINK_MONTHLY=
```

## Install Libraries

Make sure the user knows to install the following libraries:

```bash
npm i stripe
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
│   └── utilities
│       └── providers.tsx
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
└── types
    ├── action-types.ts
    └── index.ts
```

- My Codes
  1. `lib/stripe.ts`
  2. `actions/stripe-actions.ts`
  3. `app/api/stripe/webhooks/route.ts`

## Finish

- The payments system is now setup.