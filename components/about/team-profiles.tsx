"use client";

import { Fragment, useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { ChevronDown, UserRound, X } from "lucide-react";
import { AnimatePresence, motion, useIsPresent, useReducedMotion } from "motion/react";

import { useLanguage } from "@/contexts/language-context";
import { teamMembers } from "@/lib/site";

const desktopOrder = ["lg:order-1", "lg:order-2", "lg:order-3"];

function BiographyTransition({ children, reducedMotion, onOpened, onClosed }: {
  children: ReactNode;
  reducedMotion: boolean;
  onOpened: () => void;
  onClosed: () => void;
}) {
  const isPresent = useIsPresent();

  return (
    <motion.div
      inert={!isPresent}
      aria-hidden={!isPresent || undefined}
      className="min-w-0 lg:order-4 lg:col-span-3"
      initial={{ height: 0, opacity: 0, marginBottom: 0, overflow: "hidden" }}
      animate={{
        height: "auto",
        opacity: 1,
        marginBottom: 24,
      }}
      exit={{ height: 0, opacity: 0, marginBottom: 0, overflow: "hidden" }}
      transition={{
        duration: reducedMotion ? 0 : 0.32,
        ease: [0.22, 1, 0.36, 1],
        opacity: { duration: reducedMotion ? 0 : 0.2 },
      }}
      onAnimationComplete={() => {
        if (isPresent) onOpened();
        else onClosed();
      }}
    >
      {children}
    </motion.div>
  );
}

function RichText({ text }: { text: string }) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index} className="font-semibold text-ink">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    ),
  );
}

function ProfilePortrait({
  photo,
  name,
  compact = false,
}: {
  photo: string | null;
  name: string;
  compact?: boolean;
}) {
  return (
    <div className={`shrink-0 border border-brand-primary/20 bg-white shadow-ambient ${compact ? "w-16 rounded-2xl p-1 sm:w-20" : "mx-auto w-44 rounded-[1.4rem] p-1.5 md:w-48"}`}>
      <div className={`relative aspect-[4/5] overflow-hidden bg-surface-muted ${compact ? "rounded-xl" : "rounded-2xl"}`}>
        {photo ? (
          <Image
            src={photo}
            alt={compact ? "" : name}
            fill
            className="object-cover object-top"
            sizes={compact ? "(min-width: 640px) 70px, 54px" : "(min-width: 768px) 178px, 162px"}
          />
        ) : (
          <div aria-hidden="true" className="flex h-full items-center justify-center bg-brand-primary-soft">
            <UserRound className={compact ? "size-6 text-brand-primary-strong" : "size-12 text-brand-primary-strong"} />
          </div>
        )}
      </div>
    </div>
  );
}

