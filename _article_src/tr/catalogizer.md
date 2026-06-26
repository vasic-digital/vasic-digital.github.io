---
title: Catalogizer
slug: catalogizer
repo: https://github.com/vasic-digital/Catalogizer
tech: Go, Gin, React, TypeScript, SQLCipher, WebSocket
teaser: "One library, every protocol: Catalogizer finds, identifies and organizes 50+ media types across SMB, FTP, NFS, WebDAV and local disk."
---

## Kanca

Çoğu insanın medya dosyaları her yerde birden bulunur — burada bir NAS paylaşımı, şurada bir FTP arşivi, bir WebDAV bağlaması, bir de yerel sürücü yığını. **Catalogizer**, tüm bunları tek bir aranabilir, otomatik güncellenen kütüphane olarak ele alır. Depolama birimlerinizi gösterin, o da tüm koleksiyonunuzu keşfeder, tanımlar, zenginleştirir ve sürekli izler; artık bir daha elektronik tabloyla uğraşmanıza gerek kalmaz.

## Neden büyüleyici?

**Catalogizer**, bir klasör tarayıcısına monte edilmiş bir medya oynatıcı değildir. O, bir medya zekâ motorudur. Otomatik olarak 50’den fazla medya türünü —film, dizi, müzik, oyun, yazılım, belgesel ve daha fazlasını— tanır, ardından TMDB, IMDB, TVDB, MusicBrainz, Spotify ve Steam gibi harici kaynaklara ulaşarak zengin ve doğru üst veriler ekler. Sonuç, dosyaların sadece nerede durduğunu değil, gerçekte ne olduğunu bilen bir katalogdur. Modern bir React + TypeScript web arayüzü, WebSocket üzerinden her şeyi canlı tutarken, Gin çerçevesi üzerinde çalışan yüksek performanslı bir Go arka ucu da ağır işleri üstlenir.

## Zorlu sorunlar

Farklı protokoller üzerinden kataloglama, görünenden çok daha acımasız olabilir. SMB paylaşımları tarama sırasında kaybolur, FTP bağlantıları zaman aşımına uğrar, NFS macOS’ta diğer platformlardan farklı davranır, üst veri sağlayıcıları ise sınırlama getirir, çelişir ya da hiçbir şey döndürmez. Basit bir tarayıcı, tek bir bağlamanın kesilmesiyle çöker. **Catalogizer**, tasarım gereği dayanıklı olmak zorundaydı: Geçici SMB bağlantı kesilmelerini zarifçe yönetir, otomatik olarak yeniden bağlanır ve ağ bağlantısı kesilse bile katalogu bozmamak için durumu çevrimdışı olarak önbelleğe alır. Bunun da ötesinde, kalite parmak izi çıkarır, aynı başlığın birden fazla sürümünü takip eder ve sürekli değişen bir kütüphaneyi gerçek zamanlı olarak tutarlı hale getirir — tüm bunları, altında yatan veritabanını şifreli tutarken yapar.

## Oyunu değiştiren özellikler

**Catalogizer**, parçalanmış, çok protokollü bir depolama altyapısını tek bir tutarlı, sorgulanabilir ve analiz açısından zengin bir sisteme dönüştürür. Ticari medya yöneticilerinin yapmaktan kaçındığı her şeyi yapar: SMB, FTP, NFS, WebDAV ve yerel dosya sistemleri arasında sorunsuz geçiş yapar; Amazon S3 ve Google Cloud Storage’a senkronize olur; grafikler ve büyüme eğilimleri içeren profesyonel PDF raporları oluşturur; belgeleri dönüştürür; favorileri JSON ve CSV formatlarında içe/dışa aktarır. Veritabanı SQLCipher ile şifrelenmiş, erişim ise rol tabanlı JWT güvenliğiyle korunmuş olduğundan, hem bir hane hem de bir kuruluş için güvenle çalıştırılabilir. "Tüm dosyalarım nerede ve bunlar tam olarak ne?" sorusuna açık, kendi sunucunuzda barındırabileceğiniz bir yanıttır.

## En zor kısımları nasıl çözdük?

Mimari, kasıtlı olarak modüler tasarlanmıştır: Merkezde bir Go REST API, yanında şifreli bir SQLCipher deposu, gerçek zamanlı WebSocket katmanıyla beslenen bir React ön ucu ve çok protokollü bir dosya sistemi soyutlamasıyla desteklenen ayrı bir medya tespit motoru bulunur. Bu ayrım, protokol dayanıklılığını mümkün kılan şeydir — tespit motoru, bir kaynağın erişilebilir olduğunu varsaymaz, bu yüzden titreyen bir SMB bağlaması, başarısızlık yerine çevrimdışı önbelleğe geçer. Harici üst veri entegrasyonu, katı bir bağımlılık olarak değil, bir zenginleştirme hattı olarak ele alınır; bu sayede sağlayıcılar yavaş, eksik ya da hiç yanıt vermese bile tarama engellenmez. Kalite analizi ve sürüm takibi, tespit edilen medya üzerinde birinci sınıf işlemler olarak çalışır ve kataloga "bu filmi üç kez elinde bulunduruyorsun ve en iyi kopyası bu" diyebilme yeteneği kazandırır. Projenin arkasındaki mühendislik disiplini gerçektir: Proje, %100 test kapsamı ve tam kalite güvence döngüsü zorunlu kılan yazılı bir ANAYASA ile yönetilir; güvenlik denetimleri ise yayın sürecine entegre edilmiştir. Bu, tüm koleksiyonunuza güvenebileceğiniz bir araç ile hobi amaçlı bir tarayıcı arasındaki farktır.
