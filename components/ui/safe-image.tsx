"use client"

import Image from "next/image"
import { useState } from "react"

interface SafeImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  fill?: boolean
}

export default function SafeImage({ src, alt, width, height, className = "", fill = false }: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)

  const handleError = () => {
    setImgSrc(`/placeholder.svg?height=${height || 200}&width=${width || 300}&query=${encodeURIComponent(alt)}`)
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  if (fill) {
    return (
      <div className={`relative ${className}`}>
        {isLoading && <div className="absolute inset-0 bg-gray-200 animate-pulse rounded"></div>}
        <Image
          src={imgSrc || "/placeholder.svg"}
          alt={alt}
          fill
          className={`object-cover transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
          onError={handleError}
          onLoad={handleLoad}
        />
      </div>
    )
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse rounded"
          style={{ width: width || "100%", height: height || "auto" }}
        ></div>
      )}
      <Image
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        width={width || 300}
        height={height || 200}
        className={`transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
        onError={handleError}
        onLoad={handleLoad}
      />
    </div>
  )
}
