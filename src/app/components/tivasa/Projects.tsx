"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type TouchEvent,
  type WheelEvent,
} from "react";

import type { Locale } from "@/i18n/config";
import { getTivasaData } from "@/i18n/tivasaData";
import { homepageTranslations } from "@/i18n/homepage";

interface ProjectsProps {
  locale: Locale;
}



const MANUFACTURER_COLORS: Record<string, string> = {
  GREE: "#2A418E",
  VICA: "#EAB308", // Unverified — awaiting actual VICA logo
  TICA: "#10449A", // Approximate dark blue
  MIDEA: "#0098D1",
  TCL: "#FF0000",
};



function renderManufacturerText(text: string) {
  const pattern = /(GREE|VICA|TICA|MIDEA|TCL|گری|ویکا|تیکا|میدیا|تی‌سی‌ال)/gi;

  return text.split(pattern).map((part, index) => {
    const normalized = part.toUpperCase();

    const manufacturer =
      normalized === "گری"
        ? "GREE"
        : normalized === "ویکا"
          ? "VICA"
          : normalized === "تیکا"
            ? "TICA"
            : normalized === "میدیا"
              ? "MIDEA"
              : normalized === "تی‌سی‌ال"
                ? "TCL"
                : normalized;

    const color = MANUFACTURER_COLORS[manufacturer];

    if (!color) return part;

    return (
      <span
        key={index}
        dir="ltr"
        className="inline font-semibold"
        style={{ color }}
      >
        {manufacturer}
      </span>
    );
  });
}

