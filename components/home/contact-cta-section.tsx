"use client";

import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";

import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { FacebookGradientIcon, InstagramGradientIcon } from "@/components/ui/social-icons";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/home/motion";

export function ContactCtaSection() {
  const { t } = useLanguage();
  const c = t.home.contact;

  return (
    <section className="bg-background py-20 md:py-28 lg:py-32">
      <div className="page-shell">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)] lg:gap-20 lg:items-center">
          {/* Left */}
          <MotionReveal direction="left" className="space-y-8">
            <div className="space-y-4">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                {c.eyebrow}
              </p>
              <h2 className="max-w-xl text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink md:text-[2.75rem]">
                {c.headline}
              </h2>
              <p className="max-w-lg text-lg leading-8 text-ink-muted">{c.body}</p>
            </div>
            <Button
              asChild
              size="lg"
              className="rounded-full shadow-ambient-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-20px_rgba(30,84,174,0.5)] active:translate-y-0 active:scale-[0.98]"
            >
              <Link href="/get-support">
                {c.cta}
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </MotionReveal>

          {/* Right */}
          <MotionStagger className="space-y-4">
            <MotionStaggerItem>
              <a
                href="tel:+19517370951"
                className="group flex items-center gap-4 rounded-2xl border border-line/70 bg-white px-6 py-5 shadow-ambient transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-primary/25 hover:shadow-ambient-lg"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-primary-soft transition-colors duration-200 group-hover:bg-brand-primary-soft/80">
                  <Phone className="size-5 text-brand-primary-strong" />
                </div>
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                    {c.phone}
                  </p>
                  <p className="mt-0.5 font-semibold text-ink">+1 951-737-0951</p>
                </div>
              </a>
            </MotionStaggerItem>

            <MotionStaggerItem>
              <a
                href="mailto:info@ivestorres.org"
                className="group flex items-center gap-4 rounded-2xl border border-line/70 bg-white px-6 py-5 shadow-ambient transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-primary/25 hover:shadow-ambient-lg"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-primary-soft transition-colors duration-200 group-hover:bg-brand-primary-soft/80">
                  <Mail className="size-5 text-brand-primary-strong" />
                </div>
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                    {c.email}
                  </p>
                  <p className="mt-0.5 font-semibold text-ink">info@ivestorres.org</p>
                </div>
              </a>
            </MotionStaggerItem>

            <MotionStaggerItem>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/capacitate365"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-1 items-center gap-4 rounded-2xl border border-line/70 bg-white px-6 py-5 shadow-ambient transition-all duration-200 hover:-translate-y-0.5 hover:border-[#1877F2]/25 hover:shadow-ambient-lg"
                >
                  <FacebookGradientIcon className="h-11 w-11 shrink-0" />
                  <div>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                      {c.facebook}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-ink">capacitate365</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/padres_con_poder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-1 items-center gap-4 rounded-2xl border border-line/70 bg-white px-6 py-5 shadow-ambient transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E1306C]/20 hover:shadow-ambient-lg"
                >
                  <InstagramGradientIcon className="h-11 w-11 shrink-0" />
                  <div>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                      {c.instagram}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-ink">@padres_con_poder</p>
                  </div>
                </a>
              </div>
            </MotionStaggerItem>
          </MotionStagger>
        </div>
      </div>
    </section>
  );
}
