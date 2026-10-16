"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";

interface LanguageSwitcherProps {
  locale: Locale;
  onSwitch?: () => void;
}

export default function LanguageSwitcher({
  locale,
  onSwitch,
}: LanguageSwitcherProps) {
  const pathname = usePathname();

  function getLocalizedPath(target: Locale) {
    const segments = pathname.split("/").filter(Boolean);

    if (segments[0] === "en" || segments[0] === "fa") {
      segments[0] = target;
    } else {
      segments.unshift(target);
    }

    return `/${segments.join("/")}`;
  }

  return (
    <div
      dir="ltr"
      role="group"
      aria-label={
        locale === "fa" ? "انتخاب زبان سایت" : "Select website language"
      }
      className="flex h-9 shrink-0 items-center border border-background/25"
    >
      {(["en", "fa"] as const).map((language) => {
        const active = locale === language;

        return (
          <Link
            key={language}
            href={getLocalizedPath(language)}
            onClick={onSwitch}
            hrefLang={language}
            lang={language}
            aria-label={
              language === "en" ? "Switch to English" : "تغییر زبان به فارسی"
            }
            aria-current={active ? "page" : undefined}
            className={`
              flex h-full min-w-10 items-center justify-center
              px-2.5 text-[11px] font-semibold
              transition-colors duration-200
              ${
                active
                  ? "bg-accent text-background"
                  : "text-background/50 hover:bg-background/10 hover:text-background"
              }
            `}
          >
            {language === "en" ? "EN" : "فا"}
          </Link>
        );
      })}
    </div>
  );
}
