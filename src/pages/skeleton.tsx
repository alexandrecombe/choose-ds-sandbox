import { Skeleton } from "@/components/choose-ui/skeleton";
import { DocPage, DocSection, DocPractices } from "@/src/doc";

export default function SkeletonPage() {
  return (
    <DocPage
      title="Skeleton"
      description="Placeholder animé qui signale un contenu en cours de chargement. Il réserve la place de l'élément final pour éviter les décalages de mise en page."
    >
      {/* ---- Ligne de texte ---- */}
      <DocSection
        title="Ligne de texte"
        description="Simule un paragraphe ou un label en cours de chargement."
        code={`<Skeleton className="h-4 w-48" />
<Skeleton className="h-4 w-36" />`}
      >
        <div className="space-y-2">
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-4 w-36" />
          <Skeleton className="h-4 w-52" />
        </div>
      </DocSection>

      {/* ---- Carte ---- */}
      <DocSection
        title="Carte de chargement"
        description="Compose plusieurs skeletons pour reproduire la silhouette d'une carte avec image, titre et description."
        code={`<div className="space-y-3">
  <Skeleton className="h-32 w-full rounded-lg" />
  <Skeleton className="h-4 w-3/4" />
  <Skeleton className="h-4 w-1/2" />
</div>`}
      >
        <div className="w-full max-w-xs space-y-3 rounded-xl border border-border p-4">
          <Skeleton className="h-32 w-full rounded-lg" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </DocSection>

      {/* ---- Avatar + texte ---- */}
      <DocSection
        title="Avatar et texte"
        description="Le skeleton rond simule un avatar, les lignes la description à côté."
        code={`<div className="flex items-center gap-3">
  <Skeleton className="size-10 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-32" />
    <Skeleton className="h-3 w-24" />
  </div>
</div>`}
      >
        <div className="flex items-center gap-3">
          <Skeleton className="size-10 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-24" />
          </div>
        </div>
      </DocSection>

      {/* ---- Liste ---- */}
      <DocSection
        title="Liste d'éléments"
        description="Répète une ligne skeleton pour simuler une liste en cours de chargement."
        code={`{Array.from({ length: 4 }).map((_, i) => (
  <div key={i} className="flex items-center gap-3">
    <Skeleton className="size-8 rounded-md" />
    <Skeleton className="h-4 flex-1" />
    <Skeleton className="h-4 w-16" />
  </div>
))}`}
      >
        <div className="w-full max-w-sm space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3">
              <Skeleton className="size-8 rounded-md" />
              <Skeleton className="h-4 flex-1" />
              <Skeleton className="h-4 w-16" />
            </div>
          ))}
        </div>
      </DocSection>

      {/* ---- Bonnes pratiques ---- */}
      <DocPractices
        items={[
          "Le skeleton reproduit la silhouette de l'élément final : même hauteur, même largeur, même rayon de bord.",
          "Ne pas animer au-delà de `animate-pulse` : un skeleton qui bouge trop détourne l'attention.",
          "Remplacer le skeleton par le contenu réel dès que les données arrivent, sans transition.",
          "Pour un chargement global de page, un spinner centré est plus adapté qu'un écran entier de skeletons.",
        ]}
      />
    </DocPage>
  );
}
