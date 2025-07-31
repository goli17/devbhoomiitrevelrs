import Link from "next/link"
import { ArrowRight, Star, Users, Shield } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Sacred Journey to
            <span className="block text-orange-300">Char Dham 2025</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Experience divine blessings at Kedarnath, Badrinath, Gangotri & Yamunotri
            <br />
            <span className="text-orange-300 font-semibold">Starting from ₹10,999</span>
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-sm">
            <div className="flex items-center space-x-2">
              <Star className="text-yellow-400" size={20} />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="text-blue-300" size={20} />
              <span>10,000+ Happy Pilgrims</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="text-green-400" size={20} />
              <span>100% Safe & Secure</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/packages"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <span>View Packages</span>
              <ArrowRight size={20} />
            </Link>

            <a
              href="tel:7452940158"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Call Now: +91-7452940158
            </a>
          </div>

          {/* Special Offer */}
          <div className="mt-8 bg-orange-600/20 backdrop-blur-sm border border-orange-400/30 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-orange-200 font-semibold">
              🎉 Early Bird Offer: Book before March 31st and save ₹2,000!
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
