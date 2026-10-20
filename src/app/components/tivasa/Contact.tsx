
"use client";

import {
  ArrowUpRight,
  ArrowUpLeft,
  ArrowRight,
  ArrowLeft,
  MapPin,
  Phone,
  Smartphone,
  Mail,
} from "lucide-react";

import type { Locale } from "@/i18n/config";

interface ContactProps {
  locale: Locale;
}

const contactInfo = {
  email: "Tetacompany1@gmail.com",
  phoneDisplay: "+98 21 58214",
  phoneHref: "tel:+982158214",
  mobileDisplay: "09120198980",
  mobileHref: "tel:+989120198980",
  postalCode: "1533944633",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=No.+66+Arabali+St+Khorramshahr+St+North+Sohrevardi+Tehran+Iran",
} as const;

const translations = {
  en: {
    label: "Contact",
    description:
      "Project inquiries, technical support and product information.",
    eyebrow: "Get in touch",
    headingFirst: "Have a project?",
    headingSecond: "Let's talk.",
    general: "General inquiries",
    project: "Project inquiry",
    consultation: "Request a consultation",
    projectDescription:
      "Discuss your project requirements with our team.",
    telephone: "Contact numbers",
    landline: "Office",
    mobile: "Mobile",
    office: "Head office",
    postalCode: "Postal code",
    directions: "View on Google Maps",
    company: "Tahvieh Tiv Asa (TETA)",
    address:
      "3rd Floor, No. 66, Arabali St., Khorramshahr St., North Sohrevardi St., Tehran, Iran",
    disciplines: "Engineering / Installation / Service",
    location: "Tehran / Iran",
  },
  fa: {
    label: "تماس با ما",
    description:
      "مشاوره پروژه، پشتیبانی فنی و اطلاعات محصولات.",
    eyebrow: "ارتباط با تیواسا",
    headingFirst: "پروژه‌ای در ذهن دارید؟",
    headingSecond: "با ما در میان بگذارید.",
    general: "ارتباط عمومی",
    project: "مشاوره پروژه",
    consultation: "درخواست مشاوره",
    projectDescription:
      "برای بررسی نیازهای پروژه با تیم ما در ارتباط باشید.",
    telephone: "شماره‌های تماس",
    landline: "تلفن دفتر",
    mobile: "تلفن همراه",
    office: "دفتر مرکزی",
    postalCode: "کد پستی",
    directions: "مشاهده در گوگل مپ",
    company: "شرکت تهویه تیو آسا (تتا)",
    address:
      "تهران، سهروردی شمالی، خیابان خرمشهر، خیابان عرب‌علی، پلاک ۶۶، طبقه سوم",
    disciplines: "مهندسی / نصب / خدمات",
    location: "تهران / ایران",
  },
} as const;

