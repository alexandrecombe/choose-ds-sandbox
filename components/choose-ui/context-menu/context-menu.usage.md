# Context Menu — règles d'usage

## Quand l'utiliser

- Actions secondaires sur un élément (ligne de tableau, carte, zone de contenu).
- Le déclencheur est le clic droit ; aucun bouton visible n'est nécessaire.

## Quand ne pas l'utiliser

- Pour des actions principales accessibles à tous : utiliser un **Button** ou un **Dropdown Menu**.
- Sur mobile / tactile (pas de clic droit) : préférer un **Dropdown Menu** avec un bouton "…".

## Bonnes pratiques

- Grouper les actions liées avec `ContextMenuSeparator`.
- Indiquer les raccourcis clavier via `ContextMenuShortcut`.
- Limiter la profondeur des sous-menus à deux niveaux maximum.
- Ne pas mettre d'actions destructives sans confirmation (passer par un Alert Dialog).
