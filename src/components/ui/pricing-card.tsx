import type React from "react"
import { Button } from "./button"
import { Checkbox } from "./checkbox"
import { Card } from "./card"
import { cn } from "../../lib/utils"

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  recommended?: boolean
  buttonText?: string
  className?: string
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  recommended = false,
  buttonText = "Choisir ce plan",
  className,
}) => {
  return (
    <Card
      animated
      className={cn("relative h-full flex flex-col", recommended && "border-2 border-[#028DD0] shadow-lg", className)}
    >
      {recommended && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-[#028DD0] text-white px-4 py-1 rounded-full text-[12px] font-medium font-inter">
            Recommandé
          </span>
        </div>
      )}

      <div className="text-left mb-6">
        <h3 className="text-[20px] font-inter font-bold text-[#012131] mb-2">{title}</h3>
        <div className="mb-3">
          <span className="text-[32px] font-inter font-bold text-[#023246]">{price}</span>
        </div>
        <p className="text-[14px] font-inter font-normal text-[#647882]">{description}</p>
      </div>

      <div className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <Checkbox key={index} checked label={feature} />
        ))}
      </div>

      <Button variant={recommended ? "primary" : "outline"} className="w-full mt-auto" size="md">
        {buttonText}
      </Button>
    </Card>
  )
}

export { PricingCard }
