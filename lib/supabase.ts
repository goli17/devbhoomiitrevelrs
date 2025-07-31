import { createClientComponentClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export const createClient = () => createClientComponentClient()

export const createServerClient = () => createServerComponentClient({ cookies })

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string | null
          role: "user" | "admin"
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email?: string | null
          role?: "user" | "admin"
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string | null
          role?: "user" | "admin"
          created_at?: string
          updated_at?: string
        }
      }
      packages: {
        Row: {
          id: string
          slug: string
          title: string
          price: number
          duration: string
          description: string | null
          itinerary: any[]
          highlights: string[]
          inclusions: string[]
          exclusions: string[]
          images: string[]
          location_map: string | null
          featured: boolean
          active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          slug: string
          title: string
          price: number
          duration: string
          description?: string | null
          itinerary?: any[]
          highlights?: string[]
          inclusions?: string[]
          exclusions?: string[]
          images?: string[]
          location_map?: string | null
          featured?: boolean
          active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          slug?: string
          title?: string
          price?: number
          duration?: string
          description?: string | null
          itinerary?: any[]
          highlights?: string[]
          inclusions?: string[]
          exclusions?: string[]
          images?: string[]
          location_map?: string | null
          featured?: boolean
          active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      blog_posts: {
        Row: {
          id: string
          slug: string
          title: string
          content: string
          excerpt: string | null
          image: string | null
          published: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          slug: string
          title: string
          content: string
          excerpt?: string | null
          image?: string | null
          published?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          slug?: string
          title?: string
          content?: string
          excerpt?: string | null
          image?: string | null
          published?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      testimonials: {
        Row: {
          id: string
          name: string
          content: string
          rating: number
          avatar: string | null
          approved: boolean
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          content: string
          rating: number
          avatar?: string | null
          approved?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          content?: string
          rating?: number
          avatar?: string | null
          approved?: boolean
          created_at?: string
        }
      }
      contact_messages: {
        Row: {
          id: string
          name: string
          phone: string
          message: string
          read: boolean
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          phone: string
          message: string
          read?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          phone?: string
          message?: string
          read?: boolean
          created_at?: string
        }
      }
    }
  }
}
