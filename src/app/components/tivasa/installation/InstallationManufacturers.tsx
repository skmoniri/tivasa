import { ArrowUpLeft, ArrowUpRight } from "lucide-react";

import type { Locale } from "@/i18n/config";
import { getInstallationData } from "./installationData";

interface Props {
  locale: Locale;
}

const translations = {
  en: {
    label: "VRF Manufacturers",
    description:
      "Supporting precise installation across leading VRF manufacturers.",
    headingFirst: "Systems across",
    headingSecond: "leading manufacturers.",
    paragraph:
      "Equipment selection and installation requirements vary by manufacturer and system configuration.",
    disclaimer:
      "Manufacturer names identify VRF equipment brands; they do not imply formal endorsement or certification.",
  },
  fa: {
    label: "تولیدکنندگان سیستم‌های VRF",
    description: "اجرای دقیق سیستم‌های VRF از تولیدکنندگان مطرح.",
    headingFirst: "اجرای سیستم‌های",
    headingSecond: "تولیدکنندگان مطرح.",
    paragraph:
      "انتخاب تجهیزات و الزامات نصب با توجه به تولیدکننده و پیکربندی هر سیستم متفاوت است.",
    disclaimer:
      "نام تولیدکنندگان صرفاً برای معرفی برندهای تجهیزات VRF درج شده و به معنای تأیید رسمی یا برخورداری از گواهی همکاری با آن‌ها نیست.",
  },
} as const;

export default function InstallationManufacturers({ locale }: Props) {
  const isRTL = locale === "fa";
  const t = translations[locale];
  const { brands } = getInstallationData(locale);

  const DirectionArrow = isRTL ? ArrowUpLeft : ArrowUpRight;

  return (
    <section
      id="manufacturers"
      dir={isRTL ? "rtl" : "ltr"}
      aria-labelledby="manufacturers-title"
      className="border-b border-foreground/10 bg-background text-foreground"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="grid lg:grid-cols-12">
          {/* SECTION MARKER */}
          <aside
            className={`border-b border-foreground/10 p-6 lg:col-span-3 lg:border-b-0 lg:p-10 ${
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
                  className={`font-sans text-sm font-semibold text-accent ${
                    isRTL ? "" : "uppercase tracking-[0.16em]"
                  }`}
                >
                  {t.label}
                </span>
              </div>

              <p className="mt-5 max-w-xs font-sans text-sm leading-6 text-foreground/55">
                {t.description}
              </p>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="p-6 py-16 md:p-10 md:py-20 lg:col-span-9 lg:p-16 lg:py-24">
            <h2
              id="manufacturers-title"
              className={`max-w-3xl font-display font-semibold ${
                isRTL
                  ? "text-[clamp(2.5rem,4.5vw,4.8rem)] leading-[1.4] tracking-normal"
                  : "text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] tracking-[-0.055em]"
              }`}
            >
              {t.headingFirst}
              <br />
              <span className="text-foreground/35">{t.headingSecond}</span>
            </h2>

            <p className="mt-8 max-w-2xl font-sans text-base leading-7 text-foreground/55">
              {t.paragraph}
            </p>

            {/* MANUFACTURER GRID */}
            <div
              className={`mt-12 grid grid-cols-2 border-t border-foreground/15 sm:grid-cols-3 lg:grid-cols-5 ${
                isRTL ? "border-r" : "border-l"
              }`}
            >
              {brands.map((brand, index) => (
                <div
                  key={brand}
                  className={`group relative flex min-h-28 items-center justify-center overflow-hidden border-b border-foreground/15 px-4 py-8 transition-colors duration-500 hover:bg-foreground/[0.025] ${
                    isRTL ? "border-l" : "border-r"
                  }`}
                >
                  <span
                    dir="ltr"
                    className={`absolute top-3 font-sans text-[9px] font-medium tracking-[0.12em] text-foreground/25 ${
                      isRTL ? "right-3" : "left-3"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    dir="ltr"
                    className="relative z-10 text-center font-display text-lg font-semibold tracking-[-0.04em] text-foreground/65 transition-colors duration-300 group-hover:text-foreground md:text-xl"
                  >
                    {brand}
                  </span>

                  <DirectionArrow
                    size={15}
                    strokeWidth={1.3}
                    aria-hidden="true"
                    className={`absolute top-3 text-foreground/20 transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:text-accent ${
                      isRTL
                        ? "left-3 group-hover:-translate-x-0.5"
                        : "right-3 group-hover:translate-x-0.5"
                    }`}
                  />

                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0 h-[2px] w-0 bg-accent transition-[width] duration-500 ease-out group-hover:w-full ${
                      isRTL ? "right-0" : "left-0"
                    }`}
                  />
                </div>
              ))}
            </div>

            <p className="mt-5 font-sans text-xs leading-6 text-foreground/40">
              {t.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
