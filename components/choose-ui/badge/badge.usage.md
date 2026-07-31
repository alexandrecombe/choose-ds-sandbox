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

- `neutral` — catégorie ou statut sans charge émotionnelle (type, rôle).
- `success` — état positif ou validé (Actif, Payé).
- `warning` — état à surveiller (En attente, Expire bientôt).
- `destructive` — état problématique (Expiré, Rejeté, Bloqué).

Un statut correspond à un seul variant. Ne pas empiler badge + icône + couleur redondants.

## Règles Choose

- Typo : `font-sans`, taille de label réduite.
- Couleur : tokens sémantiques de statut uniquement. La couleur porte le sens — ne jamais mapper un statut sur une couleur arbitraire.
- Pas d'icône par défaut. Icône Lucide seulement si elle ajoute de l'information, jamais décorative.

## Règle agent

Ne jamais fabriquer une étiquette custom (`<span>` stylé) pour un statut.
Importer `choose-ui/badge` et choisir le variant selon la sémantique du statut, pas selon la couleur voulue.
