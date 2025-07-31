"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClientSupabaseClient } from "@/app/superbase/client"
import { Package, MessageSquare, Users, TrendingUp } from "lucide-react"

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    packages: 0,
    messages: 0,
    testimonials: 0,
    unreadMessages: 0,
  })
  const router = useRouter()
  const supabase = createClientSupabaseClient()

  useEffect(() => {
    checkUser()
    fetchStats()
  }, [])

  const checkUser = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        router.push("/admin/login")
        return
      }

      // Check if user is admin
      const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single()

      if (!profile || profile.role !== "admin") {
        router.push("/admin/login")
        return
      }

      setUser(user)
    } catch (error) {
      console.error("Error checking user:", error)
      router.push("/admin/login")
    } finally {
      setLoading(false)
    }
  }

  const fetchStats = async () => {
    try {
      const [packagesRes, messagesRes, testimonialsRes, unreadRes] = await Promise.all([
        supabase.from("packages").select("id", { count: "exact" }),
        supabase.from("contact_messages").select("id", { count: "exact" }),
        supabase.from("testimonials").select("id", { count: "exact" }),
        supabase.from("contact_messages").select("id", { count: "exact" }).eq("read", false),
      ])

      setStats({
        packages: packagesRes.count || 0,
        messages: messagesRes.count || 0,
        testimonials: testimonialsRes.count || 0,
        unreadMessages: unreadRes.count || 0,
      })
    } catch (error) {
      console.error("Error fetching stats:", error)
    }
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/admin/login")
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, {user?.email}</span>
              <button
                onClick={handleSignOut}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Package className="text-blue-600" size={32} />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Packages</p>
                <p className="text-2xl font-bold text-gray-900">{stats.packages}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <MessageSquare className="text-green-600" size={32} />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Contact Messages</p>
                <p className="text-2xl font-bold text-gray-900">{stats.messages}</p>
                {stats.unreadMessages > 0 && <p className="text-sm text-red-600">{stats.unreadMessages} unread</p>}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <Users className="text-purple-600" size={32} />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Testimonials</p>
                <p className="text-2xl font-bold text-gray-900">{stats.testimonials}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <TrendingUp className="text-orange-600" size={32} />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-gray-900">+12%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Manage Packages</h3>
            <p className="text-gray-600 mb-4">Add, edit, or remove tour packages</p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
              Manage Packages
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Messages</h3>
            <p className="text-gray-600 mb-4">View and respond to customer inquiries</p>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors">
              View Messages
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Testimonials</h3>
            <p className="text-gray-600 mb-4">Approve or manage customer testimonials</p>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors">
              Manage Testimonials
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
