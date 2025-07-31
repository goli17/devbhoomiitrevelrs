"use client"

import { useState, useEffect } from "react"
import { Phone, Star, Users, Award, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const heroSlides = [
  {
    image: "/images/chardham.jpg",
    title: "Complete Char Dham Yatra",
    subtitle: "Experience the Sacred Journey",
  },
  {
    image: "/images/kedarnath.jpg",
    title: "Sacred Kedarnath Yatra",
    subtitle: "Experience Divine Blessings",
  },
  {
    image: "/images/badrinath.jpg",
    title: "Holy Badrinath Darshan",
    subtitle: "Journey to Lord Vishnu",
  },
  {
    image: "/images/gangotri.jpeg",
    title: "Blessed Gangotri Pilgrimage",
    subtitle: "Source of Sacred Ganga",
  },
  {
    image: "/images/yamunotri.jpg",
    title: "Blessed Yamunotri Pilgrimage",
    subtitle: "Source of Sacred Ganga",
  },
]

export function MobileFirstHero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

  return (
    <section className="relative h-screen max-h-[40vh] min-h-[600px] overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-fit"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} className="md:w-6 md:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 md:p-3 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={20} className="md:w-6 md:h-6" />
      </button>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="block mb-2">Complete</span>
              <span className="text-orange-400">Char Dham Yatra</span>
              <span className="block">2025</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {heroSlides[currentSlide].subtitle} - Experience the most sacred pilgrimage with expert guidance and
              comfortable arrangements
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-6 mb-6 md:mb-8">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full">
                <Star className="text-yellow-400 fill-current" size={16} />
                <span className="text-sm md:text-base font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full">
                <Users className="text-blue-400" size={16} />
                <span className="text-sm md:text-base font-semibold">10,000+ Pilgrims</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full">
                <Award className="text-green-400" size={16} />
                <span className="text-sm md:text-base font-semibold">15+ Years</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:7452940158"
                className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 min-h-[48px]"
              >
                <Phone size={20} />
                <span>Book Now - ₹12,999</span>
              </a>
              <a
                href="/packages"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 min-h-[48px] flex items-center justify-center"
              >
                View All Packages
              </a>
            </div>

            {/* Special Offer Banner */}
            <div className="mt-6 md:mt-8">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-3 rounded-lg inline-block">
                <p className="text-sm md:text-base font-semibold">
                  🎉 Early Bird Offer: Save ₹2,000 - Book Before March 31st!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-2 md:bottom-2 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
