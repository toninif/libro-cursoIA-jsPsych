// Identificador del experimento en DataPipe.
// COMPLETAR: reemplazá "COMPLETAR" por el identificador que aparece en tu panel de DataPipe.
const DATAPIPE_ID = "COMPLETAR";
const datapipe_configurado = DATAPIPE_ID !== "COMPLETAR";

const jsPsych = initJsPsych({
  show_progress_bar: true,
  message_progress_bar: "Progreso",
  extensions: [
    {
      type: jsPsychExtensionPipe,
      params: {
        experiment_id: DATAPIPE_ID,
        filename: () => "datos_" + participante + ".csv",
        // Los datos se envían una sola vez, al final del estudio.
        stream: false,
        enabled: datapipe_configurado,
        wait_message: "<p>Guardando tus respuestas. Por favor, no cierres esta página.</p>",
        done_message: "<p>Listo. Tus respuestas fueron guardadas. Ya podés cerrar esta página.</p>",
        on_save: function (resultado) {
          if (!resultado.ok) {
            jsPsych.getDisplayElement().innerHTML =
              "<p>No pudimos guardar tus respuestas. Por favor, avisá al equipo de investigación escribiendo a [COMPLETAR: correo de contacto].</p>";
          }
        }
      }
    }
  ],
  on_finish: function () {
    // Mientras DataPipe no esté configurado, los datos se descargan en esta computadora para poder probar el estudio.
    if (!datapipe_configurado) {
      jsPsych.data.get().localSave("csv", "datos_" + participante + ".csv");
    }
  }
});

// Identificador aleatorio de la persona participante
const participante = jsPsych.randomization.randomID(8);
jsPsych.data.addProperties({ participante: participante });

// Pantalla de bienvenida
const bienvenida = {
  type: jsPsychHtmlButtonResponse,
  stimulus: "<h1>Estudio sobre hábitos de estudio</h1><p>Gracias por tu interés en participar.</p>",
  choices: ["Comenzar"],
  data: { pantalla: "bienvenida" }
};

// Consentimiento informado (texto de ejemplo con fines pedagógicos)
const consentimiento = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
    "<h2>Consentimiento informado</h2>" +
    "<p>Este estudio forma parte de una actividad de aprendizaje. Vas a responder preguntas sobre tus datos generales y tus hábitos de estudio.</p>" +
    "<p>La participación dura aproximadamente 5 minutos. Es voluntaria y anónima. Podés abandonar el estudio en cualquier momento cerrando esta ventana. Si la cerrás antes de terminar, no se guarda ninguna de tus respuestas.</p>" +
    "<p>Tus respuestas se guardan al final del estudio, sin datos que permitan identificarte, en un espacio de almacenamiento del equipo de investigación. Si elegís no participar, solo queda registrado que no aceptaste.</p>" +
    "<p>Si tenés preguntas, podés escribir a [COMPLETAR: correo de contacto].</p>" +
    "<p>Indicá si aceptás participar.</p>",
  choices: ["Acepto participar", "No acepto"],
  data: { pantalla: "consentimiento" },
  on_finish: function (data) {
    // Si la persona elige "No acepto" (el segundo botón, posición 1), el estudio termina.
    if (data.response === 1) {
      jsPsych.abortExperiment("<p>Elegiste no participar. El estudio terminó. Solo quedó registrado que no aceptaste participar. Podés cerrar esta ventana.</p>");
    }
  }
};

// Criterio de inclusión: el estudio está dirigido a estudiantes universitarios
const pregunta_estudiante = {
  type: jsPsychSurveyMultiChoice,
  questions: [
    {
      prompt: "¿Estudiás actualmente en la universidad?",
      name: "estudiante",
      options: ["Sí", "No"],
      required: true
    }
  ],
  button_label: "Continuar",
  data: { pantalla: "estudiante" },
  on_finish: function (data) {
    // Si la persona responde "No", no cumple el criterio de inclusión y el estudio termina.
    if (data.response.estudiante === "No") {
      jsPsych.abortExperiment("<p>Este estudio está dirigido a estudiantes universitarios. Muchas gracias por tu interés.</p>");
    }
  }
};

// Cuestionario sociodemográfico
const pregunta_edad = {
  type: jsPsychSurveyHtmlForm,
  html:
    '<p>¿Cuál es tu edad?</p>' +
    '<input type="number" name="edad" min="18" max="80" required>',
  button_label: "Continuar",
  data: { pantalla: "edad" }
};

const preguntas_genero_anio = {
  type: jsPsychSurveyMultiChoice,
  questions: [
    {
      prompt: "¿Con qué género te identificás?",
      name: "genero",
      options: ["Mujer", "Varón", "Persona no binaria", "Otra identidad", "Prefiero no responder"],
      required: true
    },
    {
      prompt: "¿En qué año de la carrera estás?",
      name: "anio_carrera",
      options: ["1.º", "2.º", "3.º", "4.º", "5.º o más"],
      required: true
    }
  ],
  button_label: "Continuar",
  data: { pantalla: "genero_anio" }
};

const pregunta_carrera = {
  type: jsPsychSurveyText,
  questions: [
    { prompt: "¿Qué carrera estudiás?", name: "carrera", required: true }
  ],
  button_label: "Continuar",
  data: { pantalla: "carrera" }
};

const pregunta_recursos = {
  type: jsPsychSurveyMultiSelect,
  questions: [
    {
      prompt: "¿Qué recursos usás para estudiar? Podés elegir más de una opción.",
      name: "recursos",
      options: ["Apuntes propios", "Bibliografía obligatoria", "Videos", "Grupos de estudio", "Herramientas de IA"],
      required: true
    }
  ],
  button_label: "Continuar",
  data: { pantalla: "recursos" }
};

