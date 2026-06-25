---
title: Yole
slug: yole
repo: https://github.com/vasic-digital/Yole
tech: Kotlin, Compose Multiplatform (Android, Desktop, iOS, Web)
teaser: "One editor for everything you write: Markdown, todo.txt, plaintext, math and more — simple, lightweight, and yours across every platform."
---

## The hook
Your notes, your tasks, your drafts — all in one place, in plain, future-proof formats you actually own. Yole is a versatile, lightweight text editor, notes and to-do app that speaks Markdown, todo.txt, plaintext, mathematical notation and more, without trapping a word of your writing in a proprietary silo.

## Why it's fascinating
Yole sits at the intersection of "simple" and "powerful," which is the hardest place to live. It's a no-frills editor that opens fast and gets out of your way, yet it fluently handles structured formats developers and power-note-takers care about: Markdown for documents, todo.txt for task management, math notation for technical writing, plus more. Built in Kotlin and reaching toward Android, Desktop, iOS and Web from a shared codebase, it's a genuinely cross-platform writing tool — and it's already shipping in production on Android, distributed through F-Droid and GitHub.

## The hard problems
Plain-text tools are easy to start and brutal to perfect. Supporting multiple text formats well means real parsing and rendering work — Markdown, todo.txt and math each have their own rules and edge cases — while keeping the app light and instant. Going multiplatform from one Kotlin codebase introduces the challenge of delivering a native-quality experience on Android, desktop, iOS and the web without fragmenting into four divergent apps. And the whole point is restraint: adding capability without sacrificing the speed and simplicity that make a text editor pleasant to use every day.

## What makes it game-changing
Yole gives people a single, portable home for everything they write, in open formats that outlive any app. Because it's built on plain text, your content stays readable and yours forever — no lock-in, no migration anxiety. Its multi-format fluency means one tool can be your notes app, your task manager and your technical scratchpad at once. As open-source software with real distribution on F-Droid, it's a practical, privacy-friendly alternative to the cloud notebooks that want to own your data.

## How we solved the hardest parts
Yole is built with Kotlin and a Compose-based multiplatform approach so a single codebase can target Android, Desktop, iOS and Web — sharing logic and UI while still aiming for a native feel on each. Multi-format support is handled through dedicated parsing and rendering for each text format, so Markdown, todo.txt, plaintext and math each behave correctly rather than being approximated. The project is shipped incrementally and honestly — Android is production and available today, with desktop in beta and iOS and web in active development — which keeps the released experience polished while the platform reach expands. Throughout, the design discipline is to keep the editor simple and fast first, layering capability in formats and features without compromising the core writing experience.
