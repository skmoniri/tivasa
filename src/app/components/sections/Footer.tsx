import Link from "next/link";
import { ArrowUp, ArrowUpRight, ArrowUpLeft } from "lucide-react";

import type { Locale } from "@/i18n/config";
import { localizeHref } from "@/i18n/config";

interface FooterProps {
  locale: Locale;
}

const translations = {
  en: {
    explore: "Explore",
    company: "Company",
    products: "Products",
    projects: "Projects",
    installation: "Installation",
    about: "About",
    contact: "Contact",
    tagline: "Industrial / Technical / Engineering",
    location: "Tehran / Iran",
    disciplines: "Engineering / Manufacturing / Technology",
    backToTop: "Back to top",
    copyright: "© 2026 Tivasa",
  },
  fa: {
    explore: "کاوش",
    company: "شرکت",
    products: "محصولات",
    projects: "پروژه‌ها",
    installation: "نصب و راه‌اندازی",
    about: "درباره ما",
    contact: "تماس با ما",
    tagline: "صنعت / فناوری / مهندسی",
    location: "تهران / ایران",
    disciplines: "مهندسی / تولید / فناوری",
    backToTop: "بازگشت به بالا",
    copyright: "© 2026 TIVASA",
  },
} as const;

export default function Footer({ locale }: FooterProps) {
  const isRTL = locale === "fa";
  const t = translations[locale];

  const exploreLinks = [
    { label: t.products, href: localizeHref("/#products", locale) },
    { label: t.projects, href: localizeHref("/#projects", locale) },
    {
      label: t.installation,
      href: localizeHref("/installation", locale),
    },
  ];

  const companyLinks = [
    { label: t.about, href: localizeHref("/#about", locale) },
    { label: t.contact, href: localizeHref("/#contact", locale) },
  ];

  return (
    <footer
      dir={isRTL ? "rtl" : "ltr"}
      className="overflow-hidden bg-foreground text-background"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="px-5 py-16 md:px-8 md:py-24 lg:px-14">
          {/* MAIN FOOTER */}
          <div className="relative border-t border-background/10 pt-8 md:pt-10">
            <div
              className={`absolute top-0 h-20 w-px bg-accent md:h-28 ${
                isRTL ? "right-0" : "left-0"
              }`}
            />

            <div className="grid gap-16 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
              {/* BRAND */}
              <div className="min-w-0">
                <div className="relative flex min-w-0 justify-start">
                  <div dir="ltr" className="relative w-max max-w-none shrink-0">
                    {/* Ghost wordmark */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute left-1 top-1 whitespace-nowrap font-display text-[clamp(5.25rem,18vw,18rem)] font-semibold leading-[0.58] tracking-[-0.08em] text-accent/[0.75]"
                      style={{
                        fontFamily: "var(--font-clash-grotesk), sans-serif",
                      }}
                    >
                      TIVASA
                    </div>

                    {/* Main wordmark */}
                    <div
                      className="relative whitespace-nowrap font-display text-[clamp(5.25rem,18vw,18rem)] font-semibold leading-[0.58] tracking-[-0.08em]"
                      style={{
                        fontFamily: "var(--font-clash-grotesk), sans-serif",
                      }}
                    >
                      TIVASA
                    </div>
                  </div>
                </div>

                {/* BRAND TAGLINE */}
                <div
                  className={`mt-10 flex items-center gap-3 ${
                    isRTL ? "pr-1" : "pl-1"
                  }`}
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span
                    className={`font-sans text-[10px] font-medium text-background/35 sm:text-xs ${
                      isRTL ? "" : "uppercase tracking-[0.18em]"
                    }`}
                  >
                    {t.tagline}
                  </span>
                </div>
              </div>

              {/* NAVIGATION */}
              <div className="grid grid-cols-2 gap-x-10 sm:gap-x-20 lg:min-w-[360px]">
                <FooterNavGroup
                  title={t.explore}
                  links={exploreLinks}
                  isRTL={isRTL}
                />

                <FooterNavGroup
                  title={t.company}
                  links={companyLinks}
                  isRTL={isRTL}
                />
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="mt-16 border-t border-background/10 md:mt-20">
            <div className="flex flex-col gap-6 py-5 sm:flex-row sm:items-center sm:justify-between md:py-6">
              <span
                dir="ltr"
                className="font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-background/25 sm:text-xs"
              >
                {t.copyright}
              </span>

              <div
                className={`flex items-center gap-3 font-sans text-[10px] font-medium text-background/30 sm:text-xs ${
                  isRTL ? "" : "uppercase tracking-[0.14em]"
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{t.location}</span>
              </div>

              <span
                className={`font-sans text-[10px] font-medium text-background/25 sm:text-xs ${
                  isRTL ? "" : "uppercase tracking-[0.14em]"
                }`}
              >
                {t.disciplines}
              </span>

              {/* BACK TO TOP */}
              <a
                href="#top"
                aria-label={t.backToTop}
                className={`group inline-flex w-fit items-center gap-2 font-sans text-[10px] font-medium text-background/40 transition-colors duration-300 hover:text-background sm:text-xs ${
                  isRTL ? "" : "uppercase tracking-[0.14em]"
                }`}
              >
                <span>{t.backToTop}</span>

                <span className="flex h-7 w-7 items-center justify-center border border-background/15 transition-all duration-300 group-hover:border-accent group-hover:bg-accent">
                  <ArrowUp
                    size={13}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-foreground"
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterNavGroupProps {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
  isRTL: boolean;
}

function FooterNavGroup({ title, links, isRTL }: FooterNavGroupProps) {
  const DirectionArrow = isRTL ? ArrowUpLeft : ArrowUpRight;

  return (
    <div>
      {/* GROUP TITLE */}
      <div className="mb-6 flex items-center gap-3">
        <span className="h-px w-5 bg-accent" />

        <span
          className={`font-sans text-[10px] font-medium text-background/25 sm:text-xs ${
            isRTL ? "" : "uppercase tracking-[0.16em]"
          }`}
        >
          {title}
        </span>
      </div>

      {/* LINKS */}
      <div className="flex flex-col">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`group flex items-center justify-between border-b border-background/10 py-3.5 font-display text-lg font-medium text-background/60 transition-colors duration-300 hover:text-background sm:py-4 sm:text-xl ${
              isRTL ? "tracking-normal" : "tracking-[-0.02em]"
            }`}
          >
            <span>{link.label}</span>

            <DirectionArrow
              size={17}
              strokeWidth={1.25}
              aria-hidden="true"
              className={`text-background/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-accent ${
                isRTL
                  ? "group-hover:-translate-x-0.5"
                  : "group-hover:translate-x-0.5"
              }`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
