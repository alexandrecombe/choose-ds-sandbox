/* Structure de navigation partagée : la sidebar de App.tsx et le pied de page
   précédent/suivant du gabarit lisent la même source. Ajouter une page ici. */

export type Page =
  | "colors"
  | "typography"
  | "icons"
  | "button"
  | "badge"
  | "alert-banner"
  | "avatar"
  | "breadcrumb"
  | "card"
  | "button-group"
  | "alert-dialog"
  | "attachment";

export interface NavItem {
  key: Page;
  label: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const NAV_SECTIONS: NavSection[] = [
  {
    title: "Fondations",
    items: [
      { key: "colors", label: "Colors" },
      { key: "typography", label: "Typography" },
      { key: "icons", label: "Icons" },
    ],
  },
  {
    title: "Composants",
    items: [
      { key: "button", label: "Button" },
      { key: "badge", label: "Badge" },
      { key: "alert-banner", label: "Alert banner" },
      { key: "avatar", label: "Avatar" },
      { key: "breadcrumb", label: "Breadcrumb" },
      { key: "card", label: "Card" },
      { key: "button-group", label: "Button group" },
      { key: "alert-dialog", label: "Alert dialog" },
      { key: "attachment", label: "Attachment" },
    ],
  },
];

/* Ordre à plat, pour la navigation précédent/suivant. */
export const PAGE_ORDER: NavItem[] = NAV_SECTIONS.flatMap((s) => s.items);
