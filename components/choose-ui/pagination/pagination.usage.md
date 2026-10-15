# Pagination

Découpe une liste longue en pages numérotées. Sous une table d'enregistrements, elle se place
après les lignes et reflète l'URL.

Construit sur le `pagination` de shadcn/ui (variante Base UI). reui référence ce composant mais
ne le possède pas : il n'en héberge que des exemples.

## Composition

```tsx
<Pagination>
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
</Pagination>
```

`isActive` marque la page courante et pose `aria-current="page"` — seul moyen pour un lecteur
d'écran de savoir où l'on se trouve.

## Piège : le lien n'est pas remplaçable depuis l'appel

`PaginationLink` **rend son propre `<a>`** et n'accepte ni `render` ni `asChild`, contrairement
aux autres composants Base UI de la lib. Dans une application routée, il faut remplacer cette
ancre par le lien du routeur **dans notre copie du composant** (`components/ui/pagination.tsx`).
Ce n'est pas réglable au point d'appel.

## Quand ne pas l'utiliser

- Pour une table qui trie et filtre ses lignes → le pager fait partie de la table, ne pas en
  recoller un en dessous.
- Pour des pages gardées en état local, sans URL par page → c'est un `ButtonGroup`. Une
  pagination qui ne change pas l'adresse casse le partage de lien, le retour arrière et le
  rechargement.

## Règles Choose

- Chaque page a son URL. C'est la condition pour que la Pagination soit le bon composant.
- Numéros et nombre total se dérivent de l'état ou de l'URL. Un jeu de pages écrit en dur se
  désynchronise dès le premier filtre appliqué.
- Tronquer avec `PaginationEllipsis` au-delà de sept numéros, en gardant toujours la première
  et la dernière page atteignables.
- Placer la pagination sous la liste, jamais au-dessus seule : on pagine après avoir lu.

## Règle agent

Ne pas fabriquer une rangée de boutons numérotés à la main. Si le besoin est un changement de
page sans URL, le dire et utiliser un `ButtonGroup` plutôt que de détourner la Pagination.
