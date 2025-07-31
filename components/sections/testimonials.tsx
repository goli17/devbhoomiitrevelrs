import { createServerClient } from "@/lib/supabase"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export default async function TestimonialsSection() {
  const supabase = createServerClient()

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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Pilgrims Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Read testimonials from thousands of satisfied pilgrims who experienced divine blessings with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-xl p-6 relative">
              <Quote className="absolute top-4 right-4 text-orange-200" size={32} />

              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src={testimonial.avatar || `/placeholder.svg?height=50&width=50&query=person avatar`}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
