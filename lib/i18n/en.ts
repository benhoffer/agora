import type { Dict } from "./types";

export const en: Dict = {
  locale: "en",
  meta: {
    title: "AGORA — Gold Standard Direct Democracy Infrastructure",
    description:
      "We build efficient, secure, and collaborative governance infrastructure for any institution—from city councils and corporate boards to neighborhood unions.",
    ogDescription: "Gold Standard Direct Democracy Infrastructure.",
  },
  sidebar: {
    tagline: ["Civic infrastructure", "for direct democracy"],
    nav: { top: "Manifest", solution: "Platform", demo: "Demo", team: "Expertise", join: "Request" },
    cta: "Request AGORA",
    switchLabel: "Français",
  },
  hero: {
    eyebrow: "Deliberative · Direct · Deep Democracy",
    subtitle: "Gold standard civic infrastructure for democracy.",
    body: "Democracies are eroding while authoritarian power consolidates, and the newest technology is turned toward surveillance and suppression rather than autonomy. AGORA turns those same tools back toward communities — secure, sovereign infrastructure that citizens read, write, and ratify, on a server they own. Representative democracy has only ever given the public a vote — AGORA proposes to give communities the real power: authorship.",
    watchDemo: "Watch the Demo",
    request: "Request AGORA",
  },
  solution: {
    mark: "§ 02 — The Platform",
    heading: "The infrastructure of deep democracy.",
    intro:
      "A secure, community-owned platform for proposals, petitions, discussion, and participatory research — in short, sophisticated direct-democratic governance, with government-grade security, audit, and export built in for ease of adoption.",
    items: [
      {
        num: "01",
        title: "Understand & Author",
        body: "Translate any policy across reading levels — 5th grade to graduate legal. Ask questions in plain language and get cited answers grounded in the actual text. Side-by-side, color-coded diffs between any two policies, with pre-publication conflict checks against inherited law.",
      },
      {
        num: "02",
        title: "Petition & Discuss",
        body: "Threaded comments anchored to specific clauses. Identity-verified participation — no bots. Email-verified, rate-limited petition signatures.",
      },
      {
        num: "03",
        title: "Govern at Every Scale",
        body: "Collective action problems are best solved by the people, at the scale of the solution — be it town, state, or national. Community politics lets us organize and develop better answers. Nested organizations with automatic law inheritance — neighborhoods inside towns, towns inside states. Hash-chained, tamper-evident audit log. One-click FOIA-grade export. Role-gated administration across owner, admin, moderator, member, and viewer.",
      },
    ],
    footnote:
      "Sovereign local deployment — all civic data stays in the municipality's own database. Local LLM inference via Ollama, with an optional Claude API hybrid mode.",
  },
  demo: {
    mark: "§ 03 — In Action",
    heading: "See it, then see how it works.",
    intro:
      "Why AGORA exists, and what it looks like end to end — analysis, deliberation, petition, and export, in under five minutes.",
    promoLabel: "What is AGORA, and why",
    walkthroughLabel: "Platform walkthrough",
    noVideo: "Your browser does not support embedded video. Download it at",
    ctaCitizen: "Request AGORA in My Town",
    ctaGovernment: "Government Inquiry / RFI",
  },
  team: {
    mark: "§ 04 — Expertise & Movement",
    heading: "A responsible team advancing both theory and action.",
    members: [
      { name: "Benjamin Hoffer", role: "Project Lead" },
      { name: "Margaux Harrington", role: "Outreach & Logistics" },
      { name: "Andrey Belyatov", role: "Advisor — Cybersecurity" },
      { name: "Justin Phillips, PhD", role: "Advisor — Quantitative Political Science" },
      { name: "Graham Dove, PhD", role: "Advisor — Digital Civics" },
    ],
  },
  join: {
    mark: "§ 05 — Request AGORA",
    heading: "Bring AGORA to your community.",
    personas: [
      { id: "citizen", label: "I'm a Citizen", description: "Request AGORA in your municipality." },
      {
        id: "government",
        label: "I'm a Government Representative",
        description: "Request a demo or RFI for your jurisdiction.",
      },
      {
        id: "ngo",
        label: "I Represent an NGO",
        description: "Explore how AGORA supports civic and advocacy organizations.",
      },
    ],
    forms: {
      citizen: [
        { kind: "text", name: "name", label: "Your Name", required: true },
        { kind: "text", name: "email", label: "Email", type: "email", required: true },
        { kind: "text", name: "location", label: "City / Town, State", placeholder: "Cambridge, MA", required: true },
        {
          kind: "text",
          name: "role",
          label: "Your Role in the Community (Optional)",
          placeholder: "resident, town meeting member, association chair…",
        },
        {
          kind: "checkbox",
          name: "letter",
          label: "Send an AGORA-drafted letter on my behalf to my select board / city council demanding adoption.",
        },
        { kind: "textarea", name: "message", label: "Message (Optional)" },
        {
          kind: "checkbox",
          name: "consent",
          required: true,
          label:
            "I agree that AGORA may store this request, which may reveal my political views, and contact me about bringing AGORA to my community. I can withdraw this consent at any time.",
        },
      ],
      government: [
        { kind: "text", name: "name", label: "Your Name", required: true },
        {
          kind: "text",
          name: "title",
          label: "Title / Role",
          placeholder: "Town Manager, Selectboard Chair, IT Director…",
          required: true,
        },
        {
          kind: "text",
          name: "jurisdiction",
          label: "Municipality / Jurisdiction",
          placeholder: "Town of Concord, MA",
          required: true,
        },
        {
          kind: "select",
          name: "population",
          label: "Population Size",
          options: ["Under 5,000", "5,000–25,000", "25,000–100,000", "100,000–500,000", "Over 500,000"],
        },
        {
          kind: "select",
          name: "structure",
          label: "Government Structure",
          options: [
            "Town Meeting",
            "Selectboard",
            "City Council–Mayor",
            "City Council–Manager",
            "County",
            "State Agency",
            "University",
            "Other",
          ],
        },
        { kind: "text", name: "email", label: "Email", type: "email", required: true },
        { kind: "text", name: "phone", label: "Phone (Optional)", type: "tel" },
        {
          kind: "select",
          name: "interest",
          label: "Interest",
          options: ["Schedule a demo", "Request a pilot / MOU", "General inquiry"],
        },
        { kind: "textarea", name: "message", label: "Governance context / message" },
      ],
      ngo: [
        { kind: "text", name: "name", label: "Your Name", required: true },
        { kind: "text", name: "title", label: "Title / Role", placeholder: "Executive Director, Policy Lead…", required: true },
        { kind: "text", name: "organization", label: "Organization Name", required: true },
        {
          kind: "select",
          name: "orgtype",
          label: "Organization Type",
          options: [
            "Civic advocacy",
            "Environmental",
            "Human rights",
            "Community organizing",
            "Academic / research",
            "International development",
            "Other",
          ],
        },
        { kind: "text", name: "email", label: "Email", type: "email", required: true },
        { kind: "text", name: "phone", label: "Phone (Optional)", type: "tel" },
        { kind: "select", name: "interest", label: "Interest", options: ["Pilot", "Partnership", "RFI", "General inquiry"] },
        { kind: "textarea", name: "message", label: "Tell us about your organization and how you'd use AGORA" },
      ],
    },
    selectOne: "Select one",
    submit: "Submit",
    sending: "Sending…",
    error: "Submission failed. Please try again.",
    communeRequired: "Choose your municipality from the list.",
    communeNoResults: "No matching municipality.",
    communeSearching: "Searching…",
    privacyNotice:
      "Your information is never shared or sold. It is used only to respond to this request.",
    privacyLinkText: "Privacy policy",
    successHeading: "Your voice is on the record.",
    successBody:
      "Combat the concentration of power. Injustice anywhere is a threat to justice everywhere — share this link to bring your friends and community onboard.",
    copyLink: "Copy share link",
    linkCopied: "Link copied",
  },
  footer: {
    tagline: "building the infrastructure of democracy.",
    legal: "Legal notice",
    privacy: "Privacy",
  },
  paths: { home: "/", legal: "/legal", privacy: "/privacy", other: "/fr" },
};
