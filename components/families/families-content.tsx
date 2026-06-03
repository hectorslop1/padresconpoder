"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, HandHeart, HeartHandshake, ShieldCheck } from "lucide-react";

import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/home/motion";

const icons = [ShieldCheck, BookOpen, HandHeart];
const tones = ["primary", "secondary", "primary"] as const;

export function FamiliesContent() {
  const { t } = useLanguage();
  const f = t.families;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line/60 bg-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_0%,rgba(80,216,144,0.08),transparent)]" />
        <div className="page-shell relative z-10 grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)] lg:gap-16">
          <MotionReveal className="space-y-7">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">{f.hero.eyebrow}</p>
            <h1 className="text-[2.6rem] font-semibold leading-[0.98] tracking-[-0.04em] text-ink md:text-[3.5rem] lg:text-[4rem]">
              {f.hero.headline1}
              <br />
              <span className="text-brand-primary-strong">{f.hero.headline2}</span>
              <br />
              {f.hero.headline3}
            </h1>
            <p className="max-w-lg text-lg leading-8 text-ink-muted">{f.hero.body}</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full shadow-ambient-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-20px_rgba(30,84,174,0.5)] active:translate-y-0 active:scale-[0.98]">
                <Link href="/get-support">{f.hero.ctaPrimary}<ArrowRight className="ml-2 size-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-primary-soft/50 active:translate-y-0 active:scale-[0.98]">
                <Link href="/about">{f.hero.ctaSecondary}</Link>
              </Button>
            </div>
          </MotionReveal>

          <MotionReveal direction="right">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-ambient-lg">
              <Image src="/images/3.jpg.webp" alt="Padres Con Poder families celebrating empowerment" fill className="object-cover object-top" priority sizes="(max-width: 1024px) 100vw, 42vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* SDP explainer */}
      <section className="border-b border-line/60 bg-surface-muted py-16 md:py-20">
        <div className="page-shell">
          <MotionReveal>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:items-center">
              <div className="space-y-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">{f.sdp.eyebrow}</p>
                <h2 className="text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink md:text-[2.2rem]">{f.sdp.headline}</h2>
              </div>
              <p className="text-[1rem] leading-8 text-ink-muted">{f.sdp.body}</p>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-background py-20 md:py-28 lg:py-32">
        <div className="page-shell">
          <MotionReveal className="mb-14">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">{f.services.eyebrow}</p>
            <h2 className="mt-3 max-w-xl text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink md:text-[2.5rem]">{f.services.headline}</h2>
          </MotionReveal>

          <MotionStagger className="grid gap-5 md:grid-cols-3">
            {f.services.items.map((svc, i) => {
              const Icon = icons[i];
              const tone = tones[i];
              return (
                <MotionStaggerItem key={i}>
                  <div className="flex h-full flex-col rounded-[1.25rem] border border-line/70 bg-white p-7 shadow-ambient transition-all duration-200 hover:-translate-y-0.5 hover:shadow-ambient-lg md:p-8">
                    <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${tone === "primary" ? "bg-brand-primary-soft" : "bg-brand-secondary-soft"}`}>
                      <Icon className={`size-5 ${tone === "primary" ? "text-brand-primary-strong" : "text-[#006d40]"}`} />
                    </div>
                    <h3 className="mb-3 text-[1.15rem] font-semibold leading-snug tracking-[-0.01em] text-ink">{svc.title}</h3>
                    <p className="mb-5 text-[0.9rem] leading-7 text-ink-muted">{svc.description}</p>
                    <ul className="mt-auto space-y-2.5">
                      {svc.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2.5 text-[0.85rem] text-ink-muted">
                          <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${tone === "primary" ? "bg-brand-primary" : "bg-brand-secondary"}`} />
                          {b}
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

      {/* Editorial */}
      <section className="relative overflow-hidden">
        <div className="relative h-[40vh] min-h-[280px] md:h-[48vh]">
          <Image src="/images/4.jpg.webp" alt="Young individuals with disabilities empowered through Padres Con Poder" fill className="object-cover object-top" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-strong/80 via-brand-primary-strong/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="page-shell">
              <MotionReveal className="max-w-lg space-y-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white/60">{f.editorial.eyebrow}</p>
                <p className="text-[1.45rem] font-semibold leading-[1.25] tracking-[-0.02em] text-white md:text-[1.8rem]">{f.editorial.quote}</p>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line/60 bg-white py-20 md:py-24">
        <div className="page-shell">
          <MotionReveal className="mx-auto max-w-2xl space-y-6 text-center">
            <HeartHandshake className="mx-auto size-10 text-brand-primary" />
            <h2 className="text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink md:text-[2.5rem]">{f.cta.headline}</h2>
            <p className="text-lg leading-8 text-ink-muted">{f.cta.body}</p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Button asChild size="lg" className="rounded-full shadow-ambient-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-20px_rgba(30,84,174,0.5)] active:translate-y-0 active:scale-[0.98]">
                <Link href="/get-support">{f.cta.primary}<ArrowRight className="ml-2 size-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-primary-soft/50 active:translate-y-0 active:scale-[0.98]">
                <a href="tel:+19517370951">{f.cta.secondary}</a>
              </Button>
            </div>
          </MotionReveal>
        </div>
      </section>
    </>
  );
}
