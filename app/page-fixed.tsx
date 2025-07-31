import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import EnhancedHero from "@/components/sections/enhanced-hero"
import EnhancedPackagesSection from "@/components/sections/enhanced-packages"
import EnhancedWhyChooseUs from "@/components/sections/enhanced-why-choose-us"
import EnhancedTestimonialsSection from "@/components/sections/enhanced-testimonials-fixed"
import BookingProcess from "@/components/sections/booking-process"

export default async function HomePage() {
  return (
    <>
      <Header />
      <main>
        <EnhancedHero />
        <EnhancedPackagesSection />
        <EnhancedWhyChooseUs />
        <EnhancedTestimonialsSection />
        <BookingProcess />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
