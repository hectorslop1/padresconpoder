import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Eye, MapPin, ShieldCheck, Target, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/home/motion";

export const metadata: Metadata = {
  title: "About Padres Con Poder | Mission, Vision & Approach",
  description:
    "Learn about Padres Con Poder's mission, vision, and person-centered approach to empowering families and building inclusive workplaces across California.",
};

const differentiators = [
  {
    icon: ShieldCheck,
    title: "Trusted Inland Regional Center Vendor",
    detail:
      "Padres Con Poder is an approved and trusted vendor for the Inland Regional Center, specializing in the Self-Determination Program. Families work with us knowing we are recognized, vetted, and accountable.",
  },
  {
    icon: Users,
    title: "Dual Expertise Across Two Audiences",
    detail:
      "We are uniquely positioned to serve both families navigating disability services and businesses building inclusive environments — understanding both sides of the same system.",
  },
  {
    icon: Target,
    title: "Personalized Side-by-Side Guidance",
    detail:
      "Our support is not transactional. Every engagement includes individualized planning, continuous follow-up, and practical help as plans turn into lived outcomes.",
  },
  {
    icon: MapPin,
    title: "California-Focused Inclusive Vision",
    detail:
      "Our work is rooted in a statewide vision where inclusive workplaces, person-centered planning, and greater independence become the standard — not the exception.",
  },
];

