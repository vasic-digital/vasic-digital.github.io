---
title: Asinka
slug: asinka
repo: https://github.com/vasic-digital/Asinka
tech: Kotlin
teaser: "Keep objects in sync across separate processes — thread-safe, efficient, and invisible, so independent apps behave like one."
---

## Le déclic

Deux processus, une seule source de vérité. Asinka (Асинка) est une bibliothèque de synchronisation d’objets interprocessus haute performance qui permet à des applications indépendantes de partager un état dynamique comme si elles ne formaient qu’un seul programme – sans code d’interfaçage fragile, sans conditions de course, sans approximation.

## Pourquoi c’est fascinant

La communication interprocessus est l’un de ces problèmes qui semblent simples et se révèlent être un champ de mines. Asinka l’aborde de front avec une bibliothèque Kotlin ciblée, dont la seule mission est de faire en sorte que les objets d’un processus reflètent fidèlement les modifications apportées dans un autre. Cette capacité ouvre discrètement la voie à des architectures puissantes : applications compagnons évoluant en parfaite synchronisation, plugins partageant des données avec leur hôte, ou services coopératifs sur une même machine nécessitant une vue cohérente d’objets partagés sans avoir à réinventer la synchronisation à chaque fois.

## Les défis de taille

Synchroniser des objets modifiables à travers les frontières des processus est complexe pour des raisons qui se manifestent à l’exécution, pas à la compilation. Il faut sérialiser et réconcilier l’état, gérer les mises à jour concurrentes des deux côtés sans corrompre les données, et tout cela avec une efficacité suffisante pour que la synchronisation ne devienne pas plus lente que le travail qu’elle supporte. La sécurité des threads est incontournable – deux processus modifiant un état partagé, c’est précisément le scénario qui engendre des *heisenbugs*. Et le système doit rester robuste quand l’un des côtés est lent, surchargé ou temporairement indisponible.

## Ce qui en fait un tournant

Asinka transforme une corvée récurrente et source d’erreurs en une simple dépendance à ajouter. En offrant une synchronisation d’objets sûre et efficace comme brique réutilisable, elle permet aux développeurs de concevoir des systèmes multi-processus qui étaient auparavant trop risqués ou trop coûteux à mettre en œuvre. Elle fait passer la communication interprocessus (IPC) d’un échange de messages artisanaux et propices aux bugs à une abstraction propre au niveau des objets – vous modifiez un objet ici, il est correct là-bas. C’est un changement significatif dans la façon dont des applications coopératives peuvent être construites.

## Comment nous avons résolu les problèmes les plus ardus

La bibliothèque est conçue dès le départ pour un accès concurrentiel sécurisé, de sorte que les modifications simultanées sont réconciliées plutôt que mises en compétition. Le partage d’état est modélisé au niveau des objets, offrant aux développeurs un modèle mental intuitif – ils raisonnent en termes d’objets, pas de protocoles réseau – tandis qu’Asinka gère en coulisses la sérialisation et la propagation. L’efficacité est traitée comme une exigence prioritaire, maintenant la couche de synchronisation suffisamment légère pour s’intégrer dans le chemin critique des applications réelles. Le résultat est un outil petit, précis, qui excelle dans une tâche véritablement complexe.
