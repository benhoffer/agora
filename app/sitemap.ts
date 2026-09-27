import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const PAGES: { en: string; fr: string; priority: number }[] = [
  { en: "/", fr: "/fr", priority: 1 },
  { en: "/legal", fr: "/fr/mentions-legales", priority: 0.2 },
  { en: "/privacy", fr: "/fr/confidentialite", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap((p) =>
    (["en", "fr"] as const).map((lang) => ({
      url: SITE_URL + p[lang],
      priority: p.priority,
      alternates: { languages: { en: SITE_URL + p.en, fr: SITE_URL + p.fr } },
    }))
  );
}
