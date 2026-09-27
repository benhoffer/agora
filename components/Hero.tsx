"use client";

import type { Dict } from "@/lib/i18n/types";

export default function Hero({ t }: { t: Dict["hero"] }) {
  return (
    <section
      id="top"
      className="section"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "5rem",
        paddingBottom: "5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "760px" }} className="reveal">
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "0.74rem",
            letterSpacing: "0.26em",
            color: "var(--color-gold-deep)",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          {t.eyebrow}
        </p>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(4rem, 11vw, 8.5rem)",
            fontWeight: 500,
            color: "var(--color-text)",
            letterSpacing: "0.04em",
            lineHeight: 0.95,
            margin: "0 0 1.5rem",
          }}
        >
          AGORA
        </h1>

        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.4rem, 3.4vw, 2.1rem)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "var(--color-text)",
            lineHeight: 1.25,
            marginBottom: "2.6rem",
            maxWidth: "560px",
          }}
        >
          {t.subtitle}
        </p>

        <div
          className="rule-gold"
          style={{ maxWidth: "120px", marginBottom: "2.6rem" }}
        />

        {/* Problem, folded into the opening */}
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1.02rem",
            color: "var(--color-text)",
            opacity: 0.82,
            lineHeight: 1.85,
            maxWidth: "600px",
            marginBottom: "3rem",
          }}
        >
          {t.body}
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="#demo"
            style={{
              padding: "0.95rem 2.4rem",
              background: "var(--color-gold)",
              color: "var(--color-text)",
              fontFamily: "var(--font-sans)",
              fontSize: "0.78rem",
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background 0.2s, transform 0.2s",
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
            {t.watchDemo}
          </a>

          <a
            href="#join"
            style={{
              padding: "0.95rem 2.4rem",
              background: "transparent",
              color: "var(--color-text)",
              border: "1px solid rgba(38, 33, 23, 0.28)",
              fontFamily: "var(--font-sans)",
              fontSize: "0.78rem",
              fontWeight: 400,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--color-gold-deep)";
              el.style.color = "var(--color-gold-deep)";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "rgba(38, 33, 23, 0.28)";
              el.style.color = "var(--color-text)";
              el.style.transform = "translateY(0)";
            }}
          >
            {t.request}
          </a>
        </div>
      </div>
    </section>
  );
}
