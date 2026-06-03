import { Landmark, Target } from "lucide-react";

import { missionContent } from "@/components/home/content";
import { Eyebrow } from "@/components/home/eyebrow";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/home/motion";
import { SectionShell } from "@/components/home/section-shell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function MissionSection() {
  return (
    <SectionShell id="mission">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
        <MotionReveal direction="left" className="space-y-6">
          <Eyebrow>Mission</Eyebrow>
          <h2 className="max-w-xl text-balance text-[2.35rem] leading-[1.05] font-semibold tracking-[-0.04em] text-ink md:text-[3.35rem]">
            Empowerment rooted in person-centered support and inclusive excellence.
          </h2>
          <p className="max-w-xl text-lg leading-8 text-ink-muted">{missionContent.intro}</p>

          <Card className="bg-[linear-gradient(135deg,rgba(62,109,200,0.08),rgba(255,255,255,0.92))]">
            <CardHeader className="flex-row items-start gap-4">
              <div className="rounded-full bg-white/85 p-3 text-brand-primary-strong shadow-ambient">
                <Landmark className="size-5" />
              </div>
              <div>
                <CardTitle className="text-lg">Trusted Vendor Relationship</CardTitle>
                <CardDescription className="mt-2">{missionContent.vendorNote}</CardDescription>
              </div>
            </CardHeader>
          </Card>
        </MotionReveal>

        <MotionStagger className="grid gap-6">
          <MotionStaggerItem direction="up">
            <Card className="overflow-hidden">
              <CardHeader className="border-b border-line/70 bg-white/80">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-brand-primary-soft p-3 text-brand-primary-strong">
                    <Target className="size-5" />
                  </div>
                  <div>
                    <CardTitle>Mission</CardTitle>
                    <CardDescription>Official organization mission statement</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-base leading-8 text-ink-muted">{missionContent.mission}</p>
              </CardContent>
            </Card>
          </MotionStaggerItem>

          <MotionStaggerItem direction="up">
            <Card className="overflow-hidden bg-[linear-gradient(135deg,rgba(80,216,144,0.08),rgba(255,255,255,1))]">
              <CardHeader className="border-b border-line/70">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-brand-secondary-soft p-3 text-[#0c6b3d]">
                    <Target className="size-5" />
                  </div>
                  <div>
                    <CardTitle>Vision</CardTitle>
                    <CardDescription>Official organization vision statement</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-base leading-8 text-ink-muted">{missionContent.vision}</p>
              </CardContent>
            </Card>
          </MotionStaggerItem>
        </MotionStagger>
      </div>
    </SectionShell>
  );
}
