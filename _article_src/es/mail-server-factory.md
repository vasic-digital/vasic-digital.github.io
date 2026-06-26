---
title: Mail Server Factory
slug: mail-server-factory
repo: https://github.com/Server-Factory/Mail-Server-Factory
tech: Kotlin, Shell, Docker, Postfix, Dovecot, Rspamd, ClamAV, QEMU
teaser: "Run your mail server like the boss: describe it in JSON, deploy it anywhere — across many OS targets and connection types — fully hardened."
---

## El anzuelo
Autohospedar correo electrónico es un rito de paso famoso por doblegar a la mayoría: Postfix, Dovecot, filtrado de spam, antivirus, TLS, DNS y una docena de formas de equivocarse sutilmente. Mail Server Factory reemplaza todo ese dolor con una sola idea: describe el servidor que deseas en JSON y deja que la fábrica lo construya y fortalezca por ti. "Gestiona tu servidor de correo como un jefe".

## Por qué es fascinante
Mail Server Factory es una herramienta de aprovisionamiento de servidores de correo automatizada y lista para producción, que convierte una configuración declarativa en una pila de correo completamente ensamblada y segura. Reúne componentes probados en batalla —Postfix para SMTP, Dovecot para IMAP, Rspamd para spam, ClamAV para antivirus— en un despliegue coherente, con seguridad empresarial y monitoreo integrados. Puede dirigirse a una amplia gama de sistemas operativos y alcanzarlos a través de distintos tipos de conexión —SSH, Docker, Kubernetes, AWS SSM, Azure, GCP, libvirt y más—, de modo que la misma configuración se despliega en casi cualquier entorno. Incluso utiliza virtualización con QEMU para probar en diferentes distribuciones.

## Los problemas difíciles
El correo es uno de los sistemas menos indulgentes de operar: un solo error de configuración puede significar correos no entregados, un relay abierto o un servidor que termina en una lista negra. Automatizarlo correctamente en múltiples distribuciones de sistemas operativos multiplica la dificultad: nombres de paquetes, rutas, sistemas de inicio y valores predeterminados varían. Luego está la seguridad, que no puede ser un pensamiento posterior en el correo: cifrado robusto, TLS moderno, filtrado de spam y malware deben configurarse correctamente cada vez. Y verificar que la automatización funcione en todos esos objetivos requiere una estrategia de pruebas que la mayoría de los proyectos ni siquiera intentan, razón por la cual un enfoque de pruebas basado en virtualización y una amplia suite de pruebas exitosas son tan importantes aquí.

## Lo que lo hace revolucionario
Mail Server Factory democratiza algo que antes estaba reservado a la experiencia avanzada de administradores de sistemas. Una descripción en JSON más la fábrica equivalen a un servidor de correo endurecido, monitoreado y listo para producción, de manera repetible. La variedad de tipos de conexión significa que se adapta a la infraestructura moderna con la misma naturalidad que una máquina virtual: despliégalo vía Docker, en Kubernetes, a través de un canal SSM en la nube o en una VM de libvirt. Esa portabilidad, combinada con un marco de seguridad integrado, lo convierte en una vía genuinamente práctica para poseer tu propio correo en lugar de alquilarlo.

## Cómo resolvimos las partes más difíciles
El diseño separa el "qué quieres" (configuración declarativa en JSON) del "cómo construirlo en todas partes" (el motor de implementación), lo que permite que una misma configuración se despliegue en múltiples sistemas operativos. La corrección en múltiples distribuciones se aborda con virtualización QEMU para pruebas, de modo que el resultado de la fábrica se valida en sistemas reales en lugar de asumirse, respaldado por una amplia suite de pruebas exitosas. La contenerización con Docker y una pila seleccionada (Postfix, Dovecot, Rspamd, ClamAV) estandarizan los componentes móviles, mientras que el marco de seguridad aplica cifrado robusto y TLS por defecto. El soporte para una docena de tipos de conexión —desde SSH hasta la nube y Kubernetes— transforma la herramienta de "funciona en mi servidor" a "se despliega en tu infraestructura", sea cual sea.
