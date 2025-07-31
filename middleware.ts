import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  // Refresh session if expired
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Protect admin routes
  if (req.nextUrl.pathname.startsWith("/admin") && !req.nextUrl.pathname.includes("/login")) {
    if (!session) {
      return NextResponse.redirect(new URL("/admin/login", req.url))
    }

    // Check if user is admin
    const { data: profile } = await supabase.from("profiles").select("role").eq("id", session.user.id).single()

    if (!profile || profile.role !== "admin") {
      return NextResponse.redirect(new URL("/admin/login", req.url))
    }
  }

  return res
}

export const config = {
  matcher: ["/admin/:path*"],
}
