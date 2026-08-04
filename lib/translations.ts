import { about } from "./i18n/about";
import { businesses } from "./i18n/businesses";
import { common } from "./i18n/common";
import { contact } from "./i18n/contact";
import { families } from "./i18n/families";
import { home } from "./i18n/home";
import { resources } from "./i18n/resources";

export type Lang = "en" | "es";

/**
 * Name of the cookie holding the visitor's language choice.
 *
 * It lives here rather than in the language context because the root layout is a
 * Server Component: values exported from a `"use client"` module reach the server
 * as client references, not as their actual value.
 */
export const LANG_COOKIE = "pcp-lang";

const en = {
  siteMeta: common.en.siteMeta,
  nav: common.en.nav,
  actions: common.en.actions,
  footer: common.en.footer,
  home: home.en,
  families: families.en,
  businesses: businesses.en,
  about: about.en,
  resources: resources.en,
  contact: contact.en,
};

// Typing `es` as `typeof en` is what guarantees both languages stay in lockstep:
// a key added to English fails the build until Spanish has it too.
const es: typeof en = {
  siteMeta: common.es.siteMeta,
  nav: common.es.nav,
  actions: common.es.actions,
  footer: common.es.footer,
  home: home.es,
  families: families.es,
  businesses: businesses.es,
  about: about.es,
  resources: resources.es,
  contact: contact.es,
};

export const translations: Record<Lang, typeof en> = { en, es };
export type Translations = typeof en;
