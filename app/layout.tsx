import "@/styles/globals.css"

import type { Metadata } from "next"
import { cookies } from "next/headers"
import Link from "next/link"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

import { cairo, inter } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import Header from "@/components/header"
import SideBar from "@/components/sidebar/sidebar"
import { ThemeProvider } from "@/components/theme/theme-provider"

import SupabaseProvider from "./supabase-provider"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "A Spotify clone made with Next.js",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <html lang="en">
      <body className={cn(`flex p-3 antialiased md:gap-3`, cairo.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SupabaseProvider>
            {/* SideBar */}
            <SideBar>{children}</SideBar>
            {/* Main */}
            <main className="flex min-h-max w-full flex-col gap-y-6 rounded-lg bg-card p-6 text-card-foreground">
              {user ? (
                <div className="flex items-center gap-4">
                  Hey, {user.email}!
                  <form action="/auth/sign-out" method="post">
                    <button className="bg-btn-background hover:bg-btn-background-hover rounded-md px-4 py-2 no-underline">
                      Logout
                    </button>
                  </form>
                </div>
              ) : (
                <Header />
              )}
              {children}
            </main>
          </SupabaseProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
