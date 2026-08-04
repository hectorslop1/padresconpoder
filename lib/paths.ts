import type { Translations } from "./translations";

/**
 * The two visitor paths from the Website Content & Workflow Plan. Each path is a
 * short ordered sequence of pages ending in "Get Started", and this file is the
 * single place that knows that order — the sub-navigation, the pager, and the
 * path index pages all read from here.
 */

export type PathPageContent = {
  navLabel: string;
  summary: string;
  eyebrow: string;
  title: string;
  intro: string;
  listIntro?: string;
  bullets?: readonly string[];
  items?: readonly { title: string; text: string }[];
  outro?: string;
  /** Present on "Get Started" pages only. */
  formCta?: string;
  emailLabel?: string;
  meta: { title: string; description: string };
};

/** How the body of a page is laid out. */
export type PathVariant = "list" | "steps" | "cards" | "cta";

export type PathStep = {
  href: string;
  variant: PathVariant;
  select: (t: Translations) => PathPageContent;
};

export type PathKey = "families" | "businesses";

export type PathConfig = {
  key: PathKey;
  root: string;
  steps: PathStep[];
};

export const familiesPath: PathConfig = {
  key: "families",
  root: "/families",
  steps: [
    {
      href: "/families/lanterman-act",
      variant: "list",
      select: (t) => t.families.pages.lantermanAct,
    },
    {
      href: "/families/self-determination-program",
      variant: "list",
      select: (t) => t.families.pages.sdp,
    },
    {
      href: "/families/how-it-works",
      variant: "steps",
      select: (t) => t.families.pages.howItWorks,
    },
    {
      href: "/families/independent-facilitator",
      variant: "list",
      select: (t) => t.families.pages.facilitator,
    },
    {
      href: "/families/get-started",
      variant: "cta",
      select: (t) => t.families.pages.getStarted,
    },
  ],
};

export const businessesPath: PathConfig = {
  key: "businesses",
  root: "/businesses",
  steps: [
    {
      href: "/businesses/why-hire",
      variant: "list",
      select: (t) => t.businesses.pages.whyHire,
    },
    {
      href: "/businesses/accommodations",
      variant: "list",
      select: (t) => t.businesses.pages.accommodations,
    },
    {
      href: "/businesses/inclusive-policies",
      variant: "list",
      select: (t) => t.businesses.pages.inclusivePolicies,
    },
    {
      href: "/businesses/services",
      variant: "cards",
      select: (t) => t.businesses.pages.services,
    },
    {
      href: "/businesses/get-started",
      variant: "cta",
      select: (t) => t.businesses.pages.getStarted,
    },
  ],
};

export const paths: Record<PathKey, PathConfig> = {
  families: familiesPath,
  businesses: businessesPath,
};

/** Metadata for a step page, read at build time from the English copy. */
export function stepMetadata(path: PathConfig, href: string, t: Translations) {
  const step = path.steps.find((s) => s.href === href);
  return step ? step.select(t).meta : undefined;
}
