import { cn } from "@/lib/utils"

interface BoxProps {
  children: React.ReactNode
  className?: string
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
  return (
    <div className={cn("w-full rounded-lg text-primary-foreground", className)}>
      {children}
    </div>
  )
}

export default Box
