# Empty — règles d'usage

## Quand l'utiliser

- Une liste, un tableau ou une vue ne contient aucun élément.
- Une recherche ne retourne aucun résultat.
- Un filtre exclut toutes les données.

## Quand ne pas l'utiliser

- Pour un état d'erreur technique (timeout, 500) : utiliser **Alert Banner**.
- Pour un chargement en cours : utiliser **Skeleton**.
- Pour un contenu qui existe mais est masqué : revoir la logique d'affichage.

## Bonnes pratiques

- Toujours inclure un `EmptyTitle` expliquant pourquoi la vue est vide.
- Proposer une action (`EmptyContent` + `Button`) quand l'utilisateur peut résoudre l'état.
- Utiliser `EmptyMedia variant="icon"` avec une icône Lucide cohérente avec le contenu manquant.
- Ne pas confondre "aucune donnée" et "erreur" : le ton doit rester neutre et utile.
