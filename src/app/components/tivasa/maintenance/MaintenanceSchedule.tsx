
"use client";

import { useState } from "react";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";

import type { Locale } from "@/i18n/config";
import { getMaintenanceContent } from "@/i18n/maintenance";

interface MaintenanceScheduleProps {
  locale: Locale;
}

export default function MaintenanceSchedule({
  locale,
}: MaintenanceScheduleProps) {
  const isRTL = locale === "fa";
  const t = getMaintenanceContent(locale).schedule;

  const [active, setActive] = useState(0);

  const DirectionArrow = isRTL ? ArrowUpLeft : ArrowUpRight;

  return (
    <section
      id="maintenance-schedule"
      dir={isRTL ? "rtl" : "ltr"}
      aria-labelledby="maintenance-schedule-title"
      className="scroll-mt-24 border-b border-background/10 bg-surface text-background"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="grid lg:grid-cols-12">
          {/* SECTION MARKER */}
          <aside
            className={`border-b border-background/15 p-6 lg:col-span-3 lg:border-b-0 lg:p-8 ${
              isRTL ? "lg:border-l" : "lg:border-r"
            }`}
          >
            <div className={`relative ${isRTL ? "pr-5" : "pl-5"}`}>
              <span
                aria-hidden="true"
                className={`absolute inset-y-0 w-px bg-accent/70 ${
                  isRTL ? "right-0" : "left-0"
                }`}
              />

              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

                <span
                  className={`font-sans text-sm font-semibold text-accent ${
                    isRTL ? "" : "uppercase tracking-[0.16em]"
                  }`}
                >
                  {t.eyebrow}
                </span>
              </div>

              <p className="mt-4 max-w-xs font-sans text-sm leading-6 text-background/55">
                {t.description}
              </p>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="min-w-0 lg:col-span-9">
            {/* EDITORIAL HEADING */}
            <div className="px-6 pb-7 pt-9 md:px-10 lg:px-12">
              <span
                className={`font-sans text-[10px] font-semibold text-accent ${
                  isRTL ? "" : "uppercase tracking-[0.18em]"
                }`}
              >
                {t.eyebrow}
              </span>

              <h2
                id="maintenance-schedule-title"
                className={`mt-4 max-w-5xl font-display font-semibold ${
                  isRTL
                    ? "text-[clamp(2.2rem,3.7vw,3.8rem)] leading-[1.3] tracking-normal"
                    : "text-[clamp(2.6rem,4.5vw,4.6rem)] leading-[0.95] tracking-[-0.06em]"
                }`}
              >
                {t.title}
                <br />
                <span className="font-normal text-background">
                  {t.accent}
                </span>
              </h2>
            </div>

            {/* INTERVAL TABS */}
            <div
              role="tablist"
              aria-label={t.select}
              className="grid grid-cols-2 border-y border-background/25 bg-[#08182d] sm:grid-cols-4"
            >
              {t.intervals.map((item, index) => {
                const isActive = active === index;

                return (
                  <button
                    key={item.number}
                    id={`maintenance-tab-${index}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`maintenance-panel-${index}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActive(index)}
                    onKeyDown={(event) => {
                      let nextIndex: number | null = null;

                      if (event.key === "Home") {
                        nextIndex = 0;
                      } else if (event.key === "End") {
                        nextIndex = t.intervals.length - 1;
                      } else if (
                        event.key === "ArrowRight" ||
                        event.key === "ArrowLeft"
                      ) {
                        const step =
                          event.key === "ArrowRight"
                            ? isRTL
                              ? -1
                              : 1
                            : isRTL
                              ? 1
                              : -1;

                        nextIndex =
                          (index + step + t.intervals.length) %
                          t.intervals.length;
                      }

                      if (nextIndex !== null) {
                        event.preventDefault();
                        setActive(nextIndex);

                        document
                          .getElementById(`maintenance-tab-${nextIndex}`)
                          ?.focus();
                      }
                    }}
                    className={`group relative min-h-[66px] min-w-0 px-5 py-3 text-start transition-colors duration-200 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent ${
                      index < 2
                        ? "border-b border-background/20 sm:border-b-0"
                        : ""
                    } ${
                      index !== t.intervals.length - 1
                        ? isRTL
                          ? "border-l border-background/20"
                          : "border-r border-background/20"
                        : ""
                    } ${
                      isActive
                        ? "bg-background/[0.12] text-background"
                        : "text-background/65 hover:bg-background/[0.07] hover:text-background"
                    }`}
                  >
                    {/* NUMBER + ACTIVE STATUS */}
                    <div className="flex items-center justify-between gap-2">
                      <span
                        dir="ltr"
                        className={`font-sans text-[11px] font-semibold tracking-[0.08em] ${
                          isActive
                            ? "text-accent"
                            : "text-background/45 group-hover:text-accent"
                        }`}
                      >
                        {item.number}
                      </span>

                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 rounded-full transition-colors duration-200 ${
                          isActive
                            ? "bg-accent"
                            : "bg-background/20 group-hover:bg-accent/60"
                        }`}
                      />
                    </div>

                    {/* LABEL */}
                    <span
                      className={`mt-1 block font-sans text-xs font-semibold leading-5 transition-colors duration-200 ${
                        isActive
                          ? "text-background"
                          : "text-background/70 group-hover:text-background"
                      }`}
                    >
                      {item.label}
                    </span>

                    {/* ACTIVE INDICATOR */}
                    <span
                      aria-hidden="true"
                      className={`absolute bottom-0 h-[3px] bg-accent transition-[width] duration-300 ${
                        isRTL ? "right-0" : "left-0"
                      } ${isActive ? "w-full" : "w-0"}`}
                    />
                  </button>
                );
              })}
            </div>

            {/* STABLE-HEIGHT PANELS */}
            <div className="grid">
              {t.intervals.map((interval, intervalIndex) => {
                const isActive = active === intervalIndex;

                return (
                  <div
                    key={interval.number}
                    id={`maintenance-panel-${intervalIndex}`}
                    role="tabpanel"
                    aria-labelledby={`maintenance-tab-${intervalIndex}`}
                    aria-hidden={!isActive}
                    inert={!isActive}
                    tabIndex={isActive ? 0 : -1}
                    className={`col-start-1 row-start-1 min-w-0 outline-none focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-accent ${
                      isActive
                        ? "relative z-10 visible opacity-100"
                        : "pointer-events-none invisible opacity-0"
                    }`}
                  >
                    {/* PANEL HEADING */}
                    <div className="flex items-end justify-between gap-5 px-6 py-6 md:px-10 lg:px-12">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="h-5 w-px bg-accent" />

                          <span
                            className={`font-sans text-[10px] font-semibold text-accent ${
                              isRTL ? "" : "uppercase tracking-[0.15em]"
                            }`}
                          >
                            {interval.frequency}
                          </span>
                        </div>

                        <h3
                          className={`mt-3 font-display font-semibold ${
                            isRTL
                              ? "text-[clamp(1.7rem,2.4vw,2.4rem)] leading-[1.3] tracking-normal"
                              : "text-[clamp(1.8rem,2.6vw,2.6rem)] leading-[1] tracking-[-0.045em]"
                          }`}
                        >
                          {interval.title}
                        </h3>
                      </div>

                      <DirectionArrow
                        size={20}
                        strokeWidth={1.25}
                        aria-hidden="true"
                        className="shrink-0 text-accent"
                      />
                    </div>

                    {/* TASKS */}
                    <div className="grid border-t border-background/15 sm:grid-cols-2">
                      {interval.tasks.map((task, index) => (
                        <div
                          key={`${intervalIndex}-${index}`}
                          className={`group flex min-w-0 items-start gap-3 border-b border-background/10 px-6 py-4 transition-colors duration-200 hover:bg-background/[0.035] md:px-10 lg:px-12 ${
                            index % 2 === 0
                              ? isRTL
                                ? "sm:border-l sm:border-background/10"
                                : "sm:border-r sm:border-background/10"
                              : ""
                          }`}
                        >
                          <span
                            dir="ltr"
                            className="shrink-0 font-sans text-xs font-semibold text-accent"
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <p className="min-w-0 font-sans text-sm leading-6 text-background transition-colors duration-200 group-hover:text-background">
                            {task}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* BOTTOM METADATA */}
            <div className="flex items-center justify-between gap-4 border-t border-background/15 px-6 py-4 md:px-10 lg:px-12">
              <span
                className={`font-sans text-[10px] font-medium text-background/35 ${
                  isRTL ? "" : "uppercase tracking-[0.14em]"
                }`}
              >
                {t.select}
              </span>

              <span
                dir="ltr"
                className="font-sans text-[10px] font-semibold tracking-[0.12em] text-accent"
              >
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(t.intervals.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
