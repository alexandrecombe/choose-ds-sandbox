# Dropdown Menu — règles d'usage

## Quand l'utiliser

- Actions groupées derrière un bouton déclencheur visible (bouton "…", "Options", icône).
- Réglages rapides via checkbox ou radio items.

## Quand ne pas l'utiliser

- Pour une sélection de valeur dans un formulaire : utiliser **Select** ou **Combobox**.
- Pour des actions secondaires au clic droit : utiliser **Context Menu**.
- Pour 1-2 actions simples : un ou deux **Button** suffisent.

## Bonnes pratiques

- Toujours utiliser `asChild` sur `DropdownMenuTrigger` pour passer un `Button` comme déclencheur.
- Grouper les items avec `DropdownMenuLabel` et `DropdownMenuSeparator`.
- Indiquer les raccourcis clavier via `DropdownMenuShortcut`.
- Ne pas dépasser deux niveaux de sous-menu.
