"use client";

import { ArrowUpRight } from "lucide-react";

export default function SystemInteraction() {
  return (
    <section className="border-b border-background/10 bg-surface">
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
                  The Tivasa system
                </div>
              </div>

              <p className="mt-6 max-w-xs font-sans text-base font-normal leading-7 text-background/45">
                Technical work starts with understanding. Explore the system
                behind the work.
              </p>
            </div>
          </div>

          {/* =========================================================
              SYSTEM CARD
              ========================================================= */}
          <div className="p-6 md:p-10 lg:col-span-9 lg:p-14">
            <a
              href="#"
              className="tivasa-system-card group block min-h-[520px] border border-background/15 bg-foreground p-7 md:p-10"
            >
              <div className="tivasa-system-grid" />

              <div className="relative flex min-h-[450px] flex-col justify-between">
                {/* =====================================================
                    TOP META
                    ===================================================== */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-8 w-px bg-accent transition-[height] duration-500 group-hover:h-10" />

                    <div className="tivasa-system-number font-display text-xl font-semibold tracking-[0.08em] text-accent">
                      01
                    </div>
                  </div>

                  <div className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-background/30">
                    Engineering / Process
                  </div>
                </div>

                {/* =====================================================
                    MAIN CONTENT
                    ===================================================== */}
                <div>
                  <div className="mb-6 font-sans text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                    Industrial systems
                  </div>

                  <div className="max-w-5xl">
                    <div className="font-display text-[clamp(3.5rem,7vw,8rem)] font-semibold leading-[0.78] tracking-[-0.06em]">
                      Discover
                      <br />
                      <span className="font-normal">the system.</span>
                    </div>

                    {/* Line is now anchored directly to the headline */}
                    <div className="mt-10 h-px w-full overflow-hidden bg-background/10">
                      <div className="tivasa-system-line h-full w-0 bg-accent" />
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <span className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-background/40 transition-colors duration-500 group-hover:text-background/60">
                      Explore our approach
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center border border-background/10 transition-[border-color,background-color] duration-500 group-hover:border-accent group-hover:bg-accent">
                      <ArrowUpRight
                        size={19}
                        strokeWidth={1.25}
                        className="tivasa-system-arrow text-background/40 transition-colors duration-500 group-hover:text-foreground"
                      />
                    </span>
                  </div>
                </div>

                {/* =====================================================
                    STATUS BAR
                    ===================================================== */}
                <div className="absolute bottom-0 left-0 h-px w-40 bg-background/10">
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
