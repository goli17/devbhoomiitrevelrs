"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Phone, Calendar, Users, Award, Shield, Star } from "lucide-react"
import Image from "next/image"

const heroSlides = [
  {
    id: 1,
    title: "Char Dham Yatra",
    subtitle: "Complete Sacred Journey",
    description:
      "Experience divine blessings at all four sacred dhams with our premium pilgrimage services, expert guidance, and luxury accommodations.",
    image: "/images/kedarnath-temple.jpg",
    price: "₹12,999",
    duration: "10-12 Days",
    category: "Complete Package",
    highlights: ["All 4 Dhams", "Luxury Stay", "Expert Guide"],
  },
  {
    id: 2,
    title: "Kedarnath Dham",
    subtitle: "Abode of Lord Shiva",
    description:
      "Journey to the sacred Kedarnath temple nestled in the majestic Garhwal Himalayas with helicopter services and premium accommodation.",
    image: "/images/badrinath-temple.jpg",
    price: "₹15,999",
    duration: "4-5 Days",
    category: "Premium Package",
    highlights: ["Helicopter Service", "VIP Darshan", "5-Star Hotels"],
  },
  {
    id: 3,
    title: "Auli Hill Station",
    subtitle: "Skiing Capital of India",
    description:
      "Experience breathtaking Himalayan views, world-class skiing facilities, cable car rides, and luxury mountain resorts in India's premier destination.",
    image: "/images/auli-landscape.jpg",
    price: "₹18,999",
    duration: "5-6 Days",
    category: "Adventure Package",
    highlights: ["Skiing", "Cable Car", "Mountain Views"],
  },
  {
    id: 4,
    title: "Munsiyari Valley",
    subtitle: "Little Kashmir of Uttarakhand",
    description:
      "Discover pristine alpine meadows, Panchachuli peaks, and untouched natural beauty in this hidden Himalayan gem with exclusive access.",
    image: "/images/munsiyari-valley.jpg",
    price: "₹22,999",
    duration: "6-7 Days",
    category: "Exclusive Package",
    highlights: ["Exclusive Access", "Alpine Meadows", "Photography Tours"],
  },
]

export default function CorporateHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 7000)

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
      {/* Background Image with Professional Overlay */}
      <div className="absolute inset-0">
        <Image
          src={currentSlideData.image || "/placeholder.svg"}
          alt={currentSlideData.title}
          fill
          className="object-cover transition-all duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-slate-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Corporate Trust Bar */}
      <div className="absolute top-20 left-0 right-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-4 shadow-2xl">
              <div className="flex items-center space-x-8 text-white text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <Award className="text-amber-400" size={20} />
                  <span>15+ Years Excellence</span>
                </div>
                <div className="w-px h-5 bg-white/30"></div>
                <div className="flex items-center space-x-2">
                  <Users className="text-blue-400" size={20} />
                  <span>50,000+ Satisfied Pilgrims</span>
                </div>
                <div className="w-px h-5 bg-white/30"></div>
                <div className="flex items-center space-x-2">
                  <Shield className="text-green-400" size={20} />
                  <span>100% Safe & Secure</span>
                </div>
                <div className="w-px h-5 bg-white/30"></div>
                <div className="flex items-center space-x-2">
                  <Star className="text-yellow-400 fill-current" size={20} />
                  <span>4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            {/* Category Badge */}
            <div className="inline-flex items-center bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-6 py-3 mb-8">
              <span className="text-orange-300 text-sm font-bold tracking-wide uppercase">
                {currentSlideData.category}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none tracking-tight">
              {currentSlideData.title}
            </h1>

            <h2 className="text-2xl md:text-4xl text-orange-300 font-light mb-8 leading-relaxed">
              {currentSlideData.subtitle}
            </h2>

            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-4xl font-light">
              {currentSlideData.description}
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-4 mb-12">
              {currentSlideData.highlights.map((highlight, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-2">
                  <span className="text-white font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Package Info Cards */}
            <div className="flex flex-wrap gap-6 mb-12">
              <div className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl px-8 py-6 shadow-2xl">
                <div className="text-white/80 text-sm mb-2 font-medium">Starting from</div>
                <div className="text-4xl font-black text-white">{currentSlideData.price}</div>
                <div className="text-white/60 text-sm">per person</div>
              </div>
              <div className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl px-8 py-6 shadow-2xl">
                <div className="text-white/80 text-sm mb-2 font-medium">Duration</div>
                <div className="text-2xl font-bold text-white">{currentSlideData.duration}</div>
                <div className="text-white/60 text-sm">all inclusive</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-orange-500/25">
                Explore Packages
              </button>

              <button className="bg-white/15 backdrop-blur-xl border border-white/30 hover:bg-white/25 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 shadow-2xl">
                <Phone size={22} />
                <span>+91-7452940158</span>
              </button>

              <button className="bg-transparent border-2 border-white/50 hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center space-x-3">
                <Calendar size={22} />
                <span>Free Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-20 w-16 h-16 bg-white/15 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300 shadow-2xl"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 w-16 h-16 bg-white/15 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300 shadow-2xl"
      >
        <ChevronRight size={28} />
      </button>

      {/* Elegant Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index)
              setIsAutoPlaying(false)
            }}
            className={`h-3 rounded-full transition-all duration-500 ${
              index === currentSlide ? "bg-orange-400 w-16" : "bg-white/40 w-3 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div
          className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-7000 ease-linear"
          style={{ width: isAutoPlaying ? "100%" : "0%" }}
        />
      </div>
    </section>
  )
}
