
"use client";

import { useRef, useState, type TouchEvent } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpLeft,
  ArrowUpRight,
} from "lucide-react";

import type { Locale } from "@/i18n/config";
import { getDataCenterContent } from "@/i18n/dataCenter";

interface DataCenterBenefitsProps {
  locale: Locale;
}

const interfaceText = {
  en: {
    eyebrow: "VRF / Data Center Engineering",
    advantages: "Technical advantages",
    selected: "Selected advantage",
    previous: "Previous advantage",
    next: "Next advantage",
    navigation: "Select a technical advantage",
    counter: "System capability",
    detail: "Engineering / Performance",
    footer: "Precision / Reliability / Efficiency",
    swipe: "Swipe to explore",
  },
  fa: {
    eyebrow: "مهندسی VRF / دیتاسنتر",
    advantages: "مزایای فنی",
    selected: "مزیت انتخاب‌شده",
    previous: "مزیت قبلی",
    next: "مزیت بعدی",
    navigation: "انتخاب مزیت فنی",
    counter: "قابلیت سیستم",
    detail: "مهندسی / عملکرد",
    footer: "دقت / پایداری / بهره‌وری",
    swipe: "برای مشاهده بیشتر ورق بزنید",
  },
} as const;

const SWIPE_THRESHOLD = 45;

