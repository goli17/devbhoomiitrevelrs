import Image from "next/image"
import { Clock, Users, Star, ArrowRight, MapPin } from "lucide-react"

const packageData = [
  {
    id: 1,
    title: "Kedarnath Dham Yatra",
    description:
      "Sacred abode of Lord Shiva nestled in the majestic Garhwal Himalayas with premium accommodation and helicopter services",
    price: "15,999",
    originalPrice: "19,999",
    duration: "5 Days / 4 Nights",
    groupSize: "Max 15 people",
    rating: 4.9,
    reviews: 245,
    image: "/placeholder.svg?height=400&width=600",
    features: ["Helicopter Service Available", "Premium Accommodation", "Expert Guide", "All Meals Included"],
    badge: "Most Popular",
  },
  {
    id: 2,
    title: "Badrinath Dham Yatra",
    description: "Holy shrine dedicated to Lord Vishnu with visits to Mana Village and natural hot springs",
    price: "12,999",
    originalPrice: "16,999",
    duration: "4 Days / 3 Nights",
    groupSize: "Max 20 people",
    rating: 4.8,
    reviews: 189,
    image: "/placeholder.svg?height=400&width=600",
    features: ["Mana Village Visit", "Hot Springs", "Temple Darshan", "Comfortable Stay"],
    badge: "Best Value",
  },
  {
    id: 3,
    title: "Gangotri Dham Yatra",
    description: "Source of the sacred river Ganges surrounded by pristine Himalayan peaks and spiritual serenity",
    price: "10,999",
    originalPrice: "13,999",
    duration: "3 Days / 2 Nights",
    groupSize: "Max 18 people",
    rating: 4.7,
    reviews: 156,
    image: "/placeholder.svg?height=400&width=600",
    features: ["Ganga Aarti", "River Source Visit", "Mountain Views", "Spiritual Experience"],
    badge: "Quick Trip",
  },
  {
    id: 4,
    title: "Yamunotri Dham Yatra",
    description: "Origin of the holy river Yamuna with natural hot springs and ancient temple rituals",
    price: "9,999",
    originalPrice: "12,999",
    duration: "3 Days / 2 Nights",
    groupSize: "Max 16 people",
    rating: 4.6,
    reviews: 134,
    image: "/placeholder.svg?height=400&width=600",
    features: ["Natural Hot Springs", "Temple Rituals", "Scenic Trek", "Cultural Experience"],
    badge: "Adventure",
  },
]

export default function ProfessionalPackages() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-100 text-orange-800 rounded-full px-4 py-2 mb-4">
            <MapPin size={16} className="mr-2" />
            <span className="text-sm font-semibold">Sacred Destinations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Premium Pilgrimage <span className="text-orange-600">Packages</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Carefully crafted spiritual journeys with luxury accommodation, expert guidance, and complete peace of mind
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packageData.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
            >
              {/* Package Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Badge */}
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {pkg.badge}
                </div>

                {/* Price */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-gray-900">₹{pkg.price}</div>
                  <div className="text-sm text-gray-500 line-through">₹{pkg.originalPrice}</div>
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star size={14} className="text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold text-gray-900">{pkg.rating}</span>
                  <span className="text-xs text-gray-600">({pkg.reviews})</span>
                </div>
              </div>

              {/* Package Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {pkg.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{pkg.description}</p>

                {/* Package Details */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users size={16} />
                    <span>{pkg.groupSize}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-lg">
                    <span>View Details</span>
                    <ArrowRight size={16} />
                  </button>

                  <div className="flex space-x-2">
                    <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-3 rounded-lg text-sm font-semibold transition-colors">
                      WhatsApp
                    </button>
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg text-sm font-semibold transition-colors">
                      Call Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Need a Custom Package?</h3>
            <p className="text-xl mb-6 opacity-90">
              We create personalized pilgrimage experiences tailored to your specific requirements and budget
            </p>
            <button className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
