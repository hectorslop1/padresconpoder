"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import { useLanguage } from "@/contexts/language-context";
import { FacebookGradientIcon, InstagramGradientIcon } from "@/components/ui/social-icons";
import { Separator } from "@/components/ui/separator";
import { siteContact } from "@/lib/site";

export function SiteFooter() {
  const { t } = useLanguage();

  // The two visitor paths.
  const pathLinks = [
    { label: t.nav.families, href: "/families" },
    { label: t.nav.businesses, href: "/businesses" },
  ];

  // The shared pages the plan requires on every page of the site.
  const sharedLinks = [
    { label: t.nav.about, href: "/about" },
    { label: t.nav.resources, href: "/resources" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <footer className="bg-[#111827] text-white">
      <div className="page-shell py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.6fr)_minmax(0,0.6fr)_minmax(0,1fr)]">
          {/* Brand */}
          <div className="space-y-5">
            <Image
              src="/brand/padres-con-poder-logo-white.png"
              alt="Padres Con Poder"
              width={56}
              height={56}
              className="h-14 w-14 object-contain"
            />
            <div className="space-y-3">
              <p className="text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-white/45">
                {siteContact.organisation}
              </p>
              <p className="max-w-sm text-[0.94rem] leading-7 text-white/50">
                {t.footer.description}
              </p>
            </div>
          </div>

          {/* Paths */}
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/35">
              {t.footer.explore}
            </p>
            <div className="mt-5 flex flex-col gap-3">
              {pathLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[0.94rem] text-white/55 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Shared pages — About, Resources, Contact on every page */}
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/35">
              {t.footer.navigate}
            </p>
            <div className="mt-5 flex flex-col gap-3">
              {sharedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[0.94rem] text-white/55 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/35">
              {t.footer.contact}
            </p>
            <div className="mt-5 space-y-4">
              <a
                href={siteContact.emailHref}
                className="flex items-center gap-3 text-[0.94rem] text-white/55 transition-colors duration-200 hover:text-white"
              >
                <Mail className="size-4 shrink-0 text-white/30" />
                {siteContact.email}
              </a>
              <a
                href={siteContact.phoneHref}
                className="flex items-center gap-3 text-[0.94rem] text-white/55 transition-colors duration-200 hover:text-white"
              >
                <Phone className="size-4 shrink-0 text-white/30" />
                {siteContact.phone}
              </a>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={siteContact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Padres Con Poder on Facebook"
                  className="transition-all duration-200 hover:scale-110 hover:opacity-90"
                >
                  <FacebookGradientIcon className="h-9 w-9" />
                </a>
                <a
                  href={siteContact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Padres Con Poder on Instagram"
                  className="transition-all duration-200 hover:scale-110 hover:opacity-90"
                >
                  <InstagramGradientIcon className="h-9 w-9" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/8" />

        <div className="flex flex-col gap-2 text-[0.8rem] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.rights}</p>
          <p>{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
