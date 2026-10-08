import { maintenanceItems } from "./installationData";

export default function InstallationMaintenance() {
  return (
    <section
      id="maintenance"
      aria-labelledby="maintenance-title"
      className="border-b border-background/10 bg-surface text-background"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="grid lg:grid-cols-12">
          {/* =====================================================
              LEFT SECTION MARKER
              ===================================================== */}
          <aside className="border-b border-background/15 p-6 lg:col-span-3 lg:border-b-0 lg:border-r lg:p-8">
            <div className="relative pl-5">
              <span className="absolute bottom-0 left-0 top-0 w-px bg-accent/70" />

              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />

                <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  Long-Term Performance
                </span>
              </div>

              <p className="mt-5 max-w-xs font-sans text-sm leading-6 text-background/55">
                Supporting system reliability beyond installation.
              </p>
            </div>
          </aside>

          {/* =====================================================
              MAIN CONTENT
              ===================================================== */}
          <div className="min-w-0 lg:col-span-9">
            {/* COMPACT HEADING */}
            <div className="px-6 pb-8 pt-10 md:px-10 md:pt-12 lg:px-12">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                After Installation
              </span>

              <h2
                id="maintenance-title"
                className="mt-5 font-display text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[0.92] tracking-[-0.06em]"
              >
                Built for
                <br />
                <span className="text-background/35">the long run.</span>
              </h2>
            </div>

            {/* =====================================================
                WARRANTY + MAINTENANCE
                ===================================================== */}
            <div className="grid border-t border-background/15 md:grid-cols-2">
              {/* WARRANTY */}
              <article className="flex flex-col border-b border-background/15 px-6 py-8 md:border-b-0 md:border-r md:px-10 lg:px-12 lg:py-10">
                <div className="flex items-center gap-3">
                  <span className="h-5 w-px bg-accent" />

                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                    01 / Warranty & Support
                  </span>
                </div>

                <h3 className="mt-6 font-display text-[clamp(1.8rem,2.6vw,2.7rem)] font-semibold leading-[1.05] tracking-[-0.05em]">
                  Beyond handover.
                </h3>

                <p className="mt-5 max-w-md font-sans text-sm leading-7 text-background/65">
                  Equipment warranty, technical documentation, fault diagnosis,
                  and after-sales coordination are important considerations
                  throughout the operational life of a VRF system.
                </p>

                {/* WARRANTY NOTE */}
                <div className="mt-auto pt-8">
                  <div className="border-t border-background/15 pt-4">
                    <p className="max-w-sm font-sans text-xs leading-6 text-background/40">
                      Specific warranty and service terms depend on the
                      equipment and project agreement.
                    </p>
                  </div>
                </div>
              </article>

              {/* MAINTENANCE */}
              <article className="flex flex-col px-6 py-8 md:px-10 lg:px-12 lg:py-10">
                <div className="flex items-center gap-3">
                  <span className="h-5 w-px bg-accent" />

                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                    02 / Preventive Maintenance
                  </span>
                </div>

                <h3 className="mt-6 font-display text-[clamp(1.8rem,2.6vw,2.7rem)] font-semibold leading-[1.05] tracking-[-0.05em]">
                  Consistent care.
                </h3>

                <p className="mt-5 max-w-md font-sans text-sm leading-7 text-background/65">
                  Planned maintenance helps protect system efficiency, identify
                  developing faults, and reduce avoidable operational
                  interruptions.
                </p>

                {/* COMPACT CHECKLIST */}
                <div className="mt-6 border-t border-background/15">
                  {maintenanceItems.map((item, index) => (
                    <div
                      key={item}
                      className="group flex items-start gap-4 border-b border-background/10 py-3 transition-colors duration-300 hover:bg-background/[0.035]"
                    >
                      <span className="mt-0.5 shrink-0 font-display text-xs font-semibold text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="font-sans text-sm leading-6 text-background/65 transition-colors duration-300 group-hover:text-background">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
