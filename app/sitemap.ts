import { createServerClient } from "@/lib/supabase"
import type { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = createServerClient()

  // Get all active packages
  const { data: packages } = await supabase.from("packages").select("slug, updated_at").eq("active", true)

  // Get all published blog posts
  const { data: blogPosts } = await supabase.from("blog_posts").select("slug, updated_at").eq("published", true)

  const baseUrl = "https://chardhamyatra2025.vercel.app"

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/packages`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ]

  // Package pages
  const packagePages =
    packages?.map((pkg) => ({
      url: `${baseUrl}/packages/${pkg.slug}`,
      lastModified: new Date(pkg.updated_at),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })) || []

  // Blog pages
  const blogPages =
    blogPosts?.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updated_at),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })) || []

  return [...staticPages, ...packagePages, ...blogPages]
}
