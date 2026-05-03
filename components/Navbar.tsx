"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s ease, border-color 0.3s ease",
        background: scrolled
          ? "rgba(12, 11, 9, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(201, 168, 76, 0.2)"
          : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Wordmark */}
        <a
          href="#top"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.75rem",
            fontWeight: 600,
            color: "var(--color-gold)",
            letterSpacing: "0.2em",
            textDecoration: "none",
          }}
        >
          AGORA
        </a>

        {/* Nav links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          {[
            { label: "Solution", href: "#solution" },
            { label: "Demo", href: "#demo" },
            { label: "Team", href: "#team" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: "var(--color-muted)",
                fontSize: "0.875rem",
                letterSpacing: "0.08em",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--color-text)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "var(--color-muted)")
              }
            >
              {link.label}
            </a>
          ))}

          <a
            href="#join"
            style={{
              padding: "0.5rem 1.25rem",
              border: "1px solid var(--color-gold)",
              color: "var(--color-gold)",
              fontSize: "0.875rem",
              letterSpacing: "0.08em",
              textDecoration: "none",
              transition: "background 0.2s, color 0.2s",
              fontFamily: "var(--font-sans)",
            }}
            onMouseEnter={(e) => {
              const el = e.target as HTMLElement;
              el.style.background = "var(--color-gold)";
              el.style.color = "#0c0b09";
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLElement;
              el.style.background = "transparent";
              el.style.color = "var(--color-gold)";
            }}
          >
            Request AGORA
          </a>
        </div>
      </div>
    </nav>
  );
}
