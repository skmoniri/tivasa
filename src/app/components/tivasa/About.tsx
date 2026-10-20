
"use client";

import Image from "next/image";

import {
  ArrowUpRight,
  ArrowUpLeft,
  FileText,
  Download,
} from "lucide-react";

import type { Locale } from "@/i18n/config";
import { getTivasaData } from "@/i18n/tivasaData";

interface AboutProps {
  locale: Locale;
}

const RESUME_URL =
  "/catalogs/Teta%20Company%20VRF%20System%20Resume.pdf";

const EXHIBITION_IMAGE = "/TETA-exhibition.png";

const translations = {
  en: {
    label: "About Tivasa",
    disciplines: "VRF Engineering / Installation / Service",
    headingFirst: "Engineered for",
    headingSecond: "lasting performance.",
    paragraphOne:
      "Tivasa specializes in VRF air-conditioning systems, bringing together technical design, equipment selection and professional installation to deliver reliable climate solutions.",
    paragraphTwo:
      "Our approach covers every stage of a project, from assessing requirements and commissioning equipment to ongoing maintenance and technical support.",
    resume: "Download Company Resume",
    resumeAria: "Download company resume PDF",
    exhibitionLabel: "Company Exhibition",
    exhibitionCaption: "TETA Company / Exhibition",
    exhibitionAlt:
      "TETA Company HVAC exhibition booth featuring company branding and an illuminated display",
  },

  fa: {
    label: "درباره تیواسا",
    disciplines: "مهندسی / نصب / خدمات VRF",
    headingFirst: "مهندسی دقیق",
    headingSecond: "برای عملکرد پایدار.",
    paragraphOne:
      "تیواسا در زمینه سیستم‌های تهویه مطبوع VRF فعالیت می‌کند و با تمرکز بر طراحی فنی، انتخاب تجهیزات و اجرای اصولی، راهکارهایی متناسب با نیاز هر پروژه ارائه می‌دهد.",
    paragraphTwo:
      "رویکرد ما تمامی مراحل پروژه، از بررسی نیازها و راه‌اندازی تجهیزات تا نگهداری و پشتیبانی فنی را در بر می‌گیرد.",
    resume: "دانلود رزومه شرکت",
    resumeAria: "دانلود فایل PDF رزومه شرکت",
    exhibitionLabel: "حضور نمایشگاهی",
    exhibitionCaption: "شرکت تتا / نمایشگاه",
    exhibitionAlt:
      "غرفه نمایشگاهی شرکت تتا با نشان تجاری و نمایشگر نورپردازی‌شده",
  },
} as const;

