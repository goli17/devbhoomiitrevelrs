// lib/supabase/server.ts
import { createServerClient } from '@supabase/ssr' // ✅ MAKE SURE THIS IS PRESENT
import { cookies } from 'next/headers'

export const createServerSupabaseServer = () => {
  const cookieStore = cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )
}
