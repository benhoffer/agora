export default function Problem() {
  return (
    <section
      style={{
        position: "relative",
        padding: "8rem 2rem",
        background: "#080706",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541370976299-4d24be63e9d3?w=1400&q=40')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.04,
          filter: "grayscale(100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "820px",
          margin: "0 auto",
        }}
      >
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
          The Problem
        </p>

        <blockquote style={{ margin: 0, padding: 0 }}>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 400,
              color: "var(--color-gold)",
              lineHeight: 1.15,
              marginBottom: "2rem",
            }}
          >
            Citizens are offered representation, not authorship.
          </p>

          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1rem",
              color: "var(--color-text)",
              lineHeight: 1.85,
              opacity: 0.85,
            }}
          >
            <p style={{ marginBottom: "1.25rem" }}>
              Legislation that shapes daily life runs to hundreds of pages of dense legal language. Few have the time to read it; fewer still have the expertise to interpret it. Without that foundation, citizens cannot meaningfully evaluate the substance of the representatives they endorse — and policy-based politics is foreclosed from public reach.
            </p>
            <p style={{ marginBottom: "1.25rem" }}>
              In its absence, political engagement collapses into evaluating <em>who</em> rather than <em>what</em>. That is no longer politics. It is gossip.
            </p>
            <p>
              The core challenge is not a lack of citizen capacity. It is a missing civic infrastructure — no accessible mechanism exists to translate local public will into rigorously contested, structurally sound legislative proposals.
            </p>
          </div>
        </blockquote>

        <div className="gold-divider" style={{ marginTop: "4rem", opacity: 0.4 }} />
      </div>
    </section>
  );
}
