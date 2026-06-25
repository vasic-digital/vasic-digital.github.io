---
title: Server Factory Core Framework
slug: server-factory-core-framework
repo: https://github.com/Server-Factory/Core-Framework
tech: Kotlin
teaser: "The shared engine behind the Server Factory ecosystem — reusable components and patterns that make automated server provisioning consistent."
---

## Kukica

Iza svakog pouzdanog alata za automatizaciju stoji temelj koji niko ne vidi. Server Factory Core Framework je taj temelj – višekratno upotrebljivi Kotlin pogon koji pokreće alate poput Mail Server Factoryja, dajući čitavom ekosistemu Server Factory jedinstvenu, konzistentnu kičmu za izgradnju aplikacija zasnovanih na serverima.

## Zašto je fascinantno

Većina automatizacije infrastrukture je gomila jednokratnih skripti koje se vremenom razilaze. Server Factory je krenuo suprotnim putem: izdvojio je zajedničku mašineriju – modularan dizajn, centralizovano evidentiranje, deljene uslužne programe, upravljanje uzvodnim resursima – u Core Framework, a zatim na njemu gradio svaki alat za provizioniranje. Zato alati u ekosistemu deluju koherentno: nasleđuju iste arhitektonske obrasce i isto pouzdano postrojenje. To je način razmišljanja o okvirima primenjen na neugledan, ali kritičan svet implementacije servera.

## Teški problemi

Dizajniranje okvira na kojem mogu da se grade različiti alati u osnovi je teže od izrade bilo kog pojedinačnog alata. Morate da predvidite šta će aplikacijama za provizioniranje servera biti zajedničko – evidentiranje koje se dosledno ponaša, uslužne programe koji ne propuštaju pretpostavke, model upravljanja uzvodnim resursima koji odgovara mnogim servisima – a da pritom ne previše ograničite alate koji od vas zavise. Pogrešite u apstrakcijama i svaki alat koji ih koristi naslediće grešku; pogodite ih kako treba i ubrzaćete sve odjednom. Održavanje tog temelja kako ekosistem raste, a istovremeno čuvanje stabilnosti korisnika, predstavlja stalnu disciplinu.

## Šta ga čini revolucionarnim

Core Framework je poluga. Pošto se teški, zajednički delovi nalaze na jednom mestu, svaka nova fabrika – za mejl, veb servise, keširajuće proksije, SonarQube i još mnogo toga – počinje sa dokazanim osnovama umesto sa praznom datotekom. Konzistentnost širom ekosistema znači manje održavanja, manje iznenađenja i ujednačeno operativno iskustvo, bez obzira na to šta provizionirate. Kao otvoreni kod, on takođe dokumentuje čist, višekratno upotrebljiv obrazac za svakoga ko gradi sopstvene alate za automatizaciju servera: razdvojite zajednički pogon od specifičnog alata.

## Kako smo rešili najteže delove

Okvir namerno koncentriše poprečne aspekte – evidentiranje, uslužne programe, modularnu strukturu i upravljanje uzvodnim resursima – tako da pojedinačne fabrike nikada ne moraju da ih ponovo implementiraju. Taj modularan dizajn je mehanizam koji održava konzistentnost korisnika: oni komponuju delove okvira umesto da ih kopiraju. Dokaz je sam ekosistem. Mail Server Factory i njegove sestrinske fabrike sve stoje na ovom temelju, što znači da su apstrakcije okvira potvrđene stvarnim, proizvodno orijentisanim alatima za provizioniranje, a ne zamišljene u izolaciji. Vrednost okvira ne meri se brojem funkcija, već time koliko omogućava alatima iznad sebe da preskoče.
