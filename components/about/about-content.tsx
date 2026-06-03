"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, Compass, Eye, HandHeart, MapPin, ShieldCheck, Target, Users } from "lucide-react";

import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/home/motion";

const whyIcons = [ShieldCheck, Users, Target, MapPin];

export function AboutContent() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line/60 bg-white py-20 md:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(62,109,200,0.06),transparent)]" />
        <div className="page-shell relative z-10 max-w-4xl">
          <MotionReveal className="space-y-6">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">{a.hero.eyebrow}</p>
            <h1 className="text-[2.6rem] font-semibold leading-[1.0] tracking-[-0.04em] text-ink md:text-[3.5rem] lg:text-[4.25rem]">
              {a.hero.headline1}
              <br />
              <span className="text-brand-primary-strong">{a.hero.headline2}</span>
              <br />
              {a.hero.headline3}
            </h1>
            <p className="max-w-2xl text-xl leading-9 text-ink-muted">{a.hero.body}</p>
          </MotionReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-b border-line/60 bg-surface-muted py-20 md:py-28">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <MotionReveal direction="left" className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary-soft">
                  <Target className="size-5 text-brand-primary-strong" />
                </div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-brand-primary-strong">{a.mission.eyebrow}</p>
              </div>
              <h2 className="text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink md:text-[2rem]">{a.mission.subheadline}</h2>
              <p className="text-[1rem] leading-8 text-ink-muted">{a.mission.body}</p>
            </MotionReveal>

            <MotionReveal direction="right" className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-secondary-soft">
                  <Eye className="size-5 text-[#006d40]" />
                </div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#006d40]">{a.vision.eyebrow}</p>
              </div>
              <h2 className="text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink md:text-[2rem]">{a.vision.subheadline}</h2>
              <p className="text-[1rem] leading-8 text-ink-muted">{a.vision.body}</p>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* Editorial */}
      <section className="relative overflow-hidden">
        <div className="relative h-[44vh] min-h-[300px] md:h-[52vh]">
          <Image src="/images/5.jpg.webp" alt="Padres Con Poder members showing pride and positive energy" fill className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="page-shell">
              <MotionReveal className="max-w-lg space-y-3">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/55">{a.editorial.eyebrow}</p>
                <p className="text-[1.5rem] font-semibold leading-[1.3] tracking-[-0.02em] text-white md:text-[1.85rem]">{a.editorial.quote}</p>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-background py-20 md:py-28 lg:py-32">
        <div className="page-shell">
          <MotionReveal className="mb-14">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">{a.approach.eyebrow}</p>
            <h2 className="mt-3 max-w-xl text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink md:text-[2.5rem]">{a.approach.headline}</h2>
          </MotionReveal>
          <MotionStagger className="grid gap-5 md:grid-cols-3">
            {a.approach.steps.map(({ step, title, detail }, i) => {
              const configs = [
                {
                  icon: Compass,
                  gradient: "from-brand-primary-soft/55 to-white",
                  border: "border-brand-primary/20",
                  iconBg: "bg-brand-primary-soft",
                  iconRing: "ring-brand-primary/20",
                  iconColor: "text-brand-primary-strong",
                  stepColor: "text-brand-primary-strong",
                  numColor: "text-brand-primary-strong/[0.07]",
                },
                {
                  icon: BookOpen,
                  gradient: "from-[#f0edff]/70 to-white",
                  border: "border-[#7c3aed]/15",
                  iconBg: "bg-[#f0edff]",
                  iconRing: "ring-[#7c3aed]/15",
                  iconColor: "text-[#7c3aed]",
                  stepColor: "text-[#7c3aed]",
                  numColor: "text-[#7c3aed]/[0.07]",
                },
                {
                  icon: HandHeart,
                  gradient: "from-brand-secondary-soft/70 to-white",
                  border: "border-brand-secondary/25",
                  iconBg: "bg-brand-secondary-soft",
                  iconRing: "ring-brand-secondary/20",
                  iconColor: "text-[#006d40]",
                  stepColor: "text-[#006d40]",
                  numColor: "text-[#006d40]/[0.07]",
                },
              ];
              const cfg = configs[i];
              const Icon = cfg.icon;

              return (
                <MotionStaggerItem key={step}>
                  <div
                    className={`relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border bg-gradient-to-br p-7 shadow-ambient transition-all duration-200 hover:-translate-y-1 hover:shadow-ambient-lg md:p-8 ${cfg.gradient} ${cfg.border}`}
                  >
                    {/* Ghost large step number — decorative */}
                    <span
                      className={`pointer-events-none absolute -right-3 -top-5 select-none text-[7rem] font-bold leading-none ${cfg.numColor}`}
                      aria-hidden="true"
                    >
                      {step}
                    </span>

                    {/* Icon + step badge row */}
                    <div className="relative mb-6 flex items-center justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl ring-1 ${cfg.iconBg} ${cfg.iconRing}`}
                      >
                        <Icon className={`size-5 ${cfg.iconColor}`} />
                      </div>
                      <span
                        className={`text-[0.68rem] font-semibold uppercase tracking-[0.2em] ${cfg.stepColor}`}
                      >
                        {a.approach.stepLabel} {step}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="relative text-[1.4rem] font-semibold tracking-[-0.02em] text-ink">
                      {title}
                    </h3>
                    <p className="relative mt-3 flex-1 text-[0.9rem] leading-7 text-ink-muted">
                      {detail}
                    </p>
                  </div>
                </MotionStaggerItem>
              );
            })}
          </MotionStagger>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-y border-line/60 bg-surface-muted py-20 md:py-28">
        <div className="page-shell">
          <MotionReveal className="mb-14">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">{a.why.eyebrow}</p>
            <h2 className="mt-3 max-w-xl text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink md:text-[2.5rem]">{a.why.headline}</h2>
          </MotionReveal>
          <MotionStagger className="grid gap-5 md:grid-cols-2">
            {a.why.items.map(({ title, detail }, i) => {
              const Icon = whyIcons[i];
              return (
                <MotionStaggerItem key={i}>
                  <div className="flex gap-5 rounded-[1.25rem] border border-line/70 bg-white p-7 shadow-ambient transition-all duration-200 hover:-translate-y-0.5 hover:shadow-ambient-lg md:p-8">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary-soft">
                      <Icon className="size-5 text-brand-primary-strong" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold leading-snug tracking-[-0.01em] text-ink">{title}</h3>
                      <p className="text-[0.88rem] leading-6 text-ink-muted">{detail}</p>
                    </div>
                  </div>
                </MotionStaggerItem>
              );
            })}
          </MotionStagger>
        </div>
      </section>

      {/* IRC Vendor */}
      <section className="bg-brand-primary-strong py-16 md:py-20">
        <div className="page-shell">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.6fr)] lg:gap-16 lg:items-center">
            <MotionReveal direction="left" className="space-y-5">
              <div className="flex items-center gap-3">
                <ShieldCheck className="size-6 text-white/70" />
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/60">{a.irc.eyebrow}</p>
              </div>
              <h2 className="text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white md:text-[2.2rem]">{a.irc.headline}</h2>
              <p className="max-w-xl text-[1rem] leading-8 text-white/70">{a.irc.body}</p>
            </MotionReveal>
            <MotionReveal direction="right">
              <ul className="space-y-3">
                {a.irc.bullets.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[0.95rem] text-white/75">
                    <CheckCircle2 className="size-4 shrink-0 text-brand-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-20 md:py-24">
        <div className="page-shell">
          <MotionReveal className="mx-auto max-w-xl space-y-6 text-center">
            <h2 className="text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink md:text-[2.4rem]">{a.cta.headline}</h2>
            <p className="text-lg leading-8 text-ink-muted">{a.cta.body}</p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Button asChild size="lg" className="rounded-full shadow-ambient-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-20px_rgba(30,84,174,0.5)] active:translate-y-0 active:scale-[0.98]">
                <Link href="/get-support">{a.cta.primary}<ArrowRight className="ml-2 size-4" /></Link>
              </Button>
            </div>
          </MotionReveal>
        </div>
      </section>
    </>
  );
}
