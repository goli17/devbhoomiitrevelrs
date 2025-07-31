import { HeaderMobileFirst } from "@/components/header-mobile-first"
import { MobileFirstHero } from "@/components/sections/mobile-first-hero"
import { MobileFirstPackages } from "@/components/sections/mobile-first-packages"
import EnhancedTestimonialsSection from "@/components/sections/enhanced-testimonials-fixed"
import EnhancedWhyChooseUs from "@/components/sections/enhanced-why-choose-us"
import BookingProcess from "@/components/sections/booking-process"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeaderMobileFirst />
      <main>
        <MobileFirstHero />
        <MobileFirstPackages />
        <EnhancedWhyChooseUs />
        <EnhancedTestimonialsSection />
        <BookingProcess />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
