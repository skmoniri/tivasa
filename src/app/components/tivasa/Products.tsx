"use client";

import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpLeft,
  ArrowUpRight,
  FileText,
  Download,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";

import type { Locale } from "@/i18n/config";
import { getTivasaData } from "@/i18n/tivasaData";
import { homepageTranslations } from "@/i18n/homepage";
import { getProductCatalogs } from "@/i18n/productCatalogs";

interface ProductsProps {
  locale: Locale;
}

const DRAG_THRESHOLD = 5;
const FRICTION = 0.94;
const MIN_VELOCITY = 0.12;
const MAX_VELOCITY = 2.4;
const MOMENTUM_MULTIPLIER = 1.0;

const PRODUCT_TABS = ["TIVA", "TCL", "MIDEA"] as const;

// Exact filenames as provided from /public/catalogs.
// TCL's filename contains non-breaking spaces (U+00A0).
const CATALOG_FILES = {
  tiva: "Catalogue VRF by TETA.pdf",
  tica: "TICA-VRF-catalogue.pdf",
  tcl: "TCL\u00A0VRF\u00A0TMV6\u00A0Catalogue.pdf",
  midea: "Catalogo VRF Midea-V8 - by TETA.pdf",
} as const;

const catalogPath = (filename: string) =>
  `/catalogs/${encodeURIComponent(filename)}`;


