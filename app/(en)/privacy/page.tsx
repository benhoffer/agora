import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { en } from "@/lib/i18n/en";
import { PUBLISHER } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy — AGORA",
  alternates: { canonical: "/privacy", languages: { en: "/privacy", fr: "/fr/confidentialite" } },
};

export default function Privacy() {
  const mail = <a href={`mailto:${PUBLISHER.email}`}>{PUBLISHER.email}</a>;
  return (
    <LegalPage t={en} title="Privacy policy" updated="Updated September 27, 2026">
      <h2>Who is responsible</h2>
      <p>
        {PUBLISHER.name}, a {PUBLISHER.form.en}. Questions about your data: {mail}.
      </p>

      <h2>What we collect</h2>
      <p>Only what you enter in the request form:</p>
      <ul>
        <li>name, email address and, if you give it, phone number;</li>
        <li>
          your municipality or jurisdiction — for French communes picked from the list, also its
          INSEE code, département and population;
        </li>
        <li>depending on the form: title, role in the community, organization, message;</li>
        <li>the form&apos;s language and the date you sent it.</li>
      </ul>
      <p>
        Asking for AGORA in your community can reveal a political view, so a citizen request is
        stored only with your explicit consent.
      </p>
      <p>
        This site sets no cookies. Audience measurement (Vercel Web Analytics) works without
        cookies and only counts page views.
      </p>

      <h2>Why, and on what basis</h2>
      <ul>
        <li>
          Citizen requests: to count demand by community and contact you about it — your explicit
          consent (GDPR art. 6(1)(a) and 9(2)(a)).
        </li>
        <li>A letter sent on your behalf: only if you tick that box, on the basis of your consent.</li>
        <li>
          Government and organization inquiries: to answer you — our legitimate interest in
          responding (art. 6(1)(f)).
        </li>
        <li>Audience measurement: legitimate interest in knowing how the site is used.</li>
      </ul>

      <h2>Who processes it</h2>
      <p>Your information is never sold or shared. The AGORA team and these processors handle it:</p>
      <ul>
        <li>Vercel Inc. (United States) — hosting and audience measurement;</li>
        <li>Convex, Inc. (United States) — storing requests;</li>
        <li>Resend (United States) — the internal notification email for each request;</li>
        <li>Google LLC (United States) — the spreadsheet used to track requests.</li>
      </ul>
      <p>
        On the French form, what you type in the commune field is sent from your browser to the
        French government&apos;s public geo.api.gouv.fr service to suggest matching communes.
      </p>

      <h2>International transfers</h2>
      <p>
        These processors are in the United States, so data is transferred there. The safeguards
        for each are available on request at {mail}. We plan to move this data to hosting in the
        European Union.
      </p>

      <h2>How long we keep it</h2>
      <p>
        Three years from your last contact with us, then deleted. If you withdraw consent, your
        request is deleted without waiting.
      </p>

      <h2>Your rights</h2>
      <p>
        You can access, correct, delete, restrict, object to and port your data, and withdraw
        consent at any time. Write to {mail}. If you are in the European Union you may also
        complain to your data protection authority — in France, the CNIL (
        <a href="https://www.cnil.fr">www.cnil.fr</a>).
      </p>
    </LegalPage>
  );
}
