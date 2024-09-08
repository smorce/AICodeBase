"use client";

import { useSession } from "@supabase/auth-helpers-react";
import { supabase } from "@/utils/supabaseClient"; // supabaseClient をインポート

export default function Header() {
  const session = useSession();

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