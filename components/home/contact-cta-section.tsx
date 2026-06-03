import { Mail, Phone, Waypoints } from "lucide-react";

import { contactContent } from "@/components/home/content";
import { Eyebrow } from "@/components/home/eyebrow";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/home/motion";
import { SectionShell } from "@/components/home/section-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const icons = [Phone, Mail, Waypoints, Waypoints];

export function ContactCtaSection() {
  return (
    <SectionShell id="contact">
      <div className="grid gap-8 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
        <MotionReveal direction="left" className="space-y-6">
          <Eyebrow tone="secondary">Contact</Eyebrow>
          <h2 className="max-w-xl text-balance text-[2.3rem] leading-[1.06] font-semibold tracking-[-0.04em] text-ink md:text-[3.1rem]">
            Start the conversation with the right support path.
          </h2>
          <p className="max-w-xl text-lg leading-8 text-ink-muted">{contactContent.intro}</p>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="bg-[linear-gradient(135deg,rgba(62,109,200,0.08),rgba(255,255,255,1))]">
              <CardHeader>
                <CardTitle className="text-[1.15rem]">Families seeking SDP support</CardTitle>
                <CardDescription>
                  Reach out for guidance with service planning, resource coordination, and
                  ongoing support.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full justify-center" disabled>
                  TODO: Add family intake destination
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-[linear-gradient(135deg,rgba(80,216,144,0.12),rgba(255,255,255,1))]">
              <CardHeader>
                <CardTitle className="text-[1.15rem]">Businesses seeking consulting</CardTitle>
                <CardDescription>
                  Reach out for coaching, inclusive workplace training, and strategy
                  support.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full justify-center" disabled>
                  TODO: Add business inquiry destination
                </Button>
              </CardContent>
            </Card>
          </div>
        </MotionReveal>

        <MotionStagger className="grid gap-4 md:grid-cols-2">
          {contactContent.contactItems.map((item, index) => {
            const Icon = icons[index];

            return (
              <MotionStaggerItem key={item.label}>
                <Card className="h-full">
                  <CardHeader className="flex-row items-start gap-4">
                    <div className="rounded-full bg-brand-primary-soft p-3 text-brand-primary-strong">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{item.label}</CardTitle>
                      <CardDescription className="mt-2 font-mono text-sm">
                        {item.value}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </MotionStaggerItem>
            );
          })}
        </MotionStagger>
      </div>
    </SectionShell>
  );
}
