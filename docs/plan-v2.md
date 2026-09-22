# pupuleg v2 — Variantes + Plan de entrenamiento en déficit

**Destino:** `raulfernandez/pupuleg` · rama `feat/v2-variantes-fases`
**Colocar este archivo en:** `docs/plan-v2.md` (y dejarlo en el repo como documento de referencia)
**Fecha:** 22 sep 2026 · **Atleta:** varón, nov 1982, 182 cm, 102,3 kg → objetivo 90,0 kg

---

## 0. Qué es esto y qué NO es

Esto es la especificación de cambio para el sitio. El objetivo del sitio sigue siendo el mismo: **una página que le dice al tío qué hacer hoy y con qué prescripción exacta**. No se convierte en un tracker, ni en una app con estado, ni en algo que necesite build.

Cambian tres cosas:

1. La rutina ya no es "sin variaciones" — pasa a tener un **catálogo de variantes por patrón**, con reglas de rotación.
2. Se añade el concepto de **fase**, porque el programa de aquí a marzo de 2027 no es un bloque plano: hay un déficit fuerte, una meseta forzada por el nacimiento de Alba a mediados de octubre, y un remate.
3. Las prescripciones dejan de estar escritas a pelo en el HTML y pasan a ser **datos**, para que fase + variante se apliquen sin duplicar tarjetas.

**No se toca:** la escalera de progresión de dominadas y la de fondos. Están bien construidas, son lo mejor del sitio y se quedan exactamente como están (solo se les añade una nota de fase).

---

## 1. Estado actual (verificado)

- Repo con 3 commits: `.github/workflows/`, `LICENSE`, `index.html`. Sin build, sin dependencias, sin framework.
- Todo el contenido vive dentro de `index.html`: cabecera, tres bloques (PULL / PUSH / LEGS), el 4º día opcional, el bloque de progresión, y las dos escaleras.
- Imágenes de demostración incrustadas desde el dataset `free-exercise-db`.
- El hero dice: `3 DÍAS · SIN VARIACIONES · CARGA PROGRESIVA` y `Frecuencia Lun · Mié · Vie / Con 4º día Lun · Mar · Jue · Sáb`.

**Consecuencia de diseño:** la frecuencia real de trabajo ya es la de 4 días (Lun · Mar · Jue · Sáb). El modo 3 días pasa a ser *fallback*, no el modo por defecto.

---

## 2. Calendario real de la semana (fuente de verdad)

Esto es lo que hay que reflejar en el sitio, porque ahora mismo no aparece por ningún lado:

| Día | Sesión | Hora | Notas |
|---|---|---|---|
| Lunes | PUSH | 6:30 | En ayunas |
| Martes | PULL | 6:30 | En ayunas |
| Miércoles | Trail Z2 | 6:30 | Cardio, nunca HIIT |
| Jueves | LEGS | 6:30 | En ayunas |
| Viernes | Movilidad | 6:30 | |
| Sábado | Accesorio / bombeo | 8:30 | Primer candidato al recorte |
| Domingo | Trail Z2 | 8:30 | |

Restricciones duras que condicionan la programación:
- Se levanta a las 6:00. **Nada antes.** Entre semana entrena a las 6:30 en ayunas, con el resto de la casa durmiendo.
- Calentamiento de **8–10 min obligatorio** a las 6:30. A esa hora la temperatura corporal está en mínimo y los discos intervertebrales están hidratados al máximo: es el peor momento del día para meter carga espinal fría.
- Fin de semana el gimnasio abre a las 8:30.

---

## 3. Fases

| Fase | Fechas | Peso | Qué hace el entrenamiento |
|---|---|---|---|
| **1 · Empujar** | 22 sep → 20 oct | 102,3 → 99,4 | Déficit 0,75 kg/sem. Volumen intacto, intensidad −1 punto. |
| **2 · Sostener** | 20 oct → 1 dic | Mantener 99,4 | Nace Alba. 2 full-body/semana, 45 min, sin técnicas de intensidad. Sobrevivir sin perder músculo. |
| **3 · Rematar** | 1 dic → ~2 mar 2027 | 99,4 → 90,0 | Vuelta al PPL de 4 días. Se reintroduce el RPE 8 real en los ★. |

**Principio rector de la fase 1 y 3: el déficit se paga en intensidad, no en volumen.** El volumen es el que mantiene el músculo cuando hay déficit calórico; la intensidad cercana al fallo en básicos pesados es la que genera fatiga sistémica que no se puede recuperar con 1.700 kcal y sueño roto. Por eso bajan los RPE y no las series.

