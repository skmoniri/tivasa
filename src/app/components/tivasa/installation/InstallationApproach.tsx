"use client";

import Image from "next/image";

export default function InstallationApproach() {
  return (
    <section
      id="approach"
      aria-labelledby="approach-title"
      className="border-b border-foreground/10 bg-background text-foreground"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="grid lg:grid-cols-12">
          {/* =====================================================
              LEFT SECTION MARKER
              ===================================================== */}
          <aside className="border-b border-foreground/10 p-6 lg:col-span-3 lg:border-b-0 lg:border-r lg:p-10">
            <div className="relative pl-5">
              <span className="absolute bottom-0 left-0 top-0 w-px bg-accent/70" />

              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />

                <span className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  Our Approach
                </span>
              </div>

              <p className="mt-6 max-w-xs font-sans text-base leading-7 text-foreground/55">
                The performance of a VRF system depends on more than the
                equipment itself.
              </p>
            </div>
          </aside>

          {/* =====================================================
              MAIN CONTENT
              ===================================================== */}
          <div className="min-w-0 lg:col-span-9">
            {/* HEADLINE + PHOTOGRAPH */}
            <div className="grid items-stretch lg:grid-cols-12">
              {/* HEADLINE */}
              <div className="flex min-w-0 flex-col justify-center px-6 pb-10 pt-14 md:px-10 md:pt-16 lg:col-span-7 lg:py-20 lg:pl-12 lg:pr-6">
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                  Engineering Before Execution
                </span>

                <h2
                  id="approach-title"
                  className="mt-8 font-display text-[clamp(3.4rem,5.2vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.065em]"
                >
                  Performance
                  <br />
                  starts before
                  <br />
                  <span className="text-foreground/35">installation.</span>
                </h2>

                {/* SMALL EDITORIAL DETAIL */}
                <div className="mt-10 hidden items-center gap-3 lg:flex">
                  <span className="h-px w-8 bg-accent" />

                  <span className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-foreground/35">
                    VRF / Technical Execution
                  </span>
                </div>
              </div>

              {/* EQUIPMENT IMAGE */}
              <div className="min-w-0 px-6 pb-8 md:px-10 lg:col-span-5 lg:py-12 lg:pl-0 lg:pr-12">
                <div className="group relative h-[260px] overflow-hidden bg-foreground/5 sm:h-[340px] lg:h-full lg:min-h-[390px]">
                  <Image
                    src="/Cooling-Heating-System-HVAC-Panel.png"
                    alt="Close-up of Tivasa cooling and heating equipment, showing the ventilation grille and branded exterior panel."
                    fill
                    sizes="(min-width: 1024px) 32vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035] motion-reduce:transition-none"
                  />

                  {/* SUBTLE INNER BORDER */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 border border-foreground/10"
                  />
                </div>
              </div>
            </div>

            {/* =====================================================
                TECHNICAL DESCRIPTION
                ===================================================== */}
            <div className="grid border-t border-foreground/15 md:grid-cols-2">
              {/* FIRST PARAGRAPH */}
              <div className="border-b border-foreground/10 px-6 py-8 md:border-b-0 md:border-r md:px-10 md:py-10 lg:px-12">
                <div className="mb-5 flex items-center gap-3">
                  <span className="font-display text-sm font-semibold text-accent">
                    01
                  </span>

                  <span className="h-px w-6 bg-foreground/15" />

                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/40">
                    Understanding the Environment
                  </span>
                </div>

                <p className="max-w-md font-sans text-base leading-7 text-foreground/65">
                  Reliable VRF execution begins with a clear understanding of
                  the building, its load requirements, and the technical
                  limitations of the installation environment.
                </p>
              </div>

              {/* SECOND PARAGRAPH */}
              <div className="px-6 py-8 md:px-10 md:py-10 lg:px-12">
                <div className="mb-5 flex items-center gap-3">
                  <span className="font-display text-sm font-semibold text-accent">
                    02
                  </span>

                  <span className="h-px w-6 bg-foreground/15" />

                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/40">
                    Coordinating the System
                  </span>
                </div>

                <p className="max-w-md font-sans text-base leading-7 text-foreground/65">
                  System design, piping configuration, equipment positioning,
                  electrical coordination, and commissioning must work together
                  to achieve dependable long-term operation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
