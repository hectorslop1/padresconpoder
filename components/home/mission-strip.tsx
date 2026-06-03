"use client";

import { useLanguage } from "@/contexts/language-context";
import { MotionReveal } from "@/components/home/motion";

export function MissionStrip() {
  const { t } = useLanguage();
  const m = t.home.mission;

  return (
    <section className="border-b border-line/60 bg-brand-primary-strong py-10 md:py-12">
      <div className="page-shell">
        <MotionReveal>
          <p className="max-w-4xl text-[1.1rem] leading-8 text-white/80 md:text-[1.2rem] md:leading-9">
            <span className="font-semibold text-white">{m.label}&nbsp;</span>
            {m.body}
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
