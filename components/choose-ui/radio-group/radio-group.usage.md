# Radio group

Choix **exclusif** entre deux et cinq options toutes visibles. Une seule valeur sort du groupe.

Construit sur le `radio-group` de shadcn/ui (variante Base UI), qui repose déjà sur les tokens
Choose (`--input`, `--primary`, `--ring`, `--destructive`).

## Composition

```tsx
<RadioGroup defaultValue="system">
  <label htmlFor="theme-light">
    <RadioGroupItem id="theme-light" value="light" />
    Clair
  </label>
  <label htmlFor="theme-dark">
    <RadioGroupItem id="theme-dark" value="dark" />
    Sombre
  </label>
</RadioGroup>
```

Chaque `RadioGroupItem` porte sa `value` ; le groupe porte `defaultValue` ou
`value` + `onValueChange`. Un item sans libellé relié est muet pour un lecteur d'écran.

## Quand l'utiliser

- Un réglage à 2-5 options qu'on veut comparer d'un coup d'œil (thème, fréquence d'envoi,
  mode de livraison).
- Un choix qui doit rester visible pendant qu'on remplit le reste du formulaire.

## Quand ne pas l'utiliser

- Au-delà de 5 options → **Select**. Un groupe long cesse d'être scannable et mange la page.
- Pour une recherche avec saisie → **Combobox**.
- Pour une sélection multiple → **Checkbox**, un par option.
- Pour un réglage on/off appliqué immédiatement → un Switch (pas encore dans la lib).

## Frontière avec Select

C'est la contrepartie de la règle de `select.usage.md` : en dessous de 4 options, le Select
cache le choix derrière un clic et le radio group est plus rapide à scanner. Au-delà, le
rapport s'inverse. Entre les deux, trancher sur la place disponible, pas sur le goût.

## L'erreur passe par `aria-invalid`

Comme pour l'Input, l'état d'erreur se pose sur l'attribut d'accessibilité, jamais sur la
couleur de bordure à la main. Poser `aria-invalid` sur le groupe colore les items et
l'anneau de focus ; le message se relie par `aria-describedby`.

## Règles Choose

- Typo : `font-sans` (Maison Neue), imposée par la surcouche sur la racine.
- Couleur : l'item coché prend `--primary` ; aucune couleur décorative par option.
- Une option par défaut est toujours sélectionnée. Un groupe vide au chargement oblige
  l'utilisateur à deviner ce qui est actif.
- Libellés affirmatifs et de même nature — ne pas mélanger « Clair » et « Ne pas forcer ».

## Règle agent

Ne jamais fabriquer un rond sélectionnable à la main ni détourner un Select pour trois
options. Importer `choose-ui/radio-group`.
