"use client";

import { supabase } from "@/lib/supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function LoginPage() {
  console.log("Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);

  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="default"
      />
    </div>
  );
}