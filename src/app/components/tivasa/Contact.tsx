"use client";

import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
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
                  Contact
                </div>
              </div>

              <p className="mt-6 max-w-xs font-sans text-base font-normal leading-7 text-background/40">
                Start a conversation about a project, product or technical
                requirement.
              </p>
            </div>
          </div>

          {/* =========================================================
              CONTENT
              ========================================================= */}
          <div className="lg:col-span-9">
            <div className="p-6 md:p-10 lg:p-16">
              {/* Eyebrow */}
              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />

                <span className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Start a project
                </span>
              </div>

              {/* Heading */}
              <h2 className="max-w-6xl font-display text-[clamp(4rem,8vw,9rem)] font-semibold leading-[0.78] tracking-[-0.065em]">
                Let&apos;s talk.
                <br />
                <span className="font-normal text-background/75">
                  Build what&apos;s next.
                </span>
              </h2>

              {/* =====================================================
                  CONTACT ROW
                  ===================================================== */}
              <div className="mt-16 border-t border-background/10">
                <div className="grid md:grid-cols-[1fr_auto] md:items-end md:gap-12">
                  <div className="pt-7">
                    <p className="max-w-xl font-sans text-lg font-normal leading-8 text-background/50">
                      Tell us what you are building, improving or trying to
                      solve. We&apos;ll start from there.
                    </p>
                  </div>

                  <div className="pt-7">
                    <a
                      href="#"
                      className="group flex items-center gap-4 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-background transition-colors duration-300 hover:text-background/70"
                    >
                      <span className="border-b border-background/30 pb-1 transition-colors duration-300 group-hover:border-accent">
                        Start a conversation
                      </span>

                      <span className="flex h-9 w-9 items-center justify-center border border-background/15 transition-[border-color,background-color] duration-300 group-hover:border-accent group-hover:bg-accent">
                        <ArrowUpRight
                          size={17}
                          strokeWidth={1.25}
                          className="transition-colors duration-300 group-hover:text-foreground"
                        />
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* =====================================================
                  BOTTOM META
                  ===================================================== */}
              <div className="mt-12 flex flex-col gap-4 border-t border-background/10 pt-5 font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-background/25 sm:flex-row sm:items-center sm:justify-between">
                <span>Engineering / Manufacturing / Technology</span>

                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>Tehran / Iran</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
