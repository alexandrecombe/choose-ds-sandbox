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

**Message d'erreur inline**
`alert-banner.usage.md` renvoie vers « le message d'erreur inline du champ » pour la validation.
Le champ existe désormais (`choose-ui/input`, dont l'erreur se pilote par `aria-invalid`), mais
le message lui-même reste à écrire à la main à chaque fois : pas de composant qui relie le
texte au champ par `aria-describedby`. Un `Field` (label + champ + message) couvrirait les deux.
