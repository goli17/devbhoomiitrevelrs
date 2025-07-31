// lib/supabase/types.ts

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string | null
          role: 'user' | 'admin'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email?: string | null
          role?: 'user' | 'admin'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string | null
          role?: 'user' | 'admin'
          created_at?: string
          updated_at?: string
        }
      }

      // Continue with: packages, blog_posts, testimonials, contact_messages...
      // Keep the rest of your table definitions here
    }
  }
}
