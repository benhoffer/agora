"use client";

import { useState } from "react";

type Persona =
  | "institution"
  | "company"
  | "investor"
  | "citizen"
  | null;

const PERSONAS: { id: Persona; label: string; description: string }[] = [
  {
    id: "institution",
    label: "A Public Institution",
    description: "City council, state agency, school district, or other government body",
  },
  {
    id: "company",
    label: "A Private Company / Organization",
    description: "Corporation, nonprofit, union, or professional association",
  },
  {
    id: "investor",
    label: "An Investment Group",
    description: "VC, family office, angel network, or institutional fund",
  },
  {
    id: "citizen",
    label: "An Individual Citizen",
    description: "Someone who believes democracy deserves better tools",
  },
];

function inputStyle(focused: boolean = false): React.CSSProperties {
  return {
    width: "100%",
    padding: "0.75rem 1rem",
    background: "rgba(0,0,0,0.35)",
    border: `1px solid ${focused ? "rgba(201,168,76,0.6)" : "rgba(201,168,76,0.2)"}`,
    color: "var(--color-text)",
    fontFamily: "var(--font-sans)",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.2s",
  };
}

function labelStyle(): React.CSSProperties {
  return {
    display: "block",
    fontFamily: "var(--font-sans)",
    fontSize: "0.7rem",
    letterSpacing: "0.15em",
    color: "var(--color-muted)",
    textTransform: "uppercase" as const,
    marginBottom: "0.4rem",
  };
}

function FieldGroup({
  label,
  name,
  type = "text",
  placeholder = "",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label style={labelStyle()}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        style={inputStyle(focused)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}

function SelectGroup({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label style={labelStyle()}>{label}</label>
      <select
        name={name}
        style={{
          ...inputStyle(focused),
          appearance: "none",
          cursor: "pointer",
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        <option value="">Select one</option>
        {options.map((o) => (
          <option key={o} value={o} style={{ background: "#0c0b09" }}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextAreaGroup({ label, name }: { label: string; name: string }) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label style={labelStyle()}>{label}</label>
      <textarea
        name={name}
        rows={4}
        style={{
          ...inputStyle(focused),
          resize: "vertical",
          minHeight: "100px",
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}

function InstitutionForm() {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}
    >
      <FieldGroup label="Your Name" name="name" required />
      <FieldGroup label="Title / Role" name="title" required />
      <FieldGroup label="Jurisdiction" name="jurisdiction" placeholder="City of Portland, OR" required />
      <SelectGroup
        label="Jurisdiction Size"
        name="size"
        options={["Under 10,000", "10,000–50,000", "50,000–250,000", "250,000–1M", "Over 1M"]}
      />
      <SelectGroup
        label="Governance Structure"
        name="structure"
        options={["City Council", "County Board", "State Agency", "School District", "Special District", "Other"]}
      />
      <FieldGroup label="Email" name="email" type="email" required />
      <div style={{ gridColumn: "1 / -1" }}>
        <TextAreaGroup label="Tell us about your governance challenge" name="message" />
      </div>
    </div>
  );
}

function CompanyForm() {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}
    >
      <FieldGroup label="Your Name" name="name" required />
      <FieldGroup label="Company / Organization" name="company" required />
      <FieldGroup label="Your Role" name="role" required />
      <SelectGroup
        label="Organization Size"
        name="size"
        options={["1–10", "11–50", "51–250", "251–1,000", "1,000+"]}
      />
      <FieldGroup label="Email" name="email" type="email" required />
      <SelectGroup
        label="Primary Use Case"
        name="usecase"
        options={["Corporate Governance", "Internal Policy", "Board Oversight", "Union / Association", "Nonprofit Compliance", "Other"]}
      />
      <div style={{ gridColumn: "1 / -1" }}>
        <TextAreaGroup label="Describe your governance needs" name="message" />
      </div>
    </div>
  );
}

function InvestorForm() {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}
    >
      <FieldGroup label="Your Name" name="name" required />
      <FieldGroup label="Fund / Group Name" name="fund" required />
      <FieldGroup label="Email" name="email" type="email" required />
      <FieldGroup label="Phone (Optional)" name="phone" type="tel" />
      <SelectGroup
        label="Fund Size"
        name="fundsize"
        options={["Pre-fund / Angel", "Under $10M", "$10M–$100M", "$100M–$500M", "Over $500M"]}
      />
      <SelectGroup
        label="Investment Stage Focus"
        name="stage"
        options={["Pre-seed", "Seed", "Series A", "Growth", "Multi-stage"]}
      />
      <div style={{ gridColumn: "1 / -1" }}>
        <TextAreaGroup label="Tell us why AGORA interests you" name="message" />
      </div>
    </div>
  );
}

function CitizenForm() {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}
    >
      <FieldGroup label="Your Name" name="name" required />
      <FieldGroup label="Email" name="email" type="email" required />
      <div style={{ gridColumn: "1 / -1" }}>
        <FieldGroup label="City / State" name="location" placeholder="Portland, OR" />
      </div>
      {/* Letter checkbox */}
      <div style={{ gridColumn: "1 / -1" }}>
        <label
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "0.75rem",
            cursor: "pointer",
          }}
        >
          <input
            type="checkbox"
            name="letter"
            style={{
              marginTop: "3px",
              accentColor: "var(--color-gold)",
              width: "15px",
              height: "15px",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.85rem",
              color: "var(--color-text)",
              lineHeight: 1.6,
              opacity: 0.85,
            }}
          >
            Send an AGORA-drafted letter to my local representatives demanding
            better civic infrastructure.
          </span>
        </label>
      </div>
      <div style={{ gridColumn: "1 / -1" }}>
        <TextAreaGroup label="Anything else you want us to know?" name="message" />
      </div>
    </div>
  );
}

