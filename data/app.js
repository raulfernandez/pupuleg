import { PROGRAMA } from './programa.js';

const BLOQUE_IDS = PROGRAMA.bloques.map((b) => b.id);

function hoy() {
  const d = new Date();
  return d.toISOString().slice(0, 10);
}

function faseActivaPorFecha() {
  const hoyStr = hoy();
  const enRango = PROGRAMA.fases.find((f) => hoyStr >= f.desde && hoyStr < f.hasta);
  if (enRango) return enRango.id;
  return hoyStr < PROGRAMA.fases[0].desde ? PROGRAMA.fases[0].id : PROGRAMA.fases[PROGRAMA.fases.length - 1].id;
}

function leerEstado() {
  let guardado = {};
  try {
    guardado = JSON.parse(localStorage.getItem('pupuleg:estado') || '{}');
  } catch (e) { /* almacenamiento no disponible: seguimos con valores por defecto */ }
  const faseIds = PROGRAMA.fases.map((f) => f.id);
  return {
    faseId: faseIds.includes(guardado.faseId) ? guardado.faseId : faseActivaPorFecha(),
    bloqueId: BLOQUE_IDS.includes(guardado.bloqueId) ? guardado.bloqueId : 'A',
  };
}

function guardarEstado(estado) {
  try {
    localStorage.setItem('pupuleg:estado', JSON.stringify(estado));
  } catch (e) { /* almacenamiento no disponible: no es crítico */ }
}

const estado = leerEstado();

function fase(id) {
  return PROGRAMA.fases.find((f) => f.id === id);
}

