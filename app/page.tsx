import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Solution from "@/components/Solution";
import Demo from "@/components/Demo";
import Team from "@/components/Team";
import ActionHub from "@/components/ActionHub";

export default function Home() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div className="shell">
        <Sidebar />
        <main className="main">
          <Hero />
          <Solution />
          <Demo />
          <Team />
          <ActionHub />

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
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.72rem",
                color: "var(--color-faint)",
                letterSpacing: "0.05em",
              }}
            >
              © {new Date().getFullYear()} AGORA — building the infrastructure of
              democracy.
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
