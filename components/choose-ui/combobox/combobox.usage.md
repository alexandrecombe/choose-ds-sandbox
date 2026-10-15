# Combobox — quand l'utiliser

## Rôle

Champ de saisie avec liste déroulante filtrée. Permet de chercher et sélectionner
une ou plusieurs valeurs dans un jeu d'options potentiellement long.

## Quand utiliser

- La liste dépasse 5-6 options et l'utilisateur gagne à filtrer par saisie.
- Un champ de recherche avec suggestions (ex. recherche de marque, de ville).
- Une sélection multiple avec chips (ex. tags, catégories).

## Quand ne pas utiliser

| Besoin                          | Alternative              |
| ------------------------------- | ------------------------ |
| Courte liste (≤ 5 options)      | `choose-ui/select`       |
| Choix binaire                   | `choose-ui/checkbox`     |
| Filtrage avancé d'une liste     | `choose-ui/filters`      |
| Commande / action               | Command palette dédiée   |

## Variants et props clés

| Prop                 | Rôle                                                    |
| -------------------- | ------------------------------------------------------- |
| `items`              | Les options (tableau de strings ou d'objets)             |
| `itemToString`       | Convertit un objet en chaîne pour affichage et filtrage |
| `value`              | Valeur sélectionnée (mode contrôlé)                     |
| `onValueChange`      | Callback au changement de valeur                        |
| `selectedItems`      | Sélection multiple (mode multi contrôlé)                |
| `onSelectedItemsChange` | Callback pour la multi-sélection                     |
| `disabled`           | Désactive le combobox                                   |

## Composition

```
Combobox (Root)
├── ComboboxInput           — champ de saisie avec trigger
└── ComboboxContent         — popup
    ├── ComboboxEmpty       — message quand rien ne correspond
    └── ComboboxList        — liste filtrée
        ├── ComboboxItem    — une option
        ├── ComboboxGroup   — groupe d'options
        └── ComboboxLabel   — titre de groupe
```

Multi-sélection :
```
Combobox
├── ComboboxChips           — conteneur de chips
│   ├── ComboboxChip        — un chip par sélection
│   └── ComboboxChipsInput  — saisie dans les chips
└── ComboboxContent
```

## Règles

- Toujours inclure `ComboboxEmpty` pour indiquer un résultat vide.
- En multi-sélection, passer `anchor` de `useComboboxAnchor()` au `ComboboxChips`
  et au `ComboboxContent` pour un positionnement correct.
- Le filtre est géré par défaut via `itemToString` ; pour un filtrage custom,
  utiliser un enfant fonction dans `ComboboxList`.
