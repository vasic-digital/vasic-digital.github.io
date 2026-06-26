---
title: HelixCode
slug: helixcode
repo: https://github.com/HelixDevelopment/HelixCode
tech: Go, Gin, PostgreSQL, Redis, SSH, WebSocket, MCP
teaser: "A distributed AI development platform that splits work across machines, never loses progress, and orchestrates LLMs to plan, build, test and refactor."
---

## L’hameçon
Et si votre assistant de codage IA n’était pas un simple processus sur un seul ordinateur, mais un réseau coordonné de travailleurs répartis sur toutes les machines que vous possédez — divisant les tâches de manière intelligente, sauvegardant en continu, et survivant aux plantages sans perdre une minute de travail ? Voici HelixCode : une plateforme de développement IA distribuée de niveau entreprise.

## Pourquoi c’est fascinant
HelixCode aborde le développement assisté par IA comme un problème de calcul distribué, et non comme un simple chatbot. Il assure une division intelligente des tâches avec préservation du travail, gère un pool de travailleurs connectés en SSH sur Linux, macOS, Windows et bien d’autres, et pilote des workflows de développement complets — planification, construction, tests, refactoring — avec une prise en charge multi-fournisseurs de LLM (Llama.cpp, Ollama, OpenAI). Il parle le *Model Context Protocol*, expose des interfaces REST, CLI, terminal-UI et WebSocket, et intègre des schémas de raisonnement avancés comme le *chain-of-thought* et le *tree-of-thoughts*. En somme, c’est un système d’exploitation pour l’ingénierie boostée par les LLM.

## Les défis complexes
Distribuer un travail réel sur des machines hétérogènes est difficile ; distribuer un travail LLM non déterministe l’est encore plus. Il faut découper une tâche de manière à ce que ses parties puissent s’exécuter en parallèle sans conflit, suivre leurs dépendances, et — surtout — ne jamais perdre de progression si un travailleur tombe en panne en cours d’exécution. Cela exige des sauvegardes automatiques et des retours en arrière, un état de tâche durable, ainsi qu’une surveillance de la santé du pool de travailleurs SSH. Par-dessus tout, il y a la couche LLM : sélection de modèles adaptés au matériel, une interface unifiée pour les fournisseurs permettant d’échanger n’importe quel modèle, l’appel d’outils, et un raisonnement multi-étapes qui doit rester cohérent malgré une exécution distribuée.

## Ce qui en fait un changement de jeu
HelixCode repousse les limites du développement IA au-delà d’une seule fenêtre de contexte et d’une seule machine. En coordonnant le travail boosté par les LLM sur plusieurs machines avec une préservation garantie du travail, il transforme des sessions IA instables et à recommencer depuis zéro en pipelines d’ingénierie résilients et durables. Son étendue — workflows couvrant tout le cycle de vie, accès multi-clients, travailleurs multiplateformes, frameworks adaptés aux mobiles, notifications multi-canaux via Slack, Discord, Email et Telegram — lui permet de s’imposer au cœur du processus d’une véritable équipe, et pas seulement dans le terminal d’un individu.

## Comment nous avons résolu les parties les plus ardues
La plateforme est construite en couches : une API REST + WebSocket + MCP au-dessus de services de base (authentification et gestion des sessions, pool de travailleurs SSH, gestion des tâches avec sauvegardes, gestion des projets et des workflows, intégration des fournisseurs LLM), le tout soutenu par PostgreSQL et Redis. La résilience repose sur des sauvegardes et des retours en arrière intégrés — l’état des tâches est persisté pour qu’un travailleur défaillant reprenne là où il s’est arrêté plutôt que de tout recommencer. L’architecture des fournisseurs abstrait chaque LLM derrière une seule interface, avec une détection matérielle qui choisit les modèles adaptés à la machine, de sorte que le même workflow s’exécute qu’un travailleur dispose d’un GPU de datacenter ou d’un modeste CPU. Les schémas de raisonnement sont implémentés comme des modes de workflow réutilisables, permettant au système de planifier, construire, tester et refactoriser avec une *chain-of-thought* structurée plutôt qu’avec des requêtes ponctuelles.
