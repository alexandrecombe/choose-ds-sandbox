import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/choose-ui/breadcrumb";
import { DocPage, DocSection, DocPractices } from "@/src/doc";

export default function BreadcrumbDocPage() {
  return (
    <DocPage
      title="Breadcrumb"
      description="Fil d'Ariane : situe l'écran courant dans la hiérarchie et permet de remonter d'un niveau. Il décrit un chemin, pas un historique de navigation."
    >
      <DocSection
        title="Fil complet"
        description="Le dernier niveau est la page courante : il n'est pas cliquable et se marque avec BreadcrumbPage."
        layout="stack"
        code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/operations">Opérations</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Opération #4821</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
      >
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Accueil</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Opérations</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Opération #4821</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </DocSection>

      <DocSection
        title="Deux niveaux"
        description="Le cas le plus courant en back-office : une liste et son détail."
        layout="stack"
        code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Marques</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Maison Lelievre</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
      >
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Marques</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Maison Lelievre</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </DocSection>

      <DocSection
        title="Chemin tronqué"
        description="BreadcrumbEllipsis replie les niveaux intermédiaires quand le chemin est profond. Garder toujours le premier niveau et la page courante."
        layout="stack"
        code={`<BreadcrumbItem>
  <BreadcrumbEllipsis />
</BreadcrumbItem>`}
      >
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Accueil</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbEllipsis />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Opérations</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Opération #4821</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </DocSection>

      <DocPractices
        items={[
          "Le fil d'Ariane décrit la hiérarchie du produit, pas le chemin parcouru par l'utilisateur. Il ne remplace pas le bouton Retour du navigateur.",
          "La page courante est toujours le dernier niveau, en BreadcrumbPage : non cliquable, et jamais un lien vers elle-même.",
          "Un seul niveau au-dessus ne justifie pas un fil : un simple lien de retour suffit et prend moins de place.",
          "Les libellés reprennent exactement le titre de la page de destination. Un fil qui annonce « Marques » doit mener à un écran titré « Marques ».",
          "Au-delà de quatre niveaux, replier le milieu avec BreadcrumbEllipsis plutôt que laisser le fil passer à la ligne.",
          "Le fil se place au-dessus du titre de page, jamais en dessous : il situe avant de nommer.",
          "Dans une application routée, BreadcrumbLink accepte un composant de lien via `render` — ne pas recâbler un `<a>` à la main.",
        ]}
      />
    </DocPage>
  );
}
