import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/installation"];

  return pages.flatMap((path) => [
    {
      url: `${SITE_URL}/en${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}/en${path}`,
          fa: `${SITE_URL}/fa${path}`,
        },
      },
    },
    {
      url: `${SITE_URL}/fa${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}/en${path}`,
          fa: `${SITE_URL}/fa${path}`,
        },
      },
    },
  ]);
}
