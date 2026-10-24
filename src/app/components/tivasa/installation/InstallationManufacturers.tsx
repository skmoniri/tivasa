
import { ArrowUpLeft, ArrowUpRight, Download } from "lucide-react";

import type { Locale } from "@/i18n/config";
import { getInstallationData } from "./installationData";

interface Props {
  locale: Locale;
}

const translations = {
  en: {
    label: "VRF Manufacturers",
    description:
      "Supporting precise installation across leading VRF manufacturers.",
    headingFirst: "Systems across",
    headingSecond: "leading manufacturers.",
    paragraph:
      "Equipment selection and installation requirements vary by manufacturer and system configuration.",
    download: "Download document",
    downloadTitle: "Download manufacturer document",
  },

  fa: {
    label: "تولیدکنندگان سیستم‌های VRF",
    description: "اجرای دقیق سیستم‌های VRF از تولیدکنندگان مطرح.",
    headingFirst: "اجرای سیستم‌های",
    headingSecond: "تولیدکنندگان مطرح.",
    paragraph:
      "انتخاب تجهیزات و الزامات نصب با توجه به تولیدکننده و پیکربندی هر سیستم متفاوت است.",
    download: "دریافت مدرک",
    downloadTitle: "دانلود مدرک تولیدکننده",
  },
} as const;

// DOWNLOADABLE MANUFACTURER DOCUMENTS
const manufacturerDocuments: Record<
  string,
  { href: string; filename: string }
> = {
  tica: {
    href: "/catalogs/TICA.jpg",
    filename: "TICA-OEM-Partner-Letter.jpg",
  },

  midea: {
    href: "/catalogs/Midea.pdf",
    filename: "Midea-Declaration-Letter.pdf",
  },

  tcl: {
    href: "/catalogs/tcl.pdf",
    filename: "TCL-VRF-Document.pdf",
  },

  teta: {
    href: "/catalogs/Catalogue%20VRF%20by%20TETA.pdf",
    filename: "TETA-VRF-Catalogue.pdf",
  },
};

