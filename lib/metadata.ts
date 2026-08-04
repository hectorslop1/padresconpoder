import type { Metadata } from "next";
import { cookies } from "next/headers";

import { LANG_COOKIE, translations, type Lang, type Translations } from "./translations";

type MetaCopy = { title: string; description: string };

/** The visitor's language, resolved server-side from the cookie. */
export async function currentLang(): Promise<Lang> {
  const cookieStore = await cookies();
  return cookieStore.get(LANG_COOKIE)?.value === "es" ? "es" : "en";
}

/**
 * Builds page metadata in the visitor's language. Titles and descriptions are
 * part of what a Spanish-speaking visitor reads, so they follow the toggle too.
 */
export async function localizedMetadata(
  pick: (t: Translations) => MetaCopy | undefined,
): Promise<Metadata> {
  const lang = await currentLang();
  const meta = pick(translations[lang]) ?? translations[lang].siteMeta;

  return { title: meta.title, description: meta.description };
}
