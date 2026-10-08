"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import MobileMenu from "../tivasa/MobileMenu";

const navItems = [
  ["Products", "/#products"],
  ["Projects", "/#projects"],
  ["About", "/#about"],
  ["Installation", "/installation"],
  ["Contact", "/#contact"],
] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);

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

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 text-background transition-transform duration-300 ease-[cubic-bezier(0.77,0,0.18,1)] ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="bg-foreground">
          <div className="mx-auto flex h-24 max-w-[1800px] items-center justify-between px-5 md:px-8 lg:px-10">
            {/* =====================================================
                LOGO
                ===================================================== */}
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="group relative flex h-11 w-[150px] select-none items-center overflow-visible"
              aria-label="Tivasa home"
            >
              <span className="absolute left-0 top-0 h-11 w-[150px] overflow-hidden">
                {/* Symbol */}
                <span className="absolute inset-y-0 left-0 flex w-11 items-center justify-center [clip-path:inset(0_0_0_0)] transition-[clip-path] delay-[100ms] duration-500 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:[clip-path:inset(0_0_0_100%)] group-hover:delay-0">
                  <Image
                    src="/tivasa-logo-symbol.png"
                    alt="Tivasa"
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

            {/* =====================================================
                DESKTOP NAVIGATION
                ===================================================== */}
            <nav
              className="hidden items-center gap-7 md:flex"
              aria-label="Primary navigation"
            >
              {navItems.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="group relative flex select-none items-center py-2"
                >
                  <span className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-background/60 transition-colors duration-200 group-hover:text-background">
                    {label}
                  </span>

                  <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-[width] duration-300 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* =====================================================
                ACTIONS
                ===================================================== */}
            <div className="flex items-center gap-6">
              {/* Desktop CTA */}
              <Link
                href="/#contact"
                className="group relative hidden select-none items-center gap-3 overflow-hidden border border-background/25 px-5 py-3 font-sans text-xs font-medium uppercase tracking-[0.12em] transition-[border-color] duration-200 hover:border-accent sm:flex"
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:scale-x-100" />

                <span className="absolute left-0 top-0 z-20 h-full w-px bg-accent" />

                <span className="relative z-10 transition-colors duration-200 group-hover:text-background">
                  Start a project
                </span>

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="relative z-10 text-accent transition-[transform,color] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-background"
                />
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => {
                  setMenuOpen((prev) => !prev);
                  setHidden(false);
                }}
                className="group relative flex h-8 w-8 items-center justify-center md:hidden"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                <Menu
                  size={28}
                  strokeWidth={1.5}
                  className={`absolute transition-[transform,opacity] duration-300 ${
                    menuOpen
                      ? "rotate-90 scale-0 opacity-0"
                      : "rotate-0 scale-100 opacity-100"
                  }`}
                />

                <X
                  size={28}
                  strokeWidth={1.5}
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

        {/* =========================================================
            INDUSTRIAL MACHINE RAIL
            ========================================================= */}
        <div className="relative h-px w-full bg-background/10">
          <span
            className={`absolute left-0 top-0 h-px bg-accent transition-[width] duration-500 ease-[cubic-bezier(0.77,0,0.18,1)] ${
              hidden ? "w-full" : atTop ? "w-0" : "w-1/4"
            }`}
          />

          <span
            className={`absolute right-0 top-0 h-px bg-accent transition-[width] duration-300 ${
              hidden ? "w-0" : atTop ? "w-0" : "w-8"
            }`}
          />
        </div>
      </header>

      {/* =========================================================
          MOBILE MENU
          ========================================================= */}
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
