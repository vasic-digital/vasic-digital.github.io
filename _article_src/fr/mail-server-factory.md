---
title: Mail Server Factory
slug: mail-server-factory
repo: https://github.com/Server-Factory/Mail-Server-Factory
tech: Kotlin, Shell, Docker, Postfix, Dovecot, Rspamd, ClamAV, QEMU
teaser: "Run your mail server like the boss: describe it in JSON, deploy it anywhere — across many OS targets and connection types — fully hardened."
---

## L’accroche
L’auto-hébergement d’un serveur de messagerie est un rite initiatique notoirement redoutable : Postfix, Dovecot, le filtrage des spams, l’antivirus, TLS, DNS, et une dizaine de façons de tout configurer de travers. Mail Server Factory remplace cette galère par une idée simple — décrivez le serveur que vous souhaitez en JSON, et laissez l’usine le construire et le durcir pour vous. *« Gérez votre serveur mail comme un pro. »*

## Pourquoi c’est fascinant
Mail Server Factory est un outil de provisionnement automatisé de serveurs de messagerie, prêt pour la production, qui transforme une configuration déclarative en une pile email complète et sécurisée. Il assemble des composants éprouvés — Postfix pour SMTP, Dovecot pour IMAP, Rspamd pour le spam, ClamAV pour l’antivirus — en un déploiement cohérent, intégrant sécurité et supervision d’entreprise. Il cible une large gamme de systèmes d’exploitation et peut les atteindre via différents types de connexions — SSH, Docker, Kubernetes, AWS SSM, Azure, GCP, libvirt et bien d’autres — si bien que la même configuration s’adapte à presque n’importe quel environnement. Il utilise même la virtualisation QEMU pour tester les distributions.

## Les défis de taille
La messagerie est l’un des systèmes les plus impitoyables à exploiter : une seule mauvaise configuration peut entraîner des emails non délivrés, un relais ouvert ou un serveur blacklisté. Automatiser son déploiement sur plusieurs distributions multiplie la difficulté — noms de paquets, chemins, systèmes d’initialisation et valeurs par défaut varient tous. Ensuite, la sécurité ne peut pas être une réflexion après coup pour un serveur mail : chiffrement robuste, TLS moderne, filtrage des spams et des malwares doivent être correctement configurés à chaque fois. Et vérifier que l’automatisation fonctionne sur toutes ces cibles exige une stratégie de test que la plupart des projets n’envisagent même pas — d’où l’importance d’une approche basée sur la virtualisation et d’une suite de tests exhaustive.

## Ce qui en fait un outil révolutionnaire
Mail Server Factory démocratise une expertise autrefois réservée aux administrateurs système chevronnés. Une description en JSON plus l’usine, et vous obtenez un serveur mail durci, supervisé et prêt pour la production — de manière reproductible. La diversité des types de connexion lui permet de s’intégrer naturellement aux infrastructures modernes, qu’il s’agisse d’un conteneur Docker, d’un cluster Kubernetes, d’un canal SSM dans le cloud ou d’une machine virtuelle libvirt. Cette portabilité, couplée à un cadre de sécurité intégré, en fait une solution véritablement pratique pour posséder son propre serveur mail plutôt que de le louer.

## Comment nous avons résolu les problèmes les plus ardus
La conception sépare le *« ce que vous voulez »* (configuration déclarative en JSON) du *« comment le construire partout »* (moteur d’implémentation), ce qui permet à une seule configuration de se déployer sur plusieurs cibles OS. La compatibilité multi-distribution est assurée par des tests en virtualisation QEMU, validant ainsi la sortie de l’usine sur des systèmes réels plutôt que sur des hypothèses — le tout soutenu par une suite de tests solide. La conteneurisation avec Docker et une pile logicielle soigneusement sélectionnée (Postfix, Dovecot, Rspamd, ClamAV) standardisent les éléments mobiles, tandis que le cadre de sécurité impose par défaut un chiffrement robuste et TLS. Le support d’une douzaine de types de connexion — de SSH aux clouds et à Kubernetes — transforme l’outil, passant de *« ça marche sur mon serveur »* à *« ça se déploie sur votre infrastructure »*, quelle qu’elle soit.
