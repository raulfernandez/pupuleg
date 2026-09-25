# pupuleg

Página estática con la rutina de fuerza Push/Pull/Legs. Sin build, sin dependencias:
`index.html` carga `data/app.js` (ES module) en el navegador, que renderiza todo a partir
de `data/programa.js`. Se publica en GitHub Pages vía `.github/workflows/static.yml`
en cada push a `main`.

## Estructura

```
index.html          shell + estilos + <div id="app"> + <noscript> con la fase 1 en tablas planas
data/programa.js     todo el contenido del programa como datos (fases, slots, ejercicios, reglas...)
data/app.js          lógica de render: pestañas de fase, selector de bloque A/B/C, disclosure de variantes
assets/img/          fotos de demostración (inicio/final) por ejercicio, dataset free-exercise-db
docs/plan-v2.md       especificación completa del programa (fases, catálogo de variantes, reglas)
ruta-a-90.html       plan de pérdida de peso a 90 kg: fases, macros, suplementos, hitos, revisión semanal
menu.html            menú semanal interactivo (1.850 / 1.500 kcal) con opciones intercambiables y lista de la compra
```

## Editar el programa

Todo el contenido vive en `data/programa.js`, sin build: guarda el archivo y recarga la página.

- **Cambiar una prescripción:** edita el objeto `prescripcion` del `slot` correspondiente en
  `PROGRAMA.slots` (`series`, `repsMin`, `repsMax`, `rpe`, `descansoMin`, `descansoMax`).
- **Añadir una variante a un ejercicio existente:**
  1. Añade la entrada en `PROGRAMA.ejercicios` con `nombre`, `ejecucion` (dos frases, imperativo,
     un punto técnico y un error a evitar — mismo tono que las demás) y, si hay fotos, `imagen0`/`imagen1`
     apuntando a `assets/img/<id>-0.jpeg` / `-1.jpeg`. Sin fotos, dejar `imagen0`/`imagen1` en `null`
     (se muestra un placeholder con enlace a MuscleWiki).
  2. Añade su id al array `variantes` del `slot` que corresponda, en el orden A → B → C.
- **Fases:** cada fase en `PROGRAMA.fases` tiene un `mod.rpeDeltaPrincipales` que se resta al RPE
  de los slots `principal: true`, y overrides explícitos por slot en `slot.prescripcionPorFase`
  cuando el cambio no es solo de RPE (p. ej. el RDL en fase Empujar).
- **Fase 2 (Sostener):** es una plantilla aparte en `PROGRAMA.fase2FullBody`, no usa el catálogo
  de variantes — se muestra sola cuando esa fase está activa.

## Imágenes que faltan

Las variantes nuevas sin foto muestran un marcador neutro con enlace a MuscleWiki en vez de
bloquear el contenido. Para añadir una foto real, cae el par de imágenes en `assets/img/` con
el mismo id del ejercicio (`<id>-0.jpeg` inicio, `<id>-1.jpeg` final) y referencia las rutas
en `imagen0`/`imagen1`.

## Plan y menú (nutrición)

`ruta-a-90.html` y `menu.html` son páginas autocontenidas (sin dependencias salvo Google Fonts),
enlazadas desde la barra de navegación. No leen `data/programa.js`: el contenido va dentro de cada
archivo. En `menu.html` las opciones y los valores nutricionales por 100 g están en las constantes
`O` y `F` del `<script>`; las marcas de hitos y la selección del menú se guardan en `localStorage`.
