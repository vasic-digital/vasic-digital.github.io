---
title: Mail Server Factory
slug: mail-server-factory
repo: https://github.com/Server-Factory/Mail-Server-Factory
tech: Kotlin, Shell, Docker, Postfix, Dovecot, Rspamd, ClamAV, QEMU
teaser: "Run your mail server like the boss: describe it in JSON, deploy it anywhere — across many OS targets and connection types — fully hardened."
---

## Der Einstieg
Einen E-Mail-Server selbst zu hosten ist berüchtigt dafür, die meisten Leute in die Knie zu zwingen: Postfix, Dovecot, Spam-Filterung, Antiviren-Schutz, TLS, DNS und ein Dutzend Möglichkeiten, es subtil falsch zu machen. *Mail Server Factory* ersetzt all diese Qualen durch eine einzige Idee – beschreiben Sie den gewünschten Server in JSON, und lassen Sie die Factory ihn für Sie bauen und absichern. *„Betreiben Sie Ihren Mailserver wie ein Profi."*

## Warum es fasziniert
*Mail Server Factory* ist ein produktionsreifes, automatisiertes Provisionierungstool für Mailserver, das eine deklarative Konfiguration in einen vollständig aufgebauten, gesicherten E-Mail-Stack verwandelt. Es fügt die mühsam erprobten Komponenten – Postfix für SMTP, Dovecot für IMAP, Rspamd für Spam-Filterung, ClamAV für Antiviren-Schutz – zu einer kohärenten Bereitstellung zusammen, mit unternehmenssicherer Absicherung und Überwachung von Anfang an. Es unterstützt eine Vielzahl von Betriebssystemen und kann diese über verschiedene Verbindungstypen ansteuern – SSH, Docker, Kubernetes, AWS SSM, Azure, GCP, libvirt und mehr – sodass dieselbe Konfiguration in fast jeder Umgebung eingesetzt werden kann. Selbst die Testumgebung nutzt QEMU-Virtualisierung, um die Kompatibilität über verschiedene Distributionen hinweg zu prüfen.

## Die kniffligen Probleme
E-Mail ist eines der unnachsichtigsten Systeme im Betrieb: Ein einziger Konfigurationsfehler kann zu nicht zugestellten Nachrichten, einem offenen Relay oder einem Server führen, der auf einer Sperrliste landet. Die Automatisierung über mehrere Betriebssystem-Distributionen hinweg vervielfacht die Herausforderung – Paketnamen, Pfade, Init-Systeme und Standardwerte unterscheiden sich überall. Dazu kommt die Sicherheit, die bei E-Mail kein nachträglicher Gedanke sein darf: Starke Verschlüsselung, modernes TLS, Spam- und Malware-Filterung müssen jedes Mal korrekt eingerichtet sein. Und die Überprüfung, ob die Automatisierung auf all diesen Zielsystemen tatsächlich funktioniert, erfordert eine Teststrategie, die die meisten Projekte nie in Angriff nehmen – weshalb ein virtualisierungsbasierter Testansatz und eine umfangreiche, erfolgreiche Testsuite hier so entscheidend sind.

## Was es zum Game-Changer macht
*Mail Server Factory* demokratisiert etwas, das bisher tiefem Sysadmin-Know-how vorbehalten war. Eine JSON-Beschreibung plus die Factory ergeben einen gehärteten, überwachten, produktionsreifen Mailserver – und das reproduzierbar. Die Bandbreite der Verbindungstypen macht es so flexibel wie eine einfache VM: Bereitstellung per Docker, in Kubernetes, über einen Cloud-SSM-Kanal oder auf einer libvirt-VM. Diese Portabilität in Kombination mit einem integrierten Sicherheitsframework macht es zu einem echten, praktikablen Weg, die Kontrolle über die eigene E-Mail-Kommunikation zu übernehmen, statt sie zu mieten.

## Wie wir die härtesten Herausforderungen gelöst haben
Das Design trennt das *„Was Sie wollen"* (deklarative JSON-Konfiguration) vom *„Wie es überall gebaut wird"* (die Implementierungs-Engine), was es ermöglicht, eine einzige Konfiguration über viele Betriebssysteme hinweg einzusetzen. Die Kompatibilität mit mehreren Distributionen wird durch QEMU-Virtualisierung für Tests sichergestellt, sodass die Ausgabe der Factory nicht nur angenommen, sondern an realen Systemen validiert wird – gestützt auf eine umfangreiche, erfolgreiche Testsuite. Die Containerisierung mit Docker und ein kuratierter Stack (Postfix, Dovecot, Rspamd, ClamAV) standardisieren die beweglichen Teile, während das Sicherheitsframework starke Verschlüsselung und TLS standardmäßig durchsetzt. Die Unterstützung von einem Dutzend Verbindungstypen – von SSH bis zu Cloud- und Kubernetes-Umgebungen – verwandelt das Tool von *„Läuft auf meinem Server"* zu *„Wird auf Ihrer Infrastruktur bereitgestellt"*, egal, wie diese aussieht.
