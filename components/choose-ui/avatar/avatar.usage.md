# Avatar

Représente une personne ou un compte. Jamais une marque, un produit ni un objet métier.

Construit sur l'`avatar` de shadcn/ui (variante Base UI). Le composant upstream repose déjà
sur les tokens Choose ; la surcouche n'impose que `font-sans`.

## Composition

```tsx
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/choose-ui/avatar";

<Avatar size="lg">
  <AvatarImage src={user.photo} alt={user.name} />
  <AvatarFallback>AC</AvatarFallback>
</Avatar>
```

`AvatarFallback` est obligatoire, même quand une image est fournie : il s'affiche pendant le
chargement et reste si l'image échoue. Un avatar sans fallback est un trou visuel.

## Quand l'utiliser

- Identifier l'auteur d'une action (journal, commentaire, historique d'opération).
- Afficher le compte connecté dans un en-tête ou un menu.
- Montrer les personnes rattachées à un élément (assignés, participants).

## Quand ne pas l'utiliser

- Pour un logo de marque ou de partenaire → une image, pas un Avatar.
- Pour un statut lisible (Actif, En attente) → un Badge à côté du nom. `AvatarBadge` ne porte
  qu'une présence ou un état binaire, sans texte.
- Pour une icône d'objet métier (offre, facture) → une icône Lucide, pas un cercle de portrait.

## Tailles

- `sm` — 24px. Tables denses, listes compactes.
- `default` — 32px. Cas courant.
- `lg` — 40px. En-têtes, fiches de profil.

## Fallback

Initiales, deux lettres maximum, majuscules. Jamais un nom complet ni un emoji. Si le nom est
inconnu, utiliser une icône Lucide `User` plutôt que des initiales inventées.

## Groupe

`AvatarGroup` empile les avatars avec un anneau de séparation ; `AvatarGroupCount` affiche le
reste (`+3`). Les trois tailles sont suivies automatiquement par le compteur.

Au-delà de 4 visages, le groupe n'est plus lisible : préférer une liste nommée.

## Règles Choose

- Typo : `font-sans` sur le fallback et le compteur.
- Couleur : fond `--muted`, texte `--muted-foreground`, anneau `--background`. Aucune couleur
  décorative par personne — l'avatar n'encode pas d'information par sa teinte.
- `AvatarBadge` prend un token sémantique explicite (`--success` pour en ligne, par exemple).
  Il n'a pas de couleur par défaut porteuse de sens.
- Forme : toujours ronde. Pas de variante carrée.

## Règle agent

Ne jamais fabriquer un rond avec des initiales à la main (`<div class="rounded-full">`).
Importer `choose-ui/avatar` et toujours fournir un `AvatarFallback`.
