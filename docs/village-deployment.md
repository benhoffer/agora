# Agora in a village — tamper-evident, offline-first deployment

Design exploration, 2026-09-27. Not yet built.

The question: how would Agora run locally in a small village, including in
developing countries with minimal infrastructure, such that no one — operator,
vendor, outside power, or the AI — can interfere with the democratic process?

## The core idea

**One authoritative lineage, many copies.** The law is whatever a threshold of
office-holders has signed; the copies live everywhere, including on paper. No
single person, machine, or vendor can alter the law or the discussion without
it being visible.

"Single source of truth" should be refined: a single *location* of truth is a
single point of capture. What must be single is the *rule for what counts as
authoritative* — signatures, not location.

## Threat model

In a village the outsider is not the main threat. In rough order:

1. **Whoever runs the box.** Root on the database is the power to rewrite the
   record. In the current codebase `Law`, `CorpusSection`, `Comment` and even
   `AuditLog` are mutable Postgres rows.
2. **The vendor (us).** Auto-updates are a standing channel into every village.
3. **External services.** Production today depends on ~9 external parties
   (Clerk, Anthropic, Neon, Vercel, Upstash, Sentry, Resend, Stripe, Tailscale
   Funnel). The self-host still needs Clerk to log in at all — a veto point.
4. **The AI.** Summaries decide what gets noticed. The prompt is a governance
   surface.
5. **Social coercion.** Everyone knows everyone; any visible participation can
   be pressured.

Design for **detection, not prevention.** The operator can always unplug the
box. They must not be able to *forge*, and unplugging must not *destroy*.

## Law: a signed, append-only chain

- **Every change is an entry in a hash chain:** new text, parent hash, the
  meeting that authorised it, and signatures from *k of n* office-holders
  (e.g. 3 of 5 council members plus the clerk). No single signer can amend.
  Git with signed commits is a credible v1.
- **Authority comes from the signatures, not the host.** Any copy — phone, USB
  stick, school computer — can verify itself against the chain.
- **Paper is the ultimate replica.** At each meeting the current head hash is
  printed, posted on the notice board, and read into the minutes. A short
  human-comparable fingerprint suffices. Rewriting history then requires
  rewriting every phone and every posted notice.
- **Neighbouring villages witness each other.** Each village sends its head
  hash to neighbours (SMS, or USB on market day). Certificate Transparency,
  scaled down to a federation of villages. A village cannot quietly fork its
  own history once three others hold its head.
- **Higher law is imported, not editable.** National or regional law enters as
  pinned copies with hash and provenance, signed by the issuing authority where
  that exists. The village can annotate, never amend. (The local analogue of
  how the RSA corpus relates to Hanover's ordinances today.)

## Discussion: nothing disappears silently

- **Posts are append-only and author-signed.** Moderation *adds* a hide marker
  recording who hid it and why; nothing is deleted. Removal is always visible,
  and the moderator is accountable for it.
- **Every phone holds a replica** of the discussion log and syncs with peers
  over local Wi-Fi. When the box dies, the discussion survives.
- **Anonymity is a real choice.** In a village, pseudonymity leaks. Comments
  that are verified-member-but-unlinkable are possible with blind signatures.
  Costly in complexity; defer until someone needs it.

## Voting: keep the binding act out of the software

Petitions are public by nature — signed petitions are fine. **Binding secret
ballots should not run on this system.** Receipt-freeness (a voter cannot
prove to a buyer or coercer how they voted) is unsolved on low-tech devices,
and small communities are exactly where coercion works. Agora does notice,
drafting, deliberation and petitions; the binding vote stays paper or show of
hands in the assembly, and the tellers sign the result into the chain.

The software is the public record and notice board, never the sovereign.
That is the strongest guarantee against interference: controlling the
software never controls the decision.

## Identity without Clerk

In-person enrolment at a meeting, vouched for by *k* existing members; a key
on the phone or a printed QR card. The member registry is itself a signed,
append-only log, so additions and removals are visible. The village's size is
its Sybil resistance: fake accounts are hard when everyone is recognisable in
the hall. No dependency on national ID, which some villages cannot rely on or
should not trust.

## AI: local, pinned, reproducible, advisory

- Model weights identified by hash; prompts live in the chain. Changing the
  prompt is a governance act.
- Deterministic decoding (fixed seed, temperature 0) makes outputs
  **reproducible**: anyone with the same weights and inputs regenerates the
  same summary. That makes the AI auditable rather than trusted.
- AI output never enters the law chain and is always labelled advisory. A
  citation earns a check only if its section's text was supplied (already the
  rule in `verifyCitations` as of `analysis-grounding`).
- **Everything must work with the AI off.** It is the heaviest component and
  the least essential. On a Raspberry Pi 5 a 3–4B model runs at a few tokens
  per second — fine for "ask tonight, answer by morning" deliberation.
- Our eval showed every 8B model answers when given no sections. Small models
  need the retrieval confidence gate (NEXT_SESSION item #8) so an empty
  retrieval switches prompts rather than trusting the model to refuse.
- Language: Flesch readability is English-only, and many target communities
  are oral. Local-language speech-to-text and text-to-speech likely matter
  more than analysis features.

## Minimal infrastructure

```
 solar + battery
      │
 ┌────▼─────────────────────────┐        paper: posted head hash, minutes,
 │ mini PC / Pi 5  = Wi-Fi AP   │───▶    printed notices
 │  SQLite + hash-chained logs  │
 │  small local model (optional)│◀──▶    phones: full replicas,
 └────┬─────────────────────────┘        peer-to-peer sync
      │ occasional: USB / SMS / any link
      ▼
 neighbouring villages & district: head-hash witnesses
```

- No internet required; zero required external services.
- The current stack (Postgres + pgvector + Next.js + Caddy + Docker) is too
  heavy. The village build is a different target: SQLite (`better-sqlite3` is
  already a dependency), a single process, the box itself as the access point.
- **Updates** arrive as signed bundles from reproducible builds and are adopted
  by the same k-of-n threshold that enacts law. A software upgrade is a
  governance act, never a silent push.

## What carries back into the current product

Most of this strengthens the NH/France municipal product too. "Nobody,
including us, can silently alter your ordinances" is a sellable property for a
town clerk. In order:

1. **Signed, append-only law record** replacing mutable `Law` rows. Foundation
   for everything else.
2. **Identity behind an interface** — Clerk as one provider, in-person
   enrolment as another. This also de-risks the Clerk dev→prod migration,
   since nothing would hang directly off `clerkId`.
3. **Moderation as marking, not deletion,** for comments.
4. **A SQLite single-box build target.**

## Next action

A one-page spec for the signed law record: entry format, signature threshold,
and how the head hash is published.
