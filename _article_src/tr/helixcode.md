---
title: HelixCode
slug: helixcode
repo: https://github.com/HelixDevelopment/HelixCode
tech: Go, Gin, PostgreSQL, Redis, SSH, WebSocket, MCP
teaser: "A distributed AI development platform that splits work across machines, never loses progress, and orchestrates LLMs to plan, build, test and refactor."
---

## Kanca

Ya yapay zeka destekli kodlama asistanınız tek bir dizüstü bilgisayarda çalışan tek bir süreç değil de, sahip olduğunuz tüm cihazlara yayılmış, görevleri akıllıca bölen, ilerlemeyi sürekli kaydeden ve çökme durumunda bile çalışmayı bir dakika bile kaybetmeden sürdüren koordineli bir işçi ağı olsaydı? İşte HelixCode tam da bu: Kurumsal düzeyde bir dağıtık yapay zeka geliştirme platformu.

## Neden büyüleyici?

HelixCode, yapay zeka destekli geliştirmeyi bir sohbet robotu olarak değil, dağıtık bir hesaplama problemi olarak ele alıyor. Akıllı görev bölümü ve iş koruması sunarken, Linux, macOS, Windows ve daha fazlasında SSH bağlantılı işçilerden oluşan bir havuzu yönetiyor; planlama, inşa etme, test etme, yeniden yapılandırma gibi tüm geliştirme süreçlerini çoklu sağlayıcı LLM desteğiyle (Llama.cpp, Ollama, OpenAI) yürütüyor. Model Bağlam Protokolü’nü konuşuyor, REST, CLI, terminal arayüzü ve WebSocket istemcilerine erişim sağlıyor; zincirleme düşünme ve ağaç yapılı düşünme gibi ileri akıl yürütme kalıplarını da katmanlıyor. Kısacası, LLM destekli mühendislik için bir işletim sistemi.

## Zorlu sorunlar

Farklı türde makineler arasında gerçek işleri dağıtmak zordur; belirsiz LLM işlerini dağıtmak ise daha da zordur. Görevleri, parçaların çakışmadan paralel çalışabileceği şekilde bölmek, aralarındaki bağımlılıkları takip etmek ve —en önemlisi— bir işçi çalışma sırasında çöktüğünde ilerlemeyi asla kaybetmemek gerekir. Bunun için otomatik kontrol noktaları ve geri alma mekanizmaları, dayanıklı görev durumu ve SSH işçi havuzu genelinde sağlık izleme şarttır. Bunun üzerine bir de LLM katmanı eklenir: Donanıma duyarlı model seçimi, herhangi bir modelin takılıp çıkarılabileceği birleşik bir sağlayıcı arayüzü, araç çağırma ve dağıtık yürütme boyunca tutarlılığını koruması gereken çok adımlı akıl yürütme.

## Oyunu değiştiren özellikler

HelixCode, yapay zeka geliştirmeyi tek bir bağlam penceresi ve tek bir cihazın ötesine taşıyor. LLM destekli işleri, iş kaybı garantisiyle birçok makine arasında koordine ederek, istikrarsız ve baştan başlamayı gerektiren yapay zeka oturumlarını dayanıklı, uzun süreli mühendislik boru hatlarına dönüştürüyor. Kapsamı —tam yaşam döngüsü süreçleri, çoklu istemci erişimi, platformlar arası işçiler, mobil uyumlu çerçeveler, Slack, Discord, e-posta ve Telegram üzerinden çok kanallı bildirimler— onun sadece bireysel bir terminalde değil, gerçek bir ekibin süreçlerinin merkezinde yer alabileceği anlamına geliyor.

## En zor kısımları nasıl çözdük?

Platform katmanlı bir yapı üzerine inşa edildi: Temel hizmetlerin (kimlik doğrulama ve oturum yönetimi, SSH tabanlı işçi havuzu, kontrol noktalarıyla görev yönetimi, proje ve iş akışı yönetimi, LLM sağlayıcı entegrasyonu) üzerine REST + WebSocket + MCP API’si oturtulmuş. Dayanıklılık, kontrol noktaları ve geri alma mekanizmalarının temel alınmasıyla sağlanıyor — görev durumu kalıcı olarak saklandığından, başarısız olan bir işçi yeniden başlamak yerine kaldığı yerden devam ediyor. Sağlayıcı mimarisi, her LLM’yi tek bir arayüz altında soyutluyor; donanım tespiti, makineye uygun modelleri seçerek aynı iş akışının, bir işçinin veri merkezi GPU’su ya da mütevazı bir CPU’su olmasına bakılmaksızın çalışmasını sağlıyor. Akıl yürütme kalıpları, sistemin tek seferlik istemler yerine yapılandırılmış zincirleme düşünmeyle planlama, inşa etme, test etme ve yeniden yapılandırma yapabilmesi için yeniden kullanılabilir iş akışı modları olarak uygulanıyor.
