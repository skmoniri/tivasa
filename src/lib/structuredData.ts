import { SITE_URL } from "@/lib/seo";
import type { Locale } from "@/i18n/config";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Tivasa",
    url: SITE_URL,
  };
}

export function getInstallationSchema(locale: Locale) {
  const isPersian = locale === "fa";

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/${locale}/installation#service`,
    name: isPersian
      ? "نصب و راه‌اندازی سیستم‌های VRF"
      : "VRF Installation and Commissioning",
    description: isPersian
      ? "خدمات مهندسی، نصب، تست و راه‌اندازی سیستم‌های VRF"
      : "Engineering, installation, testing, and commissioning of VRF systems.",
    url: `${SITE_URL}/${locale}/installation`,
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}
