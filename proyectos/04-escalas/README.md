# Checkpoint 04: escalas y datos

Versión de `mi-primer-estudio` con cuestionario sociodemográfico, una escala ficticia, identificador de participante y descarga de datos. Corresponde al final de la Parte III.

## Contenido

- `index.html`: carga jsPsych 8.3.0 y seis plugins desde Internet, y después carga `experiment.js`.
- `experiment.js`: define la secuencia completa. Cada pantalla registra la variable `pantalla`, y todas las filas incluyen la variable `participante`.
- `diccionario.md`: describe cada variable, sus valores posibles y la codificación de la escala.
- `README.md`: este archivo.

La escala de organización del estudio es ficticia y tiene fines didácticos. El texto de consentimiento es un ejemplo con fines pedagógicos.

## Cómo ejecutarlo

1. Comprobá que la computadora tenga conexión a Internet.
2. Abrí `index.html` con doble clic.
3. Completá el estudio. Al presionar "Finalizar", el navegador descarga un archivo llamado `datos_` seguido del identificador de participante y la extensión `.csv`.

## Cómo verificarlo

1. Las validaciones del checkpoint 03 siguen funcionando.
2. La escala no permite continuar si falta responder algún ítem.
3. El archivo descargado tiene nueve filas de datos, una por pantalla, y las columnas `participante` y `pantalla`.
4. Los valores de la escala van de 0 a 4, como indica `diccionario.md`.

## Estado

Los datos se descargan en la computadora de quien completa el estudio. Esta forma de guardado sirve para probar el estudio, no para recolectar datos de participantes. La Parte V incorpora el guardado en línea.
