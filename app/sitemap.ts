import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { SITE_URL } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/issues`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/stories`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const articlePages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${SITE_URL}/blog/${a.slug}`,
    lastModified: new Date(`${a.date}T12:00:00`),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticPages, ...articlePages];
}
