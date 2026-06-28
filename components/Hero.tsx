"use client";

export default function Hero() {
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
            fontFamily: "var(--font-sans)",
            fontSize: "0.72rem",
            letterSpacing: "0.3em",
            color: "var(--color-gold)",
            textTransform: "uppercase",
            marginBottom: "2rem",
          }}
        >
          Deliberative · Direct · Deep Democracy
        </p>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(4.5rem, 13vw, 10rem)",
            fontWeight: 300,
            color: "var(--color-gold)",
            letterSpacing: "0.08em",
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
          Gold standard civic infrastructure for democracy.
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
          Democracies are eroding while authoritarian power consolidates, and the
          newest technology is turned toward surveillance and suppression rather
          than autonomy. AGORA turns those same tools back toward communities —
          secure, sovereign infrastructure that citizens read, write, and ratify,
          on a server they own. Representative democracy has only ever given the
          public a vote — AGORA proposes to give communities the real power:
          authorship.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="#demo"
            style={{
              padding: "0.95rem 2.4rem",
              background: "var(--color-gold)",
              color: "#0b0a08",
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
              el.style.background = "var(--color-gold-light)";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "var(--color-gold)";
              el.style.transform = "translateY(0)";
            }}
          >
            Watch the Demo
          </a>

          <a
            href="#join"
            style={{
              padding: "0.95rem 2.4rem",
              background: "transparent",
              color: "var(--color-text)",
              border: "1px solid rgba(233, 227, 212, 0.32)",
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
              el.style.borderColor = "var(--color-gold)";
              el.style.color = "var(--color-gold)";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "rgba(233, 227, 212, 0.32)";
              el.style.color = "var(--color-text)";
              el.style.transform = "translateY(0)";
            }}
          >
            Request AGORA
          </a>
        </div>
      </div>
    </section>
  );
}
