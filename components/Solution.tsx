"use client";

import { useState } from "react";

const ITEMS = [
  {
    num: "01",
    title: "Understand & Author",
    body: "Translate any policy across reading levels — 5th grade to graduate legal. Ask questions in plain language and get cited answers grounded in the actual text. Side-by-side, color-coded diffs between any two policies, with pre-publication conflict checks against inherited law.",
  },
  {
    num: "02",
    title: "Petition & Discuss",
    body: "Threaded comments anchored to specific clauses. Identity-verified participation — no bots. Multi-factor petition signatures (email, SMS, government ID) that meet state ballot-initiative standards: rate-limited and cryptographically auditable.",
  },
  {
    num: "03",
    title: "Govern at Every Scale",
    body: "Collective action problems are best solved by the people, at the scale of the solution — be it town, state, or national. Community politics lets us organize and develop better answers. Nested organizations with automatic law inheritance — neighborhoods inside towns, towns inside states. Hash-chained, tamper-evident audit log. One-click FOIA-grade export. Role-gated administration across owner, admin, moderator, member, and viewer.",
  },
];

function LedgerRow({ num, title, body }: { num: string; title: string; body: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="ledger-row"
      style={{ cursor: "pointer", userSelect: "none" }}
      onClick={() => setOpen((o) => !o)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div
        className="ledger-num"
        style={{
          transition: "color 0.3s ease",
          color: open ? "var(--color-gold-light)" : "var(--color-gold)",
        }}
      >
        {num}
      </div>
      <div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.6rem",
            fontWeight: 500,
            color: open ? "var(--color-gold-light)" : "var(--color-text)",
            marginBottom: open ? "0.7rem" : 0,
            transition: "color 0.3s ease, margin-bottom 0.35s ease",
          }}
        >
          {title}
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateRows: open ? "1fr" : "0fr",
            transition: "grid-template-rows 0.35s ease",
          }}
        >
          <p
            style={{
              overflow: "hidden",
              fontFamily: "var(--font-sans)",
              fontSize: "0.92rem",
              color: "var(--color-muted)",
              lineHeight: 1.8,
              maxWidth: "560px",
              opacity: open ? 1 : 0,
              transition: "opacity 0.25s ease 0.1s",
            }}
          >
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Solution() {
  return (
    <section id="solution" className="section">
      <div style={{ maxWidth: "880px" }}>
        <p className="section-mark">§ 02 — The Platform</p>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.4rem)",
            fontWeight: 400,
            color: "var(--color-text)",
            lineHeight: 1.15,
            marginBottom: "1.5rem",
            maxWidth: "620px",
          }}
        >
          The infrastructure of deep democracy.
        </h2>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1rem",
            color: "var(--color-muted)",
            lineHeight: 1.8,
            maxWidth: "600px",
            marginBottom: "4rem",
          }}
        >
          A secure, community-owned platform for proposals, petitions,
          discussion, and participatory research — in short, sophisticated
          direct-democratic governance, with government-grade security, audit,
          and export built in for ease of adoption.
        </p>

        <div>
          {ITEMS.map((item) => (
            <LedgerRow key={item.num} {...item} />
          ))}
          <div style={{ borderTop: "1px solid var(--color-line)" }} />
        </div>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.82rem",
            color: "var(--color-faint)",
            lineHeight: 1.8,
            marginTop: "2.5rem",
            maxWidth: "560px",
          }}
        >
          Sovereign local deployment — all civic data stays in the
          municipality&apos;s own database. Local LLM inference via Ollama, with
          an optional Claude API hybrid mode.
        </p>
      </div>
    </section>
  );
}
