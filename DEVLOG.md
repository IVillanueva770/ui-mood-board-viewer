# DEVLOG — UI Mood Board Viewer

## Estado Actual

App Next.js 16 (Turbopack) que renderiza los estilos aprobados del mood board del usuario con paleta y tipografía aplicadas, en vez de leer descripciones markdown.

- **Live**: https://ui-mood-board-viewer.vercel.app
- **Local**: `C:\Users\Ignacio Villanueva\Desktop\Karpathy\ui-mood-board-viewer`
- **Stack**: Next.js 16 + Tailwind v4 + App Router + Google Fonts (Geist, Roboto Mono, Cormorant, Bebas Neue, Inter)
- **Deploy**: `npx vercel --prod` desde la raíz del proyecto

## Estructura

- `/` — index con grid de 4 cards-preview, click para entrar al estilo
- `/linear` — command center refero (dark + neon lime), SOLID; externo landing dev-tool + interno scrolleable con ⌘K palette
- `/calm` — wellness premium minimal SOLID; externo landing serena (hero orbe que respira · programas · cómo funciona · testimonios · planes) + interno app calma scrolleable (today + mood selector interactivo · meditation · sleep · mood journal · settings), firma fades lentos + breathing scale
- `/dimes` — brutalist juvenil, bordes negros gruesos, sombras duras, color flat saturado
- `/steep` — BI/analytics refero (white canvas + warm mist #fbe1d1 + serif Cormorant), SOLID; externo landing BI con gravitas + interno plataforma analytics scrolleable (tablero · query builder · reportes · detalle de métrica), firma draw-in de charts + mist cálido
- `/sport-dinamico` — app fitness alto compromiso (Nike Training / Strava), dark `#0a0a0a` + naranja `#ff5722` + Bebas, SOLID; externo landing deportiva (hero gigante + planes + resultados/testimonios + CTA full-bleed) + interno la app scrolleable (workout de hoy · progreso/PRs/volumen · plan 4 semanas · ranking comunidad), firma slide-in agresivo + scale-punch + counter sprint + wipe diagonal. Negocio re-encuadrado: era dashboard de gestión de club, ahora app del atleta individual
- `/sin-estilo` — CONTROL NEGATIVO SOLID; mismo esqueleto que el resto (chrome + 2 tabs + hero + 3-4 piezas/lado + divider + footer) pero crudo B/N + Roboto Mono, border-radius 0, sin sombra/gradiente/acento y CERO motion. Externo: hero + falta-decidir + stats `00` + cards. Interno: workspace-bar (anclas) + items + gente + notas + ajustes APILADOS en scroll (sin `InternalNav`/switcher). Comunica "falta decisión"

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
- **Decomposición SOLID por estilo (rúbrica corregida 2026-05-17)**: cada estilo se descompone DENTRO de su carpeta — `page.tsx` delgado (composición, <~150 líneas), piezas en `<slug>/_components/*.tsx` con props tipadas (SRP), data + tipos del dominio en `<slug>/_data.ts` (swap a backend = tocar 1 archivo). NO contradice "no compartir entre estilos": es decomposición intra-estilo. Métrica de calidad = piezas funcionales distintas y visibles, NO líneas.
- **InternalNav con sub-vistas = 1 pieza, no N (y esconde)**: para un *viewer* las piezas tienen que VERSE de un vistazo. Lados internos que eran un sidebar con N sub-vistas ocultas se convierten en home scrolleable con las piezas a la vista (caso airbnb-friendly retrofit).
- **Scrollable-visible aplica también a estilos profesional-facing**: clinico-calmado es la vista del profesional (workspace) — se podría argumentar que un shell `InternalNav` es la metáfora correcta. Pero la regla del viewer (las piezas se ven de un vistazo, el evaluador no toca sub-nav) tiene prioridad, y el precedente operativo-calido (también panel profesional) ya resolvió así. Default del cluster = scroll con piezas visibles para AMBOS lados, profesional o paciente. `InternalNav` queda disponible sólo si una pieza puntual lo justifica, nunca como contenedor que esconde la cuota.

## Sesiones

### [2026-05-17] - Sesión 21 (sport-dinamico — rework SOLID + eliminar InternalNav + re-encuadre de negocio + firma sport)
**Objetivo:** Paridad externo/interno + SOLID + matar el `InternalNav` viejo (firma sport: slide-in agresivo / counter sprint / scale-punch).
**Hecho:**
- Monolito 517 líneas → `page.tsx` delgado (~95) + `_data.ts` tipado + 11 `_components/`.
- Eliminado `InternalNav` (escondía 5 sub-vistas tras sidebar = 1 pieza oculta). Interno = 4 piezas APILADAS en scroll.
- Externo: Hero gigante + Programas (planes, barra intensidad) + Resultados (counters + testimonios atletas AR) + CtaFinal full-bleed.
- Interno: WorkoutHoy (ejercicios + progreso de serie + EMPEZAR) + Progreso (PRs/racha/volumen, barras que corren) + Programa (plan 4 semanas, % completo) + Ranking (leaderboard tipo Strava, tu posición).
- Firma en `use-sport-motion` (slideIn/punch/charge/liftHard) + `Counter` (sprint con ease-out fuerte, reduced-motion = valor final) + `SectionHead` (wipe diagonal).
**Decisiones:**
- **Re-encuadre de negocio**: la versión vieja vendía una app de entreno en la landing pero el interno era gestión de club (plantilla/partidos/cuerpo técnico) — dos negocios distintos. estilos.ts dice "Nike Training / Strava, app fitness, atleta joven activo". Se unificó al atleta individual (lo que el plan pedía).
**Problemas encontrados:**
- Build rojo: `as const` en `punch` hacía `readonly` el array de keyframes `scale`; motion exige array mutable. Fix: sin `as const` en `punch`, ease vía `SPRINT.ease`.
**Próximos pasos:**
- Verificación visual en browser (no se hizo en esta sesión: modo batch, no se levantó dev). Build verde exit 0, ruta estática OK.

### [2026-05-17] - Sesión 20 (steep — rework SOLID + eliminar InternalNav + firma draw-in, refero EXACT)
**Objetivo:** Ejecutar `ui-viewer-18-steep`. Antes: monolito de 567 líneas con `InternalNav editorial-sidebar` escondiendo 5 sub-vistas (reports/datasets/boards/metrics/settings) tras un sidebar — el evaluador abría "Workspace" y veía 1 sola pieza. Tokens refero exactos.
**Hecho:**
- Descompuesto en SOLID: `page.tsx` 567 → ~90 líneas (composición pura). `_data.ts` tipado (`tokens` refero literal + `elevation` + 9 tipos del dominio + mock analytics realista en español, datos argentinos). `_components/` 9 piezas con props tipadas (SRP) + `charts.ts` (helpers SVG derivados de datos) + `use-steep-motion` (hook firma).
- **Eliminado `InternalNav`** (regla dura). `grep -rn "InternalNav" src/app/steep/` → vacío (rc=1), cero uso real ni en comentarios.
- **Externo (Marketing) = hero + 3 piezas**: Hero (serif Cormorant gravitas + mini-dashboard con área draw-in) · Capabilities (3 cards, número mono + título serif itálico) · DashboardShowcase (tablero mock con 4 tipos de chart: área/barras/big/ring, todos draw-in) · TrustBand (stats + cita serif + CTA con restraint).
- **Interno (Workspace) = 4 piezas TODAS apiladas en scroll** + header: WorkspaceBar (chrome, no pieza) · DashboardGrid (6 KPIs line/bars/big + filtros rango/segmento interactivos, estado local) · QueryBuilder (builder visual métrica×dimensión×filtro + preview vivo: cambiar dimensión recomputa tabla+barras desde el mock) · SavedReports (lista + compartir-look, hover mist en fila) · MetricDetail (drill-down: total grande + serie temporal 12m área draw-in + breakdown por componente).
**Decisiones:**
- Signifier es propietaria de Klim (no está en Google Fonts) → se mantiene Cormorant Garamond como sustituto serif establecido del proyecto (misma convención que stripe-real con Sohne→Inter). Tokens de color refero intactos y literales en `_data.ts` (white #ffffff · mist #fbe1d1 · ink #17191c · terracotta #5d2a1a). No "mejorar a ojo".
- Firma de motion = draw-in de paths (`pathLength` con `whileInView`) + reveal de serif sobrio + hover mist cálido (#fbe1d1 invade fondo de botón secundario y fila de tabla, nunca color de marca duro). Contenido: easing largo `[0.22,0.61,0.36,1]`, cero rebote. Reduced-motion conserva elevación estática, quita draw-in/desplazamiento.
- Diferenciable de stripe-dashboard: steep = serif/analytics/mist cálido vs stripe-dash = sans/amigable/violeta.
**Problemas encontrados:**
- Primer `next build` chocó con sesión paralela ("Another next build process is already running") — colisión esperada del modo batch. Reintento posterior: rojo por error de tipos en `src/app/calm/_components/Hero.tsx` (sesión PARALELA, no steep; `next build` corta en el primer error alfabético, calm < steep). `tsc --noEmit` aislado confirma **cero errores en `src/app/steep/`**; al recorrer, calm ya estaba arreglado → `next build` exit 0 limpio.
- DEVLOG.md modificado por la sesión calm (Sesión 19 + línea Estructura). Commit con pathspec del usuario `-- src/app/steep/ DEVLOG.md`: la entrada de calm en DEVLOG queda co-commiteada (cross-attribution tolerada por el pipeline, sin pérdida de trabajo — el código de calm está fuera del pathspec e intacto para su propio commit). NO se hizo cirugía de historia.
**Próximos pasos:**
- Sin deploy ni push (instrucción explícita del usuario: commit + verificar con git log). Verificación visual en browser pendiente para la pasada final del cluster.

### [2026-05-17] - Sesión 19 (calm — rework SOLID + eliminar InternalNav + firma breathing)
**Objetivo:** Ejecutar `ui-viewer-19-calm`. Antes: monolito de 535 líneas con `InternalNav editorial-sidebar` en el tab "Today" escondiendo 5 sub-vistas tras un sidebar (= 1 pieza para un viewer; el evaluador no clickea sub-nav).
**Hecho:**
- Descompuesto en SOLID: `page.tsx` 535 → ~95 líneas (composición pura). `_data.ts` tipado (palette + 11 tipos del dominio + mock realista en español, voz cálida sin lorem). `_components/` 11 piezas con props tipadas (SRP) + `use-calm-motion` (hook firma).
- **Eliminado `InternalNav`** (regla dura). `grep "InternalNav" src/app/calm/` → sólo 2 comentarios que documentan la remoción, cero uso real.
- **Externo (Library) = hero + 4 piezas**: Hero (serif Cormorant gigante + orbe que respira detrás del claim) · Programas (4 cards aireadas, qué incluye) · ComoFunciona (3 pasos serenos) · Testimonios (citas emocionales, "cómo se siente", sin métricas) · Planes (3, premium suave, destacado por borde no por escala).
- **Interno (Today) = 5 piezas TODAS apiladas en scroll**: TodayHeader (saludo + anclas in-page, reemplaza al sidebar) · TodaySection (programa de hoy + **mood selector interactivo** con estado local + racha SVG) · MeditationLibrary (categorías + nudge lateral) · SleepStories (grid look-player) · MoodJournal (registro semanal, barras suaves) · Settings.
**Decisiones:**
- Nav del interno = jumplinks `#calm-*` a secciones todas montadas (lo único que la rúbrica permite como nav), no switcher. `scroll-smooth` en el wrapper.
- Breathing scale (firma) reservado a 2 elementos ancla — orbe del hero + aro del play de hoy — no a todo, para que respire sin distraer. Reduced-motion quita el loop y los desplazamientos, mantiene legible.
- Labels de marca en inglés (Library/Today/Meditation/Sleep/Mood/Settings) por identidad del estilo; copy del cuerpo en español cálido (consistente con lo que había).
**Problemas encontrados:**
- `next build` rojo por `as const` en el hook: volvía `scale: [1,1.03,1]` un tuple readonly que los tipos de `motion` rechazan. Fix: keyframe como `number[]` mutable explícito en `breathing` (los demás helpers no tienen arrays de keyframes, `as const` ahí es válido). Build exit 0 tras el fix.
- Lock stale `.next/lock` de un primer build interrumpido (no había proceso real corriendo, verificado por PID) — removido, no era sesión paralela.
**Próximos pasos:**
- Sin deploy (instrucción explícita del usuario). Verificación visual en browser pendiente para una pasada final del cluster.

### [2026-05-17] - Sesión 18 (cursor — paridad + SOLID + firma sombra-multicapa, refero EXACT)
**Objetivo:** Llevar `cursor` al bar corregido: era monolito de 445 líneas con `InternalNav` escondiendo 5 sub-vistas (el evaluador abría "IDE" y veía 1 sola pieza). Tokens refero exactos.
**Hecho:**
- Descompuesto en SOLID: `page.tsx` 89 líneas (composición), `_data.ts` tipado (palette + 9 tipos del dominio + mock dev), `_components/` 11 piezas + hook de motion firma. Swap a backend = tocar `_data.ts`.
- **Eliminado `InternalNav` del interno** (regla dura). `grep -rn "InternalNav" src/app/cursor/` → sólo el comentario que documenta la remoción.
- Externo (landing dev-tool cálida): Hero+editor mock · Features (4 dev) · Showcase (código+AI lado a lado) · Pricing (Hobby/Pro/Business) · CtaFooter+Changelog.
- Interno (IDE, TODO apilado en scroll): WorkspaceBar · Editor (file-tree expand/collapse animado + tabs + código) · AiChat (conversación + diff con apply/reject real) · SettingsPanel (toggles reales) · CommandPalette (overlay ⌘P abierto, input filtra de verdad).
**Decisiones:**
- Showcase del externo = 2 paneles visibles lado a lado, NO un switcher (la regla del viewer aplica también al externo por consistencia).
- CommandPalette se renderiza ABIERTA sobre editor atenuado: el viewer la muestra sin que haya que invocarla; firma fade+scale.
- Tokens refero intactos (Parchment #f7f7f4 / Inkwell #262510 / accent #f54e00); paleta de sintaxis cálida nueva en `_data.ts` (todo ≥4.5:1 sobre blanco).
**Problemas encontrados:**
- `next build` rojo (exit 1) por error de tipos en `src/app/calm/_components/Hero.tsx:20` (`{...breathing}`) — sesión PARALELA, NO cursor. `tsc -p` completo confirma: **cero errores en `src/app/cursor/`**, los 2 únicos errores TS del proyecto son de calm. No se tocó calm (cross-session = anti-patrón del pipeline). cursor tipa 100% limpio aislado.
**Próximos pasos:**
- Sin deploy (instrucción explícita). El build global queda verde cuando la sesión de calm arregle su Hero. Verificación visual en browser pendiente al levantar dev.

### [2026-05-17] - Sesión 17 (stripe-dashboard FIX — eliminar InternalNav del interno)
**Objetivo:** Cerrar el loophole "sidebar/metáfora del negocio" (3er caso) — el interno usaba `InternalNav` en `Workspace.tsx` escondiendo 3 de 4 paneles tras sidebar (default "resumen"); el usuario abrió Dashboard y vio "un solo componente".
**Hecho:**
- Reescrito `_components/Workspace.tsx`: fuera `InternalNav` + `useState`. Ahora stack vertical (`space-y-14`) que renderiza los 4 paneles (Overview/Movimientos/Clientes/Reportes) TODOS apilados en scroll, separados por divisor fino. Mismo patrón que airbnb-friendly retrofiteado.
- `grep -rn "InternalNav" src/app/stripe-dashboard/` → vacío (reescrito hasta el comentario para que el grep mecánico del loop dé nada).
**Decisiones:**
- Workspace se mantiene como composición delgada del lado interno (SRP): sólo orquesta e inyecta el slice de datos por props. No se disuelve en page.tsx para no engordarlo.
- Firma de motion intacta: count-up (CountUp) y draw-in del gráfico (RevenueChart) viven dentro de OverviewPanel; se preservan al montarlo sin tocar.
**Problemas encontrados:**
- Ninguno. Build `npx next build` exit 0. SOLID intacto (data sigue en `_data.ts`, piezas tipadas por props).
**Próximos pasos:**
- Sin deploy (instrucción explícita del usuario). Pendiente verificación visual en browser al levantar dev.

### [2026-05-17] - Sesión 16 (linear — paridad externo/interno + SOLID + firma refero; candidato a dashboard del Exo)

**Objetivo:** ejecutar `ui-viewer-14-linear` (batch paralelo). Antes: monolito 517 líneas, data inline (`ISSUES` + arrays inline en cada sub-vista); externo = **sólo hero** (flaco, sin features/showcase/CTA); interno = `InternalNav tech-sidebar` con 5 sub-vistas escondidas tras sub-nav (= 1 pieza oculta para un viewer). Es el candidato a dashboard del propio Exo → tiene que quedar ejemplar.

**Hecho:**
- Descomposición SOLID: `page.tsx` 517 → ~60 líneas (composición pura). `_data.ts` con **tokens refero EXACTOS** centralizados (`tokens`: #08090a/#0f1011/#0c0d0e/#1a1b1d/#2a2b2e/#e4f222/#a3c40d/#f7f8f8/#a4a5ad/#8a8f98/#62666d) + mapas `statusColor`/`priorityColor` + 8 tipos del dominio + mock que **espeja el propio Exo** (issues EXO-NNN sobre el viewer/vault/diplomatura, equipo IV/AI/MR — no lorem). Swap a backend = tocar `_data.ts`.
- 14 piezas en `_components/` (props tipadas, SRP) + `use-linear-motion` (firma) + `use-command-center` (estado del workspace, SRP) + `StatusDot` (DRY).
- **Externo (Marketing) = hero + 4 piezas**: `HeroLanding` (headline afilado + doble CTA + mock estático del board) + `FeaturesGrid` (4 features power-user, iconos SVG inline, fade-up escalonado por variants) + `ProductShowcase` (captura rica del command center: sidebar + lista) + `MetricsBand` (social proof: números duros + logos) + `CtaBand` (CTA final + cierre minimal). Restraint total — Linear no grita.
- **Interno (Workspace) = command center scrolleable, piezas VISIBLES** (se eliminó el `InternalNav`): `WorkspaceBar` (chrome + trigger ⌘K **prominente** + nueva issue) + `CycleOverview` (KPIs + progreso + burndown SVG sin libs) + `IssuesList` (lista densa, **dimming de siblings** + focus ring lime keyboard-first, abre detalle) + `KanbanBoard` (5 columnas por estado, cards abren detalle) + `IssueDetail` (drawer lateral anclado al contenedor con props/descr/labels/actividad) + `CommandPalette` (⌘K overlay, **fade+scale**, navegable 100% por teclado: escribir filtra, ↑/↓, ⏎, Esc).
- Firma de motion (`use-linear-motion`): focus ring neon-lime keyboard-first + dimming de siblings al hover + ⌘K fade+scale + transiciones **instantáneas** (velocidad ES la firma; lime raro y duro). Atajo global ⌘K/Ctrl+K cableado en `useCommandCenter`. Reduced-motion: focus ring estático conservado (identidad), sin transforms. Build verde (`next build` exit 0), `/linear` estática. Sin deploy (modo batch).

**Decisiones:**
- Se eliminó `InternalNav tech-sidebar` pese a que el per-page pedía literal "InternalNav + 3-4 módulos": la decisión de arquitectura del cluster (DEVLOG, Sesión 8+) manda sobre el texto viejo del per-page — para un viewer las piezas se ven de un vistazo. Mismo criterio que dimes/modern-saas/ethereal. El ⌘K (firma power-user) se hace VISIBLE con un trigger prominente en `WorkspaceBar`, no enterrado.
- Overlays (`IssueDetail`, `CommandPalette`) anclados `absolute` al contenedor del workspace, NO `fixed` al viewport — misma lección que ios-native/material-3 (no flotar sobre el footer del viewer). El ⌘K es transitorio y disparado por el usuario, así que el overlay contenido lee bien como modal.
- Chrome alineado al cluster: linear era outlier (top-nav + "Meta info" hardcodeada que duplicaba `estilos.ts`). Ahora usa `StyleHeader`/`StyleFooter` + `DividerReveal tech-line-draw` (como dimes Sesión 9), themados dark. Paleta/tipografía/cuándo-usar salen de `estilos.ts`, sin duplicar.
- Fuente mono = `var(--font-geist-mono)` (la disponible). El plan menciona "Berkeley Mono" pero agregarla toca `layout.tsx`/`globals.css`, fuera del scope batch (`git add` scopeado a `src/app/linear/`). Mismo criterio que material-3/stripe-dashboard. La identidad refero la dan tokens+restraint+lime, no la mono puntual.

**Problemas encontrados:**
- **Race del índice git compartido en modo batch** (no previsto del todo por el pipeline): la sesión paralela `stripe-real` tenía sus archivos staged en el índice compartido; mi `git commit` sin pathspec barrió linear+stripe-real en un commit con mensaje "linear" (atribución cruzada, Patrón 5/7). Recuperado **sin pérdida y sin push previo**: `git reset --soft HEAD~1` + `git commit -- src/app/linear/` (pathspec) → commit de linear correcto y aislado; `stripe-real` quedó staged intacto para que su sesión lo commitee con su mensaje. **Lección para el pipeline: en batch, el commit DEBE ser `git commit -- src/app/<slug>/` con pathspec, no sólo `git add` scopeado — el índice es compartido entre worktrees de la misma copia.**

### [2026-05-17] - Sesión 15 (stripe-real — infra fintech refero EXACT, SOLID, firma restraint)

**Objetivo:** ejecutar `ui-viewer-16-stripe-real` (batch paralelo). Antes: monolito 479 líneas; externo = hero + logos + 3 feature cards (flaco, sin code/integración ni confianza enterprise ni CTA final); interno = `InternalNav tech-sidebar` con 5 sub-vistas (home/payments/customers/connect/radar) escondidas = 1 pieza oculta para un viewer.

**Hecho:**
- Descomposición SOLID: `page.tsx` 479 → ~95 líneas (composición pura, sin `useState`/`InternalNav`). `_data.ts` con **tokens refero EXACTOS** (`tokens`: Deep Violet `#533afd`, Midnight Ink `#061b31`, bg `#f6f9fc`, + `elevation` sutil) + 14 tipos del dominio + mock fintech preciso (IDs `pi_3M…`, montos USD/EUR/GBP/BRL, webhooks, logs, compliance). 12 piezas + hook de motion en `_components/` (props tipadas, SRP; swap a backend = tocar `_data.ts`).
- **Externo (Marketing) = hero + 4 piezas**: `Hero` (headline preciso + gradiente sutil violet + visual = mock real de la API `POST /v1/payment_intents`, doble CTA, strip de partners) + `Features` (grid técnico, iconos line SVG `LineIcon`, copy con cifras no marketing) + `IntegrationCode` (**tabs de lenguaje cURL/Node/Python** estilo docs Stripe, mono, syntax color por token, estado local) + `EnterpriseTrust` (stats duras uptime/volumen/latencia + badges PCI/SOC2/ISO) + `CtaBand` (restraint, fondo ink + un acento violet).
- **Interno (Console) = header + 4 piezas VISIBLES en scroll** (se eliminó `InternalNav`, benchmark dimes): `ConsoleHeader` (chrome: workspace + switch live/test) + `BalanceOverview` (KPIs + gráfico de volumen neto con **draw-in computado de los puntos**, no path hardcodeado, + payouts) + `TransactionsTable` (tabla densa, **filtro por estado** funcional, IDs mono, `StatusDot`) + `PaymentDetail` (timeline del PaymentIntent fallido + metadata + cliente/Radar, visible como panel no drawer) + `DevelopersPanel` (API keys con **revelar secret**, webhooks, request logs en bloque ink mono).
- Firma de motion (`use-stripe-motion.ts`) = **restraint**: `lift` (y:-2 + sombra suave tinte violet), `press` (tap firme sin rebote), `row` (hover de fila casi imperceptible), `focusRing` deep-violet (`focus-visible`), draw-in preciso del gráfico **sin count-up festivo** (lo diferencia de stripe-dashboard; y es light/preciso vs linear dark). Reduced-motion conserva elevación estática. Build verde (exit 0), `/stripe-real` estática. Sin deploy (modo batch).

**Decisiones:**
- El per-page pedía literal "Interno — InternalNav + 3-4 módulos", pero la decisión de arquitectura (regla más nueva, DEVLOG) y el plan ("leé dimes (bar)") mandan: `InternalNav` con N sub-vistas = 1 pieza oculta en un viewer. Reconvertido a console scrolleable con 4 piezas a la vista + `ConsoleHeader` con switch live/test como chrome (no cuenta como pieza). Se descartaron Customers/Connect/Radar del monolito: el brief preciso es "command center financiero" (Balance/Transactions/Detalle/Developers) — 4 grosas y distintas > 7 flojas.
- **Sohne/Source Code Pro**: Sohne es propietaria de Stripe, no cargable desde Google Fonts. Se mantiene la convención del proyecto (`font-inter` + `var(--font-roboto-mono)`), documentado en `_data.ts`. Los tokens refero que el usuario marcó "exacto" son los COLORES (#533afd / #061b31 / #f6f9fc) y el restraint — eso sí literal. Cambiar la grotesque tocaría `layout.tsx`/`globals.css`, fuera del scope del batch.
- `Card.tsx` se creó y luego se borró (YAGNI): las piezas usan superficies inline más específicas (pad/overflow/borders de cabecera variables); un wrapper genérico no aportaba.

### [2026-05-17] - Sesión 14 (stripe-dashboard — servicio confiable + dashboard amigable, SOLID, firma count-up+draw-in)

**Objetivo:** ejecutar `ui-viewer-15-stripe-dashboard` (batch paralelo). Antes: monolito 497 líneas, data inline; externo = hero + logos + 3 feature cards (flaco); interno = `InternalNav` con 5 sub-vistas **demasiado técnicas** (`ch_3O8a2dF7gK`, `price_1...`, "Volumen 24h") — eso era stripe-real, no el dashboard amigable para no-técnicos (Guadalupe inmobiliaria / Fátima comercio) que pide el brief.

**Hecho:**
- Descomposición SOLID: `page.tsx` 497 → 78 líneas (composición pura). `_data.ts` con `palette` (tokens + estados a11y) + `pesos()` (Intl es-AR) + 12 tipos del dominio + mock argentino de negocio real (alquileres, comisiones, expensas; clientes Inmobiliaria Norte / Kiosco El Sol / Estudio Lobo; sin charge IDs). Swap a backend = tocar `_data.ts`.
- 12 piezas en `_components/` con props tipadas (SRP) + `use-premium-motion` (tokens de firma).
- **Externo (servicio confiable, claro no oscuro) = hero + 3 piezas**: `Hero` (claim de negocio + CTA + preview de dashboard limpio con mini-spark que se dibuja) + `Benefits` (4, lenguaje de negocio: "ves tu plata clara", "cobrás online") + `Pricing` (3 planes simples, sin letra chica, plan destacado) + `TrustWall` (testimonios de dueños reales + sellos de seguridad).
- **Interno (dashboard amigable) = `InternalNav tech-sidebar` + 4 paneles**: `OverviewPanel` (default, densa y visible en scroll: KPIs con **count-up** + `RevenueChart` con **draw-in** + comparativa año anterior + últimos cobros) + `MovimientosPanel` (tabla clara, estados con color, **filtro por fecha** interactivo) + `ClientesPanel` (mejor cuenta destacada + cards con métricas por cliente) + `ReportesPanel` (barras ingresos por rubro animadas + donut SVG medios de cobro + look exportable PDF/Excel).
- Firma de motion = `CountUp` (cuenta 0→valor al entrar en viewport, no a ciegas) + `RevenueChart` (path Catmull-Rom suave que se dibuja, área fade-in, comparativa punteada tenue) + softLift premium + easing `[0.22,1,0.36,1]` (entra rápido, asienta lento). Nada brusco. Diferenciada de linear (instantáneo/dark/denso) y stripe-real (restraint frío). Build verde (exit 0), `/stripe-dashboard` estática. Sin deploy (modo batch).

**Decisiones:**
- `InternalNav` se mantiene como contenedor del lado interno (lo pide el plan per-page explícito) pero la rúbrica de visibilidad se cumple haciendo la vista default "Resumen" densa y scrolleable (KPIs + chart + comparativa + actividad a la vista sin tocar nav) + sidebar prominente siempre visible. No es "cuota escondida tras sub-nav".
- Negocio reorientado a no-técnico: el caso testigo del brief (Guadalupe inmobiliaria, Fátima comercio) define el lenguaje — conceptos en castellano de negocio ("Alquiler depto Güemes 1240", "Comisión venta"), no jerga de pasarela. Esa es la diferencia dura contra stripe-real.
- `CountUp` gatea con `useInView` (no anima al montar fuera de viewport): un dashboard premium "se llena" cuando lo mirás. Respeta `prefers-reduced-motion` (salta al valor).
- Fuente: se mantiene `font-inter` (la del proyecto). Cambiar a Söhne tocaría `layout.tsx`/`globals.css`, fuera del scope batch (`git add` scopeado a `src/app/stripe-dashboard/` + DEVLOG).
- No se tocaron APIs de Next/React (sin routing/fonts/ViewTransition nuevos): todo client components + motion + Tailwind, espejando el patrón ya aprobado de airbnb-friendly. No hizo falta leer `node_modules/next/dist/docs/`.

### [2026-05-17] - Sesión 13 (material-3 — Play Store + app Material, SOLID, firma ripple+elevation)

**Objetivo:** ejecutar `ui-viewer-13-material-3` (batch paralelo). Antes: monolito 531 líneas; negocio rehabilitación/kine; externo = hero + 3 feature cards (flaco, no Play Store); interno = `InternalNav m3-bottom` con 5 sub-vistas inline, sin FAB, sin swipe, sin app bar colapsable, sin controles Material You.

**Hecho:**
- Negocio reorientado a **"Mango" — app de control de gastos personales (Android mainstream argentino)**, datos AR sin lorem (Carrefour, SUBE, Edenor, Rappi, YPF, Mercado Pago; pesos con `toLocaleString("es-AR")`).
- Descomposición SOLID: `page.tsx` 531 → ~120 líneas (composición pura). `_data.ts` con tokens M3 (`m3` color roles + `elevation()` niveles 1–5 + `pesos`) + 12 tipos del dominio + mock. 15 piezas en `_components/` (props tipadas, SRP) + `use-m3-motion` (tokens de firma).
- **Externo (Play Store) = hero + 3 piezas**: `StoreHero` (ícono, claim, rating Play Store, Instalar con Ripple, mock Android) + `FeatureCards` (elevación tonal, hover sube de nivel) + `ScreenshotCarousel` (capturas scroll-snap, reusa `ScreenMock`) + `StoreReviews` (puntaje + barras 5★→1★ animadas + reseñas).
- **Interno (app Material) = phone frame + bottom nav M3 + FAB persistente + 4 vistas**: `PhoneFrame` (chrome Android, alto fijo, cada vista scrollea adentro) + `M3BottomNav` (state-layer pill con `layoutId` + Ripple por ítem — consolida el patrón m3-bottom de ola 1 dentro del frame) + `Fab` (extended FAB que **morfea** con `layoutId` a bottom sheet de carga rápida + toast) + `InicioView` (saldo filled tonal, presupuesto, categorías) + `MovimientosView` (**swipe-to-delete** con drag x + filtros) + `DetalleView` (**app bar colapsable** con `useScroll`/`useTransform` + donut SVG sin libs) + `AjustesView` (`Controls`: M3Switch/M3Slider/M3Segmented Material You).
- Firma de motion = ripple en todo lo táctil (`Ripple` compartido) + emphasized easing + elevación tonal + state-layer pill. Diferenciada dura de ios-native (spring/dot) y web-first. Build verde (exit 0, TS OK), `/material-3` estática. Sin deploy (modo batch).

**Decisiones:**
- Como ios-native (excepción de mobile), el phone frame con bottom nav M3 **se mantiene** — es la firma del mood, no sub-nav que esconde. Se cumple la rúbrica haciendo cada vista una pieza funcional distinta + FAB persistente visible + nav M3 prominente con pill animado.
- NO se reusó `InternalNav variant=m3-bottom`: usa `position: fixed` al viewport (flotaría sobre footer/divider en el viewer). `M3BottomNav` dedicado anclado al frame es legítimo (identidad Material, análogo a TabBar de ios-native). `Ripple` SÍ reusado (compartido, mandato del plan).
- Fuente: se mantiene `font-inter` (no se agregó Roboto). Agregar Google font toca `layout.tsx`/`globals.css`, fuera del scope del batch (`git add` scopeado a `src/app/material-3/` + DEVLOG). La identidad Material la dan forma/elevación/ripple/color roles, no la grotesque puntual. Pendiente menor si se quiere Roboto exacto: hacerlo en una pasada de index/layout, no per-page.
- FAB morph implementado con `layoutId` compartido entre el extended FAB y el sheet (mismo `layoutId`, sin AnimatePresence en el par para evitar conflicto de exit) — patrón shared-layout robusto.

### [2026-05-17] - Sesión 12 (ios-native — App Store + app con tab bar, SOLID; desbloquea build)

**Objetivo:** ejecutar `ui-viewer-12-ios-native` (batch paralelo). Antes: monolito 544 líneas; externo = hero App Store + carousel de capturas (hero + ~1, faltaba onboarding/features/ratings); interno = phone frame con 4 sub-vistas inline. **Excepción explícita del usuario para este estilo: el tab bar abajo ES la firma iOS — NO se elimina como "sub-nav escondido"; se mantiene, pero cada tab debe ser una pieza distinta real + descomposición SOLID igual.**

**Hecho:**
- Descomposición: `page.tsx` 544 → ~70 líneas (composición pura). `_data.ts` con 16 tipos del dominio + mock AR (app "Constancia" salud/hábitos recomendada por kine; hábitos de rehab, turnos con Lic. Romina Vázquez/Dr. Roldán/Nutr. Méndez, anillos Actividad, reseñas). 13 piezas + hook de motion en `_components/`.
- **Externo (App Store) = hero + 3 piezas**: `AppStoreHero` (ficha App Store real: ícono+claim+Obtener+rating/descargas + mockup iPhone con captura de "Hoy") + `OnboardingSlides` (3 slides **swipeables** con drag x + dots paging, patrón onboarding iOS) + `FeaturesList` (lista agrupada estilo iOS Settings, no landing web) + `RatingsReviews` (promedio + distribución + reseñas estilo App Store). NO es landing web (eso es web-first-mobile).
- **Interno (La app) = phone frame + TAB BAR ABAJO mantenido**: `PhoneShell` (frame iPhone + status bar + orquesta tab activo; `relative` ancla TabBar/sheets al teléfono, no al viewport) + `TabBar` (firma iOS, archivo propio) + 4 tabs cada uno pieza distinta real: `HoyTab` (hábitos + bounce al completar + sheet de instrucciones/acciones), `TurnosTab` (turnos + sheet confirmar/reprogramar/cancelar), `ProgresoTab` (anillos Actividad iOS SVG con fill spring + barras semana + insights), `PerfilTab` (ajustes agrupados iOS) + `BottomSheet` reusable (**slide-up + drag handle + drag-to-dismiss** = firma de acción iOS que faltaba).
- Firma de motion = springs nativos (`useIosMotion`: tabSwitch slide, sheet spring slide-up, enter spring, tap rubber) — diferenciada dura de material-3 (ripple) y web-first (sin spring). Reduced-motion estricto. Build verde (exit 0), estática. Sin deploy.

**Decisiones:**
- A diferencia del resto del cluster (que elimina InternalNav/sub-nav por la regla "piezas visibles de un vistazo"), ios-native **mantiene el tab bar** por instrucción explícita del usuario: es la firma del mood, no un sub-nav que esconde. Se cumple el espíritu de la rúbrica haciendo cada tab una pieza funcional genuinamente distinta + el bottom-sheet como pieza/firma extra visible.
- No se reusó `InternalNav variant=ios-bottom`: usa `position: fixed` al viewport (flotaría sobre el footer/página en el viewer). El frame de iPhone necesita el tab bar `absolute` anclado al frame. `TabBar` dedicado es legítimo: es la identidad iOS (análogo a los bloques de negocio per-style), no nav genérica.
- Bug de build del proyecto entero (reportado por Sesión 11 monopo: `HoyTab.tsx:76` keyframe `[1,1.18,1]` vs `scale:1` por spread de `pop` pisando `animate`) **resuelto**: reescrito a un único `animate` con keyframes en la rama `done` (sin spread frágil), `pop` eliminado del hook (YAGNI). `next build` del proyecto entero vuelve a salir exit 0.

### [2026-05-17] - Sesión 11 (monopo — paridad + SOLID + firma frosted performante)
**Objetivo:** Retrofit de monopo: monolito 668 líneas → SOLID, paridad externo/interno, firma frosted/gradient impecable y performante.
**Hecho:**
- Descompuesto: `page.tsx` ~95 líneas (composición), `_data.ts` (tokens refero + tipos + mock), 13 piezas en `_components/`.
- Externo (Work): Hero + FeaturedWork + WorkGrid + Capabilities + ContactBand (era hero + 1 featured = flaco).
- Interno (Studio): se eliminó `InternalNav` (escondía 5 sub-vistas = 1 pieza oculta, mismo criterio que dimes). Ahora WorkspaceHeader + ProjectsTable + ClientsGrid + InvoicesPanel + TeamPanel, visibles en scroll con `DividerReveal glass-shimmer` entre piezas.
- Firma centralizada en `use-frost-motion.ts` + `GhostButton` (sweep, radius 75.024px exacto) + `FrostSweep` (shimmer multicapa) + `AtmosphericBg`.
**Decisiones:**
- `AtmosphericBg` reescrito: el shifting gradient ya NO interpola la prop `background` (repaint pesado por frame). Ahora son 2 blobs radiales blureados animados sólo por transform (`x/y/scale`, `willChange: transform`), loop lento orgánico 26/32s. Cumple el requisito de performance del plan. Reduced-motion: blobs estáticos.
- Tokens refero exactos centralizados en `frost` (_data.ts): radius 75.024px, surface 0.02/blur(20px), border 0.08, accents violeta/azul. No "mejorados a ojo".
**Problemas encontrados:**
- `next build` sale 1 por type error AJENO: `src/app/ios-native/_components/HoyTab.tsx:76` (`animate={{ scale: 1 }}` vs keyframes `[1,1.18,1]` en otra prop — bug de otra sesión batch). `tsc --noEmit` aislado confirma **0 errores en monopo** y es el ÚNICO error del proyecto. No se toca ios-native (scope ajeno, regla dura anti atribución-cruzada). Turbopack compiló todos los módulos OK.
**Próximos pasos:**
- Quien tome ios-native: arreglar HoyTab.tsx:76 desbloquea el build verde de todo el proyecto.

### [2026-05-17] - Sesión 9 (modern-saas — landing SaaS canónica + dashboard visible, SOLID)

**Objetivo:** ejecutar `ui-viewer-09-modern-saas` (batch paralelo). Antes: monolito 410 líneas; externo = hero + logos + 3 features (sin pricing ni CTA final, footer sólo el genérico del chrome); interno = `InternalNav tech-sidebar` con 5 sub-vistas Vercel-like escondidas tras sub-nav (= 1 pieza oculta, contra la regla del viewer y la decisión de arquitectura de Sesión 8).

**Hecho:**
- Descomposición: `page.tsx` 410 → ~95 líneas (composición pura, sin `useState`/`InternalNav`). `_data.ts` con 13 tipos del dominio + mock SaaS creíble (clientes AR/LATAM: Naventa/Pulpo/Lumina/Delta Health/Tienda Norte/Corteza; métricas MRR/churn/NRR; equipo). 11 piezas + hook de motion + helper `CountUp` en `_components/`.
- **Externo (Producto) = hero + 5 piezas**: `LandingHero` (eyebrow + headline con palabra en gradient + doble CTA + mock dashboard con gradient sheen en movimiento) + `LogosBand` (social proof + stat, reveal escalonado) + `Features` (4 con iconos SVG inline, fade-up escalonado por variants = firma concreta) + `Pricing` (3 tiers + toggle mensual/anual REAL con −17% calculado, plan destacado) + `CtaBand` (full-width gradient radial + doble CTA) + `SaasFooter` (footer SaaS multi-columna real, refuerza producto terminado).
- **Interno (Plataforma) = dashboard scrolleable, piezas VISIBLES** (sin `InternalNav`): `WorkspaceBar` (identidad + entorno + healthy) + `MetricsOverview` (KPI cards con **count-up** al entrar en viewport + gráfico de área MRR 12m con **draw-in** del trazo) + `ClientesTabla` (**ordenable** por columna + **filtro por plan** + fila abre `ClienteDrawer` slide-in con detalle/uso/timeline) + `EquipoBilling` (plan + uso con barras + miembros con rol). Tabla + drawer = 2 escenarios; 4 piezas distintas a la vista.
- Firma de motion = scroll-reveal fade-up **escalonado** (`useSaasMotion`: variants group/groupItem whileInView) + gradient sheen sutil en el mock del hero + count-up en KPIs + draw-in del chart + hover de card = elevación soft + borde accent. Reduced-motion estricto en todo. Tipografía Geist (mood Vercel). Build verde (exit 0), estática. Sin deploy.

**Decisiones:**
- Se eliminó el `InternalNav tech-sidebar` del re-skin: para el viewer las 5 sub-vistas ocultas valían 1 pieza. Reconvertido a panel scrolleable con 4 piezas a la vista — mismo criterio que toda la tanda reciente (medico/clinico/web-first/ethereal), aplicado de fábrica.
- El plan de página pedía literal "Interno — InternalNav + 3-4 módulos", pero la decisión de arquitectura de Sesión 8 (DEVLOG, regla más nueva) manda sobre el texto del per-page escrito antes del rework. Piezas visibles > nav que esconde.
- MRR/churn/NRR en USD (jerga SaaS universal, no se fuerza $ ARS); el toque local va en los nombres de clientes/contactos AR/LATAM — realismo sin romper el negocio del estilo.

### [2026-05-17] - Sesión 10 (ethereal — paridad + descomposición SOLID + firma experimental)

**Objetivo:** ejecutar `ui-viewer-10-ethereal`. Antes: monolito 467 líneas; externo = hero + manifiesto + lista índice (hero + 2); interno = `InternalNav editorial-sidebar` con 5 sub-vistas escondidas tras sub-nav (= 1 pieza oculta, contra la regla del viewer). Motion genérico (fades), sin la firma experimental que el mood ethereal exige.

**Hecho:**
- Descomposición: `page.tsx` 467 → ~115 líneas (composición pura, sin `useState`/`InternalNav`). `_data.ts` con 13 tipos del dominio + mock de estudio creativo AR (Estudio en Construcción Permanente; clientes Aurora Botanical, Cien Soles, Matria Records, Tabacal, Norte Estudio; equipo Macarena R./Tomi M./Joaco G.). 9 piezas + hook de motion + helper `MaskHeading` en `_components/`.
- **Externo (Editorial) = hero + 4 piezas**: `HeroEthereal` (grid asimétrico, type mask reveal por línea, palabra acento cursor-aware, columna meta con parallax leve, scroll-hint) + `ProyectosGrid` (showcase grilla asimétrica, hover = velo + ficha clip-wipe, cards cursor-tilt) + `ManifiestoBlock` (editorial roto, mask reveal) + `IndiceProyectos` (índice enumerado, hover = línea acento que crece + corrimiento gestual — la interacción fuerte original, ahora tipada) + `ContactoGestual` (CTA "iniciemos algo" cursor-aware + flecha en loop).
- **Interno (Atelier) = 4 piezas VISIBLES en scroll** (se eliminó el `InternalNav` que las escondía, default del cluster): `ObrasEnTaller` (obras en proceso con etapa + barra de avance animada + strip de capacidad) + `Briefs` (**filtro funcional** por estado + nota expandible por brief) + `GaleriaAssets` (grilla asimétrica de experimentos, cursor-tilt) + `AgendaCreativa` (timeline de hitos no-corporativo, **marcar hecho funcional** con tachado). Panel con header de identidad + `DividerReveal asym-scatter` entre piezas (ritmo, no esconde).
- **Firma de motion** (`use-ethereal-motion.ts`): `reveal` (fade-up lento, easing expo, 1.05s), `maskReveal` (type mask reveal — clip-path wipe descendente sobre el texto), `drift` (entrada lateral lenta), `useCursorTilt` (desplazamiento elástico spring según mouse), `useScrollParallax` (parallax leve atado a `scrollY`). Lento y atmosférico, lo opuesto a snappy. Reduced-motion estricto: degrada a fade simple, cursor/parallax = 0, hover-variants neutralizadas — no rompe.
- Build verde (`next build` exit 0), `/ethereal` estática. No deploy (instrucción del usuario). Sin verificación en browser (modo batch, dev 3000 reservado para la sesión final).

**Decisiones:**
- **Se eliminó `InternalNav` del interno** (era el caso testigo del gap: 5 sub-vistas escondidas tras `editorial-sidebar`). Reinterpretado como "backstage del estudio" scrolleable coherente con el mood (no admin corporativo): las 4 piezas mapean 1:1 al brief interno del plan (obras / briefs / galería / agenda). Mismo criterio airbnb/operativo/web-first, ahora aplicado al estilo más "artístico" sin matar la estética.
- **Índice editorial se conserva como pieza distinta del showcase grid**: uno es galería visual (hover reveal), el otro es archivo enumerado (line-reveal gestual) — funciones distintas, ambas firma ethereal. Da paridad real (hero+4 / 4).

**Próximos pasos:**
- `ui-viewer-10-ethereal` → `status: completed`. Sigue el resto del cluster según orden sugerido en `ui-viewer-00-pipeline` (11-monopo y el resto de landings/apps/dashboards).

### [2026-05-17] - Sesión 9 (dimes — descomposición SOLID del benchmark + firma canónica)

**Objetivo:** ejecutar `ui-viewer-08-dimes`. El plan traía framing viejo ("ya rica, sólo auditar") — el usuario indicó ignorarlo: dimes hoy era un monolito del re-skin (742 líneas). Aplicar la MISMA descomposición SOLID + piezas visibles que la tanda A, y consolidar su firma de motion como la canónica del cluster.

**Hecho:**
- Descomposición: `page.tsx` 742 → ~90 líneas (composición). `_data.ts` con tipos del dominio + mock argentino (estudio de diseño: Cervecería Bestia, Studio Roma, Beat Records, etc.) + helper `inkOn()` que centraliza la tinta legible sobre rellenos saturados (WCAG 2.2 — el contraste extremo no rompe a11y). 10 piezas + 3 helpers en `_components/`.
- **Chrome alineado al cluster**: dimes era el outlier que hand-rolleaba su top-nav y una sección "Meta info" hardcodeada (duplicaba `estilos.ts`). Ahora usa `StyleHeader`/`StyleFooter` (como airbnb/clinico/medico) + `DividerReveal` variant `brutalist-stamp`. La paleta/tipografía/cuándo-usar salen de `estilos.ts`, sin duplicar.
- Externo (ESTUDIO) = `Hero` (bloque gigante) + `StatsBrutal` (color-flip duro) + `ProjectsShowcase` + `Manifiesto` (**pieza nueva** — tipografía protagonista, lo que faltaba para parear) + `CtaStrip`. Interno (ADENTRO) = se eliminó el `InternalNav` que escondía 5 sub-vistas (= 1 pieza oculta); ahora panel scrolleable con `WorkspaceHeader` + `Pipeline` (kanban 4 col) + `Horas` (timesheet + actividad + nota) + `Clientes` + `Facturas`.
- **Firma de motion canónica consolidada** en `useBrutalMotion`: hard-shadow-shift **snappy tween (`duration 0.1`, NO spring blando)** + color-flip duro + nudge seco. El monolito mezclaba `spring stiffness 400-500` con `duration 0.05/0.08` inconsistentes; ahora un solo hook define la firma y `HardButton`/`StatusChip` la propagan idéntica a TODO botón/card/fila/tab. Reduced-motion conserva la sombra dura estática (es identidad, no decoración) sin desplazamiento. Build verde (exit 0), estática. Sin deploy.

**Decisiones:**
- Interno bajó de 5 a 4 piezas (se descartó `Equipo`): mismo criterio que el retrofit de operativo-calido — la rúbrica prefiere 4 grosas y distintas, parejas con el externo (hero + 4), antes que 5 (una además escondida). Pipeline/Horas/Clientes/Facturas son las 4 más representativas de un ops de estudio.
- `dimes` deja de ser "la excepción ya armada": ahora es el benchmark **y** cumple el patrón SOLID como el resto. La firma canónica vive en un solo archivo reutilizable, lista para que los próximos briefs la referencien sin copiar valores a ojo.

**Próximos pasos:**
- Seguir el cluster (orden sugerido en `ui-viewer-00-pipeline`): modern-saas, ethereal, monopo, etc.

### [2026-05-17] - Sesión 8 (Tanda A — medico-amigable / clinico-calmado / web-first-mobile)

**Objetivo:** ejecutar la Tanda A del cluster (plans `ui-viewer-05/06/07`) ya con el patrón corregido del pipeline (no requieren retrofit: nacen SOLID). Las 3 eran monolitos del re-skin inicial con externo flaco y/o piezas escondidas tras `InternalNav`.

**Hecho:**
- **medico-amigable** (paciente-facing): monolito 332 líneas → `page.tsx` ~75 (composición). `_data.ts` con 14 tipos del dominio + mock argentino (paciente Lucas, kine Lic. Romina Vázquez, OSDE/Swiss/IOMA, ejercicios reales de rehab). 9 piezas + 3 helpers en `_components/`. Externo (El programa) = hero confiable-cálido + `ComoFunciona` (4 pasos con línea de progreso) + `Credenciales` (métricas + avales) + `Testimonios` + `FaqCta` (accordion + CTA reaseguro). Interno (Mi cuenta) = `HoyPlan` (anillo de progreso que se llena EN VIVO al marcar ejercicios = firma) + `Biblioteca` (filtro por zona funcional + marcar hecho) + `Evolucion` (SVG dolor/movilidad + logros) + `MiKine` (chat + notas del plan). Firma de motion = confianza gentil (`useGentleMotion`: reveal lento, softLift sin rebote, calmTap) + `ProgressRing` spring calmo + `CheckExercise` bounce contenido. Reduced-motion estricto. Build verde (exit 0), estática. Sin deploy.
- **clinico-calmado** (profesional-facing): monolito 459 líneas → `page.tsx` ~80 (composición). `_data.ts` con tipos del dominio + mock argentino (kine, pacientes con obra social OSDE/Swiss/IOMA/Galeno, montos $, motivos de consulta). 9 piezas + 1 helper. Externo (Servicio) = hero "El consultorio, ordenado" + captura del workspace + `Features` (4 aireadas) + `Pricing` (3 planes, Consultorio destacado) + `ConfianzaPro` (métricas + testimonios de kines/médicos + seguridad de datos) + `CtaFinal`. Interno (Workspace) = `AgendaDia` (KPIs + turnos del día con estados) + `PacientesTabla` (**buscador funcional** por nombre/obra/plan + fila expandible a detalle) + `Planes` (plantillas de tratamiento + asignar) + `Reportes` (KPIs derivados + barras de sesiones + línea de ingresos SVG + por motivo). Firma de motion = aireado/restraint (`useAiryMotion`) + **focus ring celeste** (`focusRing`, `focus-visible`) en todo interactivo — keyboard-first = parte del mood "clínico prolijo". Build verde (exit 0), estática. Sin deploy.
- **web-first-mobile**: monolito 565 líneas → `page.tsx` ~85 (composición). `_data.ts` con tipos del dominio + mock argentino (handles, contenido local, prensa AR). 9 piezas + 1 helper. Externo (Web) = `LandingHero` (nav top con hamburger mobile + hero 2-col) + `FeatureTrio` + `StatsBand` (stats + logos prensa) + `WebFooter` (**footer web real multi-columna** que refuerza "es web"). Interno (App) = re-modelado como SITIO WEB responsive multi-columna: `AppTopBar` (barra superior web, no bottom-tab) + grid `Feed` (composer + **skeleton al cargar** + posts con media + like-pop) / `Explorar` (rail: search + tendencias + a quién seguir, stackea en mobile) + `Notificaciones` + `PerfilCard` (cover + stats + tabs posts/respuestas). Firma de motion = "se siente web" (`useWebMotion`: reveal corto, hoverLift sutil sólo desktop) + `LikeButton` pop corto SIN rubber-band. Build verde (exit 0), estática. Sin deploy.

**Decisiones:**
- **web-first-mobile interno: se eliminó el phone-frame + `ios-bottom` nav del re-skin original.** Era literalmente lo contrario al brief ("no parece app, es claramente web"): un `max-w-md` con tab-bar inferior nativo. Ahora es un sitio web responsive multi-columna (top bar + grid feed/rail que colapsa a stack en mobile). Esto hace **legible la diferencia con ios-native** (lo que pedía el plan): web-first ≠ nativo.
- Las 3 de la tanda con piezas VISIBLES en scroll y sin `InternalNav` que esconda la cuota — mismo criterio que la tanda 1 retrofit, ahora aplicado de fábrica (paciente, profesional y feed social por igual).

**Próximos pasos:**
- Tanda A cerrada (plans 05/06/07 → `status: completed`). Sigue el resto del cluster según orden sugerido en `ui-viewer-00-pipeline`.

### [2026-05-17] - Sesión 7 (RETROFIT tanda 1 — operativo-calido SOLID · cierra tanda 1)

**Objetivo:** retrofit de `/operativo-calido` con el patrón airbnb/comercio. Antes: monolito de 578 líneas; estilo interno-first; interno = `InternalNav` con 6 vistas escondidas tras sub-nav (= 1 pieza oculta).

**Hecho:**
- Descomposición: `page.tsx` 578 → ~70 líneas. `_data.ts` con tipos del dominio + mock (incluye contenido de landing tipado). 11 piezas en `_components/`. Estado de pedidos + toast aislado en hook `useOrdersBoard` (SRP); `BusinessPanel` lo instancia una vez y alimenta los módulos + el toast.
- Lado externo (Inicio) = pitch mínimo visible (acorde al mood, no se fuerza landing comercial): `LandingHero`, `PanelPreview` (captura del panel), `Benefits` (3 en lenguaje llano), `SocialProof`, `FinalCta`.
- Lado interno (el protagonista) = se eliminó `InternalNav`; panel scrolleable con 4 módulos sólidos a la vista (los que pide el plan): `DaySummary` (KPIs vivos + pedidos de hoy con avanzar de un toque), `OrdersTable` (**filtro por estado** + avanzar, AnimatePresence), `Payments` (Cobros, Pendiente derivado en vivo del estado), `Customers` (WhatsApp).
- Firma de motion = **toast cálido y rápido** al avanzar un pedido (intacto, en `Toast.tsx` con reduced-motion). KPIs reaccionan en vivo. Resto minimal. Build verde (exit 0), estática. Sin deploy.

**Decisiones:**
- Se bajó de 6 a 4 módulos internos (se dejan Catálogo y Mensajes fuera): el plan pide exactamente 4 y el mood es legibilidad/"no te compliques" — 4 módulos visibles > 6 (2 sólo alcanzables por sub-nav oculto). Clientes ya cubre el ángulo WhatsApp.
- Tanda 1 de retrofit (airbnb-friendly, comercio-popular, operativo-calido) **cerrada**: las 3 descompuestas SOLID, sin sub-nav que esconda piezas.

**Próximos pasos:**
- El resto del cluster (`-05` en adelante) ya nace con el patrón corregido; no requieren retrofit.

### [2026-05-17] - Sesión 6 (RETROFIT tanda 1 — comercio-popular SOLID)

**Objetivo:** retrofit de `/comercio-popular` con el patrón de airbnb-friendly. Antes: monolito de 845 líneas; externo "Tienda" ya rico (carrito/fly-to-cart/checkout) pero todo inline; interno "Admin" = `InternalNav` con 5 vistas escondidas tras sub-nav (= 1 pieza oculta).

**Hecho:**
- Descomposición: `page.tsx` 845 → ~62 líneas (composición). `_data.ts` con todos los tipos del dominio + mock (swap a backend = 1 archivo). 12 piezas en `_components/` con props tipadas. Lógica de carrito aislada en hook `useStoreCart` (SRP: estado de compra) inyectado por `StoreFront`.
- Lado externo (Tienda) = storefront real visible en scroll: `StoreHeader` (comercio + buscador), `ProductCatalog` (filtro por categoría + agregar/stepper), `FlyToCartLayer` (firma fly-to-cart + FAB con badge pop), `CartDrawer` (carrito + checkout 1 paso + confirmación), `TrustBand`.
- Lado interno (Admin) = se eliminó el `InternalNav`; ahora panel scrolleable con 5 piezas a la vista: `MetricsPanel` (KPIs + barras), `OrdersTable` (**filtro por estado funcional**), `ProductsTable` (**toggle activo interactivo** + stock), `CustomersTable`, `StoreSettings`.
- Firma de motion intacta y minimal (mood: rápido, no design-forward): sólo el carrito tiene personalidad (fly-to-cart en arco + badge pop + steppers). Admin sin animación gratuita. Build verde (exit 0), página estática. Sin deploy.

**Decisiones:**
- `useStoreCart` como hook propio: el carrito lo comparten 3 piezas (catálogo/FAB/drawer); centralizarlo evita prop-drilling de estado y deja las piezas tontas (swappables).
- Admin pasa a scroll visible (mismo criterio que airbnb): para un viewer, módulos detrás de sub-nav = no se ven.

**Próximos pasos:**
- Falta `operativo-calido` para cerrar el retrofit de tanda 1.

### [2026-05-17] - Sesión 5 (RETROFIT tanda 1 — airbnb-friendly SOLID)

**Objetivo:** retrofit de `/airbnb-friendly` bajo la rúbrica corregida del pipeline (no medir por líneas; piezas distintas y VISIBLES; código SOLID swappable a backend). Antes: monolito de 607 líneas, lado interno = `InternalNav` con 5 sub-vistas escondidas tras sub-nav (= 1 pieza oculta para un viewer).

**Hecho:**
- Descomposición: `page.tsx` 607 → ~75 líneas (sólo composición). Data + 14 tipos del dominio en `_data.ts` (única fuente; swap a backend = tocar ese archivo). 13 piezas en `_components/` con props tipadas (SRP). Firma de motion centralizada en hook `useWarmMotion`.
- Lado externo (Buscar) = hero + 4 piezas distintas y visibles en scroll: `SearchPanel` (buscador + chips), `FeaturedListings` (grid con **filtro por categoría funcional** + wishlist), `HowItWorks` (3 pasos), `Testimonials` (social proof), `TrustCta` (band + CTA).
- Lado interno (Tu cuenta) = se eliminó el `InternalNav` que escondía las piezas; ahora home scrolleable con 5 piezas a la vista: `NextTrip` (perfil + próximo viaje + mini-timeline animado), `TripsList`, `MessagesInbox` (typing indicator), `WishlistGrid` (corazón con pop), `AccountSettings`.
- Firma de motion intacta: lift cálido, pop del corazón (1→1.28→1 spring), bounce gentil en CTAs, scroll-reveal — todo gated por `useReducedMotion`. Build verde (exit 0), página estática. Sin deploy (lo pidió el usuario).

**Decisiones:**
- Para airbnb-friendly el interno se modela como *home del huésped scrolleable* (no app con sidebar): más fiel al negocio "amigable/no técnico" y cumple "piezas visibles" de la rúbrica. `InternalNav` se reserva para estilos donde un shell de app SÍ es la metáfora correcta.
- Tipos del dominio en `_data.ts` (no `_types.ts` aparte): YAGNI, un archivo alcanza para este demo.

**Próximos pasos:**
- Retrofit de las otras 2 de tanda 1 (`comercio-popular`, `operativo-calido`) con el mismo patrón.

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

### [2026-05-17] - Sesión: rework sin-estilo (control negativo, último de la tanda)
**Objetivo:** llevar `sin-estilo` al esqueleto de la tanda (paridad estructural) pero como CONTROL NEGATIVO: cero estética, cero motion. Aplicar descomposición SOLID y eliminar el `InternalNav` viejo.

**Hecho:**
- Descompuesto: `page.tsx` 380→97 líneas (composición delgada). `_data.ts` tipado (tipos del dominio + datos placeholder genéricos, swap a backend = un archivo). 9 piezas en `_components/` con props tipadas.
- Externo: Hero + FaltaDecidir + StatsPlaceholder + CardsPlaceholder (hero + 3).
- Interno: WorkspaceBar + ItemsTable + GenteTable + NotasList + AjustesList — las 4 piezas APILADAS en scroll.
- `InternalNav` ELIMINADO (era switcher, prohibido por rúbrica). Nav = anclas in-page.
- `DividerReveal` (motion decorativo) reemplazado por `PlaceholderDivider` estático.
- `grep InternalNav src/app/sin-estilo/` = solo 2 comentarios; cero `motion/react` en la carpeta.

**Decisiones:**
- Se mantienen `StyleHeader/StyleFooter/StyleTabs`: esqueleto compartido inmutable (no se tocan componentes shared) — el micro-fade de tab de StyleTabs es lo único no removible y es justo lo que hace comparable la página vs el resto. El motion decorativo que SÍ controla la composición (DividerReveal) se quitó, fiel al plan ("si tiene motion decorativo, quitarlo").
- Datos genéricos a propósito (lorem-ish permitido acá): el punto del control negativo es que se vea sin terminar.

**Problemas encontrados:**
- `next build` sale exit 1 PERO por error de typecheck PRE-EXISTENTE y AJENO en `src/app/sport-dinamico/_components/CtaFinal.tsx:49` (`whileTap` con tuple `as const` readonly incompatible con `HTMLMotionProps`). `tsc --noEmit` confirma: los 2 únicos errores son de sport-dinamico, **CERO en sin-estilo**. `✓ Compiled successfully` — sin-estilo compila limpio. No se toca sport-dinamico (regla batch: no cirugía sobre trabajo vivo de otra sesión; queda para esa sesión/owner).

**Próximos pasos:**
- Sesión sport-dinamico (u owner) debe arreglar el `as const` de CtaFinal.tsx para que el build del cluster quede verde.
- Con sin-estilo cerrado están los 20 estilos + index → listo para el cierre del cluster en el Exo (CONTEXT.md + TODOs L47/L74/L93/L97 + archivar).
