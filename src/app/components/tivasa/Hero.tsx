
import type { Locale } from "@/i18n/config";

interface HeroProps {
  locale: Locale;
}

const content = {
  en: {
    industrial: "Industrial systems",
    classification: "Engineering / Manufacturing",
    technology: "Technology",
    eyebrow: "Engineering",
    headingFirst: "VRF SOLUTIONS.",
    headingSecond: "ENGINEERED EXCELLENCE.",
    description:
      "Tivasa develops technical solutions for demanding industrial environments — combining engineering precision, manufacturing expertise and practical performance.",
    scroll: "Scroll to explore",
    location: "Tehran / Iran",
    company: "Company",
    active: "Active",
    statementFirst: "Engineering ideas into",
    statementSecond: "practical systems.",
    disciplines: "Disciplines",
    items: ["Engineering", "Manufacturing", "Technology"],
  },
  fa: {
    industrial: "سیستم‌های صنعتی",
    classification: "مهندسی / تولید",
    technology: "فناوری",
    eyebrow: "مهندسی",
    headingFirst: "راهکارهای تخصصی",
    headingSecond: "VRF",
    description:
      "تیواسا با تلفیق دقت مهندسی، تخصص تولید و عملکرد کاربردی، راهکارهای فنی را برای محیط‌های صنعتی و شرایط کاری پیچیده توسعه می‌دهد.",
    scroll: "برای مشاهده بیشتر پیمایش کنید",
    location: "تهران / ایران",
    company: "شرکت",
    active: "فعال",
    statementFirst: "تبدیل ایده‌های مهندسی به",
    statementSecond: "سیستم‌های کاربردی.",
    disciplines: "حوزه‌های فعالیت",
    items: ["مهندسی", "تولید", "فناوری"],
  },
} as const;

