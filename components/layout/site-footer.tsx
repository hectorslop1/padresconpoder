import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

import { FacebookIcon, InstagramIcon } from "@/components/ui/social-icons";

import { Separator } from "@/components/ui/separator";

const navLinks = [
  { label: "Families", href: "/families" },
  { label: "Businesses", href: "/businesses" },
  { label: "About", href: "/about" },
  { label: "Get Support", href: "/get-support" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="page-shell py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.7fr)_minmax(0,1fr)]">
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
                Padres Con Poder
              </p>
              <p className="max-w-sm text-[0.94rem] leading-7 text-white/50">
                Empowering individuals with disabilities, supporting families through the
                Self-Determination Program, and helping businesses build inclusive workplaces
                across California.
              </p>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/35">
              Navigate
            </p>
            <div className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[0.94rem] text-white/55 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-white/35">
              Contact
            </p>
            <div className="mt-5 space-y-4">
              <a
                href="tel:+19517370951"
                className="flex items-center gap-3 text-[0.94rem] text-white/55 transition-colors hover:text-white"
              >
                <Phone className="size-4 shrink-0 text-white/30" />
                +1 951-737-0951
              </a>
              <a
                href="mailto:info@ivestorres.org"
                className="flex items-center gap-3 text-[0.94rem] text-white/55 transition-colors hover:text-white"
              >
                <Mail className="size-4 shrink-0 text-white/30" />
                info@ivestorres.org
              </a>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://www.facebook.com/capacitate365"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Padres Con Poder on Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/45 transition-colors hover:border-white/22 hover:text-white"
                >
                  <FacebookIcon className="size-4" />
                </a>
                <a
                  href="https://www.instagram.com/padres_con_poder"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Padres Con Poder on Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/45 transition-colors hover:border-white/22 hover:text-white"
                >
                  <InstagramIcon className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/8" />

        <div className="flex flex-col gap-2 text-[0.8rem] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Padres Con Poder. All rights reserved.</p>
          <p>Trusted Inland Regional Center Vendor · California</p>
        </div>
      </div>
    </footer>
  );
}
