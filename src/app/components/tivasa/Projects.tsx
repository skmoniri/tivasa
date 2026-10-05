"use client";

import { ArrowUpRight } from "lucide-react";
import { projects } from "./data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-b border-background/10 bg-foreground"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="grid lg:grid-cols-12">
          {/* =========================================================
              SECTION MARKER
              ========================================================= */}
          <div className="relative border-b border-background/10 p-6 lg:col-span-3 lg:border-b-0 lg:border-r lg:p-10">
            <div className="relative pl-5">
              {/* Structural red rail */}
              <div className="absolute left-0 top-0 h-full w-px bg-accent/70" />

              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

                <div className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  Selected projects
                </div>
              </div>

              <p className="mt-6 max-w-xs font-sans text-base font-normal leading-7 text-background/45">
                A selection of technical work across industrial systems,
                engineering and manufacturing.
              </p>

              <div className="mt-10 hidden border-t border-background/10 pt-5 lg:block">
                <span className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-background/25">
                  Selected work
                </span>
              </div>
            </div>
          </div>

          {/* =========================================================
              PROJECTS
              ========================================================= */}
          <div className="lg:col-span-9">
            {projects.map((project) => (
              <a
                href="#"
                key={project.number}
                className="tivasa-project group block border-b border-background/10 last:border-b-0"
              >
                <div className="grid md:grid-cols-12">
                  {/* =================================================
                      PROJECT INFORMATION
                      ================================================= */}
                  <div className="flex min-h-[440px] flex-col justify-between p-6 md:col-span-4 md:min-h-[520px] md:p-10">
                    {/* Project index */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-8 w-px bg-accent transition-[height] duration-500 group-hover:h-10" />

                        <span className="font-sans text-xl font-semibold tracking-[0.08em] text-accent">
                          {project.number}
                        </span>
                      </div>

                      <span className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-background/25">
                        Project
                      </span>
                    </div>

                    {/* Project title / metadata */}
                    <div className="mt-16 md:mt-0">
                      <div className="font-sans text-xs font-medium uppercase tracking-[0.16em] text-background/40 transition-colors duration-500 group-hover:text-background/60">
                        {project.category}
                      </div>

                      <h3 className="mt-5 max-w-md font-display text-[clamp(2.75rem,4vw,4.75rem)] font-semibold leading-[0.84] tracking-[-0.055em] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                        {project.title}
                      </h3>

                      <div className="mt-10 flex items-center justify-between border-t border-background/10 pt-5">
                        <span className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-background/35 transition-colors duration-500 group-hover:text-background/55">
                          {project.meta}
                        </span>

                        {/* Arrow button */}
                        <span className="flex h-9 w-9 items-center justify-center border border-background/10 bg-transparent transition-[border-color,background-color] duration-500 group-hover:border-accent group-hover:bg-accent">
                          <ArrowUpRight
                            size={18}
                            strokeWidth={1.25}
                            className="text-background/40 transition-colors duration-500 group-hover:text-foreground"
                          />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      PROJECT VISUAL
                      ================================================= */}
                  <div className="relative min-h-[300px] overflow-hidden border-t border-background/10 md:col-span-8 md:min-h-[520px] md:border-l md:border-t-0">
                    {/* Base image / placeholder surface */}
                    <div className="tivasa-project-image absolute inset-0 bg-surface" />

                    {/* Subtle technical grid */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-30"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, rgba(245,245,242,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,245,242,0.045) 1px, transparent 1px)",
                        backgroundSize: "64px 64px",
                      }}
                    />

                    {/* Large project index */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-[0.04em] top-1/2 -translate-y-1/2 font-display text-[clamp(12rem,24vw,25rem)] font-semibold leading-none tracking-[-0.09em] text-background/[0.035] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-4"
                    >
                      {project.number}
                    </div>

                    {/* Image overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(245,245,242,0.07),transparent_30%),linear-gradient(135deg,rgba(11,31,58,0.1),rgba(8,10,13,0.72))]" />

                    {/* Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="border border-background/10 px-7 py-6 text-center transition-[border-color] duration-700 group-hover:border-accent/40">
                        <div className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                          Project photography
                        </div>

                        <div className="mt-3 font-display text-3xl font-semibold tracking-[-0.025em]">
                          TIVASA / {project.number}
                        </div>
                      </div>
                    </div>

                    {/* Top-left documentation label */}
                    <div className="absolute left-6 top-6 flex items-center gap-3 font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-background/35 md:left-10 md:top-10">
                      <span className="h-px w-5 bg-accent/70 transition-[width] duration-500 group-hover:w-8" />

                      <span>Technical documentation</span>
                    </div>

                    {/* Bottom-right year */}
                    <div className="absolute bottom-6 right-6 font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-background/30 md:bottom-10 md:right-10">
                      2026
                    </div>

                    {/* Bottom red interaction line */}
                    <div className="absolute bottom-0 left-0 h-px w-full bg-background/10">
                      <div className="h-full w-0 bg-accent transition-[width] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
