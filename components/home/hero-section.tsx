"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";

const ease = [0.16, 1, 0.3, 1] as const;

export function HeroSection() {
  const reduced = Boolean(useReducedMotion());
  const { t } = useLanguage();
  const h = t.home.hero;

  return (
    <section className="relative overflow-hidden border-b border-line/60 bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_0%,rgba(62,109,200,0.06),transparent)]"
      />

      <div className="page-shell relative z-10 grid min-h-[calc(100svh-4.5rem)] items-center gap-12 py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)] lg:gap-16 lg:py-28">
        {/* Left */}
        <motion.div
          className="space-y-8"
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0.2 : 0.9, ease }}
        >
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="size-4 text-brand-secondary" />
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink-muted">
              {h.eyebrow}
            </span>
          </div>

          <h1 className="text-[2.8rem] font-semibold leading-[0.96] tracking-[-0.04em] text-ink md:text-[3.75rem] lg:text-[4.5rem]">
            <span className="text-brand-primary-strong">{h.headline1}</span>
            <br />
            {h.headline2}
            <br />
            {h.headline3}
          </h1>

          <p className="max-w-lg text-lg leading-8 text-ink-muted">{h.body}</p>

          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full shadow-ambient-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-20px_rgba(30,84,174,0.5)] active:translate-y-0 active:scale-[0.98]"
            >
              <Link href="/families">
                {h.ctaFamilies}
                <ArrowRight className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-primary-soft/50 active:translate-y-0 active:scale-[0.98]"
            >
              <Link href="/businesses">{h.ctaBusinesses}</Link>
            </Button>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          className="relative"
          initial={reduced ? { opacity: 0 } : { opacity: 0, x: 28, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: reduced ? 0.2 : 1.0, ease, delay: 0.15 }}
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-ambient-lg lg:aspect-[3/4]">
            <Image
              src="/images/1.jpg.webp"
              alt="Padres Con Poder community members at an outdoor gathering"
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-4 -left-4 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/96 px-5 py-4 shadow-ambient-lg md:-left-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-primary-soft">
              <ShieldCheck className="size-5 text-brand-primary-strong" />
            </div>
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-brand-primary-strong">
                {h.badgeTitle}
              </p>
              <p className="mt-0.5 text-[0.82rem] text-ink-muted">{h.badgeSub}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
