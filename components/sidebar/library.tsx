"use client"

import { TbPlaylist, TbPlus } from "react-icons/tb"

const Library = () => {
  const onClick = () => {
    // handle upload library
    // 1. open file dialog
    // 2. get file
    // 3. read file
    // 4. parse file
    // 5. upload to server
    // 6. update library
  }

  return (
    // Container
    <div className="flex flex-col gap-y-4">
      {/* Header */}
      <div className="flex items-center">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={20} />
          <p className="text-md font-medium">Your Library</p>
        </div>
        <div className="flex-1" />
        <TbPlus
          className="cursor-pointer transition hover:text-card-foreground/50"
          size={20}
          onClick={onClick}
        />
      </div>

      {/* Body */}
      <div className="flex flex-col gap-y-2 pl-7 text-sm">
        <p>List of songs</p>
        <p>List of songs</p>
        <p>List of songs</p>
        <p>List of songs</p>
        <p>List of songs</p>
        <p>List of songs</p>
      </div>
    </div>
  )
}

export default Library
