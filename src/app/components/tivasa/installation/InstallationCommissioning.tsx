import type { Locale } from "@/i18n/config";
import { getInstallationData } from "./installationData";

interface Props {
  locale: Locale;
}

const translations = {
  en: {
    label: "Quality Control",
    description: "Verification is an essential part of technical execution.",
    eyebrow: "Testing / Commissioning",
    headingFirst: "Tested. Verified.",
    headingSecond: "Ready to run.",
    paragraph:
      "Commissioning brings the installation process together. Each technical check contributes to verifying system integrity, configuration, and operating performance.",
  },
  fa: {
    label: "کنترل کیفیت",
    description: "صحت‌سنجی، بخش ضروری اجرای فنی سیستم است.",
    eyebrow: "آزمایش / راه‌اندازی",
    headingFirst: "آزمایش‌شده و تأییدشده.",
    headingSecond: "آماده بهره‌برداری.",
    paragraph:
      "راه‌اندازی، مراحل مختلف نصب را به یکدیگر پیوند می‌دهد. هر بررسی فنی به تأیید یکپارچگی سیستم، پیکربندی صحیح و عملکرد عملیاتی آن کمک می‌کند.",
  },
} as const;

export default function InstallationCommissioning({ locale }: Props) {
  const isRTL = locale === "fa";
  const t = translations[locale];
  const { qualityChecks } = getInstallationData(locale);

  return (
    <section
      id="commissioning"
      dir={isRTL ? "rtl" : "ltr"}
      aria-labelledby="commissioning-title"
      className="border-b border-foreground/10 bg-background text-foreground"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="grid lg:grid-cols-12">
          <aside
            className={`border-b border-foreground/10 p-6 lg:col-span-3 lg:border-b-0 lg:p-8 ${
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
              <p className="mt-5 max-w-xs font-sans text-sm leading-6 text-foreground/55">
                {t.description}
              </p>
            </div>
          </aside>

          <div className="min-w-0 lg:col-span-9">
            <div className="px-6 pb-9 pt-12 md:px-10 md:pt-14 lg:px-12 lg:pb-10">
              <span
                className={`font-sans text-[10px] font-semibold text-accent ${
                  isRTL ? "" : "uppercase tracking-[0.18em]"
                }`}
              >
                {t.eyebrow}
              </span>

              <h2
                id="commissioning-title"
                className={`mt-5 font-display font-semibold ${
                  isRTL
                    ? "text-[clamp(2.5rem,4.5vw,4.8rem)] leading-[1.4] tracking-normal"
                    : "text-[clamp(2.8rem,5vw,5rem)] leading-[0.92] tracking-[-0.06em]"
                }`}
              >
                {t.headingFirst}
                <br />
                <span className="text-foreground/35">{t.headingSecond}</span>
              </h2>

              <p className="mt-6 max-w-2xl font-sans text-sm leading-7 text-foreground/60 md:text-base">
                {t.paragraph}
              </p>
            </div>

            <div className="grid border-t border-foreground/10 sm:grid-cols-2">
              {qualityChecks.map((check, index) => (
                <article
                  key={check.number}
                  className={`group flex min-h-[170px] flex-col border-b border-foreground/10 px-6 py-7 transition-colors duration-300 hover:bg-foreground/[0.025] md:px-10 lg:px-12 ${
                    index % 2 === 0
                      ? isRTL
                        ? "sm:border-l"
                        : "sm:border-r"
                      : ""
                  }`}
                >
                  <span
                    dir="ltr"
                    className="w-fit font-display text-lg font-semibold tracking-[-0.04em] text-accent"
                  >
                    {check.number}
                  </span>

                  <div className="mt-6">
                    <h3
                      className={`font-display font-semibold ${
                        isRTL
                          ? "text-xl leading-[1.4] tracking-normal md:text-2xl"
                          : "text-xl leading-[1.1] tracking-[-0.04em] md:text-2xl"
                      }`}
                    >
                      {check.title}
                    </h3>
                    <p className="mt-3 max-w-md font-sans text-sm leading-6 text-foreground/55">
                      {check.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
