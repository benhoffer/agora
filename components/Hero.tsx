"use client";

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(12,11,9,0.45) 0%, rgba(12,11,9,0.65) 50%, rgba(12,11,9,0.97) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "0 2rem",
          maxWidth: "900px",
        }}
      >
        {/* Eyebrow tag */}
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.75rem",
            letterSpacing: "0.35em",
            color: "var(--color-gold)",
            marginBottom: "1.5rem",
            textTransform: "uppercase",
          }}
        >
          Deliberative, direct, deep democracy.
        </p>

        {/* Main headline */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(5rem, 16vw, 12rem)",
            fontWeight: 300,
            color: "var(--color-gold)",
            letterSpacing: "0.15em",
            lineHeight: 1,
            margin: "0 0 1.5rem",
          }}
        >
          AGORA
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
            fontWeight: 300,
            color: "var(--color-text)",
            letterSpacing: "0.05em",
            marginBottom: "3rem",
            opacity: 0.9,
          }}
        >
          Gold standard civic infrastructure for democracy.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#demo"
            style={{
              display: "inline-block",
              padding: "0.875rem 2.5rem",
              background: "var(--color-gold)",
              color: "#0c0b09",
              fontFamily: "var(--font-sans)",
              fontSize: "0.875rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.target as HTMLElement;
              el.style.background = "var(--color-gold-light)";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLElement;
              el.style.background = "var(--color-gold)";
              el.style.transform = "translateY(0)";
            }}
          >
            Watch the Demo
          </a>

          <a
            href="#join"
            style={{
              display: "inline-block",
              padding: "0.875rem 2.5rem",
              background: "transparent",
              color: "var(--color-text)",
              border: "1px solid rgba(240, 235, 224, 0.4)",
              fontFamily: "var(--font-sans)",
              fontSize: "0.875rem",
              fontWeight: 400,
              letterSpacing: "0.12em",
              textDecoration: "none",
              textTransform: "uppercase",
              transition: "border-color 0.2s, color 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.target as HTMLElement;
              el.style.borderColor = "var(--color-gold)";
              el.style.color = "var(--color-gold)";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLElement;
              el.style.borderColor = "rgba(240, 235, 224, 0.4)";
              el.style.color = "var(--color-text)";
              el.style.transform = "translateY(0)";
            }}
          >
            Request AGORA
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          opacity: 0.5,
        }}
      >
        <span
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.25em",
            color: "var(--color-muted)",
            fontFamily: "var(--font-sans)",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "2.5rem",
            background:
              "linear-gradient(to bottom, var(--color-muted), transparent)",
          }}
        />
      </div>
    </section>
  );
}
