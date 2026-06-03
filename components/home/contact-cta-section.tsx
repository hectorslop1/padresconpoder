import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";

import { FacebookIcon, InstagramIcon } from "@/components/ui/social-icons";

import { Button } from "@/components/ui/button";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/home/motion";

export function ContactCtaSection() {
  return (
    <section className="bg-background py-20 md:py-28 lg:py-32">
      <div className="page-shell">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)] lg:gap-20 lg:items-center">
          {/* Left */}
          <MotionReveal direction="left" className="space-y-8">
            <div className="space-y-4">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
                Get Support
              </p>
              <h2 className="max-w-xl text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink md:text-[2.75rem]">
                Ready to take the next step?
              </h2>
              <p className="max-w-lg text-lg leading-8 text-ink-muted">
                Whether you are a family navigating the Self-Determination Program or a
                business building a more inclusive workplace, we are here to walk
                alongside you.
              </p>
            </div>
            <Button asChild size="lg" className="rounded-full shadow-ambient-lg">
              <Link href="/get-support">
                Start the Conversation
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </MotionReveal>

          {/* Right — contact details */}
          <MotionStagger className="space-y-4">
            <MotionStaggerItem>
              <a
                href="tel:+19517370951"
                className="flex items-center gap-4 rounded-2xl border border-line/70 bg-white px-6 py-5 shadow-ambient transition-shadow hover:shadow-ambient-lg"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-primary-soft">
                  <Phone className="size-5 text-brand-primary-strong" />
                </div>
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                    Phone
                  </p>
                  <p className="mt-0.5 font-semibold text-ink">+1 951-737-0951</p>
                </div>
              </a>
            </MotionStaggerItem>

            <MotionStaggerItem>
              <a
                href="mailto:info@ivestorres.org"
                className="flex items-center gap-4 rounded-2xl border border-line/70 bg-white px-6 py-5 shadow-ambient transition-shadow hover:shadow-ambient-lg"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-primary-soft">
                  <Mail className="size-5 text-brand-primary-strong" />
                </div>
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                    Email
                  </p>
                  <p className="mt-0.5 font-semibold text-ink">info@ivestorres.org</p>
                </div>
              </a>
            </MotionStaggerItem>

            <MotionStaggerItem>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/capacitate365"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center gap-4 rounded-2xl border border-line/70 bg-white px-6 py-5 shadow-ambient transition-shadow hover:shadow-ambient-lg"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-primary-soft">
                    <FacebookIcon className="size-5 text-brand-primary-strong" />
                  </div>
                  <div>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                      Facebook
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-ink">capacitate365</p>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/padres_con_poder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center gap-4 rounded-2xl border border-line/70 bg-white px-6 py-5 shadow-ambient transition-shadow hover:shadow-ambient-lg"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-secondary-soft">
                    <InstagramIcon className="size-5 text-[#006d40]" />
                  </div>
                  <div>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                      Instagram
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-ink">@padres_con_poder</p>
                  </div>
                </a>
              </div>
            </MotionStaggerItem>
          </MotionStagger>
        </div>
      </div>
    </section>
  );
}
