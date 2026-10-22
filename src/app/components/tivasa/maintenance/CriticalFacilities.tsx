
import type { Locale } from "@/i18n/config";
import { getMaintenanceContent } from "@/i18n/maintenance";

interface CriticalFacilitiesProps {
  locale: Locale;
}

export default function CriticalFacilities({
  locale,
}: CriticalFacilitiesProps) {
  const isRTL = locale === "fa";
  const t = getMaintenanceContent(locale).critical;

  return (
    <section
      id="critical-facilities"
      dir={isRTL ? "rtl" : "ltr"}
      aria-labelledby="critical-facilities-title"
      className="scroll-mt-24 border-b border-foreground/10 bg-background text-foreground"
    >
      <div className="mx-auto max-w-[1800px]">
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

          {/* MAIN CONTENT */}
          <div className="min-w-0 lg:col-span-9">
            {/* COMPACT HEADING */}
            <div className="px-6 py-7 md:px-10 lg:px-12">
              <h2
                id="critical-facilities-title"
                className={`max-w-5xl font-display font-semibold ${
                  isRTL
                    ? "text-[clamp(2rem,3.2vw,3.3rem)] leading-[1.3] tracking-normal"
                    : "text-[clamp(2.3rem,3.8vw,4rem)] leading-[0.96] tracking-[-0.055em]"
                }`}
              >
                {t.title}
                <br />
                <span className="font-normal text-foreground">
                  {t.accent}
                </span>
              </h2>
            </div>

            {/* TWO-COLUMN TECHNICAL GRID */}
            <div className="grid border-t border-foreground/15 md:grid-cols-2">
              {t.practices.map((item, index) => (
                <article
                  key={item.number}
                  className={`group flex min-w-0 items-start gap-4 px-6 py-5 transition-colors duration-300 hover:bg-foreground/[0.025] md:px-8 lg:px-10 ${
                    index < t.practices.length - 1
                      ? "border-b border-foreground/10"
                      : ""
                  } ${
                    index % 2 === 0
                      ? isRTL
                        ? "md:border-l md:border-foreground/10"
                        : "md:border-r md:border-foreground/10"
                      : ""
                  }`}
                >
                  {/* NUMBER */}
                  <div className="flex shrink-0 items-center gap-2 pt-1">
                    <span className="h-5 w-px bg-accent" />

                    <span
                      dir="ltr"
                      className="font-sans text-xs font-semibold tracking-[0.06em] text-accent"
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="min-w-0">
                    <h3
                      className={`font-display font-semibold transition-colors duration-300 group-hover:text-accent ${
                        isRTL
                          ? "text-[clamp(1.35rem,1.8vw,1.75rem)] leading-[1.3] tracking-normal"
                          : "text-[clamp(1.4rem,2vw,1.85rem)] leading-[1.08] tracking-[-0.04em]"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-md font-sans text-[13px] leading-6 text-foreground">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* BOTTOM TECHNICAL NOTE */}
            <div className="flex items-center gap-3 border-t border-foreground/15 px-6 py-3 md:px-10 lg:px-12">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

              <p className="font-sans text-[11px] leading-5 text-foreground/45">
                {t.footer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