### Modificadores por fase

```
fase 1 (Empujar):   rpeDelta ★ = -1     volumen = 100%   técnicas de intensidad = sí (limitadas)
fase 2 (Sostener):  rpeDelta ★ = -1     volumen = ~45%   técnicas de intensidad = NO
fase 3 (Rematar):   rpeDelta ★ =  0     volumen = 100%   técnicas de intensidad = sí (limitadas)
```

### Ajustes concretos de fase 1 sobre la prescripción actual

| Ejercicio | Actual | Fase 1 |
|---|---|---|
| Peso muerto | 4 × 4-6 · RPE 8 (convencional) | **Trap bar, agarre bajo, 4 × 4-6 · RPE 7 — todas las semanas** |
| Sentadilla libre | 4 × 4-6 · RPE 8 | 4 × 4-6 · **RPE 7-8** (RIR 2-3 en la serie top) |
| Press banca plano | 4 × 4-6 · RPE 8 | 4 × 4-6 · **RPE 7-8** |
| Press militar de pie | 4 × 5-8 · RPE 8 | 4 × 5-8 · **RPE 7-8** |
| RDL | 4 × 6-8 · RPE 8 | **3 × 8-10 · RPE 7** |
| Resto de accesorios | — | Sin cambios |

**Por qué desaparecen las semanas alternas.** El motivo para alternar era el conflicto del peso muerto convencional con el RDL del jueves y la carga espinal en frío a las 6:30. El trap bar resuelve las dos cosas: torso más vertical, la carga cae en línea con el centro de masas y la cizalla lumbar baja mucho. Con eso, el patrón de bisagra puede entrar **todas las semanas** en vez de una de cada dos — más volumen semanal en el patrón, que es justo lo que interesa en déficit.

**Agarre bajo, no alto.** El trap bar con asas altas se vuelve bastante dominante de cuádriceps, y el martes ya está a 48 h de la sentadilla del jueves. Las asas bajas mantienen el carácter de bisagra y dejan la pierna para su día. Si aun así la sentadilla del jueves se siente comprometida **dos semanas seguidas**, vuelve a semanas alternas.

**Primeras 3 semanas: las series top se van a sentir más pesadas en ayunas y en déficit. No perseguir PRs.** Es esperable y no significa que el programa esté fallando.

---

## 4. Política de proximidad al fallo

Esto hay que escribirlo en el sitio, porque es lo que evita que el RPE se interprete como "ir suave".

- **★ Básicos (peso muerto, sentadilla, banca, militar):** RIR 2-3 en fase 1 y 2, RIR 1-2 en fase 3. Nunca fallo. El coste de fatiga de una serie al fallo en sentadilla es desproporcionado respecto al estímulo adicional.
- **Accesorios multiarticulares (remos, jalones, prensa, fondos, press inclinado):** RIR 1-2 en todas las fases.
- **Aislamientos y máquinas (laterales, curls, extensiones, femoral, gemelo, face pull):** RIR 0-1. Aquí el fallo es barato: movimiento estable, poca demanda de estabilización, recuperación rápida. Es donde se compra el estímulo sin pagar fatiga.

**Técnicas de intensidad** (drop set, parciales en rango alargado, rest-pause):
- Solo en la **última serie** de: elevaciones laterales, extensiones de cuádriceps, curl de bíceps, gemelo, extensión de tríceps.
- **Máximo 2 por sesión.**
- **Nunca** en un ★.
- **Suspendidas por completo** en fase 2 y en cualquier semana con puntuación de sueño ≤2.

---

## 5. Ejecución — tempo y rango

Principio del sitio, que se mantiene y se hace explícito: **los accesorios están elegidos por su rango en posición alargada.** Es el criterio de selección y también el criterio para elegir variante.

- **Excéntrica controlada:** 2-3 s en accesorios y aislamientos, 1-2 s en las top de los ★.
- **Rango completo, con énfasis en la posición de estiramiento.** Media repetición en el estiramiento vale menos que cero; media repetición en el acortamiento es casi gratis. Si hay que recortar rango por fatiga, se recorta arriba, nunca abajo.
- **Pausa de 1 s en estiramiento** en: RDL, curl inclinado, lateral inclinado, extensión de tríceps sobre la cabeza, femoral.
- Sin rebote, sin impulso de cadera, sin bloquear de golpe.

