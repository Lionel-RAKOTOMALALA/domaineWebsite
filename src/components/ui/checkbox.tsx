import type React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { cn } from "../../lib/utils"

interface CheckboxProps {
  checked?: boolean
  label?: string
  className?: string
}

const Checkbox: React.FC<CheckboxProps> = ({ checked = true, label, className }) => {
  return (
    <div className={cn("flex items-start gap-2.5", className)}>
      <div
        className={cn(
          "w-[18px] h-[18px] flex items-center justify-center flex-shrink-0 mt-[2px]",
        )}
      >
        {checked && (
          <FontAwesomeIcon 
            icon={faCheck} 
            className="text-[#22C55E] drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]"
            style={{ 
              fontSize: '11px',
              transform: 'translateY(-0.5px)',
              fontWeight: 100
            }}
          />
        )}
      </div>
      {label && (
        <span className="text-[14px] font-inter font-normal text-[#6B7280] leading-[1.4]">
          {label}
        </span>
      )}
    </div>
  )
}

export default Checkbox
