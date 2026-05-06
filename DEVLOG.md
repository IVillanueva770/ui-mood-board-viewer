# DEVLOG — UI Mood Board Viewer

## Estado Actual

App Next.js 16 (Turbopack) que renderiza los estilos aprobados del mood board del usuario con paleta y tipografía aplicadas, en vez de leer descripciones markdown.

- **Live**: https://ui-mood-board-viewer.vercel.app
- **Local**: `C:\Users\Ignacio Villanueva\Desktop\Karpathy\ui-mood-board-viewer`
- **Stack**: Next.js 16 + Tailwind v4 + App Router + Google Fonts (Geist, Roboto Mono, Cormorant, Bebas Neue, Inter)
- **Deploy**: `npx vercel --prod` desde la raíz del proyecto

## Estructura

- `/` — index con grid de 4 cards-preview, click para entrar al estilo
- `/linear` — productivity dark, sidebar+table+stats con monospace
- `/calm` — wellness premium minimal, serif Cormorant + cards de programas
- `/dimes` — brutalist juvenil, bordes negros gruesos, sombras duras, color flat saturado
- `/sin-estilo` — default placeholder B/N + Roboto Mono, comunica "falta decisión"

## Tareas Activas

- [ ] Sumar estilos no opinados todavía (iOS-native, Material 3, Stripe Dashboard, Airbnb friendly, Médico amigable, Sport, Modern minimal SaaS, Ethereal). Renderizarlos para que el usuario los descarte/apruebe en el viewer.
- [ ] Resolver tensión inmobiliaria: ¿warm boutique queda como excepción "para clientes que lo piden" o se descarta del todo?
- [ ] Sumar opción de "ver el sample completo del proyecto" (no solo un layout sample, sino el proyecto target con el estilo aplicado).
- [ ] Considerar subir a repo GitHub si el usuario quiere iterar desde otros lados.

## Decisiones de Arquitectura

- **Cada página self-contained**: paleta y fonts aplicadas inline / via CSS modules. No abstracción de "componentes shared" entre estilos para que cada estilo se vea CRUDO, sin contaminación.
- **Google Fonts via next/font**: 5 familias cargadas en layout (Geist, Geist Mono, Roboto Mono, Cormorant, Bebas Neue, Inter). Variables CSS para que cada página elija.
- **Static rendering**: todas las páginas son `○ (Static)`. Sin server-side, sin DB, sin auth. Es un viewer puro.
- **Dark mode global removido**: no usamos `prefers-color-scheme` global. Cada página define su propio fondo (Linear es dark, Calm/Dimes/Sin-estilo son light).

## Sesiones

### [2026-05-06] - Sesión 1 (creación)

**Objetivo:** que el usuario pueda VER los estilos del mood board sin abrir 50 pestañas.

**Hecho:**
- Scaffold Next.js 16 + Tailwind v4
- 5 rutas funcionales con build OK (3.0s)
- Deploy a Vercel: https://ui-mood-board-viewer.vercel.app
- Mood boards en `Karpathy/ui-mood-board/` actualizados marcando estilos descartados (Warm boutique, Barbershop clásico, Editorial cálido).

**Decisiones:**
- Solo 4 estilos en V1 (los 3 confirmados + el default sin-estilo). El resto del mood board se incorpora cuando el usuario los apruebe/descarte ad-hoc.
- Layout sample por estilo, no proyecto-real-mockeado, para mantener el viewer rápido y enfocado.
- Cada página inline-styles + Tailwind para layout. Sin shared components entre estilos.

**Próximos pasos:**
- Esperar feedback del usuario después de revisar el live.
- Decidir si los estilos no opinados se suman o se descartan sin verlos.
- Resolver tensión warm boutique vs el sitio inmobiliaria.
