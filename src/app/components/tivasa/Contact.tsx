"use client";

import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-b border-foreground/10 bg-background text-foreground"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="grid lg:grid-cols-12">
          {/* =========================================================
              SECTION MARKER
              ========================================================= */}
          <div className="relative border-b border-foreground/10 p-6 lg:col-span-3 lg:border-b-0 lg:border-r lg:p-10">
            <div className="relative pl-5">
              <div className="absolute left-0 top-0 h-full w-px bg-accent/70" />

              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

                <div className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  Contact
                </div>
              </div>

              <p className="mt-6 max-w-xs font-sans text-base font-normal leading-7 text-foreground/45">
                Technical inquiries, project requirements and product
                information.
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
                  Technical inquiries
                </span>
              </div>

              {/* Heading */}
              <h2 className="max-w-6xl font-display text-[clamp(4rem,8vw,9rem)] font-semibold leading-[0.78] tracking-[-0.065em]">
                Have a project?
                <br />
                <span className="font-normal text-foreground/70">
                  Let&apos;s discuss it.
                </span>
              </h2>

              {/* =====================================================
                  CONTACT ACTIONS
                  ===================================================== */}
              <div className="mt-16 grid border-t border-foreground/10 md:grid-cols-2">
                {/* Primary */}
                <a
                  href="mailto:info@tivasa.com"
                  className="group border-b border-foreground/10 py-8 md:border-b-0 md:border-r md:pr-10"
                >
                  <div className="flex items-start justify-between gap-8">
                    <div>
                      <div className="mb-3 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                        General inquiries
                      </div>

                      <div className="font-display text-2xl font-medium tracking-[-0.02em] md:text-3xl">
                        info@tivasa.com
                      </div>
                    </div>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-foreground/15 transition-[border-color,background-color] duration-300 group-hover:border-accent group-hover:bg-accent">
                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.25}
                        className="transition-colors duration-300 group-hover:text-background"
                      />
                    </span>
                  </div>

                  <p className="mt-6 max-w-md font-sans text-sm leading-6 text-foreground/45">
                    For product information, technical questions and general
                    project inquiries.
                  </p>
                </a>

                {/* Secondary */}
                <a href="#" className="group py-8 md:pl-10">
                  <div className="flex items-start justify-between gap-8">
                    <div>
                      <div className="mb-3 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                        Project inquiry
                      </div>

                      <div className="font-display text-2xl font-medium tracking-[-0.02em] md:text-3xl">
                        Request a consultation
                      </div>
                    </div>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-foreground/15 transition-[border-color,background-color] duration-300 group-hover:border-accent group-hover:bg-accent">
                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.25}
                        className="transition-colors duration-300 group-hover:text-background"
                      />
                    </span>
                  </div>

                  <p className="mt-6 max-w-md font-sans text-sm leading-6 text-foreground/45">
                    Share your project scope, system requirements or
                    specification and we&apos;ll take it from there.
                  </p>
                </a>
              </div>

              {/* =====================================================
                  BOTTOM META
                  ===================================================== */}
              <div className="mt-12 flex flex-col gap-4 border-t border-foreground/10 pt-5 font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-foreground/35 sm:flex-row sm:items-center sm:justify-between">
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
