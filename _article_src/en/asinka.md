---
title: Asinka
slug: asinka
repo: https://github.com/vasic-digital/Asinka
tech: Kotlin
teaser: "Keep objects in sync across separate processes — thread-safe, efficient, and invisible, so independent apps behave like one."
---

## The hook
Two processes, one source of truth. Asinka (Асинка) is a high-performance interprocess object synchronization library that lets independent applications share live state as if they were a single program — no fragile glue code, no race conditions, no guessing.

## Why it's fascinating
Interprocess communication is one of those problems that sounds simple and turns out to be a minefield. Asinka tackles it head-on with a focused Kotlin library whose entire job is to make objects in one process reliably reflect changes in another. That capability quietly unlocks powerful architectures: companion apps that stay in lockstep, plugins that share data with a host, or cooperating services on the same machine that need a consistent view of shared objects without reimplementing synchronization every time.

## The hard problems
Synchronizing mutable objects across process boundaries is hard for reasons that bite at runtime, not compile time. You have to serialize and reconcile state, handle concurrent updates from both sides without corrupting data, and do it all efficiently enough that the synchronization isn't slower than the work it supports. Thread safety is non-negotiable — two processes mutating shared state is exactly the scenario that produces heisenbugs. And it must stay robust when one side is slow, busy, or briefly unavailable.

## What makes it game-changing
Asinka turns a recurring, error-prone chore into a dependency you just add. By providing thread-safe, efficient object sync as a reusable building block, it lets developers design multi-process systems that were previously too risky or too costly to attempt. It elevates IPC from hand-rolled, bug-prone messaging into a clean, object-level abstraction — you change an object here, it's correct over there. That's a meaningful shift in how cooperating applications can be built.

## How we solved the hardest parts
The library is engineered around safe concurrent access from the ground up, so simultaneous mutations are reconciled rather than raced. State sharing is modeled at the object level, giving developers an intuitive mental model — they reason about objects, not wire protocols — while Asinka handles the serialization and propagation underneath. Efficiency is treated as a first-class requirement, keeping the synchronization layer lightweight enough to sit in the hot path of real applications. The payoff is a small, sharp tool that does one genuinely difficult thing well.
