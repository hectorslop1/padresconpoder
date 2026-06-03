"use client";

import Link from "next/link";
import { ArrowRight, Building2, HeartHandshake, Mail, Phone } from "lucide-react";

import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { FacebookGradientIcon, InstagramGradientIcon } from "@/components/ui/social-icons";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/home/motion";
import { ContactForm } from "@/components/get-support/contact-form";

export function GetSupportContent() {
  const { t } = useLanguage();
  const gs = t.getSupport;

  const paths = [
    {
      icon: HeartHandshake,
      audience: gs.paths.families.audience,
      headline: gs.paths.families.headline,
      description: gs.paths.families.description,
      cta: gs.paths.families.cta,
      href: "/families",
      tone: "primary" as const,
    },
    {
      icon: Building2,
      audience: gs.paths.businesses.audience,
      headline: gs.paths.businesses.headline,
      description: gs.paths.businesses.description,
      cta: gs.paths.businesses.cta,
      href: "/businesses",
      tone: "secondary" as const,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line/60 bg-white py-20 md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(80,216,144,0.07),transparent)]"
        />
        <div className="page-shell relative max-w-3xl space-y-5">
          <MotionReveal className="space-y-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
              {gs.hero.eyebrow}
            </p>
            <h1 className="text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.04em] text-ink md:text-[3.25rem]">
              {gs.hero.headline}
            </h1>
            <p className="max-w-xl text-xl leading-8 text-ink-muted">{gs.hero.body}</p>
          </MotionReveal>
        </div>
      </section>

      {/* Two paths */}
      <section className="bg-surface-muted py-16 md:py-20">
        <div className="page-shell">
          <MotionStagger className="grid gap-5 md:grid-cols-2">
            {paths.map(({ icon: Icon, audience, headline, description, cta, href, tone }) => (
              <MotionStaggerItem key={href}>
                <div
                  className={`flex h-full flex-col gap-6 rounded-[1.5rem] border p-8 md:p-10 ${
                    tone === "primary"
                      ? "border-brand-primary/20 bg-[linear-gradient(145deg,rgba(62,109,200,0.06),rgba(255,255,255,1))]"
                      : "border-brand-secondary/20 bg-[linear-gradient(145deg,rgba(80,216,144,0.08),rgba(255,255,255,1))]"
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      tone === "primary" ? "bg-brand-primary-soft" : "bg-brand-secondary-soft"
                    }`}
                  >
                    <Icon
                      className={`size-6 ${
                        tone === "primary" ? "text-brand-primary-strong" : "text-[#006d40]"
                      }`}
                    />
                  </div>
                  <div className="space-y-3">
                    <p
                      className={`text-[0.7rem] font-semibold uppercase tracking-[0.18em] ${
                        tone === "primary" ? "text-brand-primary-strong" : "text-[#006d40]"
                      }`}
                    >
                      {audience}
                    </p>
                    <h2 className="text-[1.35rem] font-semibold leading-snug tracking-[-0.02em] text-ink md:text-[1.5rem]">
                      {headline}
                    </h2>
                    <p className="text-[0.95rem] leading-7 text-ink-muted">{description}</p>
                  </div>
                  <Button
                    asChild
                    className={`mt-auto w-full rounded-full transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${
                      tone === "primary"
                        ? "shadow-ambient hover:shadow-ambient-lg"
                        : "border border-[#006d40]/25 bg-[#006d40] text-white hover:bg-[#005c36]"
                    }`}
                  >
                    <Link href={href}>
                      {cta}
                      <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </div>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-background py-20 md:py-24">
        <div className="page-shell">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:items-start">
            <MotionReveal direction="left" className="space-y-5 lg:sticky lg:top-28">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                {gs.form.eyebrow}
              </p>
              <h2 className="text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink md:text-[2.2rem]">
                {gs.form.headline}
              </h2>
              <p className="text-[1rem] leading-7 text-ink-muted">{gs.form.body}</p>

              <div className="space-y-3 pt-4">
                <a
                  href="tel:+19517370951"
                  className="flex items-center gap-3 text-[0.94rem] text-ink-muted transition-colors duration-200 hover:text-brand-primary-strong"
                >
                  <Phone className="size-4 text-brand-primary" />
                  +1 951-737-0951
                </a>
                <a
                  href="mailto:info@ivestorres.org"
                  className="flex items-center gap-3 text-[0.94rem] text-ink-muted transition-colors duration-200 hover:text-brand-primary-strong"
                >
                  <Mail className="size-4 text-brand-primary" />
                  info@ivestorres.org
                </a>
              </div>
            </MotionReveal>

            <MotionReveal direction="right">
              <ContactForm />
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* Social links */}
      <section className="border-t border-line/60 bg-surface-muted py-12 md:py-14">
        <div className="page-shell">
          <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left sm:gap-8">
            <div className="space-y-1">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                {gs.contact.eyebrow}
              </p>
              <p className="text-[0.94rem] text-ink-muted">{gs.contact.body}</p>
            </div>
            <div className="flex shrink-0 items-center gap-3 sm:ml-auto">
              <a
                href="https://www.facebook.com/capacitate365"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-full border border-line/70 bg-white px-5 py-2.5 text-[0.82rem] font-semibold text-[#1877F2] shadow-ambient transition-all duration-200 hover:-translate-y-0.5 hover:shadow-ambient-lg"
              >
                <FacebookGradientIcon className="h-6 w-6 text-sm" />
                capacitate365
              </a>
              <a
                href="https://www.instagram.com/padres_con_poder"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-full border border-line/70 bg-white px-5 py-2.5 text-[0.82rem] font-semibold shadow-ambient transition-all duration-200 hover:-translate-y-0.5 hover:shadow-ambient-lg"
                style={{ color: "#E1306C" }}
              >
                <InstagramGradientIcon className="h-6 w-6 text-sm" />
                @padres_con_poder
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