export default function About({ locale }: AboutProps) {
  const isRTL = locale === "fa";
  const t = translations[locale];

  const capabilities = getTivasaData(locale).capabilities;

  const DirectionArrow = isRTL ? ArrowUpLeft : ArrowUpRight;

  return (
    <section
      id="about"
      dir={isRTL ? "rtl" : "ltr"}
      className="border-b border-foreground/10 bg-background text-foreground"
    >
      <div className="mx-auto max-w-[1800px]">

        {/* ABOUT INTRO */}
        <div className="grid lg:grid-cols-12">

          {/* SECTION MARKER */}
          <div
            className={`tivasa-about-reveal border-b border-foreground/10 p-5 lg:col-span-3 lg:border-b-0 lg:p-7 ${
              isRTL ? "lg:border-l" : "lg:border-r"
            }`}
          >
            <div
              className={`relative ${
                isRTL ? "pr-4" : "pl-4"
              }`}
            >
              {/* RED VERTICAL RAIL */}
              <div
                aria-hidden="true"
                className={`absolute top-0 h-full w-px bg-accent ${
                  isRTL ? "right-0" : "left-0"
                }`}
              />

              {/* SECTION LABEL */}
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />

                <div
                  className={`font-sans text-sm font-semibold text-accent ${
                    isRTL
                      ? ""
                      : "uppercase tracking-[0.16em]"
                  }`}
                >
                  {t.label}
                </div>
              </div>

              {/* DISCIPLINES */}
              <div className="mt-4 max-w-[220px] font-sans text-sm font-normal leading-6 text-foreground/45">
                {t.disciplines}
              </div>
            </div>
          </div>

          {/* MAIN ABOUT CONTENT */}
          <div className="tivasa-about-reveal p-5 md:p-7 lg:col-span-9 lg:px-10 lg:py-9">

            {/* HEADING */}
            <h2
              className={`max-w-6xl font-display font-semibold ${
                isRTL
                  ? "text-[clamp(2.2rem,3.7vw,4.2rem)] leading-[1.25] tracking-normal"
                  : "text-[clamp(2.8rem,4.6vw,5.1rem)] leading-[0.94] tracking-[-0.06em]"
              }`}
            >
              {t.headingFirst}

              <br />

              <span
                className={`font-normal text-foreground/85 ${
                  isRTL ? "md:mr-[4%]" : "md:ml-[4%]"
                }`}
              >
                {t.headingSecond}
              </span>
            </h2>

            {/* DESCRIPTIONS */}
            <div className="mt-7 grid gap-5 md:mt-8 md:grid-cols-2 md:gap-10">
              <p className="max-w-xl font-sans text-[15px] font-normal leading-7 text-foreground/65">
                {t.paragraphOne}
              </p>

              <p className="max-w-xl font-sans text-[15px] font-normal leading-7 text-foreground/45">
                {t.paragraphTwo}
              </p>
            </div>

            {/*
              RESUME + EXHIBITION

              Existing resume remains unchanged.

              New exhibition photo is compact and
              positioned beside the resume on desktop.
            */}
            <div className="mt-7 grid gap-5 md:mt-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center md:gap-6 lg:gap-8">

              {/* COMPANY RESUME DOWNLOAD */}
              <div className="flex min-w-0 items-center">
                <a
                  href={RESUME_URL}
                  download="Teta Company VRF System Resume.pdf"
                  type="application/pdf"
                  aria-label={t.resumeAria}
                  className="group/resume inline-flex min-h-[44px] max-w-full items-center justify-between gap-6 border border-foreground/15 px-4 py-2.5 transition-colors duration-300 hover:border-accent hover:bg-accent/[0.035] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <FileText
                      size={16}
                      strokeWidth={1.4}
                      aria-hidden="true"
                      className="shrink-0 text-accent"
                    />

                    <span
                      className={`font-sans text-[11px] font-semibold text-foreground transition-colors duration-300 group-hover/resume:text-accent ${
                        isRTL
                          ? ""
                          : "uppercase tracking-[0.06em]"
                      }`}
                    >
                      {t.resume}
                    </span>
                  </span>

                  <span className="flex shrink-0 items-center gap-2">
                    <span
                      dir="ltr"
                      className="font-sans text-[9px] font-semibold tracking-[0.08em] text-foreground/35"
                    >
                      PDF
                    </span>

                    <Download
                      size={14}
                      strokeWidth={1.4}
                      aria-hidden="true"
                      className="text-foreground/40 transition-colors duration-300 group-hover/resume:text-accent"
                    />
                  </span>
                </a>
              </div>

              {/* TETA EXHIBITION PHOTOGRAPH */}
              <figure className="group/exhibition min-w-0">
                <div className="relative h-[118px] overflow-hidden border border-foreground/10 bg-surface sm:h-[138px] md:h-[126px] lg:h-[140px]">

                  {/* IMAGE */}
                  <Image
                    src={EXHIBITION_IMAGE}
                    alt={t.exhibitionAlt}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 45vw, 35vw"
                    className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/exhibition:scale-[1.045]"
                  />

                  {/* VERY SUBTLE BOTTOM SHADING */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/35 to-transparent"
                  />

                  {/* IMAGE INDEX */}
                  <div
                    className={`pointer-events-none absolute top-3 flex items-center gap-2 ${
                      isRTL ? "right-3" : "left-3"
                    }`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />

                    <span
                      dir="ltr"
                      className="font-sans text-[9px] font-semibold tracking-[0.14em] text-white"
                    >
                      TETA / 01
                    </span>
                  </div>

                  {/* BOTTOM RED DETAIL */}
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute bottom-0 h-[2px] w-12 bg-accent ${
                      isRTL ? "right-0" : "left-0"
                    }`}
                  />
                </div>

                {/* IMAGE CAPTION */}
                <figcaption className="mt-2 flex items-center justify-between gap-3">
                  <span
                    className={`min-w-0 font-sans text-[10px] font-semibold text-foreground/60 ${
                      isRTL
                        ? ""
                        : "uppercase tracking-[0.08em]"
                    }`}
                  >
                    {t.exhibitionLabel}
                  </span>

                  <span className="shrink-0 font-sans text-[9px] font-medium text-foreground/35">
                    {t.exhibitionCaption}
                  </span>
                </figcaption>
              </figure>

            </div>
          </div>
        </div>

        {/* CAPABILITIES */}
        <div className="grid border-t border-foreground/10 md:grid-cols-3">
          {capabilities.map((capability, index) => (
            <div
              key={capability.number}
              className={`tivasa-capability-group tivasa-about-reveal group relative overflow-hidden p-5 transition-colors duration-500 hover:bg-foreground/[0.018] md:p-7 lg:p-8 ${
                index !== capabilities.length - 1
                  ? `border-b border-foreground/10 md:border-b-0 ${
                      isRTL ? "md:border-l" : "md:border-r"
                    }`
                  : ""
              }`}
              style={{
                animationDelay: `${180 + index * 100}ms`,
              }}
            >

              {/* CAPABILITY NUMBER */}
              <div className="mb-9 flex items-center gap-4 md:mb-11">
                <div className="h-7 w-px bg-accent" />

                <span
                  dir="ltr"
                  className="font-sans text-lg font-semibold tracking-[0.08em] text-accent"
                >
                  {capability.number}
                </span>
              </div>

              {/* CAPABILITY HEADING */}
              <div className="flex items-start justify-between gap-2">
                <h3
                  className={`min-w-0 font-display font-semibold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isRTL
                      ? "text-[clamp(1.8rem,3vw,2.7rem)] leading-[1.3] tracking-normal group-hover:-translate-x-1"
                      : "text-[clamp(1.8rem,3.5vw,2.7rem)] leading-[1] tracking-[-0.035em] group-hover:translate-x-1"
                  }`}
                >
                  {capability.title}
                </h3>

                <DirectionArrow
                  size={20}
                  strokeWidth={1.25}
                  aria-hidden="true"
                  className={`mt-1 shrink-0 translate-y-1 text-foreground/15 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-accent group-hover:opacity-100 ${
                    isRTL ? "translate-x-1" : "-translate-x-1"
                  }`}
                />
              </div>

              {/* CAPABILITY DESCRIPTION */}
              <p className="mt-4 max-w-sm font-sans text-[15px] font-normal leading-7 text-foreground/50 transition-colors duration-500 group-hover:text-foreground/60">
                {capability.description}
              </p>

              {/* ANIMATED ACCENT LINE */}
              <div className="mt-8 h-px w-full overflow-hidden bg-foreground/10">
                <div
                  className={`h-full w-1/3 bg-accent transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-[3] ${
                    isRTL ? "origin-right" : "origin-left"
                  }`}
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