export function TeamProfiles() {
  const { t } = useLanguage();
  const team = t.about.team;
  const [activeBio, setActiveBio] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();
  const panels = useRef(new Map<string, HTMLElement>());
  const triggers = useRef(new Map<string, HTMLButtonElement>());

  useEffect(() => {
    if (!activeBio) return;
    const panel = panels.current.get(activeBio);
    panel?.focus({ preventScroll: true });
  }, [activeBio]);

  function closeBio(name: string) {
    setActiveBio(null);
    triggers.current.get(name)?.focus({ preventScroll: true });
  }

  return (
    <div className="-mb-6 grid items-stretch gap-x-6 lg:grid-cols-3">
      {teamMembers.map((member, index) => {
        const bioKey = "bioKey" in member ? member.bioKey : null;
        const photo = "photo" in member ? member.photo : null;
        const expanded = activeBio === member.name;
        const profileId = `team-profile-${index}`;
        const panelId = `team-biography-${index}`;

        return (
          <Fragment key={member.name}>
            <article
              aria-labelledby={profileId}
              className={`mb-6 flex min-w-0 flex-col rounded-[1.5rem] border bg-white p-6 shadow-ambient md:p-8 ${desktopOrder[index]} ${expanded ? "border-brand-primary" : "border-line/70"}`}
            >
              <ProfilePortrait photo={photo} name={member.name} />

              <div className="mt-6">
                <h3 id={profileId} className="text-xl font-semibold leading-snug tracking-[-0.01em] text-ink">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium leading-6 text-brand-primary-strong">
                  {team.roles[member.roleKey]}
                </p>
              </div>

              {bioKey ? (
                <>
                  <p className="mt-4 text-base leading-7 text-ink-muted">
                    {team.summaries[bioKey]}
                  </p>
                  <div className="mt-auto pt-6">
                    <button
                      ref={(element) => {
                        if (element) triggers.current.set(member.name, element);
                        else triggers.current.delete(member.name);
                      }}
                      type="button"
                      aria-expanded={expanded}
                      aria-controls={panelId}
                      onClick={() => expanded ? closeBio(member.name) : setActiveBio(member.name)}
                      className="flex min-h-11 w-full cursor-pointer items-center justify-between gap-3 rounded-xl border border-brand-primary/25 bg-brand-primary-soft/30 px-4 py-3 text-sm font-semibold text-brand-primary-strong transition-colors duration-150 hover:border-brand-primary hover:bg-brand-primary-soft motion-reduce:transition-none"
                    >
                      <span>
                        {expanded ? team.closeBio : team.viewBio}
                        <span className="sr-only">: {member.name}</span>
                      </span>
                      <ChevronDown aria-hidden="true" className={`size-4 shrink-0 transition-transform duration-200 motion-reduce:transition-none ${expanded ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                </>
              ) : (
                <p className="mt-auto pt-6 text-sm leading-6 text-ink-muted">{team.bioPending}</p>
              )}
            </article>

            <AnimatePresence initial={false}>
              {bioKey && expanded ? (
                <BiographyTransition
                  key={panelId}
                  reducedMotion={Boolean(reducedMotion)}
                  onOpened={() => panels.current.get(member.name)?.scrollIntoView({
                    behavior: reducedMotion ? "instant" : "smooth",
                    block: "start",
                  })}
                  onClosed={() => {
                    const trigger = triggers.current.get(member.name);
                    // Scroll after the panel collapses, using its final layout.
                    if (trigger && document.activeElement === trigger) {
                      trigger.scrollIntoView({
                        behavior: reducedMotion ? "instant" : "smooth",
                        block: "center",
                      });
                    }
                  }}
                >
                  <section
                    ref={(element) => {
                      if (element) panels.current.set(member.name, element);
                      else panels.current.delete(member.name);
                    }}
                    id={panelId}
                    aria-labelledby={`${panelId}-title`}
                    tabIndex={-1}
                    onKeyDown={(event) => {
                      if (event.key === "Escape") {
                        event.preventDefault();
                        closeBio(member.name);
                      }
                    }}
                    className="scroll-mt-28 rounded-[1.5rem] border border-brand-primary/20 bg-white shadow-ambient focus-visible:outline-offset-[-2px]"
                  >
                    <div className="rounded-t-[1.45rem] border-b border-brand-primary/15 bg-brand-primary-soft/25 px-6 py-7 md:px-10 md:py-8">
                      <div className="mx-auto flex max-w-[65ch] items-center gap-4 sm:gap-6">
                        <ProfilePortrait photo={photo} name={member.name} compact />
                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary-strong">
                            {team.biography}
                          </p>
                          <h3 id={`${panelId}-title`} className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink md:text-3xl">
                            {member.name}
                          </h3>
                          <p className="mt-2 text-sm font-medium leading-6 text-brand-primary-strong">
                            {team.roles[member.roleKey]}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="px-6 py-8 md:px-10 md:py-10">
                      <div className="mx-auto max-w-[65ch]">
                        <div className="space-y-8">
                          {team.bios[bioKey].map(({ title, text }, paragraphIndex) => (
                            <div key={paragraphIndex}>
                              <h4 className="border-l-2 border-brand-primary/45 pl-3 text-lg font-semibold leading-7 tracking-[-0.01em] text-ink">
                                {title}
                              </h4>
                              <p className="mt-3 text-base leading-8 text-ink-muted">
                                <RichText text={text} />
                              </p>
                            </div>
                          ))}
                        </div>
                        <button
                          type="button"
                          onClick={() => closeBio(member.name)}
                          className="mt-8 inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-xl border border-brand-primary/20 bg-brand-primary-soft/25 px-4 py-3 text-sm font-semibold text-brand-primary-strong transition-colors hover:bg-brand-primary-soft motion-reduce:transition-none"
                        >
                          <X aria-hidden="true" className="size-4" />
                          {team.closeBio}
                          <span className="sr-only">: {member.name}</span>
                        </button>
                      </div>
                    </div>
                  </section>
                </BiographyTransition>
              ) : null}
            </AnimatePresence>
          </Fragment>
        );
      })}
    </div>
  );
}
