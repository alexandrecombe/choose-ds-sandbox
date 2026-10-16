# Tooltip

Étiquette courte au survol ou au focus, qui **nomme** un élément dont le sens n'est pas
évident — presque toujours un bouton à icône seule.

Construit sur le `tooltip` de shadcn/ui (variante Base UI). Il repose sur
`components/ui/tooltip-base.tsx`, et non sur `tooltip.tsx` resté en Radix pour la sidebar
de la sandbox : les deux APIs ne sont pas interchangeables.

## Composition

```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger render={<Button iconOnly aria-label="Copier l'URL"><Copy /></Button>} />
    <TooltipContent>Copier l'URL de l'opération</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

`TooltipProvider` se pose **une fois**, haut dans l'arbre : il partage le délai d'ouverture
entre tous les tooltips, pour qu'en parcourant une barre d'outils le deuxième survol ouvre
sans attendre. Un provider par tooltip annule cet effet.

## Base UI : `render`, pas `asChild`

Le déclencheur prend un `render` qui reçoit l'élément à rendre. C'est l'écart le plus visible
avec la variante Radix qu'on trouve encore dans `components/ui/tooltip.tsx` :

```tsx
// Base UI — ici
<TooltipTrigger render={<Button … />} />

// Radix — sidebar de la sandbox uniquement
<TooltipTrigger asChild><Button … /></TooltipTrigger>
```

## Le tooltip ne remplace pas le nom accessible

Un bouton à icône seule garde son `aria-label` : le tooltip est une aide visuelle, pas la
source du nom. Les deux disent la même chose. Sans le label, le bouton reste muet pour un
lecteur d'écran et pour tout utilisateur qui n'a pas de survol.

## Quand ne pas l'utiliser

- Pour une information **nécessaire** à l'action → l'écrire à l'écran. Un tooltip est
  invisible au tactile et au premier coup d'œil.
- Pour un contenu riche — profil, aperçu de lien, plusieurs lignes → **Hover card**.
- Pour des actions → **Dropdown menu**.
- Pour un message système persistant → **Alert banner**.

## Frontière avec Hover card

Le Tooltip **nomme**, la Hover card **montre**. Si le contenu tient en quelques mots et ne
contient ni lien ni action, c'est un Tooltip ; s'il a une mise en page, c'est une Hover card.
Un tooltip dans lequel on voudrait cliquer est une Hover card mal choisie — la bulle se ferme
dès que le pointeur la quitte.

## Placement

`side` (`top` par défaut) et `align` positionnent la bulle ; `sideOffset` règle l'écart. Dans
une barre d'outils en haut d'écran, passer `side="bottom"` pour que la bulle ne sorte pas de
la fenêtre.

## Règles Choose

- Typo : `font-sans`, imposée par la surcouche sur la bulle.
- Couleur : fond `--foreground`, texte `--background` — l'inverse du corps de page, pour que
  la bulle se détache sans ombre portée. Aucune couleur sémantique : un tooltip n'alerte pas.
- Texte court, sans ponctuation finale. Un tooltip de deux phrases est un texte à écrire
  dans la page.

## Règle agent

Ne jamais fabriquer une bulle au survol à la main (`title=` natif compris : son délai et son
apparence échappent au DS). Importer `choose-ui/tooltip`, et garder l'`aria-label` du bouton.
