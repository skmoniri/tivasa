"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowUpLeft, Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import MobileMenu from "../tivasa/MobileMenu";
import LanguageSwitcher from "../LanguageSwitcher";

import type { Locale } from "@/i18n/config";
import { localizeHref } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

interface HeaderProps {
  locale: Locale;
}

export default function Header({ locale }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);

  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const t = getDictionary(locale);
  const isRTL = locale === "fa";
  const DirectionArrow = isRTL ? ArrowUpLeft : ArrowUpRight;

  const navItems = [
    [t.nav.products, "/#products"],
    [t.nav.projects, "/#projects"],
    [t.nav.about, "/#about"],
    [t.nav.installation, "/installation"],
    [locale === "fa" ? "نگهداری و سرویس" : "Maintenance", "/maintenance"],
    [isRTL ? "بانک اطلاعات فنی" : "Database", "/database"],
    [t.nav.contact, "/#contact"],
  ] as const;

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const closeMenuAndRestoreFocus = useCallback(() => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setAtTop(currentScrollY <= 8);

      if (menuOpen) {
        setHidden(false);
      } else if (currentScrollY <= 8) {
        setHidden(false);
      } else if (currentScrollY > lastScrollY) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  // Close mobile navigation when desktop navigation becomes active.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");

    const handleBreakpointChange = () => {
      if (mediaQuery.matches) {
        setMenuOpen(false);
      }
    };

    handleBreakpointChange();

    mediaQuery.addEventListener("change", handleBreakpointChange);

    return () => {
      mediaQuery.removeEventListener("change", handleBreakpointChange);
    };
  }, []);

  return (
    <>
      <header
        dir={isRTL ? "rtl" : "ltr"}
        className={`fixed inset-x-0 top-0 z-50 text-background transition-transform duration-300 ease-[cubic-bezier(0.77,0,0.18,1)] ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="bg-foreground">
          <div className="mx-auto flex h-24 max-w-[1800px] items-center justify-between gap-3 px-5 md:px-8 lg:px-10">
            {" "}
            {/* ORIGINAL ANIMATED LOGO */}
            <Link
              href={`/${locale}`}
              onClick={closeMenu}
              dir="ltr"
              className={`group relative flex h-11 w-11 shrink-0 select-none items-center overflow-visible sm:w-[150px] ${
                isRTL ? "mr-0 ml-auto sm:ml-0" : "ml-0 mr-auto sm:mr-0"
              }`}
              aria-label={isRTL ? "صفحه اصلی تیواسا" : "Tivasa home"}
            >
              <span className="absolute left-0 top-0 h-11 w-[150px] overflow-hidden">
                {/* Symbol */}
                <span className="absolute inset-y-0 left-0 flex w-11 items-center justify-center [clip-path:inset(0_0_0_0)] transition-[clip-path] delay-[100ms] duration-500 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:[clip-path:inset(0_0_0_100%)] group-hover:delay-0">
                  <Image
                    src="/tivasa-logo-symbol.png"
                    alt=""
                    width={44}
                    height={44}
                    priority
                    className="h-11 w-11 object-contain"
                  />
                </span>

                {/* Wordmark */}
                <span className="absolute left-0 top-0 flex h-11 items-center whitespace-nowrap font-display text-3xl font-semibold tracking-[-0.055em] [clip-path:inset(0_100%_0_0)] transition-[clip-path] duration-600 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:[clip-path:inset(0_0_0_0)]">
                  TIVASA
                  <span className="ml-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                </span>

                {/* Scanner */}
                <span className="pointer-events-none invisible absolute left-0 top-0 z-20 h-11 w-px bg-accent transition-[left,visibility] duration-600 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:visible group-hover:left-[116px]" />
              </span>

              {/* Technical underline */}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-[width] duration-500 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:w-[92px]" />
            </Link>
            {/* DESKTOP NAVIGATION */}
            <nav
              className="hidden items-center gap-5 xl:flex 2xl:gap-7"
              aria-label={isRTL ? "ناوبری اصلی" : "Primary navigation"}
            >
              {navItems.map(([label, href]) => (
                <Link
                  key={href}
                  href={localizeHref(href, locale)}
                  className="group relative flex select-none items-center whitespace-nowrap py-2"
                >
                  <span
                    className={`font-sans text-xs font-medium text-background/60 transition-colors duration-200 group-hover:text-background ${
                      isRTL ? "tracking-normal" : "uppercase tracking-[0.14em]"
                    }`}
                  >
                    {label}
                  </span>

                  <span
                    className={`absolute bottom-0 h-px w-0 bg-accent transition-[width] duration-300 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:w-full ${
                      isRTL ? "right-0" : "left-0"
                    }`}
                  />
                </Link>
              ))}
            </nav>
            {/* ACTIONS */}
            <div className="flex shrink-0 items-center gap-3 lg:gap-5">
              <LanguageSwitcher locale={locale} onSwitch={closeMenu} />

              {/* DESKTOP CTA */}
              <Link
                href={localizeHref("/#contact", locale)}
                className={`group relative hidden select-none items-center gap-3 overflow-hidden border border-background/25 px-5 py-3 font-sans text-xs font-medium transition-[border-color] duration-200 hover:border-accent sm:flex ${
                  isRTL ? "tracking-normal" : "uppercase tracking-[0.12em]"
                }`}
              >
                {/* Animated red fill */}
                <span
                  className={`absolute inset-0 scale-x-0 bg-accent transition-transform duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:scale-x-100 ${
                    isRTL ? "origin-right" : "origin-left"
                  }`}
                />

                {/* Red side rail */}
                <span
                  className={`absolute top-0 z-20 h-full w-px bg-accent ${
                    isRTL ? "right-0" : "left-0"
                  }`}
                />

                <span className="relative z-10 whitespace-nowrap transition-colors duration-200 group-hover:text-background">
                  {t.header.startProject}
                </span>

                {/* Mirrored CTA arrow */}
                <DirectionArrow
                  size={16}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className={`relative z-10 text-accent transition-[transform,color] duration-200 group-hover:-translate-y-0.5 group-hover:text-background ${
                    isRTL
                      ? "group-hover:-translate-x-0.5"
                      : "group-hover:translate-x-0.5"
                  }`}
                />
              </Link>

              {/* ORIGINAL ANIMATED MOBILE TOGGLE */}
              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => {
                  setMenuOpen((prev) => !prev);
                  setHidden(false);
                }}
                className="group relative flex h-8 w-8 shrink-0 items-center justify-center xl:hidden"
                aria-label={menuOpen ? t.header.closeMenu : t.header.openMenu}
                aria-expanded={menuOpen}
                aria-controls="tivasa-mobile-menu"
              >
                <Menu
                  size={28}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className={`absolute transition-[transform,opacity] duration-300 ${
                    menuOpen
                      ? "rotate-90 scale-0 opacity-0"
                      : "rotate-0 scale-100 opacity-100"
                  }`}
                />

                <X
                  size={28}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className={`absolute text-accent transition-[transform,opacity] duration-300 ${
                    menuOpen
                      ? "rotate-0 scale-100 opacity-100"
                      : "-rotate-90 scale-0 opacity-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* ORIGINAL INDUSTRIAL MACHINE RAIL */}
        <div className="relative h-px w-full bg-background/10">
          <span
            className={`absolute top-0 h-px bg-accent transition-[width] duration-500 ease-[cubic-bezier(0.77,0,0.18,1)] ${
              isRTL ? "right-0" : "left-0"
            } ${hidden ? "w-full" : atTop ? "w-0" : "w-1/4"}`}
          />

          <span
            className={`absolute top-0 h-px bg-accent transition-[width] duration-300 ${
              isRTL ? "left-0" : "right-0"
            } ${hidden ? "w-0" : atTop ? "w-0" : "w-8"}`}
          />
        </div>
      </header>

      <MobileMenu
        locale={locale}
        open={menuOpen}
        onClose={closeMenu}
        onEscape={closeMenuAndRestoreFocus}
        triggerRef={menuButtonRef}
      />
    </>
  );
}
