# Checkbox — règles d'usage

## Quand l'utiliser

- Pour un consentement ou un opt-in (accepter des conditions, activer une option).
- Pour une sélection multiple dans une liste (canaux de notification, permissions).
- Pour cocher/décocher un élément dans une table.

## Quand ne pas l'utiliser

- Pour un choix exclusif (une seule option parmi N) → utiliser un radio group.
- Pour un réglage on/off appliqué immédiatement → utiliser un Switch.
- Pour une sélection dans un menu déroulant → utiliser un Select.

## Bonnes pratiques

- Toujours associer un `<label>` au checkbox (via `htmlFor` ou en wrappant).
- Donner un `name` à chaque checkbox dans un formulaire pour que la valeur soit soumise.
- Utiliser l'état `indeterminate` pour signaler une sélection partielle (ex. : « tout
  cocher » quand seules certaines lignes sont cochées).
- Le label doit être affirmatif : « Recevoir les notifications » plutôt que « Ne pas
  recevoir les notifications ».
- Grouper les checkboxes apparentés avec un `fieldset` + `legend` accessible.