---

## 6. Catálogo de variantes

### Reglas de rotación

1. **Los ★ no rotan** dentro de una fase. Son el ancla de la carga progresiva; si rotan, se pierde la referencia. Solo cambian por dolor articular o al cambiar de fase.
2. **Los accesorios rotan por bloques de 6 semanas** (bloque A → B → C), coincidiendo con la descarga.
3. **Rotación anticipada:** si un accesorio lleva **2 sesiones seguidas sin poder sumar ni una repetición ni un kilo** a RPE constante, cambia a la siguiente variante del catálogo en el siguiente bloque.
4. **Máximo 2 accesorios cambiados por día y por bloque.** Cambiarlo todo a la vez destruye la capacidad de comparar.
5. La variante se elige del catálogo, en orden. No es un menú de "lo que me apetezca hoy".

### PULL — tirón (espalda · bíceps · trapecio)

| Slot | A (base) | B | C | Por qué existe la alternativa |
|---|---|---|---|---|
| ★ 1 | **Peso muerto con trap bar (asas bajas)** — A en fases 1 y 2 | Peso muerto convencional — A en fase 3 | Peso muerto sumo | Trap bar reduce cizalla lumbar y demanda de movilidad de cadera en frío; permite frecuencia semanal en déficit. El convencional vuelve a ser la referencia en fase 3, cuando hay comida para pagarlo. |
| 2 | Dominadas lastradas | Dominada neutra lastrada | Jalón al pecho pronado ancho | Agarre neutro descarga el codo; el jalón permite mantener volumen cuando el peso corporal pesa 102 kg. |
| 3 | Remo Pendlay | **Remo en máquina apoyado en pecho** | Remo con mancuerna a una mano | El chest-supported elimina la lumbar de la ecuación — es la variante estrella cuando la espalda baja ya lleva peso muerto + RDL. |
| 4 | Remo en polea sentado | Jalón neutro a una mano | Remo en máquina | Unilateral corrige asimetrías y da más rango de escápula. |
| 5 | Face pull / posterior en polea | Pájaros en polea cruzada | Pec deck invertido | Rotación de material; mismo objetivo de deltoides posterior. |
| 6 | Curl con barra EZ | Curl en banco Scott | Curl de araña | Scott y araña fijan el codo y quitan impulso. |
| 7 | Curl inclinado con mancuernas | **Curl Bayesian en polea** | Curl martillo con cuerda | Bayesian mantiene tensión en el estiramiento, que es donde el bíceps crece. Martillo entra braquial y antebrazo. |

### PUSH — empuje (pecho · hombro · tríceps)

| Slot | A (base) | B | C | Por qué existe la alternativa |
|---|---|---|---|---|
| ★ 1 | Press banca plano con barra | Press banca con mancuernas | Press banca agarre cerrado | Mancuernas dan más rango y son la salida si el hombro protesta. Cerrado descarga el hombro y carga tríceps. |
| 2 | Press militar de pie con barra | **Press militar sentado con mancuernas** | Press Arnold | Sentado quita demanda de core y lumbar — relevante a las 6:30 en ayunas y en déficit. |
| 3 | Press inclinado con mancuernas | Press inclinado con barra 30° | **Cruces en polea de abajo a arriba** | Los cruces son el pectoral superior en máximo estiramiento con tensión constante. |
| 4 | Fondos en paralelas (lastre) | Press declinado con mancuernas | Fondos en máquina | La máquina permite carga precisa cuando el lastre se vuelve incómodo. |
| 5 | Elevaciones laterales | **Lateral en polea (unilateral)** | Lateral inclinado con mancuerna | La polea da tensión en la posición baja, donde la mancuerna no da nada. El lateral inclinado exagera el estiramiento. |
| 6 | Extensión de tríceps sobre la cabeza | Press francés con EZ | Extensión unilateral en polea | Todas mantienen la cabeza larga en estiramiento, que es el criterio. |

### LEGS — pierna (cuádriceps · femoral · glúteo · gemelo)

