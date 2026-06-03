import { MotionReveal } from "@/components/home/motion";

export function MissionStrip() {
  return (
    <section className="border-b border-line/60 bg-brand-primary-strong py-10 md:py-12">
      <div className="page-shell">
        <MotionReveal>
          <p className="max-w-4xl text-[1.1rem] leading-8 text-white/80 md:text-[1.2rem] md:leading-9">
            <span className="font-semibold text-white">Our mission&nbsp;</span>
            is to empower individuals with disabilities and their families to navigate the
            Self-Determination Program with confidence, while equipping California businesses
            to build workplaces where neurodiverse talent is included, supported, and given
            the opportunity to thrive.
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
