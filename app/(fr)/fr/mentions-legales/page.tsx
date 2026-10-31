import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { fr } from "@/lib/i18n/fr";
import { HOST, PUBLISHER } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales — AGORA",
  alternates: { canonical: "/fr/mentions-legales", languages: { en: "/legal", fr: "/fr/mentions-legales" } },
};

export default function MentionsLegales() {
  return (
    <LegalPage t={fr} title="Mentions légales" updated="Mise à jour : 27 septembre 2026">
      <p>
        Conformément à l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance
        dans l&apos;économie numérique, voici l&apos;identité des différents intervenants du site.
      </p>

      <h2>Éditeur</h2>
      <p>
        {PUBLISHER.name}, {PUBLISHER.form.fr}.
        <br />
        Adresse :{" "}
        {PUBLISHER.address ?? <span className="pending">[adresse du siège à compléter]</span>}
        <br />
        Contact : <a href={`mailto:${PUBLISHER.email}`}>{PUBLISHER.email}</a>
      </p>

      <h2>Directeur de la publication</h2>
      <p>{PUBLISHER.director}</p>

      <h2>Hébergeur</h2>
      <p>
        {HOST.name}, {HOST.address.fr} — <a href={HOST.url}>{HOST.url.replace("https://", "")}</a>
      </p>

      <h2>Données personnelles</h2>
      <p>
        Le traitement des données transmises par le formulaire de demande est décrit dans la{" "}
        <a href={fr.paths.privacy}>politique de confidentialité</a>.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        Les textes, vidéos et éléments graphiques de ce site sont la propriété de {PUBLISHER.name},
        sauf mention contraire. Toute reproduction non autorisée est interdite.
      </p>
    </LegalPage>
  );
}
