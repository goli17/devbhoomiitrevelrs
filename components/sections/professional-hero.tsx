"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Phone, Calendar, Users, Award } from "lucide-react"
import Image from "next/image"

const heroSlides = [
  {
    id: 1,
    title: "Char Dham Yatra",
    subtitle: "Sacred Journey to Four Holy Dhams",
    description:
      "Experience divine blessings at Kedarnath, Badrinath, Gangotri & Yamunotri with our premium pilgrimage packages",
    image: "/placeholder.svg?height=1080&width=1920",
    price: "₹12,999",
    duration: "10-12 Days",
    category: "Complete Package",
  },
  {
    id: 2,
    title: "Kedarnath Dham",
    subtitle: "Abode of Lord Shiva",
    description:
      "Journey to the sacred Kedarnath temple nestled in the majestic Garhwal Himalayas with helicopter services available",
    image: "/placeholder.svg?height=1080&width=1920",
    price: "₹15,999",
    duration: "4-5 Days",
    category: "Premium Package",
  },
  {
    id: 3,
    title: "Auli Hill Station",
    subtitle: "Skiing Capital of India",
    description:
      "Experience breathtaking Himalayan views, world-class skiing facilities, and cable car rides in India's premier hill station",
    image: "/placeholder.svg?height=1080&width=1920",
    price: "₹18,999",
    duration: "5-6 Days",
    category: "Adventure Package",
  },
  {
    id: 4,
    title: "Munsiyari Valley",
    subtitle: "Little Kashmir of Uttarakhand",
    description:
      "Discover pristine alpine meadows, Panchachuli peaks, and untouched natural beauty in this hidden Himalayan gem",
    image: "/placeholder.svg?height=1080&width=1920",
    price: "₹22,999",
    duration: "6-7 Days",
    category: "Exclusive Package",
  },
]

export default function ProfessionalHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)

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
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={currentSlideData.image || "/placeholder.svg"}
          alt={currentSlideData.title}
          fill
          className="object-cover transition-all duration-1000 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60"></div>
      </div>

      {/* Trust Bar */}
      <div className="absolute top-20 left-0 right-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-3">
              <div className="flex items-center space-x-8 text-white text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <Award className="text-yellow-400" size={18} />
                  <span>15+ Years Experience</span>
                </div>
                <div className="w-px h-4 bg-white/30"></div>
                <div className="flex items-center space-x-2">
                  <Users className="text-blue-300" size={18} />
                  <span>50,000+ Happy Pilgrims</span>
                </div>
                <div className="w-px h-4 bg-white/30"></div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">★★★★★</span>
                  <span>4.9 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            {/* Category Badge */}
            <div className="inline-flex items-center bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-4 py-2 mb-6">
              <span className="text-orange-300 text-sm font-semibold">{currentSlideData.category}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">{currentSlideData.title}</h1>

            <h2 className="text-2xl md:text-3xl text-orange-300 font-light mb-8 leading-relaxed">
              {currentSlideData.subtitle}
            </h2>

            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl">
              {currentSlideData.description}
            </p>

            {/* Package Info Cards */}
            <div className="flex flex-wrap gap-4 mb-12">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4">
                <div className="text-white/80 text-sm mb-1">Starting from</div>
                <div className="text-3xl font-bold text-white">{currentSlideData.price}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4">
                <div className="text-white/80 text-sm mb-1">Duration</div>
                <div className="text-xl font-semibold text-white">{currentSlideData.duration}</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-2xl">
                Explore Packages
              </button>

              <button className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-2">
                <Phone size={20} />
                <span>+91-7452940158</span>
              </button>

              <button className="bg-transparent border-2 border-white/50 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-2">
                <Calendar size={20} />
                <span>Book Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
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
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-orange-400 w-12" : "bg-white/40 w-2"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
