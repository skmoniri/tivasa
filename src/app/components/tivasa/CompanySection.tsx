export default function CompanySection() {
  return (
    <section className="border-b border-background/10 bg-foreground">
      <div className="mx-auto max-w-[1800px]">
        <div className="relative min-h-[650px] overflow-hidden">
          <div className="absolute inset-0 bg-surface" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(245,245,242,0.08),transparent_30%),linear-gradient(135deg,rgba(11,31,58,0.1),rgba(8,10,13,0.9))]" />

          <div className="absolute left-6 top-6 font-sans text-sm font-medium uppercase tracking-[0.15em] text-background/40 md:left-10 md:top-10">
            Tivasa / 001
          </div>

          <div className="absolute right-6 top-6 font-sans text-sm font-medium uppercase tracking-[0.15em] text-background/40 md:right-10 md:top-10">
            Tehran / Iran
          </div>

          <div className="absolute bottom-8 left-6 md:bottom-12 md:left-10">
            <div className="mb-5 font-sans text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              The people behind the system
            </div>

            <h2 className="max-w-5xl font-display text-[clamp(4rem,9vw,10rem)] font-semibold leading-[0.72] tracking-[-0.065em]">
              Built by
              <br />
              <span className="font-normal">people.</span>
            </h2>
          </div>

          <div className="absolute bottom-8 right-6 max-w-sm md:bottom-12 md:right-10">
            <p className="font-sans text-base font-normal leading-7 text-background/50 md:text-lg">
              When the client provides the right photography, this section
              becomes one of the strongest visual anchors on the site.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
