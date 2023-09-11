import Image from "next/image"
import Link from "next/link"
import { TbHeart } from "react-icons/tb"

import { cn } from "@/lib/utils"

type PlayListItemProps = {
  letter: string
  title: string
  link?: string
  className?: string
}

const PlayListItem: React.FC<PlayListItemProps> = ({
  letter,
  title,
  link,
  className,
}) => {
  return (
    <Link
      href={link?.toString() ?? "#"}
      className={cn(
        `flex
    cursor-pointer
    items-center
    gap-4 
    rounded-lg 
    border 
    border-green-950 
    bg-green-950/10
    p-2 
    transition-all 
    hover:text-primary-foreground/25
    `,
        className
      )}
    >
      {/* Cover */}
      <div
        className="relative inset-0 flex 
        h-16
        w-16 
         items-center 
         justify-center
         rounded-lg bg-gradient-to-br from-green-900
         to-green-950
         text-primary-foreground
         "
      >
        {letter}
      </div>

      {/* Title */}
      <h1 className="text-sm font-bold md:text-base lg:text-lg">{title}</h1>
    </Link>
  )
}

export default PlayListItem
