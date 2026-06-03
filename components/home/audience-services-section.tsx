import { ArrowUpRight, BriefcaseBusiness, HeartHandshake, Workflow } from "lucide-react";

import { businessServices, familyServices, type ServiceItem } from "@/components/home/content";
import { Eyebrow } from "@/components/home/eyebrow";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/home/motion";
import { SectionShell } from "@/components/home/section-shell";
import { ServiceCard } from "@/components/home/service-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function ServiceSection({
  id,
  eyebrow,
  title,
  description,
  services,
  reverse = false,
  tone = "primary",
  highlights,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  services: ServiceItem[];
  reverse?: boolean;
  tone?: "primary" | "secondary";
  highlights: string[];
}) {
  const iconColor =
    tone === "primary"
      ? "bg-brand-primary-soft text-brand-primary-strong"
      : "bg-brand-secondary-soft text-[#0c6b3d]";

  return (
    <SectionShell id={id} className={reverse ? "border-t border-line/70" : undefined}>
      <div
        className={`grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-14 ${
          reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
        }`}
      >
        <MotionReveal direction={reverse ? "right" : "left"} className="relative">
          <div className="sticky top-28 space-y-6">
            <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
            <div className="space-y-5">
              <h2 className="max-w-xl text-balance text-[2.3rem] leading-[1.06] font-semibold tracking-[-0.04em] text-ink md:text-[3.05rem]">
                {title}
              </h2>
              <p className="max-w-xl text-lg leading-8 text-ink-muted">{description}</p>
            </div>

            <Card className="relative overflow-hidden border-white/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(62,109,200,0.06))]">
              <div className="absolute right-6 top-6 rounded-full border border-brand-primary/12 bg-white/85 p-3 text-brand-primary-strong shadow-ambient">
                <ArrowUpRight className="size-4" />
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-[1.1rem]">What this support can include</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div key={highlight} className="flex items-start gap-4">
                    <div className={`mt-1 rounded-full p-3 ${iconColor}`}>
                      {index === 0 ? (
                        <HeartHandshake className="size-4" />
                      ) : index === 1 ? (
                        <Workflow className="size-4" />
                      ) : (
                        <BriefcaseBusiness className="size-4" />
                      )}
                    </div>
                    <p className="text-sm leading-6 text-ink-muted">{highlight}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </MotionReveal>

        <MotionStagger className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <MotionStaggerItem
              key={service.title}
              direction={index % 2 === 0 ? "up" : reverse ? "left" : "right"}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                bullets={service.bullets}
              />
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </SectionShell>
  );
}

export function AudienceServicesSection() {
  return (
    <>
      <ServiceSection
        id="families"
        eyebrow="Services for Families"
        title="Guidance for the Self-Determination Program and greater independence."
        description="Padres Con Poder helps individuals with disabilities and their families take control of services, navigate the Self-Determination Program, and move toward personal goals with more clarity."
        services={familyServices}
        highlights={[
          "One-on-one consultations and service planning based on each client’s needs.",
          "Training and practical support for self-advocacy, program requirements, and budgeting.",
          "Ongoing coordination with the IRC, providers, and family support systems.",
        ]}
      />
      <ServiceSection
        id="businesses"
        eyebrow="Services for Businesses"
        title="Coaching and strategy for neurodiverse-friendly workplaces."
        description="Padres Con Poder works with companies that want to create inclusive environments, strengthen workplace practices, and support neurodiverse employees with intention."
        services={businessServices}
        reverse
        tone="secondary"
        highlights={[
          "Customized consulting sessions focused on workplace dynamics and inclusive practices.",
          "Training for leadership and staff on communication, support, and team culture.",
          "Practical strategies that align diversity, equity, and inclusion with employee well-being.",
        ]}
      />
    </>
  );
}