export default function InstallationManufacturers({ locale }: Props) {
  const isRTL = locale === "fa";
  const t = translations[locale];

  const { brands } = getInstallationData(locale);

  // Exactly five unique manufacturers.
  // Preserve the first four existing brands and add TETA.
  const existingBrands = Array.from(
    new Map(
      brands
        .filter(
          (brand) => brand.trim().toLowerCase() !== "teta"
        )
        .map((brand) => [brand.trim().toLowerCase(), brand])
    ).values()
  );

  const manufacturerBrands = [
    ...existingBrands.slice(0, 4),
    "TETA",
  ];

  const DirectionArrow = isRTL ? ArrowUpLeft : ArrowUpRight;

  return (
    <section
      id="manufacturers"
      dir={isRTL ? "rtl" : "ltr"}
      aria-labelledby="manufacturers-title"
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
            <div className={`relative ${isRTL ? "pr-5" : "pl-5"}`}>
              <span
                className={`absolute bottom-0 top-0 w-px bg-accent/70 ${
                  isRTL ? "right-0" : "left-0"
                }`}
              />

              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />

                <span
                  className={`font-sans text-sm font-semibold text-accent ${
                    isRTL ? "" : "uppercase tracking-[0.16em]"
                  }`}
                >
                  {t.label}
                </span>
              </div>

              <p className="mt-5 max-w-xs font-sans text-sm leading-6 text-foreground/55">
                {t.description}
              </p>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="min-w-0 p-6 py-16 md:p-10 md:py-20 lg:col-span-9 lg:p-10 lg:py-24 xl:p-16">

            <h2
              id="manufacturers-title"
              className={`max-w-3xl font-display font-semibold ${
                isRTL
                  ? "text-[clamp(2.5rem,4.5vw,4.8rem)] leading-[1.4] tracking-normal"
                  : "text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] tracking-[-0.055em]"
              }`}
            >
              {t.headingFirst}
              <br />

              <span className="text-foreground">
                {t.headingSecond}
              </span>
            </h2>

            <p className="mt-8 max-w-2xl font-sans text-base leading-7 text-foreground">
              {t.paragraph}
            </p>

            {/* FIVE MANUFACTURERS IN ONE DESKTOP ROW */}
            <div
              className={`mt-12 grid grid-cols-2 border-t border-foreground/15 sm:grid-cols-3 lg:grid-cols-5 ${
                isRTL ? "border-r" : "border-l"
              }`}
            >
              {manufacturerBrands.map((brand, index) => {
                const brandKey = brand.trim().toLowerCase();

                const document = manufacturerDocuments[brandKey];

                const hasDocument = Boolean(document);

                const cardClassName = `
                  group relative flex h-40 min-w-0 items-center justify-center
                  overflow-hidden border-b border-foreground/15
                  px-1.5 transition-colors duration-500
                  ${isRTL ? "border-l" : "border-r"}
                  ${
                    hasDocument
                      ? "cursor-pointer hover:bg-accent/[0.045] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
                      : "hover:bg-foreground/[0.025]"
                  }
                `;

                const cardContent = (
                  <>
                    {/* MANUFACTURER NUMBER */}
                    <span
                      dir="ltr"
                      className={`absolute top-3 font-sans text-[9px] font-medium tracking-[0.12em] text-foreground/35 ${
                        isRTL ? "right-3" : "left-3"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* MANUFACTURER NAME */}
                    <span
                      dir="ltr"
                      className="
                        relative z-10 block max-w-full
                        text-center
                        font-display text-[clamp(0.75rem,1.15vw,1.15rem)]
                        font-semibold tracking-[-0.045em]
                        text-foreground
                        transition-colors duration-300
                        group-hover:text-foreground
                        break-words
                      "
                    >
                      {brand}
                    </span>

                    {/* DOWNLOAD INDICATOR */}
                    {hasDocument && (
                      <span
                        className="
                          absolute bottom-5 left-1/2 z-10
                          flex -translate-x-1/2
                          items-center justify-center gap-1
                          whitespace-nowrap
                          font-sans text-[8px] font-semibold
                          text-accent
                          transition-all duration-300
                          group-hover:gap-1.5
                        "
                      >
                        <Download
                          size={10}
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />

                        <span
                          className={
                            isRTL
                              ? ""
                              : "uppercase tracking-[0.04em]"
                          }
                        >
                          {t.download}
                        </span>
                      </span>
                    )}

                    {/* CORNER ICON */}
                    {hasDocument ? (
                      <Download
                        size={15}
                        strokeWidth={1.4}
                        aria-hidden="true"
                        className={`absolute top-3 text-accent/65 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-accent ${
                          isRTL ? "left-3" : "right-3"
                        }`}
                      />
                    ) : (
                      <DirectionArrow
                        size={15}
                        strokeWidth={1.3}
                        aria-hidden="true"
                        className={`absolute top-3 text-foreground/25 transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:text-accent ${
                          isRTL
                            ? "left-3 group-hover:-translate-x-0.5"
                            : "right-3 group-hover:translate-x-0.5"
                        }`}
                      />
                    )}

                    {/* BOTTOM ACCENT LINE */}
                    <span
                      aria-hidden="true"
                      className={`absolute bottom-0 h-[2px] w-0 bg-accent transition-[width] duration-500 ease-out group-hover:w-full ${
                        isRTL ? "right-0" : "left-0"
                      }`}
                    />
                  </>
                );

                if (document) {
                  return (
                    <a
                      key={brandKey}
                      href={document.href}
                      download={document.filename}
                      title={`${t.downloadTitle}: ${brand}`}
                      aria-label={`${t.downloadTitle}: ${brand}`}
                      className={cardClassName}
                    >
                      {cardContent}
                    </a>
                  );
                }

                return (
                  <div key={brandKey} className={cardClassName}>
                    {cardContent}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
