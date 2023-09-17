import React from "react"
import Link from "next/link"

import PlayListItem from "./playlist-item"

type PlayListGroupProps = {
  playListTitle: string
  playListData: {
    title: string
    letter: string
    href: string
    coverColor?: string
  }[]
  children?: React.ReactNode
}

const PlayListGroup: React.FC<PlayListGroupProps> = ({
  playListTitle,
  playListData,
  children,
}) => {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex w-full flex-row items-center justify-between">
        <h1 className="flex justify-start text-2xl font-bold">
          {playListTitle}
        </h1>
        {/* Buttons */}
        <Link href="/" className="flex justify-end text-sm hover:underline">
          View all
        </Link>
      </div>

      <div className="grid w-full grid-cols-1 gap-3 border-0 sm:grid-cols-2 lg:grid-cols-3">
        {playListData.map((playlist, index) => (
          <PlayListItem
            key={index}
            title={playlist.title}
            letter={playlist.letter}
            coverColor={playlist.coverColor}
            href={playlist.href}
          />
        ))}
      </div>
    </div>
  )
}

export default PlayListGroup
