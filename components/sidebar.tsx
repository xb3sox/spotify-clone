"use client"

import React, { useMemo } from "react"
import { usePathname } from "next/navigation"
import { TbHome, TbSearch } from "react-icons/tb"

import Box from "./box"
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
      <Box className="flex flex-col gap-4 rounded-lg bg-primary px-8 py-7">
        {routes.map((item) => (
          <SidebarItem key={item.name} {...item} />
        ))}
      </Box>

      <Box className="h-screen bg-primary px-8 py-7">
        <Library />
      </Box>
    </aside>
  )
}

export default SideBar
