---
title: Panoptic
slug: panoptic
repo: https://github.com/vasic-digital/Panoptic
tech: Go, multi-platform UI automation
teaser: "One automation framework that drives, records and screenshots web, desktop and mobile apps — turning QA evidence into a first-class output."
---

## El anzuelo
La mayoría de las herramientas de prueba se limitan a decir "aprobado" o "fallido". Panoptic te muestra exactamente qué ocurrió: ejecuta tu aplicación, graba la pantalla, captura capturas de pantalla con marca de tiempo y te entrega pruebas visuales. Es una prueba automatizada que genera un registro de evidencia que realmente puedes ver.

## Por qué es fascinante
Panoptic es un único marco integral en Go que automatiza aplicaciones web, de escritorio y móviles a través de una sola interfaz. La automatización de interfaces de usuario en estos tres entornos suele requerir tres cadenas de herramientas distintas, tres conjuntos de habilidades y tres integraciones frágiles. Panoptic las unifica: detección e interacción de elementos, captura de capturas de pantalla de alta calidad y grabación de video completa, de modo que una sola estrategia de prueba abarca toda la superficie de tu producto. Esa amplitud, ofrecida en Go, rápido y con pocas dependencias, es lo que lo hace destacar.

## Los problemas difíciles
La automatización de interfaces de usuario multiplataforma es uno de los ámbitos más implacables del desarrollo de software. Los DOM de la web, los widgets nativos de escritorio y las jerarquías de vistas móviles exponen los elementos de formas completamente distintas, y el tiempo lo condiciona todo: animaciones, cargas asíncronas, transiciones. Encontrar e interactuar de manera fiable con un elemento, y luego capturar una captura de pantalla limpia y bien sincronizada o una grabación fluida del resultado, exige resolver problemas de sincronización, renderizado y abstracción de plataformas al mismo tiempo. Lograrlo sin pruebas inestables —la maldición de todo conjunto de automatización— es el verdadero desafío.

## Lo que lo hace revolucionario
Panoptic redefine el resultado de las pruebas de calidad. En lugar de registros opacos, obtienes material de regresión visual: capturas de pantalla y grabaciones que hacen que los fallos se expliquen por sí mismos y agilizan las revisiones. Al cubrir web, escritorio y móvil desde un solo marco, permite a los equipos estandarizar todo su enfoque de pruebas automatizadas en lugar de mantener un mosaico de soluciones. Y, al estar escrito en Go, se despliega como un binario ligero, rápido y portátil que encaja de forma natural en las pipelines de CI y entornos sin interfaz gráfica.

## Cómo resolvimos los aspectos más complejos
El marco se estructura en torno a un núcleo de automatización agnóstico a la plataforma, con controladores específicos para cada una detrás, de modo que el autor de las pruebas trabaja con un modelo coherente mientras Panoptic gestiona las diferencias entre un navegador, una ventana de escritorio y una pantalla móvil. La captura de capturas de pantalla y video está integrada como funcionalidad básica, no como un añadido, lo que permite generar la rica evidencia visual que otras herramientas no ofrecen. Las mismas capacidades de grabación y comparación que impulsan su propio sistema de control de calidad —el proyecto incluye módulos reutilizables de regresión visual, comparación de pantallas y búfer de reproducción— convierten a Panoptic en una base sobre la que otros sistemas de pruebas pueden construirse, no solo en un ejecutor independiente.
