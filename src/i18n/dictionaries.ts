import type { Locale } from "./config";

export const dictionaries = {
  en: {
    nav: {
      products: "Products",
      projects: "Projects",
      about: "About",
      installation: "Installation",
      contact: "Contact",
    },
    header: {
      startProject: "Start a project",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    mobile: {
      system: "SYSTEM / INFORMATION",
      active: "ACTIVE",
      location: "TEHRAN / IRAN",
      division: "ENGINEERING",
      available: "AVAILABLE",
    },
  },

  fa: {
    nav: {
      products: "محصولات",
      projects: "پروژه‌ها",
      about: "درباره ما",
      installation: "نصب و راه‌اندازی",
      contact: "تماس با ما",
    },
    header: {
      startProject: "شروع همکاری",
      openMenu: "باز کردن منو",
      closeMenu: "بستن منو",
    },
    mobile: {
      system: "اطلاعات مجموعه",
      active: "فعال",
      location: "تهران / ایران",
      division: "مهندسی",
      available: "آماده همکاری",
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
