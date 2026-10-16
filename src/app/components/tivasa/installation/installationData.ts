import type { Locale } from "@/i18n/config";

const en = {
  installationSteps: [
    {
      number: "01",
      title: "Assessment & Feasibility",
      description:
        "Every project begins with an understanding of the building, its intended use, thermal requirements, architectural conditions, and technical constraints.",
      detail: "Site evaluation / System requirements",
    },
    {
      number: "02",
      title: "Engineering & System Design",
      description:
        "Heating and cooling loads, equipment capacity, refrigerant piping routes, elevation differences, and system configuration are evaluated before execution.",
      detail: "Load calculations / Shop drawings",
    },
    {
      number: "03",
      title: "Equipment Selection",
      description:
        "Indoor and outdoor units are selected according to project requirements, operating conditions, capacity corrections, and system compatibility.",
      detail: "System configuration / Bill of quantities",
    },
    {
      number: "04",
      title: "Procurement & Logistics",
      description:
        "Equipment documentation, delivery sequencing, storage conditions, and site coordination are considered to support an organized installation process.",
      detail: "Equipment coordination / Site readiness",
    },
    {
      number: "05",
      title: "Mechanical & Electrical Installation",
      description:
        "Installation covers equipment positioning, refrigerant piping, nitrogen-purged brazing, insulation, condensate drainage, electrical power, and communication wiring.",
      detail: "Piping / Wiring / Drainage",
    },
    {
      number: "06",
      title: "Testing & Commissioning",
      description:
        "System integrity and operation are verified through pressure and leak testing, evacuation, refrigerant charging, addressing, and operational measurements.",
      detail: "Testing / Verification / Startup",
    },
    {
      number: "07",
      title: "Controls & Integration",
      description:
        "Controllers, operating schedules, system settings, and applicable building-management interfaces are configured around the project's operational needs.",
      detail: "Controls / Integration / Configuration",
    },
    {
      number: "08",
      title: "Handover & Training",
      description:
        "The installation process concludes with technical documentation, commissioning records, and guidance for the building's operating personnel.",
      detail: "Documentation / Operator training",
    },
  ],
  qualityChecks: [
    {
      number: "01",
      title: "Pressure & Leak Testing",
      description:
        "Verification of refrigerant piping integrity before system startup.",
    },
    {
      number: "02",
      title: "Vacuum & Evacuation",
      description:
        "Removal of moisture and non-condensable gases using appropriate evacuation and hold-test procedures.",
    },
    {
      number: "03",
      title: "Refrigerant Charging",
      description:
        "Charging according to equipment requirements and the installed piping configuration.",
    },
    {
      number: "04",
      title: "Operational Verification",
      description:
        "Review of addressing, temperatures, pressures, electrical current, and operating conditions.",
    },
  ],
  maintenanceItems: [
    "Scheduled preventive inspections",
    "Filter, coil, and drainage maintenance",
    "Refrigerant system checks",
    "Electrical and control inspections",
    "Fault-code review and technical reporting",
    "Corrective service coordination",
  ],
  brands: ["MIDEA", "TCL", "TICA", "GREE", "SAMSUNG"],
};

