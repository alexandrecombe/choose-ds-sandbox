# Input

Champ de saisie sur une ligne. La brique des formulaires back-office : recherche, filtres,
édition d'une fiche.

Construit sur l'`input` de shadcn/ui (variante Base UI), qui repose déjà sur les tokens Choose
(`--input`, `--ring`, `--destructive`, `--muted-foreground`).

## Composition

```tsx
<label htmlFor="nom">Nom de la marque</label>
<Input id="nom" placeholder="Maison Lelievre" />
```

## L'erreur passe par `aria-invalid`

```tsx
<Input
  id="email"
  aria-invalid={invalide || undefined}
  aria-describedby={invalide ? "email-erreur" : undefined}
/>
{invalide && <p id="email-erreur">Il manque un « @ » dans l'adresse.</p>}
```

Le style d'erreur est **piloté par l'attribut d'accessibilité**, pas l'inverse : poser
`aria-invalid` colore la bordure et l'anneau de focus. Ne jamais colorer la bordure à la main —
l'apparence et l'information annoncée resteraient désynchronisées.

Le message se relie au champ par `aria-describedby`. Sans ce lien, un lecteur d'écran annonce
un champ invalide sans dire pourquoi.

## Quand ne pas l'utiliser

- Pour une erreur de contexte à l'échelle de l'écran → une **Alert banner**. Une erreur de
  validation d'un champ reste inline, à côté du champ.
- Pour un texte long sur plusieurs lignes → `choose-ui/textarea`.
- Pour un choix dans une liste fermée → un select (pas encore dans la lib).

## Règles Choose

- Chaque champ a un label visible, relié par `htmlFor` / `id`. Le `placeholder` donne un
  exemple de saisie : il disparaît dès la frappe et ne peut pas tenir lieu de label.
- Renseigner le `type` natif : il conditionne le clavier mobile et la validation du navigateur.
  Pour une recherche, `type="search"` plutôt que `text`.
- Un champ désactivé doit rester compréhensible : si la raison n'est pas évidente à l'écran,
  l'expliquer à côté.

## Règle agent

Ne jamais fabriquer un `<input>` stylé à la main. Si un champ ne peut pas porter de label
visible, lui donner au minimum un `aria-label` — un champ sans nom est muet pour un lecteur
d'écran, et le `placeholder` ne compte pas comme nom.
