"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "./data";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionIndex, setTransitionIndex] = useState<number | null>(null);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const wheelLocked = useRef(false);
  const transitionTimer = useRef<number | null>(null);

  const project = projects[activeIndex];
  const incomingProject =
    transitionIndex !== null ? projects[transitionIndex] : null;

  const totalProjects = projects.length;

  const goToProject = useCallback(
    (index: number, nextDirection: "next" | "prev") => {
      if (isTransitioning || index === activeIndex) return;

      setDirection(nextDirection);
      setTransitionIndex(index);
      setIsTransitioning(true);

      transitionTimer.current = window.setTimeout(() => {
        setActiveIndex(index);
        setTransitionIndex(null);
        setIsTransitioning(false);
      }, 800);
    },
    [activeIndex, isTransitioning],
  );

  const goNext = useCallback(() => {
    goToProject((activeIndex + 1) % totalProjects, "next");
  }, [activeIndex, goToProject, totalProjects]);

  const goPrevious = useCallback(() => {
    goToProject((activeIndex - 1 + totalProjects) % totalProjects, "prev");
  }, [activeIndex, goToProject, totalProjects]);

  useEffect(() => {
    return () => {
      if (transitionTimer.current !== null) {
        window.clearTimeout(transitionTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [goNext, goPrevious]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];

    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || touchStartY.current === null) return;

    const touch = event.changedTouches[0];

    const deltaX = touch.clientX - touchStartX.current;
    const deltaY = touch.clientY - touchStartY.current;

    touchStartX.current = null;
    touchStartY.current = null;

    if (Math.abs(deltaX) < 55 || Math.abs(deltaX) < Math.abs(deltaY)) {
      return;
    }

    if (deltaX < 0) {
      goNext();
    } else {
      goPrevious();
    }
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (Math.abs(event.deltaX) < Math.abs(event.deltaY)) return;
    if (Math.abs(event.deltaX) < 25) return;
    if (wheelLocked.current) return;

    wheelLocked.current = true;

    if (event.deltaX > 0) {
      goNext();
    } else {
      goPrevious();
    }

    window.setTimeout(() => {
      wheelLocked.current = false;
    }, 850);
  };

  const progressWidth =
    totalProjects > 1
      ? `${((activeIndex + 1) / totalProjects) * 100}%`
      : "100%";

  const renderProject = (
    item: (typeof projects)[number],
    layer: "base" | "incoming",
  ) => (
    <div className="absolute inset-0">
      {/* Project field */}
      <div
        className={`tivasa-project-image absolute inset-0 bg-surface ${
          layer === "incoming" ? "tivasa-incoming-image" : ""
        }`}
      />

      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(245,245,242,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,245,242,0.045) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Ghost number */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-[0.04em] top-1/2 -translate-y-1/2 font-display text-[clamp(10rem,22vw,22rem)] font-semibold leading-none tracking-[-0.09em] text-background/[0.035] ${
          layer === "incoming" ? "tivasa-incoming-number" : ""
        }`}
      >
        {item.number}
      </div>

      {/* Image atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(245,245,242,0.08),transparent_30%),linear-gradient(135deg,rgba(11,31,58,0.08),rgba(8,10,13,0.78))]" />

      {/* Bottom readability */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-foreground via-foreground/65 to-transparent" />

      {/* Project information */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="relative p-6 md:p-8 lg:p-10">
          <div
            className={`max-w-3xl ${
              layer === "incoming" ? "tivasa-incoming-content" : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="h-8 w-px bg-accent" />

              <span className="font-sans text-lg font-semibold tracking-[0.08em] text-accent md:text-xl">
                {item.number}
              </span>

              <span className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-background/40">
                {item.category}
              </span>
            </div>

            <h3 className="mt-4 font-display text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[0.84] tracking-[-0.055em]">
              {item.title}
            </h3>

            <div className="mt-5 flex items-center gap-4">
              <span className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-background/40 md:text-xs">
                {item.meta}
              </span>

              <span className="h-px w-8 bg-background/15" />

              <span className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-background/30">
                2026
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Documentation */}
      <div className="absolute left-6 top-6 flex items-center gap-3 font-sans text-[9px] font-medium uppercase tracking-[0.16em] text-background/35 md:left-8 md:top-8 lg:left-10 lg:top-10">
        <span className="h-px w-5 bg-accent/70" />
        <span>Technical documentation</span>
      </div>

      {/* Year */}
      <div className="absolute right-6 top-6 font-sans text-[9px] font-medium uppercase tracking-[0.16em] text-background/30 md:right-8 md:top-8 lg:right-10 lg:top-10">
        2026
      </div>
    </div>
  );

  return (
    <section
      id="projects"
      className="border-b border-background/10 bg-foreground"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="grid lg:grid-cols-12">
          {/* Section marker */}
          <aside className="border-b border-background/10 p-6 lg:col-span-3 lg:border-b-0 lg:border-r lg:p-8 xl:p-10">
            <div className="relative inline-block pl-5">
              <div className="absolute left-0 top-0 h-full w-px bg-accent/70" />

              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

                <div className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  Selected projects
                </div>
              </div>

              <p className="mt-5 max-w-xs font-sans text-sm font-normal leading-6 text-background/45 xl:text-base xl:leading-7">
                A selection of technical work across industrial systems,
                engineering and manufacturing.
              </p>
            </div>
          </aside>

          {/* Project carousel */}
          <div className="lg:col-span-9">
            <div
              className="group relative touch-pan-y select-none"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onWheel={handleWheel}
            >
              {/* Project stage */}
              <div className="relative h-[460px] overflow-hidden md:h-[540px] lg:h-[640px] xl:h-[660px]">
                {/* Current project */}
                {renderProject(project, "base")}

                {/* Incoming project */}
                {isTransitioning && incomingProject && (
                  <div
                    className={`absolute inset-0 z-20 ${
                      direction === "next"
                        ? "tivasa-editorial-wipe-next"
                        : "tivasa-editorial-wipe-prev"
                    }`}
                  >
                    {renderProject(incomingProject, "incoming")}

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

              {/* Navigation strip */}
              <div className="border-b border-background/10 border-t border-background/10">
                <div className="flex items-center justify-between px-6 py-4 md:px-8 lg:px-10">
                  <button
                    type="button"
                    onClick={goPrevious}
                    disabled={isTransitioning}
                    aria-label="Previous project"
                    className="group/previous flex items-center gap-3 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-background/50 transition-colors duration-300 hover:text-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-30"
                  >
                    <span className="flex h-9 w-9 items-center justify-center border border-background/20 transition-[border-color,background-color,color,transform] duration-300 group-hover/previous:-translate-x-0.5 group-hover/previous:border-accent group-hover/previous:bg-accent group-hover/previous:text-foreground md:h-10 md:w-10">
                      <ArrowLeft size={16} strokeWidth={1.3} />
                    </span>

                    <span>Previous</span>
                  </button>

                  <div className="flex items-center gap-3">
                    <span className="hidden font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-background/25 sm:inline">
                      Project
                    </span>

                    <span className="font-sans text-xs font-semibold tracking-[0.12em] text-accent">
                      {project.number}
                    </span>

                    <span className="font-sans text-[9px] tracking-[0.12em] text-background/20">
                      / {String(totalProjects).padStart(2, "0")}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={goNext}
                    disabled={isTransitioning}
                    aria-label="Next project"
                    className="group/next flex items-center gap-3 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-background/50 transition-colors duration-300 hover:text-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-30"
                  >
                    <span>Next project</span>

                    <span className="flex h-9 w-9 items-center justify-center border border-background/20 transition-[border-color,background-color,color,transform] duration-300 group-hover/next:translate-x-0.5 group-hover/next:border-accent group-hover/next:bg-accent group-hover/next:text-foreground md:h-10 md:w-10">
                      <ArrowRight size={16} strokeWidth={1.3} />
                    </span>
                  </button>
                </div>
              </div>

              {/* Mobile swipe indicator */}
              <div className="flex items-center justify-between border-b border-background/10 px-6 py-3 lg:hidden">
                <div className="flex items-center gap-3">
                  <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-background/30">
                    Swipe
                  </span>

                  <div className="flex items-center gap-1 text-accent">
                    <ArrowLeft size={10} strokeWidth={1.2} />
                    <span className="h-px w-4 bg-accent/50" />
                    <ArrowRight size={10} strokeWidth={1.2} />
                  </div>
                </div>

                <span className="font-sans text-[9px] font-medium uppercase tracking-[0.14em] text-background/25">
                  Drag to explore
                </span>
              </div>

              {/* Desktop index */}
              <div className="hidden px-8 py-3.5 lg:block xl:px-10">
                <div className="flex items-center justify-between gap-8">
                  <div className="flex items-center gap-4">
                    <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.16em] text-background/30">
                      Selected
                    </span>

                    <span className="font-sans text-xs font-semibold tracking-[0.12em] text-accent">
                      {project.number}
                    </span>
                  </div>

                  <div className="flex flex-1 items-center gap-4">
                    <div className="h-px flex-1 bg-background/10">
                      <div
                        className="h-full bg-accent transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        style={{ width: progressWidth }}
                      />
                    </div>
                  </div>

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
                        aria-label={`Go to project ${item.number}`}
                        aria-current={index === activeIndex}
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

              {/* Mobile indicators */}
              <div className="flex items-center justify-center gap-2 px-6 py-3.5 lg:hidden">
                {projects.map((item, index) => (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() =>
                      goToProject(index, index > activeIndex ? "next" : "prev")
                    }
                    disabled={isTransitioning || index === activeIndex}
                    aria-label={`Go to project ${item.number}`}
                    aria-current={index === activeIndex}
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
