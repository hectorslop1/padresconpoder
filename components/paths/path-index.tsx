"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/home/motion";
import { paths, type PathKey } from "@/lib/paths";

/**
 * The landing page of a visitor path: a short hero and the ordered list of the
 * reads on that path. Shared by /families and /businesses.
 *
 * Takes the path *key* rather than the config object: the config holds selector
 * functions, which cannot cross the server/client boundary as props.
 */
export function PathIndex({
  pathKey,
  image,
  imageAlt,
}: {
  pathKey: PathKey;
  image: string;
  imageAlt: string;
}) {
  const { t } = useLanguage();
  const path = paths[pathKey];
  const copy = t[pathKey];
  const firstStep = path.steps[0];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line/60 bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_0%,rgba(80,216,144,0.08),transparent)]"
        />
        <div className="page-shell relative z-10 grid items-center gap-12 py-20 md:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-16">
          <MotionReveal className="space-y-7">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
              {copy.hero.eyebrow}
            </p>
            <h1 className="text-[2.5rem] font-semibold leading-[1.0] tracking-[-0.04em] text-ink md:text-[3.25rem] lg:text-[3.6rem]">
              {copy.hero.headline1}
              <br />
              <span className="text-brand-primary-strong">{copy.hero.headline2}</span>
              <br />
              {copy.hero.headline3}
            </h1>
            <p className="max-w-lg text-lg leading-8 text-ink-muted">{copy.hero.body}</p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full shadow-ambient-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-20px_rgba(30,84,174,0.5)] active:translate-y-0 active:scale-[0.98]"
              >
                <Link href={firstStep.href}>
                  {copy.hero.ctaPrimary}
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-primary-soft/50 active:translate-y-0 active:scale-[0.98]"
              >
                <Link href="/contact">{copy.hero.ctaSecondary}</Link>
              </Button>
            </div>
          </MotionReveal>

          <MotionReveal direction="right">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-ambient-lg">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* The reads on this path */}
      <section className="bg-background py-20 md:py-24">
        <div className="page-shell">
          <MotionReveal className="mb-12 max-w-2xl">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
              {copy.index.eyebrow}
            </p>
            <h2 className="mt-3 text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink md:text-[2.4rem]">
              {copy.index.headline}
            </h2>
            <p className="mt-4 text-[1rem] leading-7 text-ink-muted">{copy.index.body}</p>
          </MotionReveal>

          <MotionStagger className="space-y-3">
            {path.steps.map((step, i) => {
              const content = step.select(t);
              const isLast = i === path.steps.length - 1;

              return (
                <MotionStaggerItem key={step.href}>
                  <Link
                    href={step.href}
                    className={`group flex items-center gap-5 rounded-[1.25rem] border p-5 shadow-ambient transition-all duration-200 hover:-translate-y-0.5 hover:shadow-ambient-lg md:gap-6 md:p-6 ${
                      isLast
                        ? "border-brand-secondary/30 bg-gradient-to-br from-brand-secondary-soft/60 to-white"
                        : "border-line/70 bg-white"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[0.9rem] font-semibold ${
                        isLast
                          ? "bg-[#006d40] text-white"
                          : "bg-brand-primary-soft text-brand-primary-strong"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-[1.05rem] font-semibold leading-snug tracking-[-0.01em] text-ink md:text-[1.15rem]">
                        {content.navLabel}
                      </h3>
                      <p className="mt-1.5 text-[0.9rem] leading-6 text-ink-muted">
                        {content.summary}
                      </p>
                    </div>
                    <ArrowRight className="size-5 shrink-0 text-ink-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-brand-primary-strong" />
                  </Link>
                </MotionStaggerItem>
              );
            })}
          </MotionStagger>
        </div>
      </section>
    </>
  );
}
