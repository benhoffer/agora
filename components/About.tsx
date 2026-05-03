"use client";

export default function About() {
  return (
    <section
      id="about"
      style={{
        position: "relative",
        padding: "8rem 2rem",
        background: "var(--color-bg)",
        overflow: "hidden",
      }}
    >
      {/* Faint background — amphitheater */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555993539-1732b0258235?w=1400&q=30')",
          backgroundSize: "cover",
          backgroundPosition: "center 60%",
          opacity: 0.05,
          filter: "grayscale(100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "720px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* Section label */}
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.7rem",
            letterSpacing: "0.35em",
            color: "var(--color-gold)",
            textTransform: "uppercase",
            marginBottom: "3rem",
          }}
        >
          About Us
        </p>

        {/* Gold top divider */}
        <div className="gold-divider" style={{ marginBottom: "3rem", opacity: 0.5 }} />

        {/* MLK Quote */}
        <blockquote
          style={{
            margin: "0 0 3rem",
            padding: 0,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--color-text)",
              lineHeight: 1.4,
              marginBottom: "1.25rem",
            }}
          >
            &ldquo;Injustice anywhere is a threat to justice everywhere.&rdquo;
          </p>
          <cite
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              color: "var(--color-muted)",
              textTransform: "uppercase",
              fontStyle: "normal",
            }}
          >
            — Martin Luther King Jr.
          </cite>
        </blockquote>

        {/* Gold divider */}
        <div className="gold-divider" style={{ marginBottom: "3rem", opacity: 0.5 }} />

        {/* Body copy */}
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.95rem",
            color: "var(--color-muted)",
            lineHeight: 1.85,
            textAlign: "left",
          }}
        >
          <p style={{ marginBottom: "1.5rem" }}>
            The sole valid objection to direct democracy is that it is unwieldy — that participatory decision-making is too slow to compete with representative or authoritarian alternatives. AGORA is built to answer that objection. By making structured deliberation efficient and policy legible at every reading level, and by allowing organizations to nest such that decisions and legal inheritance flow cleanly between scales of governance, AGORA eliminates the operational deficiency that has historically made direct democracy impractical at scale.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            We deploy on a single municipal server running on commodity hardware. In sovereign mode, all language-model inference runs locally via Ollama; no citizen data, deliberation content, or query traffic leaves the municipality. The local-inference posture also avoids the carbon footprint of cloud-scale LLM serving — gold-standard infrastructure with zero-extraction ecological responsibility.
          </p>
          <p>
            AGORA is a small team bootstrapping toward our first round of municipal contracts in New England in 2026. The cause is urgent. We are building the tools.
          </p>
        </div>

        {/* CTA */}
        <a
          href="#join"
          style={{
            display: "inline-block",
            marginTop: "3rem",
            padding: "0.875rem 2.5rem",
            border: "1px solid var(--color-gold)",
            color: "var(--color-gold)",
            fontFamily: "var(--font-sans)",
            fontSize: "0.8rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            const el = e.target as HTMLElement;
            el.style.background = "var(--color-gold)";
            el.style.color = "#0c0b09";
          }}
          onMouseLeave={(e) => {
            const el = e.target as HTMLElement;
            el.style.background = "transparent";
            el.style.color = "var(--color-gold)";
          }}
        >
          Request AGORA
        </a>
      </div>
    </section>
  );
}