| Slot | A (base) | B | C | Por qué existe la alternativa |
|---|---|---|---|---|
| ★ 1 | **Sentadilla libre con barra** (se queda) | Hack squat — *solo como sustitución de rescate* | Sentadilla frontal | La sentadilla se mantiene como ★: ya se cede el convencional al trap bar, y perder los dos patrones de barra en la misma fase es demasiada pérdida de técnica. |
| 2 | RDL | RDL con mancuernas | Buenos días | Mancuernas permiten más rango; buenos días cambian el vector sin cambiar el patrón. |
| 3 | **Hack squat** (sustituye a la prensa como base) | Sentadilla búlgara | Prensa a una pierna | El hack es mejor que la prensa para cuádriceps: más rango en posición alargada, recorrido guiado y cero carga espinal. Con la máquina disponible, la prensa baja a tercera opción. |
| 4 | Curl femoral sentado | Curl femoral tumbado | Curl nórdico asistido | Sentado trabaja el femoral con cadera flexionada (más estiramiento); tumbado con cadera extendida. Complementarios, no intercambiables — rotar, no elegir. |
| 5 | Extensiones de cuádriceps | Extensión unilateral | Sissy squat | |
| 6 | Gemelo de pie | Gemelo en prensa | Gemelo unilateral con mancuerna | |

### 4º DÍA (sábado, 8:30) — accesorio / bombeo

Sin ★. RPE 7-8, sin fallo pesado, 45 min máximo. Rota libremente dentro del catálogo de aislamientos de arriba. Prioridad de contenido, en este orden:

1. **Deltoides lateral** (4 × 15-20) — el mayor retorno visual de todo el programa en una recomposición: la anchura de hombro es lo que rompe la silueta cuando el peso baja.
2. **Deltoides posterior** (3 × 15-20) — salud de hombro y postura de escritorio.
3. Bíceps martillo (3 × 12-15)
4. Tríceps en polea (3 × 12-15)
5. Gemelo sentado / sóleo (3 × 15-20)
6. Core — rueda abdominal (3 × 8-12)

**Alternativa cero-carga** (se mantiene la del sitio): 20-30 min de cardio suave + movilidad.

---

## 7. Fase 2 — plantilla full-body (a partir del 20 oct)

Dos sesiones por semana, 45-50 min, RPE 7 techo, sin técnicas de intensidad, sin ★ a RPE alto. **El objetivo no es progresar: es mantener el músculo y la técnica con 5 horas de sueño roto.** Si una semana solo sale una sesión, es una victoria, no un fallo.

**Día A**
| Ejercicio | Prescripción |
|---|---|
| Hack squat (o sentadilla) | 3 × 5-6 · RPE 7 |
| Press banca | 3 × 5-6 · RPE 7 |
| Remo apoyado en pecho | 3 × 8-10 · RPE 8 |
| Elevación lateral | 3 × 15 · RPE 9 |
| Curl EZ | 2 × 10 |

**Día B**
| Ejercicio | Prescripción |
|---|---|
| Peso muerto trap bar (o RDL) | 3 × 6 · RPE 7 |
| Press militar sentado | 3 × 6-8 · RPE 7 |
| Dominada / jalón | 3 × 8 · RPE 8 |
| Prensa | 2 × 10-12 |
| Extensión de tríceps | 2 × 12 |
| Gemelo | 2 × 12-15 |

Suelo de proteína en fase 2: **160 g**. Es lo único de nutrición que entra en el sitio, porque es lo que sostiene el músculo cuando el entrenamiento baja a mínimos.

---

## 8. Progresión, descarga y autorregulación

### Progresión (se mantiene la del sitio, con matiz de déficit)
- **★ Básicos:** doble progresión. Al cerrar el tope del rango en todas las series al RPE objetivo, subir el salto mínimo la semana siguiente.
- **Accesorios:** primero repeticiones y calidad de contracción, después peso.
- **En déficit, mantener la carga ya es progreso.** Si a 1.700 kcal de media se conserva el peso en barra y las repeticiones, el programa está funcionando.

### Descarga
- **Cada 5 semanas** en fase 1 y 3 (antes que las 5-6 actuales; el déficit acorta el ciclo).
- La descarga **corta series, no carga**: ~50% de las series, mismo peso, RPE 7. Bajar el peso en déficit es la forma más rápida de perder la adaptación.

### Autorregulación — check-in diario
Anotar cada día, de 1 a 5: **sueño · articulaciones · energía**.

| Señal | Acción |
|---|---|
| Dos métricas en ≤2 | Cae el accesorio del sábado y las series top bajan a RPE 6-7 esa semana |
| Molestia articular en un patrón | Cambiar a la variante B/C de ese slot, no eliminar el patrón |
| Semana con sueño ≤2 y toca LEGS | **El hack squat sustituye a la sentadilla esa semana.** El día de pierna no se salta nunca; se degrada. |
| Tres semanas sin sumar en ningún ★ | Revisar antes el registro de comida que el programa |

