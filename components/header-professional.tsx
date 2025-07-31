"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"

export default function ProfessionalHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">🏔</span>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">Char Dham Yatra</div>
              <div className="text-sm text-orange-600 font-semibold">Premium Pilgrimage Services</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/packages"
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors relative group"
            >
              Packages
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/destinations"
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors relative group"
            >
              Destinations
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Phone size={16} />
                <span>+91-7452940158</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail size={16} />
                <span>info@chardham.com</span>
              </div>
            </div>
            <Link
              href="/packages"
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/packages"
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Packages
              </Link>
              <Link
                href="/destinations"
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Destinations
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="/packages"
                  className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-xl font-semibold w-full text-center block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
