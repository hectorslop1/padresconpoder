"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Mail } from "lucide-react";

import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { MotionReveal, MotionStagger, MotionStaggerItem } from "@/components/home/motion";
import { PathNav } from "@/components/paths/path-nav";
import { ContactForm } from "@/components/contact/contact-form";
import { siteContact } from "@/lib/site";
import { paths, type PathKey } from "@/lib/paths";

/**
 * The "Get Started" copy names the mailbox mid-sentence. Rather than rewording
 * it, turn that one occurrence into a link and leave the sentence intact.
 */
function IntroWithEmail({ text }: { text: string }) {
  const [before, ...rest] = text.split(siteContact.email);
  if (rest.length === 0) return <>{text}</>;

  return (
    <>
      {before}
      <a
        href={siteContact.emailHref}
        className="font-semibold text-brand-primary-strong underline underline-offset-4"
      >
        {siteContact.email}
      </a>
      {rest.join(siteContact.email)}
    </>
  );
}

/**
 * Renders one step of a visitor path: the sub-navigation rail, the content, and
 * the pager to the next short read. Every path page in the site goes through
 * here so they stay visually identical and the copy lives only in the i18n files.
 *
 * Takes the path *key* rather than the config object: the config holds selector
 * functions, which cannot cross the server/client boundary as props.
 */
