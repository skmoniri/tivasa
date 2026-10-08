import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function InstallationHero() {
  return (
    <section
      id="installation-hero"
      aria-labelledby="installation-hero-title"
      className="relative isolate overflow-hidden border-b border-background/10 bg-surface pt-24 text-background"
      style={{ backgroundColor: "#0b1f3a" }}
    >
      {/* =====================================================
          BACKGROUND PHOTOGRAPHY
          ===================================================== */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/Symmetrical-HVAC-Units-Beneath-Industrial-Canopy.png"
          alt="VRF outdoor units beneath an industrial canopy"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Original dark overall shadow */}
        <div className="absolute inset-0 bg-foreground/65" />

        {/* Original strong left-to-right shadow */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/55 to-foreground/20" />

        {/* Original bottom-to-top cinematic shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-transparent to-foreground/30" />
      </div>

      {/* =====================================================
          STRUCTURAL DESIGN ELEMENTS
          ===================================================== */}

      {/* Left structural rail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 top-0 hidden w-px bg-accent/70 lg:block"
      />

      {/* Animated top scanning line */}
      <div
        aria-hidden="true"
        className="tivasa-scan pointer-events-none absolute left-0 top-0 z-30 h-[2px] w-full bg-accent/70"
      />

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}
      <div className="relative mx-auto max-w-[1800px]">
        <div className="grid min-h-[calc(100svh-6rem)] grid-cols-1 lg:grid-cols-12">
          {/* =================================================
              LEFT INDUSTRIAL RAIL
              ================================================= */}
          <aside className="relative z-10 hidden border-r border-background/15 px-6 py-6 lg:col-span-1 lg:flex lg:flex-col lg:justify-between">
            <span
              className="font-sans text-xs font-medium uppercase tracking-[0.16em] text-background/55"
              style={{ writingMode: "vertical-rl" }}
            >
              VRF Installation
            </span>

            <span className="font-sans text-xs font-medium text-background/55">
              T / 01
            </span>
          </aside>

          {/* =================================================
              MAIN EDITORIAL CONTENT
              ================================================= */}
          <div className="relative z-10 flex min-h-[calc(100svh-6rem)] min-w-0 flex-col justify-between px-5 py-7 md:px-10 md:py-10 lg:col-span-11 lg:px-14 lg:py-12">
            {/* Top classification */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 shrink-0 bg-accent" />

                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-background/85 md:text-xs">
                  Tivasa / Engineering Services
                </span>
              </div>

              <div className="pl-[18px] font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-background/55 md:text-xs">
                VRF / Installation
              </div>
            </div>

            {/* =================================================
                MAIN HEADLINE
                ================================================= */}
            <div className="py-12 md:py-16">
              <div className="relative">
                {/* Editorial vertical marker */}
                <div className="absolute -left-5 top-0 hidden h-[clamp(4rem,7vw,8rem)] w-[2px] bg-accent md:block" />

                {/* Engineering label */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent" />

                  <span className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                    Installation Engineering
                  </span>

                  <div className="h-px w-12 bg-accent/50" />
                </div>

                {/* Homepage-consistent typography */}
                <h1
                  id="installation-hero-title"
                  className="relative max-w-6xl font-display text-[clamp(3.5rem,13vw,6rem)] font-semibold uppercase leading-[0.88] tracking-[-0.06em] text-background sm:text-[clamp(4.5rem,10vw,7rem)] lg:text-[clamp(4.5rem,7vw,8rem)]"
                >
                  Installed
                  <br />
                  <span className="font-normal">with precision.</span>
                </h1>
              </div>

              {/* Animated connector + description */}
              <div className="mt-10 max-w-xl md:ml-[8%]">
                <div className="mb-5 flex items-center">
                  <div className="h-px flex-1 overflow-hidden bg-background/10">
                    <div className="tivasa-line h-full w-full bg-accent" />
                  </div>

                  <div className="ml-3 h-2 w-2 shrink-0 rounded-full bg-accent" />
                </div>

                <p className="font-sans text-base font-normal leading-7 text-background/85 md:text-lg md:leading-8">
                  From initial engineering to final commissioning, we approach
                  VRF installation as one connected technical process.
                </p>
              </div>
            </div>

            {/* =================================================
                BOTTOM METADATA
                ================================================= */}
            <div className="flex flex-wrap items-end justify-between gap-5 border-t border-background/20 pt-5">
              {/* Scroll action */}
              <a
                href="#approach"
                className="group inline-flex items-center gap-4 font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-background/75 transition-colors duration-300 hover:text-background md:text-xs"
              >
                <span>Explore our approach</span>

                <span className="flex h-9 w-9 items-center justify-center border border-background/30 transition-[background-color,border-color] duration-300 group-hover:border-accent group-hover:bg-accent">
                  <ArrowDown
                    size={16}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-y-1"
                  />
                </span>
              </a>

              {/* Technical metadata */}
              <div className="flex items-center gap-3 font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-background/55 md:text-xs">
                <span>Engineering / Commissioning</span>
                <span className="h-1.5 w-1.5 bg-accent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
