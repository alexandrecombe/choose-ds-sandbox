# Gaps

Besoins de composants rencontrés pendant le prototypage et non couverts par `components/choose-ui/`.

Format : nom du besoin + d'où il vient. Rien d'autre — pas de priorité, pas d'assignation.
Quand un besoin est couvert, retirer la ligne et ajouter le composant à `catalog.json`.

---

**Champ de date dans un formulaire**
`choose-ui/date-picker` couvrait ce besoin — un bouton ouvrant un calendrier en popover, qui
rendait une `Date` — puis a été retiré. `calendar.usage.md` et `date-selector.usage.md`
renvoient tous deux ici. Le Date selector ne le remplace pas : il rend un `DateSelectorValue`,
une condition et non une date, et reui le déconseille lui-même pour un jour unique sans
opérateurs. Le code reste dans l'historique git, au commit f9988b3.

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

**Badge tertiaire (tags de sujets)**
`src/canvas/contact-card` : le Figma de la card contact (Supplier V3) pose les sujets sur fond
`--tertiary-accent` et texte `--tertiary`. Aucun variant de `choose-ui/badge` ne porte ce
couple ; le canvas utilise `secondary` (gris) en attendant.

**Avatar 48 px**
`src/canvas/contact-card` : la card contact du Figma utilise un avatar de 48 px. `choose-ui/avatar`
s'arrête à `lg` (40 px) ; le canvas force la taille par classe locale.

**Bouton outline**
`src/canvas/contact-card` : le bouton copier du Figma est un bouton icône `outline` (fond de page,
bordure). `choose-ui/button` n'a que `secondary` (fond gris + bordure), utilisé à la place.
