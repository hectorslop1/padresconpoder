import { HandHelping, Presentation, ShieldCheck } from "lucide-react";

import { Eyebrow } from "@/components/home/eyebrow";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/home/motion";
import { processSteps } from "@/components/home/content";
import { ProcessStepCard } from "@/components/home/process-step-card";
import { SectionShell } from "@/components/home/section-shell";

const icons = [HandHelping, Presentation, ShieldCheck];

export function HowWeHelpSection() {
  return (
    <SectionShell id="how-we-help" tone="muted" className="border-y border-line/70">
      <div className="space-y-12">
        <MotionReveal className="mx-auto max-w-3xl text-center">
          <Eyebrow tone="secondary" className="mx-auto">
            How We Help
          </Eyebrow>
          <h2 className="mt-6 text-balance text-[2.3rem] leading-[1.06] font-semibold tracking-[-0.04em] text-ink md:text-[3.1rem]">
            A clear, supportive approach for complex decisions and inclusive growth.
          </h2>
          <p className="mt-5 text-lg leading-8 text-ink-muted">
            Padres Con Poder combines guidance, training, and ongoing support so
            families and businesses can move forward with more confidence.
          </p>
        </MotionReveal>

        <div className="relative">
          <div className="absolute left-[10%] right-[10%] top-10 hidden h-px bg-gradient-to-r from-brand-primary/15 via-brand-primary/45 to-brand-secondary/20 lg:block" />
          <MotionStagger className="grid gap-6 lg:grid-cols-3">
            {processSteps.map((step, index) => {
              const Icon = icons[index];

              return (
                <MotionStaggerItem key={step.step}>
                  <div className="space-y-5">
                    <div className="flex justify-center lg:justify-start">
                      <div className="rounded-full border border-brand-primary/12 bg-white p-4 text-brand-primary-strong shadow-ambient">
                        <Icon className="size-5" />
                      </div>
                    </div>
                    <ProcessStepCard
                      step={step.step}
                      title={step.title}
                      description={step.description}
                    />
                  </div>
                </MotionStaggerItem>
              );
            })}
          </MotionStagger>
        </div>
      </div>
    </SectionShell>
  );
}
