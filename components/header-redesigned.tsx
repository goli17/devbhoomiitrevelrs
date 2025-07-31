"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function HeaderRedesigned() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">⛰</span>
            </div>
            <span className="text-xl font-bold">
              <span className="text-blue-600">Char Dham Yatra</span>
              <span className="text-orange-500"> 2025</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/packages" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Packages
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* Book Now Button */}
          <div className="hidden md:block">
            <Link
              href="/packages"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/packages"
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Packages
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/packages"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg font-semibold w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
