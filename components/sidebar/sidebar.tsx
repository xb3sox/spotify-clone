"use client"

import React, { useMemo } from "react"
import { usePathname } from "next/navigation"
import { TbHome, TbSearch } from "react-icons/tb"

import { Card } from "@/components/ui/card"

import Library from "./library"
import SidebarItem from "./sidebar-item"

// props
interface SideBarProps {
  children: React.ReactNode
}

const SideBar = ({ children }: SideBarProps) => {
  const pathname = usePathname()
  const routes = useMemo(
    () => [
      { icon: TbHome, name: "Home", active: pathname === "/", href: "/" },
      {
        icon: TbSearch,
        name: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  )

  return (
    <aside className="sticky top-3 hidden h-full min-w-[250px] flex-col gap-y-3 md:flex">
      <Card className="flex flex-col gap-4 border-0 px-8 py-7 text-card-foreground">
        {routes.map((item) => (
          <SidebarItem key={item.name} {...item} />
        ))}
      </Card>

      <Card className="h-full border-0 px-8 py-7">
        <Library />
      </Card>
    </aside>
  )
}

export default SideBar
