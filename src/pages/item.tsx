import { FileText, Building2, ChevronRight, Download } from "lucide-react";
import {
  Item,
  ItemGroup,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemSeparator,
} from "@/components/choose-ui/item";
import { Button } from "@/components/choose-ui/button";
import { Badge } from "@/components/choose-ui/badge";
import { DocPage, DocSection, DocPractices } from "@/src/doc";

export default function ItemPage() {
  return (
    <DocPage
      title="Item"
      description="Ligne d'une liste : un visuel, un intitulé, un texte de support et des actions. La brique des listes d'enregistrements d'un back-office."
    >
      <DocSection
        title="Anatomie"
        description="Média, contenu, actions. Seul le contenu est obligatoire."
        layout="stack"
        code={`<Item variant="outline">
  <ItemMedia variant="icon">
    <Building2 />
  </ItemMedia>
  <ItemContent>
    <ItemTitle>Maison Lelievre</ItemTitle>
    <ItemDescription>348 références — vente privée</ItemDescription>
  </ItemContent>
  <ItemActions>
    <Button variant="ghost" size="sm">Ouvrir</Button>
  </ItemActions>
</Item>`}
      >
        <Item variant="outline">
          <ItemMedia variant="icon">
            <Building2 />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Maison Lelievre</ItemTitle>
            <ItemDescription>348 références — vente privée</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="ghost" size="sm">
              Ouvrir
            </Button>
          </ItemActions>
        </Item>
      </DocSection>

      <DocSection
        title="Variants"
        description="`default` sans bordure pour une liste dense, `outline` pour une ligne autonome, `muted` pour une ligne en retrait."
        layout="stack"
        code={`<Item variant="default">…</Item>
<Item variant="outline">…</Item>
<Item variant="muted">…</Item>`}
      >
        {(["default", "outline", "muted"] as const).map((v) => (
          <Item key={v} variant={v}>
            <ItemMedia variant="icon">
              <FileText />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>variant = {v}</ItemTitle>
              <ItemDescription>
                facture-4821.pdf — 2,4 Mo
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Badge variant="success">Payée</Badge>
            </ItemActions>
          </Item>
        ))}
      </DocSection>

      <DocSection
        title="Tailles"
        description="`xs` resserre la ligne pour une liste très dense. `sm` et `default` partagent le même rembourrage en amont : la différence se joue sur l'espacement entre lignes d'un même groupe."
        layout="stack"
        code={`<Item size="xs">…</Item>
<Item size="sm">…</Item>
<Item size="default">…</Item>`}
      >
        {(["xs", "sm", "default"] as const).map((t) => (
          <Item key={t} variant="outline" size={t}>
            <ItemMedia variant="icon">
              <FileText />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>size = {t}</ItemTitle>
            </ItemContent>
          </Item>
        ))}
      </DocSection>

      <DocSection
        title="Groupe"
        description="`ItemGroup` porte le rôle de liste et l'espacement. `ItemSeparator` trace un filet entre deux lignes."
        layout="stack"
        code={`<ItemGroup>
  <Item>…</Item>
  <ItemSeparator />
  <Item>…</Item>
</ItemGroup>`}
      >
        <ItemGroup>
          {[
            { nom: "Catalogue", etat: "Actif", variant: "success" as const },
            { nom: "Stocks", etat: "En cours", variant: "progress" as const },
            { nom: "Facturation", etat: "Expiré", variant: "destructive" as const },
          ].map((s, i, tab) => (
            <div key={s.nom}>
              <Item>
                <ItemMedia variant="icon">
                  <Building2 />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>{s.nom}</ItemTitle>
                  <ItemDescription>Connecteur interne</ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Badge variant={s.variant}>{s.etat}</Badge>
                </ItemActions>
              </Item>
              {i < tab.length - 1 && <ItemSeparator />}
            </div>
          ))}
        </ItemGroup>
      </DocSection>

      <DocSection
        title="Actions"
        description="`ItemActions` tient à droite. Une action principale, ou un chevron si toute la ligne est cliquable."
        layout="stack"
        code={`<ItemActions>
  <Button iconOnly variant="ghost" aria-label="Télécharger la facture">
    <Download />
  </Button>
</ItemActions>`}
      >
        <Item variant="outline">
          <ItemMedia variant="icon">
            <FileText />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>facture-4821.pdf</ItemTitle>
            <ItemDescription>Émise le 2 avril — 2,4 Mo</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button
              iconOnly
              variant="ghost"
              size="sm"
              aria-label="Télécharger la facture 4821"
            >
              <Download />
            </Button>
          </ItemActions>
        </Item>
        <Item variant="outline">
          <ItemMedia variant="icon">
            <Building2 />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Maison Lelievre</ItemTitle>
            <ItemDescription>Ouvrir la fiche marque</ItemDescription>
          </ItemContent>
          <ItemActions>
            <ChevronRight className="size-4 text-muted-foreground" />
          </ItemActions>
        </Item>
      </DocSection>

      <DocPractices
        items={[
          "Item est une ligne de liste, pas une carte. Pour un objet autonome avec son propre en-tête et son pied, c'est une Card ; pour une surface d'outil groupant des panneaux, un Frame.",
          "`ItemTitle` nomme l'enregistrement, `ItemDescription` le qualifie en une ligne. Une description qui déborde signale que la ligne porte trop d'information.",
          "Une seule action par ligne dans `ItemActions`. Au-delà, passer par un menu — une rangée de boutons par ligne rend la liste illisible.",
          "Si toute la ligne est cliquable, mettre un chevron plutôt qu'un bouton : deux cibles cliquables concurrentes dans la même ligne créent un doute.",
          "Un bouton icône seule dans une ligne exige son `aria-label` : répété sur vingt lignes, « Télécharger » sans la cible ne dit rien à un lecteur d'écran.",
          "`ItemGroup` porte `role=list` : l'utiliser plutôt qu'un `<div>` quand les lignes forment vraiment une liste, sinon l'information de structure est perdue.",
          "Le statut d'une ligne passe par un Badge dans `ItemActions`, pas par une couleur de fond sur l'Item : `muted` marque un retrait, pas un état.",
        ]}
      />
    </DocPage>
  );
}