const approach = [
  {
    step: "01",
    title: "Guide",
    detail:
      "We help families and individuals navigate the Self-Determination Program, build individualized service plans, and connect with the right resources.",
  },
  {
    step: "02",
    title: "Train",
    detail:
      "We provide education on self-determination principles, the Lanterman Act, budgeting and spending plans, and inclusive workplace practices.",
  },
  {
    step: "03",
    title: "Support",
    detail:
      "We stay alongside families with ongoing follow-up and advocacy, while coaching businesses as they implement inclusive strategies over time.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden border-b border-line/60 bg-white py-20 md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(62,109,200,0.06),transparent)]"
        />
        <div className="page-shell relative z-10 max-w-4xl">
          <MotionReveal className="space-y-6">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
              About Padres Con Poder
            </p>
            <h1 className="text-[2.6rem] font-semibold leading-[1.0] tracking-[-0.04em] text-ink md:text-[3.5rem] lg:text-[4.25rem]">
              Empowerment rooted in
              <br />
              <span className="text-brand-primary-strong">person-centered</span>
              <br />
              support.
            </h1>
            <p className="max-w-2xl text-xl leading-9 text-ink-muted">
              Padres Con Poder bridges family support and inclusive business strategy with
              the same commitment to empowerment, structure, and person-centered guidance.
            </p>
          </MotionReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-b border-line/60 bg-surface-muted py-20 md:py-28">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Mission */}
            <MotionReveal direction="left" className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary-soft">
                  <Target className="size-5 text-brand-primary-strong" />
                </div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-brand-primary-strong">
                  Mission
                </p>
              </div>
              <h2 className="text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink md:text-[2rem]">
                What we are committed to.
              </h2>
              <p className="text-[1rem] leading-8 text-ink-muted">
                At Padres Con Poder, we are committed to empowering businesses across
                California to cultivate inclusive and neurodiverse-friendly workplaces.
                Through specialized coaching and training, we equip organizations to
                embrace diversity, equity, and inclusion, unlocking the potential of
                neurodiverse talent. Concurrently, we empower individuals with disabilities
                and their families to confidently navigate the Self-Determination Program.
              </p>
            </MotionReveal>

            {/* Vision */}
            <MotionReveal direction="right" className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-secondary-soft">
                  <Eye className="size-5 text-[#006d40]" />
                </div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#006d40]">
                  Vision
                </p>
              </div>
              <h2 className="text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink md:text-[2rem]">
                What we are working toward.
              </h2>
              <p className="text-[1rem] leading-8 text-ink-muted">
                Our vision is to be the leading resource for businesses and individuals
                across all regional centers in California. We aspire to create a society
                where every individual, regardless of ability, can lead an empowered and
                independent life — with person-centered planning at the forefront of
                service delivery.
              </p>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* Editorial image */}
      <section className="relative overflow-hidden">
        <div className="relative h-[44vh] min-h-[300px] md:h-[52vh]">
          <Image
            src="/images/5.jpg.webp"
            alt="Padres Con Poder members showing pride and positive energy"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="page-shell">
              <MotionReveal className="max-w-lg space-y-3">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/55">
                  Our People
                </p>
                <p className="text-[1.5rem] font-semibold leading-[1.3] tracking-[-0.02em] text-white md:text-[1.85rem]">
                  We believe every person deserves a plan, a guide, and the confidence
                  to move forward.
                </p>
              </MotionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-background py-20 md:py-28 lg:py-32">
        <div className="page-shell">
          <MotionReveal className="mb-14">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
              Our Approach
            </p>
            <h2 className="mt-3 max-w-xl text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink md:text-[2.5rem]">
              A clear, supportive framework for complex decisions.
            </h2>
          </MotionReveal>

          <MotionStagger className="grid gap-5 md:grid-cols-3">
            {approach.map(({ step, title, detail }) => (
              <MotionStaggerItem key={step}>
                <div className="relative flex flex-col gap-5 rounded-[1.25rem] border border-line/70 bg-white p-7 shadow-ambient md:p-8">
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-primary">
                    Step {step}
                  </span>
                  <h3 className="text-[1.5rem] font-semibold tracking-[-0.02em] text-ink">
                    {title}
                  </h3>
                  <p className="text-[0.9rem] leading-7 text-ink-muted">{detail}</p>
                </div>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-y border-line/60 bg-surface-muted py-20 md:py-28">
        <div className="page-shell">
          <MotionReveal className="mb-14">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
              Why Choose Padres Con Poder
            </p>
            <h2 className="mt-3 max-w-xl text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink md:text-[2.5rem]">
              Trusted guidance that understands both sides.
            </h2>
          </MotionReveal>

          <MotionStagger className="grid gap-5 md:grid-cols-2">
            {differentiators.map(({ icon: Icon, title, detail }) => (
              <MotionStaggerItem key={title}>
                <div className="flex gap-5 rounded-[1.25rem] border border-line/70 bg-white p-7 shadow-ambient md:p-8">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary-soft">
                    <Icon className="size-5 text-brand-primary-strong" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold leading-snug tracking-[-0.01em] text-ink">
                      {title}
                    </h3>
                    <p className="text-[0.88rem] leading-6 text-ink-muted">{detail}</p>
                  </div>
                </div>
              </MotionStaggerItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      {/* IRC Vendor */}
      <section className="bg-brand-primary-strong py-16 md:py-20">
        <div className="page-shell">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.6fr)] lg:gap-16 lg:items-center">
            <MotionReveal direction="left" className="space-y-5">
              <div className="flex items-center gap-3">
                <ShieldCheck className="size-6 text-white/70" />
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/60">
                  Inland Regional Center
                </p>
              </div>
              <h2 className="text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white md:text-[2.2rem]">
                Approved and trusted IRC vendor.
              </h2>
              <p className="max-w-xl text-[1rem] leading-8 text-white/70">
                Padres Con Poder is a recognized and approved vendor for the Inland
                Regional Center (IRC), specializing in the Self-Determination Program.
                Families can work with us with the confidence of knowing we are fully
                vetted and accountable within the regional center system.
              </p>
            </MotionReveal>

            <MotionReveal direction="right">
              <ul className="space-y-3">
                {[
                  "Approved Self-Determination vendor",
                  "Specialization in SDP navigation",
                  "Individualized service planning",
                  "Regional center coordination",
                  "Accountability within the IRC system",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[0.95rem] text-white/75">
                    <CheckCircle2 className="size-4 shrink-0 text-brand-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </MotionReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-20 md:py-24">
        <div className="page-shell">
          <MotionReveal className="mx-auto max-w-xl space-y-6 text-center">
            <h2 className="text-[2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink md:text-[2.4rem]">
              Ready to connect with Padres Con Poder?
            </h2>
            <p className="text-lg leading-8 text-ink-muted">
              Whether you are a family or an organization, we are here to help you take
              the next step with clarity and confidence.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Button asChild size="lg" className="rounded-full shadow-ambient-lg">
                <Link href="/get-support">
                  Get Support
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
