// Client instance with the cookies from the request headers
import { cookies } from "next/headers"
// to get cookies from the request headers
import { NextResponse } from "next/server"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"

// to redirect the user

// Types from the database for type safety
import type { Database } from "@/types/database.types"

// This is a dynamic route, so we need to export a variable called `dynamic`
export const dynamic = "force-dynamic"

export async function POST(request: Request) {
  const requestUrl = new URL(request.url) // Get request URL
  const formData = await request.formData() // Get form data from request
  const email = String(formData.get("email")) // Get email from form data
  const password = String(formData.get("password")) // Get password from form data

  const supabase = createRouteHandlerClient<Database>({ cookies }) // Get cookies from request headers

  // Check if a user with the same email already exists
  const { data: existingUser, error: existingUserError } = await supabase
    .from("users")
    .select("id")
    .eq("email", email)

  if (existingUser) {
    return NextResponse.redirect(
      `${requestUrl.origin}/login?error=User with this email already exists`,
      { status: 301 }
    )
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${requestUrl.origin}/auth/callback`,
    },
  })

  if (error) {
    return NextResponse.redirect(
      `${requestUrl.origin}/login?error=Could not authenticate user`,
      { status: 301 }
    )
  }

  return NextResponse.redirect(
    `${requestUrl.origin}/login?message=Check email to continue sign-in process`,
    { status: 301 }
  )
}
