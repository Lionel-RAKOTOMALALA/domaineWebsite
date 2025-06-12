import type React from "react"
import Checkbox from "./checkbox"
import { cn } from "../../lib/utils"

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  recommended?: boolean
  borderType?: "default" | "blue" | "dark"
  className?: string
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  recommended = false,
  borderType = "default",
  className,
}) => {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl relative overflow-hidden w-full max-w-[420px] min-h-[480px]",
        "shadow-[0_1px_2px_0_rgba(0,0,0,0.05),0_8px_16px_-4px_rgba(0,0,0,0.1)]",
        className
      )}
      style={{
        ...(!recommended && {
          borderTopWidth: borderType === "blue" ? "4px" : borderType === "dark" ? "4px" : "1px",
          borderTopColor: borderType === "blue" ? "#028DD0" : borderType === "dark" ? "#033347" : "#E5E7EB",
          borderLeftWidth: "1px",
          borderRightWidth: "1px",
          borderBottomWidth: "1px",
          borderLeftColor: "#E5E7EB",
          borderRightColor: "#E5E7EB",
          borderBottomColor: "#E5E7EB",
          borderStyle: "solid"
        })
      }}
    >
      {recommended && (
        <div className="bg-[#028DD0] text-white py-2.5 px-4 text-center w-full">
          <span className="text-sm font-medium">Recommandé</span>
        </div>
      )}

      <div className="p-8">
        <div className="mb-12">
          <h3 className="text-lg font-inter font-bold text-[#111827] mb-5">{title}</h3>
          <div className="mb-6">
            <span className="text-4xl font-inter font-bold text-[#111827]">{price}</span>
          </div>
          <p className="text-sm font-inter font-normal text-[#6B7280] leading-relaxed">{description}</p>
        </div>

        <div className="space-y-6">
          {features.map((feature, index) => (
            <Checkbox key={index} checked label={feature} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PricingCard
