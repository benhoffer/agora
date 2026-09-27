# Agora for France — modifications plan

Drafted 2026-09-27 from a survey of both repos:

- **app** — `~/Desktop/dev/legal-simplifier` (forum.direct-democracy.dev)
- **site** — `~/Desktop/dev/agora` (agora.direct-democracy.dev, landing page)

French legal references below are from working knowledge and must be checked
against Légifrance before any of them appears in product copy.

---

## The decision that shapes everything else

France has two entry vectors (see `AGORA/pitch/5-slide-outline.md`):

1. **Mairies adopting it** — a B2G sale.
2. **Citizens demanding it** — the Gilets Jaunes / RIC / cahiers de doléances
   constituency, pressing their commune to adopt.

The existing "Request Agora in your town" flow is built for vector 2 and is the
right spine for France — but in France it can be tied to a **real legal
mechanism** instead of an arbitrary signature count. CGCT art. L1112-16 lets
one fifth of a commune's registered voters require the council to put the
organisation of a local consultation on its agenda (one such request per voter
per year). A request page that says *"212 of 1,060 needed — one fifth of the
electors of Lyme-sur-X"* is a far stronger artefact than "212 neighbours".

Two caveats that must be designed in, not added later:

- Agora signatures are **not** legally valid L1112-16 signatures (the commune
  verifies electors itself). Present the count as readiness, and generate the
  formal petition document for filing, rather than implying legal effect.
- Supporting a political petition reveals **political opinion**, a special
  category under GDPR art. 9. Default to *private* signatures with a public
  count; public names only by explicit opt-in.

---

## 0. Fix now — found in the survey, independent of France

**Done 2026-09-27** — app branch `survey-fixes` (agora-platform), site branch
`survey-fixes` (agora). The homonym half of the `townSlug` row needs INSEE
codes and is carried into §2b.

| Where | Problem |
|---|---|
| app `src/lib/town.ts:202` | `townSlug` drops accented letters: "Évreux" → `vreux`, "Châlons" → `ch-lons`. Also first-come collision for homonyms (dozens of Saint-Martin). |
| app `api/town-requests/route.ts:57` vs `api/onboarding/town/route.ts:58` | The two routes key the same town differently: public upserts on `slug` and stores `stateCode` as typed; onboarding upper-cases and upserts on `(stateCode, municipality)`. Whenever casing differs ("nh"/"hanover" on the public form, then "NH"/"Hanover" in onboarding) the lookup misses and the create collides on `slug` → **500**. Live in the US today. Fix: both routes upsert on `slug`. |
| app `src/lib/legal-corpus.ts:158, 395` | `replace(/[^\w-]/g, "")` strips accented letters from search terms ("équipement" → "quipement"). |
| app `src/lib/email.ts:43-135` | Email templates interpolate org/policy/inviter names unescaped. |
| app `api/policies/[id]/sign/route.ts:96,141` | Returned signature count includes unverified signatures. |
| site `app/api/contact/route.ts:29,33` | Form values interpolated into email HTML unescaped. |
| site `convex/submissions.ts` | `submissions.create` is public and took `fields: v.any()`, so anyone with the deployment URL could store arbitrary, unbounded documents. It cannot be made internal — the route reaches it through `ConvexHttpClient`, and the route is itself unauthenticated — so it now validates persona and field sizes itself. |
| site `convex/googleSheets.ts` | Rows appended with `USER_ENTERED`, so a submitted `=IMPORTXML(...)` ran as a formula in the sheet. Now `RAW`. |
| site `components/Solution.tsx:14`, app `HeroFeatureTabs.tsx:12` | Claims SMS + government-ID signatures "that meet state ballot-initiative standards". Not implemented; only email verification exists. Remove. |

---

## 1. Landing site (`dev/agora`)

**Language & routing**
- Add `next-intl` with prefix routing (`/` en, `/fr`), `hreflang` alternates,
  `openGraph.locale`, and `<html lang>` per locale. Default to `fr` for French
  `Accept-Language`.
- Translate all copy. Replace US concepts: FOIA → CADA / *communication des
  documents administratifs*; "state ballot-initiative standards" → drop;
  "town, state, or national" → *commune, intercommunalité, département*.
- French captions for both videos (self-hosted already — good).

**Request form** (`components/ActionHub.tsx`)

