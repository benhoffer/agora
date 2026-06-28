import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Solution from "@/components/Solution";
import Demo from "@/components/Demo";
import Team from "@/components/Team";
import ActionHub from "@/components/ActionHub";

export default function Home() {
  return (
    <>
      {/* Colosseum — fixed behind everything, content scrolls over it */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1920&q=80')",
          backgroundSize: "160%",
          backgroundPosition: "70% 35%",
          backgroundRepeat: "no-repeat",
          opacity: 0.38,
        }}
      />
      {/* Dark vignette over the photo */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          background:
            "linear-gradient(to right, rgba(11,10,8,0.55) 0%, rgba(11,10,8,0.15) 55%, rgba(11,10,8,0.45) 100%), linear-gradient(to bottom, rgba(11,10,8,0.15) 0%, rgba(11,10,8,0.75) 90%)",
        }}
      />
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
                color: "var(--color-gold)",
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
