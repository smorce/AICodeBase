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












## Setup Steps

1. Create a file `utils/supabaseClient.ts` at the root of the project and write the following code:

```ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

2. Wrap the entire `<html>` tag in `app/layout.tsx` file with `<SessionContextProvider>` with the following code:

```tsx
import { SessionContextProvider } from "@supabase/auth-helpers-nextjs";
import { supabase } from "../utils/supabaseClient";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionContextProvider supabaseClient={supabase}>
      {/* ...add your existing code here... */}
      {children}
    </SessionContextProvider>
  );
}
```

3. Create a `components/header.tsx` file and write the following code:

```tsx
"use client";

import { Auth, useAuth } from "@supabase/auth-helpers-react";

export default function Header() {
  const { session } = useAuth();

  return (
    <header>
      {!session ? (
        <a href="/login">Login</a>
      ) : (
        <>
          <p>Welcome, {session.user.email}!</p>
          <button onClick={() => supabase.auth.signOut()}>Logout</button>
        </>
      )}
    </header>
  );
}
```

4. Update the `app/page.tsx` file to include the `Header` component in the existing code.

```tsx
import Header from "@/components/header";

export default function HomePage() {
  return (
    <>
      <Header />
      {/* ...add your existing code here... */}
    </>
  );
}
```

5. Create a file `app/(auth)/layout.tsx` and write the following code:

```tsx
interface AuthLayoutProps {
  children: React.ReactNode;
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  return <div className="flex h-screen items-center justify-center">{children}</div>;
}
```

6. Create a file `app/(auth)/login/page.tsx` and write the following code:

```tsx
"use client";

import { Auth, useSupabaseClient } from "@supabase/auth-helpers-react";

export default function LoginPage() {
  const supabase = useSupabaseClient();

  return <Auth supabaseClient={supabase} providers={["google"]} />;
}
```

7. Create a file `app/(auth)/signup/page.tsx` and write the following code:

```tsx
"use client";

import { Auth, useSupabaseClient } from "@supabase/auth-helpers-react";

export default function SignUpPage() {
  const supabase = useSupabaseClient();

  return <Auth supabaseClient={supabase} providers={["google"]} />;
}
```

8. The authentication system is now set up.
