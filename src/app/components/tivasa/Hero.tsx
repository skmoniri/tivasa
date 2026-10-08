export default function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden border-b border-background/10 bg-surface pt-24 text-background"
      style={{ backgroundColor: "#0b1f3a" }}
    >
      {/* =========================================
          BACKGROUND PHOTOGRAPHY
      ========================================= */}

      {/* Desktop architecture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden bg-cover bg-center bg-no-repeat lg:block"
        style={{
          backgroundImage: "url('/Twilight-Corner-Architecture.png')",
        }}
      />

      {/* Mobile / tablet interior */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden lg:hidden"
      >
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: "url('/Moody-TEMA-Corporate-Hallway.png')",
            backgroundSize: "auto 115%",
            backgroundPosition: "center bottom",
          }}
        />
      </div>

      {/* Desktop directional gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(7,17,32,0.94) 0%, rgba(11,31,58,0.88) 25%, rgba(11,31,58,0.62) 49%, rgba(11,31,58,0.16) 76%, rgba(11,31,58,0.08) 100%)",
        }}
      />

      {/* Mobile readability gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 lg:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(7,17,32,0.78) 0%, rgba(7,17,32,0.55) 25%, rgba(7,17,32,0.85) 66%, rgba(7,17,32,0.96) 100%)",
        }}
      />

      {/* Subtle overall navy color grade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-surface/10"
      />

      {/* =========================================
          STRUCTURAL DESIGN ELEMENTS
      ========================================= */}

      {/* Left structural rail */}
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 hidden w-px bg-accent/70 lg:block" />

      {/* Top red scanning line */}
      <div className="tivasa-scan pointer-events-none absolute left-0 top-0 z-30 h-[2px] w-full bg-accent/70" />

      {/* =========================================
          MAIN GRID
      ========================================= */}

      <div className="relative mx-auto max-w-[1800px]">
        <div className="grid min-h-[calc(100svh-6rem)] grid-cols-1 lg:grid-cols-12">
          {/* =====================================
              DESKTOP LEFT RAIL
          ===================================== */}

          <aside className="relative z-10 hidden border-r border-background/15 px-6 py-6 lg:col-span-1 lg:flex lg:flex-col lg:justify-between">
            <span
              className="font-sans text-xs font-medium uppercase tracking-[0.16em] text-background/55"
              style={{ writingMode: "vertical-rl" }}
            >
              Industrial systems
            </span>

            <span className="font-sans text-xs font-medium text-background/55">
              2026
            </span>
          </aside>

          {/* =====================================
              MAIN HERO CONTENT
          ===================================== */}

          <div className="relative z-10 flex min-h-[calc(100svh-6rem)] min-w-0 flex-col justify-between px-5 py-7 md:px-10 md:py-10 lg:col-span-8 lg:px-14 lg:py-12">
            {/* Top classification */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 shrink-0 bg-accent" />

                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-background/85 md:text-xs">
                  Engineering / Manufacturing
                </span>
              </div>

              <div className="pl-[18px] font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-background/55 md:text-xs">
                Technology
              </div>
            </div>

            {/* Main statement */}
            <div className="py-12 md:py-16">
              {/* ORIGINAL HEADLINE DESIGN */}
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

                <h1 className="relative max-w-5xl font-display text-[clamp(3.5rem,13vw,6rem)] font-semibold uppercase leading-[0.88] tracking-[-0.06em] text-background sm:text-[clamp(4.5rem,10vw,7rem)] lg:text-[clamp(4.5rem,7vw,8rem)]">
                  Built for
                  <br />
                  <span className="font-normal">what&apos;s next.</span>
                </h1>
              </div>

              {/* ORIGINAL ANIMATED CONNECTOR LINE */}
              <div className="mt-10 max-w-xl md:ml-[8%]">
                <div className="mb-5 flex items-center">
                  <div className="h-px flex-1 overflow-hidden bg-background/10">
                    <div className="tivasa-line h-full w-full bg-accent" />
                  </div>

                  <div className="ml-3 h-2 w-2 shrink-0 rounded-full bg-accent" />
                </div>

                <p className="font-sans text-base font-normal leading-7 text-background/85 md:text-lg md:leading-8">
                  Tivasa develops technical solutions for demanding industrial
                  environments — combining engineering precision, manufacturing
                  expertise and practical performance.
                </p>
              </div>
            </div>

            {/* Bottom metadata */}
            <div className="flex items-end justify-between gap-4 border-t border-background/20 pt-5 font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-background/65 md:text-xs">
              {/* Scroll indicator */}
              <div className="flex items-center gap-3">
                <span className="tracking-[0.16em] text-background/75">
                  Scroll to explore
                </span>

                <span className="relative h-8 w-px overflow-hidden bg-background/30">
                  <span className="tivasa-scroll-indicator absolute left-0 top-0 h-1/2 w-full bg-accent" />
                </span>
              </div>

              <span className="shrink-0">Tehran / Iran</span>
            </div>
          </div>

          {/* =====================================
              RIGHT INFORMATION PANEL
          ===================================== */}

          <aside className="relative z-10 border-t border-background/15 bg-[#08182d]/95 lg:col-span-3 lg:border-l lg:border-t-0">
            {/* Red corner detail */}
            <div className="pointer-events-none absolute left-0 top-0 hidden h-16 w-16 border-l-2 border-t-2 border-accent lg:block" />

            {/* Panel vertical accent */}
            <div className="pointer-events-none absolute bottom-0 left-0 top-0 hidden w-px bg-gradient-to-b from-accent/70 via-accent/10 to-transparent lg:block" />

            <div className="flex h-full flex-col justify-between gap-16 p-6 md:p-8 lg:gap-8 lg:p-8 xl:p-10">
              {/* Company statement */}
              <div>
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-2 font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-background/50">
                      Company
                    </div>

                    <div className="font-display text-2xl font-semibold tracking-[-0.03em] text-background md:text-3xl">
                      TIVASA
                    </div>
                  </div>

                  {/* Status */}
                  <div className="flex items-center gap-2 pt-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />

                    <span className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-background/60">
                      Active
                    </span>
                  </div>
                </div>

                {/* Company positioning */}
                <div className="relative border-t border-background/15 pt-7">
                  <div className="absolute left-0 top-0 h-[2px] w-16 bg-accent" />

                  <p className="max-w-sm font-display text-2xl font-medium leading-[1.12] tracking-[-0.035em] text-background md:text-3xl xl:text-[2rem]">
                    <span className="text-background/60">
                      Engineering ideas into
                    </span>
                    <br />
                    <span>practical systems.</span>
                  </p>
                </div>
              </div>

              {/* Disciplines */}
              <div className="border-t border-background/15 pt-7">
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-background/55">
                    Disciplines
                  </span>

                  <span className="font-sans text-[10px] text-background/35">
                    01 — 03
                  </span>
                </div>

                <div className="flex flex-col">
                  <div className="group flex items-center justify-between border-b border-background/15 py-3.5">
                    <span className="font-display text-lg font-semibold tracking-[-0.02em] text-background xl:text-xl">
                      Engineering
                    </span>

                    <span className="h-px w-0 bg-accent transition-all duration-500 group-hover:w-8" />
                  </div>

                  <div className="group flex items-center justify-between border-b border-background/15 py-3.5">
                    <span className="font-display text-lg font-semibold tracking-[-0.02em] text-background/65 transition-colors duration-500 group-hover:text-background xl:text-xl">
                      Manufacturing
                    </span>

                    <span className="h-px w-0 bg-accent transition-all duration-500 group-hover:w-8" />
                  </div>

                  <div className="group flex items-center justify-between py-3.5">
                    <span className="font-display text-lg font-semibold tracking-[-0.02em] text-background/65 transition-colors duration-500 group-hover:text-background xl:text-xl">
                      Technology
                    </span>

                    <span className="h-px w-0 bg-accent transition-all duration-500 group-hover:w-8" />
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
