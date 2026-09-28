"use client";

import type { Dict } from "@/lib/i18n/types";

function ctaBase(): React.CSSProperties {
  return {
    display: "inline-block",
    padding: "0.85rem 2.1rem",
    fontFamily: "var(--font-sans)",
    fontSize: "0.76rem",
    fontWeight: 500,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    textDecoration: "none",
    transition: "background 0.2s, color 0.2s, transform 0.15s, border-color 0.2s",
    cursor: "pointer",
  };
}

function routeTo(persona: "citizen" | "government") {
  if (typeof window === "undefined") return;
  window.location.hash = `join`;
  window.dispatchEvent(
    new CustomEvent("agora:set-persona", { detail: persona })
  );
}

export default function Demo({ t }: { t: Dict["demo"] }) {
  return (
    <section id="demo" className="section">
      <div style={{ maxWidth: "880px" }}>
        <p className="section-mark">{t.mark}</p>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.4rem)",
            fontWeight: 400,
            color: "var(--color-text)",
            marginBottom: "1.25rem",
            lineHeight: 1.15,
          }}
        >
          {t.heading}
        </h2>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.98rem",
            color: "var(--color-muted)",
            lineHeight: 1.8,
            marginBottom: "2.6rem",
            maxWidth: "560px",
          }}
        >
          {t.intro}
        </p>

        {t.videoLanguageNote && (
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.82rem",
              fontStyle: "italic",
              color: "var(--color-muted)",
              marginTop: "-1.6rem",
              marginBottom: "2.6rem",
            }}
          >
            {t.videoLanguageNote}
          </p>
        )}

        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.72rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-gold-deep)",
            marginBottom: "0.9rem",
          }}
        >
          {t.promoLabel}
        </p>

        <div
          style={{
            border: "1px solid var(--color-line)",
            padding: "0.6rem",
            background: "var(--color-panel)",
            marginBottom: "2.6rem",
          }}
        >
          <video
            controls
            playsInline
            preload="metadata"
            style={{ display: "block", width: "100%", height: "auto" }}
          >
            <source src="/presentations/agora-promo.mp4" type="video/mp4" />
            {t.noVideo}{" "}
            <a href="/presentations/agora-promo.mp4">
              /presentations/agora-promo.mp4
            </a>
            .
          </video>
        </div>

        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.72rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-gold-deep)",
            marginBottom: "0.9rem",
          }}
        >
          {t.walkthroughLabel}
        </p>

        <div
          style={{
            border: "1px solid var(--color-line)",
            padding: "0.6rem",
            background: "var(--color-panel)",
            marginBottom: "2.6rem",
          }}
        >
          <video
            controls
            playsInline
            preload="metadata"
            style={{ display: "block", width: "100%", height: "auto" }}
          >
            <source src="/presentations/demo.mp4" type="video/mp4" />
            {t.noVideo}{" "}
            <a href="/presentations/demo.mp4">/presentations/demo.mp4</a>.
          </video>
        </div>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="#join"
            onClick={(e) => {
              e.preventDefault();
              routeTo("citizen");
            }}
            style={{
              ...ctaBase(),
              background: "var(--color-gold)",
              color: "var(--color-text)",
              border: "1px solid var(--color-gold)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "var(--color-gold-deep)";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "var(--color-gold)";
              el.style.transform = "translateY(0)";
            }}
          >
            {t.ctaCitizen}
          </a>

          <a
            href="#join"
            onClick={(e) => {
              e.preventDefault();
              routeTo("government");
            }}
            style={{
              ...ctaBase(),
              background: "transparent",
              color: "var(--color-gold-deep)",
              border: "1px solid var(--color-gold-deep)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "var(--color-gold)";
              el.style.color = "var(--color-text)";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "transparent";
              el.style.color = "var(--color-gold-deep)";
              el.style.transform = "translateY(0)";
            }}
          >
            {t.ctaGovernment}
          </a>
        </div>
      </div>
    </section>
  );
}
