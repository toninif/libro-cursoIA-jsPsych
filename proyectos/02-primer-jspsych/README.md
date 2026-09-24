# Checkpoint 02: primer jsPsych

Primera versión ejecutable de `mi-primer-estudio`. Corresponde al final del capítulo "Nuestro primer estudio con jsPsych".

## Contenido

- `index.html`: carga jsPsych 8.3.0 y los plugins desde Internet, y después carga `experiment.js`.
- `experiment.js`: define tres pantallas: bienvenida, pregunta de edad y cierre.
- `README.md`: este archivo.

## Cómo ejecutarlo

1. Comprobá que la computadora tenga conexión a Internet.
2. Abrí `index.html` con doble clic. El navegador va a mostrar la pantalla de bienvenida.

## Cómo verificarlo

1. La pantalla de bienvenida muestra el título "Estudio sobre hábitos de estudio" y el botón "Comenzar".
2. La pregunta de edad no permite continuar si el campo está vacío.
3. La pantalla de cierre muestra el botón "Finalizar".
4. Al presionar "Finalizar", la página muestra los datos en formato CSV. La fila de la pregunta de edad contiene la respuesta con el nombre `edad`.

## Estado

El estudio todavía no guarda los datos. Los muestra en pantalla al terminar para poder revisarlos.
