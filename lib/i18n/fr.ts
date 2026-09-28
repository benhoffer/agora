import type { Dict } from "./types";

export const fr: Dict = {
  locale: "fr",
  meta: {
    title: "AGORA — Infrastructure de référence pour la démocratie directe",
    description:
      "Nous construisons une infrastructure de gouvernance sûre, efficace et collaborative pour toute institution — des conseils municipaux aux associations de quartier.",
    ogDescription: "Infrastructure de référence pour la démocratie directe.",
  },
  sidebar: {
    tagline: ["Infrastructure civique", "pour la démocratie directe"],
    nav: { top: "Manifeste", solution: "Plateforme", demo: "Démo", team: "Expertise", join: "Demande" },
    cta: "Demander AGORA",
    switchLabel: "English",
  },
  hero: {
    eyebrow: "Démocratie délibérative · directe · profonde",
    subtitle: "Une infrastructure civique de référence pour la démocratie.",
    body: "Les démocraties s'érodent tandis que les pouvoirs autoritaires se consolident, et les technologies les plus récentes sont détournées au profit de la surveillance et de la répression plutôt que de l'autonomie. AGORA rend ces mêmes outils aux communautés — une infrastructure souveraine et sécurisée, grâce à laquelle les citoyens lisent, écrivent et ratifient les normes, sur un serveur qui leur appartient. La démocratie représentative n'a jamais offert au public qu'un droit de vote. AGORA propose de donner aux communautés le pouvoir réel : l'écriture de la loi.",
    watchDemo: "Voir la démo",
    request: "Demander AGORA",
  },
  solution: {
    mark: "§ 02 — La plateforme",
    heading: "L'infrastructure de la démocratie profonde.",
    intro:
      "Une plateforme sûre, détenue par la communauté, pour les propositions, les pétitions, le débat et la recherche participative — une gouvernance démocratique directe et exigeante, avec la sécurité, la traçabilité et l'export qu'attend une collectivité.",
    items: [
      {
        num: "01",
        title: "Comprendre et rédiger",
        body: "Reformulez tout texte à différents niveaux de lecture, du plus simple au plus juridique. Posez des questions dans un langage vernaculaire et obtenez des réponses sourcées, fondées sur le droit positif. Comparez deux textes côte à côte, avec vérification avant publication de leur conformité au droit auquel le texte est subordonné.",
      },
      {
        num: "02",
        title: "Pétitionner et débattre",
        body: "Des commentaires rattachés à chaque article. Une participation vérifiée — pas de robots. Des signatures de pétition vérifiées par e-mail et protégées contre les abus.",
      },
      {
        num: "03",
        title: "Gouverner à chaque échelle",
        body: "Les problèmes collectifs se résolvent mieux par les citoyens eux-mêmes, à l'échelle du problème — commune, intercommunalité, département ou nation. Des organisations imbriquées qui héritent automatiquement du droit supérieur : les quartiers dans les communes, les communes dans leur intercommunalité. Un journal d'audit chaîné et infalsifiable. Un export complet en un clic pour répondre au droit d'accès aux documents administratifs. Des rôles distincts : propriétaire, administrateur, modérateur, membre, lecteur.",
      },
    ],
    footnote:
      "Déploiement local et souverain — toutes les données civiques restent dans la base de données de la collectivité. Inférence locale via Ollama, avec un mode hybride optionnel via l'API Claude.",
  },
  demo: {
    mark: "§ 03 — En action",
    heading: "Voyez-la, puis découvrez comment elle fonctionne.",
    intro:
      "Pourquoi AGORA existe, et à quoi elle ressemble de bout en bout — analyse, délibération, pétition et export, en moins de cinq minutes.",
    promoLabel: "AGORA : quoi et pourquoi",
    walkthroughLabel: "Visite de la plateforme",
    videoLanguageNote: "Vidéos en anglais. Les sous-titres français sont en préparation.",
    noVideo: "Votre navigateur ne lit pas la vidéo intégrée. Téléchargez-la ici :",
    ctaCitizen: "Demander AGORA dans ma commune",
    ctaGovernment: "Collectivités : demande d'information",
  },
  team: {
    mark: "§ 04 — Expertise et mouvement",
    heading: "Une équipe engagée, entre théorie et action.",
    members: [
      { name: "Benjamin Hoffer", role: "Responsable du projet" },
      { name: "Margaux Harrington", role: "Relations et logistique" },
      { name: "Andrey Belyatov", role: "Conseiller — cybersécurité" },
      { name: "Justin Phillips, PhD", role: "Conseiller — science politique quantitative" },
      { name: "Graham Dove, PhD", role: "Conseiller — numérique civique" },
    ],
  },
  join: {
    mark: "§ 05 — Demander AGORA",
    heading: "Faites venir AGORA dans votre commune.",
    personas: [
      {
        id: "citizen",
        label: "Je suis citoyen ou citoyenne",
        description: "Demandez AGORA pour votre commune.",
      },
      {
        id: "government",
        label: "Je représente une collectivité",
        description: "Demandez une démonstration ou une expérimentation.",
      },
      {
        id: "ngo",
        label: "Je représente une association",
        description: "Découvrez comment AGORA accompagne les associations citoyennes.",
      },
    ],
    forms: {
      citizen: [
        { kind: "text", name: "name", label: "Nom et prénom", required: true },
        { kind: "text", name: "email", label: "E-mail", type: "email", required: true },
        {
          kind: "commune",
          name: "commune",
          label: "Votre commune",
          placeholder: "Nom ou code postal",
          required: true,
          strict: true,
        },
        {
          kind: "text",
          name: "role",
          label: "Votre rôle dans la commune (facultatif)",
          placeholder: "habitant, conseiller municipal, membre d'une association…",
        },
        {
          kind: "checkbox",
          name: "electeur",
          label: "Je suis inscrit sur les listes électorales de cette commune.",
        },
        {
          kind: "checkbox",
          name: "letter",
          label:
            "Envoyer en mon nom au maire et au conseil municipal un courrier rédigé par AGORA demandant son adoption.",
        },
        { kind: "textarea", name: "message", label: "Message (facultatif)" },
        {
          kind: "checkbox",
          name: "consent",
          required: true,
          label:
            "J'accepte qu'AGORA conserve cette demande, qui peut révéler mes opinions politiques, et me recontacte au sujet de son déploiement dans ma commune. Je peux retirer ce consentement à tout moment.",
        },
      ],
      government: [
        { kind: "text", name: "name", label: "Nom et prénom", required: true },
        {
          kind: "select",
          name: "title",
          label: "Fonction",
          required: true,
          options: [
            "Maire",
            "Adjoint au maire",
            "Conseiller municipal",
            "Président d'intercommunalité",
            "Directeur général des services",
            "Secrétaire de mairie",
            "Responsable numérique / DSI",
            "Autre",
          ],
        },
        {
          kind: "select",
          name: "structure",
          label: "Type de collectivité",
          required: true,
          options: ["Commune", "Intercommunalité (EPCI)", "Département", "Région", "Syndicat mixte", "Autre"],
        },
        {
          kind: "commune",
          name: "jurisdiction",
          label: "Collectivité",
          placeholder: "Commune ou nom de la collectivité",
          required: true,
          strict: false,
        },
        {
          kind: "select",
          name: "population",
          label: "Population",
          options: [
            "Moins de 500 habitants",
            "500 à 3 499 habitants",
            "3 500 à 9 999 habitants",
            "10 000 à 49 999 habitants",
            "50 000 habitants et plus",
          ],
        },
        { kind: "text", name: "email", label: "E-mail professionnel", type: "email", required: true },
        { kind: "text", name: "phone", label: "Téléphone (facultatif)", type: "tel" },
        {
          kind: "select",
          name: "interest",
          label: "Objet",
          options: ["Démonstration", "Expérimentation", "Convention de partenariat", "Demande d'information"],
        },
        { kind: "textarea", name: "message", label: "Contexte et message" },
      ],
      ngo: [
        { kind: "text", name: "name", label: "Nom et prénom", required: true },
        {
          kind: "text",
          name: "title",
          label: "Fonction",
          placeholder: "Présidente, chargé de plaidoyer…",
          required: true,
        },
        { kind: "text", name: "organization", label: "Association", required: true },
        { kind: "text", name: "rna", label: "N° RNA ou SIREN (facultatif)" },
        {
          kind: "select",
          name: "orgtype",
          label: "Domaine",
          options: [
            "Engagement civique",
            "Environnement",
            "Droits humains",
            "Éducation populaire",
            "Recherche / université",
            "Solidarité internationale",
            "Autre",
          ],
        },
        { kind: "text", name: "email", label: "E-mail", type: "email", required: true },
        { kind: "text", name: "phone", label: "Téléphone (facultatif)", type: "tel" },
        {
          kind: "select",
          name: "interest",
          label: "Objet",
          options: ["Expérimentation", "Partenariat", "Demande d'information", "Autre"],
        },
        {
          kind: "textarea",
          name: "message",
          label: "Présentez votre association et l'usage que vous feriez d'AGORA",
        },
      ],
    },
    selectOne: "Choisir",
    submit: "Envoyer",
    sending: "Envoi…",
    error: "L'envoi a échoué. Veuillez réessayer.",
    communeRequired: "Choisissez votre commune dans la liste.",
    communeNoResults: "Aucune commune trouvée.",
    communeSearching: "Recherche…",
    privacyNotice:
      "Vos données ne sont ni vendues ni cédées. Elles servent uniquement à traiter cette demande.",
    privacyLinkText: "Politique de confidentialité",
    successHeading: "Votre voix est enregistrée.",
    successBody:
      "Face à la concentration du pouvoir, faites connaître AGORA. « L'injustice, où qu'elle se produise, est une menace pour la justice partout ailleurs » — partagez ce lien avec vos proches et votre commune.",
    copyLink: "Copier le lien",
    linkCopied: "Lien copié",
  },
  footer: {
    tagline: "construire l'infrastructure de la démocratie.",
    legal: "Mentions légales",
    privacy: "Confidentialité",
  },
  paths: { home: "/fr", legal: "/fr/mentions-legales", privacy: "/fr/confidentialite", other: "/" },
};
