"use client";

import { ArrowUpRight } from "lucide-react";
import { capabilities } from "./data";

export default function About() {
  return (
    <section
      id="about"
      className="border-b border-foreground/10 bg-background text-foreground"
    >
      <div className="mx-auto max-w-[1800px]">
        {/* =========================================================
            ABOUT INTRO
            ========================================================= */}
        <div className="grid lg:grid-cols-12">
          {/* About label */}
          <div className="tivasa-about-reveal border-b border-foreground/10 p-6 lg:col-span-3 lg:border-b-0 lg:border-r lg:p-10">
            <div className="relative pl-4">
              <div className="absolute left-0 top-0 h-full w-px bg-accent" />

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />

                <div className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  About Tivasa
                </div>
              </div>

              <div className="mt-6 max-w-[220px] font-sans text-base font-normal leading-7 text-foreground/45">
                Engineering / Manufacturing / Technology
              </div>
            </div>
          </div>

          {/* Main about content */}
          <div className="tivasa-about-reveal p-6 md:p-10 lg:col-span-9 lg:p-16">
            <h2 className="max-w-6xl font-display text-[clamp(3.5rem,7vw,8rem)] font-semibold leading-[0.86] tracking-[-0.065em]">
              We build systems
              <br />
              <span className="ml-0 font-normal text-foreground/85 md:ml-[4%]">
                for the real world.
              </span>
            </h2>

            <div className="mt-14 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-14">
              <p className="max-w-xl font-sans text-lg font-normal leading-8 text-foreground/65">
                Tivasa operates at the intersection of engineering,
                manufacturing and technology. We focus on practical solutions
                where precision, reliability and performance matter.
              </p>

              <p className="max-w-xl font-sans text-lg font-normal leading-8 text-foreground/45">
                Every project begins with understanding the problem. From there,
                technical knowledge becomes a system designed to perform in the
                conditions it was built for.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================================
            CAPABILITIES
            ========================================================= */}
        <div className="grid border-t border-foreground/10 md:grid-cols-3">
          {capabilities.map((capability, index) => (
            <div
              key={capability.number}
              className={`tivasa-capability-group tivasa-about-reveal group relative overflow-hidden p-6 transition-colors duration-500 hover:bg-foreground/[0.018] md:p-10 ${
                index !== capabilities.length - 1
                  ? "border-b border-foreground/10 md:border-b-0 md:border-r"
                  : ""
              }`}
              style={{
                animationDelay: `${180 + index * 100}ms`,
              }}
            >
              {/* Capability number */}
              <div className="mb-16 flex items-center gap-4 md:mb-[4.5rem]">
                <div className="h-8 w-px bg-accent" />

                <span className="font-sans text-xl font-semibold tracking-[0.08em] text-accent">
                  {capability.number}
                </span>
              </div>

              <div className="flex items-start justify-between gap-2">
                <h3 className="min-w-0 font-display text-[clamp(2rem,4vw,3rem)] font-semibold leading-[0.95] tracking-[-0.035em] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                  {capability.title}
                </h3>

                <ArrowUpRight
                  size={22}
                  strokeWidth={1.25}
                  className="mt-1 shrink-0 -translate-x-1 translate-y-1 text-foreground/15 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-accent group-hover:opacity-100"
                />
              </div>

              <p className="mt-5 max-w-sm font-sans text-base font-normal leading-7 text-foreground/50 transition-colors duration-500 group-hover:text-foreground/60">
                {capability.description}
              </p>

              <div className="mt-12 h-px w-full overflow-hidden bg-foreground/10">
                <div className="h-full w-1/3 origin-left bg-accent transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-[3]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
