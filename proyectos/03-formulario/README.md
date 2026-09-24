# Checkpoint 03: formulario

Versión de `mi-primer-estudio` con consentimiento informado y cuestionario sociodemográfico. Corresponde al final del capítulo "Preguntas, respuestas y validaciones".

## Contenido

- `index.html`: carga jsPsych 8.3.0 y cinco plugins desde Internet, y después carga `experiment.js`.
- `experiment.js`: define la secuencia bienvenida, consentimiento, edad, género y año, carrera, recursos de estudio, comentarios y cierre.
- `README.md`: este archivo.

El texto de consentimiento es un ejemplo con fines pedagógicos. Un estudio real debe usar el texto aprobado por el comité de ética correspondiente.

## Cómo ejecutarlo

1. Comprobá que la computadora tenga conexión a Internet.
2. Abrí `index.html` con doble clic.

## Cómo verificarlo

1. La pregunta de edad no permite continuar con el campo vacío ni con valores menores que 18 o mayores que 80.
2. Las preguntas de género, año, carrera y recursos no permiten continuar sin respuesta.
3. La pregunta de recursos permite elegir más de una opción.
4. La pregunta de comentarios permite continuar sin responder.
5. Al presionar "Finalizar", la página muestra los datos en formato CSV con las variables `edad`, `genero`, `anio_carrera`, `carrera`, `recursos` y `comentarios`.

## Estado

El estudio todavía no guarda los datos. Los muestra en pantalla al terminar para poder revisarlos. Una persona que no acepta el consentimiento debe cerrar la ventana; el capítulo sobre lógica condicional agrega una salida explícita.
