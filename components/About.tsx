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
            AGORA is a small tight-knit team bootstrapping to
            deploy our first round of contracts in 2026. The cause of democracy
            is urgent, and we are building the tools to save it.
          </p>
          <p style={{ marginBottom: "1.5rem" }}>
            Whether you are in the public sector, a private company, a
            capitalist, or an everyday citizen—you can help. Every institution
            that adopts better governance infrastructure strengthens the
            collective fabric of our democracy.
          </p>
          <p>
            We believe that access to clear, actionable civic information is not
            a luxury. It is a prerequisite for a real and functioning democracy. AGORA
            exists to make that access universal.
          </p>
           <p>
            Read more about direct democracy, electoral systems, and voting crypotgraphy here.
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
          Join the Assembly
        </a>
      </div>
    </section>
  );
}
