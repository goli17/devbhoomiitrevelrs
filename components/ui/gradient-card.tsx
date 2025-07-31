import type React from "react"

interface GradientCardProps {
  children: React.ReactNode
  className?: string
  gradient?: "orange" | "blue" | "purple" | "green"
}

export default function GradientCard({ children, className = "", gradient = "orange" }: GradientCardProps) {
  const gradients = {
    orange: "bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200",
    blue: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
    purple: "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200",
    green: "bg-gradient-to-br from-green-50 to-green-100 border-green-200",
  }

  return (
    <div
      className={`rounded-2xl border-2 p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 ${gradients[gradient]} ${className}`}
    >
      {children}
    </div>
  )
}
