"use client";

import Link from "next/link";
import { ArrowRight, Building2, HeartHandshake, Mail, Phone } from "lucide-react";

import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { FacebookGradientIcon, InstagramGradientIcon } from "@/components/ui/social-icons";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/home/motion";
import { ContactForm } from "@/components/contact/contact-form";
import { siteContact, teamMembers } from "@/lib/site";

export function ContactContent() {
  const { t } = useLanguage();
  const c = t.contact;

  const paths = [
    {
      icon: HeartHandshake,
      audience: c.paths.families.audience,
      headline: c.paths.families.headline,
      description: c.paths.families.description,
      cta: c.paths.families.cta,
      href: "/families",
      tone: "primary" as const,
    },
    {
      icon: Building2,
      audience: c.paths.businesses.audience,
      headline: c.paths.businesses.headline,
      description: c.paths.businesses.description,
      cta: c.paths.businesses.cta,
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
        <div className="page-shell relative max-w-3xl">
          <MotionReveal className="space-y-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
              {c.hero.eyebrow}
            </p>
            <h1 className="text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.04em] text-ink md:text-[3.25rem]">
              {c.hero.headline}
            </h1>
            <p className="max-w-xl text-xl leading-8 text-ink-muted">{c.hero.body}</p>
          </MotionReveal>
        </div>
      </section>

      {/* Contact form + direct details */}
      <section className="bg-background py-16 md:py-20">
        <div className="page-shell">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:items-start">
            <MotionReveal direction="left" className="space-y-6 lg:sticky lg:top-28">
              <div className="space-y-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                  {c.form.eyebrow}
                </p>
                <h2 className="text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink md:text-[2.2rem]">
                  {c.form.headline}
                </h2>
                <p className="text-[1rem] leading-7 text-ink-muted">{c.form.body}</p>
              </div>

              <div className="space-y-3 border-t border-line/70 pt-6">
                <a
                  href={siteContact.emailHref}
                  className="flex items-center gap-3 text-[0.94rem] text-ink-muted transition-colors duration-200 hover:text-brand-primary-strong"
                >
                  <Mail className="size-4 shrink-0 text-brand-primary" />
                  {siteContact.email}
                </a>
                <a
                  href={siteContact.phoneHref}
                  className="flex items-center gap-3 text-[0.94rem] text-ink-muted transition-colors duration-200 hover:text-brand-primary-strong"
                >
                  <Phone className="size-4 shrink-0 text-brand-primary" />
                  {siteContact.phone}
                </a>
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={siteContact.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Padres Con Poder on Facebook"
                    className="transition-all duration-200 hover:scale-110"
                  >
                    <FacebookGradientIcon className="h-8 w-8" />
                  </a>
                  <a
                    href={siteContact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Padres Con Poder on Instagram"
                    className="transition-all duration-200 hover:scale-110"
                  >
                    <InstagramGradientIcon className="h-8 w-8" />
                  </a>
                </div>
              </div>

              {/* Who you are reaching */}
              <div className="space-y-3 rounded-[1.25rem] border border-line/70 bg-surface-muted p-6">
                <p className="text-[0.9rem] font-semibold text-ink">{c.direct.teamHeadline}</p>
                <ul className="space-y-1.5">
                  {teamMembers.map((member) => (
                    <li key={member.name} className="text-[0.88rem] leading-6 text-ink-muted">
                      <span className="font-medium text-ink">{member.name}</span>,{" "}
                      {c.direct.roles[member.roleKey]}
                    </li>
                  ))}
                  <li className="text-[0.88rem] leading-6 text-ink-muted">{c.direct.others}</li>
                </ul>
              </div>
            </MotionReveal>

            <MotionReveal direction="right">
              <ContactForm />
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* Two paths */}
      <section className="border-t border-line/60 bg-surface-muted py-16 md:py-20">
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
    </>
  );
}
