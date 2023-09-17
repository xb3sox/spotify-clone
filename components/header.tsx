"use client"

import React from "react"
import { useRouter } from "next/navigation"
import { TbArrowLeft, TbArrowRight, TbHome2, TbSearch } from "react-icons/tb"

import AuthUILogin from "./auth/auth-login"
import AuthUISignup from "./auth/auth-signup"
import { ThemeToggle } from "./theme/theme-toggle"
import { Button } from "./ui/button"

type HeaderProps = {
  children?: React.ReactNode
  className?: string
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter()

  const handleLogout = () => {
    // TODO: handle logout
    router.push("/login")
  }

  return (
    <div className="mb-4 flex w-full items-center justify-between">
      {/* Navigation */}
      {/* Desktop */}
      <div className="hidden items-center gap-x-2 md:flex">
        <Button
          onClick={() => router.back()}
          className="rounded-full bg-primary px-1 transition-all hover:scale-110 hover:text-green-600 dark:hover:text-green-900"
        >
          <TbArrowLeft size={30} />
        </Button>

        <Button
          onClick={() => router.forward()}
          className="rounded-full bg-primary px-1 transition-all hover:scale-110 hover:text-green-600 dark:hover:text-green-900"
        >
          <TbArrowRight size={30} />
        </Button>
      </div>

      {/* Mobile */}
      <div className="flex w-full items-center justify-between gap-x-2 md:hidden">
        <div className="flex gap-x-2">
          <Button
            variant="default"
            size="lg"
            className="rounded-full bg-primary px-3"
            onClick={() => router.back()}
          >
            <TbHome2 size={24} />
          </Button>

          <Button
            variant="default"
            size="lg"
            className="rounded-full bg-primary px-3"
          >
            <TbSearch size={24} />
          </Button>
        </div>

        <div className="flex justify-end">
          <ThemeToggle />
        </div>
      </div>

      {/* Account Buttons */}
      <div className="hidden items-center justify-center gap-x-2 md:flex">
        <ThemeToggle />
        <AuthUISignup />
        <AuthUILogin />
      </div>
    </div>
  )
}

export default Header
