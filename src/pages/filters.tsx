import { useState } from "react";
import {
  Filters,
  createFilterQuery,
  createFilterRule,
} from "@/components/choose-ui/filters";
import type {
  FilterField,
  FilterQuery,
} from "@/components/reui/filters/filters-types";
import { DocPage, DocSection, DocPractices } from "@/src/doc";

/* ── Champs partagés par les démos ──────────────────────────────────── */

const STATUS_OPTIONS = [
  { value: "active", label: "Actif" },
  { value: "paused", label: "En pause" },
  { value: "archived", label: "Archivé" },
];

const CATEGORY_OPTIONS = [
  { value: "fashion", label: "Mode" },
  { value: "beauty", label: "Beauté" },
  { value: "home", label: "Maison" },
  { value: "tech", label: "Tech" },
  { value: "food", label: "Alimentation" },
];

const FIELDS: FilterField[] = [
  {
    id: "status",
    label: "Statut",
    operators: ["is", "isNot"],
    defaultOperator: "is",
    options: STATUS_OPTIONS,
  },
  {
    id: "category",
    label: "Catégorie",
    operators: ["is", "isNot"],
    defaultOperator: "is",
    options: CATEGORY_OPTIONS,
  },
  {
    id: "name",
    label: "Nom",
    operators: ["contains", "doesNotContain", "is", "isNot"],
    defaultOperator: "contains",
  },
  {
    id: "revenue",
    label: "Revenu",
    operators: [
      "equals",
      "doesNotEqual",
      "greaterThan",
      "lessThan",
      "greaterThanOrEqual",
      "lessThanOrEqual",
    ],
    defaultOperator: "greaterThan",
  },
];

/* ── Page ────────────────────────────────────────────────────────────── */

export default function FiltersPage() {
  const [basicQuery, setBasicQuery] = useState<FilterQuery>(
    createFilterQuery(),
  );

  const [advancedQuery, setAdvancedQuery] = useState<FilterQuery>(
    createFilterQuery(),
  );

  return (
    <DocPage
      title="Filters"
      description="Barre de filtres composable. Variante basic (chips à plat) ou advanced (arbre conditionnel imbriqué). Composant reui."
    >
      {/* ---- Basic (chips) ---- */}
      <DocSection
        title="Basic — chip row"
        description="Chaque filtre s'ajoute comme un chip. Cliquer sur un chip ouvre son éditeur de valeur."
        code={`<Filters
  fields={fields}
  query={query}
  onQueryChange={setQuery}
  showClear
/>`}
      >
        <div className="w-full">
          <Filters
            fields={FIELDS}
            query={basicQuery}
            onQueryChange={setBasicQuery}
            showClear
          />
        </div>
      </DocSection>

      {/* ---- Advanced inline ---- */}
      <DocSection
        title="Advanced — inline builder"
        description="L'arbre de conditions s'affiche directement dans la page, avec combinateurs AND/OR et groupes imbriqués."
        code={`<Filters
  variant="advanced"
  advancedMode="inline"
  fields={fields}
  query={query}
  onQueryChange={setQuery}
  showClear
/>`}
      >
        <div className="w-full">
          <Filters
            variant="advanced"
            advancedMode="inline"
            fields={FIELDS}
            query={advancedQuery}
            onQueryChange={setAdvancedQuery}
            showClear
          />
        </div>
      </DocSection>

      {/* ---- Advanced popover ---- */}
      <DocSection
        title="Advanced — popover"
        description="Même arbre de conditions, dans un popover déclenché par un bouton."
        code={`<Filters
  variant="advanced"
  advancedMode="popover"
  fields={fields}
  query={query}
  onQueryChange={setQuery}
  showClear
/>`}
      >
        <div className="w-full">
          <Filters
            variant="advanced"
            advancedMode="popover"
            fields={FIELDS}
            showClear
          />
        </div>
      </DocSection>

      {/* ---- Small size ---- */}
      <DocSection
        title="Taille compacte"
        description={'La prop `size="sm"` réduit la densité de toute la barre.'}
        code={`<Filters
  size="sm"
  fields={fields}
  showClear
/>`}
      >
        <div className="w-full">
          <Filters size="sm" fields={FIELDS} showClear />
        </div>
      </DocSection>

      {/* ---- Disabled ---- */}
      <DocSection
        title="Désactivé"
        description="La barre entière est désactivée : aucun filtre ne peut être ajouté ni modifié."
        code={`<Filters disabled fields={fields} />`}
      >
        <div className="w-full">
          <Filters disabled fields={FIELDS} />
        </div>
      </DocSection>

      {/* ---- Read only ---- */}
      <DocSection
        title="Lecture seule"
        description="Les filtres sont visibles mais non modifiables. La barre conserve sa navigation clavier sans permettre l'édition."
        code={`<Filters readOnly fields={fields} defaultQuery={...} />`}
      >
        <div className="w-full">
          <Filters
            readOnly
            fields={FIELDS}
            defaultQuery={createFilterQuery([
              createFilterRule({
                id: "r1",
                path: ["status"],
                operator: "is",
                value: ["active"] as unknown,
              }),
              createFilterRule({
                id: "r2",
                path: ["category"],
                operator: "is",
                value: ["fashion"] as unknown,
              }),
            ])}
          />
        </div>
      </DocSection>

      {/* ---- Bonnes pratiques ---- */}
      <DocPractices
        items={[
          "Utiliser variant basic pour un filtrage rapide avec peu de champs (< 8).",
          "Utiliser variant advanced pour des requêtes complexes avec groupes et combinateurs.",
          "Limiter les opérateurs proposés à ceux pertinents pour le type de donnée du champ.",
          "Ne pas combiner basic et advanced dans la même vue sans transition explicite (utiliser onConvertToAdvanced).",
          "Ne pas proposer un arbre de filtres imbriqué à un utilisateur non technique — rester sur la chip row.",
        ]}
      />
    </DocPage>
  );
}
