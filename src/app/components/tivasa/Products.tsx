import { ArrowUpRight } from "lucide-react";
import { products } from "./data";

export default function Products() {
  return (
    <section
      id="products"
      className="border-b border-foreground/10 bg-background text-foreground"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="grid lg:grid-cols-12">
          {/* =========================================================
              SECTION MARKER
              ========================================================= */}
          <div className="border-b border-foreground/10 p-6 lg:col-span-3 lg:border-b-0 lg:border-r lg:p-10">
            <div className="relative pl-4">
              <div className="absolute left-0 top-0 h-full w-px bg-accent" />

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />

                <div className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  Products
                </div>
              </div>

              <div className="mt-6 max-w-[220px] font-sans text-base font-normal leading-7 text-foreground/45">
                Engineering / Manufacturing / Technology
              </div>
            </div>
          </div>

          {/* =========================================================
              CONTENT
              ========================================================= */}
          <div className="p-6 md:p-10 lg:col-span-9 lg:p-16">
            <div className="max-w-6xl">
              <h2 className="font-display text-[clamp(3.5rem,7vw,8rem)] font-semibold leading-[0.8] tracking-[-0.06em]">
                Products
                <br />
                <span className="font-normal">with purpose.</span>
              </h2>

              <p className="mt-10 max-w-2xl font-sans text-lg font-normal leading-8 text-foreground/55">
                Explore Tivasa&apos;s technical products and solutions through
                specifications, applications, documentation and engineering
                context.
              </p>
            </div>

            <div className="mt-16 grid gap-px border border-foreground/10 bg-foreground/10 md:grid-cols-2">
              {products.map(([number, title]) => (
                <a
                  href="#"
                  key={number}
                  className="group relative min-h-[250px] bg-background p-7 transition-colors duration-500 hover:bg-surface hover:text-background md:p-9"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-sans text-sm font-semibold text-accent">
                      {number}
                    </span>

                    <ArrowUpRight
                      size={21}
                      strokeWidth={1.5}
                      className="tivasa-arrow"
                    />
                  </div>

                  <div className="absolute bottom-8 left-8 right-8 md:bottom-9 md:left-9 md:right-9">
                    <div className="font-sans text-sm font-medium uppercase tracking-[0.14em] text-foreground/40 transition-colors group-hover:text-background/40">
                      Product category
                    </div>

                    <div className="mt-4 font-display text-3xl font-semibold leading-[0.92] tracking-[-0.025em] md:text-4xl">
                      {title}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
