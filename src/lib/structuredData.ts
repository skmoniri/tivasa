
import { SITE_URL } from "@/lib/seo";
import type { Locale } from "@/i18n/config";

/**
 * Shared organization identifier.
 * All service schemas reference the same organization.
 */
const ORGANIZATION_ID = `${SITE_URL}/#organization`;

/**
 * Organization structured data.
 * Used on the homepage.
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "Tivasa",
    url: SITE_URL,
  };
}

/**
 * Shared helper for service structured data.
 *
 * Used by Installation, Maintenance,
 * and Data Center pages.
 */
function createServiceSchema(
  locale: Locale,
  path: string,
  name: string,
  description: string,
) {
  const url = `${SITE_URL}/${locale}${path}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description,
    url,
    provider: {
      "@id": ORGANIZATION_ID,
    },
  };
}

/**
 * VRF Installation and Commissioning
 */
export function getInstallationSchema(locale: Locale) {
  const isPersian = locale === "fa";

  return createServiceSchema(
    locale,
    "/installation",
    isPersian
      ? "نصب و راه‌اندازی سیستم‌های VRF"
      : "VRF Installation and Commissioning",
    isPersian
      ? "خدمات مهندسی، نصب، تست و راه‌اندازی سیستم‌های VRF"
      : "Engineering, installation, testing, and commissioning of VRF systems.",
  );
}

/**
 * VRF Maintenance and Service
 */
export function getMaintenanceSchema(locale: Locale) {
  const isPersian = locale === "fa";

  return createServiceSchema(
    locale,
    "/maintenance",
    isPersian
      ? "نگهداری و سرویس سیستم‌های VRF"
      : "VRF Maintenance and Service",
    isPersian
      ? "خدمات نگهداری پیشگیرانه، بازرسی فنی، پایش عملکرد و سرویس اصلاحی سیستم‌های VRF."
      : "Preventive maintenance, technical inspections, performance monitoring and corrective service for VRF systems.",
  );
}

/**
 * Data Center VRF Cooling Solutions
 */
export function getDataCenterSchema(locale: Locale) {
  const isPersian = locale === "fa";

  return createServiceSchema(
    locale,
    "/dataCenter",
    isPersian
      ? "راهکارهای سرمایش دیتاسنتر با VRF"
      : "Data Center VRF Cooling Solutions",
    isPersian
      ? "راهکارهای مهندسی سرمایش دیتاسنتر با تمرکز بر کنترل دقیق دما، بهره‌وری انرژی، طراحی افزونگی و پایش سیستم."
      : "Engineered VRF cooling solutions for data centers, focusing on temperature control, energy efficiency, redundancy planning and system monitoring.",
  );
}
