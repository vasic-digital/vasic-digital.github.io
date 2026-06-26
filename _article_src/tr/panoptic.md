---
title: Panoptic
slug: panoptic
repo: https://github.com/vasic-digital/Panoptic
tech: Go, multi-platform UI automation
teaser: "One automation framework that drives, records and screenshots web, desktop and mobile apps — turning QA evidence into a first-class output."
---

## Kanca
Çoğu test aracı "başarılı" ya da "başarısız" ile yetinir. Panoptic ise tam olarak ne olduğunu gösterir: uygulamanızı çalıştırır, ekranı kaydeder, zaman damgalı ekran görüntüleri alır ve size izleyebileceğiniz görsel kanıtlar sunar. İzini sürülebilir bir kanıt akışı üreten otomatik bir testtir.

## Neden büyüleyici?
Panoptic, web, masaüstü ve mobil uygulamaları tek bir arayüz üzerinden otomatikleştiren kapsamlı bir Go çatısıdır. Bu üç dünyada kullanıcı arayüzü otomasyonu genellikle üç farklı araç zinciri, üç farklı beceri seti ve üç kırılgan entegrasyon anlamına gelir. Panoptic, bunları birleştirir — öğe tespiti ve etkileşimi, yüksek kaliteli ekran görüntüsü yakalama ve tam video kaydı — böylece tek bir test stratejisi ürününüzün tüm yüzeyini kapsar. Bu genişlik, hızlı ve bağımlılıkları az olan Go ile sunulduğunda onu öne çıkaran şeydir.

## Zorlu sorunlar
Çapraz platform kullanıcı arayüzü otomasyonu, yazılım dünyasının en affetmeyen alanlarından biridir. Web DOM’ları, yerel masaüstü bileşenleri ve mobil görünüm hiyerarşileri öğeleri tamamen farklı şekillerde sunar; zamanlama ise her yerde karşınıza çıkar — animasyonlar, asenkron yüklemeler, geçişler. Bir öğeyi güvenilir şekilde bulup etkileşime geçmek, ardından temiz, doğru zamanlanmış bir ekran görüntüsü ya da sonucun akıcı bir kaydını almak, eşzamanlama, render ve platform soyutlama sorunlarını aynı anda çözmeyi gerektirir. Bunu, her otomasyon paketinin laneti olan güvenilmez testler olmadan başarmak ise gerçek ölçüttür.

## Oyunu değiştiren özellik
Panoptic, kalite güvencesi çıktısını yeniden tanımlar. Anlaşılmaz günlükler yerine, hataları kendiliğinden açıklayan ve incelemeleri hızlandıran görsel regresyon materyalleri elde edersiniz: ekran görüntüleri ve kayıtlar. Web, masaüstü ve mobil uygulamaları tek bir çatı altında toplayarak ekiplerin, parçalı bir yapı yerine tüm otomatik test yaklaşımını standartlaştırmasını sağlar. Go ile yazıldığı için de CI boru hatlarına ve headless ortamlara doğal olarak uyum sağlayan, hızlı ve taşınabilir bir ikili dosya olarak dağıtılır.

## En zor kısımları nasıl çözdük?
Çatı, platformdan bağımsız bir otomasyon çekirdeği etrafında yapılandırılmış olup arkasında platforma özel sürücüler bulunur. Böylece test yazarı tutarlı bir model üzerinde çalışırken, Panoptic bir tarayıcı, masaüstü penceresi ve mobil ekran arasındaki karmaşık farkları yönetir. Ekran görüntüsü ve video yakalama, sonradan akla gelen bir özellik değil, temel bileşenler olarak yerleşik olduğundan, diğer araçların eksikliğini çektiği zengin görsel kanıtları mümkün kılar. Kendi kalite güvencesini güçlendiren aynı kayıt ve fark alma yetenekleri — proje, yeniden kullanılabilir görsel regresyon, ekran farkı ve yeniden oynatma tamponu modülleriyle birlikte sunulur — Panoptic’i, sadece bağımsız bir çalıştırıcı değil, diğer test sistemlerinin üzerine inşa edebileceği bir temel haline getirir.
