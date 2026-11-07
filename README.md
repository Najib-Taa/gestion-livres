# 📚 Gestion de livres — Ma Bibliothèque

> Une application web simple et moderne pour gérer sa collection personnelle de livres.

---

## 📖 1. Présentation du projet

**Ma Bibliothèque** est une application web de gestion de livres développée avec HTML, CSS et JavaScript moderne (ES6+).

Ce projet permet à un utilisateur de gérer facilement sa collection personnelle de livres directement depuis son navigateur, sans avoir besoin d'un serveur Backend ni d'une base de données externe.

L'application est une **Single Page Application (SPA)** : les différentes opérations sont effectuées sans recharger la page.

Les données sont sauvegardées localement dans le navigateur grâce à l'API `localStorage`.

## 🎯 2. Objectifs du projet

L'objectif principal est de mettre en pratique les notions fondamentales de JavaScript moderne :

- Manipulation du DOM.
- Gestion des événements.
- Utilisation des modules ES6 (`import` et `export`).
- Manipulation des tableaux et des objets.
- Utilisation des fonctions fléchées.
- Déstructuration et opérateur Spread.
- Utilisation des méthodes `map()`, `filter()`, `find()`, `some()` et `reduce()`.
- Gestion des données avec `localStorage`.
- Sérialisation et désérialisation avec `JSON.stringify()` et `JSON.parse()`.

## ✨ 3. Fonctionnalités principales

L'application propose les fonctionnalités suivantes :

### 📗 Gestion des livres (CRUD)

- **Ajouter :** ajouter un nouveau livre à sa collection.
- **Afficher :** consulter la liste de tous les livres.
- **Modifier :** mettre à jour les informations d'un livre existant.
- **Supprimer :** supprimer un livre après confirmation.

### 🔍 Recherche

Rechercher rapidement un livre à partir de :

- Son titre.
- Son auteur.

### ↕️ Tri

Organiser la collection selon trois critères :

- Titre.
- Auteur.
- Année de publication.

### 💾 Sauvegarde locale

- Sauvegarder automatiquement les livres dans `localStorage`.
- Récupérer les données lors du démarrage de l'application.
- Conserver les livres après la fermeture du navigateur.

## 📝 4. Informations d'un livre

Chaque livre possède les propriétés suivantes :

| Propriété | Description | Obligatoire |
|---|---|---|
| `id` | Identifiant unique du livre | Oui |
| `title` | Titre du livre | Oui |
| `author` | Nom de l'auteur | Oui |
| `year` | Année de publication | Non |
| `genre` | Genre littéraire | Non |
| `description` | Description du livre | Non |
| `status` | Statut de lecture | Oui |

### Statuts de lecture

Trois statuts sont disponibles :

- `to-read` : À lire.
- `reading` : En cours de lecture.
- `read` : Lu.

## 🛠️ 5. Technologies utilisées

| Technologie | Utilisation |
|---|---|
| HTML5 | Structure de l'application |
| CSS3 | Design et mise en page |
| JavaScript ES6+ | Logique et fonctionnalités |
| ES6 Modules | Organisation et séparation du code |
| DOM API | Manipulation des éléments HTML |
| localStorage | Sauvegarde locale des données |
| JSON | Conversion des données pour le stockage |
| Git & GitHub | Gestion des versions et collaboration |
| GitHub Pages | Déploiement de l'application |

## 📁 6. Structure du projet

Le projet est organisé en plusieurs fichiers afin de séparer les responsabilités et de faciliter la maintenance du code.

```text
gestion-livres/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   ├── state.js
│   ├── books.js
│   ├── storage.js
│   ├── ui.js
│   └── utils.js
│
├── .gitignore
│
└── README.md
```

### 📂 Description des fichiers

**1. `index.html`**

Contient la structure HTML de l'application :

- Le formulaire d'ajout et de modification.
- La zone de recherche.
- Le menu de tri.
- La liste des livres.

**2. `css/style.css`**

Contient les règles CSS responsables de l'apparence de l'application :

- Couleurs.
- Espacements.
- Boutons.
- Cartes des livres.
- Adaptation aux petits écrans.

**3. `js/app.js`**

Point d'entrée de l'application.

Il permet de :

- Importer les fonctions nécessaires.
- Initialiser l'application.
- Écouter les événements.
- Relier les différentes parties du projet.

**4. `js/state.js`**

Gère l'état de l'application et la liste des livres en mémoire.

**5. `js/books.js`**

