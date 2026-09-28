import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { en } from "@/lib/i18n/en";
import { HOST, PUBLISHER } from "@/lib/site";

export const metadata: Metadata = {
  title: "Legal notice — AGORA",
  alternates: { canonical: "/legal", languages: { en: "/legal", fr: "/fr/mentions-legales" } },
};

export default function LegalNotice() {
  return (
    <LegalPage t={en} title="Legal notice" updated="Updated September 27, 2026">
      <h2>Publisher</h2>
      <p>
        {PUBLISHER.name}, a {PUBLISHER.form.en}.
        <br />
        Address:{" "}
        {PUBLISHER.address ?? <span className="pending">[registered address to be completed]</span>}
        <br />
        Contact: <a href={`mailto:${PUBLISHER.email}`}>{PUBLISHER.email}</a>
      </p>

      <h2>Director of publication</h2>
      <p>{PUBLISHER.director}</p>

      <h2>Hosting</h2>
      <p>
        {HOST.name}, {HOST.address.en} — <a href={HOST.url}>{HOST.url.replace("https://", "")}</a>
      </p>

      <h2>Personal data</h2>
      <p>
        How information submitted through the request form is handled is described in the{" "}
        <a href={en.paths.privacy}>privacy policy</a>.
      </p>

      <h2>Intellectual property</h2>
      <p>
        Text, video and graphics on this site belong to {PUBLISHER.name} unless stated otherwise.
        Unauthorized reproduction is prohibited.
      </p>
    </LegalPage>
  );
}
