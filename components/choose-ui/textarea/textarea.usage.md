# Textarea

Champ de saisie sur **plusieurs lignes** : un motif de retour, une note interne, un message
au client. La contrepartie de l'Input quand le texte attendu ne tient pas sur une ligne.

Construit sur le `textarea` de shadcn/ui (variante Base UI) — un `<textarea>` natif, sans
primitive — qui repose déjà sur les tokens Choose (`--input`, `--ring`, `--destructive`,
`--muted-foreground`).

## Composition

```tsx
<label htmlFor="motif">Motif du retour</label>
<Textarea id="motif" placeholder="Décrivez le problème rencontré" />
```

## Il grandit tout seul

Le champ porte `field-sizing-content` : sa hauteur suit le texte saisi, à partir d'un
`min-h-16`. Ne pas poser de `rows` — l'attribut est ignoré par ce dimensionnement et laisse
croire à une hauteur fixe. Pour imposer un plancher ou un plafond, utiliser `min-h-*` /
`max-h-*`.

## L'erreur passe par `aria-invalid`

```tsx
<Textarea
  id="motif"
  aria-invalid={invalide || undefined}
  aria-describedby={invalide ? "motif-erreur" : undefined}
/>
{invalide && <p id="motif-erreur">Indiquez le motif du retour.</p>}
```

Comme pour l'Input, l'apparence est **pilotée par l'attribut d'accessibilité**, jamais
l'inverse. Ne pas colorer la bordure à la main : l'affichage et ce qui est annoncé
resteraient désynchronisés.

## Quand ne pas l'utiliser

- Pour une saisie sur une ligne → **Input**. Un textarea d'une ligne invite à écrire long.
- Pour du texte mis en forme (gras, listes, liens) → un éditeur riche, qui n'est pas dans
  la lib. Un textarea ne produit que du texte brut.
- Pour un choix dans une liste → **Select** ou **Combobox**.

## Taille de texte

Le champ est en `text-base` sous `md` et `text-sm` au-delà. Ce n'est pas une coquette
upstream : en dessous de 16px, iOS zoome automatiquement à la mise au point du champ. Ne pas
forcer `text-sm` sur toutes les tailles.

## Règles Choose

- Typo : `font-sans` (Maison Neue), imposée par la surcouche.
- Chaque champ a un label visible, relié par `htmlFor` / `id`. Le `placeholder` donne un
  exemple de saisie et ne peut pas tenir lieu de label — il disparaît dès la frappe.
- Annoncer la limite **avant** la frappe si elle existe (« 500 caractères maximum »), plutôt
  que de laisser l'utilisateur buter dessus.
- Un champ désactivé doit rester compréhensible : si la raison n'est pas évidente à l'écran,
  l'expliquer à côté.

## Règle agent

Ne jamais fabriquer un `<textarea>` stylé à la main. Importer `choose-ui/textarea`. Si le
champ ne peut pas porter de label visible, lui donner au minimum un `aria-label` — un champ
sans nom est muet pour un lecteur d'écran, et le `placeholder` ne compte pas comme nom.
