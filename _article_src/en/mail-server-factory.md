---
title: Mail Server Factory
slug: mail-server-factory
repo: https://github.com/Server-Factory/Mail-Server-Factory
tech: Kotlin, Shell, Docker, Postfix, Dovecot, Rspamd, ClamAV, QEMU
teaser: "Run your mail server like the boss: describe it in JSON, deploy it anywhere — across many OS targets and connection types — fully hardened."
---

## The hook
Self-hosting email is famously a rite of passage that breaks most people: Postfix, Dovecot, spam filtering, antivirus, TLS, DNS, and a dozen ways to get it subtly wrong. Mail Server Factory replaces all of that pain with a single idea — describe the server you want in JSON, and let the factory build and harden it for you. "Run Your Mail Server Like The Boss."

## Why it's fascinating
Mail Server Factory is a production-ready automated mail-server provisioning tool that turns a declarative configuration into a fully assembled, secured email stack. It assembles the hard-won pieces — Postfix for SMTP, Dovecot for IMAP, Rspamd for spam, ClamAV for antivirus — into one coherent deployment, with enterprise security and monitoring baked in. It can target a wide range of operating systems and reach them over many different connection types — SSH, Docker, Kubernetes, AWS SSM, Azure, GCP, libvirt and more — so the same configuration deploys to almost any environment. It even uses QEMU virtualization to test across distributions.

## The hard problems
Mail is one of the least forgiving systems to operate: a single misconfiguration means undelivered mail, an open relay, or a server that lands on a blocklist. Automating it correctly across many OS distributions multiplies the difficulty — package names, paths, init systems and defaults all differ. Then there's security, which can't be an afterthought for email: strong encryption, modern TLS, spam and malware filtering all have to be configured correctly every time. And verifying that automation actually works across all those targets requires a test strategy most projects never attempt — which is why a virtualization-based testing approach and a large passing test suite matter so much here.

## What makes it game-changing
Mail Server Factory democratizes something that was effectively gatekept by deep sysadmin expertise. A JSON description plus the factory equals a hardened, monitored, production-grade mail server — repeatably. The breadth of connection types means it fits modern infrastructure as naturally as a bare VM: deploy via Docker, into Kubernetes, through a cloud SSM channel, or onto a libvirt VM. That portability, combined with a built-in security framework, makes it a genuinely practical path to owning your own email instead of renting it.

## How we solved the hardest parts
The design separates "what you want" (declarative JSON configuration) from "how to build it everywhere" (the implementation engine), which is what lets one configuration deploy across many OS targets. Multi-distribution correctness is tackled with QEMU virtualization for testing, so the factory's output is validated against real systems rather than assumed — backed by a substantial passing test suite. Containerization with Docker and a curated stack (Postfix, Dovecot, Rspamd, ClamAV) standardizes the moving parts, while the security framework enforces strong encryption and TLS by default. Supporting a dozen connection types — from SSH to cloud and Kubernetes — turns the tool from "works on my server" into "deploys to your infrastructure," whatever that infrastructure happens to be.
