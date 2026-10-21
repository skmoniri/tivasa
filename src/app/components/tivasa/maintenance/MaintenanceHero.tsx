
import { ArrowDown } from "lucide-react";

import type { Locale } from "@/i18n/config";
import { getMaintenanceContent } from "@/i18n/maintenance";

interface MaintenanceHeroProps {
  locale: Locale;
}

const heroLabels = {
  en: {
    rail: "VRF Maintenance",
    classification: "Tivasa / Engineering Services",
    category: "VRF / Maintenance",
    eyebrow: "Maintenance Engineering",
    metadata: "Engineering / System Reliability",
  },

  fa: {
    rail: "نگهداری سیستم‌های VRF",
    classification: "تیواسا / خدمات مهندسی",
    category: "VRF / تغمیر و نگهداری",
    eyebrow: "مهندسی نگهداری",
    metadata: "مهندسی / پایداری عملکرد",
  },
} as const;

export default function MaintenanceHero({
  locale,
}: MaintenanceHeroProps) {
  const isRTL = locale === "fa";
  const t = getMaintenanceContent(locale).hero;
  const labels = heroLabels[locale];

  return (
    <section
      id="maintenance-hero"
      dir={isRTL ? "rtl" : "ltr"}
      aria-labelledby="maintenance-hero-title"
      className="relative isolate overflow-hidden border-b border-background/10 bg-surface pt-24 text-background"
      style={{ backgroundColor: "#192b3a" }}
    >
      {/* DESKTOP BACKGROUND — FULL OPACITY */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden bg-cover bg-no-repeat lg:block"
        style={{
          backgroundImage: "url('/HVAC-With-Pipes.png')",
          backgroundPosition: "center 45%",
        }}
      />

      {/* MOBILE / TABLET BACKGROUND */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden lg:hidden"
      >
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: "url('/HVAC-With-Pipes.png')",
            backgroundSize: "cover",
            backgroundPosition: "45% center",
          }}
        />
      </div>

      {/*
        UNIFORM NAVY DARKENING

        Makes the entire image slightly darker while
        preserving its colors and photographic details.
      */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[#0b1f3a]/30"
      />

      {/*
        DESKTOP DIRECTIONAL GRADIENT

        Strongest behind the heading and description.
        Fades smoothly toward the exposed equipment.

        Direction switches for RTL.
      */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          background: isRTL
            ? "linear-gradient(270deg, rgba(7,19,34,0.90) 0%, rgba(7,19,34,0.76) 28%, rgba(7,19,34,0.42) 55%, rgba(7,19,34,0.10) 80%, transparent 100%)"
            : "linear-gradient(90deg, rgba(7,19,34,0.90) 0%, rgba(7,19,34,0.76) 28%, rgba(7,19,34,0.42) 55%, rgba(7,19,34,0.10) 80%, transparent 100%)",
        }}
      />

      {/* MOBILE GRADIENT — PRIORITIZE READABILITY */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 lg:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(7,19,34,0.50) 0%, rgba(7,19,34,0.35) 22%, rgba(7,19,34,0.64) 60%, rgba(7,19,34,0.93) 100%)",
        }}
      />

      {/* STRUCTURAL RAIL */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-0 top-0 hidden w-px bg-accent/70 lg:block ${
          isRTL ? "right-0" : "left-0"
        }`}
      />

      {/* SCANNING LINE */}
      <div
        aria-hidden="true"
        className="tivasa-scan pointer-events-none absolute left-0 top-0 z-30 h-[2px] w-full bg-accent/70"
      />

      {/* MAIN GRID — MATCHED HERO HEIGHT */}
      <div className="relative mx-auto max-w-[1800px]">
        <div className="grid min-h-[calc(90svh-6rem)] grid-cols-1 lg:h-[calc(90svh-6rem)] lg:min-h-[560px] lg:grid-cols-12">
          {/* INDUSTRIAL SIDE RAIL */}
          <aside
            className={`relative z-10 hidden px-6 py-6 lg:col-span-1 lg:flex lg:flex-col lg:justify-between ${
              isRTL
                ? "border-l border-background/15"
                : "border-r border-background/15"
            }`}
          >
            <span
              className={`font-sans text-xs font-medium text-background/70 ${
                isRTL
                  ? "tracking-normal"
                  : "uppercase tracking-[0.16em]"
              }`}
              style={{ writingMode: "vertical-rl" }}
            >
              {labels.rail}
            </span>

            <span
              dir="ltr"
              className="font-sans text-xs font-medium text-background/60"
            >
              T / 02
            </span>
          </aside>

          {/* MAIN CONTENT */}
          <div className="relative z-10 flex min-h-[calc(90svh-6rem)] min-w-0 flex-col justify-between px-5 py-6 md:px-10 md:py-8 lg:col-span-11 lg:h-full lg:min-h-0 lg:px-14 lg:py-9">
            {/* CLASSIFICATION */}
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

                <span
                  className={`font-sans text-[10px] font-semibold text-background/90 md:text-xs ${
                    isRTL
                      ? ""
                      : "uppercase tracking-[0.22em]"
                  }`}
                >
                  {labels.classification}
                </span>
              </div>

              <div
                className={`font-sans text-[10px] font-medium text-background/65 md:text-xs ${
                  isRTL
                    ? "pr-[18px]"
                    : "pl-[18px] uppercase tracking-[0.2em]"
                }`}
              >
                {labels.category}
              </div>
            </div>

            {/* MAIN STATEMENT */}
            <div className="py-8 md:py-10 lg:py-8">
              <div className="relative">
                {/* EDITORIAL MARKER */}
                <div
                  aria-hidden="true"
                  className={`absolute top-0 hidden h-[clamp(3rem,5vw,6rem)] w-[2px] bg-accent md:block ${
                    isRTL ? "-right-5" : "-left-5"
                  }`}
                />

                {/* EYEBROW */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

                  <span
                    className={`font-sans text-[10px] font-medium text-accent ${
                      isRTL
                        ? ""
                        : "uppercase tracking-[0.16em]"
                    }`}
                  >
                    {labels.eyebrow}
                  </span>

                  <span className="h-px w-12 bg-accent/50" />
                </div>

                {/* MAIN HEADING */}
                <h1
                  id="maintenance-hero-title"
                  className={`relative max-w-6xl font-display font-semibold text-background ${
                    isRTL
                      ? "text-[clamp(2rem,4.8vw,4.5rem)] leading-[1.2] tracking-normal"
                      : "text-[clamp(2.3rem,5.1vw,5.5rem)] uppercase leading-[0.98] tracking-[-0.055em]"
                  }`}
                >
                  {t.title}

                  <br />

                  <span className="font-normal">
                    {t.accent}
                  </span>
                </h1>
              </div>

              {/* CONNECTOR + DESCRIPTION */}
              <div
                className={`mt-6 max-w-xl md:mt-8 ${
                  isRTL
                    ? "md:mr-[8%]"
                    : "md:ml-[8%]"
                }`}
              >
                <div className="mb-4 flex items-center">
                  <div className="h-px flex-1 overflow-hidden bg-background/20">
                    <div className="tivasa-line h-full w-full bg-accent" />
                  </div>

                  <span
                    className={`h-2 w-2 shrink-0 rounded-full bg-accent ${
                      isRTL ? "mr-3" : "ml-3"
                    }`}
                  />
                </div>

                {/* FULL-WHITE DESCRIPTION */}
                <p className="font-sans text-sm font-normal leading-7 text-background md:text-base md:leading-8">
                  {t.description}
                </p>
              </div>
            </div>

            {/* BOTTOM METADATA */}
            <div className="flex flex-wrap items-end justify-between gap-5 border-t border-background/25 pt-4">
              <a
                href="#maintenance-strategies"
                className={`group inline-flex items-center gap-4 font-sans text-[10px] font-medium text-background/85 transition-colors duration-300 hover:text-background md:text-xs ${
                  isRTL
                    ? ""
                    : "uppercase tracking-[0.16em]"
                }`}
              >
                <span>{t.secondary}</span>

                <span className="flex h-9 w-9 items-center justify-center border border-background/40 transition-[background-color,border-color] duration-300 group-hover:border-accent group-hover:bg-accent">
                  <ArrowDown
                    size={16}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-y-1"
                  />
                </span>
              </a>

              <div
                className={`flex items-center gap-3 font-sans text-[10px] font-medium text-background/70 md:text-xs ${
                  isRTL
                    ? ""
                    : "uppercase tracking-[0.16em]"
                }`}
              >
                <span>{labels.metadata}</span>

                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
