// Sign in page
// Path: /sign-in

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

import type { Database } from "@/types/database.types"
import AuthUI from "@/components/auth/auth-login"

const LoginPage = async () => {
  const supabase = createServerComponentClient<Database>({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    return redirect("/account")
  }

  return (
    // make the form responsive by using flexbox and tailwindcss breakpoints
    <section className="flex w-full flex-1 flex-col justify-center gap-2 px-8 sm:max-w-md lg:max-w-lg xl:max-w-lg">
      {/* <UserAuthForm session={session} /> */}
      <AuthUI />
    </section>
  )
}

export default LoginPage
