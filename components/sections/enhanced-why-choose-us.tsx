"use client"

import { Shield, Users, Award, Clock, MapPin, Heart, Star } from "lucide-react"
import { useState } from "react"
import AnimatedCounter from "@/components/ui/animated-counter"

const features = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Licensed tour operator with comprehensive insurance coverage for all pilgrims",
    color: "text-green-600",
    bgColor: "bg-green-100",
    stats: "100% Safe",
  },
  {
    icon: Users,
    title: "Expert Guides",
    description: "Experienced local guides with deep knowledge of religious significance and routes",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    stats: "50+ Guides",
  },
  {
    icon: Award,
    title: "10+ Years Experience",
    description: "Decade of expertise in organizing successful Char Dham pilgrimages",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    stats: "15,000+ Tours",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance during your entire pilgrimage journey",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    stats: "24/7 Available",
  },
  {
    icon: MapPin,
    title: "Best Routes",
    description: "Carefully planned itineraries covering all sacred sites with optimal timing",
    color: "text-red-600",
    bgColor: "bg-red-100",
    stats: "4 Sacred Sites",
  },
  {
    icon: Heart,
    title: "Customer Care",
    description: "Dedicated support team to address all your queries and concerns",
    color: "text-pink-600",
    bgColor: "bg-pink-100",
    stats: "4.9★ Rating",
  },
]

export default function EnhancedWhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=800&width=1200')] bg-repeat opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 rounded-full px-4 py-2 mb-4">
            <Star size={16} />
            <span className="text-sm font-semibold">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
            Your Trusted Spiritual Journey Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are committed to making your Char Dham Yatra a memorable and spiritually enriching experience with our
            unmatched service quality
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">
              <AnimatedCounter end={15000} suffix="+" />
            </div>
            <div className="text-gray-600 font-medium">Happy Pilgrims</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              <AnimatedCounter end={10} suffix="+" />
            </div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">4.9★</div>
            <div className="text-gray-600 font-medium">Customer Rating</div>
          </div>
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              <AnimatedCounter end={50} suffix="+" />
            </div>
            <div className="text-gray-600 font-medium">Expert Guides</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`
                bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full
                ${hoveredIndex === index ? "transform scale-105 -translate-y-2" : ""}
                border-2 border-transparent hover:border-orange-200
              `}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className={`${feature.bgColor} p-4 rounded-2xl transition-all duration-300 ${
                      hoveredIndex === index ? "scale-110 rotate-6" : ""
                    }`}
                  >
                    <feature.icon className={`${feature.color} transition-all duration-300`} size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <div className={`text-sm font-semibold ${feature.color}`}>{feature.stats}</div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                {/* Hover Effect */}
                <div
                  className={`
                  mt-6 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-500
                  ${hoveredIndex === index ? "w-full" : "w-0"}
                `}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Begin Your Sacred Journey?</h3>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied pilgrims who trusted us with their spiritual journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7452940158"
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <span>Call Now: +91-7452940158</span>
              </a>
              <a
                href="https://wa.me/917452940158"
                className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
