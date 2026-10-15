# Button

Déclenche une action. Élément interactif principal d'une interface backoffice.

## Quand l'utiliser

- Déclencher une action (soumettre, enregistrer, ouvrir un dialog, lancer un traitement).
- Naviguer uniquement si l'action a un poids d'action (ex. « Créer une offre »). Pour une navigation pure, utiliser un lien.

## Quand ne pas l'utiliser

- Pour naviguer entre pages sans effet de bord → utiliser un lien stylé, pas un Button.
- Pour un choix binaire persistant (on/off) → utiliser un Switch.
- Pour une action destructive sans confirmation → passer par un dialog de confirmation, ne pas exposer l'action directement.

## Variants

- `primary` — action principale d'un écran ou d'un formulaire. **Une seule par zone.**
- `secondary` — actions de support à côté de la primaire (Annuler, Retour).
- `ghost` — actions tertiaires, barres d'outils, actions répétées en ligne (dans une table).
  Porté par la couleur **tertiary** Choose : texte `--tertiary`, et `--tertiary-accent`
  en fond au survol. C'est le seul variant qui colore son texte sans aplat.
- `destructive` — suppression ou action irréversible. Toujours accompagnée d'une confirmation.

## Règles Choose

- Typo : `font-sans` (Maison Neue), graisse **semibold** sur tous les variants. Jamais `font-display`.
- Couleurs et fonds : tokens sémantiques uniquement. Jamais de couleur Tailwind brute ni de hex.
- Icône : Lucide uniquement, taille alignée sur le `font-size` du label (16px pour un bouton standard).
- Un bouton ne porte jamais deux icônes.

## Règle agent

Ne jamais fabriquer un `<button>` custom ni styliser un élément avec des classes Tailwind ad hoc.
Importer et utiliser `choose-ui/button`. Si un besoin n'est pas couvert par un variant existant,
signaler le manque — ne pas créer une variante locale.
