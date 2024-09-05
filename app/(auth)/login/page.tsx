"use client";

import { Auth, useSupabaseClient } from "@supabase/auth-helpers-react";

export default function LoginPage() {
  const supabase = useSupabaseClient();

  return <Auth supabaseClient={supabase} providers={["google"]} />;
}
// WARNING: この行は古いコードなので削除が必要