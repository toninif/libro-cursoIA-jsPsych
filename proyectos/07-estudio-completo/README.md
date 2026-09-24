# Checkpoint 07: estudio completo

Versión final de referencia de `mi-primer-estudio`, lista para configurar y publicar. Corresponde a la Parte V.

## Contenido

- `index.html`: carga jsPsych 8.3.0, seis plugins, la extensión de DataPipe 0.2.0 y `styles.css`.
- `experiment.js`: define la secuencia completa: bienvenida, consentimiento, criterio de inclusión, cuestionario sociodemográfico, pregunta de seguimiento, escalas en orden aleatorio, comentarios y cierre con explicación del estudio.
- `styles.css`: define la apariencia y la adaptación a pantallas de celular.
- `diseno.md`: describe las decisiones metodológicas.
- `diccionario.md`: describe todas las variables y los recorridos posibles.
- `AGENTS.md`: reglas de trabajo para los agentes que modifiquen el proyecto.
- `README.md`: este archivo.

## Qué tenés que completar o reemplazar

Este checkpoint es una plantilla. Antes de publicarlo como tu estudio, buscá en todos los archivos las palabras `COMPLETAR` y `REEMPLAZAR`.

| Marca | Dónde | Qué hacer |
|:---|:---|:---|
| `COMPLETAR` en `DATAPIPE_ID` | `experiment.js` | Escribir el identificador de tu experimento en DataPipe. |
| `COMPLETAR: correo de contacto` | `experiment.js` | Escribir un correo de contacto del equipo, en el consentimiento, en el cierre y en el mensaje de error. |
| `REEMPLAZAR` en las escalas | `experiment.js` | Reemplazar las escalas ficticias por las escalas que elegiste. |
| `COMPLETAR` y `REEMPLAZAR` | `diseno.md` | Describir tu propio estudio. |

Además, revisá el texto del consentimiento y del cierre para que describan tu estudio.

## Cómo ejecutarlo

1. Comprobá que la computadora tenga conexión a Internet.
2. Abrí `index.html` con doble clic.
3. Mientras `DATAPIPE_ID` valga `"COMPLETAR"`, al terminar el estudio se descarga un archivo CSV en tu computadora. Cuando escribas tu identificador, los datos se envían a DataPipe.

## Cómo verificar el estudio

| Caso | Resultado esperado |
|:---|:---|
| Elegir "No acepto" en el consentimiento | Mensaje de no participación. Se guarda un archivo de 2 filas. |
| Responder "No" a la pregunta de inclusión | Mensaje de inclusión. Se guarda un archivo de 3 filas. |
| Completar sin elegir "Herramientas de IA" | Sin pregunta de seguimiento. Archivo de 11 filas. |
| Completar eligiendo "Herramientas de IA" | Con pregunta de seguimiento. Archivo de 12 filas. |
| Marcar "En desacuerdo" en el control de atención | `atencion_correcta` vale `true`. |
| Marcar otra opción en el control | `atencion_correcta` vale `false`. |
| Repetir un recorrido completo cuatro veces | Ambas escalas aparecen primero al menos una vez. |
| Probar edades vacía, 17, 18, 80 y 81 | Se rechazan vacía, 17 y 81. Se aceptan 18 y 80. |
| Cerrar la ventana antes de terminar | No se guarda ningún archivo. |
| Con DataPipe configurado, completar el estudio | Aparece "Listo. Tus respuestas fueron guardadas." y el archivo llega a Google Drive o Zenodo. |

## Antes de publicar

- [ ] No quedan marcas `COMPLETAR` ni `REEMPLAZAR` en `experiment.js`.
- [ ] Las escalas coinciden, ítem por ítem, con la publicación original.
- [ ] El consentimiento describe el destino real de los datos y un contacto válido.
- [ ] `diccionario.md` describe las variables de tu versión.
- [ ] El plan de pruebas se ejecutó completo.
- [ ] En DataPipe, el experimento tiene un límite de sesiones y la validación activada.
- [ ] La carpeta no contiene archivos de datos. El repositorio publicado es público.

## Después de publicar

- [ ] Activar "Accept new data" en DataPipe.
- [ ] Completar el estudio una vez desde la dirección publicada, en computadora y en celular.
- [ ] Comprobar que el archivo llegó a Google Drive o Zenodo y que coincide con el diccionario.
- [ ] Registrar en este README la dirección publicada y la fecha.
- [ ] Al terminar la recolección, desactivar "Accept new data".
