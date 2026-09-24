const jsPsych = initJsPsych({
  on_finish: function () {
    jsPsych.data.displayData("csv");
  }
});

const bienvenida = {
  type: jsPsychHtmlButtonResponse,
  stimulus: "<h1>Estudio sobre hábitos de estudio</h1><p>Gracias por tu interés en participar.</p>",
  choices: ["Comenzar"]
};

const pregunta_edad = {
  type: jsPsychSurveyText,
  questions: [
    { prompt: "¿Cuál es tu edad?", name: "edad", required: true }
  ],
  button_label: "Continuar"
};

const cierre = {
  type: jsPsychHtmlButtonResponse,
  stimulus: "<p>Terminaste. Muchas gracias por participar.</p>",
  choices: ["Finalizar"]
};

jsPsych.run([bienvenida, pregunta_edad, cierre]);
