import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, HeartHandshake, Mail, Phone } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "@/components/ui/social-icons";

import { Button } from "@/components/ui/button";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/home/motion";

export const metadata: Metadata = {
  title: "Get Support | Padres Con Poder",
  description:
    "Connect with Padres Con Poder for family support through the Self-Determination Program or inclusive workplace consulting for your business.",
};

const paths = [
  {
    icon: HeartHandshake,
    audience: "For Families",
    headline: "Navigating the Self-Determination Program",
    description:
      "If you are an individual with a disability or a family member seeking guidance through the IRC Self-Determination Program — service planning, regional center coordination, budgeting, and advocacy — we are here to walk alongside you.",
    cta: "Learn About Family Support",
    href: "/families",
    tone: "primary" as const,
  },
  {
    icon: Building2,
    audience: "For Businesses",
    headline: "Building an Inclusive Workplace",
    description:
      "If you are an organization looking to create more inclusive hiring practices, train your team on neurodiversity, or develop a sustainable DEI strategy — we provide practical coaching and structured support.",
    cta: "Learn About Business Services",
    href: "/businesses",
    tone: "secondary" as const,
  },
];

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    href: "tel:+19517370951",
    display: "+1 951-737-0951",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:info@ivestorres.org",
    display: "info@ivestorres.org",
  },
  {
    icon: FacebookIcon,
    label: "Facebook",
    href: "https://www.facebook.com/capacitate365",
    display: "facebook.com/capacitate365",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: "https://www.instagram.com/padres_con_poder",
    display: "@padres_con_poder",
  },
];

export default function GetSupportPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden border-b border-line/60 bg-white py-20 md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(80,216,144,0.07),transparent)]"
        />
        <div className="page-shell relative max-w-3xl space-y-5">
          <MotionReveal>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
              Get Support
            </p>
            <h1 className="mt-3 text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.04em] text-ink md:text-[3.25rem]">
              Let&apos;s find the right path for you.
            </h1>
            <p className="mt-5 max-w-xl text-xl leading-8 text-ink-muted">
              Padres Con Poder works with families navigating disability services and
              organizations building inclusive workplaces. Tell us where you need
              support — we will take it from there.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* Two paths */}
      <section className="bg-surface-muted py-16 md:py-24">
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
                    className={`mt-auto w-full rounded-full ${
                      tone === "primary"
                        ? "shadow-ambient"
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

      {/* Contact directly */}
      <section className="border-t border-line/60 bg-background py-20 md:py-28">
        <div className="page-shell">
          <MotionReveal className="mb-12">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
              Contact Directly
            </p>
            <h2 className="mt-3 text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink md:text-[2.2rem]">
              Prefer to reach out directly?
            </h2>
            <p className="mt-3 max-w-lg text-[1rem] leading-7 text-ink-muted">
              Our team is available by phone, email, and social media. We respond promptly
              and are happy to answer questions before any formal engagement.
            </p>
          </MotionReveal>

          <MotionStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactItems.map(({ icon: Icon, label, href, display }, i) => (
              <MotionStaggerItem key={label}>
                <a
                  href={href}
                  target={i > 1 ? "_blank" : undefined}
                  rel={i > 1 ? "noopener noreferrer" : undefined}
                  className="flex flex-col gap-4 rounded-[1.25rem] border border-line/70 bg-white p-6 shadow-ambient transition-shadow hover:shadow-ambient-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary-soft">
                    <Icon className="size-5 text-brand-primary-strong" />
                  </div>
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                      {label}
                    </p>
                    <p className="mt-1 text-[0.9rem] font-semibold text-ink">{display}</p>
                  </div>
                </a>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>
      </section>
    </>
  );
}
