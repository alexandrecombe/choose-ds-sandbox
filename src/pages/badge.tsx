import { CircleCheck, Clock, Ban } from "lucide-react";
import { Badge, type BadgeProps } from "@/components/choose-ui/badge";

type Variant = NonNullable<BadgeProps["variant"]>;
type Size = NonNullable<BadgeProps["size"]>;

const variants: { variant: Variant; label: string; description: string }[] = [
  {
    variant: "default",
    label: "Brouillon",
    description: "Aplat principal. Étiquette neutre à fort contraste.",
  },
  {
    variant: "secondary",
    label: "Type",
    description: "Catégorie ou statut sans charge émotionnelle (type, rôle).",
  },
  {
    variant: "outline",
    label: "Archivé",
    description: "Étiquette discrète, bordure seule, sans aplat.",
  },
  {
    variant: "success",
    label: "Actif",
    description: "État positif ou validé (Actif, Payé).",
  },
  {
    variant: "warning",
    label: "En attente",
    description: "État à surveiller (En attente, Expire bientôt).",
  },
  {
    variant: "destructive",
    label: "Expiré",
    description: "État problématique (Expiré, Rejeté, Bloqué).",
  },
  {
    variant: "info",
    label: "Nouveau",
    description:
      "Information neutre, sans notion de réussite ni d'échec. Gris — le bleu est porté par progress.",
  },
  {
    variant: "progress",
    label: "En cours",
    description: "Traitement en cours, avancement d'une opération.",
  },
  {
    variant: "primary-light",
    label: "Sélection",
    description: "Aplat teinté discret, pour une mise en avant légère.",
  },
  {
    variant: "primary-outline",
    label: "Option",
    description: "Fond de page, bordure neutre, texte principal.",
  },
];

const variantIcons: Partial<Record<Variant, React.ReactNode>> = {
  success: <CircleCheck />,
  warning: <Clock />,
  destructive: <Ban />,
};

const sizes: Size[] = ["xs", "sm", "default", "lg", "xl"];

const props: {
  name: string;
  type: string;
  default: string;
  description: string;
}[] = [
  {
    name: "variant",
    type: '"default" | "secondary" | "outline-solid" | "info" | "progress" | "success" | "warning" | "destructive" | "primary-light" | "primary-outline"',
    default: '"default"',
    description: "Style visuel selon la sémantique du statut",
  },
  {
    name: "size",
    type: '"xs" | "sm" | "default" | "lg" | "xl"',
    default: '"default"',
    description: "Hauteur et padding de l'étiquette",
  },
  {
    name: "radius",
    type: '"default" | "full"',
    default: '"default"',
    description: "default → rayon Choose (--radius-sm). full → pilule, pour les compteurs.",
  },
  {
    name: "render",
    type: "ReactElement | (props, state) => ReactElement",
    default: "—",
    description:
      "Rend le badge dans un autre élément que <span>. À n'utiliser que pour la sémantique HTML, pas pour le rendre cliquable.",
  },
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    description:
      "Texte court du badge. Une icône Lucide passée en enfant est dimensionnée à 12px.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Classes CSS additionnelles fusionnées via cn()",
  },
];

export default function BadgePage() {
  return (
    <div className="max-w-4xl px-10 py-16">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
        Badge
      </h1>
      <p className="mt-2 text-base text-muted-foreground">
        Affiche un statut ou une catégorie sous forme d'étiquette courte, non
        interactive.
      </p>

      {/* ── Variants ─────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-lg font-semibold text-foreground">Variants</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Un statut correspond à un seul variant. Ne pas empiler badge + icône +
          couleur redondants.
        </p>

        <div className="mt-6 space-y-8">
          {variants.map((v) => (
            <div key={v.variant} className="border-b border-border/50 pb-6">
              <p className="font-mono text-sm font-medium text-foreground">
                {v.variant}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {v.description}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Badge variant={v.variant}>{v.label}</Badge>
                {variantIcons[v.variant] && (
                  <Badge variant={v.variant}>
                    {variantIcons[v.variant]}
                    Avec icône
                  </Badge>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tailles ──────────────────────────────────────────────── */}
      <section className="mt-16">
        <h2 className="text-lg font-semibold text-foreground">Tailles</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          <code className="font-mono text-xs">default</code> pour la quasi-totalité
          des cas. Les autres tailles servent les contextes denses (tables) ou les
          en-têtes.
        </p>

        <div className="mt-6 flex flex-wrap items-end gap-6">
          {sizes.map((s) => (
            <div key={s} className="flex flex-col items-start gap-2">
              <Badge variant="success" size={s}>
                Actif
              </Badge>
              <code className="font-mono text-xs text-muted-foreground">{s}</code>
            </div>
          ))}
        </div>
      </section>

      {/* ── Radius ───────────────────────────────────────────────── */}
      <section className="mt-16">
        <h2 className="text-lg font-semibold text-foreground">Radius</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          <code className="font-mono text-xs">full</code> est réservé aux
          compteurs. Un statut garde le rayon Choose par défaut.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <Badge variant="secondary">Statut</Badge>
            <code className="font-mono text-xs text-muted-foreground">default</code>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="info" radius="full" size="xs">
              12
            </Badge>
            <code className="font-mono text-xs text-muted-foreground">full</code>
          </div>
        </div>
      </section>

      {/* ── Props ─────────────────────────────────────────────────── */}
      <section className="mt-16">
        <h2 className="text-lg font-semibold text-foreground">Props</h2>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-2 pr-4 font-medium text-muted-foreground">
                  Prop
                </th>
                <th className="pb-2 pr-4 font-medium text-muted-foreground">
                  Type
                </th>
                <th className="pb-2 pr-4 font-medium text-muted-foreground">
                  Défaut
                </th>
                <th className="pb-2 font-medium text-muted-foreground">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {props.map((p) => (
                <tr key={p.name} className="border-b border-border/50">
                  <td className="py-2.5 pr-4 font-mono text-xs font-medium text-foreground">
                    {p.name}
                  </td>
                  <td className="py-2.5 pr-4 font-mono text-xs text-muted-foreground">
                    {p.type}
                  </td>
                  <td className="py-2.5 pr-4 font-mono text-xs text-muted-foreground">
                    {p.default}
                  </td>
                  <td className="py-2.5 text-xs text-muted-foreground">
                    {p.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Règles d'usage ────────────────────────────────────────── */}
      <section className="mt-16">
        <h2 className="text-lg font-semibold text-foreground">
          Règles d'usage
        </h2>

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Quand l'utiliser
            </h3>
            <ul className="mt-2 space-y-1.5 text-sm text-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                Signaler un statut (Actif, En attente, Expiré, Brouillon).
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                Catégoriser un élément dans une liste ou une table (type d'offre,
                rôle).
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                Afficher un compteur court associé à un élément.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Quand ne pas l'utiliser
            </h3>
            <ul className="mt-2 space-y-1.5 text-sm text-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                Pour une action — un Badge n'est pas cliquable. Utiliser un
                Button ou un lien.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                Pour un texte long — le Badge est une étiquette, pas un conteneur
                de phrase.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                Pour attirer l'attention sur un message système — utiliser un
                Alert banner.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Règles Choose
            </h3>
            <ul className="mt-2 space-y-1.5 text-sm text-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                Typo :{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                  font-sans
                </code>
                , taille de label réduite.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                Couleur : tokens sémantiques de statut uniquement. La couleur
                porte le sens — ne jamais mapper un statut sur une couleur
                arbitraire.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                Pas d'icône par défaut. Icône Lucide seulement si elle ajoute de
                l'information, jamais décorative.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
