
"use client";

import Image from "next/image";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";

import type { Locale } from "@/i18n/config";
import { getMaintenanceContent } from "@/i18n/maintenance";

interface MaintenanceStrategiesProps {
  locale: Locale;
}

const inspectionLabels = {
  en: {
    title: "Equipment Inspection",
    detail: "HVAC / Internal Components",
    alt: "Open ceiling cassette HVAC unit showing its internal fan, insulation, wiring and mechanical components",
  },
  fa: {
    title: "بازرسی تجهیزات",
    detail: "HVAC / قطعات داخلی",
    alt: "نمای داخلی یونیت کاستی سقفی شامل فن، عایق‌کاری، سیم‌کشی و اجزای مکانیکی",
  },
} as const;

export default function MaintenanceStrategies({
  locale,
}: MaintenanceStrategiesProps) {
  const isRTL = locale === "fa";
  const t = getMaintenanceContent(locale).strategies;
  const inspection = inspectionLabels[locale];

  const DirectionArrow = isRTL ? ArrowUpLeft : ArrowUpRight;

  return (
    <section
      id="maintenance-strategies"
      dir={isRTL ? "rtl" : "ltr"}
      aria-labelledby="maintenance-strategies-title"
      className="scroll-mt-24 border-b border-foreground/10 bg-background text-foreground"
    >
      <div className="mx-auto max-w-[1800px]">
        {/* INTRO */}
        <div className="grid lg:grid-cols-12">
          {/* SECTION MARKER */}
          <aside
            className={`tivasa-about-reveal border-b border-foreground/10 p-6 lg:col-span-3 lg:border-b-0 lg:p-8 ${
              isRTL ? "lg:border-l" : "lg:border-r"
            }`}
          >
            <div className={`relative ${isRTL ? "pr-4" : "pl-4"}`}>
              {/* RED VERTICAL RAIL */}
              <span
                aria-hidden="true"
                className={`absolute inset-y-0 w-px bg-accent ${
                  isRTL ? "right-0" : "left-0"
                }`}
              />

              {/* SECTION LABEL */}
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

                <span
                  className={`font-sans text-sm font-semibold text-accent ${
                    isRTL ? "" : "uppercase tracking-[0.16em]"
                  }`}
                >
                  {t.eyebrow}
                </span>
              </div>

              {/* SECTION DESCRIPTION */}
              <p className="mt-4 max-w-[240px] font-sans text-sm leading-6 text-foreground/45">
                {t.description}
              </p>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="tivasa-about-reveal min-w-0 px-6 py-9 md:px-10 md:py-11 lg:col-span-9 lg:px-12 lg:py-12">
            {/* MAIN HEADING */}
            <h2
              id="maintenance-strategies-title"
              className={`max-w-6xl font-display font-semibold ${
                isRTL
                  ? "text-[clamp(2.4rem,4.2vw,4.5rem)] leading-[1.3] tracking-normal"
                  : "text-[clamp(3rem,5vw,5.5rem)] leading-[0.92] tracking-[-0.06em]"
              }`}
            >
              {t.title}

              <br />

              <span
                className={`font-normal text-foreground/75 ${
                  isRTL ? "md:mr-[3%]" : "md:ml-[3%]"
                }`}
              >
                {t.accent}
              </span>
            </h2>

            {/*
              SUPPORTING CONTENT + TECHNICAL PHOTOGRAPH

              Desktop: description left, image right.
              Mobile: stacked naturally.

              The photograph stays contained instead of
              becoming another full-width background.
            */}
            <div className="mt-7 grid gap-6 border-t border-foreground/10 pt-5 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:items-start md:gap-8">
              {/* SUPPORTING TEXT */}
              <div className="flex min-w-0 flex-col items-start justify-between gap-6">
                <p className="max-w-xl font-sans text-sm leading-7 text-foreground/55">
                  {t.description}
                </p>

                {/* THREE APPROACHES IDENTIFIER */}
                <div className="flex items-center gap-3">
                  <span className="h-px w-7 bg-accent" />

                  <span
                    className={`font-sans text-[10px] font-semibold text-foreground/35 ${
                      isRTL ? "" : "uppercase tracking-[0.15em]"
                    }`}
                  >
                    {isRTL
                      ? "سه رویکرد نگهداری"
                      : "Three maintenance approaches"}
                  </span>
                </div>
              </div>

              {/* OPEN HVAC CASSETTE PHOTO */}
              <figure className="group/inspection min-w-0">
                <div className="relative h-[175px] overflow-hidden border border-foreground/10 bg-foreground/[0.035] sm:h-[195px] md:h-[185px] lg:h-[205px]">
                  <Image
                    src="/Open-HVAC-cassette.png"
                    alt={inspection.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 45vw, 35vw"
                    className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/inspection:scale-[1.045]"
                  />

                  {/* SUBTLE INNER FRAME */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-2 border border-white/20"
                  />

                  {/* TOP TECHNICAL IDENTIFIER */}
                  <div
                    className={`pointer-events-none absolute top-3 flex items-center gap-2 bg-[#102236]/85 px-3 py-2 ${
                      isRTL ? "right-3" : "left-3"
                    }`}
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

                    <span
                      dir="ltr"
                      className="font-sans text-[9px] font-semibold uppercase tracking-[0.14em] text-white"
                    >
                      HVAC / INSPECTION
                    </span>
                  </div>

                  {/* RED CORNER ACCENT */}
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute bottom-0 h-[3px] w-14 bg-accent ${
                      isRTL ? "right-0" : "left-0"
                    }`}
                  />
                </div>

                {/* IMAGE CAPTION */}
                <figcaption className="mt-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                  <span
                    className={`font-sans text-[10px] font-semibold text-foreground/65 ${
                      isRTL ? "" : "uppercase tracking-[0.08em]"
                    }`}
                  >
                    {inspection.title}
                  </span>

                  <span
                    className="font-sans text-[9px] font-medium text-foreground/35"
                  >
                    {inspection.detail}
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/* STRATEGY CARDS */}
        <div className="grid border-t border-foreground/10 md:grid-cols-3">
          {t.items.map((item, index) => (
            <article
              key={item.number}
              className={`tivasa-capability-group tivasa-about-reveal group relative flex min-w-0 flex-col overflow-hidden p-6 transition-colors duration-500 hover:bg-foreground/[0.018] md:p-8 ${
                index !== t.items.length - 1
                  ? `border-b border-foreground/10 md:border-b-0 ${
                      isRTL ? "md:border-l" : "md:border-r"
                    }`
                  : ""
              }`}
              style={{
                animationDelay: `${120 + index * 80}ms`,
              }}
            >
              {/* NUMBER */}
              <div className="mb-8 flex items-center gap-3">
                <span className="h-6 w-px bg-accent" />

                <span
                  dir="ltr"
                  className="font-sans text-lg font-semibold tracking-[0.06em] text-accent"
                >
                  {item.number}
                </span>
              </div>

              {/* SUBTITLE */}
              <span
                className={`mb-3 font-sans text-[10px] font-semibold text-accent ${
                  isRTL ? "" : "uppercase tracking-[0.14em]"
                }`}
              >
                {item.subtitle}
              </span>

              {/* HEADING */}
              <div className="flex items-start justify-between gap-3">
                <h3
                  className={`min-w-0 font-display font-semibold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isRTL
                      ? "text-[clamp(1.7rem,2.8vw,2.5rem)] leading-[1.3] tracking-normal group-hover:-translate-x-1"
                      : "text-[clamp(1.8rem,3vw,2.6rem)] leading-[1] tracking-[-0.04em] group-hover:translate-x-1"
                  }`}
                >
                  {item.title}
                </h3>

                <DirectionArrow
                  size={19}
                  strokeWidth={1.25}
                  aria-hidden="true"
                  className={`mt-1 shrink-0 translate-y-1 text-foreground/15 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-accent group-hover:opacity-100 ${
                    isRTL ? "translate-x-1" : "-translate-x-1"
                  }`}
                />
              </div>

              {/* DESCRIPTION */}
              <p className="mt-4 max-w-sm font-sans text-sm leading-6 text-foreground/55 transition-colors duration-500 group-hover:text-foreground/65">
                {item.description}
              </p>

              {/* BOTTOM ACCENT + TAGS */}
              <div className="mt-auto pt-7">
                <div className="h-px w-full overflow-hidden bg-foreground/10">
                  <div
                    className={`h-full w-1/3 bg-accent transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-[3] ${
                      isRTL ? "origin-right" : "origin-left"
                    }`}
                  />
                </div>

                <p
                  className={`mt-3 font-sans text-[10px] leading-5 text-foreground/35 ${
                    isRTL ? "" : "uppercase tracking-[0.1em]"
                  }`}
                >
                  {item.tags}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