export default function Products({ locale }: ProductsProps) {
  const isRTL = locale === "fa";

  const products = getTivasaData(locale).products;
  const t = homepageTranslations[locale].products;
  const catalogData = getProductCatalogs(locale);
  const labels = catalogData.labels;

  const slogan = isRTL
    ? { first: "فراتر از سرمایش.", second: "فراتر از انتظار." }
    : { first: "Beyond cooling.", second: "Beyond expectations." };

  const productTabName = (index: number) =>
    PRODUCT_TABS[index] ?? products[index]?.title ?? String(index + 1);

  const DirectionArrow = isRTL ? ArrowUpLeft : ArrowUpRight;
  const PreviousArrow = isRTL ? ArrowRight : ArrowLeft;
  const NextArrow = isRTL ? ArrowLeft : ArrowRight;

  const scrollRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  const dragRef = useRef({
    active: false,
    pointerId: -1,
    startX: 0,
    startY: 0,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
    moved: false,
  });

  const animationRef = useRef<number | null>(null);
  const suppressClickRef = useRef(false);

  const [isDragging, setIsDragging] = useState(false);
  const [isGliding, setIsGliding] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  // Keep disabled attributes identical for SSR and the first browser render.
  const [hydrated, setHydrated] = useState(false);
  const [catalogError, setCatalogError] = useState<string | null>(null);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const downloadCatalog = useCallback(
    async (event: ReactMouseEvent<HTMLAnchorElement>, filename: string) => {
      event.preventDefault();
      setCatalogError(null);

      // Test both normal and non-breaking spaces. These two filenames look
      // almost identical in Windows Explorer, but are different URLs.
      const candidates = Array.from(
        new Set([
          filename,
          filename.replace(/\u00A0/g, " "),
          filename.replace(/ /g, "\u00A0"),
        ]),
      );

      let downloaded = false;
      for (const candidate of candidates) {
        try {
          const response = await fetch(catalogPath(candidate), {
            cache: "no-store",
          });
          if (!response.ok) continue;

          const blob = await response.blob();
          if (blob.size === 0) continue;
          if ((await blob.slice(0, 5).text()) !== "%PDF-") continue;

          const url = URL.createObjectURL(blob);
          const anchor = document.createElement("a");
          anchor.href = url;
          anchor.download = candidate.replace(/\u00A0/g, " ");
          document.body.appendChild(anchor);
          anchor.click();
          anchor.remove();
          window.setTimeout(() => URL.revokeObjectURL(url), 5000);
          downloaded = true;
          break;
        } catch {
          // Try alternate filename spellings, then show a useful error.
        }
      }

      if (!downloaded) {
        setCatalogError(
          isRTL
            ? `فایل «${filename.replace(/\u00A0/g, " ")}» در مسیر public/catalogs پیدا نشد. نام فایل را بررسی کنید.`
            : `Could not find "${filename.replace(/\u00A0/g, " ")}" in public/catalogs. Check its exact filename.`,
        );
      }
    },
    [isRTL],
  );

  const cancelMotion = useCallback(() => {
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }

    setIsGliding(false);
  }, []);

  const findNearestIndex = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return 0;

    const containerRect = container.getBoundingClientRect();
    const center = containerRect.left + containerRect.width / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(center - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    return closestIndex;
  }, []);

  const scrollToProduct = useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const card = cardRefs.current[index];
      const container = scrollRef.current;

      if (!card || !container) return;

      const containerRect = container.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();

      const delta =
        cardRect.left +
        cardRect.width / 2 -
        (containerRect.left + containerRect.width / 2);

      container.scrollBy({
        left: delta,
        behavior,
      });

      setActiveIndex(index);
    },
    [],
  );

  const snapToNearest = useCallback(() => {
    const index = findNearestIndex();
    scrollToProduct(index, "smooth");
  }, [findNearestIndex, scrollToProduct]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let frame = 0;

    const updateActive = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        setActiveIndex(findNearestIndex());
      });
    };

    container.addEventListener("scroll", updateActive, {
      passive: true,
    });

    window.addEventListener("resize", updateActive);
    updateActive();

    return () => {
      cancelAnimationFrame(frame);
      container.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [findNearestIndex, locale]);

  useEffect(() => {
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      if (container.scrollWidth <= container.clientWidth + 1) return;

      const maxScroll = container.scrollWidth - container.clientWidth;
      const position = Math.abs(container.scrollLeft);

      const atStart = position <= 1;
      const atEnd = position >= maxScroll - 1;

      if ((event.deltaY > 0 && !atEnd) || (event.deltaY < 0 && !atStart)) {
        event.preventDefault();

        container.scrollBy({
          left: event.deltaY * (isRTL ? -1 : 1),
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
  }, [isRTL]);

  const startMomentum = useCallback(
    (initialVelocity: number) => {
      const container = scrollRef.current;
      if (!container) return;

      let velocity = Math.max(
        -MAX_VELOCITY,
        Math.min(MAX_VELOCITY, initialVelocity),
      );

      velocity *= MOMENTUM_MULTIPLIER;

      if (Math.abs(velocity) < MIN_VELOCITY) {
        snapToNearest();
        return;
      }

      setIsGliding(true);

      let lastTime = performance.now();

      const animate = (time: number) => {
        const element = scrollRef.current;

        if (!element) {
          animationRef.current = null;
          setIsGliding(false);
          return;
        }

        const dt = Math.min(time - lastTime, 32);
        lastTime = time;

        const before = element.scrollLeft;

        element.scrollLeft += velocity * dt;

        const after = element.scrollLeft;

        if (Math.abs(after - before) < 0.01) {
          animationRef.current = null;

          animationRef.current = null;
          snapToNearest();
          setIsGliding(false);

          return;
        }

        velocity *= Math.pow(FRICTION, dt / 16.67);

        if (Math.abs(velocity) <= MIN_VELOCITY) {
          animationRef.current = null;

          animationRef.current = null;
          snapToNearest();
          setIsGliding(false);

          return;
        }

        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);
    },
    [snapToNearest],
  );

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || event.button !== 0) {
      return;
    }

    cancelMotion();

    const container = scrollRef.current;
    if (!container) return;

    dragRef.current = {
      active: true,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      lastX: event.clientX,
      lastTime: performance.now(),
      velocity: 0,
      moved: false,
    };

    suppressClickRef.current = false;
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    const drag = dragRef.current;

    if (!container || !drag.active) return;
    if (event.pointerId !== drag.pointerId) return;

    const deltaX = event.clientX - drag.startX;
    const deltaY = event.clientY - drag.startY;

    if (!drag.moved) {
      if (
        Math.abs(deltaX) < DRAG_THRESHOLD &&
        Math.abs(deltaY) < DRAG_THRESHOLD
      ) {
        return;
      }

      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        drag.active = false;
        return;
      }

      drag.moved = true;
      suppressClickRef.current = true;

      setIsDragging(true);
      container.setPointerCapture(event.pointerId);

      drag.lastX = drag.startX;
      drag.lastTime = performance.now();

      // Continue processing the movement instead of returning.
      // This prevents the initial drag distance from being lost.
    }

    const now = performance.now();
    const dt = Math.max(now - drag.lastTime, 1);
    const movementX = event.clientX - drag.lastX;

    container.scrollLeft -= movementX;

    const instantVelocity = -movementX / dt;

    drag.velocity = drag.velocity * 0.35 + instantVelocity * 0.65;

    drag.lastX = event.clientX;
    drag.lastTime = now;
  };

  const finishDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    const drag = dragRef.current;

    if (event.pointerId !== drag.pointerId) return;

    const wasMoved = drag.moved;
    const velocity = drag.velocity;
    const totalMovement = event.clientX - drag.startX;

    if (container?.hasPointerCapture(event.pointerId)) {
      container.releasePointerCapture(event.pointerId);
    }

    drag.active = false;
    drag.pointerId = -1;
    drag.moved = false;

    setIsDragging(false);

    if (!wasMoved) return;

    const currentIndex = findNearestIndex();

    // Determine direction using actual pointer movement.
    const direction = totalMovement < 0 ? 1 : -1;

    // In RTL, visual direction is reversed.
    const adjustedDirection = isRTL ? -direction : direction;

    const SWIPE_THRESHOLD = 45;

    if (Math.abs(totalMovement) >= SWIPE_THRESHOLD) {
      const targetIndex = Math.max(
        0,
        Math.min(products.length - 1, currentIndex + adjustedDirection),
      );

      scrollToProduct(targetIndex, "smooth");
      return;
    }

    // For very small movements, preserve momentum.
    startMomentum(velocity);
  };

  const handleCarouselClick = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (!suppressClickRef.current) return;

    event.preventDefault();
    event.stopPropagation();

    suppressClickRef.current = false;
  };

  const moveProduct = (direction: "next" | "previous") => {
    cancelMotion();

    const nextIndex =
      direction === "next"
        ? Math.min(activeIndex + 1, products.length - 1)
        : Math.max(activeIndex - 1, 0);

    scrollToProduct(nextIndex);
  };

  const selectProduct = (index: number) => {
    cancelMotion();
    scrollToProduct(index);
  };

  return (
    <section
      id="products"
      dir={isRTL ? "rtl" : "ltr"}
      className="border-b border-foreground/10 bg-background text-foreground"
    >
      <div className="mx-auto max-w-[1800px]">
        {/* SECTION HEADER */}
        <div className="grid lg:grid-cols-12">
          <div
            className={`border-b border-foreground/10 p-5 lg:col-span-3 lg:border-b-0 lg:p-7 ${
              isRTL ? "lg:border-l" : "lg:border-r"
            }`}
          >
            <div className={`relative ${isRTL ? "pr-4" : "pl-4"}`}>
              <span
                className={`absolute inset-y-0 w-px bg-accent ${
                  isRTL ? "right-0" : "left-0"
                }`}
              />

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

                <span
                  className={`font-sans text-sm font-semibold text-accent ${
                    isRTL ? "" : "uppercase tracking-[0.16em]"
                  }`}
                >
                  {t.label}
                </span>
              </div>

              <p className="mt-3 max-w-[230px] font-sans text-sm leading-6 text-foreground/45">
                {t.disciplines}
              </p>
            </div>
          </div>

          <div className="p-5 md:p-7 lg:col-span-9 lg:px-10 lg:py-7">
            <div className="grid items-end gap-4 xl:grid-cols-[1fr_0.75fr] xl:gap-8">
              <h2
                className={`font-display font-semibold ${
                  isRTL
                    ? "text-[clamp(1.9rem,3.5vw,3.9rem)] leading-[1.3]"
                    : "text-[clamp(2.1rem,4.1vw,4.5rem)] leading-[1.02] tracking-[-0.045em]"
                }`}
              >
                {slogan.first}
                <br />
                <span className="font-normal">{slogan.second}</span>
              </h2>

              <p className="max-w-lg font-sans text-[13px] leading-6 text-foreground/55">
                {t.description}
              </p>
            </div>
          </div>
        </div>

        {/* PRODUCT NAVIGATION */}
        <div className="sticky top-0 z-20 border-y border-foreground/10 bg-background/95 backdrop-blur-md">
          <div className="flex items-center">
            <div
              className={`hidden shrink-0 px-6 py-3 font-sans text-[10px] font-semibold text-foreground/35 md:block ${
                isRTL
                  ? "border-l border-foreground/10"
                  : "border-r border-foreground/10 uppercase tracking-[0.16em]"
              }`}
            >
              {t.explore}
            </div>

            {/* DESKTOP TABS */}
            <div className="hidden min-w-0 flex-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:block">
              <div className="flex min-w-max">
                {products.map((product, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <button
                      key={product.number}
                      type="button"
                      onClick={() => selectProduct(index)}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative flex items-center gap-3 px-6 py-3 font-sans text-xs font-semibold transition-colors ${
                        isRTL
                          ? "border-l border-foreground/10"
                          : "border-r border-foreground/10"
                      } ${
                        isActive
                          ? "text-foreground"
                          : "text-foreground/35 hover:text-foreground"
                      }`}
                    >
                      <span dir="ltr" className="uppercase tracking-[0.1em]">
                        {productTabName(index)}
                      </span>

                      <span
                        className={`absolute inset-x-0 bottom-0 h-px bg-accent ${
                          isActive ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* MOBILE TABS */}
            <div className="flex min-w-0 flex-1 md:hidden">
              {products.map((product, index) => (
                <button
                  key={product.number}
                  type="button"
                  onClick={() => selectProduct(index)}
                  aria-label={`${t.goToAria} ${productTabName(index)}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  className={`relative flex h-[44px] min-w-0 flex-1 items-center justify-center px-1 font-sans text-[11px] font-semibold sm:text-xs ${
                    activeIndex === index ? "text-accent" : "text-foreground/30"
                  }`}
                >
                  <span dir="ltr" className="uppercase tracking-[0.06em]">{productTabName(index)}</span>

                  <span
                    className={`absolute inset-x-2 bottom-0 h-px bg-accent ${
                      activeIndex === index ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* ARROWS */}
            <div
              className={`flex shrink-0 ${
                isRTL
                  ? "border-r border-foreground/10"
                  : "border-l border-foreground/10"
              }`}
            >
              <button
                type="button"
                aria-label={t.previousAria}
                onClick={() => moveProduct("previous")}
                disabled={hydrated && activeIndex === 0}
                className={`flex h-[44px] w-[44px] items-center justify-center text-foreground/50 hover:text-accent disabled:opacity-20 ${
                  isRTL
                    ? "border-l border-foreground/10"
                    : "border-r border-foreground/10"
                }`}
              >
                <PreviousArrow size={16} strokeWidth={1.4} />
              </button>

              <button
                type="button"
                aria-label={t.nextAria}
                onClick={() => moveProduct("next")}
                disabled={hydrated && activeIndex === products.length - 1}
                className="flex h-[44px] w-[44px] items-center justify-center text-foreground/50 hover:text-accent disabled:opacity-20"
              >
                <NextArrow size={16} strokeWidth={1.4} />
              </button>
            </div>
          </div>
        </div>

        {/* MOMENTUM CAROUSEL */}
        <div
          ref={scrollRef}
          dir={isRTL ? "rtl" : "ltr"}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={finishDrag}
          onPointerCancel={finishDrag}
          onClickCapture={handleCarouselClick}
          className={`flex snap-x snap-proximity gap-px overflow-x-auto overscroll-x-contain bg-foreground/10 select-none [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            touchAction: "auto",
            scrollBehavior: "auto",
          }}
        >
          {products.map((product, index) => {
            const profile = catalogData.profiles[index];
            const primaryCatalogFile =
              index === 0
                ? CATALOG_FILES.tiva
                : index === 1
                  ? CATALOG_FILES.tcl
                  : CATALOG_FILES.midea;
            // Fourth PDF is offered alongside the TIVA catalog.
            const secondaryCatalogFile =
              index === 0 ? CATALOG_FILES.tica : null;

            return (
              <article
                key={product.number}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                dir={isRTL ? "rtl" : "ltr"}
                className={`group flex w-[86vw] shrink-0 snap-center flex-col bg-background p-4 sm:w-[66vw] sm:p-5 lg:w-[46vw] lg:p-6 xl:w-[42vw] ${
                  isDragging && activeIndex === index ? "relative z-10" : ""
                }`}
              >
                {/* PRODUCT IMAGE */}
                <div className="relative w-full overflow-hidden border border-foreground/10 bg-[#e5e7e7]">
                  <Image
                    src={product.image}
                    alt={`${product.title} - ${product.series}`}
                    width={1600}
                    height={900}
                    sizes="(max-width: 640px) 86vw, (max-width: 1024px) 66vw, (max-width: 1280px) 46vw, 42vw"
                    quality={90}
                    priority={index === 0}
                    draggable={false}
                    className="pointer-events-none block h-auto w-full"
                  />

                  {/* TECHNICAL BORDER */}
                  <div className="pointer-events-none absolute inset-3 border border-foreground/10 md:inset-4" />

                  <div className="pointer-events-none absolute inset-3 md:inset-4">
                    <span className="absolute left-0 top-0 h-3 w-3 border-l border-t border-foreground/50" />
                    <span className="absolute right-0 top-0 h-3 w-3 border-r border-t border-foreground/50" />
                    <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-foreground/50" />
                    <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-foreground/50" />
                  </div>

                  {/* IMAGE METADATA */}
                  <div className="pointer-events-none absolute left-5 right-5 top-5 flex items-center justify-between gap-3">
                    <span
                      dir="ltr"
                      className="bg-background/90 px-2 py-1 font-sans text-[9px] font-semibold uppercase tracking-[0.12em] text-foreground/65"
                    >
                      TIVASA / {product.number}
                    </span>

                    <span
                      dir="ltr"
                      className="hidden bg-background/90 px-2 py-1 font-sans text-[9px] font-semibold uppercase tracking-[0.1em] text-foreground/50 sm:block"
                    >
                      {labels.outdoor}
                    </span>
                  </div>

                  <div className="pointer-events-none absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3">
                    <span
                      dir="ltr"
                      className="bg-background/90 px-2 py-1 font-sans text-[9px] font-semibold uppercase tracking-[0.1em] text-foreground/65"
                    >
                      {profile.heading}
                    </span>

                    <span
                      dir="ltr"
                      className="font-sans text-[9px] font-semibold tracking-[0.1em] text-foreground/45"
                    >
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {String(products.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* PRODUCT INFORMATION */}
                <div className="mt-4 grid gap-4 md:grid-cols-12 md:gap-5">
                  {/* PRODUCT IDENTITY */}
                  <div className="min-w-0 md:col-span-5">
                    <div
                      className={`font-sans text-[9px] font-semibold text-accent ${
                        isRTL ? "" : "uppercase tracking-[0.14em]"
                      }`}
                    >
                      {t.technicalProduct}
                    </div>

                    <h3
                      className={`mt-2 font-display font-semibold ${
                        isRTL
                          ? "text-[clamp(1.8rem,2.8vw,3.1rem)] leading-[1.25]"
                          : "text-[clamp(2rem,3.2vw,3.5rem)] leading-[0.9] tracking-[-0.05em]"
                      }`}
                    >
                      {product.title}
                    </h3>

                    <div
                      dir="ltr"
                      className={`mt-2.5 flex flex-wrap items-center gap-2 font-sans text-[10px] font-medium tracking-[0.06em] text-foreground/45 ${
                        isRTL ? "justify-end" : ""
                      }`}
                    >
                      <span>{profile.manufacturer}</span>

                      <span className="h-3 w-px bg-foreground/20" />

                      <span>{product.series}</span>
                    </div>
                  </div>

                  {/* DESCRIPTION / MANUFACTURER */}
                  <div className="min-w-0 md:col-span-7">
                    <p className="font-sans text-[13px] leading-[1.55] text-foreground/70">
                      {profile.description}
                    </p>

                    <div className="mt-2.5 border-t border-foreground/10 pt-2.5">
                      <span
                        className={`font-sans text-[9px] font-semibold text-accent ${
                          isRTL ? "" : "uppercase tracking-[0.12em]"
                        }`}
                      >
                        {labels.manufacturerProfile}
                      </span>

                      <p className="mt-1 font-sans text-[11px] leading-[1.55] text-foreground/45">
                        {profile.profile}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ACTIONS */}
                <div className="mt-auto pt-4">
                  <div className="grid gap-2 sm:grid-cols-2">
                    {/* TECHNICAL CATALOG */}
                    <a
                      href={catalogPath(primaryCatalogFile)}
                      download
                      onClick={(event) => downloadCatalog(event, primaryCatalogFile)}
                      className="flex min-h-[46px] min-w-0 items-center justify-between gap-3 border border-foreground/15 px-3 py-2.5 transition-colors hover:border-accent hover:bg-accent/[0.035]"
                    >
                      <span className="flex min-w-0 items-center gap-2">
                        <FileText
                          size={16}
                          strokeWidth={1.4}
                          className="shrink-0 text-accent"
                        />

                        <span className="font-sans text-[11px] font-semibold">
                          {labels.primaryCatalog}
                        </span>
                      </span>

                      <span
                        dir="ltr"
                        className="shrink-0 font-sans text-[9px] font-semibold text-foreground/35"
                      >
                        PDF / {profile.catalogLanguage}
                      </span>
                    </a>

                    {/* CONSULTATION */}
                    <a
                      href="#contact"
                      className={`flex min-h-[46px] min-w-0 items-center justify-between gap-3 bg-surface px-3 py-2.5 font-sans text-[11px] font-semibold text-background transition-colors hover:bg-accent ${
                        isRTL ? "" : "uppercase tracking-[0.08em]"
                      }`}
                    >
                      <span>{labels.inquiry}</span>

                      <DirectionArrow
                        size={16}
                        strokeWidth={1.4}
                        className="shrink-0"
                      />
                    </a>
                  </div>

                  {/* SECONDARY CATALOG */}
                  {secondaryCatalogFile && (
                    <a
                      href={catalogPath(secondaryCatalogFile)}
                      download
                      onClick={(event) => downloadCatalog(event, secondaryCatalogFile)}
                      className="mt-2 inline-flex items-center gap-2 font-sans text-[10px] font-medium text-foreground/45 hover:text-accent"
                    >
                      <Download size={12} strokeWidth={1.4} />

                      <span>{isRTL ? "کاتالوگ TICA" : "TICA Catalog"}</span>

                      <span dir="ltr" className="text-[9px] text-foreground/30">
                        PDF / TICA
                      </span>
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {catalogError && (
          <p role="alert" className="border-t border-foreground/10 px-5 py-3 font-sans text-xs text-red-600 md:px-8">
            {catalogError}
          </p>
        )}

        {/* PROGRESS */}
        <div className="flex items-center justify-between border-t border-foreground/10 px-5 py-2.5 md:px-8">
          <span
            className={`font-sans text-[9px] font-semibold text-foreground/30 ${
              isRTL ? "" : "uppercase tracking-[0.14em]"
            }`}
          >
            {labels.scroll}
          </span>

          <div dir="ltr" className="flex items-center gap-2.5">
            <span className="font-display text-xs font-semibold">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>

            <div className="h-px w-12 bg-foreground/10 md:w-24">
              <div
                className="h-px bg-accent transition-all duration-500"
                style={{
                  width: `${((activeIndex + 1) / products.length) * 100}%`,
                }}
              />
            </div>

            <span className="font-display text-xs font-semibold text-foreground/30">
              {String(products.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
