import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { fr } from "@/lib/i18n/fr";
import { PUBLISHER } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité — AGORA",
  alternates: { canonical: "/fr/confidentialite", languages: { en: "/privacy", fr: "/fr/confidentialite" } },
};

export default function Confidentialite() {
  const mail = <a href={`mailto:${PUBLISHER.email}`}>{PUBLISHER.email}</a>;
  return (
    <LegalPage t={fr} title="Politique de confidentialité" updated="Mise à jour : 27 septembre 2026">
      <h2>Responsable du traitement</h2>
      <p>
        {PUBLISHER.name}, {PUBLISHER.form.fr}. Contact pour toute question relative à vos
        données : {mail}.
      </p>

      <h2>Données collectées</h2>
      <p>Uniquement ce que vous saisissez dans le formulaire de demande :</p>
      <ul>
        <li>nom, adresse e-mail et, si vous le renseignez, téléphone ;</li>
        <li>
          votre commune ou collectivité, avec son code INSEE, son département et sa population
          lorsque vous la choisissez dans la liste ;
        </li>
        <li>
          selon le formulaire : fonction, rôle dans la commune, inscription déclarée sur les listes
          électorales, association, message ;
        </li>
        <li>la langue du formulaire et la date d&apos;envoi.</li>
      </ul>
      <p>
        Une demande d&apos;adoption d&apos;AGORA dans votre commune peut révéler une opinion
        politique. C&apos;est pourquoi elle n&apos;est enregistrée qu&apos;avec votre consentement
        explicite.
      </p>
      <p>
        Ce site ne dépose aucun cookie. La mesure d&apos;audience (Vercel Web Analytics) ne
        fonctionne pas avec des cookies et ne sert qu&apos;à compter les pages consultées.
      </p>

      <h2>Finalités et bases légales</h2>
      <ul>
        <li>
          Demandes de citoyens : recenser la demande par commune et vous recontacter à ce sujet
          — sur la base de votre consentement explicite (RGPD, art. 6.1.a et 9.2.a).
        </li>
        <li>
          Courrier au maire en votre nom : uniquement si vous cochez la case correspondante, sur la
          base de votre consentement.
        </li>
        <li>
          Demandes de collectivités et d&apos;associations : répondre à votre demande — sur la base
          de notre intérêt légitime à y donner suite (art. 6.1.f).
        </li>
        <li>Mesure d&apos;audience : intérêt légitime à connaître la fréquentation du site.</li>
      </ul>

      <h2>Destinataires et sous-traitants</h2>
      <p>
        Vos données ne sont ni vendues ni cédées. Elles sont accessibles à l&apos;équipe AGORA et
        traitées pour notre compte par :
      </p>
      <ul>
        <li>Vercel Inc. (États-Unis) — hébergement du site et mesure d&apos;audience ;</li>
        <li>Convex, Inc. (États-Unis) — stockage des demandes ;</li>
        <li>Resend (États-Unis) — envoi de la notification interne de chaque demande ;</li>
        <li>Google LLC (États-Unis) — tableur de suivi des demandes.</li>
      </ul>
      <p>
        Lorsque vous tapez le nom de votre commune, le texte saisi est envoyé depuis votre
        navigateur au service public geo.api.gouv.fr, qui propose les communes correspondantes.
      </p>

      <h2>Transferts hors de l&apos;Union européenne</h2>
      <p>
        Les prestataires ci-dessus sont établis aux États-Unis : vos données y sont donc
        transférées. Les garanties applicables à chacun peuvent être obtenues sur demande à{" "}
        {mail}. Nous prévoyons de faire héberger ces données dans l&apos;Union européenne.
      </p>

      <h2>Durée de conservation</h2>
      <p>
        Trois ans à compter de votre dernier contact avec nous, puis suppression. Si vous retirez
        votre consentement, votre demande est supprimée sans attendre ce délai.
      </p>

      <h2>Vos droits</h2>
      <p>
        Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de
        limitation, d&apos;opposition et de portabilité, du droit de retirer votre consentement à
        tout moment, et du droit de définir des directives relatives au sort de vos données après
        votre décès. Pour les exercer, écrivez à {mail}.
      </p>
      <p>
        Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation
        à la CNIL (<a href="https://www.cnil.fr">www.cnil.fr</a>).
      </p>
    </LegalPage>
  );
}
