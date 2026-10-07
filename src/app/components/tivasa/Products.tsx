"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { products } from "./data";
import { useEffect, useRef, useState } from "react";

const productDescriptions = [
  "Variable refrigerant flow systems engineered for efficient multi-zone climate control.",
  "Integrated ducted systems designed for discreet installation and consistent airflow.",
  "Ceiling-mounted solutions combining efficient air distribution with a clean architectural presence.",
  "Intelligent control systems designed to monitor and optimize connected HVAC environments.",
];

const productImages = [
  "/images/products/vrf.jpg",
  "/images/products/ducted.jpg",
  "/images/products/cassette.jpg",
  "/images/products/controls.jpg",
];

export default function Products() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const handleScroll = () => {
      const center = container.scrollLeft + container.clientWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(center - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      if (container.scrollWidth <= container.clientWidth) return;

      const atStart = container.scrollLeft <= 0;
      const atEnd =
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 1;

      const scrollingForward = event.deltaY > 0;
      const scrollingBackward = event.deltaY < 0;

      if ((scrollingForward && !atEnd) || (scrollingBackward && !atStart)) {
        event.preventDefault();

        container.scrollBy({
          left: event.deltaY,
          behavior: "auto",
        });
      }
    };

    container.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const scrollToProduct = (index: number) => {
    const card = cardRefs.current[index];

    if (!card) return;

    card.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });

    setActiveIndex(index);
  };

  const moveProduct = (direction: "next" | "previous") => {
    const nextIndex =
      direction === "next"
        ? Math.min(activeIndex + 1, products.length - 1)
        : Math.max(activeIndex - 1, 0);

    scrollToProduct(nextIndex);
  };

  return (
    <section
      id="products"
      className="border-b border-foreground/10 bg-background text-foreground"
    >
      <div className="mx-auto max-w-[1800px]">
        {/* =========================================================
            HEADER
            ========================================================= */}
        <div className="grid lg:grid-cols-12">
          {/* SECTION MARKER */}
          <div className="border-b border-foreground/10 p-6 lg:col-span-3 lg:border-b-0 lg:border-r lg:p-10">
            <div className="relative pl-4">
              <div className="absolute left-0 top-0 h-full w-px bg-accent" />

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-accent" />

                <div className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  Products
                </div>
              </div>

              <div className="mt-6 max-w-[220px] font-sans text-base font-normal leading-7 text-foreground/45">
                Engineering / Manufacturing / Technology
              </div>
            </div>
          </div>

          {/* INTRO */}
          <div className="p-6 md:p-10 lg:col-span-9 lg:p-16">
            <div className="max-w-5xl">
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
          </div>
        </div>

        {/* =========================================================
    PRODUCT NAVIGATION
    ========================================================= */}
        <div className="sticky top-0 z-20 border-y border-foreground/10 bg-background/95 backdrop-blur-md">
          <div className="flex items-center">
            {/* DESKTOP LABEL */}
            <div className="hidden shrink-0 border-r border-foreground/10 px-6 py-4 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/35 md:block lg:px-10">
              Explore
            </div>

            {/* =====================================================
        DESKTOP NAV
        ===================================================== */}
            <div className="hidden min-w-0 flex-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:block">
              <div className="flex min-w-max">
                {products.map(([number, title], index) => {
                  const isActive = activeIndex === index;

                  return (
                    <button
                      key={number}
                      type="button"
                      onClick={() => scrollToProduct(index)}
                      aria-current={isActive ? "true" : undefined}
                      className={`group relative flex items-center gap-3 overflow-hidden border-r border-foreground/10 px-5 py-4 text-left outline-none transition-colors duration-300 lg:px-7 ${
                        isActive
                          ? "text-foreground"
                          : "text-foreground/35 hover:text-foreground"
                      } focus-visible:bg-foreground/[0.035]`}
                    >
                      {/* HOVER BACKGROUND */}
                      <span
                        aria-hidden="true"
                        className={`absolute inset-0 origin-left bg-foreground/[0.035] transition-transform duration-500 ease-out ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />

                      {/* NUMBER */}
                      <span
                        className={`relative z-10 font-sans text-[10px] font-semibold transition-colors duration-300 ${
                          isActive
                            ? "text-accent"
                            : "text-foreground/30 group-hover:text-accent"
                        }`}
                      >
                        {number}
                      </span>

                      {/* TITLE */}
                      <span className="relative z-10 font-sans text-xs font-semibold uppercase tracking-[0.12em]">
                        {title}
                      </span>

                      {/* ACTIVE INDICATOR */}
                      <span
                        aria-hidden="true"
                        className={`absolute bottom-0 left-0 h-px w-full origin-left bg-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isActive ? "scale-x-100" : "scale-x-0"
                        }`}
                      />

                      {/* FOCUS INDICATOR */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-1 border border-accent/0 transition-colors duration-200 group-focus-visible:border-accent/35"
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* =====================================================
        MOBILE NAV
        ===================================================== */}
            <div className="flex min-w-0 flex-1 items-center md:hidden">
              <div className="flex h-[52px] shrink-0 items-center border-r border-foreground/10 px-5">
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground/35">
                  Products
                </span>
              </div>

              <div className="flex min-w-0 flex-1 items-center overflow-hidden">
                {products.map(([number], index) => {
                  const isActive = activeIndex === index;

                  return (
                    <button
                      key={number}
                      type="button"
                      onClick={() => scrollToProduct(index)}
                      aria-label={`Go to product ${number}`}
                      aria-current={isActive ? "true" : undefined}
                      className={`group relative flex h-[52px] min-w-[44px] flex-1 items-center justify-center font-sans text-[10px] font-semibold outline-none transition-colors duration-300 ${
                        isActive
                          ? "text-accent"
                          : "text-foreground/30 hover:text-foreground"
                      } focus-visible:bg-foreground/[0.035]`}
                    >
                      <span className="relative z-10">{number}</span>

                      <span
                        aria-hidden="true"
                        className={`absolute bottom-0 left-2 right-2 h-px origin-center bg-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-60"
                        }`}
                      />

                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-1 border border-accent/0 transition-colors duration-200 group-focus-visible:border-accent/35"
                      />
                    </button>
                  );
                })}
              </div>

              {/* MOBILE CONTROLS */}
              <div className="flex shrink-0 border-l border-foreground/10">
                <button
                  type="button"
                  aria-label="Previous product"
                  onClick={() => moveProduct("previous")}
                  disabled={activeIndex === 0}
                  className="group flex h-[52px] w-[42px] items-center justify-center border-r border-foreground/10 text-foreground/35 outline-none transition-colors duration-300 hover:text-foreground disabled:pointer-events-none disabled:opacity-20 focus-visible:bg-foreground/[0.035] focus-visible:text-foreground"
                >
                  <ArrowLeft
                    size={14}
                    strokeWidth={1.4}
                    className="transition-transform duration-300 ease-out group-hover:-translate-x-0.5"
                  />
                </button>

                <button
                  type="button"
                  aria-label="Next product"
                  onClick={() => moveProduct("next")}
                  disabled={activeIndex === products.length - 1}
                  className="group flex h-[52px] w-[42px] items-center justify-center text-foreground/35 outline-none transition-colors duration-300 hover:text-foreground disabled:pointer-events-none disabled:opacity-20 focus-visible:bg-foreground/[0.035] focus-visible:text-foreground"
                >
                  <ArrowRight
                    size={14}
                    strokeWidth={1.4}
                    className="transition-transform duration-300 ease-out group-hover:translate-x-0.5"
                  />
                </button>
              </div>
            </div>

            {/* =====================================================
        DESKTOP CONTROLS
        ===================================================== */}
            <div className="hidden shrink-0 border-l border-foreground/10 md:flex">
              <button
                type="button"
                aria-label="Previous product"
                onClick={() => moveProduct("previous")}
                disabled={activeIndex === 0}
                className="group flex h-[49px] w-[52px] items-center justify-center border-r border-foreground/10 text-foreground/40 outline-none transition-colors duration-300 hover:text-foreground disabled:pointer-events-none disabled:opacity-20 focus-visible:bg-foreground/[0.035] focus-visible:text-foreground"
              >
                <ArrowLeft
                  size={16}
                  strokeWidth={1.4}
                  className="transition-transform duration-300 ease-out group-hover:-translate-x-0.5"
                />
              </button>

              <button
                type="button"
                aria-label="Next product"
                onClick={() => moveProduct("next")}
                disabled={activeIndex === products.length - 1}
                className="group flex h-[49px] w-[52px] items-center justify-center text-foreground/40 outline-none transition-colors duration-300 hover:text-foreground disabled:pointer-events-none disabled:opacity-20 focus-visible:bg-foreground/[0.035] focus-visible:text-foreground"
              >
                <ArrowRight
                  size={16}
                  strokeWidth={1.4}
                  className="transition-transform duration-300 ease-out group-hover:translate-x-0.5"
                />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================
            PRODUCT TRACK
            ========================================================= */}
        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-px overflow-x-auto bg-foreground/10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {products.map(([number, title], index) => (
            <a
              href="#"
              key={number}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              className="group relative flex min-w-[88vw] snap-center flex-col bg-background p-5 md:min-w-[62vw] md:p-10 lg:min-w-[52vw] lg:p-12 xl:min-w-[46vw]"
            >
              {/* IMAGE */}
              <div className="relative aspect-[16/9] overflow-hidden bg-surface">
                <img
                  src={productImages[index % productImages.length]}
                  alt={title}
                  className="h-full w-full object-cover opacity-90 grayscale transition-transform duration-700 ease-out group-hover:scale-[1.035] group-hover:grayscale-0"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <div className="absolute left-4 top-4 flex items-center gap-2 md:left-5 md:top-5">
                  <span className="h-1.5 w-1.5 bg-accent" />

                  <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-white/70">
                    Tivasa / {number}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center border border-white/25 text-white transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-surface md:bottom-5 md:right-5 md:h-10 md:w-10">
                  <ArrowUpRight size={16} strokeWidth={1.3} />
                </div>
              </div>

              {/* PRODUCT INFORMATION */}
              <div className="mt-7 grid gap-7 md:mt-8 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-7">
                  <div className="font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-accent md:text-[10px]">
                    Technical product
                  </div>

                  <h3 className="mt-3 font-display text-[clamp(2.35rem,5vw,5rem)] font-semibold leading-[0.86] tracking-[-0.055em] md:mt-4">
                    {title}
                  </h3>
                </div>

                <div className="md:col-span-5 md:pt-5">
                  <p className="font-sans text-sm leading-6 text-foreground/50">
                    {productDescriptions[index % productDescriptions.length]}
                  </p>
                </div>
              </div>

              {/* METADATA */}
              <div className="mt-8 grid grid-cols-2 border-t border-foreground/10 pt-4 md:mt-10 md:grid-cols-3 md:pt-5">
                <div>
                  <div className="font-sans text-[8px] font-semibold uppercase tracking-[0.15em] text-foreground/30 md:text-[9px]">
                    Application
                  </div>

                  <div className="mt-1.5 font-sans text-xs font-medium text-foreground/65 md:mt-2">
                    Commercial
                  </div>
                </div>

                <div>
                  <div className="font-sans text-[8px] font-semibold uppercase tracking-[0.15em] text-foreground/30 md:text-[9px]">
                    System
                  </div>

                  <div className="mt-1.5 font-sans text-xs font-medium text-foreground/65 md:mt-2">
                    HVAC / VRF
                  </div>
                </div>

                <div className="hidden md:block">
                  <div className="font-sans text-[9px] font-semibold uppercase tracking-[0.15em] text-foreground/30">
                    Documentation
                  </div>

                  <div className="mt-2 font-sans text-xs font-medium text-foreground/65">
                    Specifications →
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* =========================================================
            PROGRESS
            ========================================================= */}
        <div className="flex items-center justify-between border-t border-foreground/10 px-5 py-4 md:px-10 md:py-5 lg:px-16">
          <div className="font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-foreground/30 md:text-[10px]">
            <span className="hidden sm:inline">Scroll to explore</span>
            <span className="sm:hidden">Explore</span>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="font-display text-xs font-semibold tracking-[-0.02em]">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>

            <div className="h-px w-12 bg-foreground/10 md:w-32">
              <div
                className="h-px bg-accent transition-all duration-500"
                style={{
                  width: `${((activeIndex + 1) / products.length) * 100}%`,
                }}
              />
            </div>

            <span className="font-display text-xs font-semibold tracking-[-0.02em] text-foreground/30">
              {String(products.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
