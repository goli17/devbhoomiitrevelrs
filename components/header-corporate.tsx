"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone, Mail, MapPin } from "lucide-react"

export default function CorporateHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-slate-900/95 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-6 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+91-7452940158</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>info@chardhamyatra.com</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <MapPin size={14} />
                <span>Haridwar, Uttarakhand</span>
              </div>
            </div>
            <div className="text-orange-400 font-semibold">🎉 Early Bird Offer: Save ₹5,000 - Book Now!</div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Professional Logo */}
            <Link href="/" className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-white font-bold text-2xl">🏔</span>
              </div>
              <div>
                <div className="text-3xl font-black text-slate-900">Char Dham Yatra</div>
                <div className="text-sm text-orange-600 font-bold tracking-wide">PREMIUM PILGRIMAGE SERVICES</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {[
                { name: "Home", href: "/" },
                { name: "Packages", href: "/packages" },
                { name: "Destinations", href: "/destinations" },
                { name: "About Us", href: "/about" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 hover:text-orange-600 font-semibold transition-colors relative group py-2"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-600 to-red-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* CTA Section */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-gray-600">Call for Booking</div>
                <div className="text-lg font-bold text-slate-900">+91-7452940158</div>
              </div>
              <Link
                href="/packages"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-orange-500/25"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden py-6 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                {[
                  { name: "Home", href: "/" },
                  { name: "Packages", href: "/packages" },
                  { name: "Destinations", href: "/destinations" },
                  { name: "About Us", href: "/about" },
                  { name: "Gallery", href: "/gallery" },
                  { name: "Contact", href: "/contact" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-slate-700 hover:text-orange-600 font-semibold transition-colors py-3 text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-6 border-t border-gray-200">
                  <Link
                    href="/packages"
                    className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl font-bold w-full text-center block text-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
