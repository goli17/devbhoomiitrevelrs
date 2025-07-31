"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Mail, Menu, X, MapPin } from "lucide-react"

export function HeaderMobileFirst() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Contact Bar - Hidden on mobile */}
      <div className="hidden md:block bg-orange-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>+91 7452940158</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <span>info@chardhampilgrimage.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin size={14} />
            <span>Haridwar, Uttarakhand</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-orange-600 text-white p-2 rounded-lg">
              <span className="text-lg md:text-xl font-bold">CD</span>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-gray-900">Char Dham</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Pilgrimage Tours</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/packages" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Packages
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-3">
            <a
              href="tel:7452940158"
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm md:text-base"
            >
              <span className="hidden sm:inline">Book Now</span>
              <span className="sm:hidden">Call</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-orange-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-orange-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/packages"
                className="text-gray-700 hover:text-orange-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Packages
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-orange-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-orange-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile Contact Info */}
              <div className="pt-3 border-t border-gray-200 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Phone size={16} />
                  <span>+91 7452940158</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail size={16} />
                  <span>info@chardhampilgrimage.com</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
