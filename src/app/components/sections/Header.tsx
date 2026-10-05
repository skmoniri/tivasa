"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import MobileMenu from "../tivasa/MobileMenu";

const navItems = [
  ["Products", "products"],
  ["Projects", "projects"],
  ["About", "about"],
  ["Contact", "contact"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setAtTop(currentScrollY <= 8);

      if (currentScrollY <= 8) {
        setHidden(false);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setHidden(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Header system */}
      <header
        className={`fixed inset-x-0 top-0 z-50 text-background transition-transform duration-300 ease-[cubic-bezier(0.77,0,0.18,1)] ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Main header panel */}
        <div className="border-b border-background/10 bg-foreground">
          <div className="mx-auto flex h-24 max-w-[1800px] items-center justify-between px-5 md:px-8 lg:px-10">
            {/* Logo */}
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="group relative flex items-center gap-3"
            >
              <span className="font-display text-3xl font-semibold tracking-[-0.055em]">
                TIVASA
              </span>

              {/* Technical status marker */}
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute h-full w-full rounded-full bg-accent/20" />

                <span className="relative h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125" />
              </span>

              {/* Logo underline */}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-7 md:flex">
              {navItems.map(([label, href], index) => (
                <a
                  key={label}
                  href={`#${href}`}
                  className="group relative flex items-center gap-2 py-2"
                >
                  {/* Index */}
                  <span className="font-sans text-[8px] font-medium tracking-[0.08em] text-background/25 transition-colors duration-300 group-hover:text-accent">
                    0{index + 1}
                  </span>

                  {/* Label */}
                  <span className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-background/60 transition-colors duration-300 group-hover:text-background">
                    {label}
                  </span>

                  {/* Accent underline */}
                  <span className="absolute bottom-0 left-[18px] h-px w-0 bg-accent transition-all duration-300 group-hover:w-[calc(100%-18px)]" />
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-6">
              {/* Desktop CTA */}
              <a
                href="#contact"
                className="group relative hidden items-center gap-3 overflow-hidden border border-background/25 px-5 py-3 font-sans text-xs font-medium uppercase tracking-[0.12em] transition-colors duration-200 hover:border-accent sm:flex"
              >
                {/* Red color sweep */}
                <span className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-300 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:scale-x-100" />

                {/* Technical accent */}
                <span className="absolute left-0 top-0 z-20 h-full w-px bg-accent" />

                <span className="relative z-10 transition-colors duration-200 group-hover:text-background">
                  Start a project
                </span>

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="relative z-10 text-accent transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-background"
                />
              </a>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setMenuOpen((prev) => !prev)}
                className="group relative flex h-8 w-8 items-center justify-center md:hidden"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
              >
                <Menu
                  size={28}
                  strokeWidth={1.5}
                  className={`absolute transition-all duration-300 ${
                    menuOpen
                      ? "rotate-90 scale-0 opacity-0"
                      : "rotate-0 scale-100 opacity-100"
                  }`}
                />

                <X
                  size={28}
                  strokeWidth={1.5}
                  className={`absolute text-accent transition-all duration-300 ${
                    menuOpen
                      ? "rotate-0 scale-100 opacity-100"
                      : "-rotate-90 scale-0 opacity-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Industrial machine rail */}
        <div
          className={`relative h-px w-full bg-background/10 transition-all duration-300 ${
            hidden ? "opacity-100" : "opacity-100"
          }`}
        >
          {/* Red system signal */}
          <span
            className={`absolute left-0 top-0 h-px bg-accent transition-all duration-500 ease-[cubic-bezier(0.77,0,0.18,1)] ${
              hidden ? "w-full" : atTop ? "w-0" : "w-1/4"
            }`}
          />

          {/* Small technical endpoint */}
          <span
            className={`absolute right-0 top-0 h-px bg-accent transition-all duration-300 ${
              hidden ? "w-0" : atTop ? "w-0" : "w-8"
            }`}
          />
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
