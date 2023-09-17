"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { TbHeart, TbPlayerPlayFilled } from "react-icons/tb"

import { cn } from "@/lib/utils"

type PlayListItemProps = {
  letter: string
  title: string
  coverColor?: string
  href?: string
  className?: string
}

const PlayListItem: React.FC<PlayListItemProps> = ({
  letter,
  title,
  coverColor,
  href,
  className,
}) => {
  const router = useRouter()

  const onClick = () => {
    // TODO: Add auth check
    router.push(href ?? "#")
  }

  return (
    <Link
      onClick={onClick}
      href={href?.toString() ?? "#"}
      className={cn(
        `group
        relative
        flex
    cursor-pointer
    items-center
    gap-4 
    rounded-lg
    bg-primary-foreground
    p-2 
    transition-all 
    hover:bg-primary/10
    `,
        className
      )}
    >
      {/* Cover */}
      <div
        className={cn(`
        relative
        inset-0 
         flex 
         h-16
         w-16 items-center
         justify-center
         rounded-lg 
        ${coverColor ?? "bg-green-500"}
         text-primary-foreground
         transition-all
         group-hover:animate-pulse
        `)}
      >
        {letter}
      </div>

      {/* Title */}
      <p className="truncate text-sm font-bold md:text-base lg:text-lg">
        {title}
      </p>

      <div
        className="
      absolute
      right-5
      flex
      items-center
      justify-center
      rounded-full
      bg-primary
      p-3
      opacity-0
      drop-shadow-md
      transition
      hover:scale-110
      group-hover:opacity-100
      dark:bg-primary
      "
      >
        <TbPlayerPlayFilled className="h-5 w-5 text-primary-foreground" />
      </div>
    </Link>
  )
}

export default PlayListItem
