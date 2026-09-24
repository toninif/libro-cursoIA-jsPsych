# Checkpoint 05: aleatorización

Versión de `mi-primer-estudio` con dos escalas ficticias presentadas en orden aleatorio. Corresponde al final del capítulo "Aleatorización".

## Contenido

- `index.html`: carga jsPsych 8.3.0 y seis plugins desde Internet, y después carga `experiment.js`.
- `experiment.js`: agrega la escala ficticia de motivación para el estudio, presenta los ítems de cada escala en orden aleatorio y mezcla el orden de las dos escalas.
- `diccionario.md`: describe las variables, incluidas las nuevas.
- `README.md`: este archivo.

Las dos escalas son ficticias y tienen fines didácticos.

## Cómo ejecutarlo

1. Comprobá que la computadora tenga conexión a Internet.
2. Abrí `index.html` con doble clic y completá el estudio. Al final se descarga un archivo CSV.

## Cómo verificarlo

1. Ejecutá el estudio varias veces. En algunas ejecuciones aparece primero la escala de organización y en otras la de motivación.
2. Dentro de cada escala, el orden de los ítems cambia entre ejecuciones.
3. En el archivo de datos, la columna `primera_escala` coincide con la escala que apareció primero.
4. En las filas de las escalas, la columna `question_order` indica el orden en que se mostraron los ítems.
5. Las respuestas siguen registradas con el nombre de cada ítem, sin importar el orden de presentación.

## Estado

Los datos se descargan en la computadora de quien completa el estudio. Esta forma de guardado sirve para probar el estudio, no para recolectar datos de participantes.
