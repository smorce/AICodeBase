"use client";

import { Auth, useSupabaseClient } from "@supabase/auth-helpers-react";

export default function SignUpPage() {
  const supabase = useSupabaseClient();

  return <Auth supabaseClient={supabase} providers={["google"]} />;
}