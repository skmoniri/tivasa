import type { Locale } from "@/i18n/config";
import { getMaintenanceContent } from "@/i18n/maintenance";

interface EngineeringServiceProps {
  locale: Locale;
}

export default function EngineeringService({
  locale,
}: EngineeringServiceProps) {
  const isRTL = locale === "fa";
  const t = getMaintenanceContent(locale).engineering;

  return (
    <section
      id="engineering-service"
      dir={isRTL ? "rtl" : "ltr"}
      aria-labelledby="engineering-service-title"
      className="scroll-mt-24 border-b border-foreground/10 bg-background text-foreground"
    >
      <div className="mx-auto max-w-[1800px]">
        {/* INTRODUCTION */}
        <div className="grid lg:grid-cols-12">
          {/* SECTION MARKER */}
          <aside
            className={`border-b border-foreground/10 p-6 lg:col-span-3 lg:border-b-0 lg:p-8 ${
              isRTL ? "lg:border-l" : "lg:border-r"
            }`}
          >
            <div className={`relative ${isRTL ? "pr-5" : "pl-5"}`}>
              <span
                aria-hidden="true"
                className={`absolute inset-y-0 w-px bg-accent/70 ${
                  isRTL ? "right-0" : "left-0"
                }`}
              />

              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

                <span
                  className={`font-sans text-sm font-semibold text-accent ${
                    isRTL ? "" : "uppercase tracking-[0.16em]"
                  }`}
                >
                  {t.eyebrow}
                </span>
              </div>

              <p className="mt-4 max-w-xs font-sans text-sm leading-6 text-foreground/55">
                {t.description}
              </p>
            </div>
          </aside>

          {/* EDITORIAL HEADING */}
          <div className="min-w-0 px-6 py-8 md:px-10 lg:col-span-9 lg:px-12 lg:py-9">
            <h2
              id="engineering-service-title"
              className={`max-w-5xl font-display font-semibold ${
                isRTL
                  ? "text-[clamp(2rem,3.2vw,3.3rem)] leading-[1.3] tracking-normal"
                  : "text-[clamp(2.3rem,3.8vw,4rem)] leading-[0.96] tracking-[-0.055em]"
              }`}
            >
              {t.title}
              <br />

              <span className="font-normal text-foreground/35">{t.accent}</span>
            </h2>
          </div>
        </div>

        {/* ENGINEERING CAPABILITIES */}
        <div className="grid border-t border-foreground/15 sm:grid-cols-2">
          {t.items.map((item, index) => (
            <article
              key={item.number}
              className={`group relative flex min-w-0 items-start gap-5 px-6 py-6 transition-colors duration-300 hover:bg-foreground/[0.025] md:px-10 lg:px-12 ${
                index < t.items.length - 2
                  ? "border-b border-foreground/10"
                  : ""
              } ${
                index % 2 === 0
                  ? isRTL
                    ? "sm:border-l sm:border-foreground/10"
                    : "sm:border-r sm:border-foreground/10"
                  : ""
              }`}
            >
              {/* NUMBER */}
              <div className="flex shrink-0 items-start gap-3 pt-1">
                <span className="h-7 w-px bg-accent" />

                <span
                  dir="ltr"
                  className="font-display text-2xl font-semibold leading-none tracking-[-0.04em] text-foreground/20 transition-colors duration-300 group-hover:text-accent"
                >
                  {item.number}
                </span>
              </div>

              {/* CONTENT */}
              <div className="min-w-0">
                <h3
                  className={`font-display font-semibold transition-colors duration-300 group-hover:text-accent ${
                    isRTL
                      ? "text-[clamp(1.4rem,2vw,1.9rem)] leading-[1.3] tracking-normal"
                      : "text-[clamp(1.5rem,2.2vw,2rem)] leading-[1.08] tracking-[-0.04em]"
                  }`}
                >
                  {item.title}
                </h3>

                <p className="mt-3 max-w-xl font-sans text-[13px] leading-6 text-foreground/55">
                  {item.description}
                </p>
              </div>

              {/* HOVER INDICATOR */}
              <span
                aria-hidden="true"
                className={`absolute bottom-0 h-[2px] w-0 bg-accent transition-[width] duration-300 group-hover:w-12 ${
                  isRTL
                    ? "right-6 md:right-10 lg:right-12"
                    : "left-6 md:left-10 lg:left-12"
                }`}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
