"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, CircleDashed, Sparkles } from "lucide-react";

import { AmbientShapeLayer } from "@/components/home/ambient-shape-layer";
import { heroContent } from "@/components/home/content";
import { EditorialCard } from "@/components/home/editorial-card";
import { Eyebrow } from "@/components/home/eyebrow";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/home/motion";
import { PrimaryCtaGroup } from "@/components/home/primary-cta-group";
import { TrustChip } from "@/components/home/trust-chip";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const reducedMotion = Boolean(useReducedMotion());

  return (
    <section className="relative overflow-hidden border-b border-line/70 bg-background">
      <AmbientShapeLayer
        shapes={[
          {
            className:
              "absolute -left-16 top-16 h-56 w-56 rounded-full bg-brand-primary-soft/70 blur-3xl",
            xRange: [0, -24],
            yRange: [0, 50],
          },
          {
            className:
              "absolute right-[-4rem] top-10 h-72 w-72 rounded-full bg-brand-secondary/20 blur-3xl",
            xRange: [0, 18],
            yRange: [0, -40],
          },
          {
            className:
              "absolute bottom-[-6rem] left-[35%] h-64 w-64 rounded-full bg-brand-accent/16 blur-3xl",
            yRange: [0, 30],
          },
        ]}
      />

      <div className="page-shell relative z-10 grid min-h-[calc(100vh-5rem)] items-center gap-16 py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:py-24">
        <MotionStagger className="relative space-y-8">
          <MotionStaggerItem>
            <Eyebrow>{heroContent.eyebrow}</Eyebrow>
          </MotionStaggerItem>

          <div className="space-y-6">
            <MotionStaggerItem>
              <h1 className="max-w-4xl text-balance text-[3rem] leading-[0.98] font-semibold tracking-[-0.05em] text-ink md:text-[4.4rem] lg:text-[5.5rem]">
                {heroContent.title[0]}
                <br />
                <span className="text-brand-primary-strong">{heroContent.title[1]}</span>
              </h1>
            </MotionStaggerItem>
            <MotionStaggerItem>
              <p className="text-xl leading-8 font-medium tracking-[-0.02em] text-brand-primary-strong md:text-2xl">
                {heroContent.accent}
              </p>
            </MotionStaggerItem>
            <MotionStaggerItem>
              <p className="max-w-2xl text-lg leading-8 text-ink-muted md:text-xl">
                {heroContent.description}
              </p>
            </MotionStaggerItem>
          </div>

          <MotionStaggerItem>
            <PrimaryCtaGroup />
          </MotionStaggerItem>

          <MotionStaggerItem>
            <div className="flex flex-wrap gap-3">
              {heroContent.trustChips.map((chip) => (
                <TrustChip key={chip} label={chip} />
              ))}
            </div>
          </MotionStaggerItem>
        </MotionStagger>

        <div className="relative isolate min-h-[32rem] lg:min-h-[42rem]">
          <motion.div
            aria-hidden="true"
            className="editorial-ring absolute left-6 top-0 h-48 w-48 rounded-full border border-white/50 shadow-ambient md:h-56 md:w-56"
            animate={reducedMotion ? undefined : { y: [0, -12, 0], rotate: [0, 4, 0] }}
            transition={reducedMotion ? undefined : { duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="noise-overlay absolute right-0 top-10 w-full max-w-[26rem] rounded-[2.25rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(233,255,243,0.76))] p-6 shadow-ambient-lg sm:p-8"
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 36, scale: 0.96 }}
            animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: reducedMotion ? 0.25 : 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            whileHover={reducedMotion ? undefined : { y: -6 }}
          >
            <div className="accent-grid absolute inset-4 rounded-[1.75rem] opacity-35" />
            <div className="relative space-y-8">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-brand-primary/15 bg-white/80 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-brand-primary-strong">
                    <Sparkles className="size-3.5" />
                    Structured support
                  </span>
                  <p className="max-w-xs text-[1.7rem] leading-[1.05] font-semibold tracking-[-0.04em] text-ink">
                    Support for families. Strategy for inclusive businesses.
                  </p>
                </div>
                <div className="rounded-full border border-brand-primary/15 bg-white/85 p-3 shadow-ambient">
                  <CircleDashed className="size-6 text-brand-primary-strong" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {heroContent.cards.slice(0, 2).map((card) => (
                  <EditorialCard
                    key={card.title}
                    title={card.title}
                    description={card.body}
                    className="bg-white/86 shadow-none"
                  />
                ))}
              </div>

              <div className="rounded-[1.75rem] bg-brand-primary-strong p-6 text-white shadow-[0_28px_70px_-34px_rgba(30,84,174,0.8)] md:p-8">
                <p className="text-xl font-semibold tracking-[-0.02em]">
                  {heroContent.cards[2].title}
                </p>
                <p className="mt-3 text-[0.98rem] leading-7 text-white/82">
                  {heroContent.cards[2].body}
                </p>
                <div className="mt-6 flex items-center justify-between text-sm text-white/78">
                  <span>Official support areas</span>
                  <ArrowRight className="size-4" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-6 left-0 flex items-center gap-4 rounded-[2rem] border border-white/60 bg-white/90 p-5 shadow-ambient md:bottom-10 md:p-6"
            initial={reducedMotion ? { opacity: 0 } : { opacity: 0, x: -30, y: 24 }}
            animate={reducedMotion ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 }}
            transition={{ duration: reducedMotion ? 0.25 : 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            whileHover={reducedMotion ? undefined : { y: -4, rotate: -1 }}
          >
            <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-brand-primary-soft p-2 shadow-inner shadow-brand-primary/10">
              <Image
                src="/brand/padres-con-poder-logo.png"
                alt=""
                aria-hidden="true"
                width={72}
                height={72}
                className="h-16 w-16 object-contain"
              />
            </div>
            <div className="max-w-[15rem]">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-primary-strong">
                Padres Con Poder
              </p>
              <p className="mt-1 text-sm leading-6 text-ink-muted">
                Empowering individuals with disabilities and helping businesses achieve
                inclusive excellence.
              </p>
            </div>
          </motion.div>

          <MotionReveal
            direction="right"
            delay={0.55}
            className="absolute right-6 bottom-0 hidden max-w-[12rem] rounded-[1.5rem] border border-brand-primary/15 bg-white/86 p-5 text-sm leading-6 text-ink-muted shadow-ambient md:block"
          >
            Side-by-side support for service planning, advocacy, and inclusive workplace
            development.
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
