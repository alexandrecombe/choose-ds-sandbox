/* Structure de navigation partagée : la sidebar de App.tsx et le pied de page
   précédent/suivant du gabarit lisent la même source. Ajouter une page ici. */

export type Page =
  | "introduction"
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
  | "calendar"
  | "date-picker"
  | "alert-dialog"
  | "attachment"
  | "frame"
  | "item"
  | "pagination"
  | "input"
  | "checkbox"
  | "combobox"
  | "radio-group"
  | "filters"
  | "select"
  | "separator"
  | "switch"
  | "context-menu"
  | "dropdown-menu"
  | "empty"
  | "hover-card"
  | "tooltip"
  | "textarea"
  | "tabs"
  | "skeleton";

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
      { key: "introduction", label: "Introduction" },
      { key: "colors", label: "Colors" },
      { key: "typography", label: "Typography" },
      { key: "icons", label: "Icons" },
    ],
  },
  {
    // Composants : garder par ordre alphabétique de libellé.
    title: "Composants",
    items: [
      { key: "alert-banner", label: "Alert banner" },
      { key: "alert-dialog", label: "Alert dialog" },
      { key: "attachment", label: "Attachment" },
      { key: "avatar", label: "Avatar" },
      { key: "badge", label: "Badge" },
      { key: "breadcrumb", label: "Breadcrumb" },
      { key: "button", label: "Button" },
      { key: "button-group", label: "Button group" },
      { key: "calendar", label: "Calendar" },
      { key: "card", label: "Card" },
      { key: "checkbox", label: "Checkbox" },
      { key: "combobox", label: "Combobox" },
      { key: "context-menu", label: "Context menu" },
      { key: "dropdown-menu", label: "Dropdown menu" },
      { key: "empty", label: "Empty" },
      { key: "filters", label: "Filters" },
      { key: "frame", label: "Frame" },
      { key: "hover-card", label: "Hover card" },
      { key: "input", label: "Input" },
      { key: "item", label: "Item" },
      { key: "pagination", label: "Pagination" },
      { key: "radio-group", label: "Radio group" },
      { key: "select", label: "Select" },
      { key: "separator", label: "Separator" },
      { key: "skeleton", label: "Skeleton" },
      { key: "switch", label: "Switch" },
      { key: "tabs", label: "Tabs" },
      { key: "textarea", label: "Textarea" },
      { key: "tooltip", label: "Tooltip" },
    ],
  },
  {
    /* Compositions : assemblées à partir des primitives ci-dessus, sans source
       amont. Aucune mise à jour upstream ne s'y applique, et leur usage.md est
       la seule documentation qui existe. Marquées `"kind": "composition"` dans
       catalog.json. Garder par ordre alphabétique de libellé. */
    title: "Compositions",
    items: [{ key: "date-picker", label: "Date picker" }],
  },
];

/* Ordre à plat, pour la navigation précédent/suivant. */
export const PAGE_ORDER: NavItem[] = NAV_SECTIONS.flatMap((s) => s.items);
