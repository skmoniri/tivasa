
import { Activity } from "lucide-react";

import type { Locale } from "@/i18n/config";
import { getMaintenanceContent } from "@/i18n/maintenance";

interface MaintenanceMonitoringProps {
  locale: Locale;
}

export default function MaintenanceMonitoring({
  locale,
}: MaintenanceMonitoringProps) {
  const isRTL = locale === "fa";
  const t = getMaintenanceContent(locale).monitoring;

  return (
    <section
      id="maintenance-monitoring"
      dir={isRTL ? "rtl" : "ltr"}
      aria-labelledby="maintenance-monitoring-title"
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
              {/* RED VERTICAL RAIL */}
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
            {/* COMPACT EDITORIAL HEADING */}
            <div className="px-6 pb-6 pt-8 md:px-10 lg:px-12">
              <h2
                id="maintenance-monitoring-title"
                className={`max-w-5xl font-display font-semibold ${
                  isRTL
                    ? "text-[clamp(2rem,3.2vw,3.3rem)] leading-[1.3] tracking-normal"
                    : "text-[clamp(2.3rem,3.8vw,4rem)] leading-[0.96] tracking-[-0.055em]"
                }`}
              >
                {t.title}
                <br />

                <span className="font-normal text-background">
                  {t.accent}
                </span>
              </h2>
            </div>

            {/* MONITORING PANEL */}
            <div className="border-t border-background/15">
              {/* PANEL HEADER */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-background/15 bg-background/[0.035] px-6 py-4 md:px-10 lg:px-12">
                <div className="flex items-center gap-3">
                  <Activity
                    size={17}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="shrink-0 text-accent"
                  />

                  <span
                    className={`font-sans text-xs font-semibold text-background/85 ${
                      isRTL ? "" : "uppercase tracking-[0.1em]"
                    }`}
                  >
                    {t.panel}
                  </span>
                </div>

                <span className="font-sans text-[10px] text-background/40">
                  {t.panelNote}
                </span>
              </div>

              {/* INDICATOR ROWS */}
              <div>
                {t.indicators.map((item, index) => (
                  <article
                    key={item.number}
                    className={`group grid gap-2 px-6 py-3.5 transition-colors duration-300 hover:bg-background/[0.035] sm:grid-cols-[42px_minmax(0,1fr)_minmax(0,1.3fr)] sm:items-center sm:gap-5 md:px-10 lg:px-12 ${
                      index !== t.indicators.length - 1
                        ? "border-b border-background/10"
                        : ""
                    }`}
                  >
                    {/* INDICATOR NUMBER */}
                    <div className="flex items-center gap-3">
                      <span className="h-4 w-px shrink-0 bg-accent" />

                      <span
                        dir="ltr"
                        className="font-sans text-xs font-semibold tracking-[0.06em] text-accent"
                      >
                        {item.number}
                      </span>
                    </div>

                    {/* INDICATOR TITLE */}
                    <h3 className="min-w-0 font-sans text-[13px] font-semibold leading-6 text-background/85 transition-colors duration-300 group-hover:text-background">
                      {item.title}
                    </h3>

                    {/* INDICATOR PURPOSE */}
                    <p className="min-w-0 font-sans text-[12px] leading-5 text-background transition-colors duration-300 group-hover:text-background">
                      {item.purpose}
                    </p>
                  </article>
                ))}
              </div>

              {/* PANEL FOOTER */}
              <div className="flex items-center gap-3 border-t border-background/15 bg-background/[0.035] px-6 py-3 md:px-10 lg:px-12">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

                <p className="font-sans text-[10px] leading-5 text-background/40">
                  {t.footer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
