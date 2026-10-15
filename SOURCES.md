# Sources

Origine des composants copiés dans ce repo. Tout est du code copié : aucune dépendance npm
vers shadcn/ui ou reui, donc aucune mise à jour automatique. Ce tableau sert à savoir, plus
tard, si une version upstream vaut d'être reprise.

Colonne « restylé » : `oui` = divergé des tokens Choose, une reprise upstream demande une
refonte manuelle. `non` = copie conforme, une reprise upstream est un simple remplacement.

Chaque fichier copié porte le même lien dans un commentaire d'en-tête : la trace reste avec le
fichier s'il est déplacé, ce tableau sert à balayer toute la lib d'un coup.

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
| `alert.tsx` | reui | [`alert`](https://reui.io/docs/components/base/alert) | non — adapté Tailwind v3 | 2026-10-15 |

Une seule adaptation : la largeur de colonne de l'icône, écrite `calc(var(--spacing)*3)`, est un
token **Tailwind v4**. Le projet tourne en Tailwind 3.4, où `var(--spacing)` n'existe pas — la
colonne était calculée à ~353px et le titre se retrouvait centré. Remplacée par `1.25rem`.
À vérifier en premier si d'autres composants reui sont repris : ils visent Tailwind v4.

## Copies shadcn brutes — `components/ui/`

Hors lib Choose, à ne pas consommer directement dans un prototype. Deux rôles : la plupart
font tourner la sandbox elle-même (la sidebar de navigation) ; `avatar.tsx` sert de socle à la
surcouche `choose-ui/avatar`. Style `new-york`, non restylées.

| Fichier | Origine | Composant d'origine | Restylé | Ajouté |
|---|---|---|---|---|
| `avatar.tsx` | shadcn/ui | [`avatar`](https://ui.shadcn.com/docs/components/base/avatar) (Base UI) | non — adapté Tailwind v3 | 2026-10-15 |
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

Deux adaptations Tailwind v3 : `*:data-[slot=avatar]:ring-2` et `group-has-data-[size=…]` sont
des variantes **v4**, réécrites en `[&>[data-slot=avatar]]:…` et `group-has-[[data-size=…]]:…`.
Vérifié à l'écran : tailles 24/32/40px, compteur de groupe aligné sur la taille, anneau de 2px.

## Ajouter une source

`components.json` déclare les deux registries, donc `npx shadcn add <composant>` et
`npx shadcn add @reui/<composant>` fonctionnent tels quels. Après un `add`, ajouter la ligne
ici — rien ne le fait automatiquement.

Dates = date du fichier sur disque, pas de version upstream : ni shadcn/ui ni reui ne versionnent
les composants copiés. Pour comparer, se référer à la date.
