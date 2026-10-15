# Button group

Regroupe des actions de même nature en un bloc continu : les rayons se fusionnent et les
bordures se partagent. Signifie que les actions vont ensemble.

Construit sur le `button-group` de shadcn/ui (variante Base UI).

## Composition

```tsx
<ButtonGroup>
  <Button variant="outline" size="sm">Archiver</Button>
  <ButtonGroupSeparator />
  <Button variant="outline" size="sm">Supprimer</Button>
</ButtonGroup>
```

`orientation="vertical"` empile le bloc. `ButtonGroupText` insère un intitulé non cliquable
(une unité, un préfixe, un contexte).

## Attention au Button utilisé

Le groupe fusionne les rayons de ses enfants via `[data-slot=button-group]` : il attend le
`Button` de `components/ui`, **pas** `choose-ui/button`, qui ne porte pas ces attributs.
C'est la seule exception à la règle « toujours passer par choose-ui ».

## Quand l'utiliser

- Une barre d'outils compacte (format, tri, affichage).
- Un jeu d'actions portant sur la même sélection.

## Quand ne pas l'utiliser

- Pour aligner deux boutons indépendants → un `flex gap-2` suffit.
- Pour plus de cinq actions → un menu.
- Pour opposer une action principale et une secondaire → deux boutons séparés, pas un bloc.

## Règles Choose

- Un seul variant pour tout le groupe. Mélanger `primary` et `outline` casse la lecture du bloc.
- Jamais d'action destructive seule dans un groupe d'icônes : rien ne la distingue avant le clic.
- Chaque bouton icône porte un `aria-label` ; le groupe n'en fournit aucun.

## Règle agent

Ne pas simuler le groupe avec des marges négatives ou des rayons désactivés à la main.
