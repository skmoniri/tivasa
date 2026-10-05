export default function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-background/10 bg-surface pt-24"
      style={{
        background: "#0b1f3a",
      }}
    >
      {/* Red structural rail */}
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 hidden w-px bg-accent/70 lg:block" />

      {/* Giant cropped editorial typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[7vw] top-[calc(4%+6rem)] z-0 select-none font-display text-[clamp(14rem,30vw,34rem)] font-semibold uppercase tracking-[-0.01em] text-background/[0.055]"
      >
        <div className="flex flex-col leading-[0.72]">
          <span className="transition-colors duration-1000">TIVA</span>

          <span className="ml-[0.18em] transition-colors duration-1000">
            SA
          </span>
        </div>
      </div>

      {/* Moving red scan */}
      <div className="tivasa-scan pointer-events-none absolute left-0 top-0 z-20 h-[2px] w-full bg-accent/70" />

      <div className="relative mx-auto max-w-[1800px]">
        <div className="grid min-h-[calc(100svh-6rem)] grid-cols-1 lg:grid-cols-12">
          {/* Desktop-only left rail */}
          <aside className="relative hidden border-r border-background/10 px-6 py-6 lg:col-span-1 lg:flex lg:flex-col lg:justify-between">
            <span
              className="font-sans text-xs font-medium uppercase tracking-[0.16em] text-background/35"
              style={{ writingMode: "vertical-rl" }}
            >
              Industrial systems
            </span>

            <span className="font-sans text-xs font-medium text-background/35">
              2026
            </span>
          </aside>

          {/* Main hero content */}
          <div className="relative z-10 flex min-h-[calc(100svh-6rem)] flex-col justify-between px-5 py-7 md:px-10 md:py-10 lg:col-span-8 lg:px-14 lg:py-12">
            <div className="flex flex-col gap-2">
              <div className="font-sans text-lg font-medium uppercase tracking-[0.15em] text-background/65 md:text-xl lg:text-2xl">
                Engineering / Manufacturing
              </div>

              <div className="font-sans text-lg font-medium uppercase tracking-[0.15em] text-background/40 md:text-xl lg:text-2xl">
                Technology
              </div>
            </div>

            <div className="py-12 md:py-16">
              {/* Headline */}
              <div className="relative">
                {/* Strong red editorial marker */}
                <div className="absolute -left-5 top-0 hidden h-[clamp(4rem,7vw,8rem)] w-[2px] bg-accent md:block" />

                <div className="mb-5 flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent" />

                  <span className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-accent">
                    Engineering
                  </span>

                  <div className="h-px w-12 bg-accent/50" />
                </div>

                <h1 className="relative max-w-6xl font-display text-[clamp(4.5rem,12vw,12rem)] font-semibold uppercase leading-[0.76] tracking-[-0.065em]">
                  Built for
                  <br />
                  <span className="font-normal">what&apos;s next.</span>
                </h1>
              </div>

              {/* Headline → description connector */}
              <div className="mt-10 max-w-xl md:ml-[8%]">
                <div className="mb-5 flex items-center">
                  <div className="h-px flex-1 overflow-hidden bg-background/10">
                    <div className="tivasa-line h-full w-full bg-accent" />
                  </div>

                  <div className="ml-3 h-2 w-2 shrink-0 rounded-full bg-accent" />
                </div>

                <p className="font-sans text-base font-normal leading-7 text-background/60 md:text-lg md:leading-8">
                  Tivasa develops technical solutions for demanding industrial
                  environments — combining engineering precision, manufacturing
                  expertise and practical performance.
                </p>
              </div>
            </div>

            {/* Bottom metadata */}
            <div className="flex items-end justify-between font-sans text-xs font-medium uppercase tracking-[0.15em] text-background/35">
              {/* Scroll indicator */}
              <div className="flex items-center gap-3">
                <span className="font-medium tracking-[0.18em] text-background/55">
                  Scroll to explore
                </span>

                <span className="relative h-9 w-px overflow-hidden bg-background/20">
                  <span className="tivasa-scroll-indicator absolute left-0 top-0 h-1/2 w-full bg-accent" />
                </span>
              </div>

              <span>Tehran / Iran</span>
            </div>
          </div>

          {/* Right information panel */}
          <aside className="relative z-10 border-t border-background/10 lg:col-span-3 lg:border-l lg:border-t-0">
            {/* Red corner detail */}
            <div className="pointer-events-none absolute left-0 top-0 hidden h-20 w-20 border-l-2 border-t-2 border-accent lg:block" />

            {/* Physical connection to main Hero */}
            <div className="pointer-events-none absolute bottom-0 left-0 top-0 hidden w-px bg-gradient-to-b from-accent/70 via-accent/10 to-transparent lg:block" />

            <div className="flex h-full flex-col justify-between p-6 md:p-8 lg:p-10">
              {/* Editorial company statement */}
              <div>
                <div className="mb-10 flex items-start justify-between">
                  <div>
                    <div className="mb-2 font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-background/30">
                      Company
                    </div>

                    <div className="font-display text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
                      TIVASA
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <div className="h-2 w-2 rounded-full bg-accent" />

                    <span className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-background/30">
                      Active
                    </span>
                  </div>
                </div>

                <div className="relative border-t border-background/10 pt-7">
                  {/* Red annotation */}
                  <div className="absolute left-0 top-0 h-[2px] w-20 bg-accent" />

                  <p className="max-w-sm font-display text-3xl font-medium leading-[1.05] tracking-[-0.035em] md:text-4xl">
                    <span className="text-background/40">
                      Engineering ideas into
                    </span>
                    <br />
                    <span>practical systems.</span>
                  </p>
                </div>
              </div>

              {/* Company disciplines */}
              <div className="border-t border-background/10 pt-7">
                <div className="mb-5">
                  <span className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-background/30">
                    Disciplines
                  </span>
                </div>

                <div className="flex flex-col">
                  <div className="group flex items-center justify-between border-b border-background/10 py-3.5">
                    <span className="font-display text-xl font-semibold tracking-[-0.02em]">
                      Engineering
                    </span>

                    <span className="h-px w-0 bg-accent transition-all duration-500 group-hover:w-10" />
                  </div>

                  <div className="group flex items-center justify-between border-b border-background/10 py-3.5">
                    <span className="font-display text-xl font-semibold tracking-[-0.02em] text-background/40 transition-colors duration-500 group-hover:text-background">
                      Manufacturing
                    </span>

                    <span className="h-px w-0 bg-accent transition-all duration-500 group-hover:w-10" />
                  </div>

                  <div className="group flex items-center justify-between py-3.5">
                    <span className="font-display text-xl font-semibold tracking-[-0.02em] text-background/40 transition-colors duration-500 group-hover:text-background">
                      Technology
                    </span>

                    <span className="h-px w-0 bg-accent transition-all duration-500 group-hover:w-10" />
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
