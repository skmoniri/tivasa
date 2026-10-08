import { qualityChecks } from "./installationData";

export default function InstallationCommissioning() {
  return (
    <section
      id="commissioning"
      aria-labelledby="commissioning-title"
      className="border-b border-foreground/10 bg-background text-foreground"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="grid lg:grid-cols-12">
          {/* LEFT SECTION MARKER */}
          <aside className="border-b border-foreground/10 p-6 lg:col-span-3 lg:border-b-0 lg:border-r lg:p-8">
            <div className="relative pl-5">
              <span className="absolute bottom-0 left-0 top-0 w-px bg-accent/70" />

              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />

                <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  Quality Control
                </span>
              </div>

              <p className="mt-5 max-w-xs font-sans text-sm leading-6 text-foreground/55">
                Verification is an essential part of technical execution.
              </p>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="min-w-0 lg:col-span-9">
            {/* HEADING */}
            <div className="px-6 pb-9 pt-12 md:px-10 md:pt-14 lg:px-12 lg:pb-10">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                Testing / Commissioning
              </span>

              <h2
                id="commissioning-title"
                className="mt-5 font-display text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[0.92] tracking-[-0.06em]"
              >
                Tested. Verified.
                <br />
                <span className="text-foreground/35">Ready to run.</span>
              </h2>

              <p className="mt-6 max-w-2xl font-sans text-sm leading-7 text-foreground/60 md:text-base">
                Commissioning brings the installation process together. Each
                technical check contributes to verifying system integrity,
                configuration, and operating performance.
              </p>
            </div>

            {/* SIMPLE QUALITY CHECK GRID */}
            <div className="grid border-t border-foreground/10 sm:grid-cols-2">
              {qualityChecks.map((check) => (
                <article
                  key={check.number}
                  className="group flex min-h-[170px] flex-col border-b border-foreground/10 px-6 py-7 transition-colors duration-300 hover:bg-foreground/[0.025] sm:odd:border-r md:px-10 lg:px-12"
                >
                  {/* NUMBER */}
                  <span className="font-display text-lg font-semibold tracking-[-0.04em] text-accent">
                    {check.number}
                  </span>

                  {/* CONTENT */}
                  <div className="mt-6">
                    <h3 className="font-display text-xl font-semibold leading-[1.1] tracking-[-0.04em] md:text-2xl">
                      {check.title}
                    </h3>

                    <p className="mt-3 max-w-md font-sans text-sm leading-6 text-foreground/55">
                      {check.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
