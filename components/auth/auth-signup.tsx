"use client"

import { getURL } from "@/utils/helpers"
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"

import { siteConfig } from "@/config/site"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useSupabase } from "@/app/supabase-provider"

import { Icons } from "../icons"

export default function AuthUISignup() {
  const { supabase } = useSupabase()
  return (
    <Dialog>
      <DialogTrigger
        className="
        rounded-full
        bg-transparent p-3 px-5
        text-primary
        transition-colors
        hover:bg-primary/10
        dark:hover:text-green-300
        "
      >
        Signup
      </DialogTrigger>
      <DialogContent>
        <div className="mb-6 flex flex-col items-center justify-center gap-6 space-x-2 text-green-700">
          <Icons.logo className="h-20 w-20" />
          <h1 className="text-2xl font-bold">Welcome to {siteConfig.name}!</h1>
        </div>

        <Auth
          view="sign_up"
          supabaseClient={supabase}
          providers={["github"]}
          redirectTo={`${getURL()}/auth/callback`}
          magicLink={true}
          appearance={{
            theme: ThemeSupa,
            style: {
              label: { display: "none" },
              input: { letterSpacing: "0px" },
              // add divider between and add text in the center with this content "or continue with"
            },
            variables: {
              default: {
                colors: {
                  brand: "hsl(var(--primary))",
                  brandAccent: "hsl(var(--secondary-foreground))",
                  brandButtonText: "hsl(var(--primary-foreground))",
                  messageText: "hsl(var(--secondary))",
                  messageTextDanger: "hsl(var(--destructive))",
                  inputBackground: "hsl(var(--background))",
                  inputText: "hsl(var(--primary))",
                  inputBorder: "hsl(var(--border))",
                  inputBorderFocus: "hsl(var(--ring))",
                  inputBorderHover: "hsl(var(--ring))",
                  inputPlaceholder: "hsl(var(--muted-foreground))",
                  anchorTextHoverColor: "hsl(var(--primary))",
                  defaultButtonBackground: "hsl(var(--primary))",
                  defaultButtonBackgroundHover:
                    "hsl(var(--primary-foreground))",
                },
              },
            },
          }}
        />
      </DialogContent>
    </Dialog>
  )
}
