import { Copy, Pencil, Trash2, Download } from "lucide-react";
import { Button } from "@/components/choose-ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/choose-ui/tooltip";
import { DocPage, DocSection, DocPractices } from "@/src/doc";

export default function TooltipPage() {
  return (
    <DocPage
      title="Tooltip"
      description="Étiquette courte au survol ou au focus, qui nomme un élément dont le sens n'est pas évident — presque toujours un bouton à icône seule."
    >
      {/* ---- Cas canonique ---- */}
      <DocSection
        title="Bouton à icône"
        description="Le cas pour lequel le tooltip existe. Le bouton garde son `aria-label` : le tooltip est une aide visuelle, pas la source du nom accessible."
        code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger
      render={
        <Button iconOnly aria-label="Copier l'URL de l'opération">
          <Copy />
        </Button>
      }
    />
    <TooltipContent>Copier l'URL de l'opération</TooltipContent>
  </Tooltip>
</TooltipProvider>`}
      >
        <TooltipProvider>
          <div className="flex items-center gap-2">
            {[
              { icon: <Copy />, label: "Copier l'URL de l'opération" },
              { icon: <Pencil />, label: "Modifier l'opération" },
              { icon: <Download />, label: "Télécharger la preuve d'achat" },
              { icon: <Trash2 />, label: "Supprimer l'opération" },
            ].map((item) => (
              <Tooltip key={item.label}>
                <TooltipTrigger
                  render={
                    <Button
                      variant="secondary"
                      iconOnly
                      aria-label={item.label}
                    >
                      {item.icon}
                    </Button>
                  }
                />
                <TooltipContent>{item.label}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </DocSection>

      {/* ---- Placements ---- */}
      <DocSection
        title="Placement"
        description={`\`side\` et \`align\` positionnent la bulle. Dans une barre d'outils en haut d'écran, passer \`side="bottom"\` pour que la bulle ne sorte pas de la fenêtre.`}
        code={`<TooltipContent side="top">En haut</TooltipContent>
<TooltipContent side="right">À droite</TooltipContent>
<TooltipContent side="bottom">En bas</TooltipContent>
<TooltipContent side="left">À gauche</TooltipContent>`}
      >
        <TooltipProvider>
          <div className="flex items-center gap-3">
            {(["top", "right", "bottom", "left"] as const).map((side) => (
              <Tooltip key={side}>
                <TooltipTrigger
                  render={<Button variant="secondary">{side}</Button>}
                />
                <TooltipContent side={side}>Bulle en {side}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </DocSection>

      {/* ---- Délai partagé ---- */}
      <DocSection
        title="Délai partagé"
        description="Le `TooltipProvider` se pose une fois, haut dans l'arbre. Il partage le délai entre tous ses tooltips : en parcourant la rangée, le deuxième survol ouvre sans attendre. Un provider par tooltip annule cet effet."
        code={`<TooltipProvider delay={600}>
  <Tooltip>…</Tooltip>
  <Tooltip>…</Tooltip>
</TooltipProvider>`}
      >
        <TooltipProvider delay={600}>
          <div className="flex items-center gap-2">
            {["Premier", "Deuxième", "Troisième"].map((label) => (
              <Tooltip key={label}>
                <TooltipTrigger
                  render={<Button variant="secondary">{label}</Button>}
                />
                <TooltipContent>{label} — délai de 600 ms</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </DocSection>

      {/* ---- Sur texte ---- */}
      <DocSection
        title="Sur un élément de texte"
        description="Un tooltip peut aussi expliquer un terme ou une abréviation. Le texte déclencheur doit rester lisible seul : si l'information est nécessaire, elle s'écrit dans la page."
        code={`<Tooltip>
  <TooltipTrigger
    render={<span className="underline decoration-dotted">GTIN</span>}
  />
  <TooltipContent>Identifiant commercial global de l'article</TooltipContent>
</Tooltip>`}
      >
        <TooltipProvider>
          <p className="text-sm font-sans">
            Chaque article porte un{" "}
            <Tooltip>
              <TooltipTrigger
                render={
                  <span className="underline decoration-dotted underline-offset-2">
                    GTIN
                  </span>
                }
              />
              <TooltipContent>
                Identifiant commercial global de l'article
              </TooltipContent>
            </Tooltip>{" "}
            transmis par la marque.
          </p>
        </TooltipProvider>
      </DocSection>

      {/* ---- Bonnes pratiques ---- */}
      <DocPractices
        items={[
          "Garder l'aria-label du bouton : le tooltip ne tient pas lieu de nom accessible.",
          "Poser un seul TooltipProvider haut dans l'arbre, pas un par tooltip.",
          "Texte court, sans ponctuation finale — deux phrases, c'est un texte à écrire dans la page.",
          "Ne jamais y mettre une information nécessaire à l'action : le tooltip n'existe pas au tactile.",
          "Pour un contenu riche ou cliquable, utiliser une Hover card — la bulle se ferme dès que le pointeur la quitte.",
        ]}
      />
    </DocPage>
  );
}
