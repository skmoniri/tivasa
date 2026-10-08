import { ArrowUpRight } from "lucide-react";
import { brands } from "./installationData";

export default function InstallationManufacturers() {
  return (
    <section
      id="manufacturers"
      aria-labelledby="manufacturers-title"
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
                  VRF Manufacturers
                </span>
              </div>
              <p className="mt-5 max-w-xs font-sans text-sm leading-6 text-foreground/55">
                Supporting precise installation across leading VRF
                manufacturers.
              </p>
            </div>
          </aside>

          {/* =====================================================
              MAIN CONTENT
              ===================================================== */}
          <div className="p-6 py-16 md:p-10 md:py-20 lg:col-span-9 lg:p-16 lg:py-24">
            {/* HEADING */}
            <h2
              id="manufacturers-title"
              className="max-w-3xl font-display text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.055em]"
            >
              Systems across
              <br />
              <span className="text-foreground/35">leading manufacturers.</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-8 max-w-2xl font-sans text-base leading-7 text-foreground/55">
              Equipment selection and installation requirements vary by
              manufacturer and system configuration.
            </p>

            {/* =====================================================
                MANUFACTURER GRID
                ===================================================== */}
            <div className="mt-12 grid grid-cols-2 border-l border-t border-foreground/15 sm:grid-cols-3 lg:grid-cols-5">
              {brands.map((brand, index) => (
                <div
                  key={brand}
                  className="group relative flex min-h-28 items-center justify-center overflow-hidden border-b border-r border-foreground/15 px-4 py-8 transition-colors duration-500 hover:bg-foreground/[0.025]"
                >
                  {/* Subtle index */}
                  <span className="absolute left-3 top-3 font-sans text-[9px] font-medium tracking-[0.12em] text-foreground/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Manufacturer name */}
                  <span className="relative z-10 text-center font-display text-lg font-semibold tracking-[-0.04em] text-foreground/65 transition-colors duration-300 group-hover:text-foreground md:text-xl">
                    {brand}
                  </span>

                  {/* Decorative arrow */}
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.3}
                    aria-hidden="true"
                    className="absolute right-3 top-3 text-foreground/20 transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />

                  {/* Bottom accent line */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-[width] duration-500 ease-out group-hover:w-full"
                  />
                </div>
              ))}
            </div>

            {/* DISCLAIMER */}
            <p className="mt-5 font-sans text-xs leading-6 text-foreground/40">
              Manufacturer names identify VRF equipment brands; they do not
              imply formal endorsement or certification.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
