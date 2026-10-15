import { CircleCheck, Clock, Ban } from "lucide-react";
import { Badge, type BadgeProps } from "@/components/choose-ui/badge";
import { DocPage, DocSection, DocSpecimen, DocPractices } from "@/src/doc";

type Variant = NonNullable<BadgeProps["variant"]>;
type Size = NonNullable<BadgeProps["size"]>;

const semantiques: { variant: Variant; label: string }[] = [
  { variant: "success", label: "Actif" },
  { variant: "warning", label: "En attente" },
  { variant: "destructive", label: "Expiré" },
  { variant: "progress", label: "En cours" },
  { variant: "info", label: "Nouveau" },
];

const etiquettes: { variant: Variant; label: string }[] = [
  { variant: "default", label: "Brouillon" },
  { variant: "secondary", label: "Type" },
  { variant: "outline", label: "Archivé" },
  { variant: "primary-light", label: "Sélection" },
  { variant: "primary-outline", label: "Option" },
];

const sizes: Size[] = ["xs", "sm", "default", "lg", "xl"];

export default function BadgePage() {
  return (
    <DocPage
      title="Badge"
      description="Étiquette courte et non interactive qui porte un statut ou une catégorie. La couleur porte le sens : elle ne décore pas."
    >
      <DocSection
        title="Statuts sémantiques"
        description="La couleur encode l'état. Un statut correspond à un seul variant."
        code={`<Badge variant="success">Actif</Badge>
<Badge variant="warning">En attente</Badge>
<Badge variant="destructive">Expiré</Badge>
<Badge variant="progress">En cours</Badge>
<Badge variant="info">Nouveau</Badge>`}
      >
        {semantiques.map((v) => (
          <DocSpecimen key={v.variant} label={v.variant}>
            <Badge variant={v.variant}>{v.label}</Badge>
          </DocSpecimen>
        ))}
      </DocSection>

      <DocSection
        title="Étiquettes non sémantiques"
        description="Catégories, types et rôles — aucune charge d'état."
        code={`<Badge variant="default">Brouillon</Badge>
<Badge variant="secondary">Type</Badge>
<Badge variant="outline">Archivé</Badge>
<Badge variant="primary-light">Sélection</Badge>
<Badge variant="primary-outline">Option</Badge>`}
      >
        {etiquettes.map((v) => (
          <DocSpecimen key={v.variant} label={v.variant}>
            <Badge variant={v.variant}>{v.label}</Badge>
          </DocSpecimen>
        ))}
      </DocSection>

      <DocSection
        title="Tailles"
        description="`default` couvre la quasi-totalité des cas ; les autres servent les contextes denses ou les en-têtes."
        code={`<Badge size="xs">Actif</Badge>
<Badge size="sm">Actif</Badge>
<Badge size="default">Actif</Badge>
<Badge size="lg">Actif</Badge>
<Badge size="xl">Actif</Badge>`}
      >
        {sizes.map((s) => (
          <DocSpecimen key={s} label={s}>
            <Badge variant="success" size={s}>
              Actif
            </Badge>
          </DocSpecimen>
        ))}
      </DocSection>

      <DocSection
        title="Avec icône"
        description="L'icône Lucide se passe en enfant, avant le texte, et se dimensionne seule."
        code={`<Badge variant="success">
  <CircleCheck />
  Actif
</Badge>`}
      >
        <DocSpecimen label="success">
          <Badge variant="success">
            <CircleCheck />
            Actif
          </Badge>
        </DocSpecimen>
        <DocSpecimen label="warning">
          <Badge variant="warning">
            <Clock />
            En attente
          </Badge>
        </DocSpecimen>
        <DocSpecimen label="destructive">
          <Badge variant="destructive">
            <Ban />
            Bloqué
          </Badge>
        </DocSpecimen>
      </DocSection>

      <DocSection
        title="Rayon"
        description="`full` est réservé aux compteurs."
        code={`<Badge variant="secondary">Type</Badge>
<Badge variant="secondary" radius="full">12</Badge>`}
      >
        <DocSpecimen label="default">
          <Badge variant="secondary">Type</Badge>
        </DocSpecimen>
        <DocSpecimen label="full">
          <Badge variant="secondary" radius="full">
            12
          </Badge>
        </DocSpecimen>
      </DocSection>

      <DocPractices
        items={[
          "Un Badge n'est pas cliquable. Si l'utilisateur peut agir sur la valeur, c'est un Button ou un lien, pas un Badge.",
          "Mapper le sens sur la couleur, jamais l'inverse : vert pour un état validé, orange pour un état à surveiller, rouge pour un blocage, gris pour une information neutre.",
          "Le bleu appartient à `progress`, qui signale un traitement en cours. `info` est neutre et gris : ne pas l'utiliser pour un avancement.",
          "Ne pas empiler badge + icône + couleur qui disent la même chose. L'icône n'est là que si elle ajoute une information.",
          "Texte court, une ou deux mots : Actif, En attente, Expiré. Une phrase dans un Badge est le signe qu'il fallait une Alert banner.",
          "Pour attirer l'attention sur un message système, c'est une Alert banner. Le Badge qualifie un élément, il ne s'adresse pas à l'utilisateur.",
          "Jamais d'étiquette fabriquée à la main : un `<span>` coloré n'héritera ni des tokens ni des tailles.",
        ]}
      />
    </DocPage>
  );
}
