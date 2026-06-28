const TEAM = [
  { name: "Benjamin Hoffer", role: "Project Lead" },
  { name: "Margaux Harrington", role: "Outreach & Logistics" },
  { name: "Andrey Belyatov", role: "Advisor — Cybersecurity" },
  { name: "Justin Phillips, PhD", role: "Advisor — Quantitative Political Science" },
  { name: "Graham Dove, PhD", role: "Advisor — Digital Civics" },
];

export default function Team() {
  return (
    <section id="team" className="section">
      <div style={{ maxWidth: "880px" }}>
        <p className="section-mark">§ 04 — Expertise & Movement</p>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.4rem)",
            fontWeight: 400,
            color: "var(--color-text)",
            lineHeight: 1.15,
            marginBottom: "3rem",
            maxWidth: "620px",
          }}
        >
          A responsible team advancing both theory and action.
        </h2>

        <div>
          {TEAM.map((member) => (
            <div
              key={member.name}
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: "1.5rem",
                flexWrap: "wrap",
                padding: "1.3rem 0",
                borderTop: "1px solid var(--color-line)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "var(--color-text)",
                }}
              >
                {member.name}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.74rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-muted)",
                }}
              >
                {member.role}
              </span>
            </div>
          ))}
          <div style={{ borderTop: "1px solid var(--color-line)" }} />
        </div>
      </div>
    </section>
  );
}
