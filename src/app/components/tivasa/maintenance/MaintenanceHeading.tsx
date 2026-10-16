import type { Locale } from "@/i18n/config";

interface MaintenanceHeadingProps {
  locale: Locale;
  eyebrow: string;
  title: string;
  accent: string;
  description?: string;
  dark?: boolean;
}

export default function MaintenanceHeading({
  locale,
  eyebrow,
  title,
  accent,
  description,
  dark = false,
}: MaintenanceHeadingProps) {
  const rtl = locale === "fa";

  return (
    <div dir={rtl ? "rtl" : "ltr"}>
      <div className="flex items-center gap-3">
        <span className="h-1.5 w-1.5 shrink-0 bg-accent" />
        <span
          className={`font-sans text-xs font-semibold ${
            rtl ? "" : "uppercase tracking-[0.14em]"
          } ${dark ? "text-white/55" : "text-accent"}`}
        >
          {eyebrow}
        </span>
      </div>

      <h2
        className={`mt-6 font-display font-semibold ${
          rtl
            ? "text-[clamp(2rem,3.4vw,3.9rem)] leading-[1.35]"
            : "text-[clamp(2.5rem,4vw,4.6rem)] leading-[0.98] tracking-[-0.055em]"
        }`}
      >
        {title}
        <br />
        <span
          className={`font-normal ${
            dark ? "text-white/45" : "text-foreground/40"
          }`}
        >
          {accent}
        </span>
      </h2>

      {description && (
        <p
          className={`mt-5 max-w-lg font-sans text-sm leading-7 ${
            dark ? "text-white/55" : "text-foreground/55"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
