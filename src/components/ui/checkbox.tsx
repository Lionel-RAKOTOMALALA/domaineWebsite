import type React from "react"
import { Check } from "lucide-react"
import { cn } from "../../lib/utils"

interface CheckboxProps {
  checked?: boolean
  label?: string
  className?: string
}

const Checkbox: React.FC<CheckboxProps> = ({ checked = true, label, className }) => {
  return (
    <div className={cn("flex items-start gap-3", className)}>
      <div
        className={cn(
          "w-5 h-5 rounded-sm border-2 flex items-center justify-center flex-shrink-0 mt-0.5",
          checked ? "bg-[#22C55E] border-[#22C55E]" : "border-[#D1D5DB]",
        )}
      >
        {checked && <Check size={14} className="text-white" strokeWidth={3} />}
      </div>
      {label && <span className="text-[14px] font-inter font-normal text-[#647882] leading-relaxed">{label}</span>}
    </div>
  )
}

export { Checkbox }
