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

### [2026-05-17] - Sesión 4 (cluster paridad — operativo-calido)

**Objetivo:** paridad de `/operativo-calido` (plan `ui-viewer-04`). Es el estilo más interno-first: el protagonista es la app, el externo es un pitch mínimo. Foco: el módulo **Resumen del día** faltaba y la firma de motion (toast) no existía.

**Hecho:**
- Interno: nuevo módulo **Resumen del día** (default) — KPIs grandes derivados del estado real (Pedidos hoy / A cobrar / Entregas pendientes) + lista de pedidos de hoy con acción "Empezar/Entregar" de un toque. Pedidos: filtro por estado **funcional** (Todos/Pendientes/Preparando/Entregados) + columna Acción con avanzar (antes la tabla era de solo lectura). Clientes: columna WhatsApp en vez de "pedidos" (más fiel al negocio Fátima/pedidos por WhatsApp).
- Firma de motion = **toast cálido y rápido**: avanzar estado (pendiente→preparando→entregado) dispara un toast verde abajo-centro, spring snappy, se va solo a los 2.4s. Los KPIs del Resumen reaccionan en vivo (avanzás un pedido → "Entregas pendientes" y "A cobrar" bajan con un pop). Badge de Pedidos en el nav = entregas pendientes en vivo.
- Externo: hero ahora con **preview/captura del panel** (chrome mock + KPIs + 3 filas) y **band CTA final** ("Hecho para el comerciante, no para el ingeniero"). Beneficios reescritos a lenguaje llano del plan ("Mirá los pedidos del día" / "Cobrá y facturá fácil" / "Sin instalar nada").
- Estado de pedidos = única fuente de verdad (`totalNum` + helper `pesos()` con `toLocaleString("es-AR")`), consumido por Resumen, Pedidos y Cobros (Pendiente cobrar deja de ser un número fijo). React 19: `avanzar()` lee del scope, no del updater.

**Decisiones:**
- Se mantienen los 6 módulos internos (no se borró Catálogo/Mensajes que ya andaban): el interno es el protagonista, sumar Resumen cubre el #1 del plan sin destruir lo que funcionaba.
- Externo se dejó mínimo a propósito (hero+preview, 3 beneficios, social proof, band) — el negocio no pide una landing comercial grande.

**Próximos pasos:**
- Seguir el cluster con las páginas restantes (orden en `ui-viewer-00-pipeline`).

### [2026-05-17] - Sesión 3 (cluster paridad — comercio-popular)

**Objetivo:** subir el lado externo de `/comercio-popular` a paridad (plan `ui-viewer-03`). El interno (Admin) ya tenía 5 módulos sólidos — no se tocó.

**Hecho:**
- Externo "Tienda": antes hero + search + chips muertos + grid de 6 con botón sin efecto + 1 línea. Ahora hero + search + **chips que filtran el catálogo de verdad** + **grid de 9 productos** (precio `$` AR, stepper de cantidad por card) + **carrito drawer** (ítems, stepper, subtotal, envío con "gratis desde $15.000", total) + **checkout de 1 paso** (datos + medio de pago MP/efectivo/transferencia → confirmación) + **band de confianza** (envío/pagos/WhatsApp).
- Firma de motion = **fly-to-cart**: el emoji del producto vuela en arco hasta el botón flotante del carrito; al aterrizar incrementa el ítem y el badge hace pop (spring). Steppers con feedback inmediato (`whileTap`), cero floritura en el admin (intacto).
- Overlays (flyers/FAB/drawer) viven dentro del fragment del tab Tienda → se desmontan al pasar a Admin.
- Datos argentinos: Almacén Don Pedro, productos reales, precios `toLocaleString("es-AR")`, envío a Belgrano/Recoleta/Palermo.

**Decisiones:**
- Incremento del carrito al *aterrizar* el flyer (no al click) para que el badge-pop sincronice con la animación — se siente que el producto "cae" adentro.
- Card alterna botón "Agregar" ↔ stepper según haya cantidad (patrón Tiendanube/MercadoLibre), en vez de botón estático.

**Próximos pasos:**
- Seguir el cluster con las páginas de externo flaco restantes (orden sugerido en `ui-viewer-00-pipeline`).

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

### [2026-05-17] - Sesión: index visor + fix encoding

**Objetivo:** el index dejó de ser un muro vertical (queja del usuario: "muy vertical, le damos poca bola a las del final").

**Hecho:**
- `page.tsx` reescrito: header compacto, **barra de filtros sticky por categoría** (Todos + 7 cats con conteo), grid denso `grid-cols-2 md:3 xl:4`, cards chicas, descripción + cuándo-usar revelados en **hover** sobre el preview (no inflan la card). Mantiene entrada animada + View Transition `nav-forward`. `useReducedMotion` respetado. Descompuesto en `StyleCard` (no monolito).
- `lib/estilos.ts`: corregidos 52 mojibakes (UTF-8 leído como Latin-1: `tipografÃ­a`→`tipografía`, `diseÃ±o`→`diseño`, `Â·`→`·`, etc.). Se veía roto en el footer de todas las páginas.
- `globals.css`: utilidad `.no-scrollbar` para el filtro horizontal.

**Decisiones:**
- Filtro por categoría > secciones apiladas: ataca directo "las del final no las ve nadie" (refero/default ahora a un click).
- Descripción en hover, no siempre visible: baja la altura de card sin perder info.

**Próximos pasos:**
- Rework de los planes `ui-viewer-NN` con el bar real: hero + 3-4 piezas funcionales DISTINTAS y visibles por lado, código SOLID/mantenible (decomposición por estilo, data separada de presentación) para que aguante backend real sin volverse pesado.
- Retrofit airbnb/comercio/operativo (tanda 1) al nuevo bar.
