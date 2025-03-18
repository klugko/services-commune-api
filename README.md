# Municipal Services API

Ce projet est une API REST développée avec NestJS, Prisma et PostgreSQL pour gérer les services communaux, les sous-services et les feedbacks des citoyens. L'API permet de créer, lire, mettre à jour et désactiver des services, sous-services et feedbacks.

## Structure du projet

Structure du projet :

```
src/
├── config/                  # Configuration
├── prisma/                  # Fichiers de configuration et migrations Prisma
├── services/                # Module pour la gestion des services communaux
│   ├── dto/                 # DTOs (Data Transfer Objects) pour les services
├── sub-services/            # Module pour la gestion des sous-services
│   ├── dto/                 # DTOs pour les sous-services
├── feedbacks/               # Module pour la gestion des feedbacks
│   ├── dto/                 # DTOs pour les feedbacks
├── common/                  # Fichiers communs à l'application
│   ├── filters/             # Filtres pour la gestion des erreurs
└── main.ts                  # Point d'entrée de l'application
```

---

## Fonctionnalités

- **Services** : Gestion des services communaux (création, lecture, mise à jour, désactivation).
- **Sous-services** : Gestion des sous-services associés à un service communal.
- **Feedbacks** : Gestion des feedbacks des citoyens sur les sous-services.
- **Validation des données** : Utilisation de `class-validator` pour valider les entrées.
- **Gestion des erreurs** : Gestion centralisée des erreurs avec des messages en français.

---

## Technologies utilisées

- **NestJS** : Framework pour construire des applications Node.js efficaces et évolutives.
- **Prisma** : ORM pour interagir avec la base de données PostgreSQL.
- **PostgreSQL** : Base de données relationnelle pour stocker les données.
- **Docker** : Conteneurisation de l'application et de la base de données.

---