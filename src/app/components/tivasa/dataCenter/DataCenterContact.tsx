
import Link from "next/link";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";

import type { Locale } from "@/i18n/config";
import { localizeHref } from "@/i18n/config";
import { getDataCenterContent } from "@/i18n/dataCenter";

interface DataCenterContactProps {
  locale: Locale;
}

export default function DataCenterContact({
  locale,
}: DataCenterContactProps) {
  const isRTL = locale === "fa";
  const t = getDataCenterContent(locale).contact;

  const DirectionArrow = isRTL ? ArrowUpLeft : ArrowUpRight;

  return (
    <section
      id="data-center-contact"
      dir={isRTL ? "rtl" : "ltr"}
      aria-labelledby="data-center-contact-title"
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
            <div className={`relative ${
              isRTL ? "pr-5" : "pl-5"
            }`}>
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
              <div className="mt-7 hidden items-center gap-3 lg:flex">
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
              <span
                className={`font-sans text-[10px] font-semibold text-accent ${
                  isRTL
                    ? ""
                    : "uppercase tracking-[0.15em]"
                }`}
              >
                {t.eyebrow}
              </span>

              <h2
                id="data-center-contact-title"
                className={`mt-4 max-w-5xl font-display font-semibold ${
                  isRTL
                    ? "text-[clamp(2rem,3.6vw,3.8rem)] leading-[1.3] tracking-normal"
                    : "text-[clamp(2.5rem,4.5vw,4.9rem)] leading-[0.98] tracking-[-0.055em]"
                }`}
              >
                {t.title}

                <br />

                <span className="font-normal text-foreground/40">
                  {t.accent}
                </span>
              </h2>
            </div>

            {/* CONSULTATION ACTION */}
            <div className="flex flex-wrap items-center justify-between gap-6 border-t border-foreground/15 px-6 py-6 md:px-10 lg:px-12">

              {/* DESCRIPTION */}
              <p className="max-w-lg font-sans text-sm leading-7 text-foreground/60">
                {t.description}
              </p>

              {/* CONTACT BUTTON */}
              <Link
                href={localizeHref("/#contact", locale)}
                className="group relative inline-flex min-h-[52px] min-w-[210px] items-center justify-between gap-7 overflow-hidden bg-accent px-5 font-sans text-sm font-semibold text-white transition-colors duration-300 hover:bg-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <span className="relative z-10">
                  {t.action}
                </span>

                <DirectionArrow
                  size={18}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="relative z-10 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5"
                />

                {/* BOTTOM ACCENT */}
                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 h-[2px] w-10 bg-white/40 transition-[width] duration-300 group-hover:w-full ${
                    isRTL ? "right-0" : "left-0"
                  }`}
                />
              </Link>
            </div>

            {/* BOTTOM TECHNICAL FOOTER */}
            <div className="flex items-center justify-between gap-4 border-t border-foreground/10 px-6 py-3 md:px-10 lg:px-12">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />

                <span
                  className={`font-sans text-[10px] font-medium text-foreground/40 ${
                    isRTL
                      ? ""
                      : "uppercase tracking-[0.12em]"
                  }`}
                >
                  {t.footer}
                </span>
              </div>

              <span
                dir="ltr"
                className="hidden font-sans text-[10px] font-medium tracking-[0.12em] text-foreground/25 sm:block"
              >
                TIVASA / DATA CENTER
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
