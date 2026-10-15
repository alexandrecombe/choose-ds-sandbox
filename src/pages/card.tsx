import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/choose-ui/card";
import { Badge } from "@/components/choose-ui/badge";
import { Button } from "@/components/choose-ui/button";
import { DocPage, DocSection, DocPractices } from "@/src/doc";

export default function CardPage() {
  return (
    <DocPage
      title="Card"
      description="Conteneur d'un objet métier autonome : une opération, une marque, un récapitulatif. La carte regroupe ce qui se lit et se décide ensemble."
    >
      <DocSection
        title="Anatomie"
        description="En-tête (titre, description, action), contenu, pied. Toutes les parties sont optionnelles sauf le contenu."
        layout="stack"
        code={`<Card>
  <CardHeader>
    <CardTitle>Opération #4821</CardTitle>
    <CardDescription>Maison Lelievre — vente privée</CardDescription>
    <CardAction>
      <Badge variant="success">Actif</Badge>
    </CardAction>
  </CardHeader>
  <CardContent>…</CardContent>
  <CardFooter>
    <Button variant="secondary">Voir le détail</Button>
  </CardFooter>
</Card>`}
      >
        <Card>
          <CardHeader>
            <CardTitle>Opération #4821</CardTitle>
            <CardDescription>Maison Lelievre — vente privée</CardDescription>
            <CardAction>
              <Badge variant="success">Actif</Badge>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Ouverture le 12 mars, clôture le 19 mars. 348 références
              engagées, 1 204 commandes à ce jour.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="secondary">Voir le détail</Button>
          </CardFooter>
        </Card>
      </DocSection>

      <DocSection
        title="Sans pied"
        description="Une carte purement informative n'a pas besoin de pied. Ne pas ajouter un bouton pour remplir l'espace."
        layout="stack"
        code={`<Card>
  <CardHeader>
    <CardTitle>Facturation</CardTitle>
  </CardHeader>
  <CardContent>…</CardContent>
</Card>`}
      >
        <Card>
          <CardHeader>
            <CardTitle>Facturation</CardTitle>
            <CardDescription>Période du 1er au 31 mars</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Le règlement a été reçu le 2 avril. Aucune action requise.
            </p>
          </CardContent>
        </Card>
      </DocSection>

      <DocSection
        title="Dense"
        description="`size=sm` resserre l'espacement interne. Pour une grille de cartes ou un panneau latéral."
        layout="stack"
        code={`<Card size="sm">
  <CardHeader>
    <CardTitle>Commandes</CardTitle>
  </CardHeader>
  <CardContent>1 204</CardContent>
</Card>`}
      >
        <div className="grid grid-cols-2 gap-4">
          <Card size="sm">
            <CardHeader>
              <CardTitle>Commandes</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="font-display text-2xl">1 204</span>
            </CardContent>
          </Card>
          <Card size="sm">
            <CardHeader>
              <CardTitle>Références</CardTitle>
            </CardHeader>
            <CardContent>
              <span className="font-display text-2xl">348</span>
            </CardContent>
          </Card>
        </div>
      </DocSection>

      <DocPractices
        items={[
          "Une carte porte un objet, pas une section de page. Si le contenu n'a pas d'identité propre qu'on pourrait nommer, c'est une section, pas une Card.",
          "CardTitle nomme l'objet, CardDescription le qualifie. Ne pas y mettre une phrase de contexte qui appartient au contenu.",
          "CardAction loge un statut ou une action unique en haut à droite. Au-delà d'un élément, le pied est le bon endroit.",
          "Une seule action principale par carte. Une carte avec quatre boutons est une carte qui devrait être un écran.",
          "Ne pas imbriquer de carte dans une carte : l'anneau de bordure se répète et la hiérarchie devient illisible.",
          "Pour un message adressé à l'utilisateur, c'est une Alert banner — la Card présente un objet, elle ne s'adresse pas à lui.",
          "`size=sm` est fait pour les grilles de chiffres et les panneaux latéraux, pas pour gagner de la place sur une carte trop chargée.",
        ]}
      />
    </DocPage>
  );
}
