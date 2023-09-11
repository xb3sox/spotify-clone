// icons component
// it has all the icons we need

import { IconType } from "react-icons"
import { TbHome, TbSearch } from "react-icons/tb"

import { cn } from "@/lib/utils"

type IconProps = React.HTMLAttributes<SVGElement>

export type Icon = IconType | React.FC<IconProps>

export const Icons = {
  home: TbHome,
  search: TbSearch,
  liked: (props: IconProps) => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20 5C12.268 5 5 12.268 5 20C5 27.732 12.268 35 20 35C27.732 35 35 27.732 35 20C35 12.268 27.732 5 20 5Z"
        fill="currentColor"
      />
      <path
        d="M20 10C16.134 10 13 13.134 13 17C13 20.866 16.134 24 20 24C23.866 24 27 20.866 27 17C27 13.134 23.866 10 20 10ZM20 21C17.2386 21 15 18.7614 15 16C15 13.2386 17.2386 11 20 11C22.7614 11 25 13.2386 25 16C25 18.7614 22.7614 21 20 21Z"
        fill="currentColor"
      />
    </svg>
  ),
  logo: (props: IconProps) => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20ZM20 5C12.268 5 5 12.268 5 20C5 27.732 12.268 35 20 35C27.732 35 35 27.732 35 20C35 12.268 27.732 5 20 5Z"
        fill="currentColor"
      />
      <path
        d="M20 10C16.134 10 13 13.134 13 17C13 20.866 16.134 24 20 24C23.866 24 27 20.866 27 17C27 13.134 23.866 10 20 10ZM20 21C17.2386 21 15 18.7614 15 16C15 13.2386 17.2386 11 20 11C22.7614 11 25 13.2386 25 16C25 18.7614 22.7614 21 20 21Z"
        fill="currentColor"
      />
    </svg>
  ),
}
