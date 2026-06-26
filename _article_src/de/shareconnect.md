---
title: ShareConnect
slug: shareconnect
repo: https://github.com/vasic-digital/ShareConnect
tech: Kotlin, Android (API 26+), Java 17
teaser: "Share any downloadable URL straight to the right remote or local engine — torrents, downloaders, media servers — from any Android device."
---

## Der Haken
Auf deinem Smartphone taucht ein Link auf. Wohin damit – dein Torrent-Client, dein Heim-Downloader, dein Plex-Server, deine Nextcloud? ShareConnect beantwortet diese Frage mit einem einzigen Tippen. Es ist die universelle „Sende diesen Link an das richtige Ziel"-Schicht für dein gesamtes Self-Hosting-Ökosystem.

## Warum es fasziniert
ShareConnect ist keine einzelne App – es ist eine ganze Familie von Konnektoren, vereint unter einem einzigen Sharing-Erlebnis. Es spricht mit qBittorrent, Transmission, uTorrent, JDownloader, MeTube, yt-dlp, Nextcloud, FileBrowser, Plex, Jellyfin, Emby und vielen mehr und verwandelt einen fragmentierten Zoo an Diensten in ein kohärentes Netz von Zielen. Über das Android-Teilen-Menü wird eine URL intelligent an den richtigen Verarbeitungspunkt weitergeleitet – egal, ob dieser im selben Raum oder irgendwo im Internet liegt.

## Die kniffligen Probleme
Jeder Backend-Dienst hat seine eigene API, sein Authentifizierungsmodell, seine Eigenheiten und Fehlerquellen. Eine zuverlässige Brücke zu über einem Dutzend Diensten zu bauen, bedeutet, all diese Heterogenität zu absorbieren, ohne sie dem Nutzer zuzumuten. Dazu kommt der hohe Anspruch des Projekts: Es handelt sich um produktionsreife Android-Software mit 100 % Testabdeckung – Unit-, Instrumentierungs-, Automatisierungs- und KI-gestützte QA-Tests – einem SonarQube-A+-Rating, ~95 % Code-Coverage, nahezu null technischer Schulden und ohne kritische Sicherheitslücken. Zwanzig produktionsreife Anwendungen gleichzeitig auf diesem Niveau zu halten, ist eine ernsthafte ingenieurtechnische Herausforderung, nicht nur eine Frage des Programmierens.

## Was es zum Game-Changer macht
ShareConnect beseitigt die Reibungsverluste eines Self-Hosting-Lebensstils. Statt die klobigen Web-Oberflächen der einzelnen Dienste aufzurufen, teilst du einmal – und das System erledigt den Rest. Da es offen und konnektorbasiert ist, wächst es mit deinem Setup mit: Fügst du einen neuen Mediaserver oder Downloader hinzu, kann ShareConnect ihn sofort ansteuern. Es behandelt den modernen Heimserver nicht als Ansammlung separater Kisten, sondern als ein einziges, orchestriertes Ziel, das du mit dem Gerät in deiner Hand steuerst.

## Wie wir die härtesten Probleme gelöst haben
Die Architektur basiert auf einer sauberen Konnektor-Abstraktion: Jeder Dienst wird hinter einer gemeinsamen Schnittstelle implementiert, sodass der Routing-Kern nie die unordentlichen Details eines bestimmten Backends kennen muss. Neue Konnektoren lassen sich einbinden, ohne das Gesamtsystem zu destabilisieren. Qualität wird nicht erhofft, sondern erzwungen – das Projekt führt mehrstufige Test-Suiten (Unit-, Instrumentierungs-, End-to-End-Automatisierung sowie KI-gestützte QA) durch und gibt Releases erst nach Sicherheits- und Code-Qualitätsprüfungen frei. Diese Strenge ist der Grund, warum ein Projekt mit so vielen Integrationen glaubwürdig behaupten kann, dass jede einzelne davon „produktionsreif" ist. Modernes Kotlin auf Android API 26+ mit Java 17 hält den Code aktuell und wartbar, während die Liste der Konnektoren wächst.
