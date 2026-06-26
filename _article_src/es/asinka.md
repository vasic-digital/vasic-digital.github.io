---
title: Asinka
slug: asinka
repo: https://github.com/vasic-digital/Asinka
tech: Kotlin
teaser: "Keep objects in sync across separate processes — thread-safe, efficient, and invisible, so independent apps behave like one."
---

## El anzuelo
Dos procesos, una única fuente de verdad. Asinka (Асинка) es una biblioteca de sincronización de objetos entre procesos de alto rendimiento que permite a aplicaciones independientes compartir estado en tiempo real como si fueran un único programa: sin código adhesivo frágil, sin condiciones de carrera, sin conjeturas.

## Por qué es fascinante
La comunicación entre procesos es uno de esos problemas que suenan simples y resultan ser un campo minado. Asinka lo aborda de frente con una biblioteca en Kotlin cuyo único propósito es lograr que los objetos de un proceso reflejen de manera confiable los cambios en otro. Esta capacidad desbloquea en silencio arquitecturas poderosas: aplicaciones complementarias que se mantienen sincronizadas, plugins que comparten datos con su anfitrión o servicios cooperativos en la misma máquina que necesitan una visión consistente de objetos compartidos sin tener que reimplementar la sincronización cada vez.

## Los problemas difíciles
Sincronizar objetos mutables a través de los límites de los procesos es complicado por razones que se manifiestan en tiempo de ejecución, no en tiempo de compilación. Hay que serializar y reconciliar el estado, manejar actualizaciones concurrentes de ambos lados sin corromper los datos y hacerlo todo con la eficiencia suficiente para que la sincronización no sea más lenta que el trabajo que soporta. La seguridad en hilos es innegociable: dos procesos modificando un estado compartido es precisamente el escenario que genera *heisenbugs*. Y debe mantenerse robusto cuando un lado está lento, ocupado o temporalmente inaccesible.

## Lo que la hace revolucionaria
Asinka convierte una tarea recurrente y propensa a errores en una dependencia que simplemente se añade. Al ofrecer sincronización de objetos segura en hilos y eficiente como un bloque de construcción reutilizable, permite a los desarrolladores diseñar sistemas multiproceso que antes eran demasiado arriesgados o costosos de intentar. Eleva la comunicación entre procesos (IPC) de un sistema de mensajería artesanal y propenso a fallos a una abstracción limpia a nivel de objetos: modificas un objeto aquí y queda correcto allá. Ese es un cambio significativo en la forma de construir aplicaciones cooperativas.

## Cómo resolvimos las partes más difíciles
La biblioteca está diseñada desde cero para garantizar un acceso concurrente seguro, de modo que las mutaciones simultáneas se reconcilian en lugar de competir. El intercambio de estado se modela a nivel de objetos, lo que brinda a los desarrolladores un modelo mental intuitivo —piensan en objetos, no en protocolos de comunicación—, mientras Asinka se encarga de la serialización y la propagación por debajo. La eficiencia se trata como un requisito de primer orden, manteniendo la capa de sincronización lo suficientemente ligera para integrarse en la ruta crítica de aplicaciones reales. El resultado es una herramienta pequeña y precisa que hace bien una sola cosa, pero verdaderamente difícil.
