"use client"
import { ArrowRight, Star, Users, Shield, Play } from "lucide-react"
import { useState } from "react"
import FloatingElements from "@/components/ui/floating-elements"
import InteractiveButton from "@/components/ui/interactive-button"
import AnimatedCounter from "@/components/ui/animated-counter"

export default function EnhancedHero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <FloatingElements />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6 animate-fade-in">
            <Star className="text-yellow-400" size={20} />
            <span className="text-sm font-medium">India's #1 Spiritual Travel Company</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up">
            Sacred Journey to
            <span className="block bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
              Char Dham 2025
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto animate-slide-up animation-delay-200">
            Experience divine blessings at Kedarnath, Badrinath, Gangotri & Yamunotri with our expertly crafted
            pilgrimage packages
          </p>

          {/* Price Highlight */}
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-sm rounded-2xl px-8 py-4 mb-8 animate-slide-up animation-delay-400">
            <div className="text-center">
              <div className="text-3xl font-bold">Starting from</div>
              <div className="text-4xl font-black text-yellow-300">₹10,999</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-sm opacity-90">Save up to</div>
              <div className="text-2xl font-bold text-green-300">₹5,000</div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8 animate-slide-up animation-delay-600">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Star className="text-yellow-400" size={20} />
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Users className="text-blue-300" size={20} />
              <span className="font-semibold">
                <AnimatedCounter end={15000} suffix="+ Happy Pilgrims" />
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="text-green-400" size={20} />
              <span className="font-semibold">100% Safe & Secure</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-slide-up animation-delay-800">
            <InteractiveButton variant="gradient" size="lg" href="/packages">
              <span>Explore Packages</span>
              <ArrowRight size={20} />
            </InteractiveButton>

            <InteractiveButton variant="secondary" size="lg" href="tel:7452940158">
              <span>Call Now: +91-7452940158</span>
            </InteractiveButton>

            <button
              onClick={() => setIsVideoPlaying(true)}
              className="flex items-center space-x-2 text-white hover:text-orange-300 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                <Play size={20} />
              </div>
              <span className="font-medium">Watch Our Journey</span>
            </button>
          </div>

          {/* Special Offers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto animate-slide-up animation-delay-1000">
            <div className="bg-gradient-to-r from-green-600/20 to-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-xl p-4">
              <div className="text-green-300 font-semibold text-sm mb-1">🎉 Early Bird Offer</div>
              <div className="text-white">Book before March 31st and save ₹2,000!</div>
            </div>
            <div className="bg-gradient-to-r from-blue-600/20 to-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-xl p-4">
              <div className="text-blue-300 font-semibold text-sm mb-1">🚁 Helicopter Service</div>
              <div className="text-white">Skip the trek with our helicopter packages</div>
            </div>
            <div className="bg-gradient-to-r from-purple-600/20 to-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-xl p-4">
              <div className="text-purple-300 font-semibold text-sm mb-1">🏨 Luxury Stays</div>
              <div className="text-white">Premium accommodation at all destinations</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full aspect-video bg-black rounded-xl overflow-hidden">
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              ✕
            </button>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}
