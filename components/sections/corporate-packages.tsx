import Image from "next/image"
import { Clock, Users, Star, ArrowRight, MapPin, Award, Shield } from "lucide-react"

const packageData = [
  {
    id: 1,
    title: "Kedarnath Dham Yatra",
    description:
      "Sacred abode of Lord Shiva nestled in the majestic Garhwal Himalayas with premium accommodation and helicopter services available.",
    price: "15,999",
    originalPrice: "19,999",
    discount: "20% OFF",
    duration: "5 Days / 4 Nights",
    groupSize: "Max 15 people",
    rating: 4.9,
    reviews: 245,
    image: "/images/kedarnath-temple.jpg",
    features: [
      "Helicopter Service Available",
      "Premium Accommodation",
      "Expert Guide",
      "All Meals Included",
      "VIP Darshan",
    ],
    badge: "Most Popular",
    badgeColor: "bg-red-500",
  },
  {
    id: 2,
    title: "Badrinath Dham Yatra",
    description:
      "Holy shrine dedicated to Lord Vishnu with visits to Mana Village, natural hot springs, and ancient temple architecture.",
    price: "12,999",
    originalPrice: "16,999",
    discount: "25% OFF",
    duration: "4 Days / 3 Nights",
    groupSize: "Max 20 people",
    rating: 4.8,
    reviews: 189,
    image: "/images/badrinath-temple.jpg",
    features: ["Mana Village Visit", "Hot Springs", "Temple Darshan", "Comfortable Stay", "Cultural Experience"],
    badge: "Best Value",
    badgeColor: "bg-green-500",
  },
  {
    id: 3,
    title: "Gangotri Dham Yatra",
    description:
      "Source of the sacred river Ganges surrounded by pristine Himalayan peaks and offering profound spiritual experiences.",
    price: "10,999",
    originalPrice: "13,999",
    discount: "22% OFF",
    duration: "3 Days / 2 Nights",
    groupSize: "Max 18 people",
    rating: 4.7,
    reviews: 156,
    image: "/images/gangotri-temple.jpg",
    features: ["Ganga Aarti", "River Source Visit", "Mountain Views", "Spiritual Experience", "Photography Tours"],
    badge: "Quick Trip",
    badgeColor: "bg-blue-500",
  },
  {
    id: 4,
    title: "Yamunotri Dham Yatra",
    description:
      "Origin of the holy river Yamuna with natural hot springs, ancient temple rituals, and scenic mountain treks.",
    price: "9,999",
    originalPrice: "12,999",
    discount: "23% OFF",
    duration: "3 Days / 2 Nights",
    groupSize: "Max 16 people",
    rating: 4.6,
    reviews: 134,
    image: "/images/yamunotri-temple.jpg",
    features: ["Natural Hot Springs", "Temple Rituals", "Scenic Trek", "Cultural Experience", "Local Cuisine"],
    badge: "Adventure",
    badgeColor: "bg-purple-500",
  },
]

export default function CorporatePackages() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-orange-100 text-orange-800 rounded-full px-6 py-3 mb-6">
            <MapPin size={18} className="mr-2" />
            <span className="font-bold tracking-wide">SACRED DESTINATIONS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8">
            Premium Pilgrimage{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Packages</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
            Carefully crafted spiritual journeys with luxury accommodation, expert guidance, and complete peace of mind
            for your sacred pilgrimage experience.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {packageData.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 group border border-gray-100"
            >
              {/* Package Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                {/* Badge */}
                <div
                  className={`absolute top-4 left-4 ${pkg.badgeColor} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}
                >
                  {pkg.badge}
                </div>

                {/* Discount */}
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                  {pkg.discount}
                </div>

                {/* Price */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                  <div className="text-3xl font-black text-slate-900">₹{pkg.price}</div>
                  <div className="text-sm text-gray-500 line-through">₹{pkg.originalPrice}</div>
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2 shadow-xl">
                  <Star size={16} className="text-yellow-500 fill-current" />
                  <span className="text-sm font-bold text-slate-900">{pkg.rating}</span>
                  <span className="text-xs text-gray-600">({pkg.reviews})</span>
                </div>
              </div>

              {/* Package Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {pkg.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{pkg.description}</p>

                {/* Package Details */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6 bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span className="font-medium">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users size={16} />
                    <span className="font-medium">{pkg.groupSize}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 text-sm text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-4 px-6 rounded-2xl font-bold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-xl hover:shadow-orange-500/25">
                    <span>View Details</span>
                    <ArrowRight size={18} />
                  </button>

                  <div className="flex space-x-3">
                    <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl text-sm font-bold transition-colors shadow-lg">
                      WhatsApp
                    </button>
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl text-sm font-bold transition-colors shadow-lg">
                      Call Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-white rounded-3xl p-8 shadow-xl">
            <Shield className="text-green-500 mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">100% Safe & Secure</h3>
            <p className="text-gray-600">Licensed operator with comprehensive insurance coverage</p>
          </div>
          <div className="text-center bg-white rounded-3xl p-8 shadow-xl">
            <Award className="text-orange-500 mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">15+ Years Experience</h3>
            <p className="text-gray-600">Trusted by thousands of satisfied pilgrims</p>
          </div>
          <div className="text-center bg-white rounded-3xl p-8 shadow-xl">
            <Star className="text-yellow-500 mx-auto mb-4 fill-current" size={48} />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">4.9/5 Rating</h3>
            <p className="text-gray-600">Consistently rated excellent by our customers</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-white max-w-5xl mx-auto shadow-2xl">
            <h3 className="text-4xl font-black mb-6">Need a Custom Package?</h3>
            <p className="text-xl mb-8 opacity-90 font-light max-w-3xl mx-auto">
              We create personalized pilgrimage experiences tailored to your specific requirements, budget, and
              spiritual preferences with complete flexibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl">
                Get Custom Quote
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
