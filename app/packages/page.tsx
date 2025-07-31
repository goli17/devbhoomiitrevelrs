import { createServerSupabaseServer } from "@/app/superbase/server"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import Link from "next/link"
import Image from "next/image"
import { Clock, Star } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Char Dham Yatra Packages 2025 | Kedarnath Badrinath Gangotri Yamunotri Tours",
  description:
    "Browse our complete collection of Char Dham Yatra packages starting from ₹10,999. Choose from Kedarnath, Badrinath, Gangotri, and Yamunotri tour packages with comfortable accommodation.",
  keywords:
    "char dham packages, kedarnath tour package, badrinath yatra, gangotri tour, yamunotri package, char dham yatra cost",
}

export default async function PackagesPage() {
  const supabase = createServerSupabaseServer()

  const { data: packages } = await supabase
    .from("packages")
    .select("*")
    .eq("active", true)
    .order("price", { ascending: true })

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-orange-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Char Dham Yatra Packages 2025</h1>
            <p className="text-xl md:text-2xl mb-8">Choose from our carefully crafted pilgrimage packages</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white/20 px-4 py-2 rounded-full">✓ Expert Guides</div>
              <div className="bg-white/20 px-4 py-2 rounded-full">✓ Comfortable Stay</div>
              <div className="bg-white/20 px-4 py-2 rounded-full">✓ All Meals</div>
              <div className="bg-white/20 px-4 py-2 rounded-full">✓ Transportation</div>
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {packages && packages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {packages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative h-64">
                      <Image
                        src={
                          pkg.images[0] ||
                          `/placeholder.svg?height=250&width=400&query=${pkg.title} temple himalayan mountains pilgrimage`
                        }
                        alt={pkg.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full font-semibold">
                        ₹{pkg.price.toLocaleString()}
                      </div>
                      {pkg.featured && (
                        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Popular
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">{pkg.title}</h2>
                      <p className="text-gray-600 mb-4">{pkg.description}</p>

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <Clock size={16} />
                          <span>{pkg.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star size={16} className="text-yellow-400" />
                          <span>4.8 (120+ reviews)</span>
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        <h4 className="font-semibold text-gray-900">Highlights:</h4>
                        {pkg.highlights.slice(0, 4).map((highlight, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex space-x-3">
                        <Link
                          href={`/packages/${pkg.slug}`}
                          className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300 text-center"
                        >
                          View Details
                        </Link>
                        <a
                          href={`https://wa.me/917452940158?text=Hi, I'm interested in ${pkg.title} package. Please provide more details.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300"
                        >
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">No packages available</h2>
                <p className="text-gray-600">Please check back later or contact us for custom packages.</p>
                <a
                  href="tel:7452940158"
                  className="inline-block mt-6 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Call for Custom Package
                </a>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need a Custom Package?</h2>
            <p className="text-xl text-gray-600 mb-8">
              We can customize any package according to your specific requirements and budget
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7452940158"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Call: +91-7452940158
              </a>
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Send Inquiry
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
