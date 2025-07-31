import { createServerSupabaseServer } from "@/app/superbase/server"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export default async function EnhancedTestimonialsSection() {
  const supabase = createServerSupabaseServer()

  const { data: testimonials } = await supabase
    .from("testimonials")
    .select("*")
    .eq("approved", true)
    .order("created_at", { ascending: false })
    .limit(6)

  if (!testimonials || testimonials.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-orange-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white rounded-full px-4 py-2 mb-4">
            <Star size={16} className="text-yellow-400" />
            <span className="text-sm font-semibold">Customer Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">What Our Pilgrims Say</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Read testimonials from thousands of satisfied pilgrims who experienced divine blessings with us
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
            <Quote className="text-orange-300 mb-6" size={48} />

            <div className="text-center">
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed italic">"{testimonials[0].content}"</p>

              <div className="flex items-center justify-center space-x-4 mb-6">
                <Image
                  src={testimonials[0].avatar || `/placeholder.svg?height=60&width=60&query=person avatar`}
                  alt={testimonials[0].name}
                  width={60}
                  height={60}
                  className="rounded-full border-3 border-white/30"
                />
                <div className="text-left">
                  <h4 className="text-xl font-bold text-white">{testimonials[0].name}</h4>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonials[0].rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(1, 4).map((testimonial) => (
            <div key={testimonial.id} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src={testimonial.avatar || `/placeholder.svg?height=40&width=40&query=person avatar`}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={12} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-blue-100 text-sm italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
