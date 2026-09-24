# Diccionario de variables

Este documento describe los datos que produce `mi-primer-estudio` en el checkpoint 04.

## Organización del archivo de datos

El archivo `datos_<participante>.csv` tiene una fila por pantalla. Cada participante produce nueve filas.

Las respuestas a las preguntas no ocupan columnas propias. Aparecen dentro de la columna `response`, agrupadas con el nombre de cada variable. Por ejemplo, la fila de la pantalla `edad` contiene `{"edad":"22"}`.

## Variables generales

| Variable | Dónde aparece | Tipo | Valores posibles | Notas |
|:---|:---|:---|:---|:---|
| `participante` | Columna propia, en todas las filas | Texto | 8 letras y números al azar | Identifica a cada persona sin datos personales. |
| `pantalla` | Columna propia, en todas las filas | Texto | `bienvenida`, `consentimiento`, `edad`, `genero_anio`, `carrera`, `recursos`, `escala_organizacion`, `comentarios`, `cierre` | Indica a qué pantalla corresponde cada fila. |
| `rt` | Columna propia, en todas las filas | Numérica | Número entero positivo | Tiempo en milisegundos desde que apareció la pantalla hasta que la persona avanzó. |
| `time_elapsed` | Columna propia, en todas las filas | Numérica | Número entero positivo | Milisegundos transcurridos desde el comienzo del estudio. |
| `trial_index` | Columna propia, en todas las filas | Numérica | 0 a 8 | Posición de la pantalla en la secuencia, contando desde 0. |
| `trial_type` | Columna propia, en todas las filas | Texto | Nombre del plugin | Indica qué tipo de pantalla se usó. |

## Variables de las preguntas

| Variable | Pantalla | Pregunta | Tipo | Valores posibles | Obligatoria |
|:---|:---|:---|:---|:---|:---|
| `edad` | `edad` | ¿Cuál es tu edad? | Numérica | Número entero entre 18 y 80 | Sí |
| `genero` | `genero_anio` | ¿Con qué género te identificás? | Categórica nominal | `Mujer`, `Varón`, `Persona no binaria`, `Otra identidad`, `Prefiero no responder` | Sí |
| `anio_carrera` | `genero_anio` | ¿En qué año de la carrera estás? | Categórica ordinal | `1.º`, `2.º`, `3.º`, `4.º`, `5.º o más` | Sí |
| `carrera` | `carrera` | ¿Qué carrera estudiás? | Texto abierto | Cualquier texto | Sí |
| `recursos` | `recursos` | ¿Qué recursos usás para estudiar? | Categórica de respuesta múltiple | Lista con una o más de estas opciones: `Apuntes propios`, `Bibliografía obligatoria`, `Videos`, `Grupos de estudio`, `Herramientas de IA` | Sí |
| `efoe_1` a `efoe_4` | `escala_organizacion` | Ítems de la escala ficticia | Ordinal | 0 a 4 (ver codificación) | Sí |
| `comentarios` | `comentarios` | ¿Querés agregar algún comentario? | Texto abierto | Cualquier texto o vacío | No |

## Codificación de la escala ficticia

La escala de organización del estudio es **ficticia y tiene fines didácticos**. No es un instrumento validado.

jsPsych registra la posición de la opción elegida, contando desde 0.

| Opción | Valor registrado |
|:---|:---|
| Totalmente en desacuerdo | 0 |
| En desacuerdo | 1 |
| Ni de acuerdo ni en desacuerdo | 2 |
| De acuerdo | 3 |
| Totalmente de acuerdo | 4 |

El ítem `efoe_3` ("Dejo el estudio para el último momento.") está redactado en sentido inverso. Antes de sumar los ítems hay que invertirlo: el valor invertido es `4 - efoe_3`.

## Datos faltantes

- Las preguntas obligatorias no admiten respuestas vacías.
- Si la persona no escribe un comentario, `comentarios` queda como texto vacío (`""`).
- Si una persona cierra la ventana antes de terminar, en esta versión no se descarga ningún archivo.
