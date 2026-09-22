// Datos del programa pupuleg v2. Editar aquí no requiere build; index.html los consume vía app.js.
export const PROGRAMA = {
  "meta": {
    "version": 2,
    "actualizado": "2026-09-22",
    "atleta": {
      "nacimiento": "1982-11",
      "alturaCm": 182,
      "pesoInicioKg": 102.3,
      "pesoObjetivoKg": 90.0
    }
  },
  "fases": [
    {
      "id": "empujar",
      "nombre": "Empujar",
      "desde": "2026-09-22",
      "hasta": "2026-10-20",
      "objetivo": "102,3 → 99,4 kg",
      "resumen": "Déficit 0,75 kg/sem. Volumen intacto, intensidad −1 punto.",
      "mod": {
        "rpeDeltaPrincipales": -1,
        "volumenPct": 100,
        "tecnicasIntensidad": true
      },
      "plantilla": "ppl4"
    },
    {
      "id": "sostener",
      "nombre": "Sostener",
      "desde": "2026-10-20",
      "hasta": "2026-12-01",
      "objetivo": "Mantener 99,4 kg",
      "resumen": "Nace Alba. 2 full-body/semana, 45 min, sin técnicas de intensidad. Sobrevivir sin perder músculo.",
      "mod": {
        "rpeDeltaPrincipales": -1,
        "volumenPct": 45,
        "tecnicasIntensidad": false
      },
      "plantilla": "fullbody2"
    },
    {
      "id": "rematar",
      "nombre": "Rematar",
      "desde": "2026-12-01",
      "hasta": "2027-03-02",
      "objetivo": "99,4 → 90,0 kg",
      "resumen": "Vuelta al PPL de 4 días. Se reintroduce el RPE 8 real en los ★.",
      "mod": {
        "rpeDeltaPrincipales": 0,
        "volumenPct": 100,
        "tecnicasIntensidad": true
      },
      "plantilla": "ppl4"
    }
  ],
  "calendario": [
    {
      "dia": "Lunes",
      "sesion": "PUSH",
      "hora": "6:30",
      "notas": "En ayunas"
    },
    {
      "dia": "Martes",
      "sesion": "PULL",
      "hora": "6:30",
      "notas": "En ayunas"
    },
    {
      "dia": "Miércoles",
      "sesion": "Trail Z2",
      "hora": "6:30",
      "notas": "Cardio, nunca HIIT"
    },
    {
      "dia": "Jueves",
      "sesion": "LEGS",
      "hora": "6:30",
      "notas": "En ayunas"
    },
    {
      "dia": "Viernes",
      "sesion": "Movilidad",
      "hora": "6:30",
      "notas": ""
    },
    {
      "dia": "Sábado",
      "sesion": "Accesorio / bombeo",
      "hora": "8:30",
      "notas": "Primer candidato al recorte"
    },
    {
      "dia": "Domingo",
      "sesion": "Trail Z2",
      "hora": "8:30",
      "notas": ""
    }
  ],
  "calentamiento": {
    "minutos": "8-10",
    "nota": "Calentamiento de 8-10 min obligatorio a las 6:30. A esa hora la temperatura corporal está en mínimo y los discos intervertebrales están hidratados al máximo: es el peor momento del día para meter carga espinal fría."
  },
  "dias": [
    {
      "id": "pull",
      "codigo": "PULL",
      "nombre": "Tirón — espalda · bíceps · trapecio",
      "diaSemana": "Martes",
      "hora": "6:30",
      "slots": [
        "pull.1",
        "pull.2",
        "pull.3",
        "pull.4",
        "pull.5",
        "pull.6",
        "pull.7"
      ]
    },
    {
      "id": "push",
      "codigo": "PUSH",
      "nombre": "Empuje — pecho · hombro · tríceps",
      "diaSemana": "Lunes",
      "hora": "6:30",
      "slots": [
        "push.1",
        "push.2",
        "push.3",
        "push.4",
        "push.5",
        "push.6"
      ]
    },
    {
      "id": "legs",
      "codigo": "LEGS",
      "nombre": "Pierna — cuádriceps · femoral · glúteo · gemelo",
      "diaSemana": "Jueves",
      "hora": "6:30",
      "slots": [
        "legs.1",
        "legs.2",
        "legs.3",
        "legs.4",
        "legs.5",
        "legs.6"
      ]
    },
    {
      "id": "accesorio",
      "codigo": "OPCIONAL",
      "nombre": "4º día — accesorio / bombeo · RPE 7-8, sin fallo pesado",
      "diaSemana": "Sábado",
      "hora": "8:30",
      "slots": [
        "accesorio.1",
        "accesorio.2",
        "accesorio.3",
        "accesorio.4",
        "accesorio.5",
        "accesorio.6"
      ],
      "alternativaCeroCarga": "20-30 min de cardio suave + movilidad."
    }
  ],
  "slots": [
    {
      "id": "pull.1",
      "dia": "pull",
      "principal": true,
      "patron": "bisagra-cadera",
      "variantes": [
        "peso-muerto-trap-bar",
        "peso-muerto-convencional",
        "peso-muerto-sumo"
      ],
      "prescripcion": {
        "series": 4,
        "repsMin": 4,
        "repsMax": 6,
        "rpe": 8,
        "descansoMin": 3,
        "descansoMax": 5
      },
      "porque": "Trap bar reduce cizalla lumbar y demanda de movilidad de cadera en frío; permite frecuencia semanal en déficit. El convencional vuelve a ser la referencia en fase 3, cuando hay comida para pagarlo.",
      "varianteDefaultPorFase": {
        "empujar": "peso-muerto-trap-bar",
        "sostener": "peso-muerto-trap-bar",
        "rematar": "peso-muerto-convencional"
      }
    },
    {
      "id": "pull.2",
      "dia": "pull",
      "principal": false,
      "patron": "tiron-vertical",
      "variantes": [
        "dominada-lastrada",
        "dominada-neutra-lastrada",
        "jalon-pecho-pronado-ancho"
      ],
      "prescripcion": {
        "series": 4,
        "repsMin": 5,
        "repsMax": 8,
        "rpe": "8-9"
      },
      "porque": "Agarre neutro descarga el codo; el jalón permite mantener volumen cuando el peso corporal pesa 102 kg."
    },
    {
      "id": "pull.3",
      "dia": "pull",
      "principal": false,
      "patron": "remo-horizontal",
      "variantes": [
        "remo-pendlay",
        "remo-maquina-pecho",
        "remo-mancuerna-una-mano"
      ],
      "prescripcion": {
        "series": 3,
        "repsMin": 6,
        "repsMax": 8,
        "rpe": 8
      },
      "porque": "El chest-supported elimina la lumbar de la ecuación — es la variante estrella cuando la espalda baja ya lleva peso muerto + RDL."
    },
    {
      "id": "pull.4",
      "dia": "pull",
      "principal": false,
      "patron": "remo-vertical",
      "variantes": [
        "remo-polea-sentado",
        "jalon-neutro-una-mano",
        "remo-en-maquina"
      ],
      "prescripcion": {
        "series": 3,
        "repsMin": 8,
        "repsMax": 12,
        "rpe": 9
      },
      "porque": "Unilateral corrige asimetrías y da más rango de escápula."
    },
    {
      "id": "pull.5",
      "dia": "pull",
      "principal": false,
      "patron": "deltoides-posterior",
      "variantes": [
        "face-pull",
        "pajaros-posterior",
        "pec-deck-invertido"
      ],
      "prescripcion": {
        "series": 3,
        "repsMin": 15,
        "repsMax": 20,
        "rpe": 8
      },
      "porque": "Rotación de material; mismo objetivo de deltoides posterior."
    },
    {
      "id": "pull.6",
      "dia": "pull",
      "principal": false,
      "patron": "curl-biceps-fijo",
      "variantes": [
        "curl-barra-ez",
        "curl-banco-scott",
        "curl-arana"
      ],
      "prescripcion": {
        "series": 3,
        "repsMin": 6,
        "repsMax": 10,
        "rpe": 9
      },
      "porque": "Scott y araña fijan el codo y quitan impulso."
    },
    {
      "id": "pull.7",
      "dia": "pull",
      "principal": false,
      "patron": "curl-biceps-estirado",
      "variantes": [
        "curl-inclinado-mancuernas",
        "curl-bayesian-polea",
        "curl-martillo"
      ],
      "prescripcion": {
        "series": "2-3",
        "repsMin": 10,
        "repsMax": 12,
        "rpe": "9-10"
      },
      "porque": "Bayesian mantiene tensión en el estiramiento, que es donde el bíceps crece. Martillo entra braquial y antebrazo."
    },
    {
      "id": "push.1",
      "dia": "push",
      "principal": true,
      "patron": "empuje-horizontal",
      "variantes": [
        "press-banca-barra",
        "press-banca-mancuernas",
        "press-banca-cerrado"
      ],
      "prescripcion": {
        "series": 4,
        "repsMin": 4,
        "repsMax": 6,
        "rpe": 8,
        "descansoMin": 3,
        "descansoMax": 5
      },
      "porque": "Mancuernas dan más rango y son la salida si el hombro protesta. Cerrado descarga el hombro y carga tríceps."
    },
    {
      "id": "push.2",
      "dia": "push",
      "principal": true,
      "patron": "empuje-vertical",
      "variantes": [
        "press-militar-pie-barra",
        "press-militar-sentado-mancuernas",
        "press-arnold"
      ],
      "prescripcion": {
        "series": 4,
        "repsMin": 5,
        "repsMax": 8,
        "rpe": 8
      },
      "porque": "Sentado quita demanda de core y lumbar — relevante a las 6:30 en ayunas y en déficit."
    },
    {
      "id": "push.3",
      "dia": "push",
      "principal": false,
      "patron": "empuje-pectoral-superior",
      "variantes": [
        "press-inclinado-mancuernas",
        "press-inclinado-barra-30",
        "cruces-polea-abajo-arriba"
      ],
      "prescripcion": {
        "series": 3,
        "repsMin": 8,
        "repsMax": 10,
        "rpe": 9
      },
      "porque": "Los cruces son el pectoral superior en máximo estiramiento con tensión constante."
    },
    {
      "id": "push.4",
      "dia": "push",
      "principal": false,
      "patron": "empuje-paralelas",
      "variantes": [
        "fondos-paralelas-lastre",
        "press-declinado-mancuernas",
        "fondos-maquina"
      ],
      "prescripcion": {
        "series": 3,
        "repsMin": 8,
        "repsMax": 12,
        "rpe": 9
      },
      "porque": "La máquina permite carga precisa cuando el lastre se vuelve incómodo."
    },
    {
      "id": "push.5",
      "dia": "push",
      "principal": false,
      "patron": "deltoides-lateral",
      "variantes": [
        "elevaciones-laterales",
        "lateral-polea-unilateral",
        "lateral-inclinado-mancuerna"
      ],
      "prescripcion": {
        "series": 3,
        "repsMin": 15,
        "repsMax": 20,
        "rpe": "9-10"
      },
      "porque": "La polea da tensión en la posición baja, donde la mancuerna no da nada. El lateral inclinado exagera el estiramiento."
    },
    {
      "id": "push.6",
      "dia": "push",
      "principal": false,
      "patron": "triceps-estirado",
      "variantes": [
        "extension-triceps-sobre-cabeza",
        "press-frances-ez",
        "extension-triceps-polea"
      ],
      "prescripcion": {
        "series": 3,
        "repsMin": 8,
        "repsMax": 12,
        "rpe": 9
      },
      "porque": "Todas mantienen la cabeza larga en estiramiento, que es el criterio."
    },
    {
      "id": "legs.1",
      "dia": "legs",
      "principal": true,
      "patron": "sentadilla",
      "variantes": [
        "sentadilla-libre-barra",
        "hack-squat",
        "sentadilla-frontal"
      ],
      "prescripcion": {
        "series": 4,
        "repsMin": 4,
        "repsMax": 6,
        "rpe": 8,
        "descansoMin": 3,
        "descansoMax": 5
      },
      "porque": "La sentadilla se mantiene como ★: ya se cede el convencional al trap bar, y perder los dos patrones de barra en la misma fase es demasiada pérdida de técnica. El hack squat entra solo como sustitución de rescate."
    },
    {
      "id": "legs.2",
      "dia": "legs",
      "principal": false,
      "patron": "bisagra-cadera-legs",
      "variantes": [
        "rdl",
        "rdl-mancuernas",
        "buenos-dias"
      ],
      "prescripcion": {
        "series": 4,
        "repsMin": 6,
        "repsMax": 8,
        "rpe": 8
      },
      "porque": "Mancuernas permiten más rango; buenos días cambian el vector sin cambiar el patrón.",
      "prescripcionPorFase": {
        "empujar": {
          "series": 3,
          "repsMin": 8,
          "repsMax": 10,
          "rpe": 7
        }
      }
    },
    {
      "id": "legs.3",
      "dia": "legs",
      "principal": false,
      "patron": "cuadriceps-maquina",
      "variantes": [
        "hack-squat",
        "sentadilla-bulgara",
        "prensa"
      ],
      "prescripcion": {
        "series": 3,
        "repsMin": 8,
        "repsMax": 12,
        "rpe": 9
      },
      "porque": "El hack es mejor que la prensa para cuádriceps: más rango en posición alargada, recorrido guiado y cero carga espinal. Con la máquina disponible, la prensa baja a tercera opción."
    },
    {
      "id": "legs.4",
      "dia": "legs",
      "principal": false,
      "patron": "femoral",
      "variantes": [
        "curl-femoral-sentado",
        "curl-femoral-tumbado",
        "curl-nordico-asistido"
      ],
      "prescripcion": {
        "series": 3,
        "repsMin": 10,
        "repsMax": 15,
        "rpe": "9-10"
      },
      "porque": "Sentado trabaja el femoral con cadera flexionada (más estiramiento); tumbado con cadera extendida. Complementarios, no intercambiables — rotar, no elegir."
    },
    {
      "id": "legs.5",
      "dia": "legs",
      "principal": false,
      "patron": "cuadriceps-aislamiento",
      "variantes": [
        "extension-cuadriceps",
        "extension-cuadriceps-unilateral",
        "sissy-squat"
      ],
      "prescripcion": {
        "series": 3,
        "repsMin": 12,
        "repsMax": 15,
        "rpe": 10
      }
    },
    {
      "id": "legs.6",
      "dia": "legs",
      "principal": false,
      "patron": "gemelo",
      "variantes": [
        "gemelo-de-pie",
        "gemelo-prensa",
        "gemelo-unilateral-mancuerna"
      ],
      "prescripcion": {
        "series": 4,
        "repsMin": 8,
        "repsMax": 12,
        "rpe": 9
      }
    },
    {
      "id": "accesorio.1",
      "dia": "accesorio",
      "principal": false,
      "patron": "deltoides-lateral",
      "variantes": [
        "elevaciones-laterales",
        "lateral-polea-unilateral",
        "lateral-inclinado-mancuerna"
      ],
      "prescripcion": {
        "series": 4,
        "repsMin": 15,
        "repsMax": 20
      },
      "porque": "El mayor retorno visual de todo el programa en una recomposición: la anchura de hombro es lo que rompe la silueta cuando el peso baja."
    },
    {
      "id": "accesorio.2",
      "dia": "accesorio",
      "principal": false,
      "patron": "deltoides-posterior",
      "variantes": [
        "pajaros-posterior",
        "face-pull",
        "pec-deck-invertido"
      ],
      "prescripcion": {
        "series": 3,
        "repsMin": 15,
        "repsMax": 20
      },
      "porque": "Salud de hombro y postura de escritorio."
    },
    {
      "id": "accesorio.3",
      "dia": "accesorio",
      "principal": false,
      "patron": "biceps",
      "variantes": [
        "curl-martillo",
        "curl-arana",
        "curl-bayesian-polea"
      ],
      "prescripcion": {
        "series": 3,
        "repsMin": 12,
        "repsMax": 15
      }
    },
    {
      "id": "accesorio.4",
      "dia": "accesorio",
      "principal": false,
      "patron": "triceps",
      "variantes": [
        "extension-triceps-polea",
        "press-frances-ez",
        "extension-triceps-sobre-cabeza"
      ],
      "prescripcion": {
        "series": 3,
        "repsMin": 12,
        "repsMax": 15
      }
    },
    {
      "id": "accesorio.5",
      "dia": "accesorio",
      "principal": false,
      "patron": "gemelo-soleo",
      "variantes": [
        "gemelo-sentado",
        "gemelo-prensa",
        "gemelo-unilateral-mancuerna"
      ],
      "prescripcion": {
        "series": 3,
        "repsMin": 15,
        "repsMax": 20
      }
    },
    {
      "id": "accesorio.6",
      "dia": "accesorio",
      "principal": false,
      "patron": "core",
      "variantes": [
        "core-rueda-abdominal"
      ],
      "prescripcion": {
        "series": 3,
        "repsMin": 8,
        "repsMax": 12
      }
    }
  ],
  "ejercicios": {
    "peso-muerto-trap-bar": {
      "nombre": "Peso muerto con trap bar (asas bajas)",
      "ejecucion": "Sitúate dentro del trap bar con el pecho alto y agarre en las asas bajas. Empuja el suelo con las piernas y sube el torso casi vertical; la carga cae en línea con tu centro de masa, así que no hace falta echar la cadera tan atrás como en el convencional.",
      "imagen0": null,
      "imagen1": null
    },
    "peso-muerto-convencional": {
      "nombre": "Peso muerto convencional",
      "ejecucion": "Barra pegada a la espinilla y espalda neutra. Empuja el suelo con los pies y bloquea la cadera arriba; no tires con la lumbar.",
      "imagen0": "assets/img/peso-muerto-convencional-0.jpeg",
      "imagen1": "assets/img/peso-muerto-convencional-1.jpeg"
    },
    "peso-muerto-sumo": {
      "nombre": "Peso muerto sumo",
      "ejecucion": "Pies bien abiertos y puntas hacia fuera, agarre dentro de las piernas. Rompe con cadera y rodilla a la vez manteniendo el torso más vertical; empuja las rodillas hacia fuera durante todo el recorrido.",
      "imagen0": null,
      "imagen1": null
    },
    "dominada-lastrada": {
      "nombre": "Dominadas lastradas",
      "ejecucion": "Cuelga con las escápulas activas y tira llevando los codos abajo hasta pasar la barbilla. Baja controlado a extensión completa.",
      "imagen0": "assets/img/dominada-lastrada-0.jpeg",
      "imagen1": "assets/img/dominada-lastrada-1.jpeg"
    },
    "dominada-neutra-lastrada": {
      "nombre": "Dominada neutra lastrada",
      "ejecucion": "Mismo gesto que la dominada lastrada pero con agarre neutro (palmas encaradas), que descarga el codo. Tira llevando el pecho a las manos y baja a extensión completa sin balanceo.",
      "imagen0": null,
      "imagen1": null
    },
    "jalon-pecho-pronado-ancho": {
      "nombre": "Jalón al pecho pronado ancho",
      "ejecucion": "Agarre ancho y pronado, tronco ligeramente inclinado atrás. Lleva la barra a la parte alta del pecho apretando escápulas y sube controlado sin dejar que la barra tire de ti.",
      "imagen0": null,
      "imagen1": null
    },
    "remo-pendlay": {
      "nombre": "Remo con barra (Pendlay)",
      "ejecucion": "Bisagra de cadera, tronco firme casi paralelo al suelo. Lleva la barra al ombligo apretando escápulas; sin balanceo lumbar.",
      "imagen0": "assets/img/remo-pendlay-0.jpeg",
      "imagen1": "assets/img/remo-pendlay-1.jpeg"
    },
    "remo-maquina-pecho": {
      "nombre": "Remo en máquina apoyado en pecho",
      "ejecucion": "Pecho fijo contra el respaldo, sin ninguna opción de impulso lumbar. Tira de las asas hacia atrás apretando las escápulas y estira completo antes de la siguiente repetición.",
      "imagen0": null,
      "imagen1": null
    },
    "remo-mancuerna-una-mano": {
      "nombre": "Remo con mancuerna a una mano",
      "ejecucion": "Apoya rodilla y mano en el banco, espalda paralela al suelo. Tira del codo hacia atrás y arriba pegado al costado; evita rotar el tronco para ayudarte.",
      "imagen0": null,
      "imagen1": null
    },
    "remo-polea-sentado": {
      "nombre": "Remo en polea sentado",
      "ejecucion": "Pecho alto, tira del asa al abdomen bajo llevando los codos atrás. Estira al frente sin redondear la espalda.",
      "imagen0": "assets/img/remo-polea-sentado-0.jpeg",
      "imagen1": "assets/img/remo-polea-sentado-1.jpeg"
    },
    "jalon-neutro-una-mano": {
      "nombre": "Jalón neutro a una mano",
      "ejecucion": "Agarre neutro de una mano en la polea alta, tronco firme. Tira el codo hacia abajo y atrás pegado a las costillas; estira arriba sin dejar que el hombro se encoja.",
      "imagen0": null,
      "imagen1": null
    },
    "remo-en-maquina": {
      "nombre": "Remo en máquina",
      "ejecucion": "Ajusta el respaldo para que el agarre quede a la altura del esternón. Tira apretando escápulas al final del recorrido y vuelve controlado sin perder tensión.",
      "imagen0": null,
      "imagen1": null
    },
    "face-pull": {
      "nombre": "Face pull / posterior en polea",
      "ejecucion": "Cuerda a la altura de la cara y codos altos. Separa hacia las orejas rotando hacia fuera; aprieta el deltoides posterior.",
      "imagen0": "assets/img/face-pull-0.jpeg",
      "imagen1": "assets/img/face-pull-1.jpeg"
    },
    "pajaros-posterior": {
      "nombre": "Pájaros en polea cruzada",
      "ejecucion": "Codos casi fijos, abre en arco hasta la línea de hombros. Aprieta el posterior sin usar la lumbar.",
      "imagen0": "assets/img/pajaros-posterior-0.jpeg",
      "imagen1": "assets/img/pajaros-posterior-1.jpeg"
    },
    "pec-deck-invertido": {
      "nombre": "Pec deck invertido",
      "ejecucion": "Siéntate mirando al respaldo del pec deck, brazos casi extendidos. Abre llevando los brazos atrás apretando el deltoides posterior, sin encoger los hombros.",
      "imagen0": null,
      "imagen1": null
    },
    "curl-barra-ez": {
      "nombre": "Curl con barra EZ",
      "ejecucion": "Codos fijos al costado, sube por contracción del bíceps. Baja lento; nada de impulso de cadera.",
      "imagen0": "assets/img/curl-barra-ez-0.jpeg",
      "imagen1": "assets/img/curl-barra-ez-1.jpeg"
    },
    "curl-banco-scott": {
      "nombre": "Curl en banco Scott",
      "ejecucion": "Apoya el tríceps en el banco Scott, que fija el codo y elimina el impulso. Sube por contracción completa y baja lento sin despegar el brazo del apoyo.",
      "imagen0": null,
      "imagen1": null
    },
    "curl-arana": {
      "nombre": "Curl de araña",
      "ejecucion": "Tumbado boca abajo sobre un banco inclinado, brazos colgando al frente. Sube en contracción pura de bíceps; el pecho contra el banco impide cualquier balanceo.",
      "imagen0": null,
      "imagen1": null
    },
    "curl-inclinado-mancuernas": {
      "nombre": "Curl inclinado con mancuernas",
      "ejecucion": "Banco a ~60° con los brazos colgando atrás para estirar el bíceps. Sube sin adelantar el codo.",
      "imagen0": "assets/img/curl-inclinado-mancuernas-0.jpeg",
      "imagen1": "assets/img/curl-inclinado-mancuernas-1.jpeg"
    },
    "curl-bayesian-polea": {
      "nombre": "Curl Bayesian en polea",
      "ejecucion": "De espaldas a la polea baja, un paso adelante para que el cable tire del brazo hacia atrás. El bíceps queda en tensión constante incluso en el estiramiento, que es donde más crece; sube sin mover el codo hacia delante.",
      "imagen0": null,
      "imagen1": null
    },
    "curl-martillo": {
      "nombre": "Curl de bíceps (martillo)",
      "ejecucion": "Agarre neutro con pulgares arriba y codos quietos. Sube sin balanceo; trabaja braquial y antebrazo.",
      "imagen0": "assets/img/curl-martillo-0.jpeg",
      "imagen1": "assets/img/curl-martillo-1.jpeg"
    },
    "press-banca-barra": {
      "nombre": "Press banca plano con barra",
      "ejecucion": "Escápulas retraídas y ligero arco. Baja la barra al esternón con codos a ~45° y empuja hasta bloqueo.",
      "imagen0": "assets/img/press-banca-barra-0.jpeg",
      "imagen1": "assets/img/press-banca-barra-1.jpeg"
    },
    "press-banca-mancuernas": {
      "nombre": "Press banca con mancuernas",
      "ejecucion": "Mismo patrón que con barra pero con mancuernas, que dan más rango en el estiramiento y no fijan la muñeca. Baja controlado a los lados del pecho y empuja juntando las mancuernas arriba sin chocarlas.",
      "imagen0": null,
      "imagen1": null
    },
    "press-banca-cerrado": {
      "nombre": "Press banca agarre cerrado",
      "ejecucion": "Agarre a la anchura de hombros, codos pegados al cuerpo en la bajada. Empuja llevando el énfasis al tríceps; es la salida cuando el hombro protesta con el agarre ancho.",
      "imagen0": null,
      "imagen1": null
    },
    "press-militar-pie-barra": {
      "nombre": "Press militar de pie con barra",
      "ejecucion": "Glúteo y core apretados, barra sobre las clavículas. Empuja vertical y mete la cabeza al pasar la frente.",
      "imagen0": "assets/img/press-militar-pie-barra-0.jpeg",
      "imagen1": "assets/img/press-militar-pie-barra-1.jpeg"
    },
    "press-militar-sentado-mancuernas": {
      "nombre": "Press militar sentado con mancuernas",
      "ejecucion": "Sentado con respaldo, que quita la demanda de estabilidad de core y lumbar — útil a las 6:30 en ayunas y en déficit. Empuja las mancuernas arriba hasta casi tocarse sin bloquear de golpe el codo.",
      "imagen0": null,
      "imagen1": null
    },
    "press-arnold": {
      "nombre": "Press Arnold",
      "ejecucion": "Empieza con las palmas mirándote y rota las muñecas hacia fuera según subes. El giro añade recorrido al deltoides anterior; controla la bajada deshaciendo la rotación.",
      "imagen0": null,
      "imagen1": null
    },
    "press-inclinado-mancuernas": {
      "nombre": "Press inclinado con mancuernas",
      "ejecucion": "Banco a 30°, baja las mancuernas al borde superior del pecho. Empuja juntándolas arriba sin chocarlas.",
      "imagen0": "assets/img/press-inclinado-mancuernas-0.jpeg",
      "imagen1": "assets/img/press-inclinado-mancuernas-1.jpeg"
    },
    "press-inclinado-barra-30": {
      "nombre": "Press inclinado con barra 30°",
      "ejecucion": "Banco a 30°, baja la barra a la parte alta del pecho con los codos a ~45°. Permite más carga que las mancuernas cuando el objetivo es sumar kilos en el patrón.",
      "imagen0": null,
      "imagen1": null
    },
    "cruces-polea-abajo-arriba": {
      "nombre": "Cruces en polea de abajo a arriba",
      "ejecucion": "Poleas bajas, un paso adelante con el torso ligeramente inclinado. Lleva las manos en diagonal hacia arriba y adentro apretando el pectoral superior en máximo estiramiento; no dejes que los hombros suban.",
      "imagen0": null,
      "imagen1": null
    },
    "fondos-paralelas-lastre": {
      "nombre": "Fondos en paralelas (lastre)",
      "ejecucion": "Inclina el torso hacia delante para cargar el pecho. Baja hasta ~90° de codo y sube sin bloquear de golpe.",
      "imagen0": "assets/img/fondos-paralelas-lastre-0.jpeg",
      "imagen1": "assets/img/fondos-paralelas-lastre-1.jpeg"
    },
    "press-declinado-mancuernas": {
      "nombre": "Press declinado con mancuernas",
      "ejecucion": "Banco declinado, baja las mancuernas al borde inferior del pecho. Empuja en diagonal hacia arriba; es la salida cuando el lastre en fondos se vuelve incómodo de enganchar.",
      "imagen0": null,
      "imagen1": null
    },
    "fondos-maquina": {
      "nombre": "Fondos en máquina",
      "ejecucion": "La máquina permite ajustar el peso con precisión cuando el lastre no es cómodo. Inclina el torso al frente para cargar el pecho y baja hasta ~90° de codo.",
      "imagen0": null,
      "imagen1": null
    },
    "elevaciones-laterales": {
      "nombre": "Elevaciones laterales",
      "ejecucion": "Sube liderando con los codos, no con las manos, hasta la línea de los hombros. Baja lento sin encoger el trapecio.",
      "imagen0": "assets/img/elevaciones-laterales-0.jpeg",
      "imagen1": "assets/img/elevaciones-laterales-1.jpeg"
    },
    "lateral-polea-unilateral": {
      "nombre": "Lateral en polea (unilateral)",
      "ejecucion": "Polea baja a un lado, tira en diagonal hacia arriba con el codo ligeramente flexionado. La polea da tensión ya desde abajo, donde la mancuerna no aporta nada; baja controlado hasta rozar el muslo.",
      "imagen0": null,
      "imagen1": null
    },
    "lateral-inclinado-mancuerna": {
      "nombre": "Lateral inclinado con mancuerna",
      "ejecucion": "Apoya el torso en un banco inclinado a ~30° tumbado de lado. La posición exagera el estiramiento del deltoides lateral en el punto bajo; sube sin impulso del tronco.",
      "imagen0": null,
      "imagen1": null
    },
    "extension-triceps-sobre-cabeza": {
      "nombre": "Extensión de tríceps sobre la cabeza",
      "ejecucion": "Cuerda por encima de la cabeza y codos apuntando al frente. Estira hasta bloquear sintiendo la cabeza larga.",
      "imagen0": "assets/img/extension-triceps-sobre-cabeza-0.jpeg",
      "imagen1": "assets/img/extension-triceps-sobre-cabeza-1.jpeg"
    },
    "press-frances-ez": {
      "nombre": "Press francés con EZ",
      "ejecucion": "Tumbado en banco plano, barra EZ sobre la frente con los codos fijos apuntando al techo. Baja controlado hasta rozar la frente y extiende sin abrir los codos.",
      "imagen0": null,
      "imagen1": null
    },
    "extension-triceps-polea": {
      "nombre": "Extensión de tríceps en polea",
      "ejecucion": "Codos pegados al costado, extiende hasta abajo. Aprieta el tríceps y sube sin abrir los codos.",
      "imagen0": "assets/img/extension-triceps-polea-0.jpeg",
      "imagen1": "assets/img/extension-triceps-polea-1.jpeg"
    },
    "sentadilla-libre-barra": {
      "nombre": "Sentadilla libre con barra",
      "ejecucion": "Barra sobre el trapecio y pies a la anchura de hombros. Rompe cadera y rodilla a la vez y baja del paralelo con la espalda firme.",
      "imagen0": "assets/img/sentadilla-libre-barra-0.jpeg",
      "imagen1": "assets/img/sentadilla-libre-barra-1.jpeg"
    },
    "hack-squat": {
      "nombre": "Hack squat",
      "ejecucion": "Espalda contra el respaldo, pies en el centro de la plataforma. El recorrido guiado quita toda la carga espinal; baja controlado hasta ~90° y empuja con el talón.",
      "imagen0": null,
      "imagen1": null
    },
    "sentadilla-frontal": {
      "nombre": "Sentadilla frontal",
      "ejecucion": "Barra sobre los deltoides anteriores, codos altos. El torso se mantiene más vertical que en la sentadilla trasera; baja controlado sin dejar caer los codos.",
      "imagen0": null,
      "imagen1": null
    },
    "rdl": {
      "nombre": "Peso muerto rumano (RDL)",
      "ejecucion": "Rodillas casi fijas, lleva la cadera atrás bajando la barra pegada a las piernas. Para al notar el femoral y sube apretando glúteo.",
      "imagen0": "assets/img/rdl-0.jpeg",
      "imagen1": "assets/img/rdl-1.jpeg"
    },
    "rdl-mancuernas": {
      "nombre": "RDL con mancuernas",
      "ejecucion": "Mismo gesto que el RDL con barra pero con mancuernas a los lados de las piernas, que dan más rango libre. Para al notar el estiramiento del femoral y sube apretando glúteo.",
      "imagen0": null,
      "imagen1": null
    },
    "buenos-dias": {
      "nombre": "Buenos días",
      "ejecucion": "Barra sobre el trapecio como en sentadilla, rodillas casi fijas. Lleva la cadera atrás bajando el torso hasta sentir el femoral; el vector cambia respecto al RDL sin cambiar el patrón de bisagra.",
      "imagen0": null,
      "imagen1": null
    },
    "sentadilla-bulgara": {
      "nombre": "Sentadilla búlgara",
      "ejecucion": "Pie trasero elevado en un banco, peso en la pierna delantera. Baja vertical hasta que la rodilla trasera casi toque el suelo; mantén el torso alto para que no se convierta en bisagra.",
      "imagen0": null,
      "imagen1": null
    },
    "prensa": {
      "nombre": "Prensa a una pierna",
      "ejecucion": "Pie centrado en la plataforma, baja controlado hasta ~90°. Empuja con el talón sin bloquear del todo la rodilla; a una pierna, controla que la rodilla no se vaya hacia dentro.",
      "imagen0": "assets/img/prensa-0.jpeg",
      "imagen1": "assets/img/prensa-1.jpeg"
    },
    "curl-femoral-sentado": {
      "nombre": "Curl femoral sentado",
      "ejecucion": "Ajusta el rodillo sobre el tendón y tronco pegado al respaldo. Flexiona las rodillas al máximo y suelta lento.",
      "imagen0": "assets/img/curl-femoral-sentado-0.jpeg",
      "imagen1": "assets/img/curl-femoral-sentado-1.jpeg"
    },
    "curl-femoral-tumbado": {
      "nombre": "Curl femoral tumbado",
      "ejecucion": "Tumbado boca abajo, cadera extendida contra el banco. Flexiona las rodillas llevando el talón al glúteo y suelta lento; con la cadera extendida el énfasis cambia respecto al sentado.",
      "imagen0": null,
      "imagen1": null
    },
    "curl-nordico-asistido": {
      "nombre": "Curl nórdico asistido",
      "ejecucion": "De rodillas con los tobillos sujetos, baja el torso lo más lento posible resistiendo con el femoral. Ayúdate con las manos en el suelo al final del rango; es puramente excéntrico.",
      "imagen0": null,
      "imagen1": null
    },
    "extension-cuadriceps": {
      "nombre": "Extensiones de cuádriceps",
      "ejecucion": "Espalda al respaldo, extiende arriba y aprieta un segundo. Baja controlado sin soltar el peso de golpe.",
      "imagen0": "assets/img/extension-cuadriceps-0.jpeg",
      "imagen1": "assets/img/extension-cuadriceps-1.jpeg"
    },
    "extension-cuadriceps-unilateral": {
      "nombre": "Extensión unilateral de cuádriceps",
      "ejecucion": "Misma máquina, una pierna cada vez. Permite igualar fuerza entre piernas y cerrar más el rango sin que la pierna dominante compense.",
      "imagen0": null,
      "imagen1": null
    },
    "sissy-squat": {
      "nombre": "Sissy squat",
      "ejecucion": "Sujeto a un apoyo, sube de puntillas e inclina rodillas y torso atrás en línea recta. El cuádriceps trabaja en máximo estiramiento con el peso corporal; para si la rodilla molesta.",
      "imagen0": null,
      "imagen1": null
    },
    "gemelo-de-pie": {
      "nombre": "Gemelo de pie",
      "ejecucion": "Sube a la punta al máximo rango y pausa arriba. Baja lento buscando el estiramiento completo del gemelo.",
      "imagen0": "assets/img/gemelo-de-pie-0.jpeg",
      "imagen1": "assets/img/gemelo-de-pie-1.jpeg"
    },
    "gemelo-prensa": {
      "nombre": "Gemelo en prensa",
      "ejecucion": "Pies en la parte baja de la plataforma de prensa, piernas casi extendidas. Empuja con la punta del pie en rango completo; la posición sentada quita el equilibrio de la ecuación.",
      "imagen0": null,
      "imagen1": null
    },
    "gemelo-unilateral-mancuerna": {
      "nombre": "Gemelo unilateral con mancuerna",
      "ejecucion": "Una mancuerna en la mano del lado que trabaja, apoyo en la punta de un step. Baja hasta el estiramiento completo del talón y sube al máximo; una pierna cada vez para no compensar con la dominante.",
      "imagen0": null,
      "imagen1": null
    },
    "gemelo-sentado": {
      "nombre": "Gemelo sentado / sóleo",
      "ejecucion": "Rodillas a 90° con el peso sobre los muslos. Sube a la punta y baja profundo enfocando el sóleo.",
      "imagen0": "assets/img/gemelo-sentado-0.jpeg",
      "imagen1": "assets/img/gemelo-sentado-1.jpeg"
    },
    "core-rueda-abdominal": {
      "nombre": "Core — rueda abdominal",
      "ejecucion": "Core apretado, rueda hacia delante sin arquear la lumbar. Vuelve tirando con el abdomen, no con los brazos.",
      "imagen0": "assets/img/core-rueda-abdominal-0.jpeg",
      "imagen1": "assets/img/core-rueda-abdominal-1.jpeg"
    },
    "remo-invertido": {
      "nombre": "Remo invertido",
      "ejecucion": "Barra a la altura de la cadera, cuerpo recto como una tabla. Cuanto más horizontal te colocas, más pesa. Lleva el pecho a la barra apretando las escápulas.",
      "imagen0": "assets/img/remo-invertido-0.jpeg",
      "imagen1": "assets/img/remo-invertido-1.jpeg"
    },
    "retraccion-escapular-colgado": {
      "nombre": "Retracción escapular + colgado",
      "ejecucion": "Cuelga con los brazos rectos y «mete» los hombros hacia abajo sin doblar el codo. Enseña a iniciar el tirón y forja el agarre.",
      "imagen0": "assets/img/retraccion-escapular-colgado-0.jpeg",
      "imagen1": "assets/img/retraccion-escapular-colgado-1.jpeg"
    },
    "negativas-dominada": {
      "nombre": "Negativas de dominada",
      "ejecucion": "Sube de un salto o con una silla hasta la barbilla sobre la barra y baja lo más lento que puedas. La fase excéntrica es la que más fuerza construye.",
      "imagen0": "assets/img/negativas-dominada-0.jpeg",
      "imagen1": "assets/img/negativas-dominada-1.jpeg"
    },
    "dominada-asistida-banda": {
      "nombre": "Dominada asistida con banda",
      "ejecucion": "Engancha una banda a la barra y pisa el lazo. Ve pasando a bandas más finas según ganes fuerza; la técnica es idéntica a la completa.",
      "imagen0": "assets/img/dominada-asistida-banda-0.jpeg",
      "imagen1": "assets/img/dominada-asistida-banda-1.jpeg"
    },
    "dominada-completa": {
      "nombre": "Dominada completa",
      "ejecucion": "Barbilla por encima de la barra y baja hasta extender los brazos del todo. Aquí ya estás dentro del programa.",
      "imagen0": "assets/img/dominada-completa-0.jpeg",
      "imagen1": "assets/img/dominada-completa-1.jpeg"
    },
    "fondos-banco": {
      "nombre": "Fondos en banco",
      "ejecucion": "Manos en el borde del banco, baja el cuerpo doblando los codos hasta ~90°. Cuanto más lejos apoyas los pies, más cuesta.",
      "imagen0": "assets/img/fondos-banco-0.jpeg",
      "imagen1": "assets/img/fondos-banco-1.jpeg"
    },
    "sosten-apoyo": {
      "nombre": "Sostén en apoyo",
      "ejecucion": "Súbete a las paralelas con los brazos rectos y estabiliza. Prepara hombro y codo para sostener tu peso — clave viniendo de dos años parado.",
      "imagen0": "assets/img/sosten-apoyo-0.jpeg",
      "imagen1": "assets/img/sosten-apoyo-1.jpeg"
    },
    "negativas-fondo": {
      "nombre": "Negativas de fondo",
      "ejecucion": "Parte arriba con los brazos rectos y baja lentísimo. No rebotes en el fondo; controla el rango y ve ganando profundidad sin forzar el hombro.",
      "imagen0": "assets/img/negativas-fondo-0.jpeg",
      "imagen1": "assets/img/negativas-fondo-1.jpeg"
    },
    "fondos-asistidos": {
      "nombre": "Fondos asistidos",
      "ejecucion": "Usa la máquina de fondos asistidos o una banda cruzada en las paralelas. Reduce la ayuda poco a poco, misma técnica que la completa.",
      "imagen0": "assets/img/fondos-asistidos-0.jpeg",
      "imagen1": "assets/img/fondos-asistidos-1.jpeg"
    },
    "fondos-completos": {
      "nombre": "Fondos completos",
      "ejecucion": "Ligera inclinación del torso al frente para cargar el pecho; sube sin bloquear de golpe. Ya estás en la versión del programa.",
      "imagen0": "assets/img/fondos-completos-0.jpeg",
      "imagen1": "assets/img/fondos-completos-1.jpeg"
    }
  },
  "bloques": [
    {
      "id": "A",
      "semanas": "1-6"
    },
    {
      "id": "B",
      "semanas": "7-12"
    },
    {
      "id": "C",
      "semanas": "13-18"
    }
  ],
  "fase2FullBody": {
    "proteinaMinimaG": 160,
    "nota": "El objetivo no es progresar: es mantener el músculo y la técnica con 5 horas de sueño roto. Si una semana solo sale una sesión, es una victoria, no un fallo.",
    "dias": [
      {
        "id": "A",
        "ejercicios": [
          {
            "nombre": "Hack squat (o sentadilla)",
            "prescripcion": "3 × 5-6 · RPE 7"
          },
          {
            "nombre": "Press banca",
            "prescripcion": "3 × 5-6 · RPE 7"
          },
          {
            "nombre": "Remo apoyado en pecho",
            "prescripcion": "3 × 8-10 · RPE 8"
          },
          {
            "nombre": "Elevación lateral",
            "prescripcion": "3 × 15 · RPE 9"
          },
          {
            "nombre": "Curl EZ",
            "prescripcion": "2 × 10"
          }
        ]
      },
      {
        "id": "B",
        "ejercicios": [
          {
            "nombre": "Peso muerto trap bar (o RDL)",
            "prescripcion": "3 × 6 · RPE 7"
          },
          {
            "nombre": "Press militar sentado",
            "prescripcion": "3 × 6-8 · RPE 7"
          },
          {
            "nombre": "Dominada / jalón",
            "prescripcion": "3 × 8 · RPE 8"
          },
          {
            "nombre": "Prensa",
            "prescripcion": "2 × 10-12"
          },
          {
            "nombre": "Extensión de tríceps",
            "prescripcion": "2 × 12"
          },
          {
            "nombre": "Gemelo",
            "prescripcion": "2 × 12-15"
          }
        ]
      }
    ]
  },
  "reglas": {
    "proximidadFallo": [
      {
        "grupo": "★ Básicos",
        "detalle": "peso muerto, sentadilla, banca, militar",
        "regla": "RIR 2-3 en fase 1 y 2, RIR 1-2 en fase 3. Nunca fallo. El coste de fatiga de una serie al fallo en sentadilla es desproporcionado respecto al estímulo adicional."
      },
      {
        "grupo": "Accesorios multiarticulares",
        "detalle": "remos, jalones, prensa, fondos, press inclinado",
        "regla": "RIR 1-2 en todas las fases."
      },
      {
        "grupo": "Aislamientos y máquinas",
        "detalle": "laterales, curls, extensiones, femoral, gemelo, face pull",
        "regla": "RIR 0-1. Aquí el fallo es barato: movimiento estable, poca demanda de estabilización, recuperación rápida. Es donde se compra el estímulo sin pagar fatiga."
      }
    ],
    "tecnicasIntensidad": {
      "aplicaA": "Solo en la última serie de: elevaciones laterales, extensiones de cuádriceps, curl de bíceps, gemelo, extensión de tríceps.",
      "limite": "Máximo 2 por sesión.",
      "prohibido": "Nunca en un ★. Suspendidas por completo en fase 2 y en cualquier semana con puntuación de sueño ≤2."
    },
    "ejecucion": {
      "excentrica": "2-3 s en accesorios y aislamientos, 1-2 s en las top de los ★.",
      "rango": "Rango completo, con énfasis en la posición de estiramiento. Media repetición en el estiramiento vale menos que cero; media repetición en el acortamiento es casi gratis. Si hay que recortar rango por fatiga, se recorta arriba, nunca abajo.",
      "pausaEstiramiento": "Pausa de 1 s en estiramiento en: RDL, curl inclinado, lateral inclinado, extensión de tríceps sobre la cabeza, femoral.",
      "otros": "Sin rebote, sin impulso de cadera, sin bloquear de golpe."
    },
    "progresion": [
      {
        "titulo": "★ Básicos",
        "detalle": "Doble progresión. Al cerrar el tope del rango en todas las series al RPE objetivo, subir el salto mínimo la semana siguiente."
      },
      {
        "titulo": "Accesorios",
        "detalle": "Primero repeticiones y calidad de contracción, después peso."
      },
      {
        "titulo": "En déficit",
        "detalle": "Mantener la carga ya es progreso. Si a 1.700 kcal de media se conserva el peso en barra y las repeticiones, el programa está funcionando."
      }
    ],
    "descarga": {
      "frecuencia": "Cada 5 semanas en fase 1 y 3 (antes que las 5-6 anteriores; el déficit acorta el ciclo).",
      "como": "La descarga corta series, no carga: ~50% de las series, mismo peso, RPE 7. Bajar el peso en déficit es la forma más rápida de perder la adaptación."
    },
    "autorregulacion": {
      "checkIn": "Anotar cada día, de 1 a 5: sueño · articulaciones · energía.",
      "señales": [
        {
          "señal": "Dos métricas en ≤2",
          "accion": "Cae el accesorio del sábado y las series top bajan a RPE 6-7 esa semana."
        },
        {
          "señal": "Molestia articular en un patrón",
          "accion": "Cambiar a la variante B/C de ese slot, no eliminar el patrón."
        },
        {
          "señal": "Semana con sueño ≤2 y toca LEGS",
          "accion": "El hack squat sustituye a la sentadilla esa semana. El día de pierna no se salta nunca; se degrada."
        },
        {
          "señal": "Tres semanas sin sumar en ningún ★",
          "accion": "Revisar antes el registro de comida que el programa."
        }
      ]
    },
    "ordenRecorte": {
      "principio": "Nunca se recorta proteína ni el suelo de 10.000 pasos.",
      "orden": [
        "El accesorio del sábado",
        "Una de las dos carreras (Mié o Dom)",
        "Fusionar Push + Pull en una sola sesión de torso"
      ]
    },
    "rotacion": [
      "Los ★ no rotan dentro de una fase. Son el ancla de la carga progresiva; si rotan, se pierde la referencia. Solo cambian por dolor articular o al cambiar de fase.",
      "Los accesorios rotan por bloques de 6 semanas (bloque A → B → C), coincidiendo con la descarga.",
      "Rotación anticipada: si un accesorio lleva 2 sesiones seguidas sin poder sumar ni una repetición ni un kilo a RPE constante, cambia a la siguiente variante del catálogo en el siguiente bloque.",
      "Máximo 2 accesorios cambiados por día y por bloque. Cambiarlo todo a la vez destruye la capacidad de comparar.",
      "La variante se elige del catálogo, en orden. No es un menú de \"lo que me apetezca hoy\"."
    ]
  },
  "escaleras": {
    "dominadas": {
      "titulo": "Progresión · Dominadas",
      "intro": "Empieza aquí si no llegas a 2 dominadas limpias. Haz este trabajo 2 veces por semana en el sitio de la dominada lastrada del día PULL, y no tengas prisa: con 43 años y dos parado, el músculo responde antes que el tendón, así que los codos y los hombros marcan el ritmo. Si aparece dolor articular, baja un peldaño.",
      "notaFase": "Esta progresión es independiente de la fase activa: sigue el mismo criterio en fase 1, 2 y 3.",
      "peldanos": [
        {
          "num": "1",
          "ejercicio": "remo-invertido",
          "objetivo": "3 × 10-12",
          "siguiente": "Sube de peldaño cuando: hagas 3×12 con el cuerpo casi horizontal y control total."
        },
        {
          "num": "2",
          "ejercicio": "retraccion-escapular-colgado",
          "objetivo": "3 × 8-10 + colgado 3 × 20-30 s",
          "siguiente": "Sube de peldaño cuando: cuelgues 30 s cómodo y controles 10 retracciones limpias."
        },
        {
          "num": "3",
          "ejercicio": "negativas-dominada",
          "objetivo": "3 × 4-5 negativas, bajando en 3-5 s",
          "siguiente": "Sube de peldaño cuando: bajes 5 negativas controladas de 5 s o más."
        },
        {
          "num": "4",
          "ejercicio": "dominada-asistida-banda",
          "objetivo": "3 × 5-8",
          "siguiente": "Sube de peldaño cuando: hagas 3×8 con una banda fina."
        },
        {
          "num": "5",
          "ejercicio": "dominada-completa",
          "objetivo": "3 × 5 (empieza en supino/neutro, que cuesta menos, y pasa a pronado)",
          "siguiente": "Sube de peldaño cuando: hagas 3×5-6 pronadas limpias, sin balanceo."
        }
      ],
      "meta": {
        "ejercicio": "dominada-lastrada",
        "nombre": "Dominada lastrada — ejercicio del día PULL",
        "objetivo": "4 × 5-8 · RPE 8-9",
        "cue": "Añade lastre pequeño (2,5-5 kg con cinturón o mochila) cuando superes 8 reps a peso corporal. Ya estás en la rutina."
      }
    },
    "fondos": {
      "titulo": "Progresión · Fondos",
      "intro": "Mismo criterio: empieza aquí si no controlas 3-5 fondos limpios en paralelas. Al principio baja solo hasta que el brazo quede paralelo al suelo y ve ganando rango sin forzar. Dos sesiones por semana en el sitio de los fondos lastrados del día PUSH.",
      "notaFase": "Esta progresión es independiente de la fase activa: sigue el mismo criterio en fase 1, 2 y 3.",
      "peldanos": [
        {
          "num": "1",
          "ejercicio": "fondos-banco",
          "objetivo": "3 × 12-15",
          "siguiente": "Sube de peldaño cuando: hagas 3×15 fáciles (pon un disco en el regazo para seguir progresando)."
        },
        {
          "num": "2",
          "ejercicio": "sosten-apoyo",
          "objetivo": "3 × 20-30 s bloqueado arriba",
          "siguiente": "Sube de peldaño cuando: aguantes 30 s firme, hombros abajo y sin temblar."
        },
        {
          "num": "3",
          "ejercicio": "negativas-fondo",
          "objetivo": "3 × 4-5 negativas de 3-5 s",
          "siguiente": "Sube de peldaño cuando: bajes 5 negativas controladas hasta ~90° de codo."
        },
        {
          "num": "4",
          "ejercicio": "fondos-asistidos",
          "objetivo": "3 × 6-10",
          "siguiente": "Sube de peldaño cuando: hagas 3×10 con poca asistencia."
        },
        {
          "num": "5",
          "ejercicio": "fondos-completos",
          "objetivo": "3 × 8 a peso corporal",
          "siguiente": "Sube de peldaño cuando: hagas 3×8 limpios sin ayuda."
        }
      ],
      "meta": {
        "ejercicio": "fondos-paralelas-lastre",
        "nombre": "Fondos lastrados — ejercicio del día PUSH",
        "objetivo": "3 × 8-12 · RPE 9",
        "cue": "Añade lastre con cinturón cuando superes 10-12 reps a peso corporal. Ya estás en la rutina."
      }
    }
  }
};
