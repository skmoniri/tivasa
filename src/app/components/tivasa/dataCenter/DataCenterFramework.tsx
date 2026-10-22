
import type { Locale } from "@/i18n/config";
import { getDataCenterContent } from "@/i18n/dataCenter";

interface DataCenterFrameworkProps {
  locale: Locale;
}

export default function DataCenterFramework({
  locale,
}: DataCenterFrameworkProps) {
  const isRTL = locale === "fa";
  const t = getDataCenterContent(locale).framework;

  return (
    <section
      id="data-center-framework"
      dir={isRTL ? "rtl" : "ltr"}
      aria-labelledby="data-center-framework-title"
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
              {/* ACCENT RAIL */}
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
                    isRTL
                      ? ""
                      : "uppercase tracking-[0.12em]"
                  }`}
                >
                  {t.label}
                </span>
              </div>

              <p className="mt-4 max-w-xs font-sans text-sm leading-6 text-foreground/50">
                {t.note}
              </p>

              {/* TECHNICAL IDENTIFIER */}
              <div className="mt-8 hidden items-center gap-3 lg:flex">
                <span className="h-px w-7 bg-accent/60" />

                <span
                  dir="ltr"
                  className="font-sans text-[10px] font-medium tracking-[0.12em] text-foreground/35"
                >
                  TIVASA / DC
                </span>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="min-w-0 lg:col-span-9">
            {/* HEADING */}
            <div className="px-6 py-9 md:px-10 lg:px-12">
              <h2
                id="data-center-framework-title"
                className={`max-w-5xl font-display font-semibold ${
                  isRTL
                    ? "text-[clamp(2rem,3.6vw,3.8rem)] leading-[1.3] tracking-normal"
                    : "text-[clamp(2.5rem,4.5vw,4.9rem)] leading-[0.98] tracking-[-0.055em]"
                }`}
              >
                {t.title}

                <br />

                <span className="font-normal text-foreground">
                  {t.accent}
                </span>
              </h2>

              <p className="mt-5 max-w-xl font-sans text-sm leading-7 text-foreground">
                {t.description}
              </p>
            </div>

            {/* ENGINEERING STEPS */}
            <div className="border-t border-foreground/15">
              {t.steps.map((step, index) => (
                <article
                  key={step.number}
                  className="group relative grid gap-4 border-b border-foreground/10 px-6 py-6 transition-colors duration-300 hover:bg-foreground/[0.025] md:grid-cols-[70px_minmax(0,1fr)_minmax(0,1.3fr)] md:items-start md:px-10 lg:px-12"
                >
                  {/* STEP NUMBER */}
                  <span
                    dir="ltr"
                    className="font-display text-2xl font-semibold text-accent"
                  >
                    {step.number}
                  </span>

                  {/* STEP TITLE */}
                  <h3
                    className={`font-display font-semibold transition-colors duration-300 group-hover:text-accent ${
                      isRTL
                        ? "text-xl leading-[1.4] tracking-normal"
                        : "text-2xl leading-[1.1] tracking-[-0.04em]"
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* STEP DESCRIPTION */}
                  <p className="max-w-xl font-sans text-[13px] leading-6 text-foreground transition-colors duration-300 group-hover:text-foreground">
                    {step.description}
                  </p>

                  {/* SUBTLE HOVER ACCENT */}
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0 h-[2px] w-0 bg-accent transition-[width] duration-500 group-hover:w-16 ${
                      isRTL
                        ? "right-6 md:right-10 lg:right-12"
                        : "left-6 md:left-10 lg:left-12"
                    }`}
                  />
                </article>
              ))}
            </div>

            {/* BOTTOM TECHNICAL NOTE */}
            <div className="flex items-start gap-3 px-6 py-5 md:px-10 lg:px-12">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />

              <p className="max-w-2xl font-sans text-[11px] leading-6 text-foreground/45">
                {t.noteBottom}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
