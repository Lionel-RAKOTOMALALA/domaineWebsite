import { cn } from "../../lib/utils"
import type React from "react"
import { Card } from "./card"

interface FeatureCardProps {
  number: string
  title: string
  description: string
  className?: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ number, title, description, className }) => {
  return (
    <Card animated className={cn("text-left h-full", className)}>
      <div className="mb-4">
        <div className="w-12 h-12 bg-[#028DD0] text-white rounded-full flex items-center justify-center text-[18px] font-bold font-inter mb-6">
          {number}
        </div>
        <h4 className="text-[18px] font-inter font-semibold text-[#012131] mb-3">{title}</h4>
        <p className="text-[16px] font-inter font-normal text-[#647882] leading-relaxed">{description}</p>
      </div>
    </Card>
  )
}

export { FeatureCard }
