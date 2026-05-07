const TEAM = [
  {
    name: "Benjamin Hoffer",
    role: "Project Lead",
  },
  {
    name: "Margaux Harrington",
    role: "Outreach & Logistics",
  },
  {
    name: "Andrey Belyatov",
    role: "Advisor — Cybersecurity",
  },
  {
    name: "Justin Phillips, PhD",
    role: "Advisor — Quantitative Political Science",
  },
  {
    name: "Graham Dove, PhD",
    role: "Advisor — Digital Civics",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      style={{
        position: "relative",
        padding: "8rem 2rem",
        background: "var(--color-bg)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1100px",
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
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          Expertise & Movement
        </p>

        <div style={{ marginBottom: "4rem" }} />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="glass"
              style={{ padding: "1.75rem 1.5rem", textAlign: "center" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.15rem",
                  fontWeight: 500,
                  color: "var(--color-text)",
                  marginBottom: "0.5rem",
                  lineHeight: 1.3,
                }}
              >
                {member.name}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.08em",
                  color: "var(--color-muted)",
                  lineHeight: 1.5,
                }}
              >
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
