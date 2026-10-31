import type { Dict } from "@/lib/i18n/types";

export default function SiteFooter({ t }: { t: Dict }) {
  const link: React.CSSProperties = { color: "var(--color-muted)", textDecoration: "underline" };
  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-line)",
        padding: "2.2rem clamp(1.6rem, 5vw, 5rem)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.05rem",
          fontWeight: 600,
          color: "var(--color-text)",
          letterSpacing: "0.2em",
        }}
      >
        AGORA
      </span>
      <nav
        style={{
          display: "flex",
          gap: "1.4rem",
          flexWrap: "wrap",
          fontFamily: "var(--font-sans)",
          fontSize: "0.78rem",
        }}
      >
        <a href={t.paths.legal} style={link}>{t.footer.legal}</a>
        <a href={t.paths.privacy} style={link}>{t.footer.privacy}</a>
        <a href={t.paths.other} hrefLang={t.locale === "fr" ? "en" : "fr"} style={link}>
          {t.sidebar.switchLabel}
        </a>
      </nav>
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "0.72rem",
          color: "var(--color-faint)",
          letterSpacing: "0.05em",
        }}
      >
        © {new Date().getFullYear()} AGORA — {t.footer.tagline}
      </p>
    </footer>
  );
}
