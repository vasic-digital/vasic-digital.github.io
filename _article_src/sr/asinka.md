---
title: Asinka
slug: asinka
repo: https://github.com/vasic-digital/Asinka
tech: Kotlin
teaser: "Keep objects in sync across separate processes — thread-safe, efficient, and invisible, so independent apps behave like one."
---
## Kuka
Dva procesa, jedan izvor istine. Asinka (Asinka) je biblioteka za sinhronizaciju objekata između procesa visokih performansi koja omogućava nezavisnim aplikacijama da dele stanje u realnom vremenu kao da su jedan program — bez krhke glavnog koda, bez uslova trke, bez pokušaja.

## Zašto je fascinirajuće
Komunikacija između procesa je jedan od onih problema koji zvuči jednostavno i ispostavlja se kao minsko polje. Asinka se suočava sa time direktno sa fokusiranim Kotlin bibliotekom čiji je jedini posao da omogući objektima u jednom procesu pouzdano odražavaju promene u drugom. Ta mogućnost tiho otkiva moćne arhitekture: pratilne aplikacije koje ostanu u koraku, dodaci koji dele podatke sa domaćinom, ili saradničke usluge na istoj mašini koje trebaju dosledan pogled na zajedničke objekte bez ponovnog implementiranja sinhronizacije svaki put.

## Teški problemi
Sinhronizacija promenljivih objekata preko granica procesa je teška iz razloga koji ujedu tokom vremena izvršavanja, a ne tokom vremena kompilacije. Morate serializovati i pomiriti stanje, obrađivati istovremene ažuriranja sa obe strane bez oštećenja podataka i učiniti sve to dovoljno efikasno da sinhronizacija nije sporija od rada koji podržava. Sigurnost niti je neophodna — dva procesa koji menjaju zajedničko stanje su upravo scenario koji proizvodi heizenbugove. I mora ostati robustan kada je jedna strana spora, zauzeta ili privremeno nedostupna.

## Šta je revolucionarno
Asinka pretvara ponavljajući, sklon greškama posao u zavisnost koju samo dodate. Pružajući sigurnu, efikasnu sinhronizaciju objekata kao ponovno upotrebljivu građevinsku jedinicu, omogućava developerima da dizajniraju sistemi sa više procesa koji su prethodno bili previše rizični ili previše skupi za pokušaj. Podiže IPC sa ručno napravljenog, sklonog greškama messaginga u čistu, objekt-nivo apstrakciju — menjaš objekt ovde, on je ispravan tamo. To je značajan pomak u tome kako saradničke aplikacije mogu biti izgrađene.

## Kako smo rešili najteže delove
Biblioteka je dizajnirana oko sigurnog istovremenog pristupa od samog početka, tako da su istovremene mutacije pomirene umesto trčane. Deljenje stanja je modelirano na nivou objekata, dajući developerima intuitivan mentalni model — oni razmišljaju o objektima, a ne o protokolima za žicu — dok Asinka rukuje serializacijom i propagacijom ispod. Efikasnost se tretira kao prvorazredni zahtev, čuvajući sinhronizacijski sloj dovoljno lagan da sedi u vrućem putu stvarnih aplikacija. Isplata je mala, oštra alatka koja čini jednu zaista tešku stvar dobro.
