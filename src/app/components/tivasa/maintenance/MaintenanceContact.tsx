import { ArrowUpLeft, ArrowUpRight, Mail } from "lucide-react";

import type { Locale } from "@/i18n/config";
import { getMaintenanceContent } from "@/i18n/maintenance";

const EMAIL = "Tetacompany1@gmail.com";

interface MaintenanceContactProps {
  locale: Locale;
}

export default function MaintenanceContact({
  locale,
}: MaintenanceContactProps) {
  const isRTL = locale === "fa";
  const t = getMaintenanceContent(locale).contact;

  const DirectionArrow = isRTL ? ArrowUpLeft : ArrowUpRight;

  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
    t.emailSubject,
  )}`;

  return (
    <section
      id="maintenance-contact"
      dir={isRTL ? "rtl" : "ltr"}
      aria-labelledby="maintenance-contact-title"
      className="relative scroll-mt-24 overflow-hidden bg-surface text-background"
    >
      {/* SUBTLE BACKGROUND STRUCTURE */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-y-0 left-1/2 w-px bg-background/[0.025]" />

        <div className="absolute right-0 top-0 h-40 w-40 border-b border-l border-background/[0.035]" />
      </div>

      <div className="relative mx-auto max-w-[1800px]">
        <div className="grid lg:grid-cols-12">
          {/* SECTION MARKER */}
          <aside
            className={`border-b border-background/15 p-6 lg:col-span-3 lg:border-b-0 lg:p-8 ${
              isRTL ? "lg:border-l" : "lg:border-r"
            }`}
          >
            <div className={`relative ${isRTL ? "pr-5" : "pl-5"}`}>
              {/* RED VERTICAL RAIL */}
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

              {/* TECHNICAL IDENTIFIER */}
              <div className="mt-6 flex items-center gap-3 text-background/40">
                <Mail
                  size={16}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="shrink-0 text-accent"
                />

                <span
                  dir="ltr"
                  className="font-sans text-[10px] font-semibold tracking-[0.14em]"
                >
                  SERVICE / TIVASA
                </span>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="min-w-0 lg:col-span-9">
            {/* EDITORIAL STATEMENT */}
            <div className="px-6 pb-7 pt-9 md:px-10 lg:px-12 lg:pt-11">
              <span
                className={`font-sans text-[10px] font-semibold text-accent ${
                  isRTL ? "" : "uppercase tracking-[0.18em]"
                }`}
              >
                {t.eyebrow}
              </span>

              <h2
                id="maintenance-contact-title"
                className={`mt-4 max-w-5xl font-display font-semibold ${
                  isRTL
                    ? "text-[clamp(2.2rem,3.7vw,3.9rem)] leading-[1.3] tracking-normal"
                    : "text-[clamp(2.7rem,4.7vw,5rem)] leading-[0.96] tracking-[-0.06em]"
                }`}
              >
                {t.title}
                <br />

                <span className="font-normal text-background/40">
                  {t.accent}
                </span>
              </h2>
            </div>

            {/* CONTACT ACTION ROW */}
            <div className="grid gap-6 border-t border-background/15 px-6 py-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:px-10 lg:px-12">
              {/* DESCRIPTION */}
              <div className="max-w-xl">
                <p className="font-sans text-sm leading-7 text-background/65">
                  {t.description}
                </p>

                <p className="mt-2 font-sans text-xs leading-6 text-background/35">
                  {t.note}
                </p>
              </div>

              {/* PRIMARY CTA */}
              <a
                href={mailto}
                className="group relative inline-flex min-h-[58px] min-w-[220px] items-center justify-between gap-8 overflow-hidden bg-accent px-6 font-sans text-sm font-semibold text-white transition-colors duration-200 hover:bg-background hover:text-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <span className="relative z-10">{t.action}</span>

                <DirectionArrow
                  size={20}
                  strokeWidth={1.75}
                  aria-hidden="true"
                  className="relative z-10 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5"
                />

                {/* BUTTON ACCENT */}
                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 h-[3px] w-12 bg-white/35 transition-colors duration-200 group-hover:bg-accent ${
                    isRTL ? "right-0" : "left-0"
                  }`}
                />
              </a>
            </div>

            {/* BOTTOM TECHNICAL RAIL */}
            <div className="flex items-center justify-between gap-4 border-t border-background/10 px-6 py-3 md:px-10 lg:px-12">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />

                <span
                  dir="ltr"
                  className="font-sans text-[10px] font-medium tracking-[0.12em] text-background/35"
                >
                  ENGINEERING / MAINTENANCE
                </span>
              </div>

              <span
                dir="ltr"
                className="font-sans text-[10px] font-medium tracking-[0.12em] text-background/25"
              >
                TIVASA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
