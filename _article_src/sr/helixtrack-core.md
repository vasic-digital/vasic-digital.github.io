---
title: HelixTrack Core
slug: helixtrack-core
repo: https://github.com/Helix-Track/Core
tech: Go, Gin, SQLCipher, REST
teaser: "An open-source JIRA alternative built in Go for extreme performance — full agile tracking, hierarchical permissions, and an encrypted core."
---
## Kuka
Pratiti projekte postalo je sporo, skupo i zaključano. HelixTrack Core je pobijanje tog stanja: proizvodno spremni, open-source alat za praćenje problema napravljen u Go-u za ozbiljan protok, opisan kao "alternativa JIRA-u za slobodni svet." To je srce moderne platforme za upravljanje projektima — brzo, sigurno i vaš.

## Zašto je zanimljivo
HelixTrack Core je REST API mikroservis koji cilja da učini sve što i teški komercijalni alat za praćenje — potpuno praćenje problema, agilne i skrum radne tokove, upravljanje timom, hijerarhijski motor za dozvole — a da ostane lean, samohostujući i otvoren. Cilja ekstremne performanse sa odgovorima ispod milisekunde i visokoprotočnim dizajnom, a zaštita podataka u mirovanju se vrši pomoću SQLCipher šifriranja. Oko ovog jezgre se nalazi cela linija proizvoda klijenata za web, desktop, mobilne uređaje i šire, svi koji komuniciraju sa istim brzim, dobro definisanim API-jem.

## Teški problemi
Zamena ukorenjenog enterprise alata je jedan od najtežih poslova u softveru, jer "paritet funkcija" je ogroman i korisnici ga očekuju da bude nevidljivo brz. Praćenje problema je varljivo duboko: radni tokovi, odnosi između stavki, agilne table i model dozvola koji mora biti i granularan i tačan. Hijerarhijske dozvole su posebno klasičan izvor bagova i sigurnosnih rupa — dobijanje kontrole pristupa preko ugnježdenih timova i projekata, sa visokim stopama zahteva, bez usporavanja sistema, zaista je teško. Zatim morate to sve uraditi iza čistog REST API-ja na koji se mogu oslanjati mnogi različiti klijenti.

## Šta ga čini revolucionarnim
HelixTrack Core daje organizacijama verodostojan izlazak iz skupog, vlasničkog praćenja. Zato što je napravljen u Go-u i samohostujući, može se pokrenuti na vašoj sopstvenoj infrastrukturi, šifriran, bez takse po sedištu i bez zaključavanja kod dobavljača. Arhitektura — brzi, usredsređeni backend sa odvojenim ekosistemom klijenata — znači da timovi mogu usvojiti platformu na bilo kojoj površini koju preferiraju, a da dele jedan izvor istine. To je open source usmeren upravo na slobodu i performanse koje komercijalni trackeri ne nude.

## Kako smo rešili najteže delove
Odlučujući izbor je bio mikroservisni jezgru u Go-u na Gin okviru: jedan, visokoperformansni backend koji poseduje model podataka i izlaže sveobuhvatan REST API, sa svim klijentima platforme izgrađenim oko njega, a ne u njemu. Ta separacija je ono što čini i performanse i multi-platformski dosežnost postižu — jezgro se može optimizovati bez milosti, dok klijenti evoluiraju nezavisno. Sigurnost je strukturna, a ne dodata: SQLCipher šifruje skladište podataka, a motor za dozvole je hijerarhijski po dizajnu. Širina okolne linije klijenata (web, desktop, Android, iOS i više) je dokaz da je API ugovor u centru dovoljno čvrst da se na njemu gradi cela porodica proizvoda.
