"use client"

import type React from "react"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { createClient } from "@/lib/supabase"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const supabase = createClient()
      const { error } = await supabase.from("contact_messages").insert([formData])

      if (error) throw error

      setSubmitStatus("success")
      setFormData({ name: "", phone: "", message: "" })
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-orange-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl md:text-2xl">Get in touch for your Char Dham Yatra planning</p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>

              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
                  Thank you for your message! We'll get back to you within 24 hours.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
                  Sorry, there was an error sending your message. Please try again or call us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tell us about your travel plans, preferred dates, number of people, etc."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Phone className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <a href="tel:7452940158" className="text-orange-600 hover:text-orange-700 text-lg">
                      +91-7452940158
                    </a>
                    <p className="text-gray-600 text-sm">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Mail className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <a href="mailto:info@chardhamyatra2025.com" className="text-orange-600 hover:text-orange-700">
                      info@chardhamyatra2025.com
                    </a>
                    <p className="text-gray-600 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <MapPin className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Office</h3>
                    <p className="text-gray-700">Haridwar, Uttarakhand, India</p>
                    <p className="text-gray-600 text-sm">Visit by appointment only</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Clock className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-700">Monday - Sunday: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-600 text-sm">Emergency support available 24/7</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/917452940158?text=Hi, I need information about Char Dham Yatra packages."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>WhatsApp Chat</span>
                  </a>
                  <a
                    href="tel:7452940158"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <Phone size={20} />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What is the best time for Char Dham Yatra?</h3>
                <p className="text-gray-600">
                  The best time is from May to October when the weather is favorable and all temples are accessible.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I book a package?</h3>
                <p className="text-gray-600">
                  You can book by calling us, sending a WhatsApp message, or filling out the contact form above.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What is included in the package price?</h3>
                <p className="text-gray-600">
                  Our packages include accommodation, meals, transportation, and guide services. Check individual
                  package details for specifics.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can packages be customized?</h3>
                <p className="text-gray-600">
                  Yes, we offer fully customizable packages based on your preferences, budget, and travel dates.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
