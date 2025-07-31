import { Phone, Calendar, MapPin, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Phone,
    title: "Contact Us",
    description: "Call us or fill the inquiry form to discuss your requirements",
  },
  {
    icon: Calendar,
    title: "Choose Dates",
    description: "Select your preferred travel dates and package options",
  },
  {
    icon: CheckCircle,
    title: "Confirm Booking",
    description: "Complete the booking with advance payment and documentation",
  },
  {
    icon: MapPin,
    title: "Start Journey",
    description: "Begin your sacred pilgrimage with our expert team guidance",
  },
]

export default function BookingProcess() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Simple Booking Process
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Book your Char Dham Yatra in just 4 easy steps
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Connector Line - Hidden on mobile */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-orange-200 z-0"></div>
              )}

              <div className="relative z-10 bg-white">
                <div className="bg-orange-600 text-white w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <step.icon size={28} className="md:w-8 md:h-8" />
                  <div className="absolute -top-2 -right-2 bg-blue-600 text-white w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <a
            href="tel:7452940158"
            className="inline-flex items-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-colors duration-300 min-h-[48px]"
          >
            <Phone size={20} />
            <span>Start Your Journey - Call Now</span>
          </a>
        </div>
      </div>
    </section>
  )
}
