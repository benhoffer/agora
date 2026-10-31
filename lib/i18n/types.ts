export type Locale = "en" | "fr";

export type Persona = "citizen" | "government" | "ngo";

/**
 * One form field. The request forms are data, not markup, because the French
 * forms differ in substance — a commune picker keyed on the INSEE code, French
 * roles and population bands, an explicit-consent box — not only in wording.
 */
export type FieldSpec =
  | {
      kind: "text";
      name: string;
      label: string;
      type?: "text" | "email" | "tel";
      placeholder?: string;
      required?: boolean;
      full?: boolean;
    }
  | { kind: "select"; name: string; label: string; options: string[]; required?: boolean }
  | { kind: "textarea"; name: string; label: string }
  | { kind: "checkbox"; name: string; label: string; required?: boolean }
  | {
      kind: "commune";
      name: string;
      label: string;
      placeholder?: string;
      required?: boolean;
      /**
       * Require a suggestion to be picked, so the submission carries an INSEE
       * code rather than a typed name. Off where the organisation may not be
       * a commune (an EPCI, a département).
       */
      strict?: boolean;
    };

export interface Dict {
  locale: Locale;
  meta: { title: string; description: string; ogDescription: string };
  sidebar: {
    tagline: [string, string];
    nav: { top: string; solution: string; demo: string; team: string; join: string };
    cta: string;
    switchLabel: string;
  };
  hero: {
    eyebrow: string;
    subtitle: string;
    body: string;
    watchDemo: string;
    request: string;
  };
  solution: {
    mark: string;
    heading: string;
    intro: string;
    items: { num: string; title: string; body: string }[];
    footnote: string;
  };
  demo: {
    mark: string;
    heading: string;
    intro: string;
    promoLabel: string;
    walkthroughLabel: string;
    videoLanguageNote?: string;
    noVideo: string;
    ctaCitizen: string;
    ctaGovernment: string;
  };
  team: {
    mark: string;
    heading: string;
    members: { name: string; role: string }[];
  };
  join: {
    mark: string;
    heading: string;
    personas: { id: Persona; label: string; description: string }[];
    forms: Record<Persona, FieldSpec[]>;
    selectOne: string;
    submit: string;
    sending: string;
    error: string;
    communeRequired: string;
    communeNoResults: string;
    communeSearching: string;
    privacyNotice: string;
    privacyLinkText: string;
    successHeading: string;
    successBody: string;
    copyLink: string;
    linkCopied: string;
  };
  footer: {
    tagline: string;
    legal: string;
    privacy: string;
  };
  paths: { home: string; legal: string; privacy: string; other: string };
}
