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
| `button/index.tsx` | à confirmer | à confirmer | oui | 2026-07-30 |
| `alert-banner/index.tsx` | à confirmer | à confirmer | oui | 2026-09-15 |

`badge` importe `@base-ui/react` (`mergeProps`, `useRender`), signature de reui — le badge
shadcn repose sur `@radix-ui/react-slot`.

`button` et `alert-banner` sont du React sans cva ni radix ni base-ui, avec des types et une
table de variants écrits à la main. Ils ne ressemblent à aucune copie directe : probablement
écrits de zéro. L'historique git ne tranche pas (ajoutés dans le commit initial). **À confirmer
et corriger à la main** — ne pas supposer une origine upstream sur ces deux lignes.

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
