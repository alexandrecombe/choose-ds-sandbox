# Alert banner

Message système persistant, affiché en place dans le flux de la page. Non éphémère.

## Quand l'utiliser

- Communiquer un état persistant lié à la page ou à une section (accès restreint, données obsolètes, mode dégradé).
- Signaler une erreur de contexte qui ne disparaît pas seule et demande une lecture ou une action.
- Introduire une contrainte durable en tête d'un formulaire ou d'une section.

## Quand ne pas l'utiliser

- Pour un retour éphémère après une micro-action (Copié, Enregistré) → utiliser un **toast**.
- Pour une erreur de validation attachée à un champ → utiliser le message d'erreur **inline** du champ, pas un banner.
- Pour une action destructive à confirmer → utiliser un **dialog de confirmation**.
- Pour un simple statut sur un élément de liste → utiliser un **Badge**.

## Frontière avec les composants voisins

- Éphémère, confirme une micro-action, disparaît seul → **toast**.
- Attaché à un champ, lié à la validation → **erreur inline**.
- Persistant, contextuel à la page ou la section, doit rester visible au retour sur l'écran → **Alert banner** (ce composant). Vaut aussi pour un succès durable, pas seulement pour info/warning/erreur.

## Anatomie

- Titre obligatoire (une ligne, `font-sans`).
- Texte de support optionnel sous le titre, sur un token de texte atténué.
- Icône ou marqueur visuel en tête, aligné sur le titre.

## Variants

- `info` — information contextuelle neutre.
- `success` — confirmation d'un état durable que l'utilisateur doit pouvoir retrouver en revenant sur l'écran (facturation réglée, opération payée). À distinguer du toast, qui confirme une micro-action et disparaît.
- `warning` — condition à surveiller sans blocage immédiat.
- `destructive` — erreur ou blocage nécessitant une action.

## Règles Choose

- Typo : `font-sans` pour le titre comme pour le support.
- Couleur : tokens sémantiques de feedback uniquement (fond, bordure, texte). Le token porte le sens du variant.
- Marqueur en tête : icône Lucide du variant, 20px, alignée sur la première ligne du titre. Jamais d'emoji, y compris sur `success` — la chaleur du message passe par le copywriting, pas par le pictogramme.
- Un banner porte au plus une action ; au-delà, repenser le placement.

## Règle agent

Avant de générer un feedback utilisateur, choisir le bon composant selon la frontière ci-dessus :
toast (éphémère), erreur inline (champ), Alert banner (persistant contextuel).
Ne jamais fabriquer un bloc de message custom. Importer `choose-ui/alert-banner` quand le cas correspond.
