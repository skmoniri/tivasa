import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function InstallationCTA() {
  return (
    <section
      aria-labelledby="installation-cta-title"
      className="border-b border-background/10 bg-surface text-background"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="grid lg:grid-cols-12">
          {/* =====================================================
              LEFT SECTION MARKER — 3 COLUMNS
              ===================================================== */}
          <aside className="border-b border-background/15 p-6 lg:col-span-3 lg:border-b-0 lg:border-r lg:p-8">
            <div className="relative pl-5">
              <span className="absolute bottom-0 left-0 top-0 w-px bg-accent/70" />

              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />

                <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  Start a Conversation
                </span>
              </div>

              <p className="mt-5 max-w-xs font-sans text-sm leading-6 text-background/55">
                Discuss your project with Tivasa.
              </p>
            </div>
          </aside>

          {/* =====================================================
              MAIN CONTENT — 9 COLUMNS
              ===================================================== */}
          <div className="min-w-0 lg:col-span-9">
            {/* HEADING */}
            <div className="px-6 pb-8 pt-10 md:px-10 md:pt-12 lg:px-12">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                Project Enquiries
              </span>

              <h2
                id="installation-cta-title"
                className="mt-5 max-w-5xl font-display text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.065em]"
              >
                Let&apos;s build
                <br />
                <span className="font-normal text-background/60">
                  it right.
                </span>
              </h2>
            </div>

            {/* DESCRIPTION + CTA */}
            <div className="flex flex-col gap-7 border-t border-background/15 px-6 py-7 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
              <p className="max-w-lg font-sans text-sm leading-7 text-background/60 md:text-base">
                Planning a VRF installation? Discuss your project&apos;s
                technical requirements, system configuration, and execution
                needs.
              </p>

              <Link
                href="/#contact"
                className="group inline-flex w-fit shrink-0 items-center justify-between gap-8 border border-background/25 px-6 py-4 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-background transition-[background-color,border-color] duration-300 hover:border-accent hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                Discuss your project
                <ArrowUpRight
                  size={19}
                  strokeWidth={1.5}
                  className="text-accent transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-background"
                />
              </Link>
            </div>

            {/* BOTTOM NAVIGATION */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-background/15 px-6 py-5 md:px-10 lg:px-12">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-background/35">
                Tivasa / VRF Engineering
              </span>

              <Link
                href="/"
                className="group inline-flex items-center gap-2 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-background/50 transition-colors duration-300 hover:text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                Back to homepage
                <ArrowRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
