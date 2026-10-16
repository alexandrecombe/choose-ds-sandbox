# Calendar

Grille de jours affichée **en place**, pour choisir une date, plusieurs dates isolées, ou un
intervalle. C'est la brique de saisie de date du DS.

Construit sur le `calendar` de shadcn/ui (variante Base UI), lui-même bâti sur
`react-day-picker`. L'API est donc celle de react-day-picker, pas une API Choose.

## Composition

```tsx
const [date, setDate] = useState<Date | undefined>();

<Calendar mode="single" selected={date} onSelect={setDate} />
```

Trois modes, et le reste de l'API en découle :

- `mode="single"` — `selected` est une `Date`, `onSelect` rend une `Date | undefined`.
- `mode="multiple"` — `selected` est un tableau de `Date`.
- `mode="range"` — `selected` est un `DateRange` (`{ from, to }`).

Sans `required`, recliquer sur le jour déjà sélectionné le désélectionne : `onSelect` rend
alors `undefined`. Gérer ce cas, ou poser `required`.

## Le français est le défaut

La surcouche Choose impose `locale={fr}`. Sans elle, react-day-picker affiche les jours et les
mois en anglais et fait démarrer la semaine le dimanche. Ne pas repasser une locale anglaise
sans raison produit explicite.

## Quand ne pas l'utiliser

- Pour un champ de date dans un formulaire → **Date picker**, qui ouvre cette grille dans un
  popover sous un bouton. Un calendrier posé à plat dans un formulaire mange la page.
- Pour filtrer sur une période (mois, trimestre, année) avec des opérateurs *avant* / *après* /
  *entre* → ce n'est pas ce composant ; le besoin est noté dans `GAPS.md`.
- Pour une date de naissance ou toute date lointaine → un champ de saisie est plus rapide que
  de naviguer des dizaines de mois.

## Navigation de l'en-tête

`captionLayout` contrôle l'en-tête : `"label"` (défaut) affiche le mois en texte,
`"dropdown"` le remplace par des menus mois et année. Pour une date éloignée de plus de
quelques mois, passer en `dropdown` — sinon l'utilisateur clique la flèche vingt fois.

## Règles Choose

- Typo : `font-sans`, imposée par la surcouche.
- Couleur : le jour sélectionné prend `--primary`, le jour courant `--accent`. Aucune couleur
  décorative par type de jour — un jour désactivé l'est par `disabled`, pas par sa teinte.
- Toujours borner la plage utile avec `disabled` (`{ before: new Date() }` pour interdire le
  passé) plutôt que de valider après coup : un jour qu'on ne peut pas choisir ne doit pas être
  cliquable.

## Règle agent

Ne jamais fabriquer une grille de jours à la main, ni poser un `<input type="date">` natif —
son rendu et sa langue dépendent du navigateur et échappent au DS. Importer
`choose-ui/calendar`, ou `choose-ui/date-picker` si le calendrier doit vivre dans un champ.
