import Image from "next/image"

import Header from "@/components/header"
import { Icons } from "@/components/icons"
import PlayListItem from "@/components/playlist-item"

const playlists = [
  {
    title: "Liked Songs",
    letter: "L",
  },
  {
    title: "Chill",
    letter: "C",
  },
  {
    title: "Focus",
    letter: "F",
  },
  {
    title: "Party",
    letter: "P",
  },
  {
    title: "Workout",
    letter: "W",
  },
  {
    title: "Sleep",
    letter: "S",
  },
  {
    title: "Rock",
    letter: "R",
  },
  {
    title: "Pop",
    letter: "P",
  },
  {
    title: "Hip Hop",
    letter: "H",
  },
  {
    title: "Indie",
    letter: "I",
  },
  {
    title: "Jazz",
    letter: "J",
  },
  {
    title: "Folk",
    letter: "F",
  },
  {
    title: "Classical",
    letter: "C",
  },
  {
    title: "Metal",
    letter: "M",
  },
  {
    title: "Country",
    letter: "C",
  },
  {
    title: "R&B",
    letter: "R",
  },
  {
    title: "Soul",
    letter: "S",
  },
  {
    title: "Reggae",
    letter: "R",
  },
  {
    title: "Blues",
    letter: "B",
  },
  {
    title: "K-Pop",
    letter: "K",
  },
  {
    title: "Anime",
    letter: "A",
  },
  {
    title: "Decades",
    letter: "D",
  },
  {
    title: "Latin",
    letter: "L",
  },
  {
    title: "Dance",
    letter: "D",
  },
  {
    title: "Electronic",
    letter: "E",
  },
  {
    title: "Reggaeton",
    letter: "R",
  },
  {
    title: "Funk",
    letter: "F",
  },
  {
    title: "Ska",
    letter: "S",
  },
  {
    title: "Comedy",
    letter: "C",
  },
  {
    title: "TV & Movies",
    letter: "T",
  },
  {
    title: "Kids & Family",
    letter: "K",
  },
  {
    title: "Audiobooks",
    letter: "A",
  },
  {
    title: "Country",
    letter: "C",
  },
  {
    title: "R&B",
    letter: "R",
  },
  {
    title: "Soul",
    letter: "S",
  },
  {
    title: "Reggae",
    letter: "R",
  },
  {
    title: "Blues",
    letter: "B",
  },
  {
    title: "K-Pop",
    letter: "K",
  },
  {
    title: "Anime",
    letter: "A",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-center gap-4 text-primary-foreground md:gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold md:text-4xl">
          Welcome to&nbsp;
          <span className="font-light">
            {process.env.NEXT_PUBLIC_SITE_NAME}
          </span>
        </h1>

        <p className="text-left text-sm md:text-lg">
          <span className="font-bold">Music</span> is the best way to relax
          after a long day of work.
        </p>
      </div>

      <div className="flex w-full flex-row items-center justify-between gap-4">
        <h1 className="flex justify-start text-2xl font-bold">
          Your Playlists
        </h1>
        {/* Show all button */}
      </div>
      {/* Playlists items in two columns in big screens and one column in small screens */}
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {playlists.map((playlist, index) => (
          <PlayListItem
            key={index}
            title={playlist.title}
            letter={playlist.letter}
          />
        ))}
      </div>
    </div>
  )
}
