# Date selector

Filtre de date d'un rapport ou d'une liste : on choisit une **période** (jour, mois,
trimestre, semestre, année) et un **opérateur** (est, avant, après, entre).

Construit sur le `date-selector` de reui.

## Ce n'est pas un champ de date

C'est la confusion à éviter, et elle est facile à faire puisqu'il ouvre un calendrier. Ce
composant **formule une condition**, il ne saisit pas une date : il rend un
`DateSelectorValue`, pas une `Date`. « Commandes du trimestre dernier », pas « date de
livraison ».

reui le dit de son côté : son `whenNotToUse` renvoie vers un simple calendrier dès qu'il
s'agit d'« un jour, sans onglets de période ni opérateurs ».

Le besoin d'un vrai champ de date dans un formulaire n'est pas couvert par la lib ; il est
noté dans `GAPS.md`.

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

## Le poser derrière un popover

À plat, le sélecteur occupe la largeur de deux calendriers — il mange la page. Dans une barre
de filtres, le poser derrière un bouton, et **valider sur Appliquer** :

```tsx
const [value, setValue] = useState<DateSelectorValue>();
const [brouillon, setBrouillon] = useState<DateSelectorValue>();

useEffect(() => { if (ouvert) setBrouillon(value) }, [ouvert, value]);
// Annuler : setBrouillon(value) — Appliquer : setValue(brouillon)
```

Le calendrier édite un **brouillon**, pas la valeur. Sans ce détour, chaque clic dans le
calendrier change la valeur et relance la requête derrière : l'utilisateur qui navigue de
novembre à mars en déclenche quatre. C'est la raison d'être de cette forme, pas l'esthétique.

`formatDateValue(value)` rend le libellé du bouton — « T4 2026 », « 12/11/2026 ». La version
exportée ici est pré-liée au français ; celle de l'upstream retombe sur l'anglais.

## Réglages utiles

- `allowRange={false}` — retire l'opérateur « entre » et verrouille la sélection sur une date
  unique. À poser quand l'intervalle n'a pas de sens pour le filtre.
- `periodTypes` — restreint les onglets proposés. Un filtre qui n'a de sens qu'au mois ne
  doit pas offrir le jour.
- `presetMode` — verrouille l'opérateur. Utile pour un filtre « après » permanent.
- `showInput={false}` — masque le champ texte au-dessus du calendrier.

## Quand ne pas l'utiliser

- Pour un calendrier affiché à plat → **Calendar**.
- Pour saisir une date dans un champ de formulaire → rien dans la lib ne le couvre ; voir
  `GAPS.md` plutôt que de détourner ce composant.
- Pour une condition de date posée à côté d'autres conditions dans une même barre de requête
  → **Filters**, qui gère déjà les dates.

## Règles Choose

- Typo : `font-sans`, imposée par la surcouche.
- Donner un `label` : sans lui, le filtre n'annonce pas sur quoi il porte.
- Ne pas recâbler l'i18n en anglais sans raison produit explicite.

## Règle agent

Ne jamais fabriquer un filtre de période à la main. Importer `choose-ui/date-selector`.
Et ne pas le détourner en champ de formulaire : sa valeur n'est pas une date.
