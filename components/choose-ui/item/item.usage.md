# Item

Ligne d'une liste : un visuel, un intitulé, un texte de support et des actions. La brique des
listes d'enregistrements d'un back-office.

Construit sur l'`item` de shadcn/ui (variante Base UI). Le composant upstream repose déjà sur
les tokens Choose ; la surcouche n'impose que `font-sans`.

## Composition

```tsx
<Item variant="outline">
  <ItemMedia variant="icon">
    <Building2 />
  </ItemMedia>
  <ItemContent>
    <ItemTitle>Maison Lelievre</ItemTitle>
    <ItemDescription>348 références — vente privée</ItemDescription>
  </ItemContent>
  <ItemActions>
    <Badge variant="success">Actif</Badge>
  </ItemActions>
</Item>
```

Seul `ItemContent` est obligatoire. `ItemGroup` porte `role="list"` et l'espacement entre
lignes ; `ItemSeparator` trace un filet entre deux lignes.

## Variants et tailles

- `default` — sans bordure, pour une liste dense.
- `outline` — bordure, pour une ligne autonome.
- `muted` — fond en retrait. Marque un retrait, **pas un état** : un statut passe par un Badge.

Tailles : `xs`, `sm`, `default`. À savoir : en amont, `sm` et `default` partagent le même
rembourrage — la différence se joue sur l'espacement entre lignes d'un même `ItemGroup`.

## Frontière avec Card et Frame

- Une **ligne** dans une liste d'enregistrements → **Item**.
- Un **objet autonome** avec son en-tête, son contenu et son pied → **Card**.
- Une **surface d'outil** regroupant plusieurs panneaux sous un contour → **Frame**.

## Quand ne pas l'utiliser

- Pour des données comparables colonne par colonne → une table reste plus lisible.
- Pour un objet qu'on ouvre et qui a sa propre identité → une Card.

## Règles Choose

- `ItemTitle` nomme l'enregistrement, `ItemDescription` le qualifie en une ligne. Une
  description qui déborde signale que la ligne porte trop d'information.
- Une seule action par ligne dans `ItemActions`. Au-delà, un menu.
- Si toute la ligne est cliquable, un chevron plutôt qu'un bouton : deux cibles concurrentes
  dans la même ligne créent un doute.
- Utiliser `ItemGroup` quand les lignes forment vraiment une liste : il porte `role="list"`,
  qu'un `<div>` ne donnerait pas.

## Règle agent

Ne jamais fabriquer une ligne de liste à la main (`<div class="flex items-center">`).
Un bouton icône seule dans une ligne exige son `aria-label` : répété sur vingt lignes,
« Télécharger » sans la cible ne dit rien à un lecteur d'écran.
