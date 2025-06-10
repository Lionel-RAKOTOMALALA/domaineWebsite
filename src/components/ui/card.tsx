import type React from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "../../lib/utils"

interface CardProps {
  children: React.ReactNode
  className?: string
  animated?: boolean
}

const Card: React.FC<CardProps> = ({ children, className, animated = false }) => {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!animated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [animated])

  return (
    <div
      ref={cardRef}
      className={cn(
        "bg-white rounded-2xl shadow-sm border border-gray-100 p-6",
        animated && "transition-all duration-600 ease-out",
        animated && !isVisible && "opacity-0 translate-y-[50px]",
        animated && isVisible && "opacity-100 translate-y-0",
        className,
      )}
    >
      {children}
    </div>
  )
}

export { Card }
