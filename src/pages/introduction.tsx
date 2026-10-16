import { Check, X, ArrowRight } from "lucide-react";
import catalog from "@/components/choose-ui/catalog.json";
import gapsRaw from "@/GAPS.md?raw";
import { getFontFamilies, getSemanticColors } from "../tokens/source";
import { useNav } from "../doc/nav-context";
import type { Page } from "../nav";

/* Les chiffres sont lus depuis les fichiers eux-mêmes : la page ne peut pas
   mentir sur l'état du système, et personne n'a à la mettre à jour. */
const COMPONENT_COUNT = catalog.components.length;
const FONT_COUNT = getFontFamilies().length;
const COLOR_COUNT = getSemanticColors("light").size;
const GAPS = gapsRaw
  .split("\n")
  .filter((l) => /^\*\*.+\*\*\s*$/.test(l))
  .map((l) => l.replace(/\*\*/g, "").trim());

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-display text-2xl text-foreground">{value}</span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );
}

function Section({
  title,
  lede,
  children,
}: {
  title: string;
  lede: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="mt-16">
      <h2 className="font-display text-xl text-foreground">{title}</h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        {lede}
      </p>
      {children}
    </section>
  );
}

function Rule({
  ok,
  children,
}: {
  ok: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex items-start gap-3 rounded-lg border p-3 ${
        ok
          ? "border-success-accent-border bg-success-accent"
          : "border-destructive-accent-border bg-destructive-accent"
      }`}
    >
      {ok ? (
        <Check className="mt-0.5 size-4 shrink-0 text-success-accent-foreground" />
      ) : (
        <X className="mt-0.5 size-4 shrink-0 text-destructive-accent-foreground" />
      )}
      <div
        className={`text-sm leading-relaxed ${
          ok
            ? "text-success-accent-foreground"
            : "text-destructive-accent-foreground"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function PageLink({ to, children }: { to: Page; children: React.ReactNode }) {
  const { setPage } = useNav();
  return (
    <button
      onClick={() => setPage(to)}
      className="inline-flex items-center gap-1 font-medium text-tertiary underline underline-offset-2 transition-colors hover:text-tertiary-accent-foreground"
    >
      {children}
      <ArrowRight className="size-3.5" />
    </button>
  );
}

export default function IntroductionPage() {
  return (
    <div className="max-w-4xl px-10 py-16">
      <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
        Introduction
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
        Le Design System Choose pour les produits back-office. Cette sandbox
        documente les composants, les tokens et — surtout — les règles qui
        décident quand les utiliser.
      </p>

      {/* ── État du système ─────────────────────────────────── */}
      <div className="mt-10 flex gap-12 border-y border-border py-6">
        <Stat value={COMPONENT_COUNT} label="composants" />
        <Stat value={COLOR_COUNT} label="tokens de couleur" />
        <Stat value={FONT_COUNT} label="familles typo" />
        <Stat value={GAPS.length} label="manques ouverts" />
      </div>

      {/* ── Ce que c'est ────────────────────────────────────── */}
      <Section
        title="Une sandbox, pas une bibliothèque de production"
        lede="C'est l'information la moins devinable de ce repo, et la plus coûteuse à ignorer. On prototype ici : on assemble des écrans pour trancher une question de design, puis on jette. Le code n'est pas pensé pour être copié tel quel dans un produit."
      >
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <Rule ok>
            Monter un écran pour arbitrer une décision produit, éprouver un
            parcours, comparer deux directions.
          </Rule>
          <Rule ok={false}>
            Copier un fichier d'ici vers un produit en se fiant à son état :
            rien n'est testé, versionné, ni garanti stable.
          </Rule>
        </div>
      </Section>

      {/* ── Deux couches ────────────────────────────────────── */}
      <Section
        title="Deux couches, une seule à consommer"
        lede="Chaque composant existe en deux exemplaires. components/ui/ est la copie conforme de shadcn ou reui, qu'on ne modifie jamais — c'est ce qui permet de comparer avec l'upstream. components/choose-ui/ est la surcouche Choose : c'est elle, et elle seule, qu'on importe."
      >
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <Rule ok>
            <code className="text-xs">
              import {"{ Button }"} from "@/components/choose-ui/button"
            </code>
          </Rule>
          <Rule ok={false}>
            <code className="text-xs">
              import {"{ Button }"} from "@/components/ui/button"
            </code>
          </Rule>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          La provenance de chaque copie est tracée dans{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
            SOURCES.md
          </code>
          . Aucune CLI ne les met à jour : un{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
            npx shadcn add
          </code>{" "}
          lancé à l'aveugle écrase la surcouche et réinstalle la variante Radix.
        </p>
      </Section>

      {/* ── Tokens ──────────────────────────────────────────── */}
      <Section
        title="Les tokens, et rien pour te rattraper"
        lede="Couleurs, espacements et typo passent par les tokens sémantiques. Jamais de couleur Tailwind brute, jamais de hex en dur. Ce repo n'a ni CI, ni lint, ni hook : rien ne signalera l'écart au moment où tu l'écris."
      >
        <div className="mt-5 rounded-lg border border-warning-accent-border bg-warning-accent p-4">
          <p className="text-sm leading-relaxed text-warning-accent-foreground">
            <span className="font-semibold">
              Le mode sombre est le révélateur.
            </span>{" "}
            Un token sémantique a une valeur dans chaque mode ; un hex en dur
            n'en a qu'une. Si une couleur ne suit pas la bascule clair / sombre,
            c'est qu'un token a été contourné — c'est le symptôme le plus
            visible, et souvent le seul.
          </p>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          <PageLink to="colors">Voir les tokens de couleur</PageLink>
          <span className="mx-3 text-border">·</span>
          <PageLink to="typography">Voir la typographie</PageLink>
        </p>
      </Section>

      {/* ── usage.md ────────────────────────────────────────── */}
      <Section
        title="Lire le usage.md avant d'utiliser"
        lede="Chaque composant a un fichier [composant].usage.md dans son dossier. C'est la vraie valeur ajoutée face à shadcn brut : ces fichiers documentent ce que l'upstream ne dit pas — quand utiliser le composant, quand ne surtout pas, et quel variant pour quel cas."
      >
        <div className="mt-5 rounded-lg border border-border bg-muted/40 p-4">
          <p className="text-sm leading-relaxed text-foreground">
            Un exemple qui revient souvent : un réglage qui s'applique
            sur-le-champ demande un{" "}
            <PageLink to="switch">Switch</PageLink>, alors qu'un consentement
            envoyé avec un formulaire demande une{" "}
            <PageLink to="checkbox">Checkbox</PageLink>. Les deux se ressemblent
            à l'écran ; ils ne disent pas la même chose à l'utilisateur.
          </p>
        </div>
      </Section>

      {/* ── Gaps ────────────────────────────────────────────── */}
      <Section
        title="Ce qui manque est écrit"
        lede="Quand un besoin n'est couvert par aucun composant ni aucun variant, on le signale dans GAPS.md plutôt que de fabriquer une variante locale. Un contournement non signalé devient une dette invisible : il a l'air d'être du DS sans en être."
      >
        {GAPS.length > 0 ? (
          <ul className="mt-5 divide-y divide-border rounded-lg border border-border">
            {GAPS.map((g) => (
              <li
                key={g}
                className="flex items-center gap-3 px-4 py-3 text-sm text-foreground"
              >
                <span className="size-1.5 shrink-0 rounded-full bg-muted-foreground" />
                {g}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-5 text-sm text-muted-foreground">
            Aucun manque ouvert pour l'instant.
          </p>
        )}
      </Section>
    </div>
  );
}
