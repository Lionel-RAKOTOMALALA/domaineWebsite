import React from "react"
import { cn } from "../../lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base styles
          "inline-flex items-center justify-center font-inter font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
          // Variants
          {
            "bg-[#028DD0] text-[#F8FAFC] hover:bg-[#0273aa] shadow-sm": variant === "primary",
            "bg-transparent text-[#028DD0] border border-[#028DD0] hover:bg-[#028DD0] hover:text-[#F8FAFC]":
              variant === "outline",
            "bg-white text-[#028DD0] border border-gray-200 hover:bg-gray-50": variant === "secondary",
          },
          // Sizes
          {
            "text-[14px] px-4 py-2 rounded-lg": size === "sm",
            "text-[14px] px-6 py-3 rounded-lg": size === "md",
            "text-[14px] px-8 py-4 rounded-lg": size === "lg",
          },
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = "Button"

export { Button }
