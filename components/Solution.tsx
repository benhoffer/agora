"use client";

const features = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Read & Compare",
    body: "Translate any policy across reading levels — 5th grade, high school, graduate/legal. Ask questions in natural language and get cited answers grounded in the actual policy text. Side-by-side, color-coded diffs between any two policies, with pre-publication conflict checks against inherited law.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="2" x2="9" y2="4" />
        <line x1="15" y1="2" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="22" />
        <line x1="15" y1="20" x2="15" y2="22" />
        <line x1="2" y1="9" x2="4" y2="9" />
        <line x1="2" y1="15" x2="4" y2="15" />
        <line x1="20" y1="9" x2="22" y2="9" />
        <line x1="20" y1="15" x2="22" y2="15" />
      </svg>
    ),
    title: "Deliberate & Petition",
    body: "Threaded comments anchored to specific policy clauses. Identity-verified participation — no bots. Multi-factor petition signatures (email, SMS, government-ID) that meet state ballot-initiative standards, rate-limited and cryptographically auditable.",
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Govern at Every Scale",
    body: "Nested organizations with automatic law inheritance — neighborhoods inside towns, towns inside states. Hash-chained, tamper-evident audit log. One-click FOIA-grade export. Role-gated administration across owner, admin, moderator, member, and viewer tiers.",
  },
];

export default function Solution() {
  return (
    <section
      id="solution"
      style={{
        position: "relative",
        padding: "8rem 2rem",
        background: "var(--color-bg)",
        overflow: "hidden",
      }}
    >
      {/* Subtle background ruins image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1567604440566-0dce2e8c5f5f?w=1400&q=30')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.03,
          filter: "grayscale(100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1100px",
          margin: "0 auto",
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
            marginBottom: "1.5rem",
          }}
        >
          What We Do
        </p>

        {/* Headline */}
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 400,
            color: "var(--color-text)",
            lineHeight: 1.2,
            marginBottom: "1.25rem",
            maxWidth: "700px",
          }}
        >
          The infrastructure of deep democracy.
        </h2>

        {/* Subheadline */}
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1rem",
            color: "var(--color-muted)",
            lineHeight: 1.7,
            maxWidth: "600px",
            marginBottom: "5rem",
          }}
        >
          Six tightly integrated subsystems that make participatory governance feasible at scale: read, compare, deliberate, petition, audit, and export — all on one platform, deployed locally to a server the municipality owns.
        </p>

        {/* Divider */}
        <div className="gold-divider" style={{ marginBottom: "5rem", opacity: 0.3 }} />

        {/* Feature cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass"
              style={{
                padding: "2.5rem",
                transition: "border-color 0.3s, background 0.3s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(201, 168, 76, 0.5)";
                el.style.background = "rgba(255,255,255,0.09)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(201, 168, 76, 0.2)";
                el.style.background = "rgba(255,255,255,0.06)";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  color: "var(--color-gold)",
                  marginBottom: "1.5rem",
                  opacity: 0.9,
                }}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.4rem",
                  fontWeight: 500,
                  color: "var(--color-text)",
                  marginBottom: "1rem",
                  letterSpacing: "0.02em",
                }}
              >
                {feature.title}
              </h3>

              {/* Body */}
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  color: "var(--color-muted)",
                  lineHeight: 1.75,
                }}
              >
                {feature.body}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.85rem",
            color: "var(--color-muted)",
            lineHeight: 1.7,
            marginTop: "3rem",
            textAlign: "center",
            opacity: 0.8,
          }}
        >
          Sovereign local deployment. All civic data stays in the municipality&apos;s database. Local LLM inference via Ollama; optional Claude API hybrid mode.
        </p>
      </div>
    </section>
  );
}
