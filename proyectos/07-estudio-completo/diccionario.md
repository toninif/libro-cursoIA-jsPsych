# Diccionario de variables

Este documento describe los datos que produce `mi-primer-estudio` en el checkpoint 07.

## Organización del archivo de datos

El estudio envía a DataPipe un archivo `datos_<participante>.csv` por persona, una sola vez, al final del estudio o cuando el estudio termina por una regla condicional. Mientras `DATAPIPE_ID` no está configurado, el mismo archivo se descarga en la computadora donde se completa el estudio. El archivo tiene una fila por pantalla. La cantidad de filas depende del recorrido de cada persona:

- 2 filas, si no acepta el consentimiento;
- 3 filas, si no cumple el criterio de inclusión;
- 11 filas, si completa el estudio sin elegir "Herramientas de IA";
- 12 filas, si completa el estudio y elige "Herramientas de IA".

Las respuestas a las preguntas no ocupan columnas propias. Aparecen dentro de la columna `response`, agrupadas con el nombre de cada variable. Por ejemplo, la fila de la pantalla `edad` contiene `{"edad":"22"}`.

## Variables generales

| Variable | Dónde aparece | Tipo | Valores posibles | Notas |
|:---|:---|:---|:---|:---|
| `participante` | Columna propia, en todas las filas | Texto | 8 letras y números al azar | Identifica a cada persona sin datos personales. |
| `pantalla` | Columna propia, en todas las filas | Texto | `bienvenida`, `consentimiento`, `estudiante`, `edad`, `genero_anio`, `carrera`, `recursos`, `herramientas_ia`, `escala_organizacion`, `escala_motivacion`, `comentarios`, `cierre` | Indica a qué pantalla corresponde cada fila. |
| `primera_escala` | Columna propia, en todas las filas | Texto | `escala_organizacion`, `escala_motivacion` | Escala que se presentó primero. El orden de las escalas es aleatorio. |
| `question_order` | Columna propia, en las filas de las escalas | Lista de números | Por ejemplo, `[2,0,3,1]` | Orden en que se mostraron los ítems. Cada número es la posición del ítem en la definición, contando desde 0. |
| `rt` | Columna propia, en todas las filas | Numérica | Número entero positivo | Tiempo en milisegundos desde que apareció la pantalla hasta que la persona avanzó. |
| `time_elapsed` | Columna propia, en todas las filas | Numérica | Número entero positivo | Milisegundos transcurridos desde el comienzo del estudio. |
| `trial_index` | Columna propia, en todas las filas | Numérica | 0 a 11 | Posición de la pantalla en la secuencia, contando desde 0. |
| `trial_type` | Columna propia, en todas las filas | Texto | Nombre del plugin | Indica qué tipo de pantalla se usó. |
| `atencion_correcta` | Columna propia, solo en la fila `escala_motivacion` | Lógica | `true`, `false` | Variable derivada: vale `true` si `control_atencion` es 1 ("En desacuerdo"). Es un indicador, no un criterio de exclusión automático. |

## Variables de las preguntas

| Variable | Pantalla | Pregunta | Tipo | Valores posibles | Obligatoria |
|:---|:---|:---|:---|:---|:---|
| Respuesta al consentimiento | `consentimiento` | Indicá si aceptás participar. | Categórica | `0` (Acepto participar), `1` (No acepto), en la columna `response` | Sí |
| `estudiante` | `estudiante` | ¿Estudiás actualmente en la universidad? | Categórica nominal | `Sí`, `No` | Sí |
| `edad` | `edad` | ¿Cuál es tu edad? | Numérica | Número entero entre 18 y 80 | Sí |
| `genero` | `genero_anio` | ¿Con qué género te identificás? | Categórica nominal | `Mujer`, `Varón`, `Persona no binaria`, `Otra identidad`, `Prefiero no responder` | Sí |
| `anio_carrera` | `genero_anio` | ¿En qué año de la carrera estás? | Categórica ordinal | `1.º`, `2.º`, `3.º`, `4.º`, `5.º o más` | Sí |
| `carrera` | `carrera` | ¿Qué carrera estudiás? | Texto abierto | Cualquier texto | Sí |
| `recursos` | `recursos` | ¿Qué recursos usás para estudiar? | Categórica de respuesta múltiple | Lista con una o más de estas opciones: `Apuntes propios`, `Bibliografía obligatoria`, `Videos`, `Grupos de estudio`, `Herramientas de IA` | Sí |
| `herramientas_ia` | `herramientas_ia` | ¿Qué herramientas de IA usás para estudiar? | Texto abierto | Cualquier texto | Sí, cuando se muestra |
| `efoe_1` a `efoe_4` | `escala_organizacion` | Ítems de la escala ficticia de organización | Ordinal | 0 a 4 (ver codificación) | Sí |
| `efme_1` a `efme_3` | `escala_motivacion` | Ítems de la escala ficticia de motivación | Ordinal | 0 a 4 (ver codificación) | Sí |
| `control_atencion` | `escala_motivacion` | Para indicar que estás leyendo, marcá la opción «En desacuerdo». | Ordinal | 0 a 4; la respuesta esperada es 1 | Sí |
| `comentarios` | `comentarios` | ¿Querés agregar algún comentario? | Texto abierto | Cualquier texto o vacío | No |

## Codificación de las escalas ficticias

Las escalas de organización del estudio (EFOE) y de motivación para el estudio (EFME) son **ficticias y tienen fines didácticos**. No son instrumentos validados.

jsPsych registra la posición de la opción elegida, contando desde 0.

| Opción | Valor registrado |
|:---|:---|
| Totalmente en desacuerdo | 0 |
| En desacuerdo | 1 |
| Ni de acuerdo ni en desacuerdo | 2 |
| De acuerdo | 3 |
| Totalmente de acuerdo | 4 |

El ítem `efoe_3` ("Dejo el estudio para el último momento.") está redactado en sentido inverso. Antes de sumar los ítems de la EFOE hay que invertirlo: el valor invertido es `4 - efoe_3`. La EFME no tiene ítems invertidos. El ítem `control_atencion` se presenta junto con la EFME, pero no forma parte de la escala y no se suma al puntaje.

El orden de presentación de los ítems no cambia su nombre ni su codificación: `efoe_3` es siempre el mismo ítem, aunque aparezca en otra posición.

## Datos faltantes y valores que no aplican

- Las preguntas obligatorias no admiten respuestas vacías.
- Si la persona no escribe un comentario, `comentarios` queda como texto vacío (`""`).
- Si una persona no elige "Herramientas de IA", la pregunta `herramientas_ia` no se muestra y su fila no existe. No es un dato faltante: la pregunta no aplica.
- Si una persona no acepta el consentimiento o no cumple el criterio de inclusión, el estudio termina. El archivo solo contiene las filas hasta ese punto.
- Si una persona cierra la ventana antes de terminar, no se envía ningún archivo. El guardado progresivo de DataPipe está desactivado (`stream: false`).

## Criterios definidos antes de recolectar

- `atencion_correcta` se registra como indicador. En esta versión no se excluye a nadie de manera automática.
- Cualquier criterio de exclusión basado en `atencion_correcta` o en los tiempos de respuesta debe decidirse y documentarse antes de recolectar datos.
