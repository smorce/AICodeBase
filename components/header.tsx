"use client";

import { Auth, useAuth } from "@supabase/auth-helpers-react";
import { supabase } from "@/utils/supabaseClient"; // supabaseClient をインポート

export default function Header() {
  const { session } = useAuth();

  return (
    <header>
      {!session ? (
        <>
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a> {/* サインアップへのリンクを追加 */}
        </>
      ) : (
        <>
          <p>Welcome, {session.user.email}!</p>
          <button onClick={() => supabase.auth.signOut()}>Logout</button>
        </>
      )}
    </header>
  );
}
// WARNING: この行は古いコードなので削除が必要