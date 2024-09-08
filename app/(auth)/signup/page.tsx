"use client";

import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from '@supabase/auth-ui-react';

export default function SignUpPage() {
  const supabase = useSupabaseClient();

  return <Auth supabaseClient={supabase} providers={["google"]} />;
}