export default function Projects({ locale }: ProjectsProps) {
  const isRTL = locale === "fa";
  const projects = getTivasaData(locale).projects;
  const t = homepageTranslations[locale].projects;

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionIndex, setTransitionIndex] = useState<number | null>(null);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const wheelLocked = useRef(false);
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wheelTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const totalProjects = projects.length;
  const project = projects[activeIndex];

  const incomingProject =
    transitionIndex !== null ? projects[transitionIndex] : null;

  const goToProject = useCallback(
    (index: number, nextDirection: "next" | "prev") => {
      if (isTransitioning || index === activeIndex) return;
      if (index < 0 || index >= totalProjects) return;

      setDirection(nextDirection);
      setTransitionIndex(index);
      setIsTransitioning(true);

      transitionTimer.current = setTimeout(() => {
        setActiveIndex(index);
        setTransitionIndex(null);
        setIsTransitioning(false);
        transitionTimer.current = null;
      }, 800);
    },
    [activeIndex, isTransitioning, totalProjects],
  );

  const goNext = useCallback(() => {
    goToProject((activeIndex + 1) % totalProjects, "next");
  }, [activeIndex, goToProject, totalProjects]);

  const goPrevious = useCallback(() => {
    goToProject((activeIndex - 1 + totalProjects) % totalProjects, "prev");
  }, [activeIndex, goToProject, totalProjects]);

  // Clean up transition timers.
  useEffect(() => {
    return () => {
      if (transitionTimer.current !== null) {
        clearTimeout(transitionTimer.current);
      }

      if (wheelTimer.current !== null) {
        clearTimeout(wheelTimer.current);
      }
    };
  }, []);

  // Keyboard navigation.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target;

      if (
        target instanceof HTMLElement &&
        (target.isContentEditable ||
          ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))
      ) {
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();

        if (isRTL) goPrevious();
        else goNext();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();

        if (isRTL) goNext();
        else goPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [goNext, goPrevious, isRTL]);

  // Touch navigation.
  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];

    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || touchStartY.current === null) {
      return;
    }

    const touch = event.changedTouches[0];

    const deltaX = touch.clientX - touchStartX.current;
    const deltaY = touch.clientY - touchStartY.current;

    touchStartX.current = null;
    touchStartY.current = null;

    if (Math.abs(deltaX) < 55 || Math.abs(deltaX) < Math.abs(deltaY)) {
      return;
    }

    const next = deltaX > 0;

    if (next) goNext();
    else goPrevious();
  };

  // Horizontal trackpad navigation.
  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    if (Math.abs(event.deltaX) < Math.abs(event.deltaY)) return;
    if (Math.abs(event.deltaX) < 25) return;
    if (wheelLocked.current) return;

    wheelLocked.current = true;

    const next = event.deltaX < 0;

    if (next) goNext();
    else goPrevious();

    wheelTimer.current = setTimeout(() => {
      wheelLocked.current = false;
      wheelTimer.current = null;
    }, 850);
  };

  const progressWidth =
    totalProjects > 1
      ? `${((activeIndex + 1) / totalProjects) * 100}%`
      : "100%";

  // Render one project slide.
  // Both language versions use the same original image.
  const renderProject = (
    item: (typeof projects)[number],
    layer: "base" | "incoming",
  ) => (
    <div className="absolute inset-0">
      {/* PROJECT PHOTOGRAPH */}
      <div
        className={`tivasa-project-image absolute inset-0 overflow-hidden bg-surface ${
          layer === "incoming" ? "tivasa-incoming-image" : ""
        }`}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 1024px) 100vw, 75vw"
          quality={85}
          priority={activeIndex === 0 && layer === "base"}
          draggable={false}
          className="object-cover object-center"
        />
      </div>

      {/* TECHNICAL GRID */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(245,245,242,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,245,242,0.045) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* GHOST PROJECT NUMBER */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 font-display text-[clamp(10rem,22vw,22rem)] font-semibold leading-none tracking-[-0.09em] text-background/[0.035] ${
          isRTL ? "-left-[0.04em]" : "-right-[0.04em]"
        } ${layer === "incoming" ? "tivasa-incoming-number" : ""}`}
      >
        {item.number}
      </div>

      {/* PHOTOGRAPH ATMOSPHERE */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,13,0.18)_0%,transparent_35%,rgba(8,10,13,0.12)_65%,rgba(8,10,13,0.45)_100%)]" />

      {/* BOTTOM TEXT READABILITY */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t from-foreground/95 via-foreground/55 to-transparent" />

      {/* PROJECT INFORMATION */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="relative p-6 md:p-8 lg:p-10">
          <div
            className={`max-w-3xl ${
              layer === "incoming" ? "tivasa-incoming-content" : ""
            }`}
          >
            {/* PROJECT NUMBER AND CATEGORY */}
            <div className="flex items-center gap-4">
              <div className="h-8 w-px shrink-0 bg-accent" />

              <span
                dir="ltr"
                className="font-sans text-lg font-semibold tracking-[0.08em] text-accent md:text-xl"
              >
                {item.number}
              </span>

              <span
                className={`font-sans text-[10px] font-medium text-background/60 ${
                  isRTL ? "" : "uppercase tracking-[0.16em]"
                }`}
              >
                {item.category}
              </span>
            </div>

            {/* PROJECT TITLE */}
            <h3
              className={`mt-4 max-w-3xl font-display font-semibold text-background ${
                isRTL
                  ? "text-[clamp(1.8rem,3.8vw,3.6rem)] leading-[1.35] tracking-normal"
                  : "text-[clamp(2rem,4.2vw,4.4rem)] leading-[1.02] tracking-[-0.055em]"
              }`}
            >
              {item.title}
            </h3>

            {/* VRF MANUFACTURER */}
            <div className="mt-5 flex items-center gap-4">
              <span className="h-px w-6 shrink-0 bg-accent" />

              <span
                className={`font-sans text-[11px] font-semibold text-background/80 md:text-xs ${
                  isRTL ? "" : "uppercase tracking-[0.14em]"
                }`}
              >
                {renderManufacturerText(item.meta)}
              </span>
            </div>

            {/* PROJECT DESCRIPTION */}
            <p
              className={`mt-3 max-w-xl font-sans text-xs font-normal text-background/70 md:text-sm ${
                isRTL ? "leading-7" : "leading-6"
              }`}
            >
              {renderManufacturerText(item.description)}
            </p>
          </div>
        </div>
      </div>

      {/* TOP DOCUMENTATION LABEL */}
      <div
        className={`absolute top-6 flex items-center gap-3 font-sans text-[9px] font-medium text-background/75 md:top-8 lg:top-10 ${
          isRTL
            ? "right-6 md:right-8 lg:right-10"
            : "left-6 uppercase tracking-[0.16em] md:left-8 lg:left-10"
        }`}
      >
        <span className="h-px w-5 bg-accent" />
        <span>{t.documentation}</span>
      </div>

      {/* TOP RIGHT / LEFT PROJECT REFERENCE */}
      <div
        dir="ltr"
        className={`absolute top-6 font-sans text-[9px] font-medium uppercase tracking-[0.16em] text-background/70 md:top-8 lg:top-10 ${
          isRTL
            ? "left-6 md:left-8 lg:left-10"
            : "right-6 md:right-8 lg:right-10"
        }`}
      >
        {item.number} / {String(totalProjects).padStart(2, "0")}
      </div>
    </div>
  );

  return (
    <section
      id="projects"
      dir={isRTL ? "rtl" : "ltr"}
      className="border-b border-background/10 bg-foreground"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="grid lg:grid-cols-12">
          {/* SECTION MARKER */}
          <aside
            className={`border-b border-background/10 p-6 lg:col-span-3 lg:border-b-0 lg:p-8 xl:p-10 ${
              isRTL ? "lg:border-l" : "lg:border-r"
            }`}
          >
            <div className={`relative inline-block ${isRTL ? "pr-5" : "pl-5"}`}>
              <div
                className={`absolute top-0 h-full w-px bg-accent/70 ${
                  isRTL ? "right-0" : "left-0"
                }`}
              />

              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

                <div
                  className={`font-sans text-sm font-semibold text-accent ${
                    isRTL ? "" : "uppercase tracking-[0.16em]"
                  }`}
                >
                  {t.label}
                </div>
              </div>

            <p className="mt-5 max-w-xs font-sans text-sm font-normal leading-6 text-background/45 xl:text-base xl:leading-7">
              {isRTL ? (
                <>
                  منتخبی از پروژه‌های سیستم VRF در ساختمان‌های درمانی، تجاری،
                  زیرساختی، اداری و مسکونی؛
                  <span className="mt-2 block whitespace-nowrap">                    طراحی، تأمین و اجرا توسط تیواسا.
                  </span>
                </>
              ) : (
                t.description
              )}
              </p>
            </div>
          </aside>

          {/* PROJECT CAROUSEL */}
          <div className="min-w-0 lg:col-span-9">
            <div
              className="group relative touch-pan-y select-none"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onWheel={handleWheel}
            >
              {/* PROJECT STAGE */}
              <div className="relative h-[460px] overflow-hidden md:h-[540px] lg:h-[640px] xl:h-[660px]">
                {renderProject(project, "base")}

                {isTransitioning && incomingProject && (
                  <div
                    className={`absolute inset-0 z-20 ${
                      direction === "next"
                        ? "tivasa-editorial-wipe-next"
                        : "tivasa-editorial-wipe-prev"
                    }`}
                  >
                    {renderProject(incomingProject, "incoming")}

                    {/* ANIMATED RED WIPE EDGE */}
                    <div
                      className={`absolute top-0 h-full w-px bg-accent ${
                        direction === "next"
                          ? "right-0 tivasa-wipe-edge-next"
                          : "left-0 tivasa-wipe-edge-prev"
                      }`}
                    />
                  </div>
                )}
              </div>

              {/* NAVIGATION STRIP */}
              <div className="border-y border-background/10">
                <div className="flex items-center justify-between px-6 py-4 md:px-8 lg:px-10">
                  {/* PREVIOUS */}
                  <button
                    type="button"
                    onClick={goPrevious}
                    disabled={isTransitioning}
                    aria-label={t.previousAria}
                    className={`group/previous flex items-center gap-3 font-sans text-[10px] font-semibold text-background/50 transition-colors duration-300 hover:text-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-30 ${
                      isRTL ? "" : "uppercase tracking-[0.14em]"
                    }`}
                  >
                    <span className="flex h-9 w-9 items-center justify-center border border-background/20 transition-[border-color,background-color,color,transform] duration-300 group-hover/previous:border-accent group-hover/previous:bg-accent group-hover/previous:text-foreground md:h-10 md:w-10">
                      {isRTL ? (
                        <ArrowRight size={16} strokeWidth={1.3} />
                      ) : (
                        <ArrowLeft size={16} strokeWidth={1.3} />
                      )}
                    </span>

                    <span>{t.previous}</span>
                  </button>

                  {/* CURRENT PROJECT */}
                  <div className="flex items-center gap-3">
                    <span
                      className={`hidden font-sans text-[9px] font-semibold text-background/25 sm:inline ${
                        isRTL ? "" : "uppercase tracking-[0.16em]"
                      }`}
                    >
                      {t.project}
                    </span>

                    <span
                      dir="ltr"
                      className="font-sans text-xs font-semibold tracking-[0.12em] text-accent"
                    >
                      {project.number}
                    </span>

                    <span
                      dir="ltr"
                      className="font-sans text-[9px] tracking-[0.12em] text-background/20"
                    >
                      / {String(totalProjects).padStart(2, "0")}
                    </span>
                  </div>

                  {/* NEXT */}
                  <button
                    type="button"
                    onClick={goNext}
                    disabled={isTransitioning}
                    aria-label={t.nextAria}
                    className={`group/next flex items-center gap-3 font-sans text-[10px] font-semibold text-background/50 transition-colors duration-300 hover:text-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-30 ${
                      isRTL ? "" : "uppercase tracking-[0.14em]"
                    }`}
                  >
                    <span>{t.next}</span>

                    <span className="flex h-9 w-9 items-center justify-center border border-background/20 transition-[border-color,background-color,color,transform] duration-300 group-hover/next:border-accent group-hover/next:bg-accent group-hover/next:text-foreground md:h-10 md:w-10">
                      {isRTL ? (
                        <ArrowLeft size={16} strokeWidth={1.3} />
                      ) : (
                        <ArrowRight size={16} strokeWidth={1.3} />
                      )}
                    </span>
                  </button>
                </div>
              </div>

              {/* MOBILE SWIPE INDICATOR */}
              <div className="flex items-center justify-between border-b border-background/10 px-6 py-3 lg:hidden">
                <div className="flex items-center gap-3">
                  <span
                    className={`font-sans text-[9px] font-semibold text-background/30 ${
                      isRTL ? "" : "uppercase tracking-[0.16em]"
                    }`}
                  >
                    {t.swipe}
                  </span>

                  <div className="flex items-center gap-1 text-accent">
                    <ArrowLeft size={10} strokeWidth={1.2} />
                    <span className="h-px w-4 bg-accent/50" />
                    <ArrowRight size={10} strokeWidth={1.2} />
                  </div>
                </div>

                <span
                  className={`font-sans text-[9px] font-medium text-background/25 ${
                    isRTL ? "" : "uppercase tracking-[0.14em]"
                  }`}
                >
                  {t.drag}
                </span>
              </div>

              {/* DESKTOP PROJECT INDEX */}
              <div className="hidden px-8 py-3.5 lg:block xl:px-10">
                <div className="flex items-center justify-between gap-8">
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-sans text-[9px] font-semibold text-background/30 ${
                        isRTL ? "" : "uppercase tracking-[0.16em]"
                      }`}
                    >
                      {t.selected}
                    </span>

                    <span
                      dir="ltr"
                      className="font-sans text-xs font-semibold tracking-[0.12em] text-accent"
                    >
                      {project.number}
                    </span>
                  </div>

                  {/* PROGRESS BAR */}
                  <div className="flex flex-1 items-center gap-4">
                    <div className="h-px flex-1 bg-background/10">
                      <div
                        className="h-full bg-accent transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        style={{ width: progressWidth }}
                      />
                    </div>
                  </div>

                  {/* DESKTOP INDICATORS */}
                  <div className="flex items-center gap-2">
                    {projects.map((item, index) => (
                      <button
                        key={item.number}
                        type="button"
                        onClick={() =>
                          goToProject(
                            index,
                            index > activeIndex ? "next" : "prev",
                          )
                        }
                        disabled={isTransitioning || index === activeIndex}
                        aria-label={`${t.goToAria} ${item.number}`}
                        aria-current={
                          index === activeIndex ? "true" : undefined
                        }
                        className={`h-1 transition-[width,background-color] duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent ${
                          index === activeIndex
                            ? "w-8 bg-accent"
                            : "w-2 bg-background/20 hover:w-4 hover:bg-background/60"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* MOBILE PROJECT INDICATORS */}
              <div className="flex items-center justify-center gap-2 px-6 py-3.5 lg:hidden">
                {projects.map((item, index) => (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() =>
                      goToProject(index, index > activeIndex ? "next" : "prev")
                    }
                    disabled={isTransitioning || index === activeIndex}
                    aria-label={`${t.goToAria} ${item.number}`}
                    aria-current={index === activeIndex ? "true" : undefined}
                    className={`h-1 transition-[width,background-color] duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent ${
                      index === activeIndex
                        ? "w-7 bg-accent"
                        : "w-2 bg-background/20 hover:bg-background/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
