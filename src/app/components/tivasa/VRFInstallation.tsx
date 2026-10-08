"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function VRFInstallation() {
  return (
    <section
      id="installation"
      className="border-b border-background/10 bg-surface text-background"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="grid lg:grid-cols-12">
          {/* =========================================================
              SECTION MARKER
              ========================================================= */}
          <div className="relative border-b border-background/10 p-6 lg:col-span-3 lg:border-b-0 lg:border-r lg:p-10">
            <div className="relative pl-5">
              <div className="absolute left-0 top-0 h-full w-px bg-accent/70" />

              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

                <div className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  VRF Installation
                </div>
              </div>

              <p className="mt-6 max-w-xs font-sans text-base font-normal leading-7 text-background/65">
                From system design to installation and commissioning. Discover
                our approach to reliable VRF execution.
              </p>
            </div>
          </div>

          {/* =========================================================
              INSTALLATION CARD
              ========================================================= */}
          <div className="p-6 md:p-10 lg:col-span-9 lg:p-14">
            <a
              href="/installation"
              className="tivasa-system-card group relative block min-h-[520px] overflow-hidden border border-background/15 bg-foreground p-7 md:p-10"
            >
              {/* =====================================================
                  BACKGROUND IMAGE
                  ===================================================== */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <Image
                  src="/Symmetrical-HVAC-Units-Beneath-Industrial-Canopy.png"
                  alt="VRF outdoor units installed beneath an industrial canopy"
                  fill
                  sizes="(max-width: 1023px) 100vw, 75vw"
                  className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:scale-[1.045]"
                />
              </div>

              {/* =====================================================
                  CINEMATIC DARK OVERLAY
                  ===================================================== */}
              <div className="pointer-events-none absolute inset-0 bg-foreground/55" />

              {/* Additional gradient for text readability */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-foreground/30" />

              <div className="relative z-10 flex min-h-[450px] flex-col justify-between">
                {/* =====================================================
                    TOP META
                    ===================================================== */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-8 w-px bg-accent transition-[height] duration-500 group-hover:h-10" />

                    <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                      TIVASA
                    </div>
                  </div>

                  <div className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-background/75">
                    VRF / Installation
                  </div>
                </div>

                {/* =====================================================
                    MAIN CONTENT
                    ===================================================== */}
                <div>
                  <div className="mb-6 font-sans text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                    Installation & Commissioning
                  </div>

                  <div className="max-w-5xl">
                    <div className="font-display text-[clamp(3.5rem,7vw,8rem)] font-semibold leading-[0.78] tracking-[-0.06em]">
                      Built right.
                      <br />
                      <span className="font-normal">From day one.</span>
                    </div>

                    {/* Animated line anchored to headline */}
                    <div className="mt-10 h-px w-full overflow-hidden bg-background/20">
                      <div className="tivasa-system-line h-full w-0 bg-accent" />
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <span className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-background/80 transition-colors duration-500 group-hover:text-background">
                      Explore VRF installation
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center border border-background/25 transition-[border-color,background-color] duration-500 group-hover:border-accent group-hover:bg-accent">
                      <ArrowUpRight
                        size={19}
                        strokeWidth={1.25}
                        className="text-background/80 transition-colors duration-500 group-hover:text-foreground"
                      />
                    </span>
                  </div>
                </div>

                {/* =====================================================
                    STATUS BAR
                    ===================================================== */}
                <div className="absolute bottom-0 left-0 h-px w-40 bg-background/20">
                  <div className="tivasa-system-status h-full w-10 bg-accent" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
