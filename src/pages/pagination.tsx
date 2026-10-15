import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/choose-ui/pagination";
import { DocPage, DocSection, DocPractices } from "@/src/doc";

/* Démo pilotée par l'état : `href` reste un ancrage, le composant upstream
   n'accepte ni `render` ni `asChild` sur son lien. */
function PaginationDemo() {
  const [page, setPage] = useState(3);
  const total = 8;
  const aller = (p: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    setPage(Math.min(total, Math.max(1, p)));
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={aller(page - 1)} />
        </PaginationItem>
        {[1, 2, 3].map((p) => (
          <PaginationItem key={p}>
            <PaginationLink href="#" isActive={page === p} onClick={aller(p)}>
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive={page === total} onClick={aller(total)}>
            {total}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" onClick={aller(page + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default function PaginationPage() {
  return (
    <DocPage
      title="Pagination"
      description="Découpe une liste longue en pages numérotées. Pour une table d'enregistrements, elle se place sous les lignes et reflète l'URL."
    >
      <DocSection
        title="Pagination complète"
        description="Précédent, numéros, troncature, suivant. La page courante porte `isActive`, qui pose aussi `aria-current=page`."
        layout="stack"
        code={`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="?page=2" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="?page=3" isActive>3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="?page=4" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
      >
        <PaginationDemo />
      </DocSection>

      <DocSection
        title="Pager compact"
        description="Précédent et suivant seuls, avec le compte de pages. Pour un panneau étroit ou une liste courte."
        layout="stack"
        code={`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="?page=2" />
    </PaginationItem>
    <PaginationItem>
      <span className="px-3 text-sm text-muted-foreground">Page 3 sur 8</span>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="?page=4" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
      >
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" onClick={(e) => e.preventDefault()} />
            </PaginationItem>
            <PaginationItem>
              <span className="px-3 text-sm text-muted-foreground">
                Page 3 sur 8
              </span>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" onClick={(e) => e.preventDefault()} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </DocSection>

      <DocPractices
        items={[
          "`PaginationLink` rend son propre `<a>` et n'accepte ni `render` ni `asChild`. Dans une application routée, il faut remplacer cette ancre par le lien du routeur dans notre copie du composant — ce n'est pas réglable depuis l'appel.",
          "Chaque page doit avoir son URL. Une pagination qui ne change pas l'adresse casse le partage de lien, le retour arrière et le rechargement — dans ce cas, c'est un ButtonGroup qu'il faut, pas une Pagination.",
          "La page courante porte `isActive` : il pose `aria-current=page`, seul moyen pour un lecteur d'écran de savoir où l'on est.",
          "Les numéros et le nombre total se dérivent de l'état ou de l'URL. Un jeu de pages écrit en dur se désynchronise du premier filtre appliqué.",
          "Tronquer avec `PaginationEllipsis` au-delà de sept numéros, en gardant toujours la première et la dernière page atteignables.",
          "Pour une table qui trie et filtre ses lignes, le pager fait partie de la table : ne pas en recoller un à la main en dessous.",
          "Placer la pagination sous la liste, jamais au-dessus seule : on pagine après avoir lu, pas avant.",
        ]}
      />
    </DocPage>
  );
}
