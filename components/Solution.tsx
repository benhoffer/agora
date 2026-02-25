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
    title: "Democratized Policy",
    body: "No more legalese. We give your members the tools to understand and operate at a high level in the policy space—translating complex legislation into plain language, automatically.",
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
    title: "Cutting-Edge Tech",
    body: "Powered by locally-secured modern servers, utilizing advanced RAG (Retrieval-Augmented Generation) and LLMs for unparalleled policy analysis. The state of the art, deployed for democracy.",
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
    title: "Sovereign & Secure",
    body: "Bringing AI to everyday people without relying on untrustworthy, extractive multinational corporations. Your data stays local. Your governance stays yours.",
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
          Rebuilding the Infrastructure of Consensus.
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
          We build efficient, secure, and collaborative governance infrastructure
          for any institution—from city councils and corporate boards to
          neighborhood unions and book clubs.
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
      </div>
    </section>
  );
}
