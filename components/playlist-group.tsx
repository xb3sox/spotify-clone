import React from "react"

import PlayListItem from "./playlist-item"

type PlayListGroupProps = {
  playListTitle: string
  playListData: { title: string; letter: string; link: string }[]
  children: React.ReactNode
}

const PlayListGroup: React.FC<PlayListGroupProps> = ({
  playListTitle,
  playListData,
  children,
}) => {
  return (
    <div>
      <div className="flex w-full flex-row items-center justify-between gap-4">
        <h1 className="flex justify-start text-2xl font-bold">
          Your Playlists
        </h1>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {playListData.map((playlist, index) => (
          <PlayListItem
            key={index}
            title={playlist.title}
            letter={playlist.letter}
            link={playlist.link}
          />
        ))}
      </div>
    </div>
  )
}

export default PlayListGroup
