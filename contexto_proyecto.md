# Contexto
Un estudio de diseño de producto acaba de ganar un contrato para reconstruir el frontend de una plataforma de alquiler vacacional. Antes de crear su propio sistema de diseño, quieren validar la arquitectura de componentes clonando una interfaz de producción bien conocida: Airbnb. De esta forma, el equipo aprende qué componentes son necesarios, qué datos necesita cada uno y cómo se conectan entre las distintas vistas.
Tu misión es implementar tres vistas de la experiencia de Airbnb en Next.js usando componentes de React: la página de inicio (Home), la página de catálogo (resultados de búsqueda) y la vista de detalle de una habitación. Usarás prompts de visión para convertir capturas de pantalla en especificaciones de componentes, y luego implementarás esas especificaciones.
El tech lead del estudio te ha enviado un brief rápido:
## Brief del producto
- La implementación debe ser mobile-first. Diseña primero para un viewport de 375px; adapta al escritorio a partir de 768px.
- Antes de escribir código, crea un archivo context.md en la raíz del repositorio. Este archivo debe describir la interfaz que se va a construir: qué contiene cada página, cuáles son los componentes principales, quién es el usuario y qué intenta hacer. Piénsalo como el mini-brief que escribirías antes de empezar un proyecto real.
- Usa prompts de visión: adjunta una captura de pantalla de la interfaz original de Airbnb a tu agente de código con IA para generar una especificación de componentes y úsala como guía durante la implementación.
- Mantén los componentes pequeños y enfocados. Una responsabilidad por componente.
- La navegación entre las tres páginas debe funcionar sin recargar el navegador.