const jsPsych = initJsPsych({
  on_finish: function () {
    jsPsych.data.get().localSave("csv", "datos_" + participante + ".csv");
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
    "<p>La participación dura aproximadamente 5 minutos. Es voluntaria y anónima. Podés abandonar el estudio en cualquier momento cerrando esta ventana.</p>" +
    "<p>Si aceptás participar, presioná el botón. Si no aceptás, cerrá esta ventana.</p>",
  choices: ["Acepto participar"],
  data: { pantalla: "consentimiento" }
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
  questions: [
    { prompt: "Organizo mis horas de estudio con anticipación.", name: "efoe_1", labels: opciones_acuerdo, required: true },
    { prompt: "Termino las tareas de estudio que me propongo.", name: "efoe_2", labels: opciones_acuerdo, required: true },
    { prompt: "Dejo el estudio para el último momento.", name: "efoe_3", labels: opciones_acuerdo, required: true },
    { prompt: "Tengo un lugar habitual para estudiar.", name: "efoe_4", labels: opciones_acuerdo, required: true }
  ],
  button_label: "Continuar",
  data: { pantalla: "escala_organizacion" }
};

const pregunta_comentarios = {
  type: jsPsychSurveyText,
  questions: [
    { prompt: "¿Querés agregar algún comentario? (opcional)", name: "comentarios", rows: 4, required: false }
  ],
  button_label: "Continuar",
  data: { pantalla: "comentarios" }
};

// Pantalla de cierre
const cierre = {
  type: jsPsychHtmlButtonResponse,
  stimulus: "<p>Terminaste. Muchas gracias por participar.</p>",
  choices: ["Finalizar"],
  data: { pantalla: "cierre" }
};

jsPsych.run([
  bienvenida,
  consentimiento,
  pregunta_edad,
  preguntas_genero_anio,
  pregunta_carrera,
  pregunta_recursos,
  escala_organizacion,
  pregunta_comentarios,
  cierre
]);
