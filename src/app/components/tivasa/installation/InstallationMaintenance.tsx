import type { Locale } from "@/i18n/config";
import { getInstallationData } from "./installationData";

interface Props {
  locale: Locale;
}

const translations = {
  en: {
    label: "Long-Term Performance",
    description: "Supporting system reliability beyond installation.",
    eyebrow: "After Installation",
    headingFirst: "Built for",
    headingSecond: "the long run.",
    warrantyLabel: "01 / Warranty & Support",
    warrantyHeading: "Beyond handover.",
    warrantyDescription:
      "Equipment warranty, technical documentation, fault diagnosis, and after-sales coordination are important considerations throughout the operational life of a VRF system.",
    warrantyNote:
      "Specific warranty and service terms depend on the equipment and project agreement.",
    maintenanceLabel: "02 / Preventive Maintenance",
    maintenanceHeading: "Consistent care.",
    maintenanceDescription:
      "Planned maintenance helps protect system efficiency, identify developing faults, and reduce avoidable operational interruptions.",
  },
  fa: {
    label: "عملکرد بلندمدت",
    description: "حفظ قابلیت اطمینان سیستم پس از پایان نصب.",
    eyebrow: "پس از نصب",
    headingFirst: "طراحی‌شده برای",
    headingSecond: "عملکرد پایدار.",
    warrantyLabel: "۰۱ / گارانتی و پشتیبانی",
    warrantyHeading: "فراتر از تحویل پروژه.",
    warrantyDescription:
      "گارانتی تجهیزات، مستندات فنی، عیب‌یابی و هماهنگی خدمات پس از فروش از ملاحظات مهم در طول دوره بهره‌برداری سیستم VRF هستند.",
    warrantyNote:
      "شرایط دقیق گارانتی و خدمات به تجهیزات و توافق‌نامه هر پروژه بستگی دارد.",
    maintenanceLabel: "۰۲ / نگهداری پیشگیرانه",
    maintenanceHeading: "مراقبت مستمر.",
    maintenanceDescription:
      "نگهداری برنامه‌ریزی‌شده به حفظ بازده سیستم، شناسایی زودهنگام عیوب و کاهش وقفه‌های قابل پیشگیری در بهره‌برداری کمک می‌کند.",
  },
} as const;

export default function InstallationMaintenance({ locale }: Props) {
  const isRTL = locale === "fa";
  const t = translations[locale];
  const { maintenanceItems } = getInstallationData(locale);

  return (
    <section
      id="maintenance"
      dir={isRTL ? "rtl" : "ltr"}
      aria-labelledby="maintenance-title"
      className="border-b border-background/10 bg-surface text-background"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="grid lg:grid-cols-12">
          <aside
            className={`border-b border-background/15 p-6 lg:col-span-3 lg:border-b-0 lg:p-8 ${
              isRTL ? "lg:border-l" : "lg:border-r"
            }`}
          >
            <div className={`relative ${isRTL ? "pr-5" : "pl-5"}`}>
              <span
                className={`absolute bottom-0 top-0 w-px bg-accent/70 ${
                  isRTL ? "right-0" : "left-0"
                }`}
              />
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span
                  className={`font-sans text-xs font-semibold text-accent ${
                    isRTL ? "" : "uppercase tracking-[0.16em]"
                  }`}
                >
                  {t.label}
                </span>
              </div>
              <p className="mt-5 max-w-xs font-sans text-sm leading-6 text-background/55">
                {t.description}
              </p>
            </div>
          </aside>

          <div className="min-w-0 lg:col-span-9">
            <div className="px-6 pb-8 pt-10 md:px-10 md:pt-12 lg:px-12">
              <span
                className={`font-sans text-[10px] font-semibold text-accent ${
                  isRTL ? "" : "uppercase tracking-[0.18em]"
                }`}
              >
                {t.eyebrow}
              </span>
              <h2
                id="maintenance-title"
                className={`mt-5 font-display font-semibold ${
                  isRTL
                    ? "text-[clamp(2.7rem,4.5vw,4.8rem)] leading-[1.4] tracking-normal"
                    : "text-[clamp(2.8rem,5vw,5rem)] leading-[0.92] tracking-[-0.06em]"
                }`}
              >
                {t.headingFirst}
                <br />
                <span className="text-background/35">{t.headingSecond}</span>
              </h2>
            </div>

            <div className="grid border-t border-background/15 md:grid-cols-2">
              {/* WARRANTY */}
              <article
                className={`flex flex-col border-b border-background/15 px-6 py-8 md:border-b-0 md:px-10 lg:px-12 lg:py-10 ${
                  isRTL ? "md:border-l" : "md:border-r"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="h-5 w-px bg-accent" />
                  <span
                    className={`font-sans text-[10px] font-semibold text-accent ${
                      isRTL ? "" : "uppercase tracking-[0.16em]"
                    }`}
                  >
                    {t.warrantyLabel}
                  </span>
                </div>

                <h3
                  className={`mt-6 font-display font-semibold ${
                    isRTL
                      ? "text-[clamp(1.8rem,2.6vw,2.7rem)] leading-[1.4] tracking-normal"
                      : "text-[clamp(1.8rem,2.6vw,2.7rem)] leading-[1.05] tracking-[-0.05em]"
                  }`}
                >
                  {t.warrantyHeading}
                </h3>

                <p className="mt-5 max-w-md font-sans text-sm leading-7 text-background/65">
                  {t.warrantyDescription}
                </p>

                <div className="mt-auto pt-8">
                  <div className="border-t border-background/15 pt-4">
                    <p className="max-w-sm font-sans text-xs leading-6 text-background/40">
                      {t.warrantyNote}
                    </p>
                  </div>
                </div>
              </article>

              {/* MAINTENANCE */}
              <article className="flex flex-col px-6 py-8 md:px-10 lg:px-12 lg:py-10">
                <div className="flex items-center gap-3">
                  <span className="h-5 w-px bg-accent" />
                  <span
                    className={`font-sans text-[10px] font-semibold text-accent ${
                      isRTL ? "" : "uppercase tracking-[0.16em]"
                    }`}
                  >
                    {t.maintenanceLabel}
                  </span>
                </div>

                <h3
                  className={`mt-6 font-display font-semibold ${
                    isRTL
                      ? "text-[clamp(1.8rem,2.6vw,2.7rem)] leading-[1.4] tracking-normal"
                      : "text-[clamp(1.8rem,2.6vw,2.7rem)] leading-[1.05] tracking-[-0.05em]"
                  }`}
                >
                  {t.maintenanceHeading}
                </h3>

                <p className="mt-5 max-w-md font-sans text-sm leading-7 text-background/65">
                  {t.maintenanceDescription}
                </p>

                <ul className="mt-6 border-t border-background/15">
                  {maintenanceItems.map((item, index) => (
                    <li
                      key={index}
                      className="group flex items-start gap-4 border-b border-background/10 py-3 transition-colors duration-300 hover:bg-background/[0.035]"
                    >
                      <span
                        dir="ltr"
                        className="mt-0.5 shrink-0 font-display text-xs font-semibold text-accent"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-sans text-sm leading-6 text-background/65 transition-colors duration-300 group-hover:text-background">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
