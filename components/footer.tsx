import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-400">Char Dham Yatra 2025</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for spiritual journeys to the sacred Char Dham temples. Experience divine blessings
              with our expertly crafted pilgrimage packages.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Packages</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/packages/kedarnath-tour" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Kedarnath Yatra
                </Link>
              </li>
              <li>
                <Link href="/packages/badrinath-tour" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Badrinath Yatra
                </Link>
              </li>
              <li>
                <Link href="/packages/gangotri-tour" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Gangotri Yatra
                </Link>
              </li>
              <li>
                <Link href="/packages/yamunotri-tour" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Yamunotri Yatra
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-orange-400" />
                <a href="tel:7452940158" className="text-gray-300 hover:text-orange-400 transition-colors">
                  +91-7452940158
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-orange-400" />
                <a
                  href="mailto:info@chardhamyatra2025.com"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  info@chardhamyatra2025.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-orange-400 mt-1" />
                <span className="text-gray-300">Haridwar, Uttarakhand, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Char Dham Yatra. All rights reserved. |
            <Link href="/privacy" className="hover:text-orange-400 transition-colors ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="hover:text-orange-400 transition-colors ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
