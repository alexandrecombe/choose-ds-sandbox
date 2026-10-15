# Badge

Affiche un statut ou une catégorie sous forme d'étiquette courte, non interactive.

## Quand l'utiliser

- Signaler un statut (Actif, En attente, Expiré, Brouillon).
- Catégoriser un élément dans une liste ou une table (type d'offre, rôle).
- Afficher un compteur court associé à un élément.

## Quand ne pas l'utiliser

- Pour une action → un Badge n'est pas cliquable. Utiliser un Button ou un lien.
- Pour un texte long → le Badge est une étiquette, pas un conteneur de phrase.
- Pour attirer l'attention sur un message système → utiliser un Alert banner.

## Variants

Statuts sémantiques — la couleur porte le sens :

- `success` — vert — état positif ou validé (Actif, Payé).
- `warning` — orange — état à surveiller (En attente, Expire bientôt).
- `destructive` — rouge — état problématique / urgent (Expiré, Rejeté, Bloqué).
- `progress` — bleu — traitement en cours, avancement d'une opération.
- `info` — gris — information neutre, sans notion de réussite ni d'échec.

Le bleu appartient à `progress`. `info` est neutre : ne pas l'utiliser pour signaler
un traitement en cours.

Étiquettes non sémantiques — catégories, types, rôles :

- `default` — aplat principal, fort contraste.
- `secondary` — catégorie ou statut sans charge émotionnelle.
- `outline` — étiquette discrète, bordure seule.
- `primary-light` — aplat teinté discret, mise en avant légère.
- `primary-outline` — fond de page, bordure neutre.

Un statut correspond à un seul variant. Ne pas empiler badge + icône + couleur redondants.

## Tailles et rayon

- `size` : `xs` | `sm` | `default` | `lg` | `xl`. `default` couvre la quasi-totalité des cas ;
  les autres servent les contextes denses (tables) ou les en-têtes.
- `radius` : `default` (rayon Choose) | `full`. `full` est réservé aux compteurs.

## Icônes

Il n'y a pas de prop `icon`. Une icône Lucide se passe en enfant, avant le texte ; elle est
dimensionnée à 12px automatiquement.

```tsx
<Badge variant="success">
  <CircleCheck />
  Actif
</Badge>
```

## Règles Choose

- Typo : `font-sans`, taille de label réduite.
- Couleur : tokens sémantiques de statut uniquement. La couleur porte le sens — ne jamais mapper un statut sur une couleur arbitraire.
- Pas d'icône par défaut. Icône Lucide seulement si elle ajoute de l'information, jamais décorative.

## Règle agent

Ne jamais fabriquer une étiquette custom (`<span>` stylé) pour un statut.
Importer `choose-ui/badge` et choisir le variant selon la sémantique du statut, pas selon la couleur voulue.
