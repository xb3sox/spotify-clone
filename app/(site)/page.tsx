import Image from "next/image"
import Link from "next/link"
import { TbPlayerPause } from "react-icons/tb"

import { Card } from "@/components/ui/card"
import Header from "@/components/header"
import { Icons } from "@/components/icons"
import PlayListGroup from "@/components/playlist/playlist-group"
import PlayListItem from "@/components/playlist/playlist-item"

const playlists = [
  {
    title: "Liked Songs",
    letter: "L",
    coverColor: "bg-green-400",
    href: "/",
  },
  {
    title: "Recently Played",
    letter: "R",
    coverColor: "bg-blue-400",
    href: "/",
  },
  {
    title: "Albums",
    letter: "A",
    coverColor: "bg-yellow-400",
    href: "/",
  },
  {
    title: "Artists",
    letter: "A",
    coverColor: "bg-red-400",
    href: "/",
  },
  {
    title: "Podcasts",
    letter: "P",
    coverColor: "bg-purple-400",
    href: "/",
  },
  {
    title: "Charts",
    letter: "C",
    coverColor: "bg-pink-400",
    href: "/",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-center gap-4 md:gap-6">
      {/* Header */}
      <div className="flex flex-col md:gap-2">
        <h1 className="text-2xl font-bold md:text-4xl">
          Welcome to&nbsp;
          <span className="font-light">
            {process.env.NEXT_PUBLIC_SITE_NAME}
          </span>
        </h1>

        {/* Welcome Message */}
        <p className="text-left text-sm md:text-lg">
          <span className="font-bold">Music</span> is the best way to relax
          after a long day of work.
        </p>
      </div>

      {/* Playlist section */}
      <div className="flex w-full flex-col gap-8">
        {/* Playlists */}
        <PlayListGroup
          playListTitle="Your Playlists"
          playListData={playlists}
        />
      </div>

      {/* Songs Section */}
      <div className="flex w-full flex-col gap-4">
        {/* Songs Header */}
        <div className="flex flex-row items-center justify-between gap-4">
          <h1 className="flex justify-start text-2xl font-bold">Your Songs</h1>
          <Link href="/" className="flex justify-end">
            View all
          </Link>
        </div>

        {/* Songs */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          List of songs
        </div>
      </div>
    </div>
  )
}
