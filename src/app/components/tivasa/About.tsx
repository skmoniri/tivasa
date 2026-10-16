"use client";

import { ArrowUpRight, ArrowUpLeft } from "lucide-react";

import type { Locale } from "@/i18n/config";
import { getTivasaData } from "@/i18n/tivasaData";

interface AboutProps {
  locale: Locale;
}

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
          <div
            className={`tivasa-about-reveal border-b border-foreground/10 p-6 lg:col-span-3 lg:border-b-0 lg:p-10 ${
              isRTL ? "lg:border-l" : "lg:border-r"
            }`}
          >
            <div className={`relative ${isRTL ? "pr-4" : "pl-4"}`}>
              <div
                className={`absolute top-0 h-full w-px bg-accent ${
                  isRTL ? "right-0" : "left-0"
                }`}
              />

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />

                <div
                  className={`font-sans text-sm font-semibold text-accent ${
                    isRTL ? "" : "uppercase tracking-[0.16em]"
                  }`}
                >
                  {t.label}
                </div>
              </div>

              <div className="mt-6 max-w-[220px] font-sans text-base font-normal leading-7 text-foreground/45">
                {t.disciplines}
              </div>
            </div>
          </div>

          {/* MAIN ABOUT CONTENT */}
          <div className="tivasa-about-reveal p-6 md:p-10 lg:col-span-9 lg:p-16">
            <h2
              className={`max-w-6xl font-display font-semibold ${
                isRTL
                  ? "text-[clamp(2.8rem,5.5vw,6rem)] leading-[1.35] tracking-normal"
                  : "text-[clamp(3.5rem,7vw,8rem)] leading-[0.86] tracking-[-0.065em]"
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

            <div className="mt-14 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-14">
              <p className="max-w-xl font-sans text-lg font-normal leading-8 text-foreground/65">
                {t.paragraphOne}
              </p>

              <p className="max-w-xl font-sans text-lg font-normal leading-8 text-foreground/45">
                {t.paragraphTwo}
              </p>
            </div>
          </div>
        </div>

        {/* CAPABILITIES */}
        <div className="grid border-t border-foreground/10 md:grid-cols-3">
          {capabilities.map((capability, index) => (
            <div
              key={capability.number}
              className={`tivasa-capability-group tivasa-about-reveal group relative overflow-hidden p-6 transition-colors duration-500 hover:bg-foreground/[0.018] md:p-10 ${
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
              {/* Capability number */}
              <div className="mb-16 flex items-center gap-4 md:mb-[4.5rem]">
                <div className="h-8 w-px bg-accent" />

                <span
                  dir="ltr"
                  className="font-sans text-xl font-semibold tracking-[0.08em] text-accent"
                >
                  {capability.number}
                </span>
              </div>

              <div className="flex items-start justify-between gap-2">
                <h3
                  className={`min-w-0 font-display font-semibold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isRTL
                      ? "text-[clamp(2rem,3.5vw,3rem)] leading-[1.3] tracking-normal group-hover:-translate-x-1"
                      : "text-[clamp(2rem,4vw,3rem)] leading-[0.95] tracking-[-0.035em] group-hover:translate-x-1"
                  }`}
                >
                  {capability.title}
                </h3>

                <DirectionArrow
                  size={22}
                  strokeWidth={1.25}
                  className={`mt-1 shrink-0 translate-y-1 text-foreground/15 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-accent group-hover:opacity-100 ${
                    isRTL ? "translate-x-1" : "-translate-x-1"
                  }`}
                />
              </div>

              <p className="mt-5 max-w-sm font-sans text-base font-normal leading-7 text-foreground/50 transition-colors duration-500 group-hover:text-foreground/60">
                {capability.description}
              </p>

              <div className="mt-12 h-px w-full overflow-hidden bg-foreground/10">
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
