# Supabase Auth Setup Instructions

Use this guide to setup the auth for this project.

It uses Supabase Auth for authentication.

Write the complete code for every step. Do not get lazy. Write everything that is needed.

Your goal is to completely finish the auth setup.

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
