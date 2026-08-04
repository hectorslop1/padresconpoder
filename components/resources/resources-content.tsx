"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Building2, Globe, MapPin, MessageCircle } from "lucide-react";

import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/home/motion";
import { externalResources, featureFlags } from "@/lib/site";

export function ResourcesContent() {
  const { t } = useLanguage();
  const r = t.resources;

  const items = [
    { key: "dds", icon: Building2, href: externalResources.dds, content: r.items.dds },
    {
      key: "regionalCenterLocator",
      icon: MapPin,
      href: externalResources.regionalCenterLocator,
      content: r.items.regionalCenterLocator,
    },
    // The Ives Torres Foundation URLs were placeholders in the source document.
    // They stay hidden until confirmed rather than shipping dead links.
    ...(featureFlags.showIvesTorresResources
      ? [
          {
            key: "ivesTorresWebsite",
            icon: Globe,
            href: externalResources.ivesTorresWebsite,
            content: r.items.ivesTorresWebsite,
          },
          {
            key: "ivesTorresFacebook",
            icon: MessageCircle,
            href: externalResources.ivesTorresFacebook,
            content: r.items.ivesTorresFacebook,
          },
        ]
      : []),
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line/60 bg-white py-20 md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(62,109,200,0.06),transparent)]"
        />
        <div className="page-shell relative max-w-3xl">
          <MotionReveal className="space-y-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
              {r.hero.eyebrow}
            </p>
            <h1 className="text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.04em] text-ink md:text-[3.25rem]">
              {r.hero.headline}
            </h1>
            <p className="max-w-xl text-xl leading-8 text-ink-muted">{r.hero.body}</p>
          </MotionReveal>
        </div>
      </section>

      {/* Links */}
      <section className="bg-background py-16 md:py-20">
        <div className="page-shell">
          <MotionStagger className="grid gap-4 lg:grid-cols-2">
            {items.map(({ key, icon: Icon, href, content }) => (
              <MotionStaggerItem key={key}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full gap-5 rounded-[1.25rem] border border-line/70 bg-white p-6 shadow-ambient transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-primary/25 hover:shadow-ambient-lg md:p-7"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary-soft">
                    <Icon className="size-5 text-brand-primary-strong" />
                  </div>
                  <div className="min-w-0 space-y-2">
                    <h2 className="flex items-start gap-2 text-[1.05rem] font-semibold leading-snug tracking-[-0.01em] text-ink">
                      {content.title}
                      <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-ink-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-primary-strong" />
                    </h2>
                    <p className="text-[0.9rem] leading-7 text-ink-muted">{content.detail}</p>
                    <p className="break-all text-[0.8rem] text-brand-primary-strong/70">{href}</p>
                    <span className="sr-only">{r.externalNote}</span>
                  </div>
                </a>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      {/* Help */}
      <section className="border-t border-line/60 bg-surface-muted py-16 md:py-20">
        <div className="page-shell">
          <MotionReveal className="mx-auto max-w-2xl space-y-5 text-center">
            <h2 className="text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink md:text-[2.1rem]">
              {r.help.headline}
            </h2>
            <p className="text-[1rem] leading-8 text-ink-muted">{r.help.body}</p>
            <div className="flex justify-center pt-2">
              <Button
                asChild
                size="lg"
                className="rounded-full shadow-ambient-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-20px_rgba(30,84,174,0.5)] active:translate-y-0 active:scale-[0.98]"
              >
                <Link href="/contact">
                  {r.help.cta}
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </MotionReveal>
        </div>
      </section>
    </>
  );
}
