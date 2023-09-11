"use client"

import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { TbArrowLeft, TbArrowRight, TbHome, TbSearch } from "react-icons/tb"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import Button from "./Button2"

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
        <Button onClick={() => router.back()} className="rounded-full p-2">
          <TbArrowLeft size={30} />
        </Button>

        <Button onClick={() => router.forward()} className="rounded-full p-2">
          <TbArrowRight size={30} />
        </Button>
      </div>

      {/* Mobile */}
      <div className="flex items-center gap-x-2 md:hidden">
        <Button onClick={() => router.back()} className="rounded-full p-3">
          <TbHome size={30} />
        </Button>

        <Button className="rounded-full p-3">
          <TbSearch size={30} />
        </Button>
      </div>

      {/* Account Buttons */}
      <div
        className="
      hidden
      items-center
      justify-center
      gap-x-2
      md:flex
      "
      >
        <Link
          href={`${siteConfig.links.signUp}`}
          className="
        bg-transparent
        px-4 text-primary-foreground
        transition-colors
        hover:bg-transparent
        hover:text-green-400
        "
        >
          Sign up
        </Link>
        <Link
          className="
                  py-
                  rounded-full 
                  bg-primary-foreground
                  px-6 py-3
                  text-primary
                  transition-colors
                  hover:bg-primary-foreground/80
                  
                  "
          href={`${siteConfig.links.signIn}`}
        >
          Login
        </Link>
      </div>
    </div>
  )
}

export default Header
