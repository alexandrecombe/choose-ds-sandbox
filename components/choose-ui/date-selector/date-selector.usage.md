# Date selector

Filtre de date d'un rapport ou d'une liste : on choisit une **période** (jour, mois,
trimestre, semestre, année) et un **opérateur** (est, avant, après, entre).

Construit sur le `date-selector` de reui.

## Ce n'est pas un champ de date

C'est la confusion à éviter, et elle est facile à faire puisque les deux ouvrent un
calendrier. La frontière tient en une phrase : **le Date picker saisit une date, le Date
selector formule une condition.**

|  | Date picker | Date selector |
|---|---|---|
| Rôle | champ d'un formulaire | filtre d'une liste ou d'un rapport |
| Valeur | une `Date` | un `DateSelectorValue` |
| Exemple | « Date de livraison » | « commandes du trimestre dernier » |

reui le dit de son côté : son `whenNotToUse` renvoie vers un simple calendrier dès qu'il
s'agit d'« un jour, sans onglets de période ni opérateurs ».

## La valeur n'est pas une Date

```tsx
const [value, setValue] = useState<DateSelectorValue | undefined>();

<DateSelector value={value} onChange={setValue} label="Période" />
```

`DateSelectorValue` est une structure : `{ period, operator, startDate, endDate, year,
month, quarter, halfYear, rangeStart, rangeEnd }`. Ne jamais lui passer une `Date` brute, et
ne jamais supposer que `startDate` est renseigné — sur une période `month` ou `quarter`, ce
sont `year` et `month` / `quarter` qui portent l'information.

`onChange` se déclenche **au montage**, puis à chaque changement d'identité de la fonction.
Lui passer un setter stable, jamais un appel d'API en ligne : sinon la requête part au
premier rendu, puis à chaque re-rendu.

## Les défauts français sont imposés

La surcouche corrige quatre défauts de l'upstream, qui sont des inadaptations produit et non
des préférences :

- i18n française complète — l'upstream est en anglais ;
- `weekStartsOn: 1`, la semaine démarre le lundi ;
- `dayDateFormat: "dd/MM/yyyy"` — l'upstream est en `MM/dd/yyyy` ;
- `maxYear` calculé sur l'année courante + 1. L'upstream le fige à **2026** : sans ce
  correctif, l'année suivante devient inatteignable dès 2026. `yearRange` seul n'y change
  rien — c'est bien `maxYear` qu'il faut déplacer.

## Réglages utiles

- `allowRange={false}` — retire l'opérateur « entre » et verrouille la sélection sur une date
  unique. À poser quand l'intervalle n'a pas de sens pour le filtre.
- `periodTypes` — restreint les onglets proposés. Un filtre qui n'a de sens qu'au mois ne
  doit pas offrir le jour.
- `presetMode` — verrouille l'opérateur. Utile pour un filtre « après » permanent.
- `showInput={false}` — masque le champ texte au-dessus du calendrier.

## Quand ne pas l'utiliser

- Pour saisir une date dans un formulaire → **Date picker**.
- Pour un calendrier affiché à plat → **Calendar**.
- Pour une condition de date posée à côté d'autres conditions dans une même barre de requête
  → **Filters**, qui gère déjà les dates.

## Règles Choose

- Typo : `font-sans`, imposée par la surcouche.
- Donner un `label` : sans lui, le filtre n'annonce pas sur quoi il porte.
- Ne pas recâbler l'i18n en anglais sans raison produit explicite.

## Règle agent

Ne jamais fabriquer un filtre de période à la main, ni détourner le Date picker pour
exprimer un intervalle. Importer `choose-ui/date-selector`.
