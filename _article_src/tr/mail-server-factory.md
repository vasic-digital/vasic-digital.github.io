---
title: Mail Server Factory
slug: mail-server-factory
repo: https://github.com/Server-Factory/Mail-Server-Factory
tech: Kotlin, Shell, Docker, Postfix, Dovecot, Rspamd, ClamAV, QEMU
teaser: "Run your mail server like the boss: describe it in JSON, deploy it anywhere — across many OS targets and connection types — fully hardened."
---

## Kanca

Kendi e-posta sunucunuzu barındırmak, çoğu insanın pes etmesine neden olan meşhur bir geçiş ritüelidir: Postfix, Dovecot, spam filtreleme, antivirüs, TLS, DNS ve her biri ince ayrıntılarda yanlış gidebilecek onlarca yol. **Mail Server Factory**, tüm bu acıyı tek bir fikirle ortadan kaldırıyor — istediğiniz sunucuyu JSON ile tanımlayın, gerisini fabrika sizin için inşa edip güçlendirsin. **"E-Posta Sunucunuzu Patron Gibi Yönetin."**

## Neden büyüleyici?

**Mail Server Factory**, üretime hazır, otomatik bir e-posta sunucusu sağlama aracı. Bildirimsel bir yapılandırmayı alıp tam donanımlı, güvenli bir e-posta yığınına dönüştürüyor. Zamanla kazanılmış zorlu bileşenleri — SMTP için Postfix, IMAP için Dovecot, spam için Rspamd, antivirüs için ClamAV — tek bir tutarlı dağıtımda bir araya getiriyor; kurumsal güvenlik ve izleme özellikleri de hazır olarak geliyor. Çok çeşitli işletim sistemlerini hedefleyebiliyor ve SSH, Docker, Kubernetes, AWS SSM, Azure, GCP, libvirt gibi farklı bağlantı türleri üzerinden erişebiliyor — aynı yapılandırma neredeyse her ortama uyum sağlıyor. Hatta QEMU sanallaştırmasıyla farklı dağıtımlar üzerinde test bile yapabiliyor.

## Zorlu sorunlar

E-posta, işletilmesi en affetmeyen sistemlerden biri: Tek bir yanlış yapılandırma, teslim edilemeyen postalar, açık bir röle ya da sunucunun kara listeye düşmesi anlamına gelebilir. Bunu birçok işletim sistemi dağıtımında otomatikleştirmek, zorluğu katlayarak artırır — paket adları, yollar, başlatma sistemleri ve varsayılan ayarlar her yerde farklıdır. Ardından bir de güvenlik meselesi var; e-posta için sonradan düşünülmüş bir şey olamaz: Güçlü şifreleme, modern TLS, spam ve kötü amaçlı yazılım filtreleme her seferinde doğru şekilde yapılandırılmalıdır. Tüm bu hedeflerde otomasyonun gerçekten çalıştığını doğrulamak ise çoğu projenin hiç denemediği bir test stratejisi gerektirir — işte bu yüzden sanallaştırmaya dayalı test yaklaşımı ve kapsamlı bir geçen test paketi burada bu kadar önemli.

## Oyunu değiştiren özellik

**Mail Server Factory**, derin sistem yöneticisi uzmanlığıyla adeta kapalı tutulan bir alanı demokratikleştiriyor. Bir JSON tanımlaması ve fabrika, tekrarlanabilir şekilde güçlendirilmiş, izlenen, üretime hazır bir e-posta sunucusuna eşit. Bağlantı türlerinin genişliği, modern altyapıya sanki çıplak bir sanal makineymiş gibi doğal uyum sağlıyor: Docker üzerinden, Kubernetes’e, bulut SSM kanalları aracılığıyla ya da libvirt sanal makinesine dağıtım yapabiliyor. Bu taşınabilirlik, yerleşik güvenlik çerçevesiyle birleşince, e-postanızı kiralamak yerine sahiplenmenin gerçekten pratik bir yolunu sunuyor.

## En zor kısımları nasıl çözdük?

Tasarım, "ne istediğiniz" (bildirimsel JSON yapılandırması) ile "onu her yerde nasıl inşa edeceğiniz" (uygulama motoru) arasındaki ayrımı netleştiriyor; bu da tek bir yapılandırmanın birçok işletim sistemi hedefine dağıtılmasını sağlıyor. Çoklu dağıtım doğruluğu, QEMU sanallaştırmasıyla test edilerek ele alınıyor; böylece fabrikanın çıktısı varsayıma dayanmak yerine gerçek sistemler üzerinde doğrulanıyor — arkasında kapsamlı bir geçen test paketi var. Docker ile konteynerleştirme ve özenle seçilmiş bir yığın (Postfix, Dovecot, Rspamd, ClamAV) hareketli parçaları standartlaştırırken, güvenlik çerçevesi güçlü şifreleme ve TLS’yi varsayılan olarak zorunlu kılıyor. SSH’den bulut ve Kubernetes’e kadar onlarca bağlantı türünü desteklemek, aracı "benim sunucumda çalışır"dan "senin altyapına dağıtılır"a dönüştürüyor — altyapınız ne olursa olsun.
