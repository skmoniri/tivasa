
import Image from "next/image";
import type { Locale } from "@/i18n/config";

interface Props {
  locale: Locale;
}

const translations = {
  en: {
    label: "Our Approach",
    description:
      "The performance of a VRF system depends on more than the equipment itself.",
    eyebrow: "Engineering Before Execution",
    heading: ["Performance", "starts before", "installation."],
    detail: "VRF / Technical Execution",

    firstLabel: "Understanding the Environment",
    firstDescription:
      "Reliable VRF execution begins with a clear understanding of the building, its load requirements, and the technical limitations of the installation environment.",

    secondLabel: "Coordinating the System",
    secondDescription:
      "System design, piping configuration, equipment positioning, electrical coordination, and commissioning must work together to achieve dependable long-term operation.",

    imageLabel: "HVAC Engineering",
    imageDetail: "VRF / System Integration",
    imageAlt:
      "Close-up of HVAC equipment and ventilation grille",
  },

  fa: {
    label: "رویکرد ما",
    description:
      "عملکرد یک سیستم VRF تنها به تجهیزات آن وابسته نیست.",
    eyebrow: "مهندسی پیش از اجرا",
    heading: ["عملکرد مطلوب", "از پیش از نصب", "آغاز می‌شود."],
    detail: "VRF / اجرای فنی",

    firstLabel: "شناخت محیط پروژه",
    firstDescription:
      "اجرای قابل اعتماد سیستم VRF با شناخت دقیق ساختمان، نیازهای سرمایشی و گرمایشی و محدودیت‌های فنی محیط نصب آغاز می‌شود.",

    secondLabel: "هماهنگی اجزای سیستم",
    secondDescription:
      "طراحی سیستم، پیکربندی لوله‌کشی، جانمایی تجهیزات، هماهنگی برق و راه‌اندازی باید در کنار یکدیگر عمل کنند تا عملکرد پایدار و قابل اعتماد سیستم فراهم شود.",

    imageLabel: "مهندسی تأسیسات",
    imageDetail: "VRF / یکپارچگی سیستم",
    imageAlt:
      "نمای نزدیک تجهیزات تهویه مطبوع و دریچه توزیع هوا",
  },
} as const;

