
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpLeft, ArrowUpRight } from "lucide-react";

import type { Locale } from "@/i18n/config";
import { localizeHref } from "@/i18n/config";

interface Props {
  locale: Locale;
}

const translations = {
  en: {
    label: "Start a Conversation",
    description: "Discuss your project with Tivasa.",
    eyebrow: "Project Enquiries",
    headingFirst: "Let's build",
    headingSecond: "it right.",
    paragraph:
      "Planning a VRF installation? Discuss your project's technical requirements, system configuration, and execution needs.",
    action: "Discuss your project",
    metadata: "Tivasa / VRF Engineering",
    back: "Back to homepage",
  },
  fa: {
    label: "آغاز گفتگو",
    description: "درباره پروژه خود با تیواسا گفتگو کنید.",
    eyebrow: "درخواست‌های پروژه",
    headingFirst: "بیایید پروژه را",
    headingSecond: "اصولی اجرا کنیم.",
    paragraph:
      "برای نصب سیستم VRF برنامه‌ریزی می‌کنید؟ درباره الزامات فنی پروژه، پیکربندی سیستم و نیازهای اجرایی خود با ما گفتگو کنید.",
    action: "درباره پروژه گفتگو کنیم",
    metadata: "تیواسا / مهندسی سیستم‌های VRF",
    back: "بازگشت به صفحه اصلی",
  },
} as const;

export default function InstallationCTA({ locale }: Props) {
  const isRTL = locale === "fa";
  const t = translations[locale];

  const DirectionArrow = isRTL ? ArrowUpLeft : ArrowUpRight;
  const BackArrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section
      dir={isRTL ? "rtl" : "ltr"}
      aria-labelledby="installation-cta-title"
      className="border-b border-background/10 bg-surface text-background"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="grid lg:grid-cols-12">
          {/* SECTION MARKER */}
          <aside
            className={`border-b border-background/15 p-6 lg:col-span-3 lg:border-b-0 lg:p-8 ${
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
                  className={`font-sans text-xs font-semibold text-accent ${
                    isRTL ? "" : "uppercase tracking-[0.16em]"
                  }`}
                >
                  {t.label}
                </span>
              </div>

              <p className="mt-5 max-w-xs font-sans text-sm leading-6 text-background/55">
                {t.description}
              </p>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="min-w-0 lg:col-span-9">
            <div className="px-6 pb-8 pt-10 md:px-10 md:pt-12 lg:px-12">
              <span
                className={`font-sans text-[10px] font-semibold text-accent ${
                  isRTL ? "" : "uppercase tracking-[0.18em]"
                }`}
              >
                {t.eyebrow}
              </span>

              <h2
                id="installation-cta-title"
                className={`mt-5 max-w-5xl font-display font-semibold ${
                  isRTL
                    ? "text-[clamp(2.8rem,5.5vw,6rem)] leading-[1.4] tracking-normal"
                    : "text-[clamp(3.5rem,7vw,7rem)] leading-[0.88] tracking-[-0.065em]"
                }`}
              >
                {t.headingFirst}
                <br />
                <span className="font-normal text-background">
                  {t.headingSecond}
                </span>
              </h2>
            </div>

            {/* DESCRIPTION + CTA */}
            <div className="flex flex-col gap-7 border-t border-background/15 px-6 py-7 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
              <p className="max-w-lg font-sans text-sm leading-7 text-background md:text-base">
                {t.paragraph}
              </p>

              <Link
                href={localizeHref("/#contact", locale)}
                className={`group inline-flex w-fit shrink-0 items-center justify-between gap-8 border border-background/25 px-6 py-4 font-sans text-xs font-semibold text-background transition-[background-color,border-color] duration-300 hover:border-accent hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
                  isRTL ? "" : "uppercase tracking-[0.15em]"
                }`}
              >
                <span>{t.action}</span>

                <DirectionArrow
                  size={19}
                  strokeWidth={1.5}
                  className={`text-accent transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:text-background ${
                    isRTL
                      ? "group-hover:-translate-x-0.5"
                      : "group-hover:translate-x-0.5"
                  }`}
                />
              </Link>
            </div>

            {/* BOTTOM NAVIGATION */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-background/15 px-6 py-5 md:px-10 lg:px-12">
              <span
                className={`font-sans text-[10px] font-semibold text-background/35 ${
                  isRTL ? "" : "uppercase tracking-[0.16em]"
                }`}
              >
                {t.metadata}
              </span>

              <Link
                href={localizeHref("/", locale)}
                className={`group inline-flex items-center gap-2 font-sans text-[10px] font-semibold text-background/55 transition-colors duration-300 hover:text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
                  isRTL ? "" : "uppercase tracking-[0.16em]"
                }`}
              >
                <span>{t.back}</span>

                <BackArrow
                  size={15}
                  strokeWidth={1.5}
                  className={`transition-transform duration-300 ${
                    isRTL
                      ? "group-hover:-translate-x-1"
                      : "group-hover:translate-x-1"
                  }`}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
