
import {
  ArrowUpLeft,
  ArrowUpRight,
  Mail,
  FileText,
  Download,
} from "lucide-react";

import type { Locale } from "@/i18n/config";
import { getMaintenanceContent } from "@/i18n/maintenance";

const EMAIL = "Tetacompany1@gmail.com";

const BROCHURES = {
  en: {
    url: "/catalogs/TETA_Reliable_Facility_Care_EN_Original_Style.pdf",
    filename: "TETA_Reliable_Facility_Care_EN.pdf",
    label: "Download Maintenance Brochure",
    aria: "Download the English maintenance brochure PDF",
  },
  fa: {
    url: "/catalogs/TETA_Reliable_Facility_Care_FA.pdf",
    filename: "TETA_Reliable_Facility_Care_FA.pdf",
    label: "دانلود کاتالوگ خدمات نگهداری",
    aria: "دانلود فایل PDF برنامه نگهداری به زبان فارسی",
  },
} as const;

interface MaintenanceContactProps {
  locale: Locale;
}

export default function MaintenanceContact({
  locale,
}: MaintenanceContactProps) {
  const isRTL = locale === "fa";
  const t = getMaintenanceContent(locale).contact;
  const brochure = BROCHURES[locale];

  const DirectionArrow = isRTL ? ArrowUpLeft : ArrowUpRight;

  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
    t.emailSubject,
  )}`;

  return (
    <section
      id="maintenance-contact"
      dir={isRTL ? "rtl" : "ltr"}
      aria-labelledby="maintenance-contact-title"
      className="relative scroll-mt-24 overflow-hidden bg-surface text-background"
    >
      {/* SUBTLE BACKGROUND STRUCTURE */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-y-0 left-1/2 w-px bg-background/[0.025]" />

        <div className="absolute right-0 top-0 h-40 w-40 border-b border-l border-background/[0.035]" />
      </div>

      <div className="relative mx-auto max-w-[1800px]">
        <div className="grid lg:grid-cols-12">

          {/* SECTION MARKER */}
          <aside
            className={`border-b border-background/15 p-6 lg:col-span-3 lg:border-b-0 lg:p-8 ${
              isRTL ? "lg:border-l" : "lg:border-r"
            }`}
          >
            <div
              className={`relative ${
                isRTL ? "pr-5" : "pl-5"
              }`}
            >
              {/* RED VERTICAL RAIL */}
              <span
                aria-hidden="true"
                className={`absolute inset-y-0 w-px bg-accent/70 ${
                  isRTL ? "right-0" : "left-0"
                }`}
              />

              {/* SECTION LABEL */}
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

                <span
                  className={`font-sans text-sm font-semibold text-accent ${
                    isRTL
                      ? ""
                      : "uppercase tracking-[0.16em]"
                  }`}
                >
                  {t.eyebrow}
                </span>
              </div>

              {/* TECHNICAL IDENTIFIER */}
              <div className="mt-6 flex items-center gap-3 text-background/40">
                <Mail
                  size={16}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="shrink-0 text-accent"
                />

                <span
                  dir="ltr"
                  className="font-sans text-[10px] font-semibold tracking-[0.14em]"
                >
                  SERVICE / TIVASA
                </span>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="min-w-0 lg:col-span-9">

            {/* EDITORIAL STATEMENT */}
            <div className="px-6 pb-7 pt-9 md:px-10 lg:px-12 lg:pt-11">
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
                id="maintenance-contact-title"
                className={`mt-4 max-w-5xl font-display font-semibold ${
                  isRTL
                    ? "text-[clamp(2.2rem,3.7vw,3.9rem)] leading-[1.3] tracking-normal"
                    : "text-[clamp(2.7rem,4.7vw,5rem)] leading-[0.96] tracking-[-0.06em]"
                }`}
              >
                {t.title}

                <br />

                <span className="font-normal text-background/40">
                  {t.accent}
                </span>
              </h2>
            </div>

            {/* DESCRIPTION + ACTIONS */}
            <div className="grid gap-6 border-t border-background/15 px-6 py-6 md:px-10 lg:px-12 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-center">

              {/* DESCRIPTION */}
              <div className="max-w-xl">
                <p className="font-sans text-sm leading-7 text-background/65">
                  {t.description}
                </p>

                <p className="mt-2 font-sans text-xs leading-6 text-background/35">
                  {t.note}
                </p>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex min-w-0 flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center xl:justify-end">

                {/* MAINTENANCE BROCHURE DOWNLOAD */}
                <a
                  href={brochure.url}
                  download={brochure.filename}
                  type="application/pdf"
                  aria-label={brochure.aria}
                  className="group/brochure inline-flex min-h-[52px] min-w-0 max-w-full items-center justify-between gap-5 border border-background/25 px-4 py-3 transition-[border-color,background-color] duration-300 hover:border-accent hover:bg-background/[0.045] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {/* ICON + LABEL */}
                  <span className="flex min-w-0 items-center gap-3">
                    <FileText
                      size={17}
                      strokeWidth={1.4}
                      aria-hidden="true"
                      className="shrink-0 text-accent"
                    />

                    <span
                      className={`font-sans text-[11px] font-semibold text-background transition-colors duration-300 group-hover/brochure:text-accent ${
                        isRTL
                          ? ""
                          : "uppercase tracking-[0.06em]"
                      }`}
                    >
                      {brochure.label}
                    </span>
                  </span>

                  {/* PDF IDENTIFIER + DOWNLOAD ICON */}
                  <span className="flex shrink-0 items-center gap-2">
                    <span
                      dir="ltr"
                      className="font-sans text-[9px] font-semibold tracking-[0.08em] text-background/40"
                    >
                      PDF
                    </span>

                    <Download
                      size={15}
                      strokeWidth={1.4}
                      aria-hidden="true"
                      className="text-background/50 transition-[color,transform] duration-300 group-hover/brochure:translate-y-0.5 group-hover/brochure:text-accent"
                    />
                  </span>
                </a>

                {/* PRIMARY CONSULTATION CTA */}
                <a
                  href={mailto}
                  className="group relative inline-flex min-h-[52px] min-w-[200px] items-center justify-between gap-6 overflow-hidden bg-accent px-5 font-sans text-sm font-semibold text-white transition-colors duration-200 hover:bg-background hover:text-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  <span className="relative z-10">
                    {t.action}
                  </span>

                  <DirectionArrow
                    size={19}
                    strokeWidth={1.75}
                    aria-hidden="true"
                    className="relative z-10 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5"
                  />

                  {/* BUTTON ACCENT */}
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0 h-[3px] w-12 bg-white/35 transition-colors duration-200 group-hover:bg-accent ${
                      isRTL ? "right-0" : "left-0"
                    }`}
                  />
                </a>
              </div>
            </div>

            {/* BOTTOM TECHNICAL RAIL */}
            <div className="flex items-center justify-between gap-4 border-t border-background/10 px-6 py-3 md:px-10 lg:px-12">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />

                <span
                  dir="ltr"
                  className="font-sans text-[10px] font-medium tracking-[0.12em] text-background/35"
                >
                  ENGINEERING / MAINTENANCE
                </span>
              </div>

              <span
                dir="ltr"
                className="font-sans text-[10px] font-medium tracking-[0.12em] text-background/25"
              >
                TIVASA
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
