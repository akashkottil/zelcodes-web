import type { MetadataRoute } from "next";
import { animations } from "@/lib/animations";
import { blogPosts } from "@/lib/blog";

export const dynamic = "force-static";

const base = "https://zelcodes.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  const animationRoutes = animations.map((a) => ({
    url: `${base}/animations/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogRoutes = blogPosts
    .filter((p) => p.status === "published")
    .map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  return [...staticRoutes, ...animationRoutes, ...blogRoutes];
}
