"use client";

import {
  ArrowUpRight,
  ArrowUpLeft,
  ArrowRight,
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import type { Locale } from "@/i18n/config";

interface ContactProps {
  locale: Locale;
}

const contactInfo = {
  company: "Tahvieh Tiv Asa (TETA)",
  email: "Tetacompany1@gmail.com",
  phoneDisplay: "+98 21 58214",
  phoneHref: "tel:+982158214",
  postalCode: "1533944633",
  address:
    "3rd Floor, No. 66, Arabali St., Khorramshahr St., North Sohrevardi St., Tehran, Iran",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=No.+66+Arabali+St+Khorramshahr+St+North+Sohrevardi+Tehran+Iran",
} as const;

const translations = {
  en: {
    label: "Contact",
    description:
      "Technical inquiries, project requirements and product information.",

    eyebrow: "Get in touch",

    headingFirst: "Have a project?",
    headingSecond: "Let's discuss it.",

    general: "General inquiries",
    generalDescription:
      "For product information, technical questions and general project inquiries.",

    project: "Project inquiry",
    consultation: "Request a consultation",
    projectDescription:
      "Share your project scope, system requirements or specifications with our team.",

    telephone: "Telephone",
    telephoneDescription:
      "Contact our office for business and project inquiries.",

    office: "Head office",
    postalCode: "Postal code",
    directions: "View on Google Maps",

    company: "Tahvieh Tiv Asa (TETA)",

    address:
      "3rd Floor, No. 66, Arabali St., Khorramshahr St., North Sohrevardi St., Tehran, Iran",

    disciplines: "Engineering / Manufacturing / Technology",
    location: "Tehran / Iran",
  },

  fa: {
    label: "تماس با ما",
    description:
      "پاسخ‌گویی به پرسش‌های فنی، نیازمندی‌های پروژه و اطلاعات محصولات.",

    eyebrow: "ارتباط با تیواسا",

    headingFirst: "پروژه‌ای در ذهن دارید؟",
    headingSecond: "بیایید درباره‌اش صحبت کنیم.",

    general: "ارتباط عمومی",
    generalDescription:
      "برای دریافت اطلاعات محصولات، طرح پرسش‌های فنی و هماهنگی درباره پروژه‌ها با ما در ارتباط باشید.",

    project: "درخواست همکاری",
    consultation: "درخواست مشاوره",
    projectDescription:
      "جزئیات پروژه، نیازمندی‌های سیستم یا مشخصات فنی خود را با تیم ما در میان بگذارید.",

    telephone: "تلفن تماس",
    telephoneDescription:
      "برای هماهنگی‌های کاری و پرسش‌های مرتبط با پروژه‌ها با دفتر ما تماس بگیرید.",

    office: "دفتر مرکزی",
    postalCode: "کد پستی",
    directions: "مشاهده در گوگل مپ",

    company: "شرکت تهویه تیو آسا (تتا)",

    address:
      "تهران، سهروردی شمالی، خیابان خرمشهر، خیابان عرب‌علی، پلاک ۶۶، طبقه سوم",

    disciplines: "مهندسی / تولید / فناوری",
    location: "تهران / ایران",
  },
} as const;

export default function Contact({ locale }: ContactProps) {
  const isRTL = locale === "fa";
  const t = translations[locale];

  const DirectionArrow = isRTL ? ArrowUpLeft : ArrowUpRight;
  const HorizontalArrow = isRTL ? ArrowLeft : ArrowRight;

  const projectMailto = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
    isRTL ? "درخواست مشاوره پروژه" : "Project Inquiry",
  )}`;

  return (
    <section
      id="contact"
      dir={isRTL ? "rtl" : "ltr"}
      className="border-b border-foreground/10 bg-background text-foreground"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="grid lg:grid-cols-12">
          {/* SECTION MARKER */}
          <aside
            className={`relative border-b border-foreground/10 p-6 lg:col-span-3 lg:border-b-0 lg:p-8 xl:p-10 ${
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

                <span
                  className={`font-sans text-sm font-semibold text-accent ${
                    isRTL ? "" : "uppercase tracking-[0.16em]"
                  }`}
                >
                  {t.label}
                </span>
              </div>

              <p className="mt-5 max-w-xs font-sans text-sm font-normal leading-6 text-foreground/45 xl:text-base xl:leading-7">
                {t.description}
              </p>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="min-w-0 lg:col-span-9">
            {/* INTRODUCTION */}
            <div className="p-6 md:p-8 lg:px-12 lg:py-10 xl:px-14 xl:py-12">
              {/* EYEBROW */}
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />

                <span
                  className={`font-sans text-xs font-semibold text-accent ${
                    isRTL ? "" : "uppercase tracking-[0.18em]"
                  }`}
                >
                  {t.eyebrow}
                </span>
              </div>

              {/* HEADING */}
              <h2
                className={`max-w-6xl font-display font-semibold ${
                  isRTL
                    ? "text-[clamp(2.5rem,5vw,5.6rem)] leading-[1.35] tracking-normal"
                    : "text-[clamp(3rem,6vw,6.7rem)] leading-[0.95] tracking-[-0.065em]"
                }`}
              >
                {t.headingFirst}

                <br />

                <span className="font-normal text-foreground/65">
                  {t.headingSecond}
                </span>
              </h2>
            </div>

            {/* CONTACT ACTIONS */}
            <div className="grid border-y border-foreground/10 md:grid-cols-2">
              {/* EMAIL */}
              <a
                href={`mailto:${contactInfo.email}`}
                className={`group min-w-0 border-b border-foreground/10 p-6 transition-colors duration-300 hover:bg-foreground/[0.025] md:border-b-0 md:p-8 lg:px-10 lg:py-8 ${
                  isRTL ? "md:border-l" : "md:border-r"
                }`}
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex min-w-0 items-center gap-3">
                    <Mail
                      size={16}
                      strokeWidth={1.3}
                      className="shrink-0 text-accent"
                    />

                    <span
                      className={`font-sans text-[10px] font-semibold text-accent ${
                        isRTL ? "" : "uppercase tracking-[0.16em]"
                      }`}
                    >
                      {t.general}
                    </span>
                  </div>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-foreground/15 transition-[border-color,background-color,color] duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-background">
                    <DirectionArrow size={16} strokeWidth={1.25} />
                  </span>
                </div>

                <div
                  dir="ltr"
                  className={`mt-6 break-all font-display text-[clamp(1.15rem,2vw,1.85rem)] font-medium tracking-[-0.035em] ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {contactInfo.email}
                </div>

                <p className="mt-3 max-w-md font-sans text-sm leading-6 text-foreground/45">
                  {t.generalDescription}
                </p>
              </a>

              {/* PROJECT INQUIRY */}
              <a
                href={projectMailto}
                className="group min-w-0 p-6 transition-colors duration-300 hover:bg-foreground/[0.025] md:p-8 lg:px-10 lg:py-8"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="h-1.5 w-1.5 shrink-0 bg-accent" />

                    <span
                      className={`font-sans text-[10px] font-semibold text-accent ${
                        isRTL ? "" : "uppercase tracking-[0.16em]"
                      }`}
                    >
                      {t.project}
                    </span>
                  </div>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-foreground/15 transition-[border-color,background-color,color] duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-background">
                    <DirectionArrow size={16} strokeWidth={1.25} />
                  </span>
                </div>

                <h3
                  className={`mt-6 font-display text-[clamp(1.6rem,2.7vw,2.5rem)] font-medium ${
                    isRTL
                      ? "leading-[1.4] tracking-normal"
                      : "leading-[1.1] tracking-[-0.045em]"
                  }`}
                >
                  {t.consultation}
                </h3>

                <p className="mt-3 max-w-md font-sans text-sm leading-6 text-foreground/45">
                  {t.projectDescription}
                </p>

                <div className="mt-5 flex items-center gap-3 text-accent">
                  <span className="h-px w-7 bg-accent" />

                  <HorizontalArrow size={15} strokeWidth={1.4} />
                </div>
              </a>
            </div>

            {/* COMPANY INFORMATION */}
            <div className="grid md:grid-cols-2">
              {/* TELEPHONE */}
              <a
                href={contactInfo.phoneHref}
                className={`group border-b border-foreground/10 p-6 transition-colors duration-300 hover:bg-foreground/[0.025] md:p-8 lg:px-10 lg:py-8 ${
                  isRTL ? "md:border-l" : "md:border-r"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Phone size={16} strokeWidth={1.3} className="text-accent" />

                  <span
                    className={`font-sans text-[10px] font-semibold text-accent ${
                      isRTL ? "" : "uppercase tracking-[0.16em]"
                    }`}
                  >
                    {t.telephone}
                  </span>
                </div>

                <div className="mt-5 flex items-center justify-between gap-4">
                  <span
                    dir="ltr"
                    className="font-display text-[clamp(1.6rem,2.8vw,2.4rem)] font-medium tracking-[-0.04em]"
                  >
                    {contactInfo.phoneDisplay}
                  </span>

                  <DirectionArrow
                    size={19}
                    strokeWidth={1.3}
                    className="shrink-0 text-accent transition-transform duration-300 group-hover:-translate-y-1"
                  />
                </div>

                <p className="mt-3 max-w-md font-sans text-sm leading-6 text-foreground/45">
                  {t.telephoneDescription}
                </p>
              </a>

              {/* OFFICE ADDRESS */}
              <div className="border-b border-foreground/10 p-6 md:p-8 lg:px-10 lg:py-8">
                <div className="flex items-center gap-3">
                  <MapPin size={16} strokeWidth={1.3} className="text-accent" />

                  <span
                    className={`font-sans text-[10px] font-semibold text-accent ${
                      isRTL ? "" : "uppercase tracking-[0.16em]"
                    }`}
                  >
                    {t.office}
                  </span>
                </div>

                <address className="mt-5 font-sans not-italic">
                  <p className="text-base font-semibold text-foreground md:text-lg">
                    {t.company}
                  </p>

                  <p className="mt-3 max-w-md text-sm leading-6 text-foreground/65">
                    {t.address}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="font-sans text-xs text-foreground/40">
                      {t.postalCode}
                    </span>

                    <span
                      dir="ltr"
                      className="font-sans text-xs font-semibold tracking-[0.08em] text-foreground/75"
                    >
                      {contactInfo.postalCode}
                    </span>
                  </div>
                </address>

                <a
                  href={contactInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group/map mt-5 inline-flex items-center gap-3 border-b border-accent/35 pb-2 font-sans text-xs font-semibold text-accent transition-colors duration-300 hover:border-accent ${
                    isRTL ? "" : "uppercase tracking-[0.1em]"
                  }`}
                >
                  <span>{t.directions}</span>

                  <DirectionArrow
                    size={15}
                    strokeWidth={1.4}
                    className="transition-transform duration-300 group-hover/map:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>

            {/* BOTTOM META */}
            <div
              className={`flex flex-col gap-3 px-6 py-4 font-sans text-[10px] font-medium text-foreground/35 sm:flex-row sm:items-center sm:justify-between md:px-8 lg:px-10 ${
                isRTL ? "" : "uppercase tracking-[0.16em]"
              }`}
            >
              <span>{t.disciplines}</span>

              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{t.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
