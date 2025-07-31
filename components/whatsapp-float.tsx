"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/917452940158?text=Hi, I am interested in Char Dham Yatra packages. Please provide more details.",
      "_blank",
    )
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  )
}