### Orden de recorte cuando el sueño se rompe
**Nunca se recorta proteína ni el suelo de 10.000 pasos.** Lo que cae, en este orden:

1. El accesorio del sábado
2. Una de las dos carreras (Mié o Dom)
3. Fusionar Push + Pull en una sola sesión de torso

---

## 9. Implementación — tareas para Claude Code

### Arquitectura propuesta

Sigue sin haber build. Se extrae el contenido a un módulo de datos y el HTML pasa a renderizarlo:

```
index.html          # shell + estilos + <script type="module">
data/programa.js    # export const PROGRAMA = { ... }   ← toda la rutina como datos
docs/plan-v2.md     # este documento
```

`type="module"` funciona en GitHub Pages sin tooling. Si por lo que sea prefieres mantener el monolito de un solo archivo, la alternativa es un `<script type="application/json" id="programa">` embebido — mismo modelo de datos, mismo render, un archivo. Decisión tuya; por defecto, módulo separado.

### Modelo de datos

```js
export const PROGRAMA = {
  meta: { version: 2, actualizado: '2026-09-22', objetivo: { pesoInicio: 102.3, pesoObjetivo: 90.0 } },

  fases: [
    { id: 'empujar',  nombre: 'Empujar',  desde: '2026-09-22', hasta: '2026-10-20',
      objetivo: '102,3 → 99,4 kg',
      mod: { rpeDeltaPrincipales: -1, volumenPct: 100, tecnicasIntensidad: true },
      plantilla: 'ppl4' },
    { id: 'sostener', nombre: 'Sostener', desde: '2026-10-20', hasta: '2026-12-01',
      objetivo: 'Mantener 99,4 kg',
      mod: { rpeDeltaPrincipales: -1, volumenPct: 45, tecnicasIntensidad: false },
      plantilla: 'fullbody2' },
    { id: 'rematar',  nombre: 'Rematar',  desde: '2026-12-01', hasta: '2027-03-02',
      objetivo: '99,4 → 90,0 kg',
      mod: { rpeDeltaPrincipales: 0, volumenPct: 100, tecnicasIntensidad: true },
      plantilla: 'ppl4' }
  ],

  dias: [
    { id: 'push', nombre: 'PUSH', subtitulo: 'Empuje — pecho · hombro · tríceps', dia: 'Lunes', hora: '6:30', slots: [...] },
    // pull, legs, accesorio
  ],

  // Un slot referencia un patrón y lista sus variantes en orden A/B/C
  slots: [
    { id: 'push.1', principal: true, patron: 'empuje-horizontal',
      variantes: ['press-banca-barra', 'press-banca-mancuernas', 'press-banca-cerrado'],
      prescripcion: { series: 4, repsMin: 4, repsMax: 6, rpe: 8, descansoMin: 3, descansoMax: 5 } },
    // ...
  ],

  ejercicios: {
    'press-banca-barra': {
      nombre: 'Press banca plano con barra',
      ejecucion: 'Escápulas retraídas y ligero arco...',
      imagen: 'free-exercise-db-id',
      etiquetas: ['barra', 'estiramiento']
    },
    // ...
  },

  bloques: [ { id: 'A', semanas: '1-6' }, { id: 'B', semanas: '7-12' }, { id: 'C', semanas: '13-18' } ],

  reglas: { progresion: [...], rotacion: [...], descarga: {...}, autorregulacion: {...}, ordenRecorte: [...] }
};
```

**Regla de render clave:** el RPE mostrado = `prescripcion.rpe + (slot.principal ? fase.mod.rpeDeltaPrincipales : 0)`. Cuando el delta no es cero, la tarjeta muestra el RPE ajustado en grande y el original tachado al lado, con un badge de la fase. Así se ve de un vistazo que no es la prescripción "normal" y por qué.

### Tareas, en orden