export default function Hero({ locale }: HeroProps) {
  const isRTL = locale === "fa";
  const t = content[locale];

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      className="relative isolate overflow-hidden border-b border-background/10 bg-surface pt-24 text-background"
      style={{ backgroundColor: "#0b1f3a" }}
    >
      {/* BACKGROUND PHOTOGRAPHY — DESKTOP ONLY */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden bg-cover bg-center bg-no-repeat lg:block"
        style={{
          backgroundImage:
            "url('/Symmetrical-HVAC-Units-Beneath-Industrial-Canopy.png')",
        }}
      />

      {/* MOBILE BACKGROUND — UNCHANGED */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden lg:hidden"
      >
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage:
              "url('/Moody-TEMA-Corporate-Hallway.png')",
            backgroundSize: "auto 115%",
            backgroundPosition: "center bottom",
          }}
        />
      </div>

      {/* DESKTOP GRADIENT */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          background: isRTL
            ? "linear-gradient(270deg, rgba(7,17,32,0.94) 0%, rgba(11,31,58,0.88) 25%, rgba(11,31,58,0.62) 49%, rgba(11,31,58,0.16) 76%, rgba(11,31,58,0.08) 100%)"
            : "linear-gradient(90deg, rgba(7,17,32,0.94) 0%, rgba(11,31,58,0.88) 25%, rgba(11,31,58,0.62) 49%, rgba(11,31,58,0.16) 76%, rgba(11,31,58,0.08) 100%)",
        }}
      />

      {/* MOBILE GRADIENT */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 lg:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(7,17,32,0.78) 0%, rgba(7,17,32,0.55) 25%, rgba(7,17,32,0.85) 66%, rgba(7,17,32,0.96) 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-surface/10"
      />

      {/* STRUCTURAL ELEMENTS */}
      <div
        className={`pointer-events-none absolute bottom-0 top-0 hidden w-px bg-accent/70 lg:block ${
          isRTL ? "right-0" : "left-0"
        }`}
      />

      <div className="tivasa-scan pointer-events-none absolute left-0 top-0 z-30 h-[2px] w-full bg-accent/70" />

      {/* MAIN GRID */}
      <div className="relative mx-auto max-w-[1800px]">
        <div className="grid min-h-[calc(100svh-6rem)] grid-cols-1 lg:grid-cols-12">
          {/* SIDE RAIL */}
          <aside
            className={`relative z-10 hidden px-6 py-6 lg:col-span-1 lg:flex lg:flex-col lg:justify-between ${
              isRTL
                ? "border-l border-background/15"
                : "border-r border-background/15"
            }`}
          >
            {/* VERTICAL LABEL */}
            <span
              className={`font-sans text-xs font-medium text-background/55 ${
                isRTL
                  ? "absolute left-6 top-6"
                  : "uppercase tracking-[0.16em]"
              }`}
              style={{
                writingMode: "vertical-rl",
              }}
            >
              {t.industrial}
            </span>

            {/* YEAR */}
            <span
              dir="ltr"
              className="mt-auto self-center font-sans text-xs font-medium text-background/55"
            >
              2026
            </span>
          </aside>

          {/* MAIN HERO CONTENT */}
          <div className="relative z-10 flex min-h-[calc(100svh-6rem)] min-w-0 flex-col justify-between px-5 py-7 md:px-10 md:py-10 lg:col-span-8 lg:px-14 lg:py-12">
            {/* CLASSIFICATION */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 shrink-0 bg-accent" />

                <span
                  className={`font-sans text-[10px] font-semibold text-background/85 md:text-xs ${
                    isRTL
                      ? ""
                      : "uppercase tracking-[0.22em]"
                  }`}
                >
                  {t.classification}
                </span>
              </div>

              <div
                className={`font-sans text-[10px] font-medium text-background/55 md:text-xs ${
                  isRTL
                    ? "pr-[18px]"
                    : "pl-[18px] uppercase tracking-[0.2em]"
                }`}
              >
                {t.technology}
              </div>
            </div>

            {/* MAIN STATEMENT */}
            <div className="py-12 md:py-16">
              <div className="relative">
                {/* EDITORIAL MARKER */}
                <div
                  className={`absolute top-0 hidden h-[clamp(4rem,7vw,8rem)] w-[2px] bg-accent md:block ${
                    isRTL ? "-right-5" : "-left-5"
                  }`}
                />

                <div className="mb-5 flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent" />

                  <span
                    className={`font-sans text-[10px] font-medium text-accent ${
                      isRTL
                        ? ""
                        : "uppercase tracking-[0.16em]"
                    }`}
                  >
                    {t.eyebrow}
                  </span>

                  <div className="h-px w-12 bg-accent/50" />
                </div>

                <h1
                  className={`relative w-full min-w-0 font-display font-semibold text-background ${
                    isRTL
                      ? "text-[clamp(2rem,4vw,4.5rem)] leading-[1.15] tracking-normal"
                      : "text-[clamp(1.8rem,4vw,4.5rem)] uppercase leading-[1.05] tracking-[-0.045em]"
                  }`}
                >
                  {t.headingFirst}

                  {t.headingSecond && (
                    <>
                      <br />
                      <span className="font-normal">
                        {t.headingSecond}
                      </span>
                    </>
                  )}
                </h1>
              </div>

              {/* ORIGINAL ANIMATED CONNECTOR */}
              <div
                className={`mt-10 max-w-xl ${
                  isRTL
                    ? "md:mr-[8%]"
                    : "md:ml-[8%]"
                }`}
              >
                <div className="mb-5 flex items-center">
                  <div className="h-px flex-1 overflow-hidden bg-background/10">
                    <div className="tivasa-line h-full w-full bg-accent" />
                  </div>

                  <div
                    className={`h-2 w-2 shrink-0 rounded-full bg-accent ${
                      isRTL ? "mr-3" : "ml-3"
                    }`}
                  />
                </div>

                <p className="font-sans text-base font-normal leading-7 text-background/85 md:text-lg md:leading-8">
                  {t.description}
                </p>
              </div>
            </div>

            {/* BOTTOM METADATA */}
            <div
              className={`flex items-end justify-between gap-4 border-t border-background/20 pt-5 font-sans text-[10px] font-medium text-background/65 md:text-xs ${
                isRTL
                  ? ""
                  : "uppercase tracking-[0.16em]"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-background/75">
                  {t.scroll}
                </span>

                <span className="relative h-8 w-px overflow-hidden bg-background/30">
                  <span className="tivasa-scroll-indicator absolute left-0 top-0 h-1/2 w-full bg-accent" />
                </span>
              </div>

              <span className="shrink-0">
                {t.location}
              </span>
            </div>
          </div>

          {/* INFORMATION PANEL */}
          <aside
            className={`relative z-10 border-t border-background/15 bg-[#08182d]/95 lg:col-span-3 lg:border-t-0 ${
              isRTL ? "lg:border-r" : "lg:border-l"
            }`}
          >
            <div
              className={`pointer-events-none absolute top-0 hidden h-16 w-16 border-t-2 border-accent lg:block ${
                isRTL
                  ? "right-0 border-r-2"
                  : "left-0 border-l-2"
              }`}
            />

            <div
              className={`pointer-events-none absolute bottom-0 top-0 hidden w-px bg-gradient-to-b from-accent/70 via-accent/10 to-transparent lg:block ${
                isRTL ? "right-0" : "left-0"
              }`}
            />

            <div className="flex h-full flex-col justify-between gap-16 p-6 md:p-8 lg:gap-8 lg:p-8 xl:p-10">
              {/* COMPANY */}
              <div>
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div>
                    <div
                      className={`mb-2 font-sans text-[10px] font-medium text-background/50 ${
                        isRTL
                          ? ""
                          : "uppercase tracking-[0.16em]"
                      }`}
                    >
                      {t.company}
                    </div>

                    <div
                      dir="ltr"
                      className="font-display text-2xl font-semibold tracking-[-0.03em] text-background md:text-3xl"
                    >
                      TIVASA
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />

                    <span
                      className={`font-sans text-[10px] font-medium text-background/60 ${
                        isRTL
                          ? ""
                          : "uppercase tracking-[0.14em]"
                      }`}
                    >
                      {t.active}
                    </span>
                  </div>
                </div>

                {/* COMPANY POSITIONING */}
                <div className="relative border-t border-background/15 pt-7">
                  <div
                    className={`absolute top-0 h-[2px] w-16 bg-accent ${
                      isRTL ? "right-0" : "left-0"
                    }`}
                  />

                  <p
                    className={`max-w-sm font-display font-medium text-background ${
                      isRTL
                        ? "text-2xl leading-[1.5] tracking-normal md:text-3xl"
                        : "text-2xl leading-[1.12] tracking-[-0.035em] md:text-3xl xl:text-[2rem]"
                    }`}
                  >
                    <span className="text-background/60">
                      {t.statementFirst}
                    </span>
                    <br />
                    <span>
                      {t.statementSecond}
                    </span>
                  </p>
                </div>
              </div>

              {/* DISCIPLINES */}
              <div className="border-t border-background/15 pt-7">
                <div className="mb-5 flex items-center justify-between">
                  <span
                    className={`font-sans text-[10px] font-medium text-background/55 ${
                      isRTL
                        ? ""
                        : "uppercase tracking-[0.16em]"
                    }`}
                  >
                    {t.disciplines}
                  </span>

                  <span
                    dir="ltr"
                    className="font-sans text-[10px] text-background/35"
                  >
                    01 — 03
                  </span>
                </div>

                <div className="flex flex-col">
                  {t.items.map((item, index) => (
                    <div
                      key={index}
                      className={`group flex items-center justify-between py-3.5 ${
                        index !== t.items.length - 1
                          ? "border-b border-background/15"
                          : ""
                      }`}
                    >
                      <span
                        className={`font-display text-lg font-semibold text-background transition-colors duration-500 xl:text-xl ${
                          isRTL
                            ? "tracking-normal"
                            : "tracking-[-0.02em]"
                        } ${
                          index === 0
                            ? ""
                            : "text-background/65 group-hover:text-background"
                        }`}
                      >
                        {item}
                      </span>

                      <span className="h-px w-0 bg-accent transition-all duration-500 group-hover:w-8" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
