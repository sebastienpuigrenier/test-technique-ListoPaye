# Réponse au test technique de Listo Paye

![Version](https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000)


> Création d'un ensemble de fonctions et de tests unitaires suite à un premier entretien

![example](https://listopaye.fr/wp-content/uploads/2020/01/logo-listopaye-50.png)

## Rappel de l'énoncé 📚

```sh
Afin de disposer d’une base de discussion technique, nous souhaitons vous proposer
l’exercice suivant :
En paie, nous travaillons avec des périodes.
La période mensuelle est la plus courante, notamment parce qu'elle correspond au
rythme d'édition des bulletins de paie.
Elle commence le premier jour du mois à minuit (inclus) et termine le premier jour
du mois suivant à minuit (exclu).
D'autres périodes existent dans le métier de la paie, par exemple les périodes
d'absence comme les congés.
Etant donné qu'un salarié a posé des congés, nous avons besoin d’une fonction qui
permette de savoir si la période de congés est incluse tout ou partie dans une
période mensuelle.
Si la période de congés est à cheval sur plusieurs périodes mensuelles,
l’application devra découper la période de congés pour créer une période de congés
par période mensuelle.

Travail attendu :
- Créer un projet Github dans le langage de votre choix. L’utilisation d’un
framework est possible. L’utilisation d’une base de données n’est pas
nécessaire,
- Implémenter la notion de période(s),
- Créer une fonction permettant de déclarer une période de congés,
- Créer une fonction de contrôle qui sera appelée pour vérifier si la période
de congés est totalement incluse dans une période mensuelle donnée,
- Générer une écriture de la ou des période(s) de congés à enregistrer,
- Mettre en place un ou plusieurs test(s) unitaire(s),
- Fournir les explications permettant de comprendre et de tester le projet.

Critères globaux d’évaluation :
- Respect des consignes,
- Temps global de réalisation,
- Clarté et beauté du code :)

N’hésitez pas à nous faire part de vos éventuelles questions.
Bon courage et à très bientôt pour débriefer !
```

## Install ⚙️

### With NPM

```sh
$ git clone https://github.com/sebastienpuigrenier/test-technique-ListoPaye.git
$ cd test-technique-ListoPaye
$ npm install
```
### Lancement des tests unitaires

```sh
$ npm test
```


---

## Author

**Sebastien Puigrenier**

- Website: [spuigrenierportfolio.netlify.app](https://spuigrenierportfolio.netlify.app/)
