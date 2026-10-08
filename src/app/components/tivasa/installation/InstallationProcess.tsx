"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { installationSteps } from "./installationData";

export default function InstallationProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const totalSteps = installationSteps.length;
  const currentStep = installationSteps[activeStep];

  const goToPrevious = () => {
    setActiveStep((current) => Math.max(0, current - 1));
  };

  const goToNext = () => {
    setActiveStep((current) => Math.min(totalSteps - 1, current + 1));
  };

  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="border-b border-background/10 bg-surface text-background lg:min-h-[calc(100svh-6rem)]"
    >
      <div className="mx-auto max-w-[1800px]">
        <div className="grid lg:min-h-[calc(100svh-6rem)] lg:grid-cols-12">
          {/* =====================================================
              LEFT SECTION MARKER
              ===================================================== */}
          <div className="border-b border-background/15 p-6 lg:col-span-3 lg:border-b-0 lg:border-r lg:p-8">
            <div className="relative pl-5">
              <span className="absolute bottom-0 left-0 top-0 w-px bg-accent/70" />

              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />

                <span className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  Execution Process
                </span>
              </div>

              <p className="mt-5 max-w-xs font-sans text-sm leading-6 text-background/55">
                Eight connected stages, from initial assessment to final
                handover.
              </p>
            </div>
          </div>

          {/* =====================================================
              MAIN CONTENT
              ===================================================== */}
          <div className="flex min-w-0 flex-col lg:col-span-9">
            {/* Compact heading */}
            <div className="px-6 pb-7 pt-10 md:px-10 md:pt-12 lg:px-12 lg:pb-6 lg:pt-10">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                01 — 08 / Methodology
              </span>

              <h2
                id="process-title"
                className="mt-4 font-display text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[0.9] tracking-[-0.06em]"
              >
                From plan
                <br />
                <span className="text-background/40">to performance.</span>
              </h2>
            </div>

            {/* =====================================================
                INTERACTIVE TIMELINE
                ===================================================== */}
            <div className="border-y border-background/15 px-6 py-5 md:px-10 lg:px-12">
              <div
                role="group"
                aria-label="Installation process stages"
                className="grid grid-cols-8"
              >
                {installationSteps.map((step, index) => {
                  const isActive = index === activeStep;
                  const isCompleted = index < activeStep;

                  return (
                    <button
                      key={step.number}
                      type="button"
                      onClick={() => setActiveStep(index)}
                      aria-label={`Stage ${step.number}: ${step.title}`}
                      aria-pressed={isActive}
                      aria-controls="installation-stage-panel"
                      className="group relative flex min-w-0 flex-col items-center gap-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                      {/* Stage number */}
                      <span
                        className={`font-display text-xs font-semibold tracking-[-0.03em] transition-colors duration-300 motion-reduce:transition-none md:text-base ${
                          isActive
                            ? "text-background"
                            : isCompleted
                              ? "text-background/65"
                              : "text-background/35 group-hover:text-background/80"
                        }`}
                      >
                        {step.number}
                      </span>

                      {/* Timeline segment */}
                      <span
                        className={`relative h-px w-full transition-colors duration-500 motion-reduce:transition-none ${
                          isActive || isCompleted
                            ? "bg-accent"
                            : "bg-background/20 group-hover:bg-background/45"
                        }`}
                      >
                        {/* Animated timeline node */}
                        <span
                          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-[width,height,background-color,box-shadow] duration-500 ease-out motion-reduce:transition-none ${
                            isActive
                              ? "h-3 w-3 bg-accent ring-4 ring-accent/20"
                              : isCompleted
                                ? "h-2 w-2 bg-accent"
                                : "h-1.5 w-1.5 bg-background/50 group-hover:bg-background"
                          }`}
                        />
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-3 flex items-center justify-between gap-4 font-sans text-[9px] font-medium uppercase tracking-[0.16em] text-background/40">
                <span>Assessment</span>
                <span>Handover</span>
              </div>
            </div>

            {/* =====================================================
                ACTIVE STAGE PANEL
                STABLE LAYOUT + ANIMATED CONTENT
                ===================================================== */}
            <div
              id="installation-stage-panel"
              role="region"
              aria-label="Selected installation stage"
              className="relative flex min-h-[330px] flex-1 flex-col border-b border-background/15 bg-foreground md:min-h-[300px] lg:min-h-[310px]"
            >
              {/* Red corner marker */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 h-10 w-10 border-l-2 border-t-2 border-accent"
              />

              <div className="grid flex-1 gap-6 px-6 py-8 md:grid-cols-12 md:gap-8 md:px-10 md:py-9 lg:px-12">
                {/* Stage number */}
                <div className="flex flex-col md:col-span-2">
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-background/45">
                    Stage
                  </span>

                  <span
                    key={`number-${activeStep}`}
                    className="tivasa-process-number mt-2 font-display text-[clamp(3.5rem,5vw,5rem)] font-semibold leading-none tracking-[-0.07em] text-accent"
                  >
                    {currentStep.number}
                  </span>
                </div>

                {/* Stage content */}
                <div className="flex min-w-0 flex-col md:col-span-10">
                  {/* Title — consistent top position */}
                  <div className="flex items-start justify-between gap-5">
                    <h3
                      key={`title-${activeStep}`}
                      className="tivasa-process-title max-w-2xl font-display text-[clamp(2rem,3.3vw,3.5rem)] font-semibold leading-[1.03] tracking-[-0.05em] text-background"
                    >
                      {currentStep.title}
                    </h3>

                    <ArrowUpRight
                      size={21}
                      strokeWidth={1.2}
                      className="mt-1 hidden shrink-0 text-accent md:block"
                    />
                  </div>

                  {/* Description — reserved space */}
                  <div className="mt-4 min-h-[80px] md:min-h-[90px]">
                    <p
                      key={`description-${activeStep}`}
                      className="tivasa-process-description max-w-xl font-sans text-sm leading-6 text-background/70 md:text-base md:leading-7"
                    >
                      {currentStep.description}
                    </p>
                  </div>

                  {/* Technical detail — anchored footer */}
                  <div className="mt-auto flex items-center gap-3 border-t border-background/15 pt-4">
                    <span className="h-1.5 w-1.5 shrink-0 bg-accent" />

                    <span
                      key={`detail-${activeStep}`}
                      className="tivasa-process-detail font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-background/45"
                    >
                      {currentStep.detail}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================================
                NAVIGATION CONTROLS
                ===================================================== */}
            <div className="flex items-center justify-between gap-4 px-6 py-4 md:px-10 lg:px-12">
              {/* Stage counter */}
              <div className="flex items-center gap-3">
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-background/45">
                  Stage
                </span>

                <span className="font-display text-lg font-semibold tracking-[-0.04em] text-background">
                  {currentStep.number}
                </span>

                <span className="font-sans text-xs text-background/35">
                  / {String(totalSteps).padStart(2, "0")}
                </span>
              </div>

              {/* Previous / Next */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goToPrevious}
                  disabled={activeStep === 0}
                  aria-label="Previous installation stage"
                  className="group flex h-10 w-10 items-center justify-center border border-background/25 text-background transition-[background-color,border-color] duration-300 hover:border-accent hover:bg-accent disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:border-background/25 disabled:hover:bg-transparent"
                >
                  <ArrowLeft
                    size={17}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:-translate-x-0.5 group-disabled:translate-x-0"
                  />
                </button>

                <button
                  type="button"
                  onClick={goToNext}
                  disabled={activeStep === totalSteps - 1}
                  aria-label="Next installation stage"
                  className="group flex h-10 w-10 items-center justify-center border border-background/25 text-background transition-[background-color,border-color] duration-300 hover:border-accent hover:bg-accent disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:border-background/25 disabled:hover:bg-transparent"
                >
                  <ArrowRight
                    size={17}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-disabled:translate-x-0"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
