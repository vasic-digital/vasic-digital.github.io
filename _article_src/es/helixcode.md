---
title: HelixCode
slug: helixcode
repo: https://github.com/HelixDevelopment/HelixCode
tech: Go, Gin, PostgreSQL, Redis, SSH, WebSocket, MCP
teaser: "A distributed AI development platform that splits work across machines, never loses progress, and orchestrates LLMs to plan, build, test and refactor."
---

## El anzuelo
¿Y si tu asistente de codificación con IA no fuera un solo proceso en un portátil, sino una red coordinada de trabajadores distribuidos en todos los dispositivos que posees —dividiendo tareas de forma inteligente, guardando puntos de control sobre la marcha y sobreviviendo a fallos sin perder ni un minuto de trabajo? Eso es HelixCode: una plataforma de desarrollo con IA distribuida de grado empresarial.

## Por qué es fascinante
HelixCode aborda el desarrollo asistido por IA como un problema de computación distribuida, no como un chatbot. Realiza una división inteligente de tareas con preservación del trabajo, gestiona un grupo de trabajadores conectados por SSH en Linux, macOS, Windows y más, y ejecuta flujos de trabajo completos de desarrollo —planificación, construcción, pruebas, refactorización— con soporte para múltiples proveedores de LLM (Llama.cpp, Ollama, OpenAI). Habla el Protocolo de Contexto de Modelos, ofrece clientes REST, CLI, interfaz de terminal y WebSocket, e incorpora patrones avanzados de razonamiento como *chain-of-thought* y *tree-of-thoughts*. Es, en esencia, un sistema operativo para la ingeniería potenciada por LLM.

## Los desafíos difíciles
Distribuir trabajo real en máquinas heterogéneas es complicado; distribuir trabajo no determinista de LLM es aún más difícil. Hay que dividir una tarea de modo que sus partes puedan ejecutarse en paralelo sin conflictos, rastrear dependencias entre ellas y —lo más crucial— no perder nunca el progreso si un trabajador falla a mitad de ejecución. Esto exige puntos de control automáticos y retroceso, estado duradero de las tareas y monitoreo de salud en un grupo de trabajadores SSH. Sobre esta capa se sitúa la de LLM: selección de modelos consciente del hardware, una interfaz unificada de proveedores para intercambiar cualquier modelo, llamadas a herramientas y razonamiento en múltiples pasos que debe mantener coherencia en una ejecución distribuida.

## Lo que lo hace revolucionario
HelixCode lleva el desarrollo con IA más allá de una única ventana de contexto y un solo dispositivo. Al coordinar trabajo potenciado por LLM en múltiples máquinas con preservación garantizada del trabajo, convierte sesiones de IA frágiles y que requieren reiniciarse desde cero en tuberías de ingeniería resilientes y de larga duración. Su amplitud —flujos de trabajo de ciclo completo, acceso multicanal, trabajadores multiplataforma, marcos listos para móviles, notificaciones en Slack, Discord, correo electrónico y Telegram— significa que puede situarse en el centro del proceso de un equipo real, no solo en la terminal de un individuo.

## Cómo resolvimos los aspectos más complejos
La plataforma está construida por capas: una API REST + WebSocket + MCP sobre servicios centrales (autenticación y gestión de sesiones, el grupo de trabajadores basado en SSH, gestión de tareas con puntos de control, gestión de proyectos y flujos de trabajo, e integración de proveedores de LLM), respaldados por PostgreSQL y Redis. La resiliencia proviene de hacer que los puntos de control y el retroceso sean fundamentales: el estado de las tareas se persiste para que un trabajador fallido reanude en lugar de reiniciar. La arquitectura de proveedores abstrae cada LLM detrás de una única interfaz, con detección de hardware que elige modelos compatibles con la máquina, de modo que el mismo flujo de trabajo funcione tanto si un trabajador tiene una GPU de centro de datos como si solo cuenta con una CPU modesta. Los patrones de razonamiento se implementan como modos de flujo de trabajo reutilizables, permitiendo que el sistema planifique, construya, pruebe y refactorice con *chain-of-thought* estructurado en lugar de solicitudes puntuales.
