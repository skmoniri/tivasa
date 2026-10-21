
import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/installation", priority: 0.9 },
    { path: "/maintenance", priority: 0.9 },
    { path: "/dataCenter", priority: 0.9 },
  ];

  return pages.flatMap(({ path, priority }) => {
    const englishUrl = `${SITE_URL}/en${path}`;
    const persianUrl = `${SITE_URL}/fa${path}`;

    const alternates = {
      languages: {
        en: englishUrl,
        fa: persianUrl,
      },
    };

    return [
      {
        url: englishUrl,
        lastModified: undefined,
        changeFrequency: "monthly" as const,
        priority,
        alternates,
      },
      {
        url: persianUrl,
        lastModified: undefined,
        changeFrequency: "monthly" as const,
        priority,
        alternates,
      },
    ];
  });
}
