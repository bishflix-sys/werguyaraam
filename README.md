# Weergu Yaram - L'Œil de la Santé

**Weergu Yaram** (qui signifie "source de santé" en wolof) est une plateforme ERP (Enterprise Resource Planning) de santé complète et intégrée, conçue pour moderniser la gestion des établissements de santé au Sénégal. Développée avec Next.js, Firebase et des technologies de pointe, elle offre une solution centralisée pour optimiser les opérations cliniques, administratives et logistiques.

## ✨ Fonctionnalités clés

La plateforme est organisée en modules fonctionnels pour couvrir l'ensemble des besoins d'un établissement de santé moderne :

### Module Clinique
- **📋 Dossiers Médicaux Électroniques (DME)** : Création, consultation sécurisée et archivage des dossiers patients, incluant les antécédents, les notes cliniques et les allergies.
- **📅 Gestion des Rendez-vous** : Prise de rendez-vous en ligne via le portail patient, calendriers dynamiques pour les médecins et rappels automatiques.
- **👨‍⚕️ Gestion des Professionnels de Santé** : Annuaire du personnel, gestion des plannings, des spécialités et des disponibilités.
- **⚕️ E-Prescription** : Création d'ordonnances électroniques avec vérification automatique des interactions médicamenteuses et des allergies patient.
- **➡️ Références & Transferts** : Génération de lettres de sortie et suivi des transferts de patients vers d'autres spécialistes ou établissements.
- **🚑 Suivi des Ambulances** : Cartographie en temps réel pour visualiser la position et le statut des unités mobiles.
- ** triage / Scoring Clinique (NEWS2)**: Outil d'aide à la décision pour évaluer le niveau de risque des patients à leur arrivée.

### Module Administratif & Financier
- **💳 Facturation & Paiements** : Gestion de la facturation des actes médicaux, suivi des assurances et intégration des paiements en ligne (Mobile Money).
- **📈 Rapports & Statistiques** : Tableaux de bord interactifs pour suivre les indicateurs de performance clés (KPIs) : revenus, activité, démographie des patients, etc.
- **🔐 Gestion des Consentements** : Suivi numérique du consentement éclairé des patients pour les traitements et l'utilisation des données.

### Module Logistique
- **💊 Gestion des Stocks & Pharmacie** : Suivi de l'inventaire des médicaments et consommables, avec gestion des numéros de lot, alertes de stock faible et de dates de péremption.
- **🛠️ Maintenance des Équipements** : Registre des équipements médicaux, planification des entretiens préventifs et gestion des pannes.

### Module Patient
- **🌐 Portail Patient** : Permet aux patients de rechercher des établissements de santé, de prendre rendez-vous et d'accéder à leurs informations.

## 🚀 Technologies utilisées

- **Framework Frontend** : [Next.js](https://nextjs.org/) (avec App Router)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **UI** : [React](https://reactjs.org/), [ShadCN UI](https://ui.shadcn.com/), [Tailwind CSS](https://tailwindcss.com/)
- **Backend & Base de données** : [Firebase](https://firebase.google.com/) (Firestore, Authentication)
- **Fonctionnalités IA** : [Google Genkit](https://firebase.google.com/docs/genkit)
- **Visualisation de données** : [Recharts](https://recharts.org/)

## 🏁 Démarrage

Ce projet est conçu pour fonctionner dans l'environnement de Firebase Studio.

1.  **Cloner le projet** : Importez ce projet dans votre environnement de développement.
2.  **Installer les dépendances** : Les dépendances listées dans `package.json` seront automatiquement installées.
    ```bash
    npm install
    ```
3.  **Lancer le serveur de développement** :
    ```bash
    npm run dev
    ```
    L'application sera accessible à l'adresse [http://localhost:9002](http://localhost:9002).

## Structure du projet

```
/src
|-- /app                   # Routes de l'application (Next.js App Router)
|   |-- /(app)             # Pages protégées de l'ERP (tableau de bord, patients, etc.)
|   |   |-- /dashboard
|   |   |-- /patients
|   |   |-- /appointments
|   |   |-- ... (et toutes les autres pages fonctionnelles)
|   |   `-- layout.tsx     # Layout principal de l'application
|   |-- /login             # Page de connexion
|   |-- layout.tsx         # Layout racine
|   `-- page.tsx           # Page d'accueil (redirection)
|-- /components            # Composants React réutilisables
|   |-- /layout            # Composants de mise en page (Header, Nav, etc.)
|   `-- /ui                # Composants d'interface (Button, Card, etc. de ShadCN)
|-- /firebase              # Configuration et hooks pour Firebase
|-- /lib                   # Fonctions utilitaires et configuration
|-- /ai                    # Logique et flows pour les fonctionnalités IA avec Genkit
`-- ...
```

---
Développé avec ❤️ pour un système de santé plus performant au Sénégal.