export default function InstallationApproach({
  locale,
}: Props) {
  const isRTL = locale === "fa";
  const t = translations[locale];

  return (
    <section
      id="approach"
      dir={isRTL ? "rtl" : "ltr"}
      aria-labelledby="approach-title"
      className="border-b border-foreground/10 bg-background text-foreground"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="grid lg:grid-cols-12">

          {/* SECTION MARKER */}
          <aside
            className={`border-b border-foreground/10 p-6 lg:col-span-3 lg:border-b-0 lg:p-10 ${
              isRTL ? "lg:border-l" : "lg:border-r"
            }`}
          >
            <div
              className={`relative ${
                isRTL ? "pr-5" : "pl-5"
              }`}
            >
              {/* VERTICAL ACCENT RAIL */}
              <span
                aria-hidden="true"
                className={`absolute bottom-0 top-0 w-px bg-accent/70 ${
                  isRTL ? "right-0" : "left-0"
                }`}
              />

              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />

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

              <p className="mt-6 max-w-xs font-sans text-base leading-7 text-foreground/55">
                {t.description}
              </p>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="min-w-0 lg:col-span-9">

            {/* HEADING + PHOTO */}
            <div className="grid items-stretch lg:grid-cols-12">

              {/* HEADING */}
              <div
                className={`flex min-w-0 flex-col justify-center px-6 pb-10 pt-14 md:px-10 md:pt-16 lg:col-span-7 lg:py-20 ${
                  isRTL
                    ? "lg:pr-12 lg:pl-6"
                    : "lg:pl-12 lg:pr-6"
                }`}
              >
                <span
                  className={`font-sans text-[10px] font-semibold text-accent ${
                    isRTL
                      ? ""
                      : "uppercase tracking-[0.18em]"
                  }`}
                >
                  {t.eyebrow}
                </span>

                <h2
                  id="approach-title"
                  className={`mt-8 font-display font-semibold ${
                    isRTL
                      ? "text-[clamp(2.8rem,4.6vw,5.5rem)] leading-[1.4] tracking-normal"
                      : "text-[clamp(3.4rem,5.2vw,6.5rem)] leading-[0.92] tracking-[-0.065em]"
                  }`}
                >
                  {t.heading[0]}

                  <br />

                  {t.heading[1]}

                  <br />

                  <span className="text-foreground/35">
                    {t.heading[2]}
                  </span>
                </h2>

                <div className="mt-10 hidden items-center gap-3 lg:flex">
                  <span className="h-px w-8 bg-accent" />

                  <span
                    className={`font-sans text-[10px] font-medium text-foreground/35 ${
                      isRTL
                        ? ""
                        : "uppercase tracking-[0.16em]"
                    }`}
                  >
                    {t.detail}
                  </span>
                </div>
              </div>

              {/* PHOTOGRAPH */}
              <div
                className={`min-w-0 px-6 pb-8 md:px-10 lg:col-span-5 lg:py-12 ${
                  isRTL
                    ? "lg:pr-0 lg:pl-12"
                    : "lg:pl-0 lg:pr-12"
                }`}
              >
                <figure className="group/approach flex h-full min-w-0 flex-col">

                  {/*
                    MAIN IMAGE FRAME

                    Retains the original dimensions while
                    using the same border and accent treatment
                    as the newer technical photographs.
                  */}
                  <div className="relative h-[260px] overflow-hidden border border-foreground/15 bg-foreground/[0.035] sm:h-[340px] lg:min-h-[390px] lg:flex-1">

                    {/* ORIGINAL IMAGE — UNCHANGED */}
                    <Image
                      src="/Cooling-Heating-System-HVAC-Panel.png"
                      alt={t.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 32vw, 100vw"
                      className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/approach:scale-[1.035] motion-reduce:transition-none"
                    />

                    {/* SUBTLE INNER FRAME */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-2 border border-white/20"
                    />

                    {/* TECHNICAL IDENTIFIER */}
                    <div
                      className={`pointer-events-none absolute top-3 flex items-center gap-2 bg-[#102236]/85 px-3 py-2 ${
                        isRTL ? "right-3" : "left-3"
                      }`}
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

                      <span
                        dir="ltr"
                        className="font-sans text-[9px] font-semibold uppercase tracking-[0.14em] text-white"
                      >
                        VRF / ENGINEERING
                      </span>
                    </div>

                    {/* RED CORNER ACCENT */}
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute bottom-0 h-[3px] w-14 bg-accent ${
                        isRTL ? "right-0" : "left-0"
                      }`}
                    />
                  </div>

                  {/* BILINGUAL IMAGE CAPTION */}
                  <figcaption className="mt-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                    <span
                      className={`font-sans text-[10px] font-semibold text-foreground/65 ${
                        isRTL
                          ? ""
                          : "uppercase tracking-[0.08em]"
                      }`}
                    >
                      {t.imageLabel}
                    </span>

                    <span className="font-sans text-[9px] font-medium text-foreground/35">
                      {t.imageDetail}
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* ENGINEERING PRINCIPLES */}
            <div className="grid border-t border-foreground/15 md:grid-cols-2">
              {[
                {
                  number: "01",
                  label: t.firstLabel,
                  description: t.firstDescription,
                },
                {
                  number: "02",
                  label: t.secondLabel,
                  description: t.secondDescription,
                },
              ].map((item, index) => (
                <div
                  key={item.number}
                  className={`px-6 py-8 md:px-10 md:py-10 lg:px-12 ${
                    index === 0
                      ? `border-b border-foreground/10 md:border-b-0 ${
                          isRTL
                            ? "md:border-l"
                            : "md:border-r"
                        }`
                      : ""
                  }`}
                >
                  {/* NUMBER + LABEL */}
                  <div className="mb-5 flex items-center gap-3">
                    <span
                      dir="ltr"
                      className="font-display text-sm font-semibold text-accent"
                    >
                      {item.number}
                    </span>

                    <span className="h-px w-6 bg-foreground/15" />

                    <h3
                      className={`font-sans text-[10px] font-semibold text-foreground/40 ${
                        isRTL
                          ? ""
                          : "uppercase tracking-[0.16em]"
                      }`}
                    >
                      {item.label}
                    </h3>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="max-w-md font-sans text-base leading-7 text-foreground/65">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
