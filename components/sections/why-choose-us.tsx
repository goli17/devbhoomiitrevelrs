import { Shield, Users, Award, Clock, MapPin, Headphones } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Licensed tour operator with comprehensive insurance coverage for all pilgrims",
  },
  {
    icon: Users,
    title: "Expert Guides",
    description: "Experienced local guides with deep knowledge of religious significance and routes",
  },
  {
    icon: Award,
    title: "10+ Years Experience",
    description: "Decade of expertise in organizing successful Char Dham pilgrimages",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance during your entire pilgrimage journey",
  },
  {
    icon: MapPin,
    title: "Best Routes",
    description: "Carefully planned itineraries covering all sacred sites with optimal timing",
  },
  {
    icon: Headphones,
    title: "Customer Care",
    description: "Dedicated support team to address all your queries and concerns",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us for Your Sacred Journey</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are committed to making your Char Dham Yatra a memorable and spiritually enriching experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <feature.icon className="text-orange-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