export default function ActionHub() {
  const [persona, setPersona] = useState<Persona>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: { preventDefault(): void; currentTarget: HTMLFormElement }) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const fields = Object.fromEntries(formData.entries()) as Record<string, string>;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ persona, fields }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="join"
      style={{
        position: "relative",
        padding: "8rem 2rem 10rem",
        background: "#080706",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=1400&q=30')",
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
          Get Involved
        </p>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 400,
            color: "var(--color-text)",
            marginBottom: "0.75rem",
            lineHeight: 1.2,
          }}
        >
          Join the Assembly.
        </h2>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.95rem",
            color: "var(--color-muted)",
            lineHeight: 1.7,
            marginBottom: "3rem",
          }}
        >
          Tell us who you are. We&apos;ll take it from there.
        </p>

        {/* Persona selector */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          {PERSONAS.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                setPersona(p.id);
                setSubmitted(false);
              }}
              style={{
                padding: "1.5rem 1rem",
                background:
                  persona === p.id
                    ? "rgba(201,168,76,0.12)"
                    : "rgba(255,255,255,0.04)",
                border: `1px solid ${
                  persona === p.id
                    ? "rgba(201,168,76,0.6)"
                    : "rgba(201,168,76,0.15)"
                }`,
                color:
                  persona === p.id
                    ? "var(--color-gold)"
                    : "var(--color-muted)",
                fontFamily: "var(--font-sans)",
                fontSize: "0.8rem",
                fontWeight: persona === p.id ? 500 : 400,
                letterSpacing: "0.03em",
                lineHeight: 1.4,
                textAlign: "left",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <span style={{ display: "block", marginBottom: "0.4rem" }}>
                {p.label}
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "0.7rem",
                  opacity: 0.6,
                  lineHeight: 1.5,
                  fontWeight: 400,
                  color: "var(--color-muted)",
                }}
              >
                {p.description}
              </span>
            </button>
          ))}
        </div>

        {/* Form */}
        {persona && !submitted && (
          <div className="glass fade-slide-in" style={{ padding: "2.5rem" }}>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "2rem" }}>
                {persona === "institution" && <InstitutionForm />}
                {persona === "company" && <CompanyForm />}
                {persona === "investor" && <InvestorForm />}
                {persona === "citizen" && <CitizenForm />}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    padding: "0.875rem 2.5rem",
                    background: loading ? "rgba(201,168,76,0.4)" : "var(--color-gold)",
                    color: "#0c0b09",
                    border: "none",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    cursor: loading ? "not-allowed" : "pointer",
                    transition: "background 0.2s, transform 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    if (loading) return;
                    const el = e.target as HTMLElement;
                    el.style.background = "var(--color-gold-light)";
                    el.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    if (loading) return;
                    const el = e.target as HTMLElement;
                    el.style.background = "var(--color-gold)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {loading ? "Sending…" : "Submit"}
                </button>

                {error && (
                  <p
                    style={{
                      marginTop: "0.75rem",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.8rem",
                      color: "#e05c5c",
                      lineHeight: 1.5,
                    }}
                  >
                    {error}
                  </p>
                )}
              </div>
            </form>
          </div>
        )}

        {/* Success state */}
        {submitted && (
          <div
            className="glass fade-slide-in"
            style={{ padding: "3rem", textAlign: "center" }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2rem",
                color: "var(--color-gold)",
                marginBottom: "1rem",
              }}
            >
              ◆
            </p>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.8rem",
                fontWeight: 400,
                color: "var(--color-text)",
                marginBottom: "0.75rem",
              }}
            >
              You&apos;re in the Assembly.
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9rem",
                color: "var(--color-muted)",
                lineHeight: 1.7,
              }}
            >
              Thank you for reaching out. We&apos;ll be in contact shortly.
            </p>
          </div>
        )}

        {/* Footer note */}
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.75rem",
            color: "var(--color-muted)",
            marginTop: "2rem",
            opacity: 0.5,
            lineHeight: 1.6,
          }}
        >
          Your information is never shared or sold. AGORA is a sovereign,
          privacy-first organization.
        </p>
      </div>
    </section>
  );
}
