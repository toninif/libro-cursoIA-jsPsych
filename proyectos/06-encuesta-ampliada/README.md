# Checkpoint 06: encuesta ampliada

Versión de `mi-primer-estudio` que incorpora recursos que Google Forms no ofrece o resuelve mal. Corresponde al final de la Parte IV.

## Contenido

- `index.html`: carga jsPsych 8.3.0, seis plugins y la hoja de estilos del estudio. Incluye la configuración para pantallas de celular.
- `experiment.js`: define la secuencia completa del estudio.
- `styles.css`: define la apariencia del estudio sin cambiar su procedimiento.
- `diccionario.md`: describe todas las variables y los recorridos posibles.
- `README.md`: este archivo.

Las dos escalas son ficticias y tienen fines didácticos. El texto de consentimiento es un ejemplo con fines pedagógicos.

## Recursos incorporados en la Parte IV

1. Orden aleatorio de los ítems dentro de cada escala y del orden de las dos escalas.
2. Salida del estudio si la persona no acepta el consentimiento.
3. Criterio de inclusión: el estudio termina si la persona no estudia en la universidad.
4. Pregunta de seguimiento sobre herramientas de IA, que solo aparece si la persona eligió esa opción.
5. Un control de atención dentro de la pantalla de la escala de motivación y la variable derivada `atencion_correcta`.
6. Barra de progreso, estilos propios y adaptación a pantallas de celular.

## Cómo ejecutarlo

1. Comprobá que la computadora tenga conexión a Internet.
2. Abrí `index.html` con doble clic y completá el estudio. Al final se descarga un archivo CSV.

## Cómo verificarlo

Recorré cada rama del procedimiento y comprobá el resultado.

| Caso | Resultado esperado |
|:---|:---|
| Elegir "No acepto" en el consentimiento | El estudio termina con un mensaje. El archivo tiene 2 filas. |
| Responder "No" a la pregunta de inclusión | El estudio termina con un mensaje. El archivo tiene 3 filas. |
| Completar sin elegir "Herramientas de IA" | No aparece la pregunta de seguimiento. El archivo tiene 11 filas. |
| Completar eligiendo "Herramientas de IA" | Aparece la pregunta de seguimiento. El archivo tiene 12 filas. |
| Marcar "En desacuerdo" en el control de atención | `atencion_correcta` vale `true`. |
| Marcar otra opción en el control de atención | `atencion_correcta` vale `false`. |

## Estado

Los datos se descargan en la computadora de quien completa el estudio. Esta forma de guardado sirve para probar el estudio, no para recolectar datos de participantes. La Parte V incorpora el guardado en línea y la publicación.
