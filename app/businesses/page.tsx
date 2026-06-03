import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, BookUser, Briefcase, Rocket } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/home/motion";

export const metadata: Metadata = {
  title: "Inclusive Business Consulting | Padres Con Poder",
  description:
    "Padres Con Poder helps California businesses build inclusive, neurodiverse-friendly workplaces through coaching, training, and DEI strategy.",
};

const services = [
  {
    icon: Briefcase,
    title: "Customized Business Coaching",
    description:
      "We work with companies to build inclusive hiring, onboarding, and employee development programs that support neurodiverse employees and strengthen organizational culture.",
    bullets: [
      "Inclusive hiring and onboarding guidance",
      "Coaching tailored to each organization's needs",
      "Support for employee development programs",
    ],
  },
  {
    icon: BookUser,
    title: "Inclusive Workplace Training",
    description:
      "We deliver training for leadership and staff on creating environments where neurodiverse employees can thrive — from awareness to practical implementation.",
    bullets: [
      "Leadership and staff education workshops",
      "Customized training for company culture",
      "Supportive environment and communication practices",
    ],
  },
  {
    icon: BarChart3,
    title: "Diversity & Inclusion Strategy",
    description:
      "Our experts help businesses develop and implement sustainable DEI strategies that promote equity and inclusion while enhancing overall employee well-being.",
    bullets: [
      "Diversity, equity, and inclusion planning",
      "Workplace accommodation guidance",
      "Strategy integration that supports business growth",
    ],
  },
];

const outcomes = [
  "More equitable hiring practices",
  "Stronger employee retention",
  "Inclusive onboarding systems",
  "Neurodiverse-informed leadership",
  "Workplace accommodation frameworks",
  "Measurable culture improvement",
];

export default function BusinessesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden border-b border-line/60 bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_0%,rgba(62,109,200,0.07),transparent)]"
        />
        <div className="page-shell relative z-10 grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)] lg:gap-16">
          <MotionReveal className="space-y-7">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
              For Businesses
            </p>
            <h1 className="text-[2.6rem] font-semibold leading-[0.98] tracking-[-0.04em] text-ink md:text-[3.5rem] lg:text-[4rem]">
              Build workplaces
              <br />
              where
              <span className="text-brand-primary-strong"> everyone</span>
              <br />
              belongs.
            </h1>
            <p className="max-w-lg text-lg leading-8 text-ink-muted">
              Padres Con Poder partners with California organizations to create inclusive,
              neurodiverse-friendly workplaces through coaching, staff training, and
              strategic DEI planning.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full shadow-ambient-lg">
                <Link href="/get-support">
                  Start a Conversation
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-brand-primary/25 text-brand-primary-strong hover:bg-brand-primary-soft/40"
              >
                <Link href="/about">Our Approach</Link>
              </Button>
            </div>
          </MotionReveal>

          <MotionReveal direction="right">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-ambient-lg">
              <Image
                src="/images/2.jpg.webp"
                alt="Padres Con Poder team members collaborating at an event"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Why it matters */}
      <section className="border-b border-line/60 bg-brand-primary-strong py-14 md:py-16">
        <div className="page-shell">
          <MotionReveal>
            <p className="max-w-4xl text-[1.05rem] leading-8 text-white/80 md:text-[1.15rem] md:leading-9">
              <span className="font-semibold text-white">Neurodiverse talent is everywhere.&nbsp;</span>
              When businesses invest in creating genuinely inclusive environments, they
              unlock stronger teams, reduced turnover, and cultures where every employee
              can contribute fully. Padres Con Poder helps you build that — with
              practical strategy, not just policy.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* Services */}
      <section className="bg-background py-20 md:py-28 lg:py-32">
        <div className="page-shell">
          <MotionReveal className="mb-14">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
              Our Business Services
            </p>
            <h2 className="mt-3 max-w-xl text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink md:text-[2.5rem]">
              Practical support for lasting change.
            </h2>
          </MotionReveal>

          <MotionStagger className="grid gap-5 md:grid-cols-3">
            {services.map(({ icon: Icon, title, description, bullets }) => (
              <MotionStaggerItem key={title}>
                <div className="flex h-full flex-col rounded-[1.25rem] border border-line/70 bg-white p-7 shadow-ambient md:p-8">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary-soft">
                    <Icon className="size-5 text-brand-primary-strong" />
                  </div>
                  <h3 className="mb-3 text-[1.15rem] font-semibold leading-snug tracking-[-0.01em] text-ink">
                    {title}
                  </h3>
                  <p className="mb-5 text-[0.9rem] leading-7 text-ink-muted">{description}</p>
                  <ul className="mt-auto space-y-2.5">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-[0.85rem] text-ink-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
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

      {/* Outcomes grid */}
      <section className="border-y border-line/60 bg-surface-muted py-20 md:py-24">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 lg:items-center">
            <MotionReveal direction="left" className="space-y-4">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                What to Expect
              </p>
              <h2 className="text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink md:text-[2.2rem]">
                Measurable outcomes for your organization.
              </h2>
              <p className="text-[0.95rem] leading-7 text-ink-muted">
                Our consulting work is grounded in practical application. Every engagement
                results in tangible changes to policies, practices, and team culture.
              </p>
            </MotionReveal>

            <MotionStagger className="grid grid-cols-2 gap-3">
              {outcomes.map((outcome) => (
                <MotionStaggerItem key={outcome}>
                  <div className="rounded-xl border border-line/70 bg-white px-5 py-4 text-[0.9rem] font-medium text-ink shadow-ambient">
                    {outcome}
                  </div>
                </MotionStaggerItem>
              ))}
            </MotionStagger>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-20 md:py-24">
        <div className="page-shell">
          <MotionReveal className="mx-auto max-w-2xl space-y-6 text-center">
            <Rocket className="mx-auto size-10 text-brand-primary" />
            <h2 className="text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink md:text-[2.5rem]">
              Ready to build a more inclusive team?
            </h2>
            <p className="text-lg leading-8 text-ink-muted">
              Contact Padres Con Poder to start a conversation about coaching, training,
              and strategy for your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Button asChild size="lg" className="rounded-full shadow-ambient-lg">
                <Link href="/get-support">
                  Request a Consultation
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-brand-primary/25 text-brand-primary-strong hover:bg-brand-primary-soft/40"
              >
                <a href="mailto:info@ivestorres.org">info@ivestorres.org</a>
              </Button>
            </div>
          </MotionReveal>
        </div>
      </section>
    </>
  );
}
