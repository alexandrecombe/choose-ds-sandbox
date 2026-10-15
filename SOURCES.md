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

## Lib Choose — `components/choose-ui/`

| Fichier | Origine | Composant d'origine | Restylé | Ajouté |
|---|---|---|---|---|
| `badge/index.tsx` | reui | [`badge`](https://reui.io/docs/badge) (Base UI) | oui | 2026-09-15 |
| `button/index.tsx` | shadcn/ui | [`button`](https://ui.shadcn.com/docs/components/base/button) | oui | 2026-07-30 |
| `avatar/index.tsx` | shadcn/ui | [`avatar`](https://ui.shadcn.com/docs/components/base/avatar) (Base UI) | oui — typo seule | 2026-10-15 |
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
| `alert.tsx` | reui | [`alert`](https://reui.io/docs/components/base/alert) | non — un écart assumé | 2026-10-15 |

Un seul écart : la colonne de l'icône vaut `1.25rem` au lieu du `calc(var(--spacing)*3)` upstream
(12px). La surcouche Choose force des icônes de 20px là où reui en attend de 16px ; au format
upstream, l'icône déborderait de sa colonne. À revoir si la taille d'icône Choose change.

## Copies shadcn brutes — `components/ui/`

Hors lib Choose, à ne pas consommer directement dans un prototype. Deux rôles : la plupart
font tourner la sandbox elle-même (la sidebar de navigation) ; `avatar.tsx` sert de socle à la
surcouche `choose-ui/avatar`. Style `new-york`, non restylées.

| Fichier | Origine | Composant d'origine | Restylé | Ajouté |
|---|---|---|---|---|
| `avatar.tsx` | shadcn/ui | [`avatar`](https://ui.shadcn.com/docs/components/base/avatar) (Base UI) | non | 2026-10-15 |
| `button.tsx` | shadcn/ui | [`button`](https://ui.shadcn.com/docs/components/button) | non | 2026-07-31 |
| `input.tsx` | shadcn/ui | [`input`](https://ui.shadcn.com/docs/components/input) | non | 2026-07-31 |
| `separator.tsx` | shadcn/ui | [`separator`](https://ui.shadcn.com/docs/components/separator) | non | 2026-07-31 |
| `sheet.tsx` | shadcn/ui | [`sheet`](https://ui.shadcn.com/docs/components/sheet) | non | 2026-07-31 |
| `sidebar.tsx` | shadcn/ui | [`sidebar`](https://ui.shadcn.com/docs/components/sidebar) | non | 2026-07-31 |
| `skeleton.tsx` | shadcn/ui | [`skeleton`](https://ui.shadcn.com/docs/components/skeleton) | non | 2026-07-31 |
| `tooltip.tsx` | shadcn/ui | [`tooltip`](https://ui.shadcn.com/docs/components/tooltip) | non | 2026-07-31 |
| `../hooks/use-mobile.tsx` | shadcn/ui | `use-mobile` — pas de page propre, [livré avec `sidebar`](https://ui.shadcn.com/docs/components/sidebar) | non | 2026-07-31 |

`components/ui/button.tsx` (shadcn, radix + cva) et `choose-ui/button/index.tsx` sont deux
composants distincts qui coexistent. Seul le second est la lib Choose.

`avatar.tsx` n'est pas distribué par le registry : `npx shadcn add avatar` sert la version
**radix**, pas la variante Base UI. Les endpoints `/r/styles/new-york/avatar.json` et
`/r/styles/new-york-v4/avatar.json` renvoient tous deux du radix, et aucun endpoint `base`
n'existe. Le code a donc été repris depuis la page de doc.

Le fichier avait d'abord été réécrit pour Tailwind 3.4 (`*:` et `group-has-data-*` sont des
variantes v4) ; le passage du projet en v4 a annulé ces réécritures via le codemod officiel.
Il est aujourd'hui conforme à l'upstream.

## Ajouter une source

`components.json` déclare les deux registries, donc `npx shadcn add <composant>` et
`npx shadcn add @reui/<composant>` fonctionnent tels quels. Après un `add`, ajouter la ligne
ici — rien ne le fait automatiquement.

Dates = date du fichier sur disque, pas de version upstream : ni shadcn/ui ni reui ne versionnent
les composants copiés. Pour comparer, se référer à la date.
