"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { useLanguage } from "@/contexts/language-context";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/home/motion";

export function AudienceSection() {
  const { t } = useLanguage();
  const a = t.home.audience;

  const audiences = [
    {
      eyebrow: a.families.eyebrow,
      headline: a.families.headline,
      body: a.families.body,
      cta: a.families.cta,
      href: "/families",
      image: "/images/4.jpg.webp",
      imageAlt: "Youth and young adults with disabilities supported by Padres Con Poder",
      accentText: "text-brand-primary-strong",
      accentBg: "bg-brand-primary-soft/50",
    },
    {
      eyebrow: a.businesses.eyebrow,
      headline: a.businesses.headline,
      body: a.businesses.body,
      cta: a.businesses.cta,
      href: "/businesses",
      image: "/images/2.jpg.webp",
      imageAlt: "Padres Con Poder team members collaborating",
      accentText: "text-[#006d40]",
      accentBg: "bg-brand-secondary-soft",
    },
  ];

  return (
    <section className="bg-background py-20 md:py-28 lg:py-32">
      <div className="page-shell">
        <MotionReveal className="mb-14">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ink-muted">
            {a.eyebrow}
          </p>
          <h2 className="mt-3 max-w-xl text-[2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-ink md:text-[2.5rem]">
            {a.headline}
          </h2>
        </MotionReveal>

        <MotionStagger className="grid gap-5 md:grid-cols-2">
          {audiences.map((aud) => (
            <MotionStaggerItem key={aud.href}>
              <Link
                href={aud.href}
                className="group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-line/70 bg-white shadow-ambient transition-all duration-300 hover:-translate-y-1 hover:shadow-ambient-lg"
              >
                <div className="relative h-64 overflow-hidden md:h-72">
                  <Image
                    src={aud.image}
                    alt={aud.imageAlt}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col justify-between gap-6 p-7 md:p-8">
                  <div className="space-y-4">
                    <span
                      className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] ${aud.accentBg} ${aud.accentText}`}
                    >
                      {aud.eyebrow}
                    </span>
                    <h3 className="text-[1.45rem] font-semibold leading-[1.12] tracking-[-0.02em] text-ink whitespace-pre-line md:text-[1.6rem]">
                      {aud.headline}
                    </h3>
                    <p className="text-[0.95rem] leading-7 text-ink-muted">{aud.body}</p>
                  </div>

                  <div
                    className={`flex items-center gap-2 text-[0.85rem] font-semibold ${aud.accentText}`}
                  >
                    {aud.cta}
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1.5" />
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
