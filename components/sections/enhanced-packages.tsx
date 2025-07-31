import { createServerSupabaseServer } from "@/app/superbase/server"
import { Clock, Star, ArrowRight, MapPin } from "lucide-react"
import Image from "next/image"
import InteractiveButton from "@/components/ui/interactive-button"
import GradientCard from "@/components/ui/gradient-card"

export default async function EnhancedPackagesSection() {
  const supabase = createServerSupabaseServer()

  const { data: packages } = await supabase
    .from("packages")
    .select("*")
    .eq("featured", true)
    .eq("active", true)
    .order("price", { ascending: true })

  if (!packages || packages.length === 0) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
            Our Packages
          </h2>
          <p>No packages available at the moment.</p>
        </div>
      </section>
    )
  }

  const gradients = ["orange", "blue", "purple", "green"] as const

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 rounded-full px-4 py-2 mb-4">
            <MapPin size={16} />
            <span className="text-sm font-semibold">Sacred Destinations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
            Choose Your Sacred Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Carefully crafted pilgrimage packages to the four sacred dhams with comfortable accommodation, expert
            guidance, and unforgettable spiritual experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div key={pkg.id} className="group">
              <GradientCard gradient={gradients[index % gradients.length]} className="h-full">
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                  <Image
                    src={
                      pkg.images[0] ||
                      `/placeholder.svg?height=200&width=300&query=${pkg.title || "/placeholder.svg"} temple himalayan mountains golden hour`
                    }
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                    ₹{pkg.price.toLocaleString()}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">{pkg.title}</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-gray-700 line-clamp-2 leading-relaxed">{pkg.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star size={16} className="text-yellow-500" />
                      <span className="font-semibold">4.8</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 space-y-3">
                    <InteractiveButton variant="primary" className="w-full" href={`/packages/${pkg.slug}`}>
                      <span>View Details</span>
                      <ArrowRight size={16} />
                    </InteractiveButton>

                    <div className="flex space-x-2">
                      <InteractiveButton
                        variant="success"
                        size="sm"
                        className="flex-1"
                        href={`https://wa.me/917452940158?text=Hi, I'm interested in ${pkg.title} package.`}
                      >
                        WhatsApp
                      </InteractiveButton>
                      <InteractiveButton variant="secondary" size="sm" className="flex-1" href="tel:7452940158">
                        Call Now
                      </InteractiveButton>
                    </div>
                  </div>
                </div>
              </GradientCard>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">15,000+</div>
            <div className="text-gray-600">Happy Pilgrims</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">4.9★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>

        <div className="text-center">
          <InteractiveButton variant="gradient" size="lg" href="/packages">
            <span>View All Packages</span>
            <ArrowRight size={20} />
          </InteractiveButton>
        </div>
      </div>
    </section>
  )
}
