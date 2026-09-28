import SiteFooter from "@/components/SiteFooter";
import type { Dict } from "@/lib/i18n/types";

/** Plain reading layout for the legal notice and privacy policy. */
export default function LegalPage({
  t,
  title,
  updated,
  children,
}: {
  t: Dict;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header style={{ padding: "1.6rem clamp(1.6rem, 5vw, 5rem)", borderBottom: "1px solid var(--color-line)" }}>
        <a
          href={t.paths.home}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.3rem",
            fontWeight: 600,
            color: "var(--color-text)",
            textDecoration: "none",
            letterSpacing: "0.02em",
          }}
        >
          AGORA
        </a>
      </header>
      <main className="legal" style={{ maxWidth: "720px", margin: "0 auto", padding: "3.5rem 1.6rem 5rem" }}>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 2.8rem)",
            fontWeight: 400,
            color: "var(--color-text)",
            marginBottom: "0.6rem",
          }}
        >
          {title}
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--color-muted)", marginBottom: "2.5rem" }}>
          {updated}
        </p>
        {children}
      </main>
      <SiteFooter t={t} />
    </>
  );
}
