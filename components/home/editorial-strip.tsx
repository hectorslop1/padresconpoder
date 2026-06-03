"use client";

import Image from "next/image";

import { useLanguage } from "@/contexts/language-context";
import { MotionReveal } from "@/components/home/motion";

export function EditorialStrip() {
  const { t } = useLanguage();
  const e = t.home.editorial;

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[52vh] min-h-[360px] md:h-[60vh] lg:h-[68vh]">
        <Image
          src="/images/6.jpg.webp"
          alt="Padres Con Poder community advocacy walk"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/52 to-black/30" />

        <div className="absolute inset-0 flex items-center">
          <div className="page-shell">
            <MotionReveal className="max-w-2xl space-y-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white/55">
                {e.eyebrow}
              </p>
              <blockquote className="text-[1.55rem] font-semibold leading-[1.25] tracking-[-0.02em] text-white md:text-[2rem] lg:text-[2.4rem]">
                {e.quote}
              </blockquote>
              <p className="text-[0.9rem] font-medium text-white/60">{e.attribution}</p>
            </MotionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