export default function Contact({ locale }: ContactProps) {
  const isRTL = locale === "fa";
  const t = translations[locale];

  const DirectionArrow = isRTL ? ArrowUpLeft : ArrowUpRight;
  const HorizontalArrow = isRTL ? ArrowLeft : ArrowRight;

  const projectMailto = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
    isRTL ? "درخواست مشاوره پروژه" : "Project Inquiry"
  )}`;

  return (
    <section
      id="contact"
      dir={isRTL ? "rtl" : "ltr"}
      className="scroll-mt-24 border-b border-foreground/10 bg-background text-foreground"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="grid lg:grid-cols-12">

          {/* SECTION MARKER */}
          <aside
            className={`relative border-b border-foreground/10 p-5 lg:col-span-3 lg:border-b-0 lg:p-7 ${
              isRTL ? "lg:border-l" : "lg:border-r"
            }`}
          >
            <div className={`relative ${isRTL ? "pr-4" : "pl-4"}`}>
              <div
                className={`absolute inset-y-0 w-px bg-accent ${
                  isRTL ? "right-0" : "left-0"
                }`}
              />

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

                <span
                  className={`font-sans text-sm font-semibold text-accent ${
                    isRTL ? "" : "uppercase tracking-[0.16em]"
                  }`}
                >
                  {t.label}
                </span>
              </div>

              <p className="mt-3 max-w-xs font-sans text-sm leading-6 text-foreground/45">
                {t.description}
              </p>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="min-w-0 lg:col-span-9">

            {/* COMPACT INTRODUCTION */}
            <div className="px-5 py-7 md:px-8 md:py-9 lg:px-10 lg:py-10">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-7 bg-accent" />

                <span
                  className={`font-sans text-[10px] font-semibold text-accent ${
                    isRTL ? "" : "uppercase tracking-[0.16em]"
                  }`}
                >
                  {t.eyebrow}
                </span>
              </div>

              <h2
                className={`max-w-5xl font-display font-semibold ${
                  isRTL
                    ? "text-[clamp(2rem,3.6vw,4rem)] leading-[1.3] tracking-normal"
                    : "text-[clamp(2.5rem,4.5vw,5rem)] leading-[1.02] tracking-[-0.055em]"
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

              {/* GENERAL EMAIL */}
              <a
                href={`mailto:${contactInfo.email}`}
                className={`group min-w-0 border-b border-foreground/10 p-5 transition-colors duration-300 hover:bg-foreground/[0.025] md:border-b-0 md:p-6 lg:px-8 ${
                  isRTL ? "md:border-l" : "md:border-r"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <Mail
                      size={16}
                      strokeWidth={1.3}
                      className="shrink-0 text-accent"
                    />

                    <span
                      className={`font-sans text-[10px] font-semibold text-accent ${
                        isRTL ? "" : "uppercase tracking-[0.14em]"
                      }`}
                    >
                      {t.general}
                    </span>
                  </div>

                  <DirectionArrow
                    size={17}
                    strokeWidth={1.3}
                    className="shrink-0 text-foreground/35 transition-colors duration-300 group-hover:text-accent"
                  />
                </div>

                <div
                  dir="ltr"
                  className={`mt-4 break-all font-display text-[clamp(1.1rem,1.8vw,1.65rem)] font-medium tracking-[-0.035em] ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                >
                  {contactInfo.email}
                </div>

                <div className="mt-4 h-px w-full bg-foreground/10">
                  <div className="h-full w-12 bg-accent transition-all duration-500 group-hover:w-full" />
                </div>
              </a>

              {/* PROJECT CONSULTATION */}
              <a
                href={projectMailto}
                className="group min-w-0 p-5 transition-colors duration-300 hover:bg-foreground/[0.025] md:p-6 lg:px-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 shrink-0 bg-accent" />

                    <span
                      className={`font-sans text-[10px] font-semibold text-accent ${
                        isRTL ? "" : "uppercase tracking-[0.14em]"
                      }`}
                    >
                      {t.project}
                    </span>
                  </div>

                  <DirectionArrow
                    size={17}
                    strokeWidth={1.3}
                    className="shrink-0 text-foreground/35 transition-colors duration-300 group-hover:text-accent"
                  />
                </div>

                <h3
                  className={`mt-4 font-display text-[clamp(1.5rem,2.3vw,2.2rem)] font-medium ${
                    isRTL
                      ? "leading-[1.3]"
                      : "leading-[1.1] tracking-[-0.04em]"
                  }`}
                >
                  {t.consultation}
                </h3>

                <p className="mt-2 max-w-md font-sans text-[13px] leading-6 text-foreground/45">
                  {t.projectDescription}
                </p>

                <div className="mt-3 flex items-center gap-2 text-accent">
                  <span className="h-px w-6 bg-accent" />
                  <HorizontalArrow size={14} strokeWidth={1.4} />
                </div>
              </a>
            </div>

            {/* COMPANY INFORMATION */}
            <div className="grid md:grid-cols-2">

              {/* TELEPHONE NUMBERS */}
              <div
                className={`border-b border-foreground/10 p-5 md:p-6 lg:px-8 ${
                  isRTL ? "md:border-l" : "md:border-r"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Phone
                    size={16}
                    strokeWidth={1.3}
                    className="text-accent"
                  />

                  <span
                    className={`font-sans text-[10px] font-semibold text-accent ${
                      isRTL ? "" : "uppercase tracking-[0.14em]"
                    }`}
                  >
                    {t.telephone}
                  </span>
                </div>

                {/* OFFICE NUMBER */}
                <a
                  href={contactInfo.phoneHref}
                  className="group/phone mt-4 flex items-center justify-between gap-4"
                >
                  <div className="min-w-0">
                    <span className="font-sans text-[10px] text-foreground/40">
                      {t.landline}
                    </span>

                    <div
                      dir="ltr"
                      className={`mt-1 font-display text-[clamp(1.35rem,2vw,1.85rem)] font-medium tracking-[-0.035em] transition-colors duration-300 group-hover/phone:text-accent ${
                        isRTL ? "text-right" : "text-left"
                      }`}
                    >
                      {contactInfo.phoneDisplay}
                    </div>
                  </div>

                  <DirectionArrow
                    size={17}
                    strokeWidth={1.3}
                    className="shrink-0 text-foreground/30 transition-colors duration-300 group-hover/phone:text-accent"
                  />
                </a>

                {/* MOBILE NUMBER */}
                <a
                  href={contactInfo.mobileHref}
                  className="group/mobile mt-4 flex items-center justify-between gap-4 border-t border-foreground/10 pt-4"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <Smartphone
                        size={13}
                        strokeWidth={1.3}
                        className="text-accent"
                      />

                      <span className="font-sans text-[10px] text-foreground/40">
                        {t.mobile}
                      </span>
                    </div>

                    <div
                      dir="ltr"
                      className={`mt-1 font-display text-[clamp(1.35rem,2vw,1.85rem)] font-medium tracking-[-0.035em] transition-colors duration-300 group-hover/mobile:text-accent ${
                        isRTL ? "text-right" : "text-left"
                      }`}
                    >
                      {contactInfo.mobileDisplay}
                    </div>
                  </div>

                  <DirectionArrow
                    size={17}
                    strokeWidth={1.3}
                    className="shrink-0 text-foreground/30 transition-colors duration-300 group-hover/mobile:text-accent"
                  />
                </a>
              </div>

              {/* OFFICE ADDRESS */}
              <div className="border-b border-foreground/10 p-5 md:p-6 lg:px-8">
                <div className="flex items-center gap-2.5">
                  <MapPin
                    size={16}
                    strokeWidth={1.3}
                    className="text-accent"
                  />

                  <span
                    className={`font-sans text-[10px] font-semibold text-accent ${
                      isRTL ? "" : "uppercase tracking-[0.14em]"
                    }`}
                  >
                    {t.office}
                  </span>
                </div>

                <address className="mt-4 font-sans not-italic">
                  <p className="text-[15px] font-semibold text-foreground">
                    {t.company}
                  </p>

                  <p className="mt-2 max-w-md text-[13px] leading-6 text-foreground/60">
                    {t.address}
                  </p>

                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="font-sans text-[11px] text-foreground/40">
                      {t.postalCode}
                    </span>

                    <span
                      dir="ltr"
                      className="font-sans text-[11px] font-semibold tracking-[0.06em] text-foreground/70"
                    >
                      {contactInfo.postalCode}
                    </span>
                  </div>
                </address>

                {/* MAP LINK */}
                <a
                  href={contactInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group/map mt-4 inline-flex items-center gap-2 border-b border-accent/35 pb-1.5 font-sans text-[11px] font-semibold text-accent transition-colors duration-300 hover:border-accent ${
                    isRTL ? "" : "uppercase tracking-[0.08em]"
                  }`}
                >
                  <span>{t.directions}</span>

                  <DirectionArrow
                    size={14}
                    strokeWidth={1.4}
                    className="transition-transform duration-300 group-hover/map:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>

            {/* BOTTOM METADATA */}
            <div
              className={`flex flex-col gap-2 px-5 py-3 font-sans text-[10px] font-medium text-foreground/35 sm:flex-row sm:items-center sm:justify-between md:px-6 lg:px-8 ${
                isRTL ? "" : "uppercase tracking-[0.14em]"
              }`}
            >
              <span>{t.disciplines}</span>

              <div className="flex items-center gap-2">
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
