"use client";

import { useState } from "react";

type LegislationKey =
  | "infrastructure"
  | "zoning"
  | "education"
  | "climate";

interface Analysis {
  summary: string;
  impacts: string[];
  position: string;
}

const LEGISLATION: Record<
  LegislationKey,
  { label: string; analysis: Analysis }
> = {
  infrastructure: {
    label: "Infrastructure Reinvestment Act (2024)",
    analysis: {
      summary:
        "This bill allocates $1.2 trillion over ten years to repair roads, bridges, rail networks, and broadband infrastructure across the United States. Funding is distributed via formula grants to states, with a 20% set-aside for rural and underserved communities.",
      impacts: [
        "Local governments will receive direct formula grants — no competitive application required for core funding.",
        "Private contractors and unions will see a surge in public works contracts, with prevailing wage requirements attached.",
        "Rural broadband deployment mandates could reduce the digital divide significantly over the next 5 years.",
      ],
      position:
        "AGORA recommends your institution support this legislation while advocating for stronger accountability provisions. The formula grant structure is favorable for smaller jurisdictions, but the absence of independent oversight mechanisms creates risk of fund misallocation. Consider submitting comments to the relevant committee requesting the addition of an Inspector General provision.",
    },
  },
  zoning: {
    label: "Local Zoning Amendment LZ-441",
    analysis: {
      summary:
        "Amendment LZ-441 proposes upzoning residential parcels within a half-mile of public transit corridors, permitting multi-family structures of up to 6 units where single-family zoning currently applies. It also eliminates minimum parking requirements in these zones.",
      impacts: [
        "Current single-family homeowners in transit corridors may see property values rise due to increased development potential.",
        "Renters in affected areas may face displacement pressure as properties are redeveloped — a just-cause eviction ordinance is not included.",
        "The city's housing stock could expand by an estimated 8,000–12,000 units over 10 years if adopted.",
      ],
      position:
        "AGORA analysis indicates strong net benefits for housing affordability at the city level, but significant equity risks for existing low-income renters. We recommend your institution conditionally support with amendments: require 15% affordable unit set-asides in all new 4+ unit developments, and pair passage with a tenant anti-displacement fund.",
    },
  },
  education: {
    label: "Municipal Education Funding Proposal",
    analysis: {
      summary:
        "This proposal restructures the district's per-pupil education funding formula, shifting from a property-tax-based model to a state-administered weighted funding system that allocates additional resources to schools serving students with disabilities, English language learners, and students in poverty.",
      impacts: [
        "High-wealth districts will see a reduction in per-pupil spending; lower-wealth districts will see increases of 15–40%.",
        "Schools with >50% Title I enrollment will receive a 1.3x funding multiplier, enabling additional staffing and programming.",
        "The transition period (3 years) includes hold-harmless provisions so no district loses more than 5% annually.",
      ],
      position:
        "AGORA strongly recommends support for this proposal. The weighted funding model is well-evidenced in the research literature and directly addresses structural inequity in educational opportunity. Advocate for extending the hold-harmless transition period to 5 years to ease implementation pressure on currently high-funded districts during the adjustment phase.",
    },
  },
  climate: {
    label: "Climate Resilience Act — Section 7",
    analysis: {
      summary:
        "Section 7 mandates that all municipal infrastructure projects above $500,000 incorporate a climate vulnerability assessment and adopt resilience standards developed by the EPA. It also establishes a $200M revolving loan fund for pre-disaster resilience upgrades.",
      impacts: [
        "Project timelines will lengthen by an estimated 60–90 days due to required vulnerability assessments.",
        "Small municipalities may struggle with assessment costs — the bill includes a technical assistance program but it is opt-in.",
        "The revolving loan fund prioritizes communities in FEMA's high-risk flood and wildfire zones.",
      ],
      position:
        "AGORA recommends support with implementation safeguards. The resilience mandate is sound policy, but the opt-in nature of technical assistance will systematically disadvantage the smallest jurisdictions with the least capacity. Push for making the technical assistance program mandatory for jurisdictions under 10,000 population, and for grant funding (not loans) for assessments in low-revenue municipalities.",
    },
  },
};

const LEGISLATION_OPTIONS: { value: LegislationKey; label: string }[] = [
  { value: "infrastructure", label: "Infrastructure Reinvestment Act (2024)" },
  { value: "zoning", label: "Local Zoning Amendment LZ-441" },
  { value: "education", label: "Municipal Education Funding Proposal" },
  { value: "climate", label: "Climate Resilience Act — Section 7" },
];

