import "@/styles/globals.css"

import type { Metadata } from "next"

import { cairo, inter } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import Header from "@/components/header"
import SideBar from "@/components/sidebar"

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "A Spotify clone made with Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(`flex p-3 antialiased md:gap-3`, cairo.className)}>
        {/* SideBar */}
        <SideBar>{children}</SideBar>
        {/* Main */}
        <main
          className="
          glow
          w-full
          flex-col
          gap-y-0
          rounded-lg
          border-2
          border-green-900
          bg-gradient-to-br
          from-zinc-950
          p-6"
        >
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
