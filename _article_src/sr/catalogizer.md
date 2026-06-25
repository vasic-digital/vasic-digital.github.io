---
title: Catalogizer
slug: catalogizer
repo: https://github.com/vasic-digital/Catalogizer
tech: Go, Gin, React, TypeScript, SQLCipher, WebSocket
teaser: "One library, every protocol: Catalogizer finds, identifies and organizes 50+ media types across SMB, FTP, NFS, WebDAV and local disk."
---
## Kuka
Većina ljudi ima medijski život svuda i nigde — deljeni NAS fajl, arhiva FTP, WebDAV montaža, stek lokalnih diskova. Catalogizer tretira sve to kao jedinstvenu, pretraživu, samoodržavajuću biblioteku. Ukazaćete ga na vaše skladište i on će otkriti, identifikovati, obogatiti i pratiti vašu celokupnu kolekciju bez ikakvog dodira sa tabele iznova.

## Zašto je fascinirajući
Catalogizer nije medijski plejer prikačen za pretraživač foldera. On je medijski inteligentni motor. Automatski prepoznaje preko 50 vrsta medija — filmova, TV, muzike, igara, softvera, dokumentarnih filmova i još — a onda se obraća spoljnim autoritetima kao što su TMDB, IMDB, TVDB, MusicBrainz, Spotify i Steam da bi prikačio bogate, tačne metapodatke. Rezultat je katalog koji zna šta je svaki fajl zaista, a ne samo gde se nalazi. Moderni React + TypeScript veb interfejs čuva sve živahno preko WebSocket-a, dok visokoefikasni Go backend na Gin okviru obavlja tešku radnu snagu.

## Teški problemi
Katalogizacija preko protokola je varljivo brutalna. SMB deljenja nestaju tokom skeniranja, FTP veze ističu, NFS se ponaša drugačije na macOS-u nego negde drugde, a pružaoci metapodataka ograničavaju brzinu, ne slažu se ili ne vraćaju ništa. Naivni skenerer padne čim jedan mount bledi. Catalogizer je morao biti otporan po dizajnu: on uzdržljivo rukuje privremenim SMB prekidima, automatski se ponovo spaja i kešira stanje vanmrežno tako da prekinuta mreža nikad ne korumpira katalog. Pored toga, morao je da otisne kvalitet, pratiti više verzija istog naslova i održavati stalno menjajući se biblioteku konzistentnu u realnom vremenu — sve to uz održavanje osnovne baze podataka šifrirane.

## Šta ga čini revolucionarnim
Catalogizer sabija fragmentiranu, multi-protokolnu skladišnu imovinu u jedan koherentan, upitni, analitički bogati sistem. On radi stvari koje komercijalni medijski menadžeri odbijaju: govori SMB, FTP, NFS, WebDAV i lokalni fajl sistem naizmenično; sinhronizuje sa Amazon S3 i Google Cloud Storage; izvozi profesionalne PDF izveštaje sa grafikonima i trendovima rasta; konvertuje dokumente; i uvozi/izvozi favorite u JSON i CSV. Zbog toga što je baza podataka SQLCipher-šifrirana i pristup je JWT-zaštićen sa kontrolom uloga, sigurno je pokrenuti ga za kućanstvo ili organizaciju. On je otvoren, samohostovani odgovor na "gde je sve moja stvar, i šta je to?"

## Kako smo rešili najteže delove
Arhitektura je namerno modularna: Go REST API u jezgru, šifrirana SQLCipher trgovina pored njega, real-time WebSocket sloj koji hrani React frontend, i posvećeni medijski-detekcioni motor koji se suočava sa multi-protokolnom apstrakcijom fajl sistema. Ta separacija je ono što čini mogućom otpornost protokola — detekcioni motor nikad ne pretpostavlja da je izvor dosegljiv, tako da SMB mount koji fluktuiše degradira u vanmrežni keš umesto neuspeha. Spoljna integracija metapodataka tretira se kao bogatilačka pipeline umesto tvrdih zavisnosti, tako da pružaoci mogu biti spori, delimični ili odsutni bez blokiranja ingestije. Analiza kvaliteta i praćenje verzija teku kao prve klase preko detektovanih medija, dajući katalogu mogućnost da kaže "imaš ovaj film tri puta, i ovo je najbolja kopija." Inženjerska disciplina iza toga je stvarna: projekt je upravljao pisanom USTAVOM koji nalaže 100% pokrivenost testova i puno-QA master ciklus, sa sigurnosnim auditima ugrađenim u proces izdavanja — razlika između hobi skenera i nečega čime se može verovati cela vaša kolekcija.
