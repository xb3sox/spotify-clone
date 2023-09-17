import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs' // Client instance with the cookies from the request headers
import { cookies } from 'next/headers' // to get cookies from the request headers
import { NextResponse } from 'next/server' // to redirect the user

import type { Database } from '@/types/database.types' // Types from the database for type safety

// This is a dynamic route, so we need to export a variable called `dynamic`
export const dynamic = 'force-dynamic'

// To sign in the user, we need to get the email and password from the request body
export async function POST(request: Request) {
  const requestUrl = new URL(request.url) // URL to redirect to after sign in process completes
  const formData = await request.formData() // Get form data from request body
  const email = String(formData.get('email')) // Get email and password from form data
  const password = String(formData.get('password')) // Client instance with the cookies from the request headers

  // for type safety, we need to pass the Database type to createRouteHandlerClient
  const supabase = createRouteHandlerClient<Database>({ cookies })

  // Sign in the user with email and password
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  // If there was an error,
  // redirect the user to the login page with an error message
  if (error) {
    return NextResponse.redirect(
      `${requestUrl.origin}/login?error=Could not authenticate user`,
      { status: 301 }
    )
  }

  // If there was no error,
  // redirect the user to the home page
  return NextResponse.redirect(requestUrl.origin, {
    // a 301 status is required to redirect from a POST to a GET route
    status: 301,
  })
}
