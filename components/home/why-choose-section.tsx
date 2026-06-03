import { Building2, Compass, ShieldCheck, UsersRound } from "lucide-react";

import { differentiators } from "@/components/home/content";
import { DifferentiatorCard } from "@/components/home/differentiator-card";
import { Eyebrow } from "@/components/home/eyebrow";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/home/motion";
import { SectionShell } from "@/components/home/section-shell";

const icons = [Building2, UsersRound, ShieldCheck, Compass];

export function WhyChooseSection() {
  return (
    <SectionShell id="why-choose-us" tone="muted">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-14">
        <MotionReveal direction="left" className="space-y-6">
          <Eyebrow>Why Choose Padres Con Poder</Eyebrow>
          <h2 className="max-w-lg text-balance text-[2.25rem] leading-[1.06] font-semibold tracking-[-0.04em] text-ink md:text-[3.15rem]">
            Trusted guidance that understands both family support and organizational change.
          </h2>
          <p className="max-w-xl text-lg leading-8 text-ink-muted">
            Padres Con Poder brings together practical knowledge of the
            Self-Determination Program, hands-on support for families, and inclusive
            consulting for businesses serving neurodiverse communities.
          </p>
        </MotionReveal>

        <MotionStagger className="grid gap-6 md:grid-cols-2">
          {differentiators.map((item, index) => {
            const Icon = icons[index];

            return (
              <MotionStaggerItem key={item.title}>
                <div className="space-y-4">
                  <div className="inline-flex rounded-full border border-brand-primary/15 bg-white p-3 text-brand-primary-strong shadow-ambient">
                    <Icon className="size-5" />
                  </div>
                  <DifferentiatorCard title={item.title} description={item.description} />
                </div>
              </MotionStaggerItem>
            );
          })}
        </MotionStagger>
      </div>
    </SectionShell>
  );
}
