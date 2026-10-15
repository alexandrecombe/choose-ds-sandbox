# Breadcrumb

Fil d'Ariane : situe l'écran courant dans la hiérarchie du produit et permet de remonter d'un
niveau. Il décrit un chemin, pas un historique de navigation.

Construit sur le `breadcrumb` de shadcn/ui (variante Base UI), recoloré par les tokens Choose.

## Composition

```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/operations">Opérations</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Opération #4821</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

## Quand l'utiliser

- Un écran de détail atteint depuis une liste (marque, opération, utilisateur).
- Une arborescence de plus de deux niveaux où l'utilisateur doit pouvoir remonter.

## Quand ne pas l'utiliser

- Un seul niveau au-dessus → un lien de retour suffit et prend moins de place.
- Pour refléter le parcours de l'utilisateur → le fil décrit la hiérarchie, pas l'historique.
- Pour un en-tête complet avec onglets et recherche → c'est une barre de navigation.

## Règles Choose

- La page courante est toujours le dernier niveau, en `BreadcrumbPage` : non cliquable.
- Les libellés reprennent exactement le titre de la page de destination.
- Au-delà de quatre niveaux, replier le milieu avec `BreadcrumbEllipsis`.
- Le fil se place au-dessus du titre de page, jamais en dessous.

## Règle agent

`BreadcrumbLink` accepte un composant de lien applicatif via `render`. Ne jamais recâbler un
`<a>` à la main ni fabriquer un fil avec des `/` entre deux spans.
