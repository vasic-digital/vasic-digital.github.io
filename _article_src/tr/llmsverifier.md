---
title: LLMsVerifier
slug: llmsverifier
repo: https://github.com/vasic-digital/LLMsVerifier
tech: Go, SQLCipher, Docker, Kubernetes, Python/JS SDKs
teaser: "Trust, but verify your models: an enterprise platform that proves an LLM actually works — and keeps working — before you depend on it."
---

## Kanca

Her LLM sağlayıcısı, modelinin hızlı, yetenekli ve erişilebilir olduğunu iddia eder. LLMsVerifier ise bunu kanıtlamalarını sağlar. Herhangi bir model kullanılmadan önce, gerçek kontrollerden oluşan bir dizi testten geçmelidir — aralarında "Kodumu görüyor musun?" doğrulamasının da bulunduğu bu testler sayesinde, sessizce bozulan, yetenekleri konusunda yalan söyleyen ya da fark edilmeden performansı düşen bir modelin üzerine inşa etmezsiniz.

## Neden büyüleyici?

LLMsVerifier, LLM performansını sağlayıcılar arasında doğrulayan, izleyen ve optimize eden kurumsal düzeyde bir platformdur. On iki sağlayıcı için adaptörler sunar — OpenAI, Anthropic, Cohere, Groq, Together AI, Mistral, xAI, Replicate, DeepSeek, Cerebras, Cloudflare Workers AI ve SiliconFlow — ve her birini kapsamlı testlere tabi tutar: varlık, yanıt verebilirlik, gecikme süresi, akış, fonksiyon çağırma, görüntü işleme ve gömme (embeddings). Ardından gerçek zamanlı olarak izler, akıllı yedekleme mekanizmalarıyla çalışır ve yapay zeka destekli analizler, eğilim değerlendirmeleri ile optimizasyon önerileri sunar. Her şeyin LLM’lere endekslendiği bir dünyada, bu neredeyse kimsenin inşa etmediği kalite kontrol katmanıdır.

## Zorlu sorunlar

Bir LLM’yi doğrulamak incelik ister. Modeller, gerçek girdinizi görmezden gelerek yanıt verebilir, sahip olmadıkları yetenekleri iddia edebilir, bir kez geçip yük altında başarısız olabilir ya da sağlayıcılara göre farklı şekilde token akışı sağlayabilir. LLMsVerifier tüm bunlarla yüzleşir: Modelin verilen kodu gerçekten gördüğünü ve anladığını zorunlu kılan doğrulama, her yetenek boyutunun bağımsız olarak test edilmesi ve sağlayıcılara göre değişen gecikme süresi ile akış davranışlarının izlenmesi. Ardından operasyonel zorluklar gelir — sürekli sağlık kontrolü ve otomatik yedekleme, böylece üretimde bir sağlayıcı sorun yaşadığında kesinti yerine kurtarma tetiklenir. Kurumsal beklentiler (şifreli depolama, SSO, gözlemlenebilirlik) eklenince çıta oldukça yükselir.

## Oyunu değiştiren özellikler

LLMsVerifier, "Modelin çalışmasını umuyoruz"u "Sürekli kanıtımız var"a dönüştürür. Bu, üretimde yapay zeka kullanan her kuruluş için dönüştürücüdür: Yetenek kayması, ölü uç noktalar ve kalite gerilemelerini kullanıcılardan önce tespit eder, sağlayıcı seçimini model önerileri ve puanlamalarla kanıta dayalı hale getirir. Marka son eki ve doğrulanmış yapılandırma dışa aktarma sistemi, yalnızca doğrulama testlerini geçen modellerin dağıtılabilir bir yapılandırmaya dahil olmasını sağlar — tahmin değil, garanti. Devre kesiciler, Prometheus metrikleri ve Kubernetes uyumlu dağıtım ile ciddi bir LLM yığınının güvenilirlik omurgası olarak tasarlanmıştır.

## En zor kısımları nasıl çözdük?

Temel içgörü, doğrulamayı bir rapor değil, bir geçit olarak ele almaktır: Bir model, zorunlu "Kodumu görüyor musun?" kontrolünü ve ilgili yetenek testlerini geçmeden kullanılamaz. Her yetenek — akış, fonksiyon çağırma, görüntü işleme, gömme — bağımsız olarak doğrulanır; böylece kısmi destek tam olarak tespit edilir, varsayım yapılmaz. Üzerinde gerçek zamanlı izleme, devre kesici ve yedekleme mekanizması bulunur; sağlık durumu sürekli yeniden kanıtlanır ve başarısız olan bir sağlayıcı otomatik olarak devre dışı bırakılır. On iki sağlayıcı adaptörü, birleşik bir arayüzün arkasında çalışır; bu sayede aynı titiz test paketi, çok farklı API’ler üzerinde bile aynı şekilde uygulanabilir. Kurumsal güçlendirme — SQLCipher şifreleme, LDAP/SSO ve Splunk, DataDog, New Relic ile ELK entegrasyonları — doğrulayıcının kendisinin, güvenilmesi gereken bir sistem olarak güvenilir olmasını sağlar.