1. **Rama** `feat/v2-variantes-fases`.
2. **Extraer** el contenido actual de `index.html` a `data/programa.js` sin cambiar ni una prescripción. Render desde datos. **Criterio de aceptación: la página renderizada es visualmente idéntica a la actual.** Commit aparte — este paso es una refactorización pura y tiene que poder revisarse solo.
3. **Añadir fases** al modelo + selector de fase en el hero (tres pestañas). Al cambiar de fase se recalculan los RPE de los ★ y el volumen; la fase activa se deduce de la fecha actual por defecto, con override manual.
4. **Poblar el catálogo de variantes** según la sección 6. Cada ejercicio nuevo necesita su texto de ejecución (mismo tono que los existentes: dos frases, imperativo, un punto técnico y un error a evitar).
5. **Selector de bloque A/B/C** que intercambia los accesorios en sitio. Los ★ ignoran el selector salvo en el caso del peso muerto (que sí ofrece trap bar como variante por defecto en fase 1).
6. **Disclosure de variantes** en cada tarjeta: un desplegable discreto con las otras dos opciones y la línea de "por qué" de la tabla de la sección 6.
7. **Sección nueva: calendario semanal** (tabla de la sección 2), incluyendo los días de trail Z2 y movilidad. Ahora mismo el sitio no sabe que existen y eso hace que la semana parezca de 4 días cuando es de 7.
8. **Sección nueva: fase 2 full-body** (sección 7), visible solo cuando la fase activa es `sostener`, y accesible siempre desde el índice.
9. **Sección nueva: autorregulación y orden de recorte** (sección 8).
10. **Actualizar el copy del hero.** `3 DÍAS · SIN VARIACIONES · CARGA PROGRESIVA` ya es falso en dos de tres. Propuesta: `4 DÍAS · VARIANTES POR BLOQUES · CARGA PROGRESIVA`. Frecuencia por defecto pasa a Lun · Mar · Jue · Sáb, con el modo 3 días como alternativa.
11. **Nota de calentamiento** fija en las sesiones de 6:30: 8-10 min obligatorios, con la razón (temperatura corporal mínima, discos hidratados).
12. **Imágenes de las variantes nuevas:** mapear contra `free-exercise-db` donde exista; si no hay match, placeholder neutro + enlace a MuscleWiki. No bloquear el merge por imágenes que falten.
13. **Verificar** que el workflow de Pages sigue pasando y que no se rompe ningún enlace de imagen existente.
14. **README** mínimo: qué es el sitio, cómo se editan los datos, cómo se añade una variante.

### Criterios de aceptación globales
- Sin dependencias nuevas. Sin paso de build.
- Funciona con JS desactivado al menos para leer la fase 1 (renderizar un `<noscript>` con la tabla base, o server-render el HTML por defecto).
- Legible en móvil — es lo que va a mirar en el gimnasio a las 6:30 con una mano.
- Las escaleras de dominadas y fondos quedan intactas.

---

## 10. Material y suplementación — resuelto

**Trap bar: disponible.** Pasa a variante A del ★ de PULL en fases 1 y 2, asas bajas, frecuencia semanal. El convencional vuelve en fase 3.

**Hack squat: disponible (máquina).** Sustituye a la prensa como base del slot 3 de LEGS, y queda como sustitución de rescate de la sentadilla en semanas de sueño roto.

**Creatina: ya saturado.** Lleva ~1 mes tomándola — primera semana a 9 g, después 5 g/día. Consecuencias:

- **La báscula ya está limpia.** La ganancia de agua intramuscular (0,8-1,5 kg) se acumuló entre finales de agosto y principios de septiembre y ya está hecha. A partir de aquí el peso refleja tejido, no saturación. Las reglas de revisión semanal del lunes se pueden aplicar tal cual, sin descontar nada.
- **Retroactivamente, el diagnóstico se afina:** la fase A (24 ago – 9 sep, −1,0 kg/semana) se logró **mientras** se acumulaba esa agua, así que la pérdida real de tejido fue mayor de lo que marcó la báscula. Y la fase B (9 – 22 sep, +0,4 kg/semana) ya no tiene ningún confusor hídrico: es calorías, punto. Las 2.586 kcal/día de media son la explicación completa.
- **No se toca la dosis y no se cicla.** 5 g/día es correcto para 102 kg una vez saturado, y no hay que recargar. El timing es irrelevante con el depósito lleno, así que se queda donde está: con el agua con sal de las 6:00.
- **No se retira durante el déficit.** Es de lo poco que sostiene el rendimiento cuando bajan las calorías — retirarla en fase 1 sería tirar piedras al propio tejado.

**Única decisión pendiente:** módulo separado (`data/programa.js`) vs. monolito de un solo archivo con JSON embebido. Por defecto, módulo.
