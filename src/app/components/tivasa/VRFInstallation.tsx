
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowUpLeft } from "lucide-react";

import type { Locale } from "@/i18n/config";
import { localizeHref } from "@/i18n/config";

interface VRFInstallationProps {
  locale: Locale;
}

const translations = {
  en: {
    label: "VRF Services",
    description:
      "Specialized VRF solutions — from installation and maintenance to technical resources.",

    installation: {
      meta: "VRF / Installation",
      category: "Installation & Commissioning",
      headingFirst: "Built right.",
      headingSecond: "From day one.",
      explore: "Explore VRF installation",
    },

    maintenance: {
      meta: "VRF / Maintenance",
      category: "Maintenance & Technical Support",
      headingFirst: "Built to last.",
      headingSecond: "Maintained to perform.",
      explore: "Explore VRF maintenance",
    },

    dataCenter: {
      meta: "VRF / DataCenter",
      category: "Technical Resources",
      headingFirst: "Technical",
      headingSecond: "dataCenter.",
      explore: "Explore technical dataCenter",
    },
  },

  fa: {
    label: "خدمات سیستم‌های VRF",
    description:
      "راهکارهای تخصصی VRF شامل نصب، نگهداری و دسترسی به اطلاعات فنی.",

    installation: {
      meta: "VRF / نصب و راه‌اندازی",
      category: "نصب و راه‌اندازی",
      headingFirst: "اجرای اصولی.",
      headingSecond: "از همان روز اول.",
      explore: "مشاهده خدمات نصب VRF",
    },

    maintenance: {
      meta: "VRF / نگهداری",
      category: "نگهداری و پشتیبانی فنی",
      headingFirst: "عملکرد پایدار.",
      headingSecond: "با نگهداری اصولی.",
      explore: "مشاهده خدمات نگهداری VRF",
    },

    dataCenter: {
      meta: "VRF / دیتا سنتر",
      category: "منابع و اطلاعات فنی",
      headingFirst: "بانک اطلاعات",
      headingSecond: "فنی VRF.",
      explore: "مشاهده بانک اطلاعات فنی",
    },
  },
} as const;

