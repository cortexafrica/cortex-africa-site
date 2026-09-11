/* Textes — Cortex Africa.
   Chaque fait provient de context/entreprise.md. Rien n'est inventé :
   ni produit, ni client, ni chiffre d'affaires, ni effectif, ni partenaire. */

export const CONTACT =
  'mailto:cortexafrica.sas@gmail.com' +
  '?subject=' + encodeURIComponent('Candidature — Cortex Africa') +
  '&body=' + encodeURIComponent(
    "Qui vous êtes, en quelques lignes.\n\n" +
    "Ce que vous avez construit — un lien vaut mieux qu'un CV.\n\n" +
    "Ce que vous cherchez.\n",
  );

export const hero = {
  title: ['Construire depuis l’Afrique.', 'En détenir une part.'],
  lede:
    "Cortex Africa est une société d’ingénierie logicielle et d’intelligence " +
    "artificielle, en cours de constitution à Douala.",
  cta: 'Candidater par e-mail',
  ctaQuiet: 'Ce qui existe déjà',
};

export const etat = {
  eyebrow: 'L’état réel, sans arrondi',
  title: 'Une personne, aucun produit, une structure déjà faite.',
  paragraphs: [
    "Il n’y a pas encore de produit. Pas de client, pas de revenu, pas " +
      "d’utilisateurs. La société compte une personne : son fondateur, qui conçoit, " +
      "code, relit et déploie.",
    "Ce qui existe, c’est une structure juridique construite pour accueillir " +
      "d’autres associés, et une chaîne technique montée de bout en bout. C’est peu " +
      "et c’est beaucoup : le plus dur à changer plus tard a été décidé en premier.",
    "Si vous cherchez une équipe constituée et un produit qui tourne, ce n’est " +
      "pas ici. Si vous voulez peser sur ce qui n’est pas encore écrit, lisez la suite.",
  ],
};

export const capital = {
  eyebrow: 'Le capital',
  title: '20 000 actions de 100 FCFA.',
  paragraphs: [
    "Le capital social est de 2 000 000 FCFA, divisé en 20 000 actions ordinaires " +
      "de 100 FCFA, intégralement libérées dès la constitution.",
    "Cette valeur nominale basse n’est pas un détail comptable : elle a été choisie " +
      "pour permettre une répartition fine entre de futurs associés. Une société qui " +
      "ne compte pas vous accueillir ne se structure pas ainsi.",
  ],
  legendHeld: 'Détenu aujourd’hui par le fondateur',
  legendOpen: 'Ce que les augmentations de capital à venir peuvent ouvrir',
  note:
    "Représentation schématique : chaque carré vaut 500 actions. Aucune " +
    "attribution n’est promise ici — elle se décide au cas par cas.",
};

export const roles = {
  eyebrow: 'Qui nous cherchons',
  title: 'Des ingénieurs qui finissent ce qu’ils commencent.',
  items: [
    {
      h: 'Développement produit',
      p: "Next.js, Supabase, Vercel. Vous savez livrer une fonctionnalité entière — " +
         "schéma, interface, mise en ligne — sans attendre qu’on vous découpe le travail.",
    },
    {
      h: 'Systèmes d’intelligence artificielle',
      p: "Vous savez ce qui revient à un modèle et ce qui doit rester un script, " +
         "et vous mesurez le coût d’un appel avant de l’écrire.",
    },
    {
      h: 'Infrastructure et données',
      p: "Postgres, politiques d’accès, migrations. Vous considérez qu’une donnée " +
         "personnelle mal protégée est un incident, pas une ligne de rétroplanning.",
    },
    {
      h: 'Conception',
      p: "Interfaces qui tiennent sur un téléphone d’entrée de gamme, sur un réseau " +
         "qui coupe. La contrainte est le sujet, pas l’excuse.",
    },
  ],
};

export const cadre = {
  eyebrow: 'Ce que ça veut dire concrètement',
  title: 'Les statuts organisent l’entrée d’associés.',
  items: [
    {
      dt: 'Forme retenue : SAS de droit OHADA',
      dd: "Choisie précisément parce qu’elle permet de faire entrer des associés " +
          "progressivement, et d’aménager leurs droits.",
    },
    {
      dt: 'Actions de préférence',
      dd: "Les statuts prévoient la faculté d’en émettre : les droits d’un associé " +
          "entrant peuvent être ajustés à son apport réel.",
    },
    {
      dt: 'Augmentation réservée aux collaborateurs',
      dd: "Prévue dès la constitution. C’est le mécanisme par lequel un ingénieur " +
          "peut devenir associé sans racheter des actions existantes.",
    },
    {
      dt: 'Agrément et préemption',
      dd: "Toute cession à un tiers est soumise à agrément. Ce qui protège la société " +
          "protège aussi ceux qui y entrent tôt.",
    },
    {
      dt: 'Libération intégrale du capital',
      dd: "Le capital est versé en totalité dès la constitution, pour pouvoir " +
          "l’augmenter sans délai d’attente.",
    },
  ],
};

export const faq = {
  eyebrow: 'Les questions qu’on nous poserait',
  title: 'Ce que vous vous demandez déjà.',
  items: [
    {
      q: 'Il n’y a vraiment aucun produit ?',
      a: "Aucun. Le premier produit doit être choisi. C’est écrit ici plutôt que " +
         "caché derrière un vocabulaire prometteur.",
    },
    {
      q: 'La société est-elle immatriculée ?',
      a: "Elle est en cours de constitution. Les statuts sont entre les mains d’un " +
         "notaire à Douala ; l’immatriculation au RCCM suit.",
    },
    {
      q: 'Est-ce rémunéré, ou seulement en actions ?',
      a: "Les conditions se discutent individuellement. Rien n’est standardisé à " +
         "ce stade, et prétendre le contraire serait malhonnête.",
    },
    {
      q: 'Faut-il être à Douala ?',
      a: "Le siège est à Douala. La façon de travailler ensemble fait partie de " +
         "la discussion, elle n’est pas arrêtée.",
    },
    {
      q: 'Pourquoi éditer depuis l’Afrique ?',
      a: "Parce que les contraintes du continent — réseau instable, data coûteuse, " +
         "téléphones d’entrée de gamme — produisent des logiciels plus solides " +
         "partout ailleurs. On ne conçoit pas pareil quand on part de là.",
    },
  ],
};

export const fin = {
  title: 'Écrivez-nous.',
  lede:
    "Un lien vers ce que vous avez construit vaut mieux qu’un CV. " +
    "Le fondateur lit et répond lui-même.",
  cta: 'Candidater par e-mail',
};

export const foot = {
  company: 'Cortex Africa',
  status: 'Société par actions simplifiée de droit OHADA, en cours de constitution.',
  place: 'Douala, Cameroun',
  email: 'cortexafrica.sas@gmail.com',
};

export const meta = {
  title: 'Cortex Africa — construire depuis l’Afrique',
  description:
    "Société d’ingénierie logicielle et d’IA en cours de constitution à Douala. " +
    "Une personne, aucun produit, une structure faite pour accueillir des associés.",
};
