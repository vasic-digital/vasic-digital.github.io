---
title: Asinka
slug: asinka
repo: https://github.com/vasic-digital/Asinka
tech: Kotlin
teaser: "Keep objects in sync across separate processes — thread-safe, efficient, and invisible, so independent apps behave like one."
---

## Kanca
İki süreç, tek gerçeklik kaynağı. Asinka (Асинка), bağımsız uygulamaların canlı durumu tek bir programmış gibi paylaşmasını sağlayan yüksek performanslı bir süreçler arası nesne senkronizasyon kütüphanesidir — kırılgan yapıştırma kodları, yarış durumları ya da tahminler yok.

## Neden büyüleyici?
Süreçler arası iletişim, basit görünen ama aslında mayın tarlasına dönüşen sorunlardan biri. Asinka, bu sorunu doğrudan ele alan, bir süreçteki nesnelerin diğerindeki değişiklikleri güvenilir şekilde yansıtmasını sağlayan odaklanmış bir Kotlin kütüphanesi. Bu yetenek, sessiz sedasız güçlü mimarilerin kapısını aralıyor: Senkron adımlarla ilerleyen eşlikçi uygulamalar, veriyi ana programla paylaşan eklentiler ya da aynı makinedeki işbirliği yapan servisler — her seferinde senkronizasyonu yeniden uygulamaya gerek kalmadan, paylaşılan nesnelerin tutarlı bir görünümüne ihtiyaç duyanlar için.

## Zorlu sorunlar
Değiştirilebilir nesneleri süreç sınırları ötesinde senkronize etmek, derleme zamanında değil, çalışma zamanında karşılaşılan sorunlar yüzünden zor. Durumu serileştirip uzlaştırmak, veriyi bozmadan her iki taraftan gelen eşzamanlı güncellemeleri yönetmek ve tüm bunları, senkronizasyonun desteklediği işten daha yavaş olmaması için yeterince verimli yapmak gerekiyor. İş parçacığı güvenliği tartışmaya yer bırakmaz — iki sürecin paylaşılan durumu değiştirmesi, tam da heisenbug’ların ortaya çıktığı senaryodur. Ayrıca bir taraf yavaş, meşgul ya da geçici olarak erişilemez durumdayken bile sistemin sağlam kalması şart.

## Oyunu değiştiren özellik
Asinka, tekrarlanan, hataya açık bir angaryayı, eklemeniz yeterli bir bağımlılığa dönüştürüyor. İş parçacığı güvenli, verimli nesne senkronizasyonunu yeniden kullanılabilir bir yapı taşı olarak sunarak, daha önce çok riskli ya da maliyetli görülen çok süreçli sistemlerin tasarlanmasını mümkün kılıyor. Süreçler arası iletişimi (IPC), el yapımı, hataya açık mesajlaşmadan, temiz bir nesne düzeyinde soyutlamaya yükseltiyor — burada bir nesneyi değiştirirsiniz, orada da doğru olur. Bu, işbirliği yapan uygulamaların nasıl inşa edilebileceğinde anlamlı bir değişim.

## En zor kısımları nasıl çözdük?
Kütüphane, baştan itibaren güvenli eşzamanlı erişim için tasarlandı; böylece eşzamanlı değişiklikler yarışmak yerine uzlaştırılıyor. Durum paylaşımı, nesne düzeyinde modelleniyor ve geliştiricilere sezgisel bir zihinsel model sunuyor — tel protokoller yerine nesneler üzerinde düşünüyorlar, Asinka ise serileştirme ve yayılımı arka planda hallediyor. Verimlilik, birinci sınıf bir gereklilik olarak ele alınıyor; senkronizasyon katmanı, gerçek uygulamaların kritik yolunda yer alacak kadar hafif tutuluyor. Sonuç, gerçekten zor olan bir işi iyi yapan küçük ama keskin bir araç.
