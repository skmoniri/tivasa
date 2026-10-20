
import type { Locale } from "@/i18n/config";
import { getDatabaseContent } from "@/i18n/database";

interface DatabaseExperienceProps {
  locale: Locale;
}

export default function DatabaseExperience({
  locale,
}: DatabaseExperienceProps) {
  const isRTL = locale === "fa";
  const t = getDatabaseContent(locale).experience;

  const experienceItems = [
    t.first,
    t.second,
    t.third,
  ];

  return (
    <section
      id="database-experience"
      dir={isRTL ? "rtl" : "ltr"}
      aria-labelledby="database-experience-title"
      className="scroll-mt-24 border-b border-background/10 bg-surface text-background"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="grid lg:grid-cols-12">

          {/* SECTION MARKER */}
          <aside
            className={`border-b border-background/15 p-6 lg:col-span-3 lg:border-b-0 lg:p-8 ${
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

              {/* TECHNICAL IDENTIFIER */}
              <p
                dir="ltr"
                className={`mt-5 font-sans text-[10px] tracking-[0.12em] text-background/40 ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                {t.eyebrow}
              </p>

              <div className="mt-8 hidden items-center gap-3 lg:flex">
                <span className="h-px w-7 bg-accent/60" />

                <span
                  dir="ltr"
                  className="font-sans text-[10px] font-medium tracking-[0.12em] text-background/30"
                >
                  TIVASA / DC
                </span>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="min-w-0 px-6 py-9 md:px-10 lg:col-span-9 lg:px-12 lg:py-12">

            {/* HEADING */}
            <h2
              id="database-experience-title"
              className={`max-w-5xl font-display font-semibold ${
                isRTL
                  ? "text-[clamp(2rem,3.6vw,3.8rem)] leading-[1.3] tracking-normal"
                  : "text-[clamp(2.5rem,4.5vw,4.9rem)] leading-[0.98] tracking-[-0.055em]"
              }`}
            >
              {t.title}

              <br />

              <span className="font-normal text-background/45">
                {t.accent}
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-3xl font-sans text-sm leading-7 text-background/65">
              {t.description}
            </p>

            {/* EXPERIENCE CARDS */}
            <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden border border-background/15 bg-background/15 sm:grid-cols-3">
              {experienceItems.map((label, index) => (
                <div
                  key={index}
                  className="group relative flex min-w-0 flex-col bg-foreground/60 px-5 py-6 transition-colors duration-300 hover:bg-foreground/85 md:px-6"
                >
                  {/* NUMBER */}
                  <div className="flex items-center gap-3">
                    <span className="h-6 w-px bg-accent" />

                    <span
                      dir="ltr"
                      className="font-sans text-xs font-semibold tracking-[0.08em] text-accent"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* ITEM TITLE */}
                  <p
                    className={`mt-5 font-display text-lg font-semibold text-background transition-colors duration-300 group-hover:text-background sm:text-xl ${
                      isRTL
                        ? "leading-[1.5] tracking-normal"
                        : "leading-[1.15] tracking-[-0.035em]"
                    }`}
                  >
                    {label}
                  </p>

                  {/* ANIMATED ACCENT LINE */}
                  <div className="mt-auto pt-7">
                    <div className="h-px w-full overflow-hidden bg-background/15">
                      <div
                        className={`h-full w-1/3 bg-accent transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-[3] ${
                          isRTL
                            ? "origin-right"
                            : "origin-left"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* BOTTOM NOTE */}
            <div className="mt-5 flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" />

              <p className="max-w-3xl font-sans text-[11px] leading-6 text-background/40">
                {t.note}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
