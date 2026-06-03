"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BarChart3, BookUser, Briefcase, Check, Rocket } from "lucide-react";

import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/home/motion";

const serviceIcons = [Briefcase, BookUser, BarChart3];

export function BusinessesContent() {
  const { t } = useLanguage();
  const b = t.businesses;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line/60 bg-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_0%,rgba(62,109,200,0.07),transparent)]" />
        <div className="page-shell relative z-10 grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)] lg:gap-16">
          <MotionReveal className="space-y-7">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">{b.hero.eyebrow}</p>
            <h1 className="text-[2.6rem] font-semibold leading-[0.98] tracking-[-0.04em] text-ink md:text-[3.5rem] lg:text-[4rem]">
              {b.hero.headline1}
              <br />
              {b.hero.headline2}<span className="text-brand-primary-strong">{b.hero.headline2accent}</span>
              <br />
              {b.hero.headline3}
            </h1>
            <p className="max-w-lg text-lg leading-8 text-ink-muted">{b.hero.body}</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full shadow-ambient-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-20px_rgba(30,84,174,0.5)] active:translate-y-0 active:scale-[0.98]">
                <Link href="/get-support">{b.hero.ctaPrimary}<ArrowRight className="ml-2 size-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-primary-soft/50 active:translate-y-0 active:scale-[0.98]">
                <Link href="/about">{b.hero.ctaSecondary}</Link>
              </Button>
            </div>
          </MotionReveal>

          <MotionReveal direction="right">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-ambient-lg">
              <Image src="/images/2.jpg.webp" alt="Padres Con Poder team members collaborating at an event" fill className="object-cover object-center" priority sizes="(max-width: 1024px) 100vw, 42vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Strip */}
      <section className="border-b border-line/60 bg-brand-primary-strong py-14 md:py-16">
        <div className="page-shell">
          <MotionReveal>
            <p className="max-w-4xl text-[1.05rem] leading-8 text-white/80 md:text-[1.15rem] md:leading-9">
              <span className="font-semibold text-white">{b.strip.bold}</span>
              {b.strip.body}
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-background py-20 md:py-28 lg:py-32">
        <div className="page-shell">
          <MotionReveal className="mb-14">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">{b.services.eyebrow}</p>
            <h2 className="mt-3 max-w-xl text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink md:text-[2.5rem]">{b.services.headline}</h2>
          </MotionReveal>

          <MotionStagger className="grid gap-5 md:grid-cols-3">
            {b.services.items.map((svc, i) => {
              const Icon = serviceIcons[i];
              return (
                <MotionStaggerItem key={svc.title}>
                  <div className="flex h-full flex-col rounded-[1.25rem] border border-line/70 bg-white p-7 shadow-ambient transition-all duration-200 hover:-translate-y-0.5 hover:shadow-ambient-lg md:p-8">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary-soft">
                      <Icon className="size-5 text-brand-primary-strong" />
                    </div>
                    <h3 className="mb-3 text-[1.15rem] font-semibold leading-snug tracking-[-0.01em] text-ink">{svc.title}</h3>
                    <p className="mb-5 text-[0.9rem] leading-7 text-ink-muted">{svc.description}</p>
                    <ul className="mt-auto space-y-2.5">
                      {svc.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5 text-[0.85rem] text-ink-muted">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </MotionStaggerItem>
              );
            })}
          </MotionStagger>
        </div>
      </section>

      {/* Outcomes */}
      <section className="border-y border-line/60 bg-surface-muted py-20 md:py-24">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 lg:items-center">
            <MotionReveal direction="left" className="space-y-4">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">{b.outcomes.eyebrow}</p>
              <h2 className="text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink md:text-[2.2rem]">{b.outcomes.headline}</h2>
              <p className="text-[0.95rem] leading-7 text-ink-muted">{b.outcomes.body}</p>
            </MotionReveal>
            <MotionStagger className="grid grid-cols-2 gap-3">
              {b.outcomes.items.map((item, i) => {
                // Alternate between blue and green accent
                const isGreen = i % 2 !== 0;
                return (
                  <MotionStaggerItem key={item}>
                    <div
                      className={`flex h-full items-center gap-3.5 rounded-2xl border p-5 shadow-ambient transition-all duration-200 hover:-translate-y-0.5 hover:shadow-ambient-lg ${
                        isGreen
                          ? "border-brand-secondary/25 bg-gradient-to-br from-brand-secondary-soft/60 to-white"
                          : "border-brand-primary/15 bg-gradient-to-br from-brand-primary-soft/40 to-white"
                      }`}
                    >
                      {/* Check circle */}
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                          isGreen
                            ? "bg-brand-secondary/25 ring-1 ring-brand-secondary/30"
                            : "bg-brand-primary-soft ring-1 ring-brand-primary/20"
                        }`}
                      >
                        <Check
                          className={`size-[0.9rem] ${isGreen ? "text-[#006d40]" : "text-brand-primary-strong"}`}
                          strokeWidth={2.8}
                        />
                      </div>
                      {/* Label */}
                      <span className="text-[0.88rem] font-semibold leading-snug text-ink">
                        {item}
                      </span>
                    </div>
                  </MotionStaggerItem>
                );
              })}
            </MotionStagger>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-20 md:py-24">
        <div className="page-shell">
          <MotionReveal className="mx-auto max-w-2xl space-y-6 text-center">
            <Rocket className="mx-auto size-10 text-brand-primary" />
            <h2 className="text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink md:text-[2.5rem]">{b.cta.headline}</h2>
            <p className="text-lg leading-8 text-ink-muted">{b.cta.body}</p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Button asChild size="lg" className="rounded-full shadow-ambient-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-20px_rgba(30,84,174,0.5)] active:translate-y-0 active:scale-[0.98]">
                <Link href="/get-support">{b.cta.primary}<ArrowRight className="ml-2 size-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-primary-soft/50 active:translate-y-0 active:scale-[0.98]">
                <a href="mailto:info@ivestorres.org">{b.cta.secondary}</a>
              </Button>
            </div>
          </MotionReveal>
        </div>
      </section>
    </>
  );
}