const fa = {
  installationSteps: [
    {
      number: "01",
      title: "ارزیابی و امکان‌سنجی",
      description:
        "هر پروژه با شناخت ساختمان، نوع کاربری، نیازهای حرارتی و برودتی، شرایط معماری و محدودیت‌های فنی آغاز می‌شود.",
      detail: "بررسی محل پروژه / نیازمندی‌های سیستم",
    },
    {
      number: "02",
      title: "مهندسی و طراحی سیستم",
      description:
        "بارهای سرمایشی و گرمایشی، ظرفیت تجهیزات، مسیرهای لوله‌کشی مبرد، اختلاف ارتفاع و پیکربندی سیستم پیش از اجرا بررسی می‌شوند.",
      detail: "محاسبات بار / نقشه‌های اجرایی",
    },
    {
      number: "03",
      title: "انتخاب تجهیزات",
      description:
        "یونیت‌های داخلی و خارجی با توجه به نیازهای پروژه، شرایط عملکرد، اصلاح ظرفیت و سازگاری اجزای سیستم انتخاب می‌شوند.",
      detail: "پیکربندی سیستم / فهرست مقادیر تجهیزات",
    },
    {
      number: "04",
      title: "تأمین تجهیزات و لجستیک",
      description:
        "مستندات تجهیزات، ترتیب تحویل، شرایط نگهداری و هماهنگی با محل پروژه برای اجرای منظم فرایند نصب بررسی می‌شوند.",
      detail: "هماهنگی تجهیزات / آماده‌سازی محل",
    },
    {
      number: "05",
      title: "نصب مکانیکی و الکتریکی",
      description:
        "عملیات نصب شامل جانمایی تجهیزات، لوله‌کشی مبرد، جوشکاری با جریان نیتروژن، عایق‌کاری، تخلیه آب تقطیر، تأمین برق و سیم‌کشی ارتباطی است.",
      detail: "لوله‌کشی / سیم‌کشی / تخلیه آب",
    },
    {
      number: "06",
      title: "آزمایش و راه‌اندازی",
      description:
        "یکپارچگی و عملکرد سیستم از طریق آزمون فشار و نشتی، وکیوم، شارژ مبرد، آدرس‌دهی و اندازه‌گیری پارامترهای عملکردی بررسی می‌شود.",
      detail: "آزمایش / تأیید عملکرد / راه‌اندازی",
    },
    {
      number: "07",
      title: "کنترل و یکپارچه‌سازی",
      description:
        "کنترلرها، برنامه‌های زمان‌بندی، تنظیمات سیستم و رابط‌های مرتبط با مدیریت ساختمان متناسب با نیازهای بهره‌برداری پروژه پیکربندی می‌شوند.",
      detail: "کنترل / یکپارچه‌سازی / پیکربندی",
    },
    {
      number: "08",
      title: "تحویل و آموزش",
      description:
        "فرایند نصب با ارائه مستندات فنی، سوابق راه‌اندازی و آموزش‌های لازم به مسئولان بهره‌برداری ساختمان تکمیل می‌شود.",
      detail: "مستندات / آموزش بهره‌برداران",
    },
  ],
  qualityChecks: [
    {
      number: "01",
      title: "آزمون فشار و نشتی",
      description: "بررسی یکپارچگی لوله‌کشی مبرد پیش از راه‌اندازی سیستم.",
    },
    {
      number: "02",
      title: "وکیوم و تخلیه",
      description:
        "حذف رطوبت و گازهای غیرقابل‌تقطیر با استفاده از روش‌های مناسب وکیوم و آزمون حفظ خلأ.",
    },
    {
      number: "03",
      title: "شارژ مبرد",
      description:
        "شارژ مبرد مطابق الزامات تجهیزات و پیکربندی لوله‌کشی اجراشده.",
    },
    {
      number: "04",
      title: "تأیید عملکرد",
      description:
        "بررسی آدرس‌دهی، دما، فشار، جریان الکتریکی و شرایط عملکرد سیستم.",
    },
  ],
  maintenanceItems: [
    "بازرسی‌های دوره‌ای پیشگیرانه",
    "سرویس فیلترها، کویل‌ها و مسیر تخلیه آب",
    "بررسی سیستم مبرد",
    "بازرسی تجهیزات الکتریکی و کنترل",
    "بررسی کدهای خطا و تهیه گزارش فنی",
    "هماهنگی خدمات تعمیر و رفع عیب",
  ],
  brands: en.brands,
};

export const installationSteps = en.installationSteps;
export const qualityChecks = en.qualityChecks;
export const maintenanceItems = en.maintenanceItems;
export const brands = en.brands;

export function getInstallationData(locale: Locale) {
  return locale === "fa" ? fa : en;
}
