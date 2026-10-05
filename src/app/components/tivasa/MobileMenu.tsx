"use client";

import { ArrowRight } from "lucide-react";
import { navigation } from "./data";
import { useEffect } from "react";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={`fixed right-0 top-24 bottom-0 z-40 w-full overflow-hidden bg-surface text-background transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.18,1)] ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
      aria-hidden={!open}
    >
      {/* Thin opening signal line */}
      <div
        className={`pointer-events-none absolute left-0 top-0 z-20 h-px bg-accent transition-all duration-500 ease-[cubic-bezier(0.77,0,0.18,1)] ${
          open ? "w-full" : "w-0"
        }`}
      />

      <div className="relative z-10 flex min-h-full flex-col">
        <div className="flex flex-1 flex-col justify-between px-5 py-8 md:px-10 md:py-12">
          {/* Navigation */}
          <nav className="flex flex-col">
            {navigation.map(([, label], index) => (
              <a
                href={`#${label.toLowerCase()}`}
                key={label}
                onClick={onClose}
                className={`group relative flex items-center justify-between border-b border-background/10 py-5 transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] md:py-6 ${
                  open
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-6 opacity-0"
                }`}
                style={{
                  transitionDelay: open ? `${index * 70 + 100}ms` : "0ms",
                }}
              >
                {/* Active rail */}
                <span className="absolute left-0 top-0 h-0 w-[2px] bg-accent transition-all duration-300 group-hover:h-full" />

                <div className="flex items-center">
                  <span className="font-display text-[clamp(3.5rem,15vw,8rem)] font-semibold leading-[0.78] tracking-[-0.06em] transition-colors duration-300 group-hover:text-background/35">
                    {label}
                  </span>
                </div>

                {/* Direction indicator */}
                <ArrowRight
                  size={30}
                  strokeWidth={1.25}
                  className="mr-1 shrink-0 text-background/20 transition-all duration-300 group-hover:translate-x-1.5 group-hover:text-accent md:size-8"
                />

                {/* Bottom technical line */}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Technical information */}
          <div
            className={`border-t border-background/10 pt-5 font-sans text-[10px] font-medium uppercase tracking-[0.14em] transition-all duration-300 ease-[cubic-bezier(0.77,0,0.18,1)] md:pt-6 ${
              open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{
              transitionDelay: open ? "380ms" : "0ms",
            }}
          >
            {/* Data header */}
            <div className="mb-4 flex items-center justify-between text-background/25">
              <span>SYSTEM / INFORMATION</span>

              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                ACTIVE
              </span>
            </div>

            {/* Data grid */}
            <div className="grid border-y border-background/10 sm:grid-cols-3">
              <div className="border-b border-background/10 py-4 sm:border-b-0 sm:border-r sm:pr-5">
                <span className="block text-background/20">Location</span>

                <span className="mt-1 block text-background/60">
                  Tehran / Iran
                </span>
              </div>

              <div className="border-b border-background/10 py-4 sm:border-b-0 sm:border-r sm:px-5">
                <span className="block text-background/20">Division</span>

                <span className="mt-1 block text-background/60">
                  Engineering
                </span>
              </div>

              <div className="py-4 sm:pl-5">
                <span className="block text-background/20">Status</span>

                <span className="mt-1 block font-semibold text-accent">
                  Available
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
