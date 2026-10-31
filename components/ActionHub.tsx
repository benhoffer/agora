"use client";

import { useEffect, useId, useState } from "react";
import type { Dict, FieldSpec, Locale, Persona as PersonaId } from "@/lib/i18n/types";
import CommuneField from "./CommuneField";

type Persona = PersonaId | null;

function inputStyle(focused: boolean = false): React.CSSProperties {
  return {
    width: "100%",
    padding: "0.75rem 1rem",
    background: "#fffdf6",
    border: `1px solid ${focused ? "rgba(183,146,42,0.7)" : "var(--color-line)"}`,
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

function Field({ spec, t }: { spec: FieldSpec; t: Dict["join"] }) {
  const id = useId();
  const [focused, setFocused] = useState(false);
  const focus = { onFocus: () => setFocused(true), onBlur: () => setFocused(false) };

  switch (spec.kind) {
    case "text":
      return (
        <div style={spec.full ? { gridColumn: "1 / -1" } : undefined}>
          <label htmlFor={id} style={labelStyle()}>{spec.label}</label>
          <input
            id={id}
            type={spec.type ?? "text"}
            name={spec.name}
            placeholder={spec.placeholder}
            required={spec.required}
            style={inputStyle(focused)}
            {...focus}
          />
        </div>
      );
    case "select":
      return (
        <div>
          <label htmlFor={id} style={labelStyle()}>{spec.label}</label>
          <select
            id={id}
            name={spec.name}
            required={spec.required}
            style={{ ...inputStyle(focused), appearance: "none", cursor: "pointer" }}
            {...focus}
          >
            <option value="">{t.selectOne}</option>
            {spec.options.map((o) => (
              <option key={o} value={o} style={{ background: "#fffdf6" }}>
                {o}
              </option>
            ))}
          </select>
        </div>
      );
    case "textarea":
      return (
        <div style={{ gridColumn: "1 / -1" }}>
          <label htmlFor={id} style={labelStyle()}>{spec.label}</label>
          <textarea
            id={id}
            name={spec.name}
            rows={4}
            style={{ ...inputStyle(focused), resize: "vertical", minHeight: "100px" }}
            {...focus}
          />
        </div>
      );
    case "checkbox":
      return (
        <div style={{ gridColumn: "1 / -1" }}>
          <label style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", cursor: "pointer" }}>
            <input
              type="checkbox"
              name={spec.name}
              value="yes"
              required={spec.required}
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
              {spec.label}
            </span>
          </label>
        </div>
      );
    case "commune":
      return (
        <CommuneField
          name={spec.name}
          label={spec.label}
          placeholder={spec.placeholder}
          required={spec.required}
          strict={spec.strict}
          inputStyle={inputStyle}
          labelStyle={labelStyle()}
          messages={{ required: t.communeRequired, noResults: t.communeNoResults, searching: t.communeSearching }}
        />
      );
  }
}

export default function ActionHub({
  t,
  locale,
  shareUrl,
  privacyPath,
}: {
  t: Dict["join"];
  locale: Locale;
  shareUrl: string;
  privacyPath: string;
}) {
  const [persona, setPersona] = useState<Persona>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [linkCopied, setLinkCopied] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<Persona>).detail;
      if (detail === "citizen" || detail === "government") {
        setPersona(detail);
        setSubmitted(false);
      }
    };
    window.addEventListener("agora:set-persona", handler);
    return () => window.removeEventListener("agora:set-persona", handler);
  }, []);

  const handleSubmit = async (e: { preventDefault(): void; currentTarget: HTMLFormElement }) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const fields = {
      ...(Object.fromEntries(formData.entries()) as Record<string, string>),
      lang: locale,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ persona, fields }),
      });

      // The route's own error text is English; the visitor sees their language.
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError(t.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="join" className="section" style={{ paddingBottom: "8rem" }}>
      <div style={{ maxWidth: "880px" }}>
        <p className="section-mark">{t.mark}</p>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3.4rem)",
            fontWeight: 400,
            color: "var(--color-text)",
            marginBottom: "3rem",
            lineHeight: 1.15,
            maxWidth: "620px",
          }}
        >
          {t.heading}
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          {t.personas.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                setPersona(p.id);
                setSubmitted(false);
              }}
              style={{
                padding: "1.5rem 1.25rem",
                background:
                  persona === p.id
                    ? "var(--color-gold-dim)"
                    : "#fffdf6",
                border: `1px solid ${
                  persona === p.id
                    ? "rgba(183,146,42,0.6)"
                    : "var(--color-line)"
                }`,
                color:
                  persona === p.id ? "var(--color-gold-deep)" : "var(--color-muted)",
                fontFamily: "var(--font-sans)",
                fontSize: "0.85rem",
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
                  fontSize: "0.72rem",
                  opacity: 0.7,
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

        {persona && !submitted && (
          <div
            className="fade-slide-in"
            style={{
              padding: "2.5rem",
              border: "1px solid var(--color-line)",
              background: "var(--color-panel)",
            }}
          >
            <form onSubmit={handleSubmit}>
              {/* Keyed on persona so switching forms resets their fields. */}
              <div
                key={persona}
                className="form-grid"
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "2rem" }}
              >
                {t.forms[persona].map((spec) => (
                  <Field key={spec.name} spec={spec} t={t} />
                ))}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    padding: "0.875rem 2.5rem",
                    background: loading ? "rgba(183,146,42,0.4)" : "var(--color-gold)",
                    color: "var(--color-text)",
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
                    el.style.background = "var(--color-gold-deep)";
                    el.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    if (loading) return;
                    const el = e.target as HTMLElement;
                    el.style.background = "var(--color-gold)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {loading ? t.sending : t.submit}
                </button>

                {error && (
                  <p
                    style={{
                      marginTop: "0.75rem",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.8rem",
                      color: "#a83b3b",
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

        {submitted && (
          <div
            className="fade-slide-in"
            style={{
              padding: "3rem",
              textAlign: "center",
              border: "1px solid var(--color-line)",
              background: "var(--color-panel)",
            }}
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
              {t.successHeading}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.9rem",
                color: "var(--color-muted)",
                lineHeight: 1.7,
                marginBottom: "1.75rem",
              }}
            >
              {t.successBody}
            </p>
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(shareUrl);
                setLinkCopied(true);
                setTimeout(() => setLinkCopied(false), 2000);
              }}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.85rem",
                letterSpacing: "0.05em",
                color: "var(--color-gold-deep)",
                background: "transparent",
                border: "1px solid var(--color-gold-deep)",
                padding: "0.7rem 1.5rem",
                cursor: "pointer",
              }}
            >
              {linkCopied ? t.linkCopied : t.copyLink}
            </button>
          </div>
        )}

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.75rem",
            color: "var(--color-muted)",
            marginTop: "2rem",
            opacity: 0.85,
            lineHeight: 1.6,
          }}
        >
          {t.privacyNotice}{" "}
          <a href={privacyPath} style={{ color: "inherit" }}>
            {t.privacyLinkText}
          </a>
        </p>
      </div>
    </section>
  );
}
