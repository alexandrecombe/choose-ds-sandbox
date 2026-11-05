# Date picker

Champ de date : un bouton qui affiche la date choisie et ouvre un calendrier dans un popover.
La forme normale de la saisie de date dans un formulaire.

## Une composition, pas une copie

Ce composant n'a **pas de source amont**. shadcn documente le date picker comme une recette :
*« A date picker is built from Popover and Calendar (there is no DatePicker component). »*
Ce fichier fige cette recette pour que chaque prototype ne la réassemble pas à sa façon.

Conséquence : aucune mise à jour upstream ne s'y applique, et ce fichier d'usage est la seule
documentation qui existe. Il compte donc davantage que pour une primitive.

## Composition

```tsx
const [date, setDate] = useState<Date | undefined>();

<label htmlFor="livraison">Date de livraison</label>
<DatePicker id="livraison" value={date} onSelect={setDate} />
```

Le composant est **contrôlé** : `value` et `onSelect` vont toujours ensemble. Le popover se
ferme de lui-même à la sélection — c'est le comportement attendu d'un champ, et ça évite le
bouton « Appliquer » que personne ne clique.

## Props qui changent le comportement

- `dateFormat` — format `date-fns` du libellé. `PPP` (défaut) donne « 23 septembre 2026 » ;
  `dd/MM/yyyy` donne « 23/09/2026 ». Préférer le format long : il lève l'ambiguïté jour / mois.
- `captionLayout="dropdown"` — menus mois et année dans l'en-tête. À poser dès que la date
  visée peut être à plus de quelques mois, sinon l'utilisateur clique la flèche vingt fois.
- `disabledDays` — passé tel quel à react-day-picker. `{ before: new Date() }` interdit le
  passé. Borner ici plutôt que de valider après coup : un jour impossible ne doit pas être
  cliquable.

## L'erreur passe par `aria-invalid`

Comme pour l'Input, l'état d'erreur se pose sur l'attribut d'accessibilité et le message se
relie par `aria-describedby`. Ne jamais colorer la bordure du bouton à la main.

## Quand ne pas l'utiliser

- Pour un calendrier affiché à plat, visible en permanence → **Calendar**.
- Pour une date de naissance → un champ de saisie. Naviguer trente ans de calendrier est plus
  lent que taper huit chiffres.
- Pour un intervalle, ou pour filtrer sur une période avec des opérateurs *avant* / *après* /
  *entre* → **Date selector**. Ce composant ne gère que `mode="single"` et rend une `Date`,
  pas une condition.
- Pour une condition de date posée à côté d'autres conditions dans une même barre de requête
  → **Filters**.

## Règles Choose

- Toujours un label visible relié par `htmlFor` / `id`. Le `placeholder` du bouton annonce
  l'action, il ne nomme pas le champ.
- Le bouton est en variant `secondary` : un champ n'est pas une action principale.
- Les dates s'affichent en français — `date-fns` reçoit la locale `fr`, comme le calendrier.

## Règle agent

Ne jamais réassembler Popover + Calendar à la main, ni poser un `<input type="date">` natif.
Importer `choose-ui/date-picker`.
