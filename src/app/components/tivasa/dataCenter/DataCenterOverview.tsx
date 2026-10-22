
import type { Locale } from "@/i18n/config";
import { getDataCenterContent } from "@/i18n/dataCenter";

interface DataCenterOverviewProps {
  locale: Locale;
}

export default function DataCenterOverview({
  locale,
}: DataCenterOverviewProps) {
  const isRTL = locale === "fa";
  const t = getDataCenterContent(locale).intro;

  return (
    <section
      id="data-center-overview"
      dir={isRTL ? "rtl" : "ltr"}
      aria-labelledby="data-center-overview-title"
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
            <div
              className={`relative ${
                isRTL ? "pr-5" : "pl-5"
              }`}
            >
              {/* VERTICAL ACCENT RAIL */}
              <span
                aria-hidden="true"
                className={`absolute inset-y-0 w-px bg-accent/70 ${
                  isRTL ? "right-0" : "left-0"
                }`}
              />

              {/* LABEL AND CIRCULAR DOT */}
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                />

                <span
                  className={`font-sans text-sm font-semibold text-accent ${
                    isRTL
                      ? ""
                      : "uppercase tracking-[0.14em]"
                  }`}
                >
                  {t.label}
                </span>
              </div>

              {/* SECTION DESCRIPTION */}
              <p className="mt-4 max-w-xs font-sans text-sm leading-6 text-foreground/45">
                {t.note}
              </p>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="min-w-0 px-6 py-9 md:px-10 lg:col-span-9 lg:px-12 lg:py-12">

            {/* HEADING */}
            <h2
              id="data-center-overview-title"
              className={`max-w-5xl font-display font-semibold ${
                isRTL
                  ? "text-[clamp(2rem,4vw,4rem)] leading-[1.3] tracking-normal"
                  : "text-[clamp(2.7rem,5vw,5.5rem)] leading-[0.98] tracking-[-0.055em]"
              }`}
            >
              {t.title}

              <br />

              <span className="font-normal text-foreground">
                {t.accent}
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-3xl border-t border-foreground/10 pt-6 font-sans text-sm leading-7 text-foreground md:text-base md:leading-8">
              {t.description}
            </p>

            {/* TECHNICAL MARKERS */}
            <div className="mt-7 flex flex-wrap gap-2">
              {t.markers.map((marker, index) => (
                <span
                  key={index}
                  className={`border border-foreground/15 px-3 py-2 font-sans text-[10px] font-semibold text-foreground/60 ${
                    isRTL
                      ? ""
                      : "uppercase tracking-[0.12em]"
                  }`}
                >
                  {marker}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
