---
title: HelixTranslate
slug: helixtranslate
repo: https://github.com/HelixDevelopment/HelixTranslate
tech: Go, REST, HTTP/3, WebSocket, SSH workers
teaser: "Translate any ebook, any format, into any language — with multiple engines, an HTTP/3 API, and live WebSocket monitoring of every job."
---

## Kanca

Kitaplar dil ve formata hapsolmuş durumda. HelixTranslate onları özgürleştiriyor: Herhangi bir e-kitap formatını alıp herhangi bir dil çiftine çeviren, yüksek performanslı, kurumsal düzeyde bir araç seti. Gerçek zamanlı bir kontrol paneliyle tüm çeviri işlemlerini canlı olarak izleyebilirsiniz.

## Neden büyüleyici?

HelixTranslate, ciddi bir işlem gücü için Go ile geliştirildi ve evrensel bir çeviri hattıyla kapsamlı bir izleme sistemini bir araya getiriyor. Birden fazla çeviri motorunu destekliyor, modern bir REST API sunuyor (HTTP/3 desteğiyle) ve her olayı — ilerleme, hatalar, tamamlanma — WebSocket üzerinden etkileşimli bir web paneline aktarıyor. Ağır işleri uzak SSH çalışanlarına devredebiliyor ve OpenAI, Anthropic, DeepSeek gibi sağlayıcılar aracılığıyla gerçek LLM çevirisi entegrasyonu sunuyor. "Her şeyi çevir" ile "her şeyi anında gör" kombinasyonu, onu özel kılan şey.

## Zorlu sorunlar

Evrensel e-kitap çevirisi, üst üste binmiş iki zorlu sorun demek. İlki, formatlar: E-kitaplar son derece farklı yapılarda gelir ve dili değiştirirken düzeni, yapıyı ve anlamı korumak hassas bir iştir. İkincisi, ölçek ve gözlemlenebilirlik: Çeviri yavaş, pahalı ve hata yapmaya meyillidir; bu yüzden birçok oturumu eş zamanlı yürütmek, her birini gerçek zamanlı olarak izlemeyi — canlı ilerleme, anında hata tespiti, oturum bazlı takip — gerektirir. Yoksa tüm süreç opak bir kara kutuya dönüşür. Bu işi uzak SSH çalışanlarına dağıtmak, koordinasyon ve izleme zorluklarını daha da artırır.

## Oyun değiştirici olan ne?

HelixTranslate, büyük ölçekli, çok motorlu çeviriyi yönetilebilir hale getiriyor. Gerçek zamanlı izleme sistemi sayesinde uzun süren işlemler sırasında asla kör uçuş yapmıyorsunuz — ilerleme çubuklarını, olay günlüklerini ve çalışan durumlarını anında görüyorsunuz; hatalar da iş bittikten sonra değil, oluştuğu anda ortaya çıkıyor. Birden fazla motor ve LLM sağlayıcısını soyutlayarak, tek bir çeviri altyapısına bağımlılığı önlüyor ve her iş için en iyi aracın kullanılmasını sağlıyor. HTTP/3 API ve WebSocket olay akışı, onu modern, entegrasyona hazır bir hizmet haline getiriyor; tek seferlik bir betik olmaktan çıkarıyor.

## En zor kısımları nasıl çözdük?

Mimari, çeviri CLI/motorunu özel bir izleme sunucusundan net bir şekilde ayırıyor: Çeviri işleri, WebSocket olayları yayarak merkezi bir izleyiciye ulaşıyor; bu izleyici de olayları canlı bir web paneline dağıtıyor. Bu olay odaklı tasarım, ağır çeviri işlerini kullanıcı arayüzüne bağlamadan gerçek zamanlı görünürlük sağlıyor. Birden fazla strateji — demo, sahte-LLM ve SSH çalışan modları — aynı izlenen hattın simüle edilmiş veya gerçek arka uçlara karşı çalışmasını sağlıyor; bu da dağıtık davranışları güvenli bir şekilde test etmeyi mümkün kılıyor. Sağlayıcı entegrasyonu tak-çalıştır özelliğine sahip; yeni bir çeviri motoru veya LLM eklemek, yeniden yazım değil, bir uzantı işi. SSH çalışan desteği de sistemin tek bir makine yetersiz kaldığında yatay olarak ölçeklenmesini sağlıyor.
