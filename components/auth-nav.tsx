import React from "react"

import { siteConfig } from "@/config/site"

import Button from "./Button2"

const AuthForm = () => {
  return (
    <form
      action={siteConfig.authRoutes.signIn}
      className="
      hidden
      items-center
      justify-center
      gap-x-2
      md:flex
      "
    >
      <Button
        className="
        bg-transparent
        transition-colors
        hover:bg-transparent
        hover:text-green-400
        "
        formAction={siteConfig.authRoutes.signUp}
      >
        Sign up
      </Button>
      <Button>Login</Button>
    </form>
  )
}

export default AuthForm
