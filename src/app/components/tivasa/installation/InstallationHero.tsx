import Image from "next/image";
import { ArrowDown } from "lucide-react";

import type { Locale } from "@/i18n/config";

interface InstallationHeroProps {
  locale: Locale;
}

const translations = {
  en: {
    rail: "VRF Installation",
    classification: "Tivasa / Engineering Services",
    category: "VRF / Installation",
    eyebrow: "Installation Engineering",
    headingFirst: "Installed",
    headingSecond: "with precision.",
    description:
      "Tivasa provides engineering-led VRF installation and commissioning for commercial and industrial environments, integrating system planning, equipment installation, technical testing and final commissioning.",
    explore: "Explore our approach",
    metadata: "Engineering / Commissioning",
  },
  fa: {
    rail: "نصب سیستم‌های VRF",
    classification: "تیواسا / خدمات مهندسی",
    category: "VRF / نصب و راه‌اندازی",
    eyebrow: "مهندسی نصب",
    headingFirst: "نصب اصولی",
    headingSecond: "با دقت مهندسی.",
    description:
      "تیواسا خدمات نصب و راه‌اندازی سیستم‌های VRF را برای ساختمان‌های تجاری و محیط‌های صنعتی با رویکردی مهندسی ارائه می‌دهد؛ از برنامه‌ریزی سیستم و نصب تجهیزات تا آزمون‌های فنی و راه‌اندازی نهایی.",
    explore: "آشنایی با رویکرد ما",
    metadata: "مهندسی / راه‌اندازی",
  },
} as const;

export default function InstallationHero({ locale }: InstallationHeroProps) {
  const isRTL = locale === "fa";
  const t = translations[locale];

  return (
    <section
      id="installation-hero"
      dir={isRTL ? "rtl" : "ltr"}
      aria-labelledby="installation-hero-title"
      className="relative isolate overflow-hidden border-b border-background/10 bg-surface pt-24 text-background"
      style={{ backgroundColor: "#0b1f3a" }}
    >
      {/* BACKGROUND PHOTOGRAPHY */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/Symmetrical-HVAC-Units-Beneath-Industrial-Canopy.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-foreground/65" />

        <div
          className={`absolute inset-0 ${
            isRTL
              ? "bg-gradient-to-l from-foreground/90 via-foreground/55 to-foreground/20"
              : "bg-gradient-to-r from-foreground/90 via-foreground/55 to-foreground/20"
          }`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-transparent to-foreground/30" />
      </div>

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

      <div className="relative mx-auto max-w-[1800px]">
        <div className="grid min-h-[calc(100svh-6rem)] grid-cols-1 lg:grid-cols-12">
          {/* INDUSTRIAL SIDE RAIL */}
          <aside
            className={`relative z-10 hidden px-6 py-6 lg:col-span-1 lg:flex lg:flex-col lg:justify-between ${
              isRTL
                ? "border-l border-background/15"
                : "border-r border-background/15"
            }`}
          >
            <span
              className={`font-sans text-xs font-medium text-background/55 ${
                isRTL ? "tracking-normal" : "uppercase tracking-[0.16em]"
              }`}
              style={{ writingMode: "vertical-rl" }}
            >
              {t.rail}
            </span>

            <span
              dir="ltr"
              className="font-sans text-xs font-medium text-background/55"
            >
              T / 01
            </span>
          </aside>

          {/* MAIN CONTENT */}
          <div className="relative z-10 flex min-h-[calc(100svh-6rem)] min-w-0 flex-col justify-between px-5 py-7 md:px-10 md:py-10 lg:col-span-11 lg:px-14 lg:py-12">
            {/* CLASSIFICATION */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 shrink-0 bg-accent" />

                <span
                  className={`font-sans text-[10px] font-semibold text-background/85 md:text-xs ${
                    isRTL ? "" : "uppercase tracking-[0.22em]"
                  }`}
                >
                  {t.classification}
                </span>
              </div>

              <div
                className={`font-sans text-[10px] font-medium text-background/55 md:text-xs ${
                  isRTL ? "pr-[18px]" : "pl-[18px] uppercase tracking-[0.2em]"
                }`}
              >
                {t.category}
              </div>
            </div>

            {/* HEADLINE */}
            <div className="py-12 md:py-16">
              <div className="relative">
                <div
                  className={`absolute top-0 hidden h-[clamp(4rem,7vw,8rem)] w-[2px] bg-accent md:block ${
                    isRTL ? "-right-5" : "-left-5"
                  }`}
                />

                <div className="mb-5 flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />

                  <span
                    className={`font-sans text-[10px] font-medium text-accent ${
                      isRTL ? "" : "uppercase tracking-[0.16em]"
                    }`}
                  >
                    {t.eyebrow}
                  </span>

                  <span className="h-px w-12 bg-accent/50" />
                </div>

                <h1
                  id="installation-hero-title"
                  className={`relative max-w-6xl font-display font-semibold text-background ${
                    isRTL
                      ? "text-[clamp(2.8rem,7vw,6.5rem)] leading-[1.35] tracking-normal"
                      : "text-[clamp(3.5rem,13vw,6rem)] uppercase leading-[0.88] tracking-[-0.06em] sm:text-[clamp(4.5rem,10vw,7rem)] lg:text-[clamp(4.5rem,7vw,8rem)]"
                  }`}
                >
                  {t.headingFirst}
                  <br />
                  <span className="font-normal">{t.headingSecond}</span>
                </h1>
              </div>

              {/* CONNECTOR + DESCRIPTION */}
              <div
                className={`mt-10 max-w-xl ${
                  isRTL ? "md:mr-[8%]" : "md:ml-[8%]"
                }`}
              >
                <div className="mb-5 flex items-center">
                  <div className="h-px flex-1 overflow-hidden bg-background/10">
                    <div className="tivasa-line h-full w-full bg-accent" />
                  </div>

                  <span
                    className={`h-2 w-2 shrink-0 rounded-full bg-accent ${
                      isRTL ? "mr-3" : "ml-3"
                    }`}
                  />
                </div>

                <p className="font-sans text-base font-normal leading-7 text-background/85 md:text-lg md:leading-8">
                  {t.description}
                </p>
              </div>
            </div>

            {/* BOTTOM METADATA */}
            <div className="flex flex-wrap items-end justify-between gap-5 border-t border-background/20 pt-5">
              <a
                href="#approach"
                className={`group inline-flex items-center gap-4 font-sans text-[10px] font-medium text-background/75 transition-colors duration-300 hover:text-background md:text-xs ${
                  isRTL ? "" : "uppercase tracking-[0.16em]"
                }`}
              >
                <span>{t.explore}</span>

                <span className="flex h-9 w-9 items-center justify-center border border-background/30 transition-[background-color,border-color] duration-300 group-hover:border-accent group-hover:bg-accent">
                  <ArrowDown
                    size={16}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-y-1"
                  />
                </span>
              </a>

              <div
                className={`flex items-center gap-3 font-sans text-[10px] font-medium text-background/55 md:text-xs ${
                  isRTL ? "" : "uppercase tracking-[0.16em]"
                }`}
              >
                <span>{t.metadata}</span>
                <span className="h-1.5 w-1.5 bg-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
