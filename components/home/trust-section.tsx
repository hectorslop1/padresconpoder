"use client";

import { Building2, HandHeart, MapPin, Users } from "lucide-react";

import { useLanguage } from "@/contexts/language-context";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/home/motion";

const icons = [Building2, Users, HandHeart, MapPin];

export function TrustSection() {
  const { t } = useLanguage();
  const tr = t.home.trust;

  return (
    <section className="border-y border-line/60 bg-surface-muted py-20 md:py-28">
      <div className="page-shell">
        <MotionReveal className="mb-14">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
            {tr.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink md:text-[2.5rem]">
            {tr.headline}
          </h2>
        </MotionReveal>

        <MotionStagger className="grid gap-px overflow-hidden rounded-2xl border border-line/60 bg-line/60 md:grid-cols-2 lg:grid-cols-4">
          {tr.pillars.map(({ label, detail }, i) => {
            const Icon = icons[i];
            return (
              <MotionStaggerItem key={label}>
                <div className="flex h-full flex-col gap-5 bg-white p-7 transition-colors duration-200 hover:bg-brand-primary-soft/10 md:p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary-soft transition-colors duration-200">
                    <Icon className="size-5 text-brand-primary-strong" />
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold leading-snug tracking-[-0.01em] text-ink">
                      {label}
                    </p>
                    <p className="text-[0.88rem] leading-6 text-ink-muted">{detail}</p>
                  </div>
                </div>
              </MotionStaggerItem>
            );
          })}
        </MotionStagger>
      </div>
    </section>
  );
}