export default function VRFInstallation({
  locale,
}: VRFInstallationProps) {
  const isRTL = locale === "fa";
  const t = translations[locale];

  const DirectionArrow = isRTL
    ? ArrowUpLeft
    : ArrowUpRight;

  const cards = [
    {
      id: "installation",
      href: "/installation",
      image: "/Working-Man.png",
      alt: "Tivasa technician working on an installation site",
      position: "object-[center_45%]",
      content: t.installation,
    },
    {
      id: "maintenance",
      href: "/maintenance",
      image: "/HVAC-With-Pipes.png",
      alt: "Industrial HVAC equipment, piping, and pressure gauges",
      position: "object-center",
      content: t.maintenance,
    },
    {
      id: "dataCenter",
      href: "/dataCenter",
      image: "/Database-Pic.png",
      alt: "Data center server racks and precision cooling equipment",
      position: "object-center",
      content: t.dataCenter,
    },
  ] as const;

  return (
    <section
      id="installation"
      dir={isRTL ? "rtl" : "ltr"}
      className="border-b border-background/10 bg-surface text-background"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="grid lg:grid-cols-12">
          {/* SECTION MARKER */}
          <aside
            className={`relative border-b border-background/10 p-5 lg:col-span-3 lg:border-b-0 lg:p-7 ${
              isRTL ? "lg:border-l" : "lg:border-r"
            }`}
          >
            <div
              className={`relative ${
                isRTL ? "pr-4" : "pl-4"
              }`}
            >
              {/* VERTICAL ACCENT */}
              <div
                aria-hidden="true"
                className={`absolute inset-y-0 w-px bg-accent/70 ${
                  isRTL ? "right-0" : "left-0"
                }`}
              />

              <div className="flex items-center gap-2">
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

              <p className="mt-4 max-w-xs font-sans text-sm leading-6 text-background/60">
                {t.description}
              </p>

              {/* SECTION IDENTIFIER */}
              <div className="mt-7 hidden items-center gap-3 lg:flex">
                <span className="h-px w-6 bg-accent/60" />

                <span
                  dir="ltr"
                  className="font-sans text-[10px] font-medium tracking-[0.12em] text-background/35"
                >
                  01 — 03
                </span>
              </div>
            </div>
          </aside>

          {/* SERVICE CARDS */}
          <div className="min-w-0 space-y-3 p-4 md:space-y-4 md:p-6 lg:col-span-9 lg:p-8">
            {cards.map((card, index) => (
              <Link
                key={card.id}
                href={localizeHref(card.href, locale)}
                aria-label={card.content.explore}
                className="group relative block h-[230px] w-full min-w-0 overflow-hidden border border-background/15 bg-foreground p-5 transition-colors duration-300 hover:border-background/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:h-[255px] md:p-7 lg:h-[280px] lg:p-8"
              >
                {/* BACKGROUND IMAGE */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 1023px) 100vw, 75vw"
                    className={`object-cover ${card.position} transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:scale-[1.045]`}
                  />
                </div>

                {/*
                  UNIFORM IMAGE OVERLAY

                  All cards use exactly the same neutral
                  darkening and gradient.

                  No blue tint.
                  No grayscale filters.
                  No per-card color differences.
                */}

                {/* CONSISTENT DARKENING */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-black/45"
                />

                {/* CONSISTENT GRADIENT */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/25"
                />

                {/* INNER FRAME */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-3 border border-white/10 md:inset-4"
                />

                {/* CARD CONTENT */}
                <div className="relative z-10 flex h-full min-h-0 flex-col justify-between">
                  {/* TOP METADATA */}
                  <div className="flex shrink-0 items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="h-6 w-px shrink-0 bg-accent" />

                      <span
                        dir="ltr"
                        className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-accent"
                      >
                        TIVASA
                      </span>

                      <span
                        dir="ltr"
                        className="font-sans text-[9px] font-medium tracking-[0.1em] text-white/40"
                      >
                        / 0{index + 1}
                      </span>
                    </div>

                    <span
                      className={`text-end font-sans text-[9px] font-medium text-white/70 ${
                        isRTL
                          ? ""
                          : "uppercase tracking-[0.12em]"
                      }`}
                    >
                      {card.content.meta}
                    </span>
                  </div>

                  {/* MAIN CONTENT */}
                  <div className="min-w-0">
                    {/* CATEGORY */}
                    <div
                      className={`mb-2 font-sans text-[10px] font-semibold text-accent md:mb-3 ${
                        isRTL
                          ? ""
                          : "uppercase tracking-[0.14em]"
                      }`}
                    >
                      {card.content.category}
                    </div>

                    {/* HEADING */}
                    <h2
                      className={`max-w-5xl font-display font-semibold text-white ${
                        isRTL
                          ? "text-[clamp(1.55rem,3vw,2.9rem)] leading-[1.2] tracking-normal"
                          : "text-[clamp(1.85rem,3.5vw,3.5rem)] leading-[0.98] tracking-[-0.05em]"
                      }`}
                    >
                      {card.content.headingFirst}

                      <br />

                      <span className="font-normal">
                        {card.content.headingSecond}
                      </span>
                    </h2>

                    {/* ANIMATED ACCENT LINE */}
                    <div className="mt-4 h-px w-full overflow-hidden bg-white/20 md:mt-5">
                      <div
                        className={`h-full w-full scale-x-0 bg-accent transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100 ${
                          isRTL
                            ? "origin-right"
                            : "origin-left"
                        }`}
                      />
                    </div>

                    {/* EXPLORE ACTION */}
                    <div className="mt-3 flex items-center justify-between gap-4 md:mt-4">
                      <span
                        className={`min-w-0 font-sans text-[10px] font-medium text-white/80 transition-colors duration-500 group-hover:text-white md:text-xs ${
                          isRTL
                            ? ""
                            : "uppercase tracking-[0.12em]"
                        }`}
                      >
                        {card.content.explore}
                      </span>

                      <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/30 transition-[border-color,background-color] duration-500 group-hover:border-accent group-hover:bg-accent group-focus-visible:border-accent group-focus-visible:bg-accent md:h-9 md:w-9">
                        <DirectionArrow
                          size={16}
                          strokeWidth={1.25}
                          aria-hidden="true"
                          className="text-white transition-colors duration-500"
                        />
                      </span>
                    </div>
                  </div>

                  {/* BOTTOM STATUS LINE */}
                  <div
                    aria-hidden="true"
                    className={`absolute bottom-0 h-px w-24 bg-white/20 ${
                      isRTL ? "right-0" : "left-0"
                    }`}
                  >
                    <div className="h-full w-8 bg-accent" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
