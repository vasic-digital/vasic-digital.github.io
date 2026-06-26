---
title: ShareConnect
slug: shareconnect
repo: https://github.com/vasic-digital/ShareConnect
tech: Kotlin, Android (API 26+), Java 17
teaser: "Share any downloadable URL straight to the right remote or local engine — torrents, downloaders, media servers — from any Android device."
---

## Kanca
Telefonunda bir bağlantı buldun. Nereye gitmeli — torrent kutuna, ev indiricisine, Plex sunucuna, Nextcloud’a mı? ShareConnect bu soruyu tek dokunuşla yanıtlıyor. Kendi barındırdığın tüm ekosistem için evrensel "bu URL’yi, onunla ilgilenecek şeye gönder" katmanı.

## Neden büyüleyici
ShareConnect tek bir uygulama değil — tek bir paylaşım deneyimi altında birleşmiş bir bağlayıcı ailesi. qBittorrent, Transmission, uTorrent, JDownloader, MeTube, yt-dlp, Nextcloud, FileBrowser, Plex, Jellyfin, Emby ve daha fazlasıyla konuşuyor; birbirinden kopuk hizmetler yığını yerine tutarlı bir hedef kümesine dönüştürüyor. Android paylaşım menüsünden bir URL, odanın öbür ucunda ya da internetin ötesinde olsun, akıllıca doğru işlem noktasına yönlendiriliyor.

## Zorlu sorunlar
Her arka uç, kendi API’sine, kimlik doğrulama modeline, tuhaflıklarına ve hata modlarına sahip. Onlarca hizmet için güvenilir bir köprü kurmak, tüm bu heterojenliği kullanıcıya yansıtmadan emmek demek. Üstelik projenin kendine koyduğu çıta da cabası: Bu, üretim kalitesinde Android yazılımı; %100 birim, enstrümantasyon, otomasyon ve yapay zeka destekli kalite güvence test kapsamı raporlanıyor, SonarQube A+ notu, ~%95 kod kapsamı, neredeyse sıfır teknik borç ve kritik güvenlik açığı yok. Yirmi üretime hazır uygulamayı aynı anda bu standarda taşımak, sadece kodlama değil, ciddi bir mühendislik disiplini sorunu.

## Oyunu değiştiren ne
ShareConnect, kendi barındırdığın yaşam tarzının sürtünmesini ortadan kaldırıyor. Her hizmetin hantal web arayüzünü açmak yerine, bir kez paylaşman yeterli; sistem doğru olanı yapıyor. Açık ve bağlayıcı tabanlı olduğu için, yığınla birlikte büyüyor — yeni bir medya sunucusu ya da indirici eklediğinde, ShareConnect ona da ulaşabiliyor. Modern ev sunucusunu ayrı kutular yığını olarak değil, tek bir orkestralanmış hedef olarak görüyor; elinde zaten olan cihazdan kontrol edilebilir hale getiriyor.

## En zor kısımları nasıl çözdük
Mimari, temiz bir bağlayıcı soyutlaması etrafında inşa edilmiş: Her hizmet, ortak bir arayüzün arkasında uygulanıyor; böylece yönlendirme çekirdeği, herhangi bir arka ucun karmaşık detaylarını bilmek zorunda kalmıyor. Yeni bağlayıcılar, diğerlerini istikrarsızlaştırmadan yerlerine oturuyor. Kalite umut edilmek yerine dayatılıyor — proje, katmanlı test paketleri (birim, enstrümantasyon, uçtan uca otomasyon ve yapay zeka destekli kalite güvencesi) çalıştırıyor ve sürümleri güvenlik ile kod kalitesi taramalarına bağlıyor. Bu titizlik sayesinde, bu kadar çok entegrasyonu kapsayan bir proje, her birini "üretime hazır" olarak adlandırabiliyor. Android API 26+ üzerinde modern Kotlin ve Java 17 ile kod tabanı, bağlayıcı listesinin genişlemesiyle birlikte güncel ve sürdürülebilir kalıyor.