Contient les opérations principales de gestion des livres :

- Ajouter un livre.
- Modifier un livre.
- Supprimer un livre.
- Rechercher et trier les livres.

**6. `js/storage.js`**

Gère la sauvegarde et le chargement des données avec `localStorage`.

**7. `js/ui.js`**

Gère l'affichage dynamique des livres et les interactions avec les éléments de l'interface.

**8. `js/utils.js`**

Regroupe les fonctions utilitaires réutilisables dans plusieurs modules.

**9. `.gitignore`**

Indique à Git les fichiers et dossiers qui ne doivent pas être suivis.

## 🚀 7. Installation et lancement

Aucune installation de dépendances n'est nécessaire pour lancer la version actuelle du projet.

### Prérequis

- Un navigateur web moderne.
- Visual Studio Code.
- L'extension Live Server.

### Étapes de lancement

1. Cloner ou télécharger le dépôt GitHub.
2. Ouvrir le dossier du projet dans Visual Studio Code.
3. Installer l'extension **Live Server** si elle n'est pas déjà installée.
4. Ouvrir le fichier `index.html`.
5. Faire un clic droit sur le fichier.
6. Sélectionner **Open with Live Server**.

L'application s'ouvrira automatiquement dans le navigateur.

## 💡 8. Utilisation de l'application

### Ajouter un livre

1. Remplir le titre et le nom de l'auteur.
2. Ajouter les informations facultatives si nécessaire.
3. Choisir le statut de lecture.
4. Cliquer sur **Ajouter le livre**.

### Modifier un livre

1. Trouver le livre dans la collection.
2. Cliquer sur **Modifier**.
3. Modifier les informations souhaitées.
4. Enregistrer les modifications.

### Supprimer un livre

1. Cliquer sur **Supprimer**.
2. Confirmer la suppression.

### Rechercher et trier

- Utiliser la barre de recherche pour trouver un livre.
- Utiliser le menu de tri pour organiser la collection.

## 💾 9. Gestion des données

L'application utilise `localStorage` pour conserver les informations des livres dans le navigateur.

Les données sont converties en JSON avant leur sauvegarde.

**Sauvegarde :**

```javascript
localStorage.setItem("books", JSON.stringify(books));
```

**Récupération :**

```javascript
const books = JSON.parse(localStorage.getItem("books"));
```

Les données restent disponibles après le rechargement ou la fermeture du navigateur, tant que les données du site ne sont pas supprimées.

**Remarque :** les données sont stockées localement dans le navigateur utilisé. Elles ne sont pas automatiquement synchronisées entre plusieurs appareils.

## 🌿 10. Gestion du projet avec Git

Le projet utilise Git et GitHub pour suivre les modifications et organiser le développement.

Les fonctionnalités peuvent être développées dans des branches dédiées :

```text
main
│
├── feature/book-crud
├── feature/search-sort
├── feature/local-storage
└── feature/ui
```

### Workflow de travail

1. Créer une branche pour une fonctionnalité.
2. Développer et tester la fonctionnalité.
3. Enregistrer les modifications avec un commit clair.
4. Créer une Pull Request.
5. Faire relire le code par un pair.
6. Fusionner les modifications après validation.

Un tableau Kanban permet également de suivre l'avancement des tâches.

## 📋 11. Tests et vérifications

Les fonctionnalités doivent être vérifiées à travers les tests suivants :

- Ajouter un livre avec un titre et un auteur.
- Vérifier la validation des champs obligatoires.
- Afficher correctement la collection.
- Modifier les informations d'un livre.
- Supprimer un livre après confirmation.
- Rechercher par titre et par auteur.
- Trier par titre, auteur et année.
- Vérifier la sauvegarde dans `localStorage`.
- Recharger la page et vérifier la récupération des données.

## 🚀 12. Déploiement

L'application peut être déployée avec **GitHub Pages** afin de la rendre accessible en ligne.

Le lien de l'application sera ajouté ici après le déploiement :

**URL du projet :[Lien GitHub](https://github.com/Najib-Taa/gestion-livres)


---

## 📌 Conclusion

Ce projet permet de mettre en pratique JavaScript moderne à travers une application concrète de gestion de livres.

Il met l'accent sur la modularité, la manipulation du DOM, la gestion des événements et la persistance locale des données.

**L'objectif est de développer une application fonctionnelle tout en écrivant un code clair, organisé et facile à maintenir.**

---

*Made with HTML, CSS & JavaScript.*
