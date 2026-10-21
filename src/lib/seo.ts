
import type { Metadata } from "next";

import type { Locale } from "@/i18n/config";

/**
 * Primary production domain.
 */
export const SITE_URL = "https://tivasaco.com";

export const SITE_NAME = "Tivasa";

/**
 * Approved homepage Open Graph artwork.
 *
 * Actual file:
 * public/og/Engineered for Performance.png
 *
 * Spaces in public URLs must be URL-encoded.
 */
export const HOME_OG_IMAGE =
  `${SITE_URL}/og/Engineered%20for%20Performance.png`;

type SeoPage =
  | "home"
  | "installation"
  | "maintenance"
  | "dataCenter";

interface SeoContent {
  title: string;
  description: string;
}

const seoContent: Record<
  Locale,
  Record<SeoPage, SeoContent>
> = {
  en: {
    home: {
      title: "Tivasa | VRF Engineering & HVAC Solutions",
      description:
        "Tivasa provides VRF engineering, installation, commissioning and maintenance solutions for industrial facilities, commercial buildings and critical infrastructure.",
    },

    installation: {
      title: "VRF Installation & Commissioning | Tivasa",
      description:
        "Explore Tivasa's VRF installation and commissioning services, including engineering, equipment selection, technical installation, system testing and handover.",
    },

    maintenance: {
      title: "VRF Maintenance & Service | Tivasa",
      description:
        "Professional VRF maintenance and service solutions from Tivasa, including preventive maintenance, technical inspections and performance monitoring.",
    },

    dataCenter: {
      title: "Data Center VRF Cooling Solutions | Tivasa",
      description:
        "Explore VRF cooling solutions for data centers, including precise temperature control, energy efficiency, redundancy planning and system monitoring.",
    },
  },

  fa: {
    home: {
      title: "تیواسا | مهندسی و اجرای سیستم‌های VRF",
      description:
        "شرکت تیواسا ارائه‌دهنده خدمات مهندسی، نصب، راه‌اندازی و نگهداری سیستم‌های VRF برای صنایع، ساختمان‌های تجاری و زیرساخت‌های حساس.",
    },

    installation: {
      title: "نصب و راه‌اندازی سیستم VRF | تیواسا",
      description:
        "خدمات تخصصی نصب و راه‌اندازی سیستم‌های VRF در تیواسا؛ شامل بررسی مهندسی، انتخاب تجهیزات، اجرای فنی، تست و تحویل پروژه.",
    },

    maintenance: {
      title: "تعمیر و نگهداری سیستم VRF | تیواسا",
      description:
        "خدمات تخصصی سرویس و نگهداری سیستم‌های VRF در تیواسا، شامل نگهداری پیشگیرانه، بازرسی فنی، پایش عملکرد و بررسی وضعیت تجهیزات.",
    },

    dataCenter: {
      title: "راهکارهای سرمایش دیتاسنتر با VRF | تیواسا",
      description:
        "راهکارهای سرمایش VRF برای دیتاسنترها با تمرکز بر کنترل دقیق دما، بهره‌وری انرژی، طراحی افزونگی و پایش سیستم‌های سرمایشی.",
    },
  },
};

const pagePaths: Record<SeoPage, string> = {
  home: "",
  installation: "/installation",
  maintenance: "/maintenance",
  dataCenter: "/dataCenter",
};

/**
 * Return the canonical URL for a page.
 */
export function getCanonicalUrl(
  locale: Locale,
  page: SeoPage,
): string {
  return `${SITE_URL}/${locale}${pagePaths[page]}`;
}

/**
 * Generate localized SEO, Open Graph, Twitter,
 * canonical, hreflang and robots metadata.
 */
export function getPageMetadata(
  locale: Locale,
  page: SeoPage,
): Metadata {
  const content = seoContent[locale][page];
  const path = pagePaths[page];

  const canonicalUrl = getCanonicalUrl(locale, page);

  const englishUrl = `${SITE_URL}/en${path}`;
  const persianUrl = `${SITE_URL}/fa${path}`;

  const isHomepage = page === "home";

  const homepageOpenGraphImages = isHomepage
    ? [
        {
          url: HOME_OG_IMAGE,
          width: 1200,
          height: 630,
          type: "image/png" as const,
          alt: "Tivasa — Engineered for Performance. VRF Engineering and HVAC Solutions",
        },
      ]
    : undefined;

  return {
    metadataBase: new URL(SITE_URL),

    title: content.title,

    description: content.description,

    alternates: {
      canonical: canonicalUrl,

      languages: {
        en: englishUrl,
        fa: persianUrl,
        "x-default": englishUrl,
      },
    },

    openGraph: {
      type: "website",

      siteName: SITE_NAME,

      title: content.title,

      description: content.description,

      url: canonicalUrl,

      locale: locale === "fa" ? "fa_IR" : "en_US",

      alternateLocale:
        locale === "fa"
          ? ["en_US"]
          : ["fa_IR"],

      ...(homepageOpenGraphImages
        ? { images: homepageOpenGraphImages }
        : {}),
    },

    twitter: {
      card: "summary_large_image",

      title: content.title,

      description: content.description,

      ...(isHomepage
        ? { images: [HOME_OG_IMAGE] }
        : {}),
    },

    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}
