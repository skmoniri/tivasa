import { ArrowUp, ArrowUpRight } from "lucide-react";

const exploreLinks = [
  { label: "Products", href: "/#products" },
  { label: "Projects", href: "/#projects" },
  { label: "Installation", href: "/installation" },
];

const companyLinks = [
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-foreground text-background">
      <div className="mx-auto max-w-[1800px]">
        <div className="px-5 py-16 md:px-8 md:py-24 lg:px-14">
          {/* =========================================================
              MAIN FOOTER
              ========================================================= */}
          <div className="relative border-t border-background/10 pt-8 md:pt-10">
            {/* Structural red rail */}
            <div className="absolute left-0 top-0 h-20 w-px bg-accent md:h-28" />

            <div className="grid gap-16 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
              {/* =====================================================
                  BRAND
                  ===================================================== */}
              <div className="min-w-0">
                <div className="relative">
                  {/* Ghost wordmark */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1 top-1 whitespace-nowrap font-display text-[clamp(5.25rem,18vw,18rem)] font-semibold leading-[0.58] tracking-[-0.08em] text-accent/[0.75]"
                  >
                    TIVASA
                  </div>

                  {/* Main wordmark */}
                  <div className="relative whitespace-nowrap font-display text-[clamp(5.25rem,18vw,18rem)] font-semibold leading-[0.58] tracking-[-0.08em]">
                    TIVASA
                  </div>
                </div>

                <div className="mt-10 flex items-center gap-3 pl-1">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

                  <span className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-background/35 sm:text-xs">
                    Industrial / Technical / Engineering
                  </span>
                </div>
              </div>

              {/* =====================================================
                  NAVIGATION
                  ===================================================== */}
              <div className="grid grid-cols-2 gap-x-10 sm:gap-x-20 lg:min-w-[360px]">
                {/* Explore */}
                <FooterNavGroup title="Explore" links={exploreLinks} />

                {/* Company */}
                <FooterNavGroup title="Company" links={companyLinks} />
              </div>
            </div>
          </div>

          {/* =========================================================
              BOTTOM BAR
              ========================================================= */}
          <div className="mt-16 border-t border-background/10 md:mt-20">
            <div className="flex flex-col gap-6 py-5 sm:flex-row sm:items-center sm:justify-between md:py-6">
              {/* Copyright */}
              <span className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-background/25 sm:text-xs">
                © 2026 Tivasa
              </span>

              {/* Location */}
              <div className="flex items-center gap-3 font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-background/30 sm:text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Tehran / Iran</span>
              </div>

              {/* Disciplines */}
              <span className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-background/25 sm:text-xs">
                Engineering / Manufacturing / Technology
              </span>

              {/* Back to top */}
              <a
                href="#"
                aria-label="Back to top"
                className="group inline-flex w-fit items-center gap-2 font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-background/40 transition-colors duration-300 hover:text-background sm:text-xs"
              >
                <span>Back to top</span>

                <span className="flex h-7 w-7 items-center justify-center border border-background/15 transition-all duration-300 group-hover:border-accent group-hover:bg-accent">
                  <ArrowUp
                    size={13}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-foreground"
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   FOOTER NAV GROUP
   ========================================================= */

function FooterNavGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <span className="h-px w-5 bg-accent" />

        <span className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-background/25 sm:text-xs">
          {title}
        </span>
      </div>

      <div className="flex flex-col">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="group flex items-center justify-between border-b border-background/10 py-3.5 font-display text-lg font-medium tracking-[-0.02em] text-background/60 transition-colors duration-300 hover:text-background sm:py-4 sm:text-xl"
          >
            <span>{link.label}</span>

            <ArrowUpRight
              size={17}
              strokeWidth={1.25}
              className="text-background/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
