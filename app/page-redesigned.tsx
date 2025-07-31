import HeaderRedesigned from "@/components/header-redesigned"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import HeroCarousel from "@/components/ui/hero-carousel"
import PackagesRedesigned from "@/components/sections/packages-redesigned"
import EnhancedWhyChooseUs from "@/components/sections/enhanced-why-choose-us"
import EnhancedTestimonialsSection from "@/components/sections/enhanced-testimonials-fixed"
import BookingProcess from "@/components/sections/booking-process"

export default async function HomePage() {
  return (
    <>
      <HeaderRedesigned />
      <main>
        <HeroCarousel />
        <PackagesRedesigned />
        <EnhancedWhyChooseUs />
        <EnhancedTestimonialsSection />
        <BookingProcess />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
