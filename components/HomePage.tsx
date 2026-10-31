import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Solution from "@/components/Solution";
import Demo from "@/components/Demo";
import Team from "@/components/Team";
import ActionHub from "@/components/ActionHub";
import SiteFooter from "@/components/SiteFooter";
import { SITE_URL } from "@/lib/site";
import type { Dict } from "@/lib/i18n/types";

export default function HomePage({ t }: { t: Dict }) {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div className="shell">
        <Sidebar t={t.sidebar} otherPath={t.paths.other} />
        <main className="main">
          <Hero t={t.hero} />
          <Solution t={t.solution} />
          <Demo t={t.demo} />
          <Team t={t.team} />
          <ActionHub
            t={t.join}
            locale={t.locale}
            shareUrl={SITE_URL + (t.paths.home === "/" ? "" : t.paths.home)}
            privacyPath={t.paths.privacy}
          />
          <SiteFooter t={t} />
        </main>
      </div>
    </>
  );
}
