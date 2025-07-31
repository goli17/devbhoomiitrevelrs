import { createServerSupabaseServer } from "@/app/superbase/server"
import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import Image from "next/image"
import { Clock, Star, Phone, MessageCircle, Check, X } from "lucide-react"
import type { Metadata } from "next"

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const supabase = createServerSupabaseServer()
  const { data: pkg } = await supabase.from("packages").select("*").eq("slug", params.slug).eq("active", true).single()

  if (!pkg) {
    return {
      title: "Package Not Found",
    }
  }

  return {
    title: `${pkg.title} | Char Dham Yatra 2025 - ₹${pkg.price.toLocaleString()}`,
    description:
      pkg.description ||
      `Book ${pkg.title} package for ${pkg.duration}. Starting from ₹${pkg.price.toLocaleString()} with accommodation, meals, and expert guides.`,
    keywords: `${pkg.title.toLowerCase()}, ${pkg.slug}, char dham yatra, pilgrimage package`,
    openGraph: {
      title: `${pkg.title} | Char Dham Yatra 2025`,
      description: pkg.description || "",
      images: pkg.images.length > 0 ? [pkg.images[0]] : [],
    },
  }
}

export default async function PackageDetailPage({ params }: Props) {
  const supabase = createServerClient()

  const { data: pkg } = await supabase.from("packages").select("*").eq("slug", params.slug).eq("active", true).single()

  if (!pkg) {
    notFound()
  }

  const whatsappMessage = `Hi, I'm interested in ${pkg.title} package (₹${pkg.price.toLocaleString()}). Please provide more details and availability.`
  const whatsappUrl = `https://wa.me/917452940158?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-96 bg-gray-900">
          <Image
            src={
              pkg.images[0] ||
              `/placeholder.svg?height=400&width=1200&query=${pkg.title} temple himalayan mountains scenic view`
            }
            alt={pkg.title}
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{pkg.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-white">
                <div className="flex items-center space-x-2">
                  <Clock size={20} />
                  <span className="text-lg">{pkg.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star size={20} className="text-yellow-400" />
                  <span className="text-lg">4.8 Rating</span>
                </div>
                <div className="text-2xl font-bold text-orange-400">₹{pkg.price.toLocaleString()}</div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Package</h2>
                <p className="text-gray-700 text-lg leading-relaxed">{pkg.description}</p>
              </section>

              {/* Highlights */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Package Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pkg.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Itinerary */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Detailed Itinerary</h2>
                <div className="space-y-4">
                  {pkg.itinerary.map((day: any, index: number) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Day {day.day}: {day.title}
                      </h3>
                      <p className="text-gray-700">{day.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Inclusions & Exclusions */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-green-600">✓ Inclusions</h3>
                  <ul className="space-y-2">
                    {pkg.inclusions.map((inclusion, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Check size={16} className="text-green-600" />
                        <span className="text-gray-700">{inclusion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-red-600">✗ Exclusions</h3>
                  <ul className="space-y-2">
                    {pkg.exclusions.map((exclusion, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <X size={16} className="text-red-600" />
                        <span className="text-gray-700">{exclusion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Gallery */}
              {pkg.images.length > 1 && (
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Photo Gallery</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {pkg.images.slice(1).map((image, index) => (
                      <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${pkg.title} - Image ${index + 2}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Booking Card */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-orange-600 mb-2">₹{pkg.price.toLocaleString()}</div>
                    <div className="text-gray-600">per person</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold">{pkg.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Group Size:</span>
                      <span className="font-semibold">2-15 people</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Best Time:</span>
                      <span className="font-semibold">May - Oct</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <MessageCircle size={20} />
                      <span>Book via WhatsApp</span>
                    </a>
                    <a
                      href="tel:7452940158"
                      className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <Phone size={20} />
                      <span>Call Now</span>
                    </a>
                  </div>

                  <div className="mt-4 text-center text-sm text-gray-600">
                    <p>💬 Free consultation available</p>
                    <p>📞 +91-7452940158</p>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Information</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Advance booking required</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Customizable itinerary</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Expert local guides</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>24/7 support during trip</span>
                    </div>
                  </div>
                </div>

                {/* Special Offer */}
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-orange-800 mb-2">🎉 Special Offer</h3>
                  <p className="text-orange-700 text-sm mb-3">
                    Book before March 31st and save ₹2,000 on this package!
                  </p>
                  <div className="text-xs text-orange-600">*Terms and conditions apply</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
