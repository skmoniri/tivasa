import type { Locale } from "@/i18n/config";

const content = {
  en: {
    hero: {
      rail: "Data Center Cooling", classification: "Tivasa / Specialized VRF Solutions", category: "Critical Infrastructure / Data Centers", eyebrow: "Data Center Engineering",
      title: "COOLING FOR", accent: "CRITICAL SYSTEMS.",
      description: "Precise, efficient and resilient VRF cooling approaches for data center environments — engineered around equipment loads and operational continuity.",
      explore: "Explore the approach", meta: "VRF / DATA CENTER", 
    },
    intro: {
      label: "The Requirement", note: "Stability / Efficiency / Continuity", title: "Precision matters.", accent: "Continuity is essential.",
      description: "Data centers require reliable temperature management as IT demand changes. Properly engineered Variable Refrigerant Flow (VRF) systems can support close load matching, modular deployment and centralized monitoring.",
      markers: ["PRECISION", "EFFICIENCY", "AVAILABILITY"],
    },
    benefits: {
      label: "Technical Advantages", note: "Seven considerations", title: "Engineered advantages.", accent: "Built around the load.",
      items: [
        {number:"01", title:"Precise temperature control", tag:"LOAD MATCHING", description:"Inverter-driven compressors modulate cooling capacity as heat loads change, supporting stable server-room conditions."},
        {number:"02", title:"Part-load efficiency", tag:"ENERGY PERFORMANCE", description:"Matching output to demand can reduce unnecessary energy use and contribute to improved facility efficiency and PUE."},
        {number:"03", title:"Redundancy-ready design", tag:"N+1 / RESILIENCE", description:"Multiple outdoor units and independent refrigerant circuits can support N+1 arrangements when the system is specifically designed for redundancy."},
        {number:"04", title:"Modular expansion", tag:"SCALABILITY", description:"Cooling capacity can be planned in phases as IT requirements grow, subject to system design and equipment limits."},
        {number:"05", title:"Space-conscious footprint", tag:"INFRASTRUCTURE", description:"Refrigerant-based architectures can reduce dependence on water distribution near sensitive equipment and help conserve mechanical space."},
        {number:"06", title:"Connected monitoring", tag:"BMS / DCIM", description:"Compatible controls can provide building-management and data-center monitoring integration, status visibility and fault alerts."},
        {number:"07", title:"Continuous-duty planning", tag:"24 / 7", description:"A system selected for the operating envelope, maintainability and backup strategy can be designed around continuous facility needs."},
      ],
    },
    framework: {
      label:"System Architecture", note:"Design considerations", title:"One system.", accent:"Multiple safeguards.", description:"Critical cooling performance depends on the complete engineering design, not on the VRF label alone.",
      steps:[
        {number:"01", title:"Assess the IT heat load", description:"Define current and future cooling demand, set points and environmental requirements."},
        {number:"02", title:"Design for resilience", description:"Review unit separation, redundancy strategy, service access and failure scenarios."},
        {number:"03", title:"Connect and verify", description:"Plan controls integration, commissioning, alarms and operational monitoring."},
      ],
      noteBottom:"Actual redundancy, PUE and 24/7 performance depend on equipment selection, controls, engineering and site conditions.",
    },
    experience: {
      label:"Project Experience", eyebrow:"TIVASA / TECHNICAL PORTFOLIO", title:"Experience in", accent:"critical environments.",
      description:"In its supplied company profile, Tivasa describes its portfolio as the first in Iran for data-center VRF design, supply and installation. This is a company-provided statement and has not been independently verified.",
      first:"Design", second:"Supply", third:"Installation", note:"Company-provided portfolio statement",
    },
    contact: {
      label:"Discuss a project", eyebrow:"TIVASA / DATA CENTER", title:"Planning critical", accent:"cooling infrastructure?",
      description:"Share your facility requirements and cooling objectives with the Tivasa team.", action:"Contact the engineering team", footer:"ENGINEERING / DATA CENTER VRF",
    },
  },
  fa: {
    hero: {
      rail:"سرمایش دیتاسنتر", classification:"تیواسا / راهکارهای تخصصی VRF", category:"زیرساخت حساس / دیتاسنتر", eyebrow:"مهندسی سرمایش دیتاسنتر",
      title:"سرمایش دقیق", accent:"برای زیرساخت‌های حساس.",
      description:"راهکارهای سرمایش VRF برای دیتاسنترها با تمرکز بر کنترل دقیق دما، بهره‌وری انرژی و تداوم عملکرد تجهیزات.",
      explore:"بررسی راهکارها", meta:"VRF / DATA CENTER",
    },
    intro: {
      label:"نیازهای اصلی", note:"پایداری / بهره‌وری / تداوم", title:"دقت در سرمایش.", accent:"تداوم در عملکرد.",
      description:"دیتاسنترها با تغییر بار تجهیزات IT به مدیریت پایدار دما نیاز دارند. سیستم‌های VRF با طراحی مناسب می‌توانند کنترل ظرفیت متناسب با بار، توسعه مرحله‌ای و پایش متمرکز را فراهم کنند.",
      markers:["کنترل دقیق", "بازده انرژی", "پایداری"],
    },
    benefits: {
      label:"مزایای فنی", note:"هفت محور کلیدی", title:"مزایای مهندسی.", accent:"متناسب با بار واقعی.",
      items:[
        {number:"01", title:"کنترل دقیق دما", tag:"تنظیم ظرفیت", description:"کمپرسورهای اینورتری با تغییر بار حرارتی، ظرفیت سرمایش را تنظیم می‌کنند تا شرایط محیطی تجهیزات پایدار بماند."},
        {number:"02", title:"بازده انرژی بالا", tag:"بهره‌وری", description:"عملکرد متناسب با بار می‌تواند مصرف انرژی اضافی را کاهش دهد و به بهبود بهره‌وری و شاخص PUE کمک کند."},
        {number:"03", title:"قابلیت طراحی افزونه", tag:"N+1 / پایداری", description:"چند واحد بیرونی و مدارهای مستقل، در صورت طراحی اختصاصی، می‌توانند از پیکربندی افزونگی N+1 پشتیبانی کنند."},
        {number:"04", title:"توسعه‌پذیری مرحله‌ای", tag:"مقیاس‌پذیری", description:"با رشد بار IT می‌توان توسعه ظرفیت را به‌صورت مرحله‌ای و مطابق محدودیت‌های طراحی و تجهیزات پیش‌بینی کرد."},
        {number:"05", title:"اشغال فضای کمتر", tag:"زیرساخت", description:"معماری مبتنی بر مبرد می‌تواند نیاز به توزیع آب در مجاورت تجهیزات حساس را کاهش دهد و به استفاده بهتر از فضا کمک کند."},
        {number:"06", title:"مانیتورینگ هوشمند", tag:"BMS / DCIM", description:"با تجهیزات و کنترلرهای سازگار، امکان یکپارچه‌سازی پایش، نمایش وضعیت و هشدارها فراهم می‌شود."},
        {number:"07", title:"برنامه‌ریزی برای کارکرد دائم", tag:"۲۴ / ۷", description:"انتخاب مناسب تجهیزات، برنامه نگهداری و راهکار پشتیبان برای پاسخگویی به نیازهای کارکرد پیوسته اهمیت دارد."},
      ],
    },
    framework: {
      label:"معماری سیستم", note:"ملاحظات طراحی", title:"یک سامانه.", accent:"چند لایه اطمینان.", description:"پایداری سرمایش دیتاسنتر تنها به انتخاب فناوری VRF وابسته نیست؛ نتیجه طراحی و اجرای یکپارچه سیستم است.",
      steps:[
        {number:"01", title:"بررسی بار حرارتی IT", description:"تعیین نیاز فعلی و آتی سرمایش، دمای هدف و الزامات محیطی."},
        {number:"02", title:"طراحی با نگاه به پایداری", description:"بررسی افزونگی، استقلال واحدها، دسترسی سرویس و سناریوهای خرابی."},
        {number:"03", title:"یکپارچه‌سازی و ارزیابی", description:"برنامه‌ریزی کنترل‌ها، راه‌اندازی، هشدارها و پایش عملکرد."},
      ],
      noteBottom:"افزونگی واقعی، شاخص PUE و عملکرد ۲۴ ساعته به انتخاب تجهیزات، کنترل‌ها، طراحی مهندسی و شرایط محل بستگی دارد.",
    },
    experience: {
      label:"سوابق اجرایی", eyebrow:"TIVASA / سوابق فنی", title:"تجربه در", accent:"زیرساخت‌های حساس.",
      description:"بر اساس رزومه ارائه‌شده از سوی شرکت، تیواسا سابقه خود را نخستین رزومه کشور در زمینه طراحی، تأمین و اجرای VRF دیتاسنتر معرفی کرده است. این ادعا به‌صورت مستقل راستی‌آزمایی نشده است.",
      first:"طراحی", second:"تأمین", third:"اجرا", note:"اطلاعات بر اساس رزومه ارسالی شرکت",
    },
    contact: {
      label:"مشاوره پروژه", eyebrow:"TIVASA / DATA CENTER", title:"برای سرمایش", accent:"زیرساخت خود برنامه دارید؟",
      description:"نیازهای دیتاسنتر و اهداف سرمایشی پروژه خود را با تیم تیواسا در میان بگذارید.", action:"ارتباط با تیم مهندسی", footer:"مهندسی / سرمایش دیتاسنتر",
    },
  },
} as const;

export function getDataCenterContent(locale: Locale) {
  return content[locale];
}
