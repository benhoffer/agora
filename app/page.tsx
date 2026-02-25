import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Demo from "@/components/Demo";
import About from "@/components/About";
import ActionHub from "@/components/ActionHub";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Demo />
      <About />
      <ActionHub />

      {/* Footer */}
      <footer
        style={{
          background: "#050504",
          borderTop: "1px solid rgba(201,168,76,0.15)",
          padding: "2.5rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
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
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "var(--color-gold)",
              letterSpacing: "0.2em",
            }}
          >
            AGORA
          </span>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              color: "var(--color-muted)",
              opacity: 0.5,
              letterSpacing: "0.05em",
            }}
          >
            © {new Date().getFullYear()} AGORA. Building the infrastructure of
            democracy.
          </p>
        </div>
      </footer>
    </main>
  );
}
