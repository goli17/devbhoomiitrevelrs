import { createServerClient } from "@/lib/supabase"
import Link from "next/link"
import { Clock, Star, ArrowRight } from "lucide-react"
import Image from "next/image"

export default async function PackagesSection() {
  const supabase = createServerClient()

  const { data: packages } = await supabase
    .from("packages")
    .select("*")
    .eq("featured", true)
    .eq("active", true)
    .order("price", { ascending: true })

  if (!packages || packages.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Packages</h2>
          <p>No packages available at the moment.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Sacred Journey</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Carefully crafted pilgrimage packages to the four sacred dhams with comfortable accommodation and expert
            guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={
                    pkg.images[0] ||
                    `/placeholder.svg?height=200&width=300&query=${pkg.title} temple himalayan mountains`
                  }
                  alt={pkg.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ₹{pkg.price.toLocaleString()}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{pkg.description}</p>

                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star size={16} className="text-yellow-400" />
                    <span>4.8</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {pkg.highlights.slice(0, 3).map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/packages/${pkg.slug}`}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <span>View Details</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/packages"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            <span>View All Packages</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
