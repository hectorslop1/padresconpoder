/**
 * Single source of truth for the organisation's contact details and outbound
 * links. Everything user-facing reads from here so a change to the mailbox or a
 * social handle is a one-line edit rather than a hunt across components.
 */

export const siteContact = {
  organisation: "Padres Con Poder Inc",
  // Per the Website Content & Workflow Plan (section 5.3). Pending confirmation
  // from Javier that this mailbox is live before launch.
  email: "info@padresconpoder.com",
  emailHref: "mailto:info@padresconpoder.com",
  phone: "+1 951-737-0951",
  phoneHref: "tel:+19517370951",
  facebook: "https://www.facebook.com/capacitate365",
  facebookHandle: "capacitate365",
  instagram: "https://www.instagram.com/padres_con_poder",
  instagramHandle: "@padres_con_poder",
} as const;

/**
 * Outside resources listed on the Resources page (section 5.2 of the plan).
 * The DDS links are the long-standing official URLs; the Ives Torres Foundation
 * links were left as placeholders in the source document and stay hidden behind
 * `featureFlags.showIvesTorresResources` until they are confirmed.
 */
export const externalResources = {
  dds: "https://www.dds.ca.gov/",
  regionalCenterLocator: "https://www.dds.ca.gov/rc/",
  ivesTorresWebsite: "",
  ivesTorresFacebook: "",
} as const;

export const featureFlags = {
  showIvesTorresResources: false,
} as const;

/**
 * The three named facilitators listed in sections 5.1 and 5.3 of the plan.
 * Members with a `bioKey` also have a long-form biography on the About page,
 * rendered from `lib/i18n/about.ts` so it stays available in both languages.
 */
export const teamMembers = [
  { name: "Javier Torres", roleKey: "president", photo: "/team/javier-torres.jpg", bioKey: "javier" },
  { name: "Isabel Torres", roleKey: "facilitator", photo: "/team/isabel-torres.jpg", bioKey: "isabel" },
  { name: "Araceli Gil", roleKey: "facilitator" },
] as const;
