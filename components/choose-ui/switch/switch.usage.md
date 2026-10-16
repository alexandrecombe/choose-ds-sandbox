# Switch

Réglage **on/off appliqué immédiatement**. Basculer le switch, c'est déjà avoir changé l'état —
il n'y a pas de bouton « Enregistrer » derrière.

Construit sur le `switch` de shadcn/ui (variante Base UI), qui repose déjà sur les tokens
Choose (`--primary`, `--input`, `--background`, `--ring`, `--destructive`).

## Composition

```tsx
<div className="flex items-center gap-2">
  <Switch id="notifs" checked={actif} onCheckedChange={setActif} />
  <label htmlFor="notifs" className="text-sm font-sans">
    Notifications par e-mail
  </label>
</div>
```

Le switch n'a pas de texte : le label se relie par `htmlFor` / `id` et porte la typo.

## Contrôlé par défaut

Un switch non contrôlé n'a presque jamais de sens : si rien ne lit le changement, le réglage
n'est pas appliqué et l'utilisateur croit avoir agi. Utiliser `checked` + `onCheckedChange`,
et ne garder `defaultChecked` que pour une démonstration.

Dans un formulaire soumis nativement, lui donner un `name` — sans quoi sa valeur ne part pas.

## Quand l'utiliser

- Un réglage qui s'applique sur-le-champ (activer les notifications, mode maintenance).
- Une préférence dans un panneau de réglages, une par ligne avec son label à gauche.

## Quand ne pas l'utiliser

- Pour un consentement envoyé **avec** un formulaire → **Checkbox**. La case se coche puis se
  soumet ; le switch, lui, agit tout de suite.
- Pour un choix exclusif entre plusieurs options → **Radio group**.
- Pour une sélection multiple dans une liste → des **Checkbox**.
- Pour déclencher une action ponctuelle → un **Button**. Un switch porte un état, pas un verbe.

## Frontière avec Checkbox

La question n'est pas la forme mais le moment où l'effet a lieu : **immédiat → Switch**,
**à la soumission → Checkbox**. Un switch dans un formulaire avec un bouton « Enregistrer »
ment sur son propre fonctionnement.

## Tailles

- `default` — le cas courant.
- `sm` — contextes denses : une ligne de table, une barre d'outils.

## Règles Choose

- Typo : `font-sans` sur le label associé, pas sur le switch.
- Couleur : l'état actif prend `--primary`, l'état inactif `--input`. Aucune couleur
  sémantique — un switch n'encode ni succès ni danger par sa teinte.
- Label affirmatif, qui nomme l'état actif : « Recevoir les notifications », jamais
  « Désactiver les notifications » — sinon coché veut dire éteint.
- Un switch désactivé doit rester compréhensible : si la raison n'est pas évidente à l'écran,
  l'expliquer à côté.

## Règle agent

Ne jamais fabriquer un interrupteur à la main (un `<div>` arrondi avec une pastille qui
glisse) ni détourner un Checkbox pour un réglage instantané. Importer `choose-ui/switch`.