function ejercicio(id) {
  return PROGRAMA.ejercicios[id];
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function fmtRango(min, max) {
  return min === max ? `${min}` : `${min}-${max}`;
}

function fmtPrescripcion(p) {
  let out = `${p.series} × ${fmtRango(p.repsMin, p.repsMax)}`;
  if (p.rpe !== undefined) out += ` · RPE ${p.rpe}`;
  if (p.descansoMin !== undefined) out += ` · descanso ${fmtRango(p.descansoMin, p.descansoMax)} min`;
  return out;
}

function variantePrincipalActiva(slot, faseId) {
  if (slot.varianteDefaultPorFase && slot.varianteDefaultPorFase[faseId]) {
    return slot.varianteDefaultPorFase[faseId];
  }
  return slot.variantes[0];
}

function varianteActiva(slot, faseId, bloqueId) {
  if (slot.principal) return variantePrincipalActiva(slot, faseId);
  const idx = BLOQUE_IDS.indexOf(bloqueId);
  return slot.variantes[idx] || slot.variantes[0];
}

// Devuelve { base, activa, ajustada } — activa es la que se muestra en grande,
// base es la prescripción "normal" (fase Rematar / sin ajuste) para el tachado.
function prescripcionActiva(slot, faseId) {
  const base = slot.prescripcion;
  const overrides = slot.prescripcionPorFase && slot.prescripcionPorFase[faseId];
  if (overrides) {
    return { base, activa: { ...base, ...overrides }, ajustada: true };
  }
  const f = fase(faseId);
  if (slot.principal && f.mod.rpeDeltaPrincipales !== 0 && typeof base.rpe === 'number') {
    const activa = { ...base, rpe: base.rpe + f.mod.rpeDeltaPrincipales };
    return { base, activa, ajustada: true };
  }
  return { base, activa: base, ajustada: false };
}

function frameHtml(ej, altBase) {
  if (ej.imagen0 && ej.imagen1) {
    return `
      <div class="frame">
        <img class="f0" src="${esc(ej.imagen0)}" alt="${esc(altBase)} — inicio" loading="lazy" decoding="async">
        <img class="f1" src="${esc(ej.imagen1)}" alt="${esc(altBase)} — final" loading="lazy" decoding="async">
        <span class="rep">rep</span>
      </div>`;
  }
  return `
    <div class="frame frame-placeholder">
      <div class="ph-inner">
        <span class="ph-label">Sin foto todavía</span>
        <a href="https://musclewiki.com/exercises" target="_blank" rel="noopener">Ver en MuscleWiki ↗</a>
      </div>
    </div>`;
}

function disclosureHtml(slot, faseId, activaId) {
  if (slot.variantes.length < 2) return '';
  const otras = slot.variantes.filter((v) => v !== activaId);
  if (!otras.length) return '';
  const items = otras.map((id) => {
    const e = ejercicio(id);
    return `<li><b>${esc(e.nombre)}</b></li>`;
  }).join('');
  const porque = slot.porque ? `<p class="variant-porque">${esc(slot.porque)}</p>` : '';
  return `
    <details class="variants">
      <summary>Otras variantes de este hueco</summary>
      <ul>${items}</ul>
      ${porque}
    </details>`;
}

function cardHtml(slotId, faseId, bloqueId) {
  const slot = PROGRAMA.slots.find((s) => s.id === slotId);
  const varianteId = varianteActiva(slot, faseId, bloqueId);
  const ej = ejercicio(varianteId);
  const { base, activa, ajustada } = prescripcionActiva(slot, faseId);
  const f = fase(faseId);

  let prescHtml = `<p class="presc">${esc(fmtPrescripcion(activa))}</p>`;
  if (ajustada) {
    prescHtml = `
      <p class="presc is-ajustada">
        ${esc(fmtPrescripcion(activa))}
        <span class="presc-base">antes ${esc(fmtPrescripcion(base))}</span>
        <span class="fase-badge">FASE ${esc(f.nombre.toUpperCase())}</span>
      </p>`;
  }

  return `
    <article class="card${slot.principal ? ' is-main' : ''}">
      ${frameHtml(ej, ej.nombre)}
      <div class="body">
        <h3>${esc(ej.nombre)}</h3>
        ${slot.principal ? '<span class="tag">Levantamiento principal</span>' : ''}
        ${prescHtml}
        <p class="cue">${esc(ej.ejecucion)}</p>
        ${disclosureHtml(slot, faseId, varianteId)}
      </div>
    </article>`;
}

function diaHtml(dia, faseId, bloqueId) {
  const cards = dia.slots.map((sid) => cardHtml(sid, faseId, bloqueId)).join('');
  const alt = dia.alternativaCeroCarga
    ? `<p class="dia-alt">Alternativa cero-carga: ${esc(dia.alternativaCeroCarga)}</p>` : '';
  return `
    <section class="day" id="${esc(dia.id)}">
      <header class="day-h">
        <span class="day-code">${esc(dia.codigo)}</span>
        <span class="day-sub">${esc(dia.nombre)} · ${esc(dia.diaSemana)} ${esc(dia.hora)}</span>
      </header>
      <div class="grid">${cards}</div>
      ${alt}
    </section>`;
}

function calendarioHtml() {
  const hoyStr = hoy();
  const diaHoy = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'][new Date(hoyStr).getUTCDay()];
  const filas = PROGRAMA.calendario.map((c) => `
    <tr class="${c.dia === diaHoy ? 'is-today' : ''}">
      <td>${esc(c.dia)}</td><td>${esc(c.sesion)}</td><td>${esc(c.hora)}</td><td>${esc(c.notas)}</td>
    </tr>`).join('');
  return `
    <section class="cal" id="calendario">
      <h2 class="section-h">Calendario semanal</h2>
      <p class="section-lead">La semana real es de 7 días, no de 4. El calentamiento de ${esc(PROGRAMA.calentamiento.minutos)} min es obligatorio en toda sesión de 6:30.</p>
      <table class="cal-table">
        <thead><tr><th>Día</th><th>Sesión</th><th>Hora</th><th>Notas</th></tr></thead>
        <tbody>${filas}</tbody>
      </table>
      <p class="cue cal-warmup">${esc(PROGRAMA.calentamiento.nota)}</p>
    </section>`;
}

function heroHtml(faseId) {
  const f = fase(faseId);
  const tabs = PROGRAMA.fases.map((x) => `
    <button class="fase-tab${x.id === faseId ? ' is-active' : ''}" data-fase="${esc(x.id)}" type="button">
      ${esc(x.nombre)}
    </button>`).join('');
  return `
    <section class="hero">
      <div class="kick">4 DÍAS · VARIANTES POR BLOQUES · CARGA PROGRESIVA</div>
      <h1>Push · Pull<span>Legs</span></h1>
      <p class="lead">Rutina de fuerza montada sobre los cuatro básicos más estudiados, con accesorios elegidos por su rango en posición alargada y un catálogo de variantes que rota por bloques. Cada ejercicio muestra el gesto del movimiento y su prescripción.</p>
      <div class="fase-tabs">${tabs}</div>
      <p class="fase-resumen"><b>${esc(f.nombre)}</b> · ${esc(f.objetivo)} — ${esc(f.resumen)}</p>
      <div class="params">
        <div><div class="k">Frecuencia</div><div class="v">Lun · Mar · Jue · <em>Sáb</em></div></div>
        <div><div class="k">3 días (fallback)</div><div class="v">Lun · Mié · Vie</div></div>
        <div><div class="k">Principales ★</div><div class="v"><em>RPE ${8 + f.mod.rpeDeltaPrincipales}</em> · 3-5 min</div></div>
        <div><div class="k">Descarga</div><div class="v">${esc(PROGRAMA.reglas.descarga.frecuencia.split('.')[0])}</div></div>
      </div>
      <div class="bloque-select">
        <span class="k">Bloque de accesorios</span>
        <div class="bloque-tabs">
          ${PROGRAMA.bloques.map((b) => `
            <button class="bloque-tab${b.id === estado.bloqueId ? ' is-active' : ''}" data-bloque="${esc(b.id)}" type="button">
              ${esc(b.id)} <small>sem ${esc(b.semanas)}</small>
            </button>`).join('')}
        </div>
      </div>
    </section>`;
}

function fase2Html(faseId) {
  const f2 = PROGRAMA.fase2FullBody;
  const abierta = faseId === 'sostener';
  const diasHtml = f2.dias.map((d) => `
    <div class="f2-dia">
      <h4>Día ${esc(d.id)}</h4>
      <table class="f2-table">
        <tbody>
          ${d.ejercicios.map((e) => `<tr><td>${esc(e.nombre)}</td><td>${esc(e.prescripcion)}</td></tr>`).join('')}
        </tbody>
      </table>
    </div>`).join('');
  return `
    <section class="road${abierta ? ' is-active-phase' : ''}" id="fase2">
      <details class="fase2-details" ${abierta ? 'open' : ''}>
        <summary class="day-h fase2-summary">
          <span class="day-code" style="font-size:clamp(30px,6vw,52px)">Fase 2 · Sostener</span>
          <span class="day-sub">Plantilla full-body — solo activa del 20 oct al 1 dic</span>
        </summary>
        <p class="road-intro">${esc(f2.nota)} Suelo de proteína en esta fase: <b>${esc(f2.proteinaMinimaG)} g</b>.</p>
        <div class="f2-grid">${diasHtml}</div>
      </details>
    </section>`;
}

function reglasHtml() {
  const r = PROGRAMA.reglas;
  const fallo = r.proximidadFallo.map((x) => `<li><b>${esc(x.grupo)}</b> <span class="muted">(${esc(x.detalle)})</span>: ${esc(x.regla)}</li>`).join('');
  const prog = r.progresion.map((x) => `<li><b>${esc(x.titulo)}:</b> ${esc(x.detalle)}</li>`).join('');
  const rot = r.rotacion.map((x) => `<li>${esc(x)}</li>`).join('');
  return `
    <section class="prog" id="reglas">
      <h2>Política de proximidad al fallo</h2>
      <ul>${fallo}</ul>
      <h2>Técnicas de intensidad</h2>
      <ul>
        <li>${esc(r.tecnicasIntensidad.aplicaA)}</li>
        <li>${esc(r.tecnicasIntensidad.limite)}</li>
        <li>${esc(r.tecnicasIntensidad.prohibido)}</li>
      </ul>
      <h2>Ejecución — tempo y rango</h2>
      <ul>
        <li><b>Excéntrica:</b> ${esc(r.ejecucion.excentrica)}</li>
        <li>${esc(r.ejecucion.rango)}</li>
        <li>${esc(r.ejecucion.pausaEstiramiento)}</li>
        <li>${esc(r.ejecucion.otros)}</li>
      </ul>
      <h2>Progresión y descarga</h2>
      <ul>
        ${prog}
        <li><b>Descarga:</b> ${esc(r.descarga.frecuencia)} ${esc(r.descarga.como)}</li>
      </ul>
      <h2>Rotación de variantes</h2>
      <ul>${rot}</ul>
    </section>`;
}

function autorregulacionHtml() {
  const r = PROGRAMA.reglas.autorregulacion;
  const orden = PROGRAMA.reglas.ordenRecorte;
  const filas = r.señales.map((s) => `<tr><td>${esc(s.señal)}</td><td>${esc(s.accion)}</td></tr>`).join('');
  const recorte = orden.orden.map((x, i) => `<li>${i + 1}. ${esc(x)}</li>`).join('');
  return `
    <section class="prog" id="autorregulacion">
      <h2>Autorregulación — check-in diario</h2>
      <p class="road-intro">${esc(r.checkIn)}</p>
      <table class="cal-table">
        <thead><tr><th>Señal</th><th>Acción</th></tr></thead>
        <tbody>${filas}</tbody>
      </table>
      <h2>Orden de recorte cuando el sueño se rompe</h2>
      <p class="road-intro">${esc(orden.principio)}</p>
      <ul class="recorte-list">${recorte}</ul>
    </section>`;
}

function peldanoHtml(p, extra) {
  const ej = ejercicio(p.ejercicio);
  return `
    <div class="phase${extra ? ' is-goal' : ''}">
      <div class="pnum">${esc(p.num || 'META')}</div>
      <div class="pframe">
        ${ej.imagen0 ? `
          <img class="f0" src="${esc(ej.imagen0)}" alt="${esc(ej.nombre)} inicio" loading="lazy" decoding="async">
          <img class="f1" src="${esc(ej.imagen1)}" alt="${esc(ej.nombre)} final" loading="lazy" decoding="async">
        ` : `<div class="ph-inner"><span class="ph-label">Sin foto</span></div>`}
      </div>
      <div class="pbody">
        <h4>${esc(ej.nombre)}</h4>
        <p class="ptarget">${p.num ? 'Objetivo: ' : ''}${esc(p.objetivo)}</p>
        ${p.siguiente ? `<p class="pnext">▲ ${esc(p.siguiente)}</p>` : ''}
        <p class="pcue">${esc(p.cue || ej.ejecucion)}</p>
      </div>
    </div>`;
}

function escaleraHtml(id, esc_) {
  const peldanos = esc_.peldanos.map((p) => peldanoHtml(p, false)).join('');
  const meta = peldanoHtml({ ...esc_.meta, num: null }, true);
  return `
    <section class="road" id="road-${esc(id)}">
      <div class="day-h"><span class="day-code" style="font-size:clamp(30px,6vw,52px)">${esc(esc_.titulo)}</span></div>
      <p class="road-intro">${esc(esc_.intro)}</p>
      <p class="road-nota-fase">${esc(esc_.notaFase)}</p>
      <div class="ladder">${peldanos}${meta}</div>
    </section>`;
}

function render() {
  const app = document.getElementById('app');
  if (!app) return;
  const faseId = estado.faseId;
  const bloqueId = estado.bloqueId;
  const enSostener = faseId === 'sostener';

  const diasHtml = enSostener
    ? `<div class="ppl-inactive">
         <p>La fase activa es <b>Sostener</b>: no se entrena el PPL de 4 días. La plantilla de esta fase está más abajo, en <a href="#fase2">Fase 2 · Sostener</a>.</p>
       </div>`
    : PROGRAMA.dias.map((d) => diaHtml(d, faseId, bloqueId)).join('');

  app.innerHTML = `
    ${heroHtml(faseId)}
    ${calendarioHtml()}
    ${diasHtml}
    ${fase2Html(faseId)}
    ${reglasHtml()}
    ${autorregulacionHtml()}
    ${escaleraHtml('dominadas', PROGRAMA.escaleras.dominadas)}
    ${escaleraHtml('fondos', PROGRAMA.escaleras.fondos)}
    <div class="foot">
      Imágenes de demostración: dataset libre <a href="https://github.com/yuhonas/free-exercise-db">free-exercise-db</a>.
      Bases navegables con vídeo: <a href="https://musclewiki.com/exercises">MuscleWiki</a> · <a href="https://www.jefit.com/exercises">JEFIT</a>.
      Detalle completo del programa: <a href="docs/plan-v2.md">docs/plan-v2.md</a>.
    </div>`;

  app.querySelectorAll('.fase-tab').forEach((btn) => {
    btn.addEventListener('click', () => {
      estado.faseId = btn.dataset.fase;
      guardarEstado(estado);
      render();
      document.getElementById(btn.dataset.fase === 'sostener' ? 'fase2' : 'pull')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
  app.querySelectorAll('.bloque-tab').forEach((btn) => {
    btn.addEventListener('click', () => {
      estado.bloqueId = btn.dataset.bloque;
      guardarEstado(estado);
      render();
    });
  });
}

render();
