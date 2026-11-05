import { useState } from "react";
import { AspectRatio } from "@/components/choose-ui/aspect-ratio";
import { DocPage, DocSection, DocPractices } from "@/src/doc";

/* Pas d'image réseau dans la sandbox : un aplat suffit à montrer la boîte
   réservée, et ne dépend pas d'un service externe. */
function Placeholder({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-muted">
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );
}

const FORMATS = [
  { ratio: 16 / 9, label: "16:9" },
  { ratio: 4 / 3, label: "4:3" },
  { ratio: 1, label: "1:1" },
  { ratio: 3 / 4, label: "3:4" },
];

export default function AspectRatioPage() {
  const [largeur, setLargeur] = useState(1600);
  const [hauteur, setHauteur] = useState(900);

  return (
    <DocPage
      title="Aspect ratio"
      description="Réserve une boîte à une proportion donnée, pour qu'une image garde la même forme quelle que soit sa taille réelle. À ne prendre que lorsque la proportion vient des données — sinon une classe Tailwind suffit."
    >
      {/* ---- Formats ---- */}
      <DocSection
        title="Quelques formats"
        layout="stack"
        description="`ratio` est la largeur divisée par la hauteur. L'écrire en division plutôt qu'en décimale : on relit la forme, pas un nombre."
        code={`<AspectRatio ratio={16 / 9} className="w-full">
  <img className="absolute inset-0 size-full rounded-lg object-cover" />
</AspectRatio>`}
      >
        <div className="grid grid-cols-4 gap-4">
          {FORMATS.map((f) => (
            <div key={f.label} className="flex flex-col gap-2">
              <AspectRatio ratio={f.ratio} className="w-full">
                <Placeholder label={f.label} />
              </AspectRatio>
              <span className="text-xs text-muted-foreground">{f.label}</span>
            </div>
          ))}
        </div>
      </DocSection>

      {/* ---- Proportion calculée ---- */}
      <DocSection
        title="Proportion calculée"
        layout="stack"
        description="Le seul cas où ce composant gagne vraiment sa place : la proportion vient des métadonnées de l'image, pas du code. Une classe Tailwind ne peut pas porter une valeur dynamique."
        code={`<AspectRatio ratio={image.width / image.height}>`}
      >
        <div className="flex max-w-lg flex-col gap-4">
          <div className="flex gap-4">
            <div className="grid flex-1 gap-1.5">
              <label htmlFor="l" className="text-xs text-muted-foreground">
                Largeur
              </label>
              <input
                id="l"
                type="number"
                value={largeur}
                min={100}
                onChange={(e) => setLargeur(Number(e.target.value) || 1)}
                className="h-9 rounded-md border border-input bg-transparent px-3 font-sans text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              />
            </div>
            <div className="grid flex-1 gap-1.5">
              <label htmlFor="h" className="text-xs text-muted-foreground">
                Hauteur
              </label>
              <input
                id="h"
                type="number"
                value={hauteur}
                min={100}
                onChange={(e) => setHauteur(Number(e.target.value) || 1)}
                className="h-9 rounded-md border border-input bg-transparent px-3 font-sans text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
              />
            </div>
          </div>
          <AspectRatio ratio={largeur / hauteur} className="w-full">
            <Placeholder label={`${largeur} × ${hauteur}`} />
          </AspectRatio>
        </div>
      </DocSection>

      {/* ---- Remplir ou tenir ---- */}
      <DocSection
        title="Remplir ou tenir dedans"
        layout="stack"
        description="La boîte est `relative` : l'enfant se pose en `absolute inset-0`. `object-cover` remplit en rognant, `object-contain` tient dedans en laissant du vide."
        code={`<img className="absolute inset-0 size-full object-cover" />
<img className="absolute inset-0 size-full object-contain" />`}
      >
        <div className="grid max-w-lg grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <AspectRatio ratio={16 / 9} className="w-full">
              <div className="absolute inset-0 overflow-hidden rounded-lg bg-muted">
                <div className="size-full bg-[repeating-linear-gradient(45deg,var(--color-muted-foreground)_0_6px,transparent_6px_14px)] opacity-20" />
              </div>
            </AspectRatio>
            <span className="text-xs text-muted-foreground">
              cover — remplit, rogne les bords
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <AspectRatio ratio={16 / 9} className="w-full">
              <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-muted">
                <div className="h-full w-1/2 bg-[repeating-linear-gradient(45deg,var(--color-muted-foreground)_0_6px,transparent_6px_14px)] opacity-20" />
              </div>
            </AspectRatio>
            <span className="text-xs text-muted-foreground">
              contain — tient dedans, laisse du vide
            </span>
          </div>
        </div>
      </DocSection>

      {/* ---- Bonnes pratiques ---- */}
      <DocPractices
        items={[
          "Ne pas l'atteindre par réflexe : si la proportion est connue à l'écriture, une classe aspect-video ou aspect-square suffit.",
          "Écrire ratio en division (16 / 9) plutôt qu'en décimale — on relit la forme.",
          "Décrire dans alt ce que montre l'image, jamais sa forme ni son rôle.",
          "Poser un fond en attendant le chargement : sans lui, la boîte réservée est un trou blanc.",
          "Une image décorative prend alt=\"\", jamais un alt inventé.",
        ]}
      />
    </DocPage>
  );
}
