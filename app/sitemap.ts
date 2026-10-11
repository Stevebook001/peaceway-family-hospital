import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";

const siteUrl = "https://peaceway-family-hospital.vercel.app";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: siteUrl + "/blog", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...blogPosts.map((post) => ({ url: siteUrl + "/blog/" + post.slug, lastModified: new Date(post.date + "T12:00:00Z"), changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
  return pages;
}
