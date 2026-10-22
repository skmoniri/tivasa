import type { Locale } from "@/i18n/config";

export const productCatalogs = {
  en: {
    labels: {
      manufacturer: "Manufacturer",
      series: "System Series",
      category: "System Type",
      manufacturerProfile: "About the Manufacturer",
      technicalLibrary: "Technical Documentation",
      primaryCatalog: "View Technical Catalog",
      secondaryCatalog: "Tivasa Persian Catalog",
      inquiry: "Request Consultation",
      document: "PDF DOCUMENT",
      outdoor: "VRF / OUTDOOR SYSTEM",
      system: "SYSTEM",
      scroll: "SCROLL TO EXPLORE",
      catalogNote: "Manufacturer series documentation",
    },
    profiles: [
      {
        manufacturer: "TICA",
        heading: "TICA / TIMS-X",
        description:
          "TICA's VRF systems combine advanced engineering, design flexibility, and intelligent energy management to create integrated climate control solutions — a professional choice for projects that prioritize quality, performance, and efficiency.",
        profile:
          "TICA's TIMS-X series is part of its commercial VRF product range. System configuration, capacity and equipment selection are determined by the technical requirements of each project.",
        catalog: "/catalogs/tica-tims-vrf.pdf",
        catalogLanguage: "EN",
        secondaryCatalog: "/catalogs/tivasa-vrf-fa.pdf",
        secondaryLanguage: "FA",
      },
      {
        manufacturer: "TCL",
        heading: "TCL / VRF SYSTEMS",
        description:
          "TCL's VRF system is an engineered solution for integrated cooling and heating management, designed to adapt to the diverse requirements of today's buildings.",
        profile:
          "Founded in 1981, TCL is an international electronics and appliance manufacturer. Its VRF product range applies inverter technology and system controls to commercial air-conditioning applications.",
        catalog: "/catalogs/tcl-tmv6-vrf.pdf",
        catalogLanguage: "EN",
        secondaryCatalog: null,
        secondaryLanguage: null,
      },
      {
        manufacturer: "Midea",
        heading: "MIDEA / V8 SERIES",
        description:
          "Midea's eighth-generation VRF system combines advanced technology, high energy efficiency, and intelligent control to deliver lasting comfort in modern projects.",
        profile:
          "Founded in 1968, Midea manufactures HVAC equipment and home appliances. Its commercial VRF portfolio supports applications including offices, hotels, hospitals and large buildings.",
        catalog: "/catalogs/midea-v8-vrf.pdf",
        catalogLanguage: "PT",
        secondaryCatalog: null,
        secondaryLanguage: null,
      },
    ],
  },
  fa: {
    labels: {
      manufacturer: "سازنده",
      series: "سری سیستم",
      category: "نوع سیستم",
      manufacturerProfile: "درباره سازنده",
      technicalLibrary: "مستندات فنی",
      primaryCatalog: "مشاهده کاتالوگ فنی",
      secondaryCatalog: "کاتالوگ فارسی تیواسا",
      inquiry: "درخواست مشاوره",
      document: "فایل PDF",
      outdoor: "سیستم خارجی VRF",
      system: "سیستم",
      scroll: "برای مشاهده محصولات حرکت کنید",
      catalogNote: "مستندات فنی سری محصولات سازنده",
    },
    profiles: [
      {
        manufacturer: "TICA",
        heading: "TICA / TIMS-X",
        description:
          "سیستم‌های VRF تیکا؛ ترکیبی از مهندسی پیشرفته، انعطاف‌پذیری در طراحی و مدیریت هوشمند انرژی برای خلق راهکارهای یکپارچه تهویه مطبوع؛ انتخابی حرفه‌ای برای پروژه‌هایی که کیفیت، عملکرد و بهره‌وری را در بالاترین اولویت قرار می‌دهند.",
        profile:
          "سری TIMS-X از محصولات VRF تجاری شرکت تیکا است. پیکربندی سیستم، ظرفیت و انتخاب تجهیزات بر اساس الزامات فنی هر پروژه تعیین می‌شود.",
        catalog: "/catalogs/tica-tims-vrf.pdf",
        catalogLanguage: "EN",
        secondaryCatalog: "/catalogs/tivasa-vrf-fa.pdf",
        secondaryLanguage: "FA",
      },
      {
        manufacturer: "TCL",
        heading: "TCL / VRF SYSTEMS",
        description:
          "سیستم VRF تی‌سی‌ال؛ راهکاری مهندسی‌شده برای مدیریت یکپارچه سرمایش و گرمایش، با قابلیت انطباق با نیازهای متنوع ساختمان‌های امروزی.",
        profile:
          "شرکت تی‌سی‌ال در سال ۱۹۸۱ تأسیس شد و از تولیدکنندگان بین‌المللی تجهیزات الکترونیکی و لوازم خانگی است. محصولات VRF این شرکت از فناوری اینورتر و سامانه‌های کنترلی برای تهویه مطبوع تجاری بهره می‌برند.",
        catalog: "/catalogs/tcl-tmv6-vrf.pdf",
        catalogLanguage: "EN",
        secondaryCatalog: null,
        secondaryLanguage: null,
      },
      {
        manufacturer: "Midea",
        heading: "MIDEA / V8 SERIES",
        description:
          "سیستم VRF نسل هشتم مدیا؛ تلفیقی از فناوری پیشرفته، راندمان انرژی بالا و کنترل هوشمند برای تأمین آسایش پایدار در پروژه‌های مدرن.",
        profile:
          "شرکت میدیا در سال ۱۹۶۸ تأسیس شد و تولیدکننده تجهیزات تهویه مطبوع و لوازم خانگی است. محصولات VRF تجاری این شرکت برای کاربردهایی مانند ساختمان‌های اداری، هتل‌ها، بیمارستان‌ها و پروژه‌های بزرگ ارائه می‌شوند.",
        catalog: "/catalogs/midea-v8-vrf.pdf",
        catalogLanguage: "PT",
        secondaryCatalog: null,
        secondaryLanguage: null,
      },
    ],
  },
} as const;

export function getProductCatalogs(locale: Locale) {
  return productCatalogs[locale];
}
