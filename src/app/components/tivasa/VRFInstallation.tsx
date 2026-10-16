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
      "Technical design, installation, commissioning and maintenance. Comprehensive services throughout the VRF system lifecycle.",
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
  },
  fa: {
    label: "خدمات سیستم‌های VRF",
    description:
      "طراحی فنی، نصب، راه‌اندازی و نگهداری؛ خدمات تخصصی در تمامی مراحل اجرای سیستم‌های VRF.",
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
  },
} as const;

export default function VRFInstallation({ locale }: VRFInstallationProps) {
  const isRTL = locale === "fa";
  const t = translations[locale];

  const DirectionArrow = isRTL ? ArrowUpLeft : ArrowUpRight;

  const cards = [
    {
      id: "installation",
      href: "/installation",
      image: "/Symmetrical-HVAC-Units-Beneath-Industrial-Canopy.png",
      alt: "VRF outdoor units installed beneath an industrial canopy",
      content: t.installation,
      height: "h-[360px] md:h-[390px] lg:h-[420px]",
    },
    {
      id: "maintenance",
      href: "/maintenance",
      image: "/Symmetrical-HVAC-Units-Beneath-Industrial-Canopy.png",
      alt: "Industrial VRF equipment",
      content: t.maintenance,
      height: "h-[360px] md:h-[390px] lg:h-[420px]",
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
          <div
            className={`relative border-b border-background/10 p-6 lg:col-span-3 lg:border-b-0 lg:p-10 ${
              isRTL ? "lg:border-l" : "lg:border-r"
            }`}
          >
            <div className={`relative ${isRTL ? "pr-5" : "pl-5"}`}>
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

              <p className="mt-6 max-w-xs font-sans text-base leading-7 text-background/65">
                {t.description}
              </p>
            </div>
          </div>

          {/* SERVICE CARDS */}
          <div className="min-w-0 space-y-5 p-6 md:space-y-7 md:p-10 lg:col-span-9 lg:p-14">
            {cards.map((card, index) => (
              <Link
                key={card.id}
                href={localizeHref(card.href, locale)}
                className={`tivasa-system-card group relative block w-full min-w-0 overflow-hidden border border-background/15 bg-foreground p-6 md:p-10 ${card.height}`}
              >
                {/* BACKGROUND IMAGE */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 1023px) 100vw, 75vw"
                    className={`object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:scale-[1.045] ${
                      index === 1 ? "grayscale-[35%]" : ""
                    }`}
                  />
                </div>

                {/* IMAGE OVERLAYS */}
                <div
                  className={`pointer-events-none absolute inset-0 ${
                    index === 0 ? "bg-foreground/55" : "bg-surface/65"
                  }`}
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-foreground/30" />

                {/* CONTENT */}
                <div className="relative z-10 flex h-full min-h-0 flex-col justify-between">
                  {/* TOP META */}
                  <div className="flex shrink-0 items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {/* FIXED HEIGHT — NO RESIZE ON HOVER */}
                      <div className="h-8 w-px bg-accent" />

                      <div
                        dir="ltr"
                        className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-accent"
                      >
                        TIVASA
                      </div>
                    </div>

                    <div
                      className={`font-sans text-[10px] font-medium text-background/75 ${
                        isRTL ? "" : "uppercase tracking-[0.16em]"
                      }`}
                    >
                      {card.content.meta}
                    </div>
                  </div>

                  {/* MAIN CONTENT */}
                  <div className="min-w-0">
                    <div
                      className={`font-sans text-sm font-semibold text-accent ${
                        isRTL ? "mb-4" : "mb-6 uppercase tracking-[0.16em]"
                      }`}
                    >
                      {card.content.category}
                    </div>

                    <div className="max-w-5xl">
                      <h2
                        className={`font-display font-semibold ${
                          isRTL
                            ? "text-[clamp(2rem,4vw,5rem)] leading-[1.3] tracking-normal"
                            : index === 0
                              ? "text-[clamp(3rem,6vw,7rem)] leading-[0.85] tracking-[-0.06em]"
                              : "text-[clamp(2.8rem,5.3vw,6rem)] leading-[0.9] tracking-[-0.055em]"
                        }`}
                      >
                        {card.content.headingFirst}
                        <br />
                        <span className="font-normal">
                          {card.content.headingSecond}
                        </span>
                      </h2>

                      {/* CONSISTENT ANIMATED LINE */}
                      <div
                        className={`h-px w-full overflow-hidden bg-background/20 ${
                          isRTL ? "mt-6" : "mt-8"
                        }`}
                      >
                        <div
                          className={`h-full w-full bg-accent origin-${
                            isRTL ? "right" : "left"
                          } scale-x-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100`}
                        />
                      </div>
                    </div>

                    {/* EXPLORE ACTION */}
                    <div className="mt-6 flex items-center justify-between gap-4">
                      <span
                        className={`font-sans text-xs font-medium text-background/80 transition-colors duration-500 group-hover:text-background ${
                          isRTL ? "" : "uppercase tracking-[0.14em]"
                        }`}
                      >
                        {card.content.explore}
                      </span>

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-background/25 transition-[border-color,background-color] duration-500 group-hover:border-accent group-hover:bg-accent">
                        <DirectionArrow
                          size={19}
                          strokeWidth={1.25}
                          className="text-background/80 transition-colors duration-500 group-hover:text-foreground"
                        />
                      </span>
                    </div>
                  </div>

                  {/* STATUS BAR — FIXED SIZE */}
                  <div
                    className={`absolute bottom-0 h-px w-40 bg-background/20 ${
                      isRTL ? "right-0" : "left-0"
                    }`}
                  >
                    <div className="h-full w-10 bg-accent" />
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
