import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/home/motion";

const audiences = [
  {
    eyebrow: "For Families",
    headline: "Navigate the\nSelf-Determination\nProgram with confidence.",
    body: "We guide individuals with disabilities and their families through every step of the IRC Self-Determination Program — from service planning and regional center coordination to ongoing advocacy and empowerment.",
    cta: "Explore Family Support",
    href: "/families",
    image: "/images/4.jpg.webp",
    imageAlt: "Youth and young adults with disabilities supported by Padres Con Poder",
    accent: "bg-brand-primary-strong",
    accentText: "text-brand-primary-strong",
    accentBg: "bg-brand-primary-soft/50",
  },
  {
    eyebrow: "For Businesses",
    headline: "Build inclusive\nworkplaces where\neveryone thrives.",
    body: "We partner with organizations across California to develop neurodiverse-friendly hiring practices, inclusive training programs, and DEI strategies that create real, measurable change in workplace culture.",
    cta: "Explore Business Services",
    href: "/businesses",
    image: "/images/2.jpg.webp",
    imageAlt: "Padres Con Poder team members collaborating",
    accent: "bg-[#006d40]",
    accentText: "text-[#006d40]",
    accentBg: "bg-brand-secondary-soft",
  },
];

export function AudienceSection() {
  return (
    <section className="bg-background py-20 md:py-28 lg:py-32">
      <div className="page-shell">
        <MotionReveal className="mb-14">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
            Who We Serve
          </p>
          <h2 className="mt-3 max-w-xl text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink md:text-[2.5rem]">
            One organization. Two clear paths to support.
          </h2>
        </MotionReveal>

        <MotionStagger className="grid gap-5 md:grid-cols-2">
          {audiences.map((a) => (
            <MotionStaggerItem key={a.href}>
              <Link
                href={a.href}
                className="group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-line/70 bg-white shadow-ambient transition-shadow duration-300 hover:shadow-ambient-lg"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden md:h-72">
                  <Image
                    src={a.image}
                    alt={a.imageAlt}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between gap-6 p-7 md:p-8">
                  <div className="space-y-4">
                    <span
                      className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] ${a.accentBg} ${a.accentText}`}
                    >
                      {a.eyebrow}
                    </span>
                    <h3 className="text-[1.45rem] font-semibold leading-[1.12] tracking-[-0.02em] text-ink whitespace-pre-line md:text-[1.6rem]">
                      {a.headline}
                    </h3>
                    <p className="text-[0.95rem] leading-7 text-ink-muted">{a.body}</p>
                  </div>

                  <div
                    className={`flex items-center gap-2 text-[0.85rem] font-semibold ${a.accentText} transition-gap duration-200 group-hover:gap-3`}
                  >
                    {a.cta}
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </section>
  );
}
