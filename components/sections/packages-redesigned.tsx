import Image from "next/image"
import { Clock, Users } from "lucide-react"

const packageData = [
  {
    id: 1,
    title: "Kedarnath Yatra",
    description: "Sacred abode of Lord Shiva in the majestic Himalayas",
    price: "15,999",
    duration: "5 Days",
    groupSize: "15-20 people",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Helicopter option available", "Guided trek", "Comfortable stay"],
  },
  {
    id: 2,
    title: "Badrinath Yatra",
    description: "Holy shrine dedicated to Lord Vishnu",
    price: "12,999",
    duration: "4 Days",
    groupSize: "15-20 people",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Valley of flowers nearby", "Hot springs", "Ancient temple"],
  },
  {
    id: 3,
    title: "Gangotri Yatra",
    description: "Source of the sacred river Ganges",
    price: "10,999",
    duration: "3 Days",
    groupSize: "15-20 people",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Ganga Aarti", "Pristine nature", "Spiritual experience"],
  },
  {
    id: 4,
    title: "Yamunotri Yatra",
    description: "Origin of the holy river Yamuna",
    price: "9,999",
    duration: "3 Days",
    groupSize: "15-20 people",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Natural hot springs", "Temple rituals", "Mountain views"],
  },
]

export default async function PackagesRedesigned() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sacred <span className="text-blue-600">Yatra</span> <span className="text-gray-600">Packages</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully crafted pilgrimage packages, each designed to provide a complete spiritual and
            comfortable journey
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packageData.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Package Image */}
              <div className="relative h-64">
                <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full font-bold">
                  ₹{pkg.price}
                </div>
              </div>

              {/* Package Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                <p className="text-gray-600 mb-4">{pkg.description}</p>

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

                {/* View Details Button */}
                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                  <span>View Details</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
