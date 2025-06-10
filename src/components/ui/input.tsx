import React from "react"
import { cn } from "../../lib/utils"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, label, error, icon, ...props }, ref) => {
  return (
    <div className="space-y-2">
      {label && <label className="block text-[14px] font-medium text-[#023246] font-inter">{label}</label>}
      <div className="relative">
        {icon && <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">{icon}</div>}
        <input
          className={cn(
            "w-full px-4 py-3 text-[16px] font-inter font-normal border border-[#D1D5DB] rounded-xl placeholder-[#CCCCCC] focus:border-[#80C6E7] focus:outline-none transition-colors bg-white",
            icon && "pl-10",
            error && "border-red-500 focus:border-red-500",
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
      {error && <p className="text-[12px] text-red-500 font-inter">{error}</p>}
    </div>
  )
})

Input.displayName = "Input"

export { Input }
