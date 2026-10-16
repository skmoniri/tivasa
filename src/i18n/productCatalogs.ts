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
          "Inverter-driven VRF technology for flexible multi-zone heating and cooling in commercial and large-scale buildings.",
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
          "Commercial VRF systems combining inverter technology, flexible capacity control and adaptable heating and cooling solutions.",
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
          "Midea V8 VRF technology for commercial climate control, with flexible system configuration and inverter-based operation.",
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
          "سیستم VRF مجهز به فناوری اینورتر برای سرمایش و گرمایش چندمنطقه‌ای در ساختمان‌های تجاری و پروژه‌های بزرگ.",
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
          "سیستم‌های VRF تجاری با فناوری اینورتر، کنترل انعطاف‌پذیر ظرفیت و راهکارهای سرمایش و گرمایش متناسب با ساختمان.",
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
          "سیستم VRF سری V8 میدیا برای تهویه مطبوع تجاری، با قابلیت پیکربندی انعطاف‌پذیر و عملکرد مبتنی بر فناوری اینورتر.",
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
