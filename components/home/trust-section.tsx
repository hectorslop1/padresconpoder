import { Building2, HandHeart, MapPin, Users } from "lucide-react";

import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/home/motion";

const pillars = [
  {
    icon: Building2,
    label: "Trusted IRC Vendor",
    detail:
      "Approved and trusted vendor for the Inland Regional Center, specializing in the Self-Determination Program.",
  },
  {
    icon: Users,
    label: "Dual-Audience Expertise",
    detail:
      "Uniquely positioned to serve both individuals and families while concurrently coaching organizations.",
  },
  {
    icon: HandHeart,
    label: "Person-Centered Approach",
    detail:
      "Every engagement is grounded in individualized planning, continuous follow-up, and side-by-side support.",
  },
  {
    icon: MapPin,
    label: "California-Wide Vision",
    detail:
      "Working toward a statewide model where inclusive workplaces and person-centered planning are the standard.",
  },
];

export function TrustSection() {
  return (
    <section className="border-y border-line/60 bg-surface-muted py-20 md:py-28">
      <div className="page-shell">
        <MotionReveal className="mb-14">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
            Why Families & Organizations Trust Us
          </p>
          <h2 className="mt-3 max-w-2xl text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink md:text-[2.5rem]">
            Structured support built on real expertise.
          </h2>
        </MotionReveal>

        <MotionStagger className="grid gap-px bg-line/60 overflow-hidden rounded-2xl border border-line/60 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, label, detail }) => (
            <MotionStaggerItem key={label}>
              <div className="flex flex-col gap-5 bg-white p-7 md:p-8 h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary-soft">
                  <Icon className="size-5 text-brand-primary-strong" />
                </div>
                <div className="space-y-2">
                  <p className="font-semibold leading-snug tracking-[-0.01em] text-ink">
                    {label}
                  </p>
                  <p className="text-[0.88rem] leading-6 text-ink-muted">{detail}</p>
                </div>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
