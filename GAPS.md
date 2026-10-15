# Gaps

Besoins de composants rencontrés pendant le prototypage et non couverts par `components/choose-ui/`.

Format : nom du besoin + d'où il vient. Rien d'autre — pas de priorité, pas d'assignation.
Quand un besoin est couvert, retirer la ligne et ajouter le composant à `catalog.json`.

---

**Lien / bouton de retour discret**
`pages/operation-detail.tsx` fabrique un `<button>` à la main pour « Retour aux opérations ».
`button.usage.md` renvoie vers « un lien stylé » pour la navigation pure, mais aucun composant
de lien n'existe dans la lib.

**Toast**
`alert-banner.usage.md` et `CLAUDE.md` renvoient tous les deux vers un toast pour le feedback
éphémère (Copié, Enregistré). Le composant n'existe pas.

**Message d'erreur inline + champ de formulaire**
`alert-banner.usage.md` renvoie vers « le message d'erreur inline du champ » pour la validation.
Il n'existe ni composant de champ Choose ni composant d'erreur inline ; seul
`components/ui/input.tsx` (shadcn brut, non restylé) est présent.

**Switch**
`button.usage.md` renvoie vers un Switch pour un choix binaire persistant (on/off).
Le composant n'existe pas.
