import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, HandHeart, HeartHandshake, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/home/motion";

export const metadata: Metadata = {
  title: "Support for Families | Padres Con Poder",
  description:
    "Padres Con Poder helps individuals with disabilities and their families navigate the Self-Determination Program with confidence — from service planning to ongoing advocacy.",
};

const services = [
  {
    icon: ShieldCheck,
    title: "Navigating the Self-Determination Program",
    description:
      "We guide clients through the complexities of the IRC Self-Determination Program and help shape individualized service plans tailored to each person's goals.",
    bullets: [
      "Resource coordination and provider connections",
      "Regional center communication and paperwork support",
      "Service planning grounded in personal goals",
    ],
    tone: "primary" as const,
  },
  {
    icon: BookOpen,
    title: "Empowerment Through Knowledge",
    description:
      "We equip families with the tools and training needed to take control of service plans, understand their legal rights, and make informed decisions.",
    bullets: [
      "Training in self-determination principles",
      "Guidance on the Lanterman Act",
      "Budgeting and spending plan support",
    ],
    tone: "secondary" as const,
  },
  {
    icon: HandHeart,
    title: "Ongoing Side-by-Side Support",
    description:
      "Our team works alongside families as services are implemented and goals continue to evolve — providing continuous follow-up and advocacy.",
    bullets: [
      "Follow-up support and self-advocacy guidance",
      "Appointments, submissions, and coordination help",
      "Continuous support as services move forward",
    ],
    tone: "primary" as const,
  },
];

export default function FamiliesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden border-b border-line/60 bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_0%,rgba(80,216,144,0.08),transparent)]"
        />
        <div className="page-shell relative z-10 grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)] lg:gap-16">
          <MotionReveal className="space-y-7">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
              Support for Families
            </p>
            <h1 className="text-[2.6rem] font-semibold leading-[0.98] tracking-[-0.04em] text-ink md:text-[3.5rem] lg:text-[4rem]">
              Navigate the
              <br />
              <span className="text-brand-primary-strong">Self-Determination</span>
              <br />
              Program with us.
            </h1>
            <p className="max-w-lg text-lg leading-8 text-ink-muted">
              Padres Con Poder helps individuals with disabilities and their families take
              control of their services, understand their rights, and move confidently
              toward their personal goals.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full shadow-ambient-lg">
                <Link href="/get-support">
                  Get Family Support
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-brand-primary/25 text-brand-primary-strong hover:bg-brand-primary-soft/40"
              >
                <Link href="/about">About Our Approach</Link>
              </Button>
            </div>
          </MotionReveal>

          <MotionReveal direction="right">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-ambient-lg">
              <Image
                src="/images/3.jpg.webp"
                alt="Padres Con Poder families celebrating empowerment"
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

      {/* What is SDP */}
      <section className="border-b border-line/60 bg-surface-muted py-16 md:py-20">
        <div className="page-shell">
          <MotionReveal>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:items-center">
              <div className="space-y-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                  The Program
                </p>
                <h2 className="text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink md:text-[2.2rem]">
                  What is the Self-Determination Program?
                </h2>
              </div>
              <p className="text-[1rem] leading-8 text-ink-muted">
                The Self-Determination Program (SDP) is a California initiative that gives
                individuals with developmental disabilities and their families greater
                control over the services and supports they receive. Participants work with
                a Financial Management Service to manage their own budgets, choose their
                providers, and design a life plan that reflects their personal values and
                goals. Navigating it can be complex — Padres Con Poder is here to make
                every step clear.
              </p>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-background py-20 md:py-28 lg:py-32">
        <div className="page-shell">
          <MotionReveal className="mb-14">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
              How We Help Families
            </p>
            <h2 className="mt-3 max-w-xl text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink md:text-[2.5rem]">
              Three areas of focused support.
            </h2>
          </MotionReveal>

          <MotionStagger className="grid gap-5 md:grid-cols-3">
            {services.map(({ icon: Icon, title, description, bullets, tone }) => (
              <MotionStaggerItem key={title}>
                <div className="flex h-full flex-col rounded-[1.25rem] border border-line/70 bg-white p-7 shadow-ambient md:p-8">
                  <div
                    className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${
                      tone === "primary" ? "bg-brand-primary-soft" : "bg-brand-secondary-soft"
                    }`}
                  >
                    <Icon
                      className={`size-5 ${
                        tone === "primary"
                          ? "text-brand-primary-strong"
                          : "text-[#006d40]"
                      }`}
                    />
                  </div>
                  <h3 className="mb-3 text-[1.15rem] font-semibold leading-snug tracking-[-0.01em] text-ink">
                    {title}
                  </h3>
                  <p className="mb-5 text-[0.9rem] leading-7 text-ink-muted">
                    {description}
                  </p>
                  <ul className="mt-auto space-y-2.5">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-[0.85rem] text-ink-muted">
                        <span
                          className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                            tone === "primary" ? "bg-brand-primary" : "bg-brand-secondary"
                          }`}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      {/* Editorial image */}
      <section className="relative overflow-hidden">
        <div className="relative h-[40vh] min-h-[280px] md:h-[48vh]">
          <Image
            src="/images/4.jpg.webp"
            alt="Young individuals with disabilities empowered through Padres Con Poder"
            fill
            className="object-cover object-top"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-strong/80 via-brand-primary-strong/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="page-shell">
              <MotionReveal className="max-w-lg space-y-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-white/60">
                  Our Commitment
                </p>
                <p className="text-[1.45rem] font-semibold leading-[1.25] tracking-[-0.02em] text-white md:text-[1.8rem]">
                  Every family deserves a clear path forward — and someone to walk it
                  with them.
                </p>
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
            <h2 className="text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink md:text-[2.5rem]">
              Ready to start your journey?
            </h2>
            <p className="text-lg leading-8 text-ink-muted">
              Reach out to Padres Con Poder today. We will help you understand your
              options and take the first confident step toward greater independence.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Button asChild size="lg" className="rounded-full shadow-ambient-lg">
                <Link href="/get-support">
                  Get Support Now
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-brand-primary/25 text-brand-primary-strong hover:bg-brand-primary-soft/40"
              >
                <a href="tel:+19517370951">Call +1 951-737-0951</a>
              </Button>
            </div>
          </MotionReveal>
        </div>
      </section>
    </>
  );
}
