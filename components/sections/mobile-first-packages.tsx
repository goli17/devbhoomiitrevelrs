"use client"

import { Star, Clock, Users, Phone } from "lucide-react"
import Image from "next/image"

const packages = [
  {
    id: 1,
    title: "Complete Char Dham Yatra",
    duration: "12 Days / 11 Nights",
    price: "₹12,999",
    originalPrice: "₹15,999",
    rating: 4.9,
    reviews: 234,
    image: "/images/kedarnath-temple.jpg",
    highlights: ["All 4 Dhams", "Helicopter Option", "Luxury Hotels", "Expert Guide"],
    groupSize: "15-20 People",
  },
  {
    id: 2,
    title: "Kedarnath Special",
    duration: "5 Days / 4 Nights",
    price: "₹8,999",
    originalPrice: "₹10,999",
    rating: 4.8,
    reviews: 156,
    image: "/images/kedarnath-temple.jpg",
    highlights: ["Kedarnath Temple", "Helicopter Ride", "Comfortable Stay", "Meals Included"],
    groupSize: "10-15 People",
  },
  {
    id: 3,
    title: "Badrinath Darshan",
    duration: "4 Days / 3 Nights",
    price: "₹6,999",
    originalPrice: "₹8,999",
    rating: 4.7,
    reviews: 189,
    image: "/images/badrinath-temple.jpg",
    highlights: ["Badrinath Temple", "Mana Village", "Hot Springs", "Valley of Flowers"],
    groupSize: "12-18 People",
  },
  {
    id: 4,
    title: "Gangotri Yamunotri",
    duration: "6 Days / 5 Nights",
    price: "₹9,999",
    originalPrice: "₹11,999",
    rating: 4.6,
    reviews: 142,
    image: "/images/gangotri-temple.jpg",
    highlights: ["Both Temples", "River Origins", "Scenic Beauty", "Spiritual Experience"],
    groupSize: "8-12 People",
  },
]

export function MobileFirstPackages() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Choose Your Sacred Journey
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Carefully crafted pilgrimage packages with comfortable accommodations and expert guidance
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Package Image */}
              <div className="relative h-48 md:h-56">
                <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
                <div className="absolute top-3 left-3 bg-orange-600 text-white px-2 py-1 rounded-md text-xs font-semibold">
                  BESTSELLER
                </div>
                <div className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded-md text-xs font-semibold">
                  Save ₹
                  {Number.parseInt(pkg.originalPrice.replace("₹", "").replace(",", "")) -
                    Number.parseInt(pkg.price.replace("₹", "").replace(",", ""))}
                </div>
              </div>

              {/* Package Content */}
              <div className="p-4 md:p-6">
                {/* Title and Rating */}
                <div className="mb-3">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 line-clamp-2">{pkg.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span className="text-sm font-semibold text-gray-700">{pkg.rating}</span>
                      <span className="text-xs text-gray-500">({pkg.reviews} reviews)</span>
                    </div>
                  </div>
                </div>

                {/* Package Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock size={16} />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Users size={16} />
                    <span>{pkg.groupSize}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {pkg.highlights.slice(0, 3).map((highlight, index) => (
                      <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs font-medium">
                        {highlight}
                      </span>
                    ))}
                    {pkg.highlights.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs font-medium">
                        +{pkg.highlights.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xl md:text-2xl font-bold text-orange-600">{pkg.price}</span>
                        <span className="text-sm text-gray-500 line-through">{pkg.originalPrice}</span>
                      </div>
                      <p className="text-xs text-gray-500">per person</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href={`/packages/${pkg.id}`}
                      className="flex-1 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors text-center min-h-[40px] flex items-center justify-center"
                    >
                      View Details
                    </a>
                    <a
                      href="tel:7452940158"
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors text-center min-h-[40px] flex items-center justify-center space-x-1"
                    >
                      <Phone size={14} />
                      <span>Book Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Packages Button */}
        <div className="text-center mt-8 md:mt-12">
          <a
            href="/packages"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-colors"
          >
            View All Packages
          </a>
        </div>
      </div>
    </section>
  )
}
