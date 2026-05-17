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

### [2026-05-17] - Sesión 2 (cluster paridad — airbnb-friendly)

**Objetivo:** subir el lado externo de `/airbnb-friendly` a paridad con el interno (plan `ui-viewer-02`).

**Hecho:**
- Externo "Buscar": antes hero + searchbar + 4 destinos + 1 línea. Ahora hero + searchbar + chips de destino + **Alojamientos destacados** (6 listings con rating, súper anfitrión, host, precio/noche, corazón con pop) + **Cómo funciona** (3 pasos, tono humano) + **Testimonios** (3 reviews argentinas) + **band de confianza + CTA** (reusa "persona real, no bot").
- Interno: pulido sin reescribir — mini-timeline del próximo viaje en Reservas, typing indicator en Mensajes (Mariela), corazón interactivo en Wishlist.
- Firma de motion: lift cálido (`y:-4` spring gentil), pop del corazón (scale 1→1.28→1), bounce gentil en CTAs, scroll-reveal. Todo gated por `useReducedMotion`.
- Datos consistentes con el interno (Carla, Mariela/Diego/Carolina, mismos lugares).

**Decisiones:**
- "Destinos populares" → fila de chips compacta (retiene la data sin bulto vertical) + grid real de listings aparte.
- Corazón con glifos `♥/♡` + color, no emoji (control de relleno y contraste).

**Próximos pasos:**
- Seguir el cluster con las otras páginas de externo flaco (plan `ui-viewer-00-pipeline`, orden sugerido).

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