export function PathPage({ pathKey, href }: { pathKey: PathKey; href: string }) {
  const { t } = useLanguage();
  const path = paths[pathKey];

  const index = path.steps.findIndex((s) => s.href === href);
  const step = path.steps[index];
  const content = step.select(t);
  const previous = index > 0 ? path.steps[index - 1] : undefined;
  const next = index < path.steps.length - 1 ? path.steps[index + 1] : undefined;
  const pathLabel = t[path.key].pathLabel;

  return (
    <section className="bg-background py-12 md:py-16 lg:py-20">
      <div className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-16">
          <PathNav path={path} currentHref={href} />

          <article className="min-w-0 max-w-2xl">
            <MotionReveal>
              <Link
                href={path.root}
                className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-ink-muted transition-colors duration-200 hover:text-brand-primary-strong"
              >
                <ArrowLeft className="size-3.5" />
                {pathLabel}
              </Link>

              <p className="mt-8 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-brand-primary-strong">
                {content.eyebrow}
              </p>
              <h1 className="mt-3 text-[2.1rem] font-semibold leading-[1.06] tracking-[-0.035em] text-ink md:text-[2.75rem]">
                {content.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-ink-muted">
                <IntroWithEmail text={content.intro} />
              </p>
            </MotionReveal>

            {content.listIntro && (
              <MotionReveal>
                <p className="mt-8 font-semibold leading-8 text-ink">{content.listIntro}</p>
              </MotionReveal>
            )}

            {/* Plain bullet list */}
            {step.variant === "list" && content.bullets && (
              <MotionStagger className="mt-6 space-y-3.5">
                {content.bullets.map((bullet, i) => (
                  <MotionStaggerItem key={i}>
                    <div className="flex gap-3.5">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-secondary-soft">
                        <Check className="size-3.5 text-[#006d40]" strokeWidth={3} />
                      </span>
                      <p className="text-[1rem] leading-7 text-ink-muted">{bullet}</p>
                    </div>
                  </MotionStaggerItem>
                ))}
              </MotionStagger>
            )}

            {/* Titled bullets — the five SDP principles */}
            {step.variant === "list" && content.items && (
              <MotionStagger className="mt-6 space-y-3.5">
                {content.items.map((item, i) => (
                  <MotionStaggerItem key={i}>
                    <div className="flex gap-3.5">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-secondary-soft">
                        <Check className="size-3.5 text-[#006d40]" strokeWidth={3} />
                      </span>
                      <p className="text-[1rem] leading-7 text-ink-muted">
                        <span className="font-semibold text-ink">{item.title}</span>
                        {item.text}
                      </p>
                    </div>
                  </MotionStaggerItem>
                ))}
              </MotionStagger>
            )}

            {/* Numbered process */}
            {step.variant === "steps" && content.items && (
              <MotionStagger className="mt-8">
                <ol className="space-y-5">
                  {content.items.map((item, i) => (
                    <MotionStaggerItem key={i}>
                      <li className="flex gap-5 rounded-[1.25rem] border border-line/70 bg-white p-5 shadow-ambient transition-all duration-200 hover:-translate-y-0.5 hover:shadow-ambient-lg md:p-6">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-primary-strong text-[0.9rem] font-semibold text-white">
                          {i + 1}
                        </span>
                        <p className="text-[1rem] leading-7 text-ink-muted">
                          <span className="font-semibold text-ink">{item.title}</span>
                          {item.text}
                        </p>
                      </li>
                    </MotionStaggerItem>
                  ))}
                </ol>
              </MotionStagger>
            )}

            {/* Service cards */}
            {step.variant === "cards" && content.items && (
              <MotionStagger className="mt-8 grid gap-4 sm:grid-cols-2">
                {content.items.map((item, i) => (
                  <MotionStaggerItem key={i}>
                    <div className="flex h-full flex-col rounded-[1.25rem] border border-line/70 bg-white p-6 shadow-ambient transition-all duration-200 hover:-translate-y-0.5 hover:shadow-ambient-lg">
                      <h2 className="text-[1.05rem] font-semibold leading-snug tracking-[-0.01em] text-ink">
                        {item.title}
                      </h2>
                      <p className="mt-2.5 text-[0.9rem] leading-7 text-ink-muted">{item.text}</p>
                    </div>
                  </MotionStaggerItem>
                ))}
              </MotionStagger>
            )}

            {content.outro && (
              <MotionReveal>
                <p className="mt-8 rounded-[1.25rem] border border-brand-secondary/25 bg-brand-secondary-soft/60 p-5 text-[0.98rem] leading-7 text-ink md:p-6">
                  {content.outro}
                </p>
              </MotionReveal>
            )}

            {/* Get Started pages carry the contact form itself */}
            {step.variant === "cta" && (
              <MotionReveal className="mt-8 space-y-6">
                <ContactForm defaultType={path.key === "families" ? "family" : "business"} />
                <div className="flex flex-wrap items-center gap-3 rounded-[1.25rem] border border-line/70 bg-surface-muted px-5 py-4">
                  <Mail className="size-4 shrink-0 text-brand-primary" />
                  <span className="text-[0.9rem] text-ink-muted">
                    {content.emailLabel ?? t.actions.emailUs}
                  </span>
                  <a
                    href={siteContact.emailHref}
                    className="text-[0.9rem] font-semibold text-brand-primary-strong underline-offset-4 hover:underline"
                  >
                    {siteContact.email}
                  </a>
                </div>
              </MotionReveal>
            )}

            {/* Pager */}
            <nav
              aria-label={pathLabel}
              className="mt-14 flex flex-col gap-3 border-t border-line/70 pt-8 sm:flex-row sm:items-center sm:justify-between"
            >
              {previous ? (
                <Link
                  href={previous.href}
                  className="group inline-flex items-center gap-2 text-[0.9rem] text-ink-muted transition-colors duration-200 hover:text-brand-primary-strong"
                >
                  <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" />
                  <span>
                    <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink-muted/70">
                      {t.actions.previous}
                    </span>
                    {previous.select(t).navLabel}
                  </span>
                </Link>
              ) : (
                <span />
              )}

              {next && (
                <Button
                  asChild
                  className="rounded-full shadow-ambient transition-all duration-200 hover:-translate-y-0.5 hover:shadow-ambient-lg active:translate-y-0 active:scale-[0.98] sm:ml-auto"
                >
                  <Link href={next.href}>
                    {t.actions.next}: {next.select(t).navLabel}
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
              )}
            </nav>
          </article>
        </div>
      </div>
    </section>
  );
}
