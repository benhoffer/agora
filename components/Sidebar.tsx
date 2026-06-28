"use client";

import { useEffect, useState } from "react";

const NAV = [
  { num: "01", label: "Manifest", href: "#top", id: "top" },
  { num: "02", label: "Platform", href: "#solution", id: "solution" },
  { num: "03", label: "Demo", href: "#demo", id: "demo" },
  { num: "04", label: "Expertise", href: "#team", id: "team" },
  { num: "05", label: "Request", href: "#join", id: "join" },
];

export default function Sidebar() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(
      Boolean
    ) as HTMLElement[];

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <aside className="sidebar">
      {/* Wordmark */}
      <a
        href="#top"
        style={{
          textDecoration: "none",
          display: "flex",
          alignItems: "baseline",
          gap: "0.6rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.7rem",
            fontWeight: 600,
            color: "var(--color-gold)",
            letterSpacing: "0.24em",
          }}
        >
          AGORA
        </span>
      </a>

      <p
        className="sidebar-mid"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.66rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--color-faint)",
          marginTop: "0.7rem",
          lineHeight: 1.7,
        }}
      >
        Civic infrastructure
        <br />
        for direct democracy
      </p>

      {/* Index nav */}
      <nav
        className="sidebar-mid"
        style={{
          marginTop: "3.2rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.15rem",
          flex: 1,
        }}
      >
        {NAV.map((item) => {
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "0.8rem",
                padding: "0.55rem 0",
                textDecoration: "none",
                color: isActive ? "var(--color-text)" : "var(--color-muted)",
                transition: "color 0.25s ease, padding-left 0.35s ease",
                paddingLeft: isActive ? "0.5rem" : 0,
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "var(--color-text)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = isActive
                  ? "var(--color-text)"
                  : "var(--color-muted)")
              }
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.8rem",
                  color: isActive ? "var(--color-gold)" : "var(--color-faint)",
                  fontVariantNumeric: "tabular-nums",
                  minWidth: "1.4rem",
                  transition: "color 0.25s ease",
                }}
              >
                {item.num}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                {item.label}
              </span>
              {isActive && (
                <span
                  style={{
                    marginLeft: "auto",
                    width: "16px",
                    height: "1px",
                    background: "var(--color-gold)",
                    alignSelf: "center",
                  }}
                />
              )}
            </a>
          );
        })}
      </nav>

      {/* CTA pinned bottom (becomes inline button on mobile) */}
      <a
        href="#join"
        style={{
          textAlign: "center",
          padding: "0.7rem 1.1rem",
          border: "1px solid var(--color-gold)",
          color: "var(--color-gold)",
          fontFamily: "var(--font-sans)",
          fontSize: "0.72rem",
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          textDecoration: "none",
          transition: "background 0.2s, color 0.2s",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.background = "var(--color-gold)";
          el.style.color = "#0b0a08";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.background = "transparent";
          el.style.color = "var(--color-gold)";
        }}
      >
        Request AGORA
      </a>
    </aside>
  );
}
