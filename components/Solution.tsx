"use client";

import { useState } from "react";
import type { Dict } from "@/lib/i18n/types";

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
          color: open ? "var(--color-gold-deep)" : "var(--color-gold)",
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
            color: open ? "var(--color-gold-deep)" : "var(--color-text)",
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

export default function Solution({ t }: { t: Dict["solution"] }) {
  return (
    <section id="solution" className="section">
      <div style={{ maxWidth: "880px" }}>
        <p className="section-mark">{t.mark}</p>

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
          {t.heading}
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
          {t.intro}
        </p>

        <div>
          {t.items.map((item) => (
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
          {t.footnote}
        </p>
      </div>
    </section>
  );
}