// Pregunta de seguimiento: solo aparece si la persona eligió "Herramientas de IA"
const pregunta_herramientas_ia = {
  timeline: [
    {
      type: jsPsychSurveyText,
      questions: [
        { prompt: "¿Qué herramientas de IA usás para estudiar?", name: "herramientas_ia", required: true }
      ],
      button_label: "Continuar",
      data: { pantalla: "herramientas_ia" }
    }
  ],
  conditional_function: function () {
    const recursos = jsPsych.data.get().filter({ pantalla: "recursos" }).values()[0].response.recursos;
    return recursos.includes("Herramientas de IA");
  }
};

// REEMPLAZAR: esta escala es ficticia. En el proyecto final, reemplazala por la escala
// que elegiste, con los ítems, las instrucciones y las opciones de la publicación original.
// ESCALA FICTICIA CON FINES PEDAGÓGICOS.
// No es un instrumento validado. No usar para medir en una investigación real.
// El ítem efoe_3 está redactado en sentido inverso.
const opciones_acuerdo = [
  "Totalmente en desacuerdo",
  "En desacuerdo",
  "Ni de acuerdo ni en desacuerdo",
  "De acuerdo",
  "Totalmente de acuerdo"
];

const escala_organizacion = {
  type: jsPsychSurveyLikert,
  preamble:
    "<p>Indicá cuánto estás de acuerdo con cada afirmación sobre tu forma de estudiar.</p>" +
    "<p><em>Escala ficticia con fines didácticos.</em></p>",
  randomize_question_order: true,
  questions: [
    { prompt: "Organizo mis horas de estudio con anticipación.", name: "efoe_1", labels: opciones_acuerdo, required: true },
    { prompt: "Termino las tareas de estudio que me propongo.", name: "efoe_2", labels: opciones_acuerdo, required: true },
    { prompt: "Dejo el estudio para el último momento.", name: "efoe_3", labels: opciones_acuerdo, required: true },
    { prompt: "Tengo un lugar habitual para estudiar.", name: "efoe_4", labels: opciones_acuerdo, required: true }
  ],
  button_label: "Continuar",
  data: { pantalla: "escala_organizacion" }
};

// REEMPLAZAR: esta escala es ficticia. Reemplazala por otra escala elegida o eliminala
// si tu estudio usa una sola escala.
// SEGUNDA ESCALA FICTICIA CON FINES PEDAGÓGICOS.
// No es un instrumento validado. No usar para medir en una investigación real.
const escala_motivacion = {
  type: jsPsychSurveyLikert,
  preamble:
    "<p>Indicá cuánto estás de acuerdo con cada afirmación sobre tu interés por estudiar.</p>" +
    "<p><em>Escala ficticia con fines didácticos.</em></p>",
  randomize_question_order: true,
  questions: [
    { prompt: "Disfruto aprender los temas de mi carrera.", name: "efme_1", labels: opciones_acuerdo, required: true },
    { prompt: "Estudio aunque no tenga un examen cerca.", name: "efme_2", labels: opciones_acuerdo, required: true },
    { prompt: "Me interesa profundizar en lo que estudio.", name: "efme_3", labels: opciones_acuerdo, required: true },
    // Control de atención: no forma parte de la escala y no se suma al puntaje
    { prompt: "Para indicar que estás leyendo, marcá la opción «En desacuerdo».", name: "control_atencion", labels: opciones_acuerdo, required: true }
  ],
  button_label: "Continuar",
  data: { pantalla: "escala_motivacion" },
  on_finish: function (data) {
    // "En desacuerdo" es la segunda opción, que jsPsych registra como 1
    data.atencion_correcta = data.response.control_atencion === 1;
  }
};

// Orden aleatorio de las escalas: cada participante recibe un orden al azar
const escalas_en_orden = jsPsych.randomization.shuffle([escala_organizacion, escala_motivacion]);
jsPsych.data.addProperties({ primera_escala: escalas_en_orden[0].data.pantalla });

const pregunta_comentarios = {
  type: jsPsychSurveyText,
  questions: [
    { prompt: "¿Querés agregar algún comentario? (opcional)", name: "comentarios", rows: 4, required: false }
  ],
  button_label: "Continuar",
  data: { pantalla: "comentarios" }
};

// Pantalla de cierre y explicación del estudio (debriefing)
const cierre = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
    "<h2>Gracias por participar</h2>" +
    "<p>Este estudio busca describir cómo organizan su estudio las personas que estudian en la universidad y cómo se relaciona esa organización con su motivación.</p>" +
    "<p>Las dos escalas que respondiste fueron creadas con fines didácticos y no son instrumentos validados. Por eso, tus respuestas no permiten sacar conclusiones sobre tu forma de estudiar.</p>" +
    "<p>Si tenés preguntas o querés conocer los resultados generales, podés escribir a [COMPLETAR: correo de contacto].</p>" +
    "<p>Presioná el botón para enviar tus respuestas.</p>",
  choices: ["Enviar respuestas"],
  data: { pantalla: "cierre" }
};

jsPsych.run([
  bienvenida,
  consentimiento,
  pregunta_estudiante,
  pregunta_edad,
  preguntas_genero_anio,
  pregunta_carrera,
  pregunta_recursos,
  pregunta_herramientas_ia,
  { timeline: escalas_en_orden },
  pregunta_comentarios,
  cierre
]);
