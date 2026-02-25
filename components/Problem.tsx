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
      {/* Faint background texture — crumbling columns watermark */}
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
          The Problem
        </p>

        {/* Pull-quote block */}
        <blockquote
          style={{
            margin: 0,
            padding: 0,
          }}
        >
          {/* First line — bold gold emphasis */}
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 400,
              color: "var(--color-gold)",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
            }}
          >
            Democracy is losing its mandate.
          </p>

          {/* Body copy */}
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
              fontWeight: 300,
              color: "var(--color-text)",
              lineHeight: 1.7,
              opacity: 0.85,
            }}
          >
            People are losing faith in its ability to operate effectively at
            scale, while entrenched, authoritarian institutions actively corrode
            and corrupt our civic foundations. Real democracy, as a means to secure
           the benefits of civilization for us all, is nowhere to be found. The system
            is intentionally opaque, wrapped in legalese that shuts the public out.
          </p>
        </blockquote>

        {/* Divider */}
        <div
          className="gold-divider"
          style={{ marginTop: "4rem", opacity: 0.4 }}
        />

        {/* Stat row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
            marginTop: "4rem",
          }}
        >
          {[
            { stat: "73%", label: "of Americans distrust Congress" },
            { stat: "< 30%", label: "of bills are written in plain language" },
            { stat: "4.3B", label: "people live under weakening democracies" },
          ].map(({ stat, label }) => (
            <div key={stat}>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  fontWeight: 300,
                  color: "var(--color-gold)",
                  marginBottom: "0.5rem",
                  lineHeight: 1,
                }}
              >
                {stat}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8rem",
                  color: "var(--color-muted)",
                  lineHeight: 1.5,
                  letterSpacing: "0.03em",
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
