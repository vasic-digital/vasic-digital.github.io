---
title: Panoptic
slug: panoptic
repo: https://github.com/vasic-digital/Panoptic
tech: Go, multi-platform UI automation
teaser: "One automation framework that drives, records and screenshots web, desktop and mobile apps — turning QA evidence into a first-class output."
---
## Kuka
Većina alata za testiranje staje na "prošao" ili "nije prošao." Panoptic vam pokazuje tačno šta se dogodilo: upravlja vašom aplikacijom, snima ekran, hvata vremenski označene snimke ekrana i daje vam vizuelne dokaze. To je automatsko testiranje koje proizvodi trag dokaza koji možete zaista gledati.

## Zašto je zanimljivo
Panoptic je jedan, sveobuhvatan Go okvir koji automatski testira web, desktop i mobilne aplikacije preko jednog interfejsa. Automatsko testiranje korisničkog interfejsa preko tih tri sveta obično znači tri različita alata, tri seta veština i tri krhke integracije. Panoptic ujedinjuje njih — detekciju i interakciju elemenata, visokokvalitetno snimanje ekrana i potpuno video snimanje — tako da jedan strategija testiranja obuhvata celu površinu vašeg proizvoda. Ta širina, dostavljena u brzom, lako-zavisnom Go-u, je ono što ga izdvaja.

## Teški problemi
Automatsko testiranje korisničkog interfejsa preko platformi je jedan od najmanje oprostivih domena u softveru. Web DOM-ovi, nativni desktop vidžeti i mobilne hijerarhije prikaza eksponuju elemente potpuno drugačije, a vreme je svuda — animacije, asinhrono učitavanje, tranzicije. Pouzdano pronalaženje i interakcija sa elementom, zatim snimanje čistog, tačno-vremenskog snimka ekrana ili glatke snimanje rezultata, zahteva rešavanje sinhronizacije, renderovanja i platform-abstrakcije problema istovremeno. Činjenje toga bez nestalnih testova — prokletstvo svake automatske suite — je prava prepreka.

## Šta ga čini revolucionarnim
Panoptic premešta izlaz QA. Umesto neprozirnih logova, dobijate vizuelni regresioni materijal: snimke ekrana i snimanja koja čine neuspehe samima sebi objašnjivim i pregledima brzim. Pokrivajući web, desktop i mobilne aplikacije iz jednog okvira, omogućava timovima da standardizuju celu pristup automatskom testiranju umesto održavanja patchwork-a. I zato što je napisan u Go-u, on se raspoređuje kao mršav, brz, portable binarni fajl koji se prirodno uklapa u CI pipeline i headless okruženja.

## Kako smo rešili najteže delove
Okvir je organizovan oko platform-agnostičnog automatskog jezgra sa platform-specifičnim vozačima iza njega, tako da autor testa radi protiv konzistentnog modela dok Panoptic rukuje neskladnim razlikama između pretraživača, desktop prozora i mobilnog ekrana. Snimanje ekrana i video zapisa su izgrađeni kao primitivni umesto naknadnih misli, što je ono što omogućava bogat vizuelni dokaz koji drugi alati nemaju. Iste snimanje i difanje kapaciteta koji pokreću sopstveno QA — projekat isporučuje ponovno upotrebljive vizuelne-regresione, screen-diff i replay-buffer module — čine Panoptic osnovom na kojoj se mogu graditi drugi test sistemi, a ne samo samostalni runner.
