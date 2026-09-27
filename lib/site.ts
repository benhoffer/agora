import type { Metadata } from "next";
import type { Dict } from "./i18n/types";

export const SITE_URL = "https://agora.direct-democracy.dev";

/**
 * Publisher details for the legal notice (LCEN art. 6) and privacy policy.
 *
 * `address` must be the LLC's registered address before this ships: French
 * law requires the publisher's address on the mentions légales, and the page
 * renders a visible placeholder until it is set.
 */
export const PUBLISHER = {
  name: "The Agora Project LLC",
  form: {
    en: "limited liability company organized under the laws of Wyoming (United States)",
    fr: "société à responsabilité limitée de droit de l'État du Wyoming (États-Unis)",
  },
  address: null as string | null,
  email: "agora@direct-democracy.dev",
  director: "Benjamin Hoffer",
};

export const HOST = {
  name: "Vercel Inc.",
  address: {
    en: "440 N Barranca Ave #4133, Covina, CA 91723, United States",
    fr: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
  },
  url: "https://vercel.com",
};

/** Page metadata with hreflang alternates, shared by both locales' layouts. */
export function siteMetadata(t: Dict): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: t.paths.home,
      languages: { en: "/", fr: "/fr", "x-default": "/" },
    },
    openGraph: {
      title: "AGORA",
      description: t.meta.ogDescription,
      type: "website",
      locale: t.locale === "fr" ? "fr_FR" : "en_US",
      alternateLocale: t.locale === "fr" ? ["en_US"] : ["fr_FR"],
      url: t.paths.home,
    },
    icons: {
      icon: "/icon.png",
      apple: "/apple-touch-icon.png",
    },
  };
}
