export const maintenanceTranslations = {
  en: {
    hero: {
      eyebrow: "TIVASA / TECHNICAL SERVICES",
      subtitle: "VRF Maintenance & Service",
      title: "Engineered",
      accent: "for uptime.",
      description:
        "Preventive, predictive and corrective VRF maintenance programs designed for cooling reliability, system performance and critical facilities.",
      primary: "Request Maintenance Consultation",
      secondary: "Explore Programs",
      continuity: "Operational continuity",
    },
    strategies: {
      eyebrow: "01 / MAINTENANCE STRATEGY",
      title: "Three disciplines.",
      accent: "One objective.",
      description:
        "Detect degradation before it becomes an outage. Every intervention is planned, measured and documented.",
      items: [
        {
          number: "01",
          title: "Preventive",
          subtitle: "Scheduled protection",
          description:
            "Scheduled inspection, cleaning and testing based on manufacturer guidance and site conditions.",
          tags: "INSPECT / CLEAN / VERIFY",
        },
        {
          number: "02",
          title: "Predictive",
          subtitle: "Identify the drift",
          description:
            "Analysis of pressures, compressor frequency, current draw, subcooling and superheat to identify developing faults.",
          tags: "MEASURE / ANALYZE / ANTICIPATE",
        },
        {
          number: "03",
          title: "Corrective",
          subtitle: "Restore performance",
          description:
            "Diagnosis and repair under agreed response arrangements, with documented root-cause analysis.",
          tags: "DIAGNOSE / REPAIR / DOCUMENT",
        },
      ],
    },
    schedule: {
      eyebrow: "02 / SERVICE INTERVALS",
      title: "Maintenance",
      accent: "by design.",
      description:
        "Structured inspection intervals, from routine operating checks to full annual performance verification.",
      select: "SELECT SERVICE INTERVAL",
      intervals: [
        {
          number: "01",
          label: "Monthly",
          frequency: "EVERY MONTH",
          title: "Operational review",
          tasks: [
            "Review alarm and event logs.",
            "Check operating parameters through the controller.",
            "Inspect outdoor units, drains and indoor filters.",
            "Verify duty/standby rotation.",
          ],
        },
        {
          number: "02",
          label: "Quarterly",
          frequency: "EVERY 3 MONTHS",
          title: "Mechanical inspection",
          tasks: [
            "Clean indoor filters and outdoor coils.",
            "Inspect condensate pumps and drain lines.",
            "Check fan operation and vibration.",
            "Verify sensors and setpoints.",
            "Check accessible refrigerant joints for leaks.",
          ],
        },
        {
          number: "03",
          label: "Semi-Annual",
          frequency: "EVERY 6 MONTHS",
          title: "Electrical & controls",
          tasks: [
            "Inspect terminals and contactors.",
            "Perform thermal imaging of power connections.",
            "Assess inverter boards and capacitors.",
            "Test communication lines and network integrity.",
            "Verify controllers and gateways.",
          ],
        },
        {
          number: "04",
          label: "Annual",
          frequency: "EVERY 12 MONTHS",
          title: "Full system verification",
          tasks: [
            "Compare performance against commissioning data.",
            "Analyze refrigerant circuits, pressures and superheat/subcooling.",
            "Inspect insulation and pipe supports.",
            "Review firmware.",
            "Simulate module and power-feed failures in redundant systems.",
          ],
        },
      ],
    },
    critical: {
      eyebrow: "03 / CRITICAL FACILITIES",
      title: "Cooling cannot",
      accent: "be an afterthought.",
      description:
        "Live data centers require additional maintenance controls to protect cooling continuity.",
      footer: "OPERATIONAL CONTINUITY",
      practices: [
        {
          number: "01",
          title: "Concurrent maintainability",
          description:
            "Isolate one circuit or module at a time while redundant capacity remains active.",
        },
        {
          number: "02",
          title: "Change control",
          description:
            "Coordinate method statements, risk assessments and rollback procedures with facility operations.",
        },
        {
          number: "03",
          title: "Clean work practices",
          description:
            "Control dust, debris and condensate near sensitive IT equipment.",
        },
        {
          number: "04",
          title: "Standby proving",
          description: "Run standby equipment under load to verify readiness.",
        },
        {
          number: "05",
          title: "Critical spare parts",
          description:
            "Plan availability of sensors, EEV coils, fan motors, PCBs and communication modules.",
        },
      ],
    },
    monitoring: {
      eyebrow: "04 / MONITORING & REPORTING",
      title: "Measured.",
      accent: "Not assumed.",
      description:
        "Where BMS or DCIM integration is available, alarms and operating trends support early fault identification and documented performance review.",
      panel: "PERFORMANCE INDICATORS",
      panelNote: "REFERENCE FRAMEWORK",
      footer: "MEASURE / COMPARE / REPORT",
      indicators: [
        {
          number: "01",
          title: "System availability",
          purpose: "Cooling continuity against the agreed target",
        },
        {
          number: "02",
          title: "Response & repair time",
          purpose: "Responsiveness under the service agreement",
        },
        {
          number: "03",
          title: "Alarm frequency",
          purpose: "Emerging faults and unstable operation",
        },
        {
          number: "04",
          title: "Run-hour balance",
          purpose: "Distribution of wear across modules",
        },
        {
          number: "05",
          title: "Energy trends",
          purpose: "Efficiency losses and control drift",
        },
      ],
    },
    engineering: {
      eyebrow: "05 / TECHNICAL DISCIPLINE",
      title: "Every intervention.",
      accent: "Documented.",
      description:
        "Service observations are connected to engineering documentation and commissioning baselines.",
      items: [
        {
          number: "01",
          title: "Refrigerant management",
          description:
            "Qualified technicians use calibrated equipment and record leaks, charge adjustments and recovered quantities by circuit.",
        },
        {
          number: "02",
          title: "Water-side systems",
          description:
            "Where applicable, inspections include water quality, strainers and flow switches.",
        },
        {
          number: "03",
          title: "Service reporting",
          description:
            "Each visit records work performed, measurements, findings, recommendations and replaced parts.",
        },
        {
          number: "04",
          title: "Performance review",
          description:
            "Periodic summaries identify recurring alarms, run-hour imbalances and energy trends.",
        },
      ],
    },
    contact: {
      eyebrow: "06 / SERVICE AGREEMENTS",
      title: "Reliability starts",
      accent: "with a plan.",
      description:
        "From scheduled preventive visits to broader service coverage with defined emergency response arrangements, remote monitoring and spare-parts provisioning.",
      note: "Programs tailored to facility criticality.",
      action: "Discuss Maintenance Requirements",
      emailSubject: "VRF Maintenance & Service Inquiry",
    },
  },

  fa: {
    hero: {
      eyebrow: "تیواسا / خدمات فنی",
      subtitle: "نگهداری و سرویس سیستم‌های VRF",
      title: "مهندسی‌شده",
      accent: "برای تداوم عملکرد.",
      description:
        "برنامه‌های نگهداری پیشگیرانه، پیش‌بینانه و اصلاحی سیستم‌های VRF با تمرکز بر پایداری سرمایش، عملکرد تجهیزات و نیازهای مراکز حساس.",
      primary: "درخواست مشاوره نگهداری",
      secondary: "بررسی خدمات",
      continuity: "تداوم عملکرد سیستم",
    },
    strategies: {
      eyebrow: "۰۱ / راهبرد نگهداری",
      title: "سه رویکرد.",
      accent: "یک هدف.",
      description:
        "شناسایی افت عملکرد پیش از تبدیل‌شدن آن به توقف سیستم؛ با برنامه‌ریزی، اندازه‌گیری و مستندسازی فعالیت‌ها.",
      items: [
        {
          number: "01",
          title: "پیشگیرانه",
          subtitle: "حفاظت برنامه‌ریزی‌شده",
          description:
            "بازرسی، نظافت و آزمون‌های دوره‌ای مطابق دستورالعمل سازنده و شرایط بهره‌برداری مجموعه.",
          tags: "بازرسی / نظافت / ارزیابی",
        },
        {
          number: "02",
          title: "پیش‌بینانه",
          subtitle: "شناسایی تغییرات عملکرد",
          description:
            "تحلیل روند فشارها، فرکانس کمپرسور، جریان مصرفی، سابکولینگ و سوپرهیت برای شناسایی عیب‌های احتمالی.",
          tags: "اندازه‌گیری / تحلیل / پیش‌بینی",
        },
        {
          number: "03",
          title: "اصلاحی",
          subtitle: "بازیابی عملکرد",
          description:
            "عیب‌یابی و تعمیر طبق شرایط پاسخ‌گویی توافق‌شده همراه با ثبت و تحلیل علت اصلی خرابی.",
          tags: "عیب‌یابی / تعمیر / مستندسازی",
        },
      ],
    },
    schedule: {
      eyebrow: "۰۲ / دوره‌های سرویس",
      title: "نگهداری",
      accent: "بر پایه برنامه.",
      description:
        "برنامه‌ای منظم از بررسی‌های ماهانه تا ارزیابی کامل عملکرد سالانه سیستم.",
      select: "انتخاب دوره سرویس",
      intervals: [
        {
          number: "01",
          label: "ماهانه",
          frequency: "هر ماه",
          title: "بررسی عملکرد",
          tasks: [
            "بررسی سوابق هشدارها و رویدادها.",
            "کنترل پارامترهای عملکرد از طریق کنترلر.",
            "بازرسی یونیت‌های بیرونی، مسیر تخلیه و فیلترهای داخلی.",
            "بررسی گردش عملکرد تجهیزات اصلی و رزرو.",
          ],
        },
        {
          number: "02",
          label: "سه‌ماهه",
          frequency: "هر ۳ ماه",
          title: "بازرسی مکانیکی",
          tasks: [
            "تمیزکاری فیلترهای داخلی و کویل‌های بیرونی.",
            "بررسی پمپ‌های کندانس و مسیرهای تخلیه.",
            "کنترل عملکرد فن و ارتعاشات.",
            "بررسی سنسورها و نقاط تنظیم.",
            "بررسی نشتی مبرد در اتصالات قابل‌دسترسی.",
          ],
        },
        {
          number: "03",
          label: "شش‌ماهه",
          frequency: "هر ۶ ماه",
          title: "برق و کنترل",
          tasks: [
            "بازرسی ترمینال‌ها و کنتاکتورها.",
            "ترموگرافی اتصالات برق.",
            "بررسی بردهای اینورتر و خازن‌ها.",
            "آزمون خطوط ارتباطی و شبکه.",
            "کنترل عملکرد کنترلرها و درگاه‌های ارتباطی.",
          ],
        },
        {
          number: "04",
          label: "سالانه",
          frequency: "هر ۱۲ ماه",
          title: "ارزیابی کامل سیستم",
          tasks: [
            "مقایسه عملکرد با داده‌های راه‌اندازی اولیه.",
            "تحلیل مدار مبرد، فشارها، سوپرهیت و سابکولینگ.",
            "بازرسی عایق‌ها و نگهدارنده‌های لوله.",
            "بررسی میان‌افزار تجهیزات.",
            "شبیه‌سازی خرابی ماژول و منبع تغذیه در سیستم‌های دارای افزونگی.",
          ],
        },
      ],
    },
    critical: {
      eyebrow: "۰۳ / تأسیسات حساس",
      title: "سرمایش پایدار،",
      accent: "یک ضرورت عملیاتی.",
      description:
        "نگهداری در مراکز داده فعال به کنترل‌های ویژه‌ای برای حفظ تداوم سرمایش نیاز دارد.",
      footer: "تداوم بهره‌برداری",
      practices: [
        {
          number: "01",
          title: "قابلیت نگهداری هم‌زمان",
          description:
            "خارج‌کردن تنها یک مدار یا ماژول از سرویس در هر مرحله و حفظ ظرفیت رزرو.",
        },
        {
          number: "02",
          title: "مدیریت تغییرات",
          description:
            "هماهنگی روش اجرا، ارزیابی ریسک و برنامه بازگشت به وضعیت قبلی با تیم بهره‌برداری.",
        },
        {
          number: "03",
          title: "اصول کار تمیز",
          description:
            "کنترل گردوغبار، پسماند و آب کندانس در مجاورت تجهیزات حساس فناوری اطلاعات.",
        },
        {
          number: "04",
          title: "آزمون تجهیزات رزرو",
          description:
            "راه‌اندازی دوره‌ای تجهیزات آماده‌به‌کار زیر بار برای اطمینان از آمادگی آن‌ها.",
        },
        {
          number: "05",
          title: "قطعات یدکی حیاتی",
          description:
            "برنامه‌ریزی برای تأمین سنسورها، کویل شیر انبساط الکترونیکی، موتور فن، برد و ماژول ارتباطی.",
        },
      ],
    },
    monitoring: {
      eyebrow: "۰۴ / پایش و گزارش‌دهی",
      title: "عملکرد واقعی.",
      accent: "قابل‌اندازه‌گیری.",
      description:
        "در صورت اتصال به سامانه مدیریت ساختمان یا زیرساخت مرکز داده، روندهای عملکرد و هشدارها به شناسایی زودهنگام مشکلات کمک می‌کنند.",
      panel: "شاخص‌های عملکرد",
      panelNote: "چارچوب ارزیابی",
      footer: "اندازه‌گیری / مقایسه / گزارش",
      indicators: [
        {
          number: "01",
          title: "دسترس‌پذیری سیستم",
          purpose: "تداوم سرمایش در مقایسه با هدف توافق‌شده",
        },
        {
          number: "02",
          title: "زمان پاسخ و تعمیر",
          purpose: "ارزیابی سرعت خدمات طبق قرارداد",
        },
        {
          number: "03",
          title: "تعداد هشدارها",
          purpose: "شناسایی عیب‌های نوظهور و ناپایداری عملکرد",
        },
        {
          number: "04",
          title: "تعادل ساعات کارکرد",
          purpose: "توزیع یکنواخت استهلاک میان ماژول‌ها",
        },
        {
          number: "05",
          title: "روند مصرف انرژی",
          purpose: "شناسایی افت بازده و تغییرات کنترل",
        },
      ],
    },
    engineering: {
      eyebrow: "۰۵ / رویکرد فنی",
      title: "هر اقدام فنی.",
      accent: "با مستندات دقیق.",
      description:
        "اطلاعات سرویس با مستندات مهندسی و داده‌های راه‌اندازی اولیه مقایسه می‌شوند.",
      items: [
        {
          number: "01",
          title: "مدیریت مبرد",
          description:
            "تکنسین‌های واجد صلاحیت با تجهیزات کالیبره، نشتی‌ها، تغییرات شارژ و مقدار مبرد بازیافت‌شده را برای هر مدار ثبت می‌کنند.",
        },
        {
          number: "02",
          title: "سیستم‌های سمت آب",
          description:
            "در تجهیزات مربوط، کیفیت آب، صافی‌ها و کلیدهای جریان نیز بررسی می‌شوند.",
        },
        {
          number: "03",
          title: "گزارش سرویس",
          description:
            "در هر بازدید، اقدامات، اندازه‌گیری‌ها، یافته‌ها، پیشنهادها و قطعات تعویض‌شده ثبت می‌شوند.",
        },
        {
          number: "04",
          title: "بازبینی عملکرد",
          description:
            "گزارش‌های دوره‌ای هشدارهای تکراری، عدم‌تعادل ساعات کارکرد و روند مصرف انرژی را مشخص می‌کنند.",
        },
      ],
    },
    contact: {
      eyebrow: "۰۶ / قراردادهای خدمات",
      title: "پایداری سیستم،",
      accent: "با یک برنامه آغاز می‌شود.",
      description:
        "از بازدیدهای پیشگیرانه دوره‌ای تا پوشش گسترده خدمات با زمان پاسخ اضطراری توافق‌شده، پایش از راه دور و تأمین قطعات یدکی.",
      note: "برنامه خدمات متناسب با حساسیت هر مجموعه تنظیم می‌شود.",
      action: "مشاوره درباره خدمات نگهداری",
      emailSubject: "درخواست خدمات نگهداری VRF",
    },
  },
};

export type MaintenanceLocale = keyof typeof maintenanceTranslations;

export function getMaintenanceContent(locale: MaintenanceLocale) {
  return maintenanceTranslations[locale];
}
