# Sources

Origine des composants copiés dans ce repo. Tout est du code copié : aucune dépendance npm
vers shadcn/ui ou reui, donc aucune mise à jour automatique. Ce tableau sert à savoir, plus
tard, si une version upstream vaut d'être reprise.

Colonne « restylé » : `oui` = divergé des tokens Choose, une reprise upstream demande une
refonte manuelle. `non` = copie conforme, une reprise upstream est un simple remplacement.

## Lib Choose — `components/choose-ui/`

| Fichier | Origine | Composant d'origine | Restylé | Ajouté |
|---|---|---|---|---|
| `badge/index.tsx` | reui | `badge` (base-ui) | oui | 2026-09-15 |
| `button/index.tsx` | shadcn/ui | `button` | oui | 2026-07-30 |
| `alert-banner/index.tsx` | à confirmer | à confirmer | oui | 2026-09-15 |

`badge` importe `@base-ui/react` (`mergeProps`, `useRender`), signature de reui — le badge
shadcn repose sur `@radix-ui/react-slot`.

`button` vient de shadcn/ui (confirmé à la main), mais il a entièrement divergé : plus de cva
ni de `@radix-ui/react-slot`, types et table de variants réécrits, et un jeu de variants
remanié : `default`, `outline` et `link` ont disparu au profit de `primary` ; restent
`secondary`, `ghost` et `destructive`.
Une reprise upstream serait une réécriture, pas un remplacement. À ne pas confondre avec
`components/ui/button.tsx`, qui est la copie shadcn restée conforme.

`alert-banner` est du React sans cva ni radix ni base-ui, écrit à la main, et ne correspond à
aucun composant upstream du même nom (shadcn et reui exposent `alert`). **Origine toujours à
confirmer** — ne pas supposer de source upstream sur cette ligne.

## Copies shadcn brutes — `components/ui/`

Hors lib Choose : tirées pour faire tourner la sandbox elle-même (la sidebar de navigation),
pas pour être consommées dans un prototype. Style `new-york`, non restylées.

| Fichier | Origine | Composant d'origine | Restylé | Ajouté |
|---|---|---|---|---|
| `button.tsx` | shadcn/ui | `button` | non | 2026-07-31 |
| `input.tsx` | shadcn/ui | `input` | non | 2026-07-31 |
| `separator.tsx` | shadcn/ui | `separator` | non | 2026-07-31 |
| `sheet.tsx` | shadcn/ui | `sheet` | non | 2026-07-31 |
| `sidebar.tsx` | shadcn/ui | `sidebar` | non | 2026-07-31 |
| `skeleton.tsx` | shadcn/ui | `skeleton` | non | 2026-07-31 |
| `tooltip.tsx` | shadcn/ui | `tooltip` | non | 2026-07-31 |
| `../hooks/use-mobile.tsx` | shadcn/ui | `use-mobile` (livré avec `sidebar`) | non | 2026-07-31 |

`components/ui/button.tsx` (shadcn, radix + cva) et `choose-ui/button/index.tsx` sont deux
composants distincts qui coexistent. Seul le second est la lib Choose.

## Ajouter une source

`components.json` déclare les deux registries, donc `npx shadcn add <composant>` et
`npx shadcn add @reui/<composant>` fonctionnent tels quels. Après un `add`, ajouter la ligne
ici — rien ne le fait automatiquement.

Dates = date du fichier sur disque, pas de version upstream : ni shadcn/ui ni reui ne versionnent
les composants copiés. Pour comparer, se référer à la date.
