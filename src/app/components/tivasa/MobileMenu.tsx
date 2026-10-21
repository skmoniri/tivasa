"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useEffect, useRef } from "react";
import type { RefObject } from "react";

import type { Locale } from "@/i18n/config";
import { localizeHref } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

interface MobileMenuProps {
  locale: Locale;
  open: boolean;
  onClose: () => void;
  onEscape: () => void;
  triggerRef: RefObject<HTMLButtonElement | null>;
}

export default function MobileMenu({
  locale,
  open,
  onClose,
  onEscape,
  triggerRef,
}: MobileMenuProps) {
  const t = getDictionary(locale);
  const isRTL = locale === "fa";
  const navigationRef = useRef<HTMLElement>(null);

  const navItems = [
    [t.nav.products, "/#products"],
    [t.nav.projects, "/#projects"],
    [t.nav.about, "/#about"],
    [t.nav.installation, "/installation"],
    [isRTL ? "نگهداری و سرویس" : "Maintenance", "/maintenance"],
    [isRTL ? "بانک اطلاعات فنی" : "DataCenter", "/dataCenter"],
    [t.nav.contact, "/#contact"],
  ] as const;

  const DirectionArrow = isRTL ? ArrowLeft : ArrowRight;

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const menu = document.getElementById("tivasa-mobile-menu");
    const firstLink = navigationRef.current?.querySelector<HTMLAnchorElement>("a");
    firstLink?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onEscape();
        return;
      }
      if (event.key !== "Tab" || !menu) return;

      const focusableElements = [
        ...document.querySelectorAll<HTMLElement>(
          "header a[href], header button:not([disabled]), #tivasa-mobile-menu a[href]",
        ),
      ].filter((element) => {
        const style = window.getComputedStyle(element);
        return (
          element.getClientRects().length > 0 &&
          style.visibility !== "hidden" &&
          !element.closest("[inert]") &&
          element.tabIndex >= 0
        );
      });

      if (focusableElements.length === 0) return;
      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey && activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onEscape, triggerRef]);

  return (
    <div
      id="tivasa-mobile-menu"
      dir={isRTL ? "rtl" : "ltr"}
      aria-hidden={!open}
      inert={!open}
      className={`fixed inset-x-0 bottom-0 top-24 z-40 overflow-hidden bg-surface text-background transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.18,1)] ${
        open ? "translate-x-0" : isRTL ? "-translate-x-full" : "translate-x-full"
      }`}
    >
      {/* Opening signal line */}
      <div
        className={`pointer-events-none absolute top-0 z-20 h-px bg-accent transition-all duration-500 ease-[cubic-bezier(0.77,0,0.18,1)] ${
          isRTL ? "right-0" : "left-0"
        } ${open ? "w-full" : "w-0"}`}
      />

      {/* Scrollable menu content */}
      <div className="relative z-10 h-full overflow-y-auto overscroll-contain [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.15)_transparent]">
        <div className="flex min-h-full flex-col justify-between px-5 py-4 sm:py-6 md:px-10 md:py-8">
          <nav
            ref={navigationRef}
            className="flex flex-col"
            aria-label={isRTL ? "ناوبری موبایل" : "Mobile navigation"}
          >
            {navItems.map(([label, href], index) => (
              <Link
                key={href}
                href={localizeHref(href, locale)}
                onClick={onClose}
                tabIndex={open ? 0 : -1}
                className={`group relative flex items-center justify-between gap-4 border-b border-background/10 py-2.5 transition-[transform,opacity] duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] sm:py-3.5 md:py-4 ${
                  open
                    ? "translate-x-0 opacity-100"
                    : isRTL
                      ? "translate-x-6 opacity-0"
                      : "-translate-x-6 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${index * 65 + 100}ms` : "0ms" }}
              >
                <span
                  className={`absolute top-0 h-0 w-[2px] bg-accent transition-all duration-300 group-hover:h-full ${
                    isRTL ? "right-0" : "left-0"
                  }`}
                />

                <span
                  className={`min-w-0 font-display font-semibold transition-colors duration-300 group-hover:text-background/35 ${
                    isRTL
                      ? "text-[clamp(1.45rem,5.4vw,3.6rem)] leading-[1.3]"
                      : "text-[clamp(1.8rem,6.6vw,4.2rem)] leading-[1] tracking-[-0.055em]"
                  }`}
                >
                  {label}
                </span>

                <DirectionArrow
                  size={24}
                  strokeWidth={1.25}
                  aria-hidden="true"
                  className={`shrink-0 text-background/20 transition-all duration-300 group-hover:text-accent ${
                    isRTL ? "group-hover:-translate-x-1.5" : "group-hover:translate-x-1.5"
                  }`}
                />

                <span
                  className={`absolute bottom-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full ${
                    isRTL ? "right-0" : "left-0"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Technical information footer */}
          <div
            className={`mt-6 shrink-0 border-t border-background/10 pt-3 font-sans text-[9px] font-medium transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.77,0,0.18,1)] ${
              isRTL ? "tracking-normal" : "uppercase tracking-[0.14em]"
            } ${open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            style={{ transitionDelay: open ? "450ms" : "0ms" }}
          >
            <div className="mb-3 flex items-center justify-between text-background/25">
              <span>{t.mobile.system}</span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {t.mobile.active}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-background/10 pt-3">
              <div className="flex items-center gap-2">
                <span className="text-background/25">{isRTL ? "موقعیت" : "LOC"}</span>
                <span className="text-background/60">{t.mobile.location}</span>
              </div>
              <span className="hidden h-3 w-px bg-background/10 sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-background/25">{isRTL ? "حوزه" : "DIV"}</span>
                <span className="text-background/60">{t.mobile.division}</span>
              </div>
              <span className="hidden h-3 w-px bg-background/10 sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-background/25">{isRTL ? "وضعیت" : "STATUS"}</span>
                <span className="font-semibold text-accent">{t.mobile.available}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
