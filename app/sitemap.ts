// app/sitemap.ts
import { getAllCases } from "@/lib/cases";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const site =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.luukvandijk.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${site}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${site}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const caseRoutes: MetadataRoute.Sitemap = getAllCases().map((c) => ({
    url: `${site}/case-studies/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...caseRoutes];
}
