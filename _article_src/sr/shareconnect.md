---
title: ShareConnect
slug: shareconnect
repo: https://github.com/vasic-digital/ShareConnect
tech: Kotlin, Android (API 26+), Java 17
teaser: "Share any downloadable URL straight to the right remote or local engine — torrents, downloaders, media servers — from any Android device."
---
## Kuka
Nalazite link na svom telefonu. Kuda treba da ode — vaša torrent kutija, vaš home downloader, vaš Plex server, vaš Nextcloud? ShareConnect odgovara na to sa jednim tapom. To je univerzalni "pošalji ovu URL adresu stvari koja treba da je obrađuje" sloj za celokupan vaš self-hosted ekosistem.

## Zašto je fascinirajuće
ShareConnect nije jedna aplikacija — to je cela porodica konektora ujedinjena pod jednim deljenim iskustvom. On razgovara sa qBittorrent, Transmission, uTorrent, JDownloader, MeTube, yt-dlp, Nextcloud, FileBrowser, Plex, Jellyfin, Emby i još mnogo toga, pretvarajući fragmentiranu zajednicu usluga u koherentan set destinacija. Iz Android deljenog lista, URL je inteligentno usmeren ka tačnom procesnom endpointu, bez obzira da li se tačka nalazi preko sobe ili preko interneta.

## Teški problemi
Svaki backend ima svoj API, model autentifikacije, manje i modele neuspeha. Izgradnja pouzdane mosta ka dvadeset-plus uslugama znači apsorbovanje sve te heterogenosti bez prosipanja do korisnika. Ono što projekat postavlja kao cilj za sebe: ovo je proizvodno Android softver, sa 100% jediničnim, instrumentacionim, automatskim i AI-QA testovima koji se prijavljuju, SonarQube A+ ocena, ~95% pokrivenost koda, gotovo nula tehničkog duga i nema kritičnih sigurnosnih ranjivosti. Držanje dvadeset proizvodno-spremnih aplikacija na tom standardu istovremeno je ozbiljan inženjerski disciplinski problem, a ne samo kodiranje.

## Šta ga čini revolucionarnim
ShareConnect smanjuje trenje samohostovanog životnog stila. Umesto otvaranja svake usluge svoje neudobne web korisničkog interfejsa, delite jednom i sistem čini pravu stvar. Budići otvoreni i bazirani na konektorima, on raste sa vašim stekom — dodajte novi medijski server ili downloader, i ShareConnect može da ga dostigne. On tretira moderni home server ne kao gomilu odvojenih kutija, već kao jedan orkestrirani destinacija, kontrolisan sa uređaja koji već imate u ruci.

## Kako smo rešili najteže delove
Arhitektura je izgrađena oko čistog konektorskog apstrakcije: svaka usluga je implementirana iza zajedničkog interfejsa, tako da jezgro usmeravanja nikad ne mora da zna neuredne specifikacije bilo koje pozadinske strane. Novi konektori se uključuju bez destabilizacije ostatka. Kvalitet se nameće umesto nadanja — projekat pokreće slojevite test suite (jedinice, instrumentacije, krajnje automate, plus AI-vođene QA) i kontrolše izdaje na sigurnosne i kodno-kvalitetne pretrage. Ta rigidnost je razlog zašto projekat koji obuhvata toliko integracija može verodostojno nazvati svaku od njih "proizvodno-spremnom". Moderni Kotlin na Android API 26+ sa Java 17 čuva kodnu bazu aktuelnom i održivom kako konektorska lista raste.
