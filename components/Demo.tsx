"use client";

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

export default function Demo() {
  return (
    <section id="demo" className="section">
      <div style={{ maxWidth: "880px" }}>
        <p className="section-mark">§ 03 — In Action</p>

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
          A walkthrough of the platform.
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
          Analysis, deliberation, petition, and export — end to end, in under
          five minutes.
        </p>

        <div
          style={{
            border: "1px solid var(--color-line)",
            padding: "0.6rem",
            background: "rgba(0,0,0,0.35)",
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
            Your browser does not support embedded video. Download the
            walkthrough at{" "}
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
              color: "#0b0a08",
              border: "1px solid var(--color-gold)",
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
            Request AGORA in My Town
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
              color: "var(--color-gold)",
              border: "1px solid var(--color-gold)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "var(--color-gold)";
              el.style.color = "#0b0a08";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "transparent";
              el.style.color = "var(--color-gold)";
              el.style.transform = "translateY(0)";
            }}
          >
            Government Inquiry / RFI
          </a>
        </div>
      </div>
    </section>
  );
}
