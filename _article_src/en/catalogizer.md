---
title: Catalogizer
slug: catalogizer
repo: https://github.com/vasic-digital/Catalogizer
tech: Go, Gin, React, TypeScript, SQLCipher, WebSocket
teaser: "One library, every protocol: Catalogizer finds, identifies and organizes 50+ media types across SMB, FTP, NFS, WebDAV and local disk."
---

## The hook
Most people's media lives everywhere at once — a NAS share here, an FTP archive there, a WebDAV mount, a stack of local drives. Catalogizer treats all of that as a single, searchable, self-updating library. Point it at your storage and it discovers, identifies, enriches and watches your entire collection without you ever touching a spreadsheet again.

## Why it's fascinating
Catalogizer is not a media player bolted onto a folder browser. It is a media intelligence engine. It automatically recognizes more than 50 media types — movies, TV, music, games, software, documentaries and more — then reaches out to external authorities like TMDB, IMDB, TVDB, MusicBrainz, Spotify and Steam to attach rich, accurate metadata. The result is a catalog that knows what each file actually is, not just where it sits. A modern React + TypeScript web interface keeps everything live over WebSocket, while a high-performance Go backend on the Gin framework does the heavy lifting.

## The hard problems
Cataloguing across protocols is deceptively brutal. SMB shares vanish mid-scan, FTP connections time out, NFS behaves differently on macOS than anywhere else, and metadata providers rate-limit, disagree, or return nothing. A naive scanner falls over the moment a single mount blinks. Catalogizer had to be resilient by design: it gracefully handles temporary SMB disconnections, reconnects automatically, and caches state offline so a dropped network never corrupts the catalog. On top of that, it had to fingerprint quality, track multiple versions of the same title, and keep a continuously-changing library consistent in real time — all while keeping the underlying database encrypted.

## What makes it game-changing
Catalogizer collapses a fragmented, multi-protocol storage estate into one coherent, queryable, analytics-rich system. It does the things commercial media managers refuse to: speak SMB, FTP, NFS, WebDAV and local filesystem interchangeably; sync to Amazon S3 and Google Cloud Storage; export professional PDF reports with charts and growth trends; convert documents; and import/export favorites in JSON and CSV. Because the database is SQLCipher-encrypted and access is JWT-secured with role-based control, it's safe to run for a household or an organization. It is an open, self-hosted answer to "where is all my stuff, and what is it?"

## How we solved the hardest parts
The architecture is deliberately modular: a Go REST API at the core, an encrypted SQLCipher store beside it, a real-time WebSocket layer feeding the React frontend, and a dedicated media-detection engine fronting a pluggable multi-protocol filesystem abstraction. That separation is what makes protocol resilience possible — the detection engine never assumes a source is reachable, so a flapping SMB mount degrades to offline cache instead of failure. External metadata integration is treated as an enrichment pipeline rather than a hard dependency, so providers can be slow, partial or absent without blocking ingestion. Quality analysis and version tracking run as first-class passes over detected media, giving the catalog the ability to say "you have this film three times, and this is the best copy." The engineering discipline behind it is real: the project is governed by a written CONSTITUTION mandating 100% test coverage and a full-QA master cycle, with security audits baked into the release process — the difference between a hobby scanner and something you can trust with your entire collection.