export default function Demo() {
  const [selected, setSelected] = useState<LegislationKey | "">("");
  const [visible, setVisible] = useState(false);

  const handleSelect = (value: LegislationKey | "") => {
    setVisible(false);
    setSelected(value);
    if (value) {
      setTimeout(() => setVisible(true), 80);
    }
  };

  const analysis = selected ? LEGISLATION[selected].analysis : null;

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
      {/* Background ruins image */}
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
          maxWidth: "860px",
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
          Live Demo
        </p>

        {/* Headline */}
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 400,
            color: "var(--color-text)",
            marginBottom: "1rem",
            lineHeight: 1.2,
          }}
        >
          Try AGORA.
        </h2>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.95rem",
            color: "var(--color-muted)",
            lineHeight: 1.7,
            marginBottom: "3rem",
            maxWidth: "560px",
          }}
        >
          Select a piece of real legislation below and watch AGORA analyze it
          instantly — plain language summary, stakeholder impacts, and a drafted
          institutional position.
        </p>

        {/* Selector panel */}
        <div
          className="glass"
          style={{ padding: "2rem", marginBottom: "1.5rem" }}
        >
          <label
            style={{
              display: "block",
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              color: "var(--color-muted)",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Select legislation
          </label>
          <select
            value={selected}
            onChange={(e) =>
              handleSelect(e.target.value as LegislationKey | "")
            }
            style={{
              width: "100%",
              padding: "0.875rem 1rem",
              background: "rgba(0,0,0,0.4)",
              border: "1px solid var(--color-border)",
              color: selected ? "var(--color-text)" : "var(--color-muted)",
              fontFamily: "var(--font-sans)",
              fontSize: "0.9rem",
              appearance: "none",
              cursor: "pointer",
              outline: "none",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) =>
              ((e.target as HTMLElement).style.borderColor =
                "var(--color-border-bright)")
            }
            onBlur={(e) =>
              ((e.target as HTMLElement).style.borderColor =
                "var(--color-border)")
            }
          >
            <option value="" disabled>
              — Choose a bill or amendment —
            </option>
            {LEGISLATION_OPTIONS.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                style={{ background: "#0c0b09", color: "var(--color-text)" }}
              >
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Analysis panel */}
        {analysis && visible && (
          <div className="glass fade-slide-in" style={{ padding: "2.5rem" }}>
            {/* AGORA badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "2rem",
                paddingBottom: "1.5rem",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--color-gold)",
                  letterSpacing: "0.15em",
                }}
              >
                AGORA
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.7rem",
                  color: "var(--color-muted)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Analysis Engine · {new Date().toLocaleDateString()}
              </span>
            </div>

            {/* Plain English Summary */}
            <div style={{ marginBottom: "2rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  color: "var(--color-gold)",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                  opacity: 0.8,
                }}
              >
                Plain English Summary
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9rem",
                  color: "var(--color-text)",
                  lineHeight: 1.75,
                  opacity: 0.9,
                }}
              >
                {analysis.summary}
              </p>
            </div>

            {/* Stakeholder Impacts */}
            <div style={{ marginBottom: "2rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  color: "var(--color-gold)",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                  opacity: 0.8,
                }}
              >
                Key Stakeholder Impacts
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {analysis.impacts.map((impact, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      marginBottom: "0.75rem",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem",
                      color: "var(--color-text)",
                      lineHeight: 1.65,
                      opacity: 0.85,
                    }}
                  >
                    <span
                      style={{
                        color: "var(--color-gold)",
                        flexShrink: 0,
                        marginTop: "0.25rem",
                        fontSize: "0.6rem",
                      }}
                    >
                      ◆
                    </span>
                    {impact}
                  </li>
                ))}
              </ul>
            </div>

            {/* Drafted Position */}
            <div
              style={{
                padding: "1.5rem",
                background: "rgba(201, 168, 76, 0.06)",
                borderLeft: "2px solid var(--color-gold)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  color: "var(--color-gold)",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                  opacity: 0.8,
                }}
              >
                Drafted Institutional Position
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  color: "var(--color-text)",
                  lineHeight: 1.75,
                  opacity: 0.85,
                }}
              >
                {analysis.position}
              </p>
            </div>
          </div>
        )}

        {/* Empty state */}
        {!selected && (
          <div
            style={{
              textAlign: "center",
              padding: "3rem",
              opacity: 0.35,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1rem",
                color: "var(--color-muted)",
                letterSpacing: "0.05em",
              }}
            >
              Select a bill above to see AGORA in action.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
