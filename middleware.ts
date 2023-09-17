import { NextResponse, type NextRequest } from "next/server"
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"

import { Database } from "./types/database.types"

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient<Database>({ req, res })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // if user is signed in and the current path is / redirect the user to /account
  if (user && req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/account", req.url))
  }

  // if user is not signed in and the current path is not / redirect the user to /
  if (!user && req.nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL("/", req.url))
  }

  return res
}

// this config is used by the middleware to determine which paths to apply the middleware to
// in this case, the middleware will be applied to the root path and the /account path
// if you want to apply the middleware to all paths, you can use the following config:
// export const config = { matcher: /.*/ }
// applying means the user will be redirected to the root path if they are not signed in
export const config = {
  matcher: ["/", "/account"],
}