export default function DataCenterBenefits({
  locale,
}: DataCenterBenefitsProps) {
  const isRTL = locale === "fa";

  const t = getDataCenterContent(locale).benefits;
  const ui = interfaceText[locale];

  const [activeIndex, setActiveIndex] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const total = t.items.length;
  const currentItem = t.items[activeIndex];

  const PreviousArrow = isRTL ? ArrowRight : ArrowLeft;
  const NextArrow = isRTL ? ArrowLeft : ArrowRight;
  const DetailArrow = isRTL ? ArrowUpLeft : ArrowUpRight;

  const goPrevious = () => {
    setActiveIndex((current) => Math.max(0, current - 1));
  };

  const goNext = () => {
    setActiveIndex((current) =>
      Math.min(total - 1, current + 1),
    );
  };

  /*
   * MOBILE SWIPE
   *
   * The direction is intentionally identical
   * for English and Persian.
   *
   * Swipe LEFT  = Next
   * Swipe RIGHT = Previous
   *
   * RTL does not reverse touch navigation.
   */

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    if (event.touches.length !== 1) return;

    const touch = event.touches[0];

    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (
      touchStartX.current === null ||
      touchStartY.current === null
    ) {
      return;
    }

    const touch = event.changedTouches[0];

    const deltaX = touch.clientX - touchStartX.current;
    const deltaY = touch.clientY - touchStartY.current;

    touchStartX.current = null;
    touchStartY.current = null;

    // Ignore small gestures and vertical scrolling.
    if (
      Math.abs(deltaX) < SWIPE_THRESHOLD ||
      Math.abs(deltaX) <= Math.abs(deltaY)
    ) {
      return;
    }

    // Identical gesture direction in EN and FA.
    if (deltaX < 0) {
      goNext();
    } else {
      goPrevious();
    }
  };

  const handleTouchCancel = () => {
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section
      id="data-center-benefits"
      dir={isRTL ? "rtl" : "ltr"}
      aria-labelledby="data-center-benefits-title"
      className="scroll-mt-24 overflow-hidden border-b border-background/10 bg-surface text-background"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="grid lg:grid-cols-12">

          {/* SECTION MARKER */}
          <aside
            className={`border-b border-background/15 p-4 md:p-5 lg:col-span-3 lg:border-b-0 lg:p-6 ${
              isRTL ? "lg:border-l" : "lg:border-r"
            }`}
          >
            <div
              className={`relative ${
                isRTL ? "pr-5" : "pl-5"
              }`}
            >
              {/* ACCENT RAIL */}
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
                    isRTL
                      ? ""
                      : "uppercase tracking-[0.16em]"
                  }`}
                >
                  {t.label}
                </span>
              </div>

              <p className="mt-3 max-w-xs font-sans text-[13px] leading-5 text-background/55">
                {t.note}
              </p>

              {/* IDENTIFIER */}
              <div className="mt-5 hidden items-center gap-3 lg:flex">
                <span className="h-px w-7 bg-accent/60" />

                <span
                  dir="ltr"
                  className="font-sans text-[10px] font-semibold tracking-[0.12em] text-background/35"
                >
                  VRF / DC — 07
                </span>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="flex min-w-0 flex-col lg:col-span-9">

            {/* SECTION HEADING */}
            <div className="px-5 pb-5 pt-6 md:px-8 md:pt-7 lg:px-10">
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-accent" />

                <span
                  className={`font-sans text-[10px] font-semibold text-accent ${
                    isRTL
                      ? ""
                      : "uppercase tracking-[0.16em]"
                  }`}
                >
                  {ui.eyebrow}
                </span>
              </div>

              <h2
                id="data-center-benefits-title"
                className={`mt-3 max-w-5xl font-display font-semibold ${
                  isRTL
                    ? "text-[clamp(1.85rem,3.1vw,3.2rem)] leading-[1.2] tracking-normal"
                    : "text-[clamp(2.15rem,3.8vw,4rem)] leading-[0.98] tracking-[-0.055em]"
                }`}
              >
                {t.title}

                <br />

                <span className="font-normal text-background/45">
                  {t.accent}
                </span>
              </h2>
            </div>

            {/* INTERACTIVE TIMELINE */}
            <div className="border-y border-background/15 px-5 py-3 md:px-8 lg:px-10">
              <div
                role="group"
                aria-label={ui.navigation}
                className="grid grid-cols-7"
              >
                {t.items.map((item, index) => {
                  const isActive = index === activeIndex;
                  const isCompleted = index < activeIndex;

                  return (
                    <button
                      key={item.number}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`${ui.advantages} ${item.number}: ${item.title}`}
                      aria-pressed={isActive}
                      aria-controls="data-center-benefits-panel"
                      className="group relative flex min-w-0 flex-col items-center gap-2 py-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      {/* NUMBER */}
                      <span
                        dir="ltr"
                        className={`font-display text-xs font-semibold transition-colors duration-300 md:text-base ${
                          isActive
                            ? "text-background"
                            : isCompleted
                              ? "text-background/65"
                              : "text-background/30 group-hover:text-background/75"
                        }`}
                      >
                        {item.number}
                      </span>

                      {/* TIMELINE LINE */}
                      <span
                        className={`relative h-px w-full transition-colors duration-500 ${
                          isActive || isCompleted
                            ? "bg-accent"
                            : "bg-background/20 group-hover:bg-background/45"
                        }`}
                      >
                        {/* NODE */}
                        <span
                          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-500 ${
                            isActive
                              ? "h-3 w-3 bg-accent ring-4 ring-accent/20"
                              : isCompleted
                                ? "h-2 w-2 bg-accent"
                                : "h-1.5 w-1.5 bg-background/45 group-hover:bg-background"
                          }`}
                        />
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* TIMELINE LABELS */}
              <div className="mt-2 flex items-center justify-between gap-4">
                <span
                  className={`font-sans text-[9px] font-medium text-background/40 ${
                    isRTL
                      ? ""
                      : "uppercase tracking-[0.13em]"
                  }`}
                >
                  {ui.advantages}
                </span>

                <span
                  dir="ltr"
                  className="font-sans text-[10px] font-semibold tracking-[0.1em] text-accent"
                >
                  {String(activeIndex + 1).padStart(2, "0")}
                  {" / "}
                  {String(total).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* ACTIVE BENEFIT PANEL — BLACK CARD */}
            <div
              id="data-center-benefits-panel"
              role="region"
              aria-label={ui.selected}
              aria-live="polite"
              aria-atomic="true"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={handleTouchCancel}
              className="relative flex min-h-[245px] flex-col overflow-hidden border-b border-background/15 bg-foreground md:min-h-[250px] lg:touch-auto"
              style={{
                touchAction: "pan-y",
              }}
            >
              {/* TECHNICAL CORNER — NO GRID */}
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute top-0 h-9 w-9 border-t-2 border-accent ${
                  isRTL
                    ? "right-0 border-r-2"
                    : "left-0 border-l-2"
                }`}
              />

              {/* OPPOSITE CORNER */}
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute bottom-0 h-9 w-9 border-b border-background/20 ${
                  isRTL
                    ? "left-0 border-l"
                    : "right-0 border-r"
                }`}
              />

              {/* PANEL CONTENT */}
              <div className="relative z-10 grid flex-1 gap-4 px-5 py-5 md:grid-cols-12 md:gap-6 md:px-8 md:py-6 lg:px-10">

                {/* NUMBER */}
                <div className="flex flex-col md:col-span-3">
                  <span
                    className={`font-sans text-[10px] font-semibold text-background/45 ${
                      isRTL
                        ? ""
                        : "uppercase tracking-[0.14em]"
                    }`}
                  >
                    {ui.counter}
                  </span>

                  <span
                    key={`benefit-number-${activeIndex}`}
                    dir="ltr"
                    className="tivasa-process-number mt-1.5 w-fit font-display text-[clamp(3rem,5vw,4.5rem)] font-semibold leading-none tracking-[-0.07em] text-accent"
                  >
                    {currentItem.number}
                  </span>

                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-px w-8 bg-accent/60" />

                    <span
                      dir="ltr"
                      className="font-sans text-[10px] font-medium tracking-[0.12em] text-background/35"
                    >
                      VRF / DC
                    </span>
                  </div>
                </div>

                {/* INFORMATION */}
                <div className="flex min-w-0 flex-col md:col-span-9">

                  {/* PANEL EYEBROW */}
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`font-sans text-[10px] font-semibold text-accent ${
                        isRTL
                          ? ""
                          : "uppercase tracking-[0.15em]"
                      }`}
                    >
                      {ui.selected}
                    </span>

                    <DetailArrow
                      size={21}
                      strokeWidth={1.25}
                      aria-hidden="true"
                      className="hidden shrink-0 text-accent md:block"
                    />
                  </div>

                  {/* ACTIVE TITLE */}
                  <h3
                    key={`benefit-title-${activeIndex}`}
                    className={`tivasa-process-title mt-2 max-w-3xl font-display font-semibold text-background ${
                      isRTL
                        ? "text-[clamp(1.6rem,2.5vw,2.5rem)] leading-[1.25] tracking-normal"
                        : "text-[clamp(1.7rem,2.8vw,2.9rem)] leading-[1.05] tracking-[-0.05em]"
                    }`}
                  >
                    {currentItem.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    key={`benefit-description-${activeIndex}`}
                    className="tivasa-process-description mt-3 max-w-2xl font-sans text-[13px] leading-6 text-background/75 md:text-sm md:leading-6"
                  >
                    {currentItem.description}
                  </p>

                  {/* CATEGORY TAG */}
                  <div className="mt-auto pt-5">
                    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-background/15 pt-3">
                      <div className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 shrink-0 bg-accent" />

                        <span
                          className={`font-sans text-[10px] font-semibold text-background/50 ${
                            isRTL
                              ? ""
                              : "uppercase tracking-[0.12em]"
                          }`}
                        >
                          {currentItem.tag}
                        </span>
                      </div>

                      <span
                        dir="ltr"
                        className="font-sans text-[9px] font-medium tracking-[0.12em] text-background/25"
                      >
                        TIVASA / ENGINEERING
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* MOBILE SWIPE HINT */}
              <div className="relative z-10 flex items-center justify-between border-t border-background/10 px-5 py-2 md:hidden">
                <span className="font-sans text-[10px] text-background/40">
                  {ui.swipe}
                </span>

                <div
                  dir="ltr"
                  className="flex items-center gap-2 text-accent"
                >
                  <ArrowLeft size={14} strokeWidth={1.4} />
                  <span className="h-px w-6 bg-accent/60" />
                  <ArrowRight size={14} strokeWidth={1.4} />
                </div>
              </div>
            </div>

            {/* NAVIGATION FOOTER */}
            <div className="flex items-center justify-between gap-4 px-5 py-3 md:px-8 lg:px-10">

              {/* PROGRESS */}
              <div className="flex min-w-0 items-center gap-3">
                <span
                  className={`hidden font-sans text-[10px] font-medium text-background/40 sm:block ${
                    isRTL
                      ? ""
                      : "uppercase tracking-[0.13em]"
                  }`}
                >
                  {ui.detail}
                </span>

                <div className="h-px w-12 overflow-hidden bg-background/15 md:w-20">
                  <div
                    className="h-full bg-accent transition-[width] duration-500"
                    style={{
                      width: `${
                        ((activeIndex + 1) / total) * 100
                      }%`,
                    }}
                  />
                </div>

                <span
                  dir="ltr"
                  className="font-sans text-[10px] font-semibold text-accent"
                >
                  {String(activeIndex + 1).padStart(2, "0")}
                  {" / "}
                  {String(total).padStart(2, "0")}
                </span>
              </div>

              {/* PREVIOUS / NEXT BUTTONS */}
              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={goPrevious}
                  disabled={activeIndex === 0}
                  aria-label={ui.previous}
                  className="group flex h-9 w-9 items-center justify-center border border-background/25 text-background transition-[background-color,border-color] duration-300 hover:border-accent hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:border-background/25 disabled:hover:bg-transparent"
                >
                  <PreviousArrow
                    size={17}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </button>

                <button
                  type="button"
                  onClick={goNext}
                  disabled={activeIndex === total - 1}
                  aria-label={ui.next}
                  className="group flex h-9 w-9 items-center justify-center border border-background/25 text-background transition-[background-color,border-color] duration-300 hover:border-accent hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:border-background/25 disabled:hover:bg-transparent"
                >
                  <NextArrow
                    size={17}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </button>
              </div>
            </div>

            {/* BOTTOM FOOTER */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-background/10 px-5 py-2 md:px-8 lg:px-10">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />

                <span
                  className={`font-sans text-[10px] font-medium text-background/35 ${
                    isRTL
                      ? ""
                      : "uppercase tracking-[0.12em]"
                  }`}
                >
                  {ui.footer}
                </span>
              </div>

              <span
                dir="ltr"
                className="font-sans text-[10px] font-medium tracking-[0.12em] text-background/25"
              >
                TIVASA / DC
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
