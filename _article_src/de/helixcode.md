---
title: HelixCode
slug: helixcode
repo: https://github.com/HelixDevelopment/HelixCode
tech: Go, Gin, PostgreSQL, Redis, SSH, WebSocket, MCP
teaser: "A distributed AI development platform that splits work across machines, never loses progress, and orchestrates LLMs to plan, build, test and refactor."
---

## Der Aufhänger
Was wäre, wenn dein KI-Coding-Assistent nicht nur ein einzelner Prozess auf einem Laptop wäre, sondern ein koordiniertes Netzwerk von Arbeitsknoten, verteilt auf all deinen Geräten – Aufgaben intelligent aufteilend, Fortschritte kontinuierlich speichernd und Abstürze überstehend, ohne auch nur eine Minute Arbeit zu verlieren? Das ist HelixCode: eine unternehmensreife, verteilte KI-Entwicklungsplattform.

## Warum es fasziniert
HelixCode betrachtet KI-gestützte Entwicklung als Problem verteilter Datenverarbeitung, nicht als Chatbot. Es führt intelligente Aufgabenverteilung mit Arbeitssicherung durch, verwaltet einen Pool von SSH-verbundenen Arbeitsknoten auf Linux, macOS, Windows und mehr und steuert komplette Entwicklungsworkflows – Planung, Bau, Testen, Refactoring – mit Unterstützung mehrerer LLM-Anbieter (Llama.cpp, Ollama, OpenAI). Es spricht das Model Context Protocol, bietet REST-, CLI-, Terminal-UI- und WebSocket-Clients und integriert fortschrittliche Schlussfolgerungsmuster wie Chain-of-Thought und Tree-of-Thoughts. Im Grunde ist es ein Betriebssystem für LLM-gestützte Softwareentwicklung.

## Die kniffligen Herausforderungen
Echte Arbeit auf heterogene Maschinen zu verteilen, ist schwierig; nicht-deterministische LLM-Arbeit zu verteilen, ist noch schwieriger. Man muss Aufgaben so aufteilen, dass Teile parallel laufen können, ohne sich zu behindern, Abhängigkeiten zwischen ihnen verfolgen und – entscheidend – niemals Fortschritte verlieren, wenn ein Arbeitsknoten mitten in der Ausführung ausfällt. Das erfordert automatische Checkpoints und Rollbacks, dauerhafte Task-Zustände und Gesundheitsüberwachung über einen SSH-Arbeitsknoten-Pool. Darüber liegt die LLM-Ebene: hardwarebewusste Modellauswahl, eine einheitliche Anbieter-Schnittstelle, damit jedes Modell ausgetauscht werden kann, Tool-Aufrufe und mehrstufige Schlussfolgerungen, die über verteilte Ausführungen hinweg kohärent bleiben müssen.

## Was es zum Game-Changer macht
HelixCode skaliert KI-Entwicklung über ein einzelnes Kontextfenster und einen einzelnen Rechner hinaus. Durch die Koordination LLM-gestützter Arbeit auf vielen Maschinen mit garantierter Arbeitssicherung verwandelt es instabile, von vorne beginnende KI-Sitzungen in widerstandsfähige, langlaufende Entwicklungs-Pipelines. Die Bandbreite – vollständige Workflows über den gesamten Entwicklungszyklus, Multi-Client-Zugriff, plattformübergreifende Arbeitsknoten, mobile-optimierte Frameworks, Benachrichtigungen über Slack, Discord, E-Mail und Telegram – bedeutet, dass es im Zentrum eines echten Teamprozesses stehen kann, nicht nur im Terminal eines Einzelnen.

## Wie wir die härtesten Probleme gelöst haben
Die Plattform ist in Schichten aufgebaut: eine REST- + WebSocket- + MCP-API über Kernservices (Authentifizierung und Sitzungsverwaltung, der SSH-basierte Arbeitsknoten-Pool, Task-Management mit Checkpointing, Projekt- und Workflow-Verwaltung sowie LLM-Anbieter-Integration), gestützt auf PostgreSQL und Redis. Resilienz entsteht durch die grundlegende Implementierung von Checkpointing und Rollback – der Task-Zustand wird persistent gespeichert, sodass ein ausgefallener Arbeitsknoten fortsetzt, statt neu zu starten. Die Anbieter-Architektur abstrahiert jedes LLM hinter einer einheitlichen Schnittstelle, wobei Hardware-Erkennung Modelle auswählt, die tatsächlich auf die Maschine passen. So läuft derselbe Workflow, egal ob ein Arbeitsknoten über eine Rechenzentrums-GPU oder eine bescheidene CPU verfügt. Schlussfolgerungsmuster sind als wiederverwendbare Workflow-Modi implementiert, sodass das System mit strukturiertem Chain-of-Thought planen, bauen, testen und refaktorieren kann – statt auf einmalige Prompts angewiesen zu sein.
