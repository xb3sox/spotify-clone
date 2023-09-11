import Link from "next/link"
import { IconType } from "react-icons"

import { cn } from "@/lib/utils"

interface SidebarItemProps {
  icon: IconType
  name: string
  active?: boolean
  href: string
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  name,
  active,
  href,
}) => {
  return (
    <Link
      href={`${href}`}
      className={cn(
        `
        text-md flex h-auto w-full
        cursor-pointer flex-row items-center
        gap-x-3 rounded-xl font-medium
        text-muted-foreground transition-colors
        hover:text-primary-foreground
      `,
        active && "text-primary-foreground"
      )}
    >
      <Icon size={20} />
      <span className="w-full truncate">{name}</span>
    </Link>
  )
}

export default SidebarItem
