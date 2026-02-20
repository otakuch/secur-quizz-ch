🚑 SECUR-QUIZ | Training Suite (CH)

SECUR-QUIZ est un simulateur interactif d'entraînement conçu pour les secouristes (Niveau IAS 3) et les intervenants en médecine de catastrophe en Suisse.

Généré dynamiquement par l'Intelligence Artificielle (API Google Gemini), ce module permet de s'entraîner sur des scénarios uniques et infinis basés sur les protocoles officiels romands et suisses.

✨ Fonctionnalités

Mode IAS 3 : Scénarios cliniques (traumatologie, urgences médicales) basés sur l'approche structurée <C>ABCDE.

Mode Médecine de Catastrophe : Simulation d'événements majeurs avec gestion de scène (METHANE), triage (START) et gestion d'un Poste Médical Avancé (PMA).

Prise de Constantes (Scope) : Interface simulant un moniteur multiparamétrique (Nihon Kohden Life Scope) pour relever les constantes vitales des patients (FC, SpO2, TA, FR, GCS).

Débriefing Instructeur IA : Correction immédiate après chaque décision et calcul du score NACA estimé.

Analyse Pédagogique : À la fin de la session, l'application analyse les erreurs et propose des domaines d'amélioration ciblés (ex: Protocole Brûlures PICA, Triage, METHANE).

🚀 Installation & Déploiement

Cette application est une Single Page Application (SPA) fonctionnant entièrement côté client (Vanilla JS, HTML, Tailwind CSS). Elle ne nécessite aucun serveur backend complexe.

Prérequis

Pour utiliser la génération de scénarios, chaque utilisateur doit fournir sa propre Clé API Gemini (gratuite) via l'interface de l'application. La clé est stockée localement dans le navigateur (localStorage) et n'est jamais transmise à des tiers.

Hébergement via GitHub Pages

Ce projet est prêt à être hébergé gratuitement via GitHub Pages :

Forkez ou clonez ce dépôt sur votre compte GitHub.

Allez dans les Settings (Paramètres) de votre dépôt.

Dans la section Pages, choisissez la branche main et le dossier /root.

Sauvegardez. Votre simulateur sera en ligne et accessible via une URL publique en quelques minutes !

📚 Sources & Doctrine Médicale

Les corrections de l'intelligence artificielle sont contraintes par les recommandations de :

SRC (Swiss Resuscitation Council)

IAS (Interassociation de sauvetage)

Protocoles PICA / HUG (Gestion des événements majeurs, TRACER, et protocoles de brûlures de la Brigade Sanitaire Cantonale de Genève).

⚠️ Avertissement Légal

Cette application est un outil d'entraînement théorique et ludique. Elle ne remplace en aucun cas une formation certifiante officielle ou le jugement clinique d'un professionnel de la santé sur le terrain. L'auteur et les contributeurs déclinent toute responsabilité quant à l'utilisation des informations générées par ce simulateur lors de véritables interventions médicales.
