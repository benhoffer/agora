"use client";

function ctaBase(): React.CSSProperties {
  return {
    display: "inline-block",
    padding: "0.875rem 2.25rem",
    fontFamily: "var(--font-sans)",
    fontSize: "0.8rem",
    fontWeight: 500,
    letterSpacing: "0.15em",
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
    <section
      id="demo"
      style={{
        padding: "8rem 2rem",
        background: "#070605",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1605196560547-b2f7281b7355?w=1400&q=30')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.05,
          filter: "grayscale(100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "960px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
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
          See AGORA in Action
        </p>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 400,
            color: "var(--color-text)",
            marginBottom: "1.25rem",
            lineHeight: 1.2,
          }}
        >
          A walkthrough of the platform.
        </h2>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.95rem",
            color: "var(--color-muted)",
            lineHeight: 1.7,
            marginBottom: "3rem",
            maxWidth: "560px",
            margin: "0 auto 3rem",
          }}
        >
          Analysis, deliberation, petition, and export — end to end, in under five minutes.
        </p>

        <div
          className="glass"
          style={{
            padding: "0.75rem",
            marginBottom: "3rem",
            background: "rgba(0,0,0,0.4)",
          }}
        >
          {/* Captions track can be added later by placing demo.vtt next to the mp4 and uncommenting the <track> below. */}
          <video
            controls
            playsInline
            preload="metadata"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              borderRadius: "2px",
            }}
          >
            <source src="/presentations/demo.mp4" type="video/mp4" />
            {/* <track kind="captions" src="/presentations/demo.vtt" srcLang="en" label="English" default /> */}
            Your browser does not support embedded video. Download the walkthrough at{" "}
            <a href="/presentations/demo.mp4">/presentations/demo.mp4</a>.
          </video>
        </div>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#join"
            onClick={(e) => {
              e.preventDefault();
              routeTo("citizen");
            }}
            style={{
              ...ctaBase(),
              background: "var(--color-gold)",
              color: "#0c0b09",
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
              el.style.color = "#0c0b09";
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
