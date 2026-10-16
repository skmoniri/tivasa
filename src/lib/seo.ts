import type { Metadata } from "next";

import type { Locale } from "@/i18n/config";

export const SITE_URL = "https://tivasa.com";

export const SITE_NAME = "Tivasa";

type SeoPage = "home" | "installation";

const seoContent = {
  en: {
    home: {
      title: "Tivasa | VRF Systems & Engineering Solutions",
      description:
        "Explore Tivasa's VRF systems, engineering capabilities, industrial solutions, and technical approach to installation and commissioning.",
    },
    installation: {
      title: "VRF Installation & Commissioning | Tivasa",
      description:
        "Explore Tivasa's approach to VRF installation, from system engineering and equipment selection to testing, commissioning, and handover.",
    },
  },
  fa: {
    home: {
      title: "تیواسا | سیستم‌های VRF و راهکارهای مهندسی",
      description:
        "آشنایی با سیستم‌های VRF، توانمندی‌های مهندسی، راهکارهای صنعتی و خدمات نصب و راه‌اندازی در شرکت تیواسا.",
    },
    installation: {
      title: "نصب و راه‌اندازی سیستم VRF | تیواسا",
      description:
        "آشنایی با خدمات نصب و راه‌اندازی سیستم‌های VRF در تیواسا؛ از طراحی مهندسی و انتخاب تجهیزات تا اجرای فنی، تست و تحویل پروژه.",
    },
  },
} as const;

const pagePaths: Record<SeoPage, string> = {
  home: "",
  installation: "/installation",
};

export function getPageMetadata(locale: Locale, page: SeoPage): Metadata {
  const content = seoContent[locale][page];
  const path = pagePaths[page];

  const currentPath = `/${locale}${path}`;

  return {
    title: content.title,
    description: content.description,

    alternates: {
      canonical: currentPath,
      languages: {
        en: `/en${path}`,
        fa: `/fa${path}`,
        "x-default": `/en${path}`,
      },
    },

    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title: content.title,
      description: content.description,
      url: currentPath,
      locale: locale === "fa" ? "fa_IR" : "en_US",
      alternateLocale: locale === "fa" ? ["en_US"] : ["fa_IR"],
    },

    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}
