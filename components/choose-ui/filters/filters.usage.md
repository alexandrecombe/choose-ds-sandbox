# Filters — règles d'usage

## Quand l'utiliser

- Pour permettre à l'utilisateur de restreindre une liste, une table ou un dashboard à un
  sous-ensemble de données, à l'aide de critères combinés.
- Quand les critères sont dynamiques (l'utilisateur choisit les champs à filtrer) et non
  prédéfinis dans l'interface.

## Quand ne pas l'utiliser

- Pour un tri ou un classement → utiliser un menu de tri ou les en-têtes de colonnes.
- Pour 1-2 filtres fixes toujours visibles → utiliser un Select ou un groupe de radios.
- Pour une recherche textuelle globale → utiliser un champ de recherche (Input).

## Variant

| Variant    | Cas d'usage |
|------------|-------------|
| `basic`    | Filtrage rapide, utilisateurs non techniques, < 8 champs. |
| `advanced` | Requêtes complexes, combinateurs AND/OR, groupes imbriqués. |

## advancedMode

| Mode      | Cas d'usage |
|-----------|-------------|
| `popover` | L'arbre s'ouvre dans un popover, gain de place vertical. |
| `inline`  | L'arbre est toujours visible, utilisé quand le filtrage est l'action principale. |

## Bonnes pratiques

- Limiter les opérateurs exposés à ceux pertinents pour le type de donnée (`is`/`isNot`
  pour un statut, `greaterThan`/`lessThan` pour un nombre).
- Fournir des `options` typées pour les champs à valeurs fermées (statut, catégorie).
- Utiliser `showClear` pour permettre de revenir à une vue non filtrée en un clic.
- Proposer `onConvertToAdvanced` dans la barre basic si l'utilisateur a besoin de passer
  à un filtrage structuré.
- En mode contrôlé (`query` + `onQueryChange`), persister la requête pour que l'état
  survive à un changement de page ou à un retour en arrière.
