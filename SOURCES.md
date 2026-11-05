# Sources

Origine des composants copiés dans ce repo. Tout est du code copié : aucune dépendance npm
vers shadcn/ui ou reui, donc aucune mise à jour automatique. Ce tableau sert à savoir, plus
tard, si une version upstream vaut d'être reprise.

Colonne « restylé » : `oui` = divergé des tokens Choose, une reprise upstream demande une
refonte manuelle. `non` = copie conforme, une reprise upstream est un simple remplacement.

Chaque fichier copié porte le même lien dans un commentaire d'en-tête : la trace reste avec le
fichier s'il est déplacé, ce tableau sert à balayer toute la lib d'un coup.

## Tailwind

Le projet est en **Tailwind v4** (migré le 2026-10-15 avec `npx @tailwindcss/upgrade`). Les
sources shadcn et reui visent toutes v4 : un composant repris upstream s'installe désormais sans
réécriture de classes.

Deux pièges rencontrés pendant la migration, utiles si la config CSS est retouchée :

- `src/choose-tokens.css` doit être importé **après** `tailwindcss`. C'est l'`@import 'tailwindcss'`
  qui déclare l'ordre des couches ; importé avant, `base` serait déclarée en premier donc *sous*
  `theme`, et les valeurs par défaut de Tailwind écraseraient les tokens Choose.
- Ne pas redéclarer `--font-*` ni `--radius-*` dans `@theme` : ce sont des espaces de noms de thème
  v4, et les pointer sur eux-mêmes crée une auto-référence qui vide la variable. Les utilitaires
  `font-sans`, `font-mono` et `rounded-*` existent par défaut et lisent ces noms ; il suffit que
  choose-tokens.css en fournisse la valeur. `font-display` n'ayant pas d'équivalent par défaut,
  il est déclaré via `@utility`.

## Tokens et modes

`src/choose-tokens.css` est **généré depuis l'export Figma** (`src/tokens/figma/mode-*.json`),
les deux modes à partir de la même source : 60 couleurs chacun. Y ajouter une valeur à la main
la fera diverger de Figma au prochain export.

Deux pièges rencontrés en le générant :

- trois tokens sombres portent une **transparence** (`border` et `sidebar-border` à 10 %,
  `input` à 15 %). Les réduire à leur hexadécimal donne des bordures blanches opaques : ils
  sont rendus en `rgb(... / alpha)`.
- la sidebar shadcn tournait sur ses propres variables HSL génériques, hors palette Choose.
  L'export contient une palette `sidebar` complète : le thème pointe désormais dessus, et les
  blocs HSL ont été supprimés.

`popover` et `ring`, un temps aliasés faute de mieux, existent bien dans l'export : les alias
ont été retirés.

## Lib Choose — `components/choose-ui/`

