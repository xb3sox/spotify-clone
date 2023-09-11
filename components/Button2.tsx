import { forwardRef } from "react"

import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        ref={ref}
        className={cn(
          `
        rounded-lg
        bg-primary
        px-6
        py-3
        text-white
        transition-all
        hover:bg-black
        hover:text-green-400
        `,
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"

export default Button
