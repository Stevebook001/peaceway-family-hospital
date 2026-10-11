import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";

const siteUrl = "https://peaceway-family-hospital.vercel.app";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: siteUrl + "/blog", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: siteUrl + "/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: siteUrl + "/services", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: siteUrl + "/editorial-policy", lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: siteUrl + "/privacy", lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
    ...blogPosts.filter((post) => post.status === "published").map((post) => ({ url: siteUrl + "/blog/" + post.slug, lastModified: new Date(post.date + "T12:00:00Z"), changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
  return pages;
}
