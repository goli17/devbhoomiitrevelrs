"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Users, Shield } from "lucide-react"
import Image from "next/image"

const heroSlides = [
  {
    id: 1,
    title: "Char Dham Yatra",
    subtitle: "2025",
    description:
      "Experience the sacred journey to Kedarnath, Badrinath, Gangotri & Yamunotri with complete comfort and spiritual guidance",
    image: "/placeholder.svg?height=800&width=1400",
    price: "12,999",
    location: "Four Sacred Dhams",
  },
  {
    id: 2,
    title: "Kedarnath Yatra",
    subtitle: "2025",
    description:
      "Sacred abode of Lord Shiva in the majestic Himalayas with helicopter services and comfortable accommodation",
    image: "/placeholder.svg?height=800&width=1400",
    price: "15,999",
    location: "Kedarnath Dham",
  },
  {
    id: 3,
    title: "Auli Adventure",
    subtitle: "2025",
    description:
      "Experience the breathtaking beauty of Auli with skiing, cable car rides and panoramic Himalayan views",
    image: "/placeholder.svg?height=800&width=1400",
    price: "18,999",
    location: "Auli Hill Station",
  },
  {
    id: 4,
    title: "Munsiyari Trek",
    subtitle: "2025",
    description: "Discover the hidden gem of Uttarakhand with stunning views of Panchachuli peaks and alpine meadows",
    image: "/placeholder.svg?height=800&width=1400",
    price: "22,999",
    location: "Munsiyari Valley",
  },
  {
    id: 5,
    title: "Badrinath Yatra",
    subtitle: "2025",
    description: "Holy shrine dedicated to Lord Vishnu nestled in the Garhwal Himalayas with Mana village visit",
    image: "/placeholder.svg?height=800&width=1400",
    price: "14,999",
    location: "Badrinath Dham",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const currentSlideData = heroSlides[currentSlide]

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={currentSlideData.image || "/placeholder.svg"}
          alt={currentSlideData.title}
          fill
          className="object-cover transition-all duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Trust Indicators */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-8 text-white">
          <div className="flex items-center space-x-2">
            <Star className="text-yellow-400 fill-current" size={20} />
            <span className="font-medium">4.9 Rating</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="text-blue-300" size={20} />
            <span className="font-medium">50,000+ Pilgrims</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="text-green-400" size={20} />
            <span className="font-medium">Safe & Trusted</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            {currentSlideData.title}
            <span className="block text-orange-400">{currentSlideData.subtitle}</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {currentSlideData.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2">
              <span>Explore Packages</span>
              <span>→</span>
            </button>

            <button className="bg-gray-800/50 backdrop-blur-sm border border-gray-600 hover:bg-gray-700/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Call: +91-9876543210
            </button>
          </div>

          {/* Price Card */}
          <div className="inline-block bg-black/30 backdrop-blur-sm border border-gray-600 rounded-2xl p-6 text-center">
            <div className="text-gray-300 mb-2">Starting from</div>
            <div className="text-4xl font-bold text-white mb-1">₹{currentSlideData.price}</div>
            <div className="text-gray-300 text-sm">per person • All inclusive</div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index)
              setIsAutoPlaying(false)
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-orange-400 w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center animate-bounce">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
