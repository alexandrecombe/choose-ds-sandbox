# Card

Conteneur d'un objet métier autonome : une opération, une marque, un récapitulatif chiffré.
La carte regroupe ce qui se lit et se décide ensemble.

Construit sur le `card` de shadcn/ui (variante Base UI), recoloré par les tokens Choose.

## Composition

```tsx
<Card>
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
</Card>
```

Toutes les parties sont optionnelles sauf `CardContent`. `size="sm"` resserre l'espacement
interne, pour une grille de chiffres ou un panneau latéral.

## Quand l'utiliser

- Présenter un objet identifiable qu'on pourrait nommer et ouvrir.
- Grouper des chiffres clés en grille.

## Quand ne pas l'utiliser

- Pour une section de page sans identité propre → une section, pas une Card.
- Pour un message adressé à l'utilisateur → une Alert banner. La Card présente un objet, elle
  ne s'adresse pas à lui.
- Pour un tableau de lignes comparables → une table reste plus lisible qu'une pile de cartes.

## Règles Choose

- `CardTitle` nomme l'objet, `CardDescription` le qualifie. Pas de phrase de contexte dans le titre.
- `CardAction` loge un statut ou une action unique en haut à droite. Au-delà, c'est le pied.
- Une seule action principale par carte.
- Jamais de carte dans une carte : l'anneau se répète et la hiérarchie devient illisible.

## Règle agent

Ne pas fabriquer un conteneur à la main (`<div class="rounded-xl border p-4">`). Importer
`choose-ui/card`, qui porte le rayon, l'anneau et l'espacement du DS.