| Persona | French fields |
|---|---|
| Habitant·e | Nom, email, **commune** (autocomplete, see below), « Je suis inscrit·e sur les listes électorales de cette commune » (self-declared, for the L1112-16 counter), rôle (habitant, élu·e, membre d'association…), option « Envoyer un courrier au maire en mon nom », message |
| Collectivité | Nom, **fonction** (maire, adjoint·e, DGS, secrétaire de mairie, DSI), **type** (commune, EPCI, département, région, syndicat mixte), collectivité (autocomplete), strate de population, email, téléphone, intérêt (démonstration, expérimentation, convention, renseignement) |
| Association | Nom, fonction, association (+ RNA/SIREN optional), type, email, téléphone, intérêt |

- **Commune autocomplete** from `geo.api.gouv.fr/communes` — yields INSEE code,
  postcodes, département, EPCI, population. Store the INSEE code; never key on
  a typed name.
- **Population strata** in French statistical bands, not US ones:
  <500 · 500–3 499 · 3 500–9 999 · 10 000–49 999 · ≥50 000. (3 500 is a real
  legal line — list elections, electronic publication of acts.)
- **Consent & information** at the point of collection (GDPR art. 13): who the
  controller is, purpose, retention, rights, link to the privacy notice. The
  letter-on-behalf option needs its own explicit consent line.

**Legal pages** (none exist today)
- *Mentions légales* (LCEN art. 6): publisher, director of publication, host.
- *Politique de confidentialité*: controller, purposes, legal bases,
  processors, transfers, retention, CNIL complaint right.
- Footer links to both.

**Data flow**
- Submissions go to Convex (US default region), Resend (sandbox sender), and a
  Google Sheet. For French personal data: move Convex to its EU region (new
  deployment), Resend EU region with a verified sending domain, and replace or
  justify the Sheet (it is a transfer to a US processor).
- Vercel Analytics is cookieless; keep, but list it in the privacy notice.
- Remove the unused Supabase dependency and keys.

---

## 2. App (`legal-simplifier`)

### 2a. Internationalisation

- `next-intl` **without** locale prefixes: locale resolves from user
  preference → organisation (commune) default → `Accept-Language`. A French
  commune's members see French regardless of URL.
- Add `User.locale` and `Organization.locale`; emails render in the
  recipient's locale.
- Scale: ~57 `.tsx` files, ~330 JSX text lines, ~270 API error strings,
  ~60 labels/placeholders. Extract in one pass per directory; API errors
  return a message key plus English fallback so the mobile app keeps working.
- Dates/numbers: replace the 16 argument-less `toLocaleDateString()` /
  `toLocaleString()` calls and `formatters.ts:8` (`"en-US"`) with a
  locale-aware formatter; `relativeTime` via `Intl.RelativeTimeFormat`;
  pluralisation via ICU messages (removes the `s` suffix idiom).
  `PetitionProgress` "1.5k" → `Intl.NumberFormat` compact.
- Clerk: install `@clerk/localizations`, pass `frFR` to `<ClerkProvider>`.
  Mobile app (`@clerk/clerk-expo`) needs the same.
- `<html lang>` from locale; petition-verify inline HTML (`lang="en"`) too.

### 2b. Jurisdiction model

Today: `Organization.corpusState` + `corpusMunicipality`, a two-level filter,
and `TownRequest(stateCode, municipality)`. France needs four levels (région →
département → EPCI → commune) and a stable identifier.

- `Organization`: add `country` (ISO), `level` (`commune | epci | departement
  | region | state | municipality`), `officialCode` (INSEE for communes, SIREN
  for EPCI). Keep `parentId` for the hierarchy — it already supports depth 10.
- Corpus scope: replace `{state, municipality}` filters with a
  `jurisdictionKey` per `CorpusSection` (e.g. `FR`, `FR-dep-27`,
  `FR-epci-200069581`, `FR-com-27229`) and have `getCorpusFiltersForOrg`
  collect keys up the ancestor chain. National law (`FR`) applies everywhere.
- `TownRequest`: add `country`, `officialCode` (unique), `population`,
  `registeredVoters`. Slug `fr-27229` or `evreux-27` — derived from the code,
  never the typed name. Existing US rows keep `stateCode`.
- `org-types.ts`: French org type/size labels; replace `US_STATES` with a
  per-country region source (French départements from the geo API).

### 2c. Request flow (`RequestTownForm`, `/request/[slug]`, admin)

- Commune autocomplete (same geo API) instead of free-text town + state.
- Email: make it **required** for France with double opt-in — resolves
  NEXT_SESSION item #10 (a request is otherwise a vote nobody can contact),
  and a confirmed address is also the consent record.
- Consent checkbox + art. 13 notice; self-declared "inscrit·e sur les listes
  électorales".
- Request page: *"N soutiens · objectif : 1/5 des électeurs inscrits
  (≈ M)"*, with registered-voter counts from the Ministry of the Interior's
  published election results (per-commune *inscrits*). Heading "{commune}
  ({département})" not "{town}, {ST}".
- "Generate the petition" action: a PDF in the form a mairie can receive,
  listing only signers who confirmed and consented, for the organiser to file.
- Anonymous signers need self-service withdrawal (link in the confirmation
  email) — they have no account to delete.
- Admin CSV export: UTF-8 BOM and `;` delimiter for French Excel.

### 2d. Legal corpus

Sources (all open, Licence Ouverte 2.0 unless noted):
- **National codes** — CGCT, Code de l'urbanisme, Code de l'environnement,
  CRPA: Légifrance API via PISTE, or the LEGI bulk dataset (DILA). Versioned
  by effective date.
- **Urbanisme** — PLU/PLUi règlements from the Géoportail de l'Urbanisme API.
  Mostly PDFs: needs text extraction and article segmentation.
- **Municipal acts** — délibérations and arrêtés; communes ≥3 500 inhabitants
  publish electronically. Heterogeneous; per-commune import for pilots.

Model changes:
- `CorpusSection`: add `country`, `code` (e.g. `CGCT`), `article`
  (`L2121-29`), `validFrom`/`validTo`. The unique key becomes
  `(corpus, code, article, validFrom)`. RSA rows map `chapter`→`code`,
  `section`→`article` in a hand-written migration (NEXT_SESSION hazard #9:
  **never** `prisma migrate dev` on this project).
- **Full-text search**: `body_tsv` / `content_tsv` are generated with
  `'english'`. Add a `ts_config regconfig` column and regenerate the tsvector
  from it, plus `unaccent` through an immutable wrapper. `websearch_to_tsquery`
  calls (`legal-corpus.ts:297, 320, 447, 449`) take the config per query.
- **Embeddings**: nomic-embed-text v1.5 is English-centric and `vector(768)`
  is baked in. Move to a multilingual model — `bge-m3` (1024-dim, MIT) is the
  default candidate, and it matches the multilingual rerankers already chosen
  in item #8 (`bge-reranker-v2-m3`). This is a column migration plus a full
  re-embed of the NH corpus too; worth doing once, for both countries.
- `import-corpus.ts`: add `country`, `code`, `article`, `valid_from`,
  `jurisdiction_key` frontmatter; a new LEGI/Légifrance scraper in
  `agora-legal-scrapers` emits that format.
- Retune fusion weights (`legal-corpus.ts:36-51`) on a French eval set; they
  were tuned on RSA.

### 2e. Citations

`verifyCitations` recognises only `RSA x:y` and `X Code § a-b`. Make citation
systems pluggable — `{ parse(text), key(section), format(section) }` per
country — and add a French parser for the forms that actually occur:
- `article L. 2121-29 du CGCT`, `art. L2121-29 CGCT`, `L.2121-29`
- `article R.* 111-2 du code de l'urbanisme` (R, R*, D, L prefixes)
- `article 3 du règlement du PLU`, `article UA 7` (zone-prefixed PLU articles)

`buildCorpusBlock` and the compare route format sections as
`[corpus chapter:section]`; use the country's `format()` so the model sees
citations in the form it should reproduce. The verified/recalled/not_found
semantics carry over unchanged.

### 2f. AI prompts & models

- Localise every prompt (`prompts.ts`, `style.ts`, and the three inline
  prompts in `compare/route.ts`), with an explicit output-language
  instruction. French `IMPERSONAL_VOICE`: no *je/nous*, no *Bien sûr*,
  impersonal *il convient de*.
- **Category enum** reflects US policy areas (Criminal Justice, Civil Rights).
  Communes have no criminal-justice competence. French set along communal
  competences: urbanisme et logement, voirie et mobilité, écoles et enfance,
  action sociale, environnement et déchets, eau et assainissement, culture et
  sport, finances locales, sécurité et tranquillité publique, autre. Make the
  enum per-country in `ANALYSIS_JSON_SCHEMA`.
- `missingElements` mentions sunset clauses (a US legislative concept);
  replace for France with *financement, calendrier, autorité compétente,
  modalités de contrôle, conformité au PLU/SCoT*.
- **Readability**: `readability.ts` is English Flesch with English syllable
  rules, and its word regex splits on accents. Add Kandel–Moles
  (206.835 → 207, 84.6 → 73.6) with a French syllabifier and Unicode word
  regex; levels *primaire / collège / lycée / supérieur*. `scoreColor`
  thresholds per formula.
- **Models**: French sovereignty argues for a French model locally.
  Mistral Small (24B, Apache 2.0) is the natural candidate; note Ministral 8B
  is under the Mistral Research License (non-commercial) — do not benchmark
  into it. Qwen3 remains an option. Hosted fallback for France: an EU-hosted
  provider rather than a US API, or none.
- **Eval**: `scripts/eval/cases.ts` is 14 RSA cases. Write a French case set
  (CGCT + one commune's PLU) including `empty-retrieval-must-refuse`, and run
  the ladder before claiming French quality.
- `legal-acronyms.ts`: add a French map — PLU, PLUi, SCoT, CGCT, EPCI, OAP,
  PADD, ZAC, ERP, DIA, PC, DP, CU, ABF — and add the `u` flag to the
  word-boundary regex.

### 2g. Petitions

- Default signatures private, count public; public name by opt-in only (art. 9).
- Count only verified signatures (see §0).
- Replace arbitrary milestones (`PetitionProgress.tsx:5`) with a per-policy
  target and optional deadline; for commune petitions, default target = one
  fifth of registered voters.
- "City, State" placeholder → *Commune*.

### 2h. GDPR / hosting

- **Region**: Neon is `us-east-2`, Vercel functions default to `iad1`. French
  tenants need EU: Neon `eu-central-1` (or a French host — Scaleway, OVHcloud,
  Clever Cloud — which matters for public buyers attentive to sovereignty),
  Vercel `cdg1`, Upstash EU, Sentry EU (`de`) or client-side Sentry disabled,
  Resend EU. Simplest shape: a separate EU deployment, not a mixed one.
- **Clerk** is a US processor and still the identity root (`clerkId`
  everywhere). The identity-interface work from `village-deployment.md` is
  also the GDPR answer: it lets France use a different provider. Do this
  *before* the Clerk dev→prod migration (NEXT_SESSION #1) so the migration
  moves an abstraction, not raw `clerkId`s.
- FranceConnect is attractive for elector verification but access is
  restricted to public-service providers; plausible only when the commune is
  the provider. Investigate, don't assume.
- **Export** (`api/users/me/export`) omits town-request signatures, votes,
  memberships, access requests, invites, usage logs and audit entries. Add
  them.
- **Deletion** (`api/users/me`) anonymises the user but leaves petition names
  publicly displayed, town-request rows, usage and audit references, and the
  Stripe customer. Close those; decide how erasure interacts with the
  hash-chained `AuditLog` (keep personal data out of `meta`, reference by id).
- Retention periods implemented as scheduled purges; a sub-processor list;
  a DPA template for communes (they are controllers; Agora is their
  processor — art. 28).
- **Cookie consent**: the app sets only Clerk's strictly-necessary cookies.
  Keep it that way and no banner is needed; client-side Sentry is the one
  item to remove or justify.
- **Accessibility**: public bodies must meet **RGAA** and publish an
  accessibility statement. The existing WCAG work (`docs/ACCESSIBILITY.md`)
  is most of the way; add the statement page in French.

### 2i. Legal pages and US references

- Terms cite the NH Right-to-Know Law (RSA 91-A) → CADA / CRPA L300-1 ff.;
  add governing law and *mentions légales*; the blanket "as is" disclaimer
  is unenforceable against French consumers.
- Rewrite privacy notice as above.
- Remove US placeholders: "Hanover", "NH", "Concord Tenants Union",
  "Prop 13, AB-123, Section 8", "City, State"; organisation-creation text
  "NH Revised Statutes are currently loaded".
- "FOIA / public records export" → *export des documents administratifs*.
  Its filename sanitiser (`organizations/[id]/export/route.ts:132`) mangles
  accents.

### 2j. Billing

- Communes rarely pay by card. Procurement is a *bon de commande* below the
  direct-award threshold, invoicing through **Chorus Pro** (mandatory for
  public-sector invoices), or purchase through a central buyer (UGAP) or a
  regional public digital-services operator. The Stripe path matters little
  for France; manual contracting with `Organization.contracted` — already
  how the paywall works — is the right v1.
- If Stripe is used: EUR prices, TVA via `automatic_tax`,
  `tax_id_collection`, `locale: "fr"`. `BillingSection` hard-codes `$…/mo`.

---

## Phasing

1. **Fix-now list (§0).** Hours. Includes a live US bug.
2. **Site in French + legal pages + commune autocomplete + EU data flow.**
   Lets the citizen vector start collecting French demand lawfully. Small.
3. **App i18n scaffold, French UI, Clerk `frFR`, EU deployment.** Medium; the
   extraction is mechanical and parallelisable.
4. **Jurisdiction model + French request flow with the L1112-16 counter.**
   Medium; hand-written migrations.
5. **French corpus: CGCT + one pilot commune's PLU; multilingual embeddings;
   French FTS; French citations; French eval set.** Largest; gated on a pilot
   commune.
6. **Prompts, categories, readability, model choice** — validated by the
   French eval from phase 5.

Competitive context to position against: Decidim (widely used by French
cities), Cap Collectif, Fluicity, Make.org. Agora's difference is the grounded
legal-corpus analysis and local sovereignty, not participation features — lead
with those.

## Next action

§0 is done. Next: phase 2 — the landing site in French, with legal pages,
commune autocomplete, and an EU data flow.