| Fichier | Origine | Composant d'origine | Restylé | Ajouté |
|---|---|---|---|---|
| `badge/index.tsx` | reui | [`badge`](https://reui.io/docs/badge) (Base UI) | oui | 2026-09-15 |
| `button/index.tsx` | shadcn/ui | [`button`](https://ui.shadcn.com/docs/components/base/button) | oui | 2026-07-30 |
| `avatar/index.tsx` | shadcn/ui | [`avatar`](https://ui.shadcn.com/docs/components/base/avatar) (Base UI) | oui — typo seule | 2026-10-15 |
| `breadcrumb/index.tsx` | shadcn/ui | [`breadcrumb`](https://ui.shadcn.com/docs/components/base/breadcrumb) (Base UI) | oui — typo seule | 2026-10-15 |
| `card/index.tsx` | shadcn/ui | [`card`](https://ui.shadcn.com/docs/components/base/card) (Base UI) | oui — typo seule | 2026-10-15 |
| `button-group/index.tsx` | shadcn/ui | [`button-group`](https://ui.shadcn.com/docs/components/base/button-group) (Base UI) | oui — typo seule | 2026-10-15 |
| `alert-dialog/index.tsx` | shadcn/ui | [`alert-dialog`](https://ui.shadcn.com/docs/components/base/alert-dialog) (Base UI) | oui — typo seule | 2026-10-15 |
| `attachment/index.tsx` | shadcn/ui | [`attachment`](https://ui.shadcn.com/docs/components/base/attachment) (Base UI) | oui — typo + largeur | 2026-10-15 |
| `frame/index.tsx` | reui | [`frame`](https://reui.io/docs/components/base/frame) | oui — typo seule | 2026-10-15 |
| `item/index.tsx` | shadcn/ui | [`item`](https://ui.shadcn.com/docs/components/base/item) (Base UI) | oui — typo seule | 2026-10-15 |
| `pagination/index.tsx` | shadcn/ui | [`pagination`](https://ui.shadcn.com/docs/components/base/pagination) (Base UI) | oui — typo seule | 2026-10-15 |
| `input/index.tsx` | shadcn/ui | [`input`](https://ui.shadcn.com/docs/components/base/input) (Base UI) | oui — typo seule | 2026-10-15 |
| `select/index.tsx` | shadcn/ui | [`select`](https://ui.shadcn.com/docs/components/base/select) (Base UI) | oui — typo seule | 2026-10-15 |
| `checkbox/index.tsx` | shadcn/ui | [`checkbox`](https://ui.shadcn.com/docs/components/base/checkbox) (Base UI) | non | 2026-10-15 |
| `combobox/index.tsx` | shadcn/ui | [`combobox`](https://ui.shadcn.com/docs/components/base/combobox) (Base UI) | oui — typo seule | 2026-10-15 |
| `context-menu/index.tsx` | shadcn/ui | [`context-menu`](https://ui.shadcn.com/docs/components/base/context-menu) (Base UI) | oui — typo seule | 2026-10-15 |
| `dropdown-menu/index.tsx` | shadcn/ui | [`dropdown-menu`](https://ui.shadcn.com/docs/components/base/dropdown-menu) (Base UI) | oui — typo seule | 2026-10-15 |
| `empty/index.tsx` | shadcn/ui | [`empty`](https://ui.shadcn.com/docs/components/base/empty) (Base UI) | oui — typo seule | 2026-10-15 |
| `hover-card/index.tsx` | shadcn/ui | [`hover-card`](https://ui.shadcn.com/docs/components/base/hover-card) (Base UI) | non | 2026-10-15 |
| `separator/index.tsx` | shadcn/ui | [`separator`](https://ui.shadcn.com/docs/components/base/separator) (Base UI) | oui — typo seule | 2026-10-15 |
| `skeleton/index.tsx` | shadcn/ui | [`skeleton`](https://ui.shadcn.com/docs/components/base/skeleton) (Base UI) | non | 2026-10-15 |
| `tabs/index.tsx` | shadcn/ui | [`tabs`](https://ui.shadcn.com/docs/components/base/tabs) (Base UI) | oui — typo seule | 2026-10-16 |
| `radio-group/index.tsx` | shadcn/ui | [`radio-group`](https://ui.shadcn.com/docs/components/base/radio-group) (Base UI) | oui — typo seule | 2026-10-16 |
| `switch/index.tsx` | shadcn/ui | [`switch`](https://ui.shadcn.com/docs/components/base/switch) (Base UI) | non | 2026-10-16 |
| `tooltip/index.tsx` | shadcn/ui | [`tooltip`](https://ui.shadcn.com/docs/components/base/tooltip) (Base UI) | oui — typo seule | 2026-10-16 |
| `textarea/index.tsx` | shadcn/ui | [`textarea`](https://ui.shadcn.com/docs/components/base/textarea) (Base UI) | oui — typo seule | 2026-10-16 |
| `calendar/index.tsx` | shadcn/ui | [`calendar`](https://ui.shadcn.com/docs/components/base/calendar) (Base UI) | oui — typo + locale `fr` | 2026-10-16 |
| `aspect-ratio/index.tsx` | shadcn/ui | [`aspect-ratio`](https://ui.shadcn.com/docs/components/base/aspect-ratio) (Base UI) | non | 2026-11-05 |
| `date-selector/index.tsx` | reui | [`date-selector`](https://reui.io/components/date-selector) | oui — typo + i18n fr + défauts | 2026-11-05 |
| `filters/index.tsx` | reui | [`filters`](https://reui.io/components/filters) | oui — typo seule | 2026-10-15 |
| `alert-banner/index.tsx` | reui | [`alert`](https://reui.io/docs/components/base/alert) | oui | 2026-10-15 |

`badge` importe `@base-ui/react` (`mergeProps`, `useRender`), signature de reui — le badge
shadcn repose sur `@radix-ui/react-slot`.

`button` vient de shadcn/ui (confirmé à la main), mais il a entièrement divergé : plus de cva
ni de `@radix-ui/react-slot`, types et table de variants réécrits, et un jeu de variants
remanié : `default`, `outline` et `link` ont disparu au profit de `primary` ; restent
`secondary`, `ghost` et `destructive`.
Une reprise upstream serait une réécriture, pas un remplacement. À ne pas confondre avec
`components/ui/button.tsx`, qui est la copie shadcn restée conforme.

`alert-banner` est une surcouche mince sur `components/reui/alert.tsx` : il en reprend la
structure et l'API compositionnelle (`Alert` / `AlertTitle` / `AlertDescription` /
`AlertAction`) et ne remplace que les couleurs, via les tokens `--*-accent` passés en style
inline. reui colore en opacité (`bg-success/4`) ; Choose a des teintes dédiées.

Les `cssVars` du registry reui **n'ont pas été installées** : elles redéfinissaient `--success`,
`--success-foreground`, `--warning`, `--warning-foreground` et `--destructive-foreground`, et
ajoutaient `--info` et `--invert` en couleurs Tailwind génériques. Si tu réinstalles ce
composant avec la CLI, pense à révoquer les modifications de `src/index.css`.

Le variant `invert` de reui n'est pas exposé : il n'existe aucun token Choose correspondant.

## Copie reui brute — `components/reui/`

Socle technique de la surcouche Choose, à ne pas consommer directement dans un prototype.

| Fichier | Origine | Composant d'origine | Restylé | Ajouté |
|---|---|---|---|---|
| `frame.tsx` | reui | [`frame`](https://reui.io/docs/components/base/frame) | non | 2026-10-15 |
| `filters/*.tsx` | reui | [`filters`](https://reui.io/components/filters) | non | 2026-10-15 |
| `cascader/*.tsx` | reui | [`filters`](https://reui.io/components/filters) (dépendance) | non | 2026-10-15 |
| `alert.tsx` | reui | [`alert`](https://reui.io/docs/components/base/alert) | non — un écart assumé | 2026-10-15 |
| `date-selector.tsx` | reui | [`date-selector`](https://reui.io/components/date-selector) | non | 2026-11-05 |

Un seul écart : la colonne de l'icône vaut `1.25rem` au lieu du `calc(var(--spacing)*3)` upstream
(12px). La surcouche Choose force des icônes de 20px là où reui en attend de 16px ; au format
upstream, l'icône déborderait de sa colonne. À revoir si la taille d'icône Choose change.

`frame` est en revanche bien distribué par le registry reui et n'embarque aucune `cssVars` :
le fichier a été écrit depuis `reui.io/r/new-york/frame.json` sans passer par la CLI, pour
éviter le paquet npm parasite `cn` qu'elle avait installé avec `alert`. Son rayon retombe sur
`--radius-xl`, donc il suit le rayon Choose sans réglage.

## Copies shadcn brutes — `components/ui/`

Hors lib Choose, à ne pas consommer directement dans un prototype. Deux rôles : la plupart
font tourner la sandbox elle-même (la sidebar de navigation) ; `avatar.tsx` sert de socle à la
surcouche `choose-ui/avatar`. Style `new-york`, non restylées.

| Fichier | Origine | Composant d'origine | Restylé | Ajouté |
|---|---|---|---|---|
| `avatar.tsx` | shadcn/ui | [`avatar`](https://ui.shadcn.com/docs/components/base/avatar) (Base UI) | non | 2026-10-15 |
| `button.tsx` | shadcn/ui | [`button`](https://ui.shadcn.com/docs/components/base/button) (Base UI) | non | 2026-10-15 |
| `breadcrumb.tsx` | shadcn/ui | [`breadcrumb`](https://ui.shadcn.com/docs/components/base/breadcrumb) (Base UI) | non | 2026-10-15 |
| `card.tsx` | shadcn/ui | [`card`](https://ui.shadcn.com/docs/components/base/card) (Base UI) | non | 2026-10-15 |
| `button-group.tsx` | shadcn/ui | [`button-group`](https://ui.shadcn.com/docs/components/base/button-group) (Base UI) | non | 2026-10-15 |
| `alert-dialog.tsx` | shadcn/ui | [`alert-dialog`](https://ui.shadcn.com/docs/components/base/alert-dialog) (Base UI) | non | 2026-10-15 |
| `attachment.tsx` | shadcn/ui | [`attachment`](https://ui.shadcn.com/docs/components/base/attachment) (Base UI) | non | 2026-10-15 |
| `collapsible.tsx` | écrit à la main | — (sur `@base-ui/react/collapsible`) | — | 2026-10-15 |
| `item.tsx` | shadcn/ui | [`item`](https://ui.shadcn.com/docs/components/base/item) (Base UI) | non | 2026-10-15 |
| `pagination.tsx` | shadcn/ui | [`pagination`](https://ui.shadcn.com/docs/components/base/pagination) (Base UI) | non | 2026-10-15 |
| `input.tsx` | shadcn/ui | [`input`](https://ui.shadcn.com/docs/components/base/input) (Base UI) | non | 2026-10-15 |
| `select.tsx` | shadcn/ui | [`select`](https://ui.shadcn.com/docs/components/base/select) (Base UI) | non | 2026-10-15 |
| `checkbox.tsx` | shadcn/ui | [`checkbox`](https://ui.shadcn.com/docs/components/base/checkbox) (Base UI) | non | 2026-10-15 |
| `combobox.tsx` | shadcn/ui | [`combobox`](https://ui.shadcn.com/docs/components/base/combobox) (Base UI) | non | 2026-10-15 |
| `input-group.tsx` | shadcn/ui | [`input-group`](https://ui.shadcn.com/docs/components/base/input-group) (Base UI) | non | 2026-10-15 |
| `textarea.tsx` | shadcn/ui | [`textarea`](https://ui.shadcn.com/docs/components/base/textarea) (Base UI) | non | 2026-10-15 |
| `calendar.tsx` | shadcn/ui | [`calendar`](https://ui.shadcn.com/docs/components/base/calendar) (Base UI) | non | 2026-10-16 |
| `aspect-ratio.tsx` | shadcn/ui | [`aspect-ratio`](https://ui.shadcn.com/docs/components/base/aspect-ratio) (Base UI) | non | 2026-11-05 |
| `separator.tsx` | shadcn/ui | [`separator`](https://ui.shadcn.com/docs/components/base/separator) (Base UI) | non | 2026-10-15 |
| `popover.tsx` | shadcn/ui | [`popover`](https://ui.shadcn.com/docs/components/popover) | non | 2026-10-15 |
| `dropdown-menu.tsx` | shadcn/ui | [`dropdown-menu`](https://ui.shadcn.com/docs/components/base/dropdown-menu) (Base UI) | non | 2026-10-15 |
| `context-menu.tsx` | shadcn/ui | [`context-menu`](https://ui.shadcn.com/docs/components/base/context-menu) (Base UI) | non | 2026-10-15 |
| `empty.tsx` | shadcn/ui | [`empty`](https://ui.shadcn.com/docs/components/base/empty) (Base UI) | non | 2026-10-15 |
| `hover-card.tsx` | shadcn/ui | [`hover-card`](https://ui.shadcn.com/docs/components/base/hover-card) (Base UI) | non | 2026-10-15 |
| `scroll-area.tsx` | shadcn/ui | [`scroll-area`](https://ui.shadcn.com/docs/components/scroll-area) | non | 2026-10-15 |
| `spinner.tsx` | shadcn/ui | [`spinner`](https://ui.shadcn.com/docs/components/spinner) | non | 2026-10-15 |
| `sheet.tsx` | shadcn/ui | [`sheet`](https://ui.shadcn.com/docs/components/sheet) | non | 2026-07-31 |
| `sidebar.tsx` | shadcn/ui | [`sidebar`](https://ui.shadcn.com/docs/components/sidebar) | non | 2026-07-31 |
| `skeleton.tsx` | shadcn/ui | [`skeleton`](https://ui.shadcn.com/docs/components/base/skeleton) (Base UI) | non | 2026-10-15 |
| `tabs.tsx` | shadcn/ui | [`tabs`](https://ui.shadcn.com/docs/components/base/tabs) (Base UI) | non | 2026-10-16 |
| `radio-group.tsx` | shadcn/ui | [`radio-group`](https://ui.shadcn.com/docs/components/base/radio-group) (Base UI) | non | 2026-10-16 |
| `switch.tsx` | shadcn/ui | [`switch`](https://ui.shadcn.com/docs/components/base/switch) (Base UI) | non | 2026-10-16 |
| `tooltip.tsx` | shadcn/ui | [`tooltip`](https://ui.shadcn.com/docs/components/tooltip) (Radix) | non | 2026-07-31 |
| `tooltip-base.tsx` | shadcn/ui | [`tooltip`](https://ui.shadcn.com/docs/components/base/tooltip) (Base UI) | non | 2026-10-16 |
| `../hooks/use-mobile.tsx` | shadcn/ui | `use-mobile` — pas de page propre, [livré avec `sidebar`](https://ui.shadcn.com/docs/components/sidebar) | non | 2026-07-31 |

`components/ui/button.tsx` (shadcn, radix + cva) et `choose-ui/button/index.tsx` sont deux
composants distincts qui coexistent. Seul le second est la lib Choose.

Chaque entrée de `catalog.json` porte un champ `kind`. Toutes valent aujourd'hui
`primitive` : un fichier de la lib pour un fichier amont, tracé dans ce tableau. La valeur
`composition` existe pour les composants assemblés à partir de primitives et sans amont —
le Date picker en fut le seul représentant, retiré depuis. Rien ne la porte actuellement.

`date-selector.tsx` vient du registry reui (`reui.io/r/date-selector.json`), lui aussi sans
passer par la CLI. Il a demandé la même résolution d'`IconPlaceholder` vers Lucide que le
calendar, plus **un écart assumé** : la source vise react-day-picker v9, le projet est en
v10, où `formatMonthCaption` a été renommé `formatCaption`. Sans ce renommage le formateur
est silencieusement ignoré et les en-têtes de mois retombent en anglais — ce que le typage
signalait, et que le rendu confirmait. `formatWeekdayName` a reçu au passage un repli `""`,
v10 n'acceptant plus `string | undefined`.

Downgrader react-day-picker n'était pas une option : `calendar.tsx` s'appuie sur
`getDefaultClassNames`, absent de la v9.

Restent **deux erreurs de typage strict**, laissées telles quelles comme pour `cascader` :
un `||` que TS ne resserre pas et un index de regex garanti par son match. Celles-là sont
bien sans effet au rendu.

Sa surcouche Choose en corrige en revanche quatre **défauts** : l'i18n anglaise, la semaine
au dimanche, le format `MM/dd/yyyy`, et surtout `maxYear` figé à 2026 — sans correctif,
l'année suivante devenait inatteignable dès 2026.

`calendar.tsx` a été écrit depuis `ui.shadcn.com/r/styles/base-nova/calendar.json` plutôt que
par la CLI. Deux retouches ont été nécessaires sur la source du registry : le chemin
`@/registry/base-nova/ui/button` est devenu `@/components/ui/button`, et `IconPlaceholder` —
l'abstraction de build que la CLI résout selon la bibliothèque d'icônes du projet — a été
résolue en Lucide, conformément à la règle du DS.

`tooltip.tsx` et `tooltip-base.tsx` coexistent de la même façon, et pour une raison précise :
`tooltip.tsx` est resté en **radix** parce que `sidebar.tsx` s'appuie sur son API
(`delayDuration`, `asChild`) et sur d'autres primitives radix (dialog, popover, scroll-area).
Basculer ce seul fichier en Base UI casserait la navigation de la sandbox. `tooltip-base.tsx`
est la variante Base UI, et c'est elle — et elle seule — qui sert de socle à
`choose-ui/tooltip`. Les deux APIs ne sont pas interchangeables : `render` d'un côté,
`asChild` de l'autre.

`avatar.tsx` n'est pas distribué par le registry : `npx shadcn add avatar` sert la version
**radix**, pas la variante Base UI. Les endpoints `/r/styles/new-york/avatar.json` et
`/r/styles/new-york-v4/avatar.json` renvoient tous deux du radix, et aucun endpoint `base`
n'existe. Le code a donc été repris depuis la page de doc.

Le fichier avait d'abord été réécrit pour Tailwind 3.4 (`*:` et `group-has-data-*` sont des
variantes v4) ; le passage du projet en v4 a annulé ces réécritures via le codemod officiel.
Il est aujourd'hui conforme à l'upstream.

Les cinq composants ajoutés le 2026-10-15 (breadcrumb, card, button-group, alert-dialog,
attachment) viennent tous de la **variante Base UI**, qui n'est pas distribuée par le registry :
`npx shadcn add <nom>` sert la version radix. Comme pour `avatar`, le code est repris depuis la
page de doc, donc aucune CLI ne les mettra à jour.

`components/ui/button.tsx` est passé de la variante radix à la variante Base UI à cette
occasion : `attachment` et `alert-dialog` s'appuient sur ses tailles `xs` / `icon-xs` / `icon-sm`,
absentes de la version radix. La sidebar, qui le consomme aussi, n'a pas bougé.

Deux manques rencontrés en reprenant ces composants :

- l'utilitaire `shimmer`, utilisé par `attachment` pour les états *uploading* et *processing*,
  n'est pas distribué avec le composant (shadcn le déclare dans son CSS global). Réimplémenté
  dans `src/index.css` sur les tokens Choose.
- les rôles `popover` et `ring` n'existent pas dans la palette Choose, alors qu'`alert-dialog`
  et `attachment` s'appuient dessus. Aliasés provisoirement sur `--card` et `--accent` dans
  `src/index.css` ; à arbitrer côté DA, c'est noté dans `GAPS.md`.

`collapsible.tsx` est le seul fichier de ce dossier qui ne vient pas d'upstream : shadcn ne
publie pas de variante Base UI pour ce composant (son registry sert un ré-export radix de 11
lignes). Comme toute la famille installée est en Base UI, il a été écrit à la main par-dessus
`@base-ui/react/collapsible`, en reprenant la nomenclature shadcn. Il existe pour les panneaux
repliables du Frame. Rien ne le mettra à jour, et il n'a pas de surcouche Choose : s'il devient
un composant à part entière de la lib, il lui en faudra une.

À savoir si on s'en sert ailleurs : le déclencheur n'expose que `aria-expanded`, pas de
`data-panel-open` — c'est sur cet attribut qu'il faut accrocher un état visuel. Et Base UI
démonte le contenu replié, il n'est pas seulement masqué.

## Ajouter une source

`components.json` déclare les deux registries, donc `npx shadcn add <composant>` et
`npx shadcn add @reui/<composant>` fonctionnent tels quels. Après un `add`, ajouter la ligne
ici — rien ne le fait automatiquement.

Dates = date du fichier sur disque, pas de version upstream : ni shadcn/ui ni reui ne versionnent
les composants copiés. Pour comparer, se référer à la date.
