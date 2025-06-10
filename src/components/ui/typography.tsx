import type React from "react"
import { cn } from "../../lib/utils"

interface TypographyProps {
  children: React.ReactNode
  className?: string
}

export const Title1: React.FC<TypographyProps> = ({ children, className }) => (
  <h1 className={cn("text-[40px] font-inter font-bold text-[#023246]", className)}>{children}</h1>
)

export const Title2: React.FC<TypographyProps> = ({ children, className }) => (
  <h2 className={cn("text-[26px] font-inter font-bold text-[#012131]", className)}>{children}</h2>
)

export const Title3: React.FC<TypographyProps> = ({ children, className }) => (
  <h3 className={cn("text-[20px] font-inter font-bold text-[#012131]", className)}>{children}</h3>
)

export const Title4: React.FC<TypographyProps> = ({ children, className }) => (
  <h4 className={cn("text-[18px] font-inter font-semibold text-[#012131]", className)}>{children}</h4>
)

export const Paragraph: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={cn("text-[16px] font-inter font-normal text-[#647882]", className)}>{children}</p>
)
