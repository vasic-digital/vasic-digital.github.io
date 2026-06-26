---
title: Yole
slug: yole
repo: https://github.com/vasic-digital/Yole
tech: Kotlin, Compose Multiplatform (Android, Desktop, iOS, Web)
teaser: "One editor for everything you write: Markdown, todo.txt, plaintext, math and more — simple, lightweight, and yours across every platform."
---

## El gancho
Tus notas, tus tareas, tus borradores —todo en un solo lugar, en formatos abiertos y a prueba de futuro que realmente te pertenecen. Yole es un editor de texto versátil y ligero, una app de notas y tareas que domina Markdown, todo.txt, texto plano, notación matemática y más, sin encerrar ni una palabra de lo que escribes en un silo propietario.

## Por qué es fascinante
Yole se sitúa en el punto exacto entre "simple" y "potente", el lugar más difícil de habitar. Es un editor sin florituras que se abre al instante y se aparta de tu camino, pero maneja con soltura los formatos estructurados que importan a desarrolladores y usuarios avanzados de notas: Markdown para documentos, todo.txt para gestión de tareas, notación matemática para escritura técnica, y más. Desarrollado en Kotlin y con alcance hacia Android, escritorio, iOS y web desde una misma base de código, es una herramienta de escritura genuinamente multiplataforma —y ya está disponible en producción para Android, distribuida a través de F-Droid y GitHub.

## Los desafíos difíciles
Las herramientas de texto plano son fáciles de empezar, pero brutales de perfeccionar. Dar soporte a múltiples formatos de texto con solvencia implica un trabajo real de análisis y renderizado —Markdown, todo.txt y notación matemática tienen cada uno sus propias reglas y casos límite—, mientras se mantiene la app ligera e instantánea. Lanzarse a multiplataforma desde un único código en Kotlin plantea el reto de ofrecer una experiencia de calidad nativa en Android, escritorio, iOS y web sin fragmentarse en cuatro apps divergentes. Y el principio fundamental es la contención: añadir capacidades sin sacrificar la velocidad y simplicidad que hacen agradable usar un editor de texto a diario.

## Qué lo hace revolucionario
Yole ofrece a las personas un único hogar portátil para todo lo que escriben, en formatos abiertos que sobreviven a cualquier aplicación. Al estar construido sobre texto plano, tu contenido sigue siendo legible y tuyo para siempre —sin ataduras, sin ansiedad por migraciones—. Su fluidez con múltiples formatos permite que una sola herramienta sea tu app de notas, tu gestor de tareas y tu bloc de apuntes técnicos a la vez. Como software de código abierto con distribución real en F-Droid, es una alternativa práctica y respetuosa con la privacidad frente a los cuadernos en la nube que pretenden adueñarse de tus datos.

## Cómo resolvimos las partes más complejas
Yole se construye con Kotlin y un enfoque multiplataforma basado en Compose, de modo que una única base de código puede dirigirse a Android, escritorio, iOS y web —compartiendo lógica y UI, pero buscando siempre una sensación nativa en cada plataforma—. El soporte para múltiples formatos se gestiona mediante análisis y renderizado dedicados para cada tipo de texto, de manera que Markdown, todo.txt, texto plano y notación matemática se comporten correctamente en lugar de ser aproximaciones. El proyecto se lanza de forma incremental y transparente —Android ya está en producción y disponible hoy, escritorio en beta, e iOS y web en desarrollo activo—, lo que garantiza que la experiencia publicada sea pulida mientras se expande el alcance de la plataforma. En todo momento, el principio de diseño es mantener el editor simple y rápido en primer lugar, añadiendo capacidades en formatos y funciones sin comprometer la esencia de la experiencia de escritura.
