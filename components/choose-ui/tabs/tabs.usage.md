# Tabs — règles d'usage

## Quand l'utiliser

- Contenu parallèle sur une même page : réglages, sections d'un formulaire, vues d'un même objet.
- Alternance fréquente entre panneaux sans changement de page.

## Quand ne pas l'utiliser

- Pour une navigation entre pages différentes : utiliser un **Breadcrumb** ou une sidebar.
- Pour un choix exclusif dans un formulaire : utiliser un **Select** ou des radios.
- Pour des sections dépliables : utiliser un accordéon.

## Variants

- `default` — fond muted avec onglet actif surélevé. Pour les formulaires et réglages.
- `line` — trait sous l'onglet actif, sans fond. Pour les vues de contenu (aperçu/code, onglets de dashboard).

## Bonnes pratiques

- Garder les labels courts (1-2 mots) et cohérents en longueur.
- Ne pas dépasser 5-6 onglets ; au-delà, envisager une navigation latérale.
- Placer le contenu le plus fréquent dans le premier onglet.
- Le contenu inactif n'est pas rendu : les valeurs de formulaire saisies sont perdues au changement d'onglet (contrôler l'état si besoin).
