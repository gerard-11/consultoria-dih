import type { MetadataRoute } from "next";
import { siteUrl } from "./seo";
import { servicePages } from "./servicios/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { path: "/", priority: 1 },
    { path: "/servicios", priority: 0.9 },
    { path: "/contacto", priority: 0.85 },
    { path: "/sobre-mi", priority: 0.8 },
  ];

  return [
    ...routes.map((route) => ({
      url: `${siteUrl}${route.path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route.priority,
    })),
    ...servicePages.map((service) => ({
      url: `${siteUrl}/servicios/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ];
}
