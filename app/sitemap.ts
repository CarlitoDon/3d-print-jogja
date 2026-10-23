import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://3dprintjogja.com";
  const locales = ["id", "en"];
  const routes = [
    "",
    "/calculator",
    "/services",
    "/industries",
    "/how-it-works",
    "/about",
    "/faq",
    "/contact",
    "/blog",
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const route of routes) {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date("2025-01-01"),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1.0 : route === "/calculator" ? 0.9 : 0.8,
      });
    }
  }

  return entries;
}
