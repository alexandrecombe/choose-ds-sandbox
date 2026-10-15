import { Separator } from "@/components/choose-ui/separator";
import { DocPage, DocSection, DocPractices } from "@/src/doc";

export default function SeparatorPage() {
  return (
    <DocPage
      title="Separator"
      description="Trait fin qui sépare visuellement ou sémantiquement deux zones de contenu. Horizontal par défaut, vertical pour les toolbars."
    >
      {/* ---- Horizontal ---- */}
      <DocSection
        title="Horizontal"
        description="Le cas le plus courant : un trait pleine largeur entre deux blocs."
        code={`<p>Section du haut</p>
<Separator />
<p>Section du bas</p>`}
      >
        <div className="w-full max-w-md space-y-4">
          <div>
            <p className="text-sm font-medium text-foreground">Récapitulatif de commande</p>
            <p className="text-sm text-muted-foreground">3 articles — 127,50 €</p>
          </div>
          <Separator />
          <div>
            <p className="text-sm font-medium text-foreground">Livraison</p>
            <p className="text-sm text-muted-foreground">Colissimo — 4,90 €</p>
          </div>
          <Separator />
          <div>
            <p className="text-sm font-medium text-foreground">Total</p>
            <p className="text-sm text-muted-foreground">132,40 €</p>
          </div>
        </div>
      </DocSection>

      {/* ---- Vertical ---- */}
      <DocSection
        title="Vertical"
        description="Pour séparer des éléments côte à côte dans une toolbar ou un en-tête."
        code={`<div className="flex h-8 items-center gap-3">
  <span>Gras</span>
  <Separator orientation="vertical" />
  <span>Italique</span>
  <Separator orientation="vertical" />
  <span>Souligné</span>
</div>`}
      >
        <div className="flex h-8 items-center gap-3 text-sm text-foreground">
          <span className="font-semibold">Gras</span>
          <Separator orientation="vertical" />
          <span className="italic">Italique</span>
          <Separator orientation="vertical" />
          <span className="underline">Souligné</span>
        </div>
      </DocSection>

      {/* ---- Dans un menu ---- */}
      <DocSection
        title="Dans un menu"
        description="Sépare les groupes d'un menu contextuel ou d'une liste d'actions."
        code={`<Separator className="my-1" />`}
      >
        <div className="w-56 rounded-lg border border-border bg-popover p-1">
          <div className="rounded-md px-2 py-1.5 text-sm text-foreground hover:bg-accent">Copier</div>
          <div className="rounded-md px-2 py-1.5 text-sm text-foreground hover:bg-accent">Coller</div>
          <Separator className="my-1" />
          <div className="rounded-md px-2 py-1.5 text-sm text-foreground hover:bg-accent">Sélectionner tout</div>
          <Separator className="my-1" />
          <div className="rounded-md px-2 py-1.5 text-sm text-destructive hover:bg-accent">Supprimer</div>
        </div>
      </DocSection>

      {/* ---- Bonnes pratiques ---- */}
      <DocPractices
        items={[
          "Utiliser le separator pour marquer une frontière sémantique entre deux zones, pas juste pour espacer.",
          "En vertical, le parent doit avoir une hauteur définie (flex avec `items-center` et `h-*`) pour que le trait soit visible.",
          "Ne pas empiler plusieurs separators : un seul suffit entre deux zones.",
          "Pour encadrer un bloc complet, préférer Card ou Frame au lieu de deux separators.",
        ]}
      />
    </DocPage>
  );
}
