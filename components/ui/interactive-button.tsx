"use client"

import type React from "react"
import { useState } from "react"

interface InteractiveButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  variant?: "primary" | "secondary" | "success" | "gradient"
  size?: "sm" | "md" | "lg"
  className?: string
}

export default function InteractiveButton({
  children,
  onClick,
  href,
  variant = "primary",
  size = "md",
  className = "",
}: InteractiveButtonProps) {
  const [isPressed, setIsPressed] = useState(false)

  const variants = {
    primary: "bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 hover:border-gray-300",
    success: "bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl",
    gradient:
      "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-lg hover:shadow-xl",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const baseClasses = `
    inline-flex items-center justify-center space-x-2 rounded-xl font-semibold
    transition-all duration-300 transform hover:scale-105 active:scale-95
    focus:outline-none focus:ring-4 focus:ring-orange-300/50
    ${variants[variant]} ${sizes[size]} ${className}
    ${isPressed ? "scale-95" : ""}
  `

  const handleMouseDown = () => setIsPressed(true)
  const handleMouseUp = () => setIsPressed(false)
  const handleMouseLeave = () => setIsPressed(false)

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      className={baseClasses}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  )
}
