# Objetivo del proyecto

Este proyecto contiene un Quarto Book dirigido a estudiantes de grado de Psicología sin conocimientos previos de programación, terminal, desarrollo web ni agentes de IA.

El objetivo del libro es acompañar al estudiante desde un nivel inicial —en el que su referencia principal para construir estudios online es Google Forms— hasta poder diseñar, implementar, ejecutar, revisar y publicar estudios psicológicos con jsPsych utilizando agentes de IA como Codex.

El libro no debe asumir conocimientos técnicos previos.

# Principio pedagógico central

El objetivo NO es formar programadores.

El objetivo es desarrollar una alfabetización computacional suficiente para que un estudiante de Psicología pueda:

- comprender qué es una computadora desde una perspectiva funcional;
- entender archivos, carpetas, rutas y programas;
- utilizar una terminal básica;
- comprender qué significa ejecutar un programa;
- reconocer la estructura de un proyecto;
- trabajar con un agente de IA desde la terminal;
- formular instrucciones claras y verificables;
- leer y revisar modificaciones sencillas de código;
- comprender qué datos genera un estudio;
- implementar formularios y tareas psicológicas con jsPsych;
- distinguir entre una decisión metodológica y su implementación técnica;
- verificar críticamente el trabajo producido por un agente;
- construir un estudio psicológico completo.

La regla transversal del curso es:

> El agente puede implementar una decisión; el investigador debe decidir qué implementar y verificar que sea correcto.

# Público objetivo

Asumir siempre que el lector:

- estudia Psicología;
- tiene experiencia cotidiana usando una computadora;
- conoce Google Forms;
- puede utilizar Word, navegador y archivos comunes;
- NO sabe programar;
- NO sabe qué es JavaScript;
- NO sabe qué es npm;
- NO sabe qué es una dependencia;
- NO sabe qué es una terminal;
- NO sabe qué es Git;
- NO sabe qué significa ejecutar código;
- puede sentirse intimidado frente a una terminal o un bloque de código.

Nunca introducir un concepto técnico como si fuera obvio.

Toda palabra técnica nueva debe explicarse antes de utilizarse de manera habitual.

# Enfoque del libro

El recorrido conceptual general debe ser:

1. uso cotidiano de una computadora;
2. comprensión básica de archivos, carpetas y programas;
3. uso de terminal;
4. ejecución de programas;
5. estructura de proyectos;
6. agentes de IA;
7. trabajo asistido por agentes;
8. Google Forms como punto de partida;
9. reproducción de formularios mediante jsPsych;
10. estructura de los datos;
11. capacidades que exceden Google Forms;
12. lógica del procedimiento: aleatorización, condiciones y calidad de respuesta;
13. construcción de una encuesta psicológica completa;
14. almacenamiento y publicación;
15. proyecto final.

La progresión debe ser acumulativa.

No introducir complejidad técnica si todavía no es necesaria.

# Estructura del Quarto Book

El libro debe organizarse aproximadamente en estas partes:

## Parte I. Entender la computadora

- Qué es una computadora.
- Hardware y software.
- Sistema operativo.
- Programas.
- Archivos y extensiones.
- Carpetas.
- Rutas.
- Procesos.
- Navegador.
- Terminal.
- Ejecutar programas.
- Errores.
- Qué es un proyecto.

## Parte II. Trabajar con agentes de IA

- Diferencia entre chatbot y agente.
- Qué significa que un agente trabaje sobre un proyecto.
- Codex desde terminal.
- Opcionalmente, equivalencias con Claude Code.
- Cómo formular instrucciones.
- Cómo limitar el alcance de una tarea.
- Cómo pedir un plan antes de modificar archivos.
- Cómo revisar cambios.
- Cómo ejecutar y verificar.
- Cómo interpretar errores.
- Ciclo especificar → implementar → ejecutar → verificar → corregir.

## Parte III. De Google Forms a jsPsych

- Qué hace realmente Google Forms.
- Preguntas y variables.
- Tipos de respuesta.
- Validaciones.
- Consentimiento.
- Datos sociodemográficos.
- Preguntas abiertas.
- Opciones múltiples.
- Escalas Likert.
- Primer proyecto jsPsych.
- Construcción de cuestionarios.
- Escalas psicológicas.
- Datos generados.
- Diccionario de variables.

## Parte IV. Más allá de Google Forms

La Parte IV se orienta al producto final del curso, que es una encuesta. Presenta capacidades que Google Forms no ofrece o resuelve mal, aplicadas a cuestionarios y escalas.

- Aleatorización del orden de ítems y de escalas.
- Diferencia entre orden aleatorio, muestreo y asignación a condiciones.
- Lógica condicional: criterios de inclusión, consentimiento rechazado y preguntas de seguimiento.
- Controles de atención y calidad de respuesta.
- Tiempos de respuesta por pantalla y duración total.
- Respuestas apresuradas y sus limitaciones como indicador.
- Presentación: instrucciones, barra de progreso, estilos y uso en celulares.
- Integración en una encuesta ampliada.

## Parte V. Construcción de un estudio completo

- Diseñar antes de programar.
- Traducir una pregunta de investigación en un procedimiento.
- Especificar variables.
- Construcción incremental.
- Pilotaje.
- Debugging.
- Casos límite.
- Calidad de datos.
- Guardado.
- Despliegue.
- Publicación.
- Proyecto final.

# Estructura pedagógica de cada capítulo

Siempre que sea apropiado, cada capítulo debe contener:

1. Objetivos de aprendizaje.
2. Una situación o problema concreto.
3. Explicación conceptual.
4. Por qué ese concepto importa para investigación en Psicología.
5. Una demostración.
6. Una actividad guiada.
7. Una actividad con Codex.
8. Una explicación de qué hizo realmente el agente.
9. Una actividad de verificación.
10. Errores frecuentes.
11. Síntesis.
12. Ejercicio breve o desafío final.

No es obligatorio forzar esta estructura cuando no tenga sentido, pero debe mantenerse una experiencia consistente entre capítulos.

# Estilo de redacción

Escribir en español claro y académico, adecuado para estudiantes de grado.

Utilizar español rioplatense cuando resulte natural, sin exagerar coloquialismos.

Priorizar:

- frases claras;
- párrafos relativamente breves;
- ejemplos concretos;
- explicaciones progresivas;
- precisión conceptual;
- analogías solo cuando realmente ayuden.

Evitar:

- jerga innecesaria;
- explicaciones grandilocuentes;
- lenguaje excesivamente técnico;
- asumir conocimientos previos;
- expresiones vagas como "simplemente", "obviamente", "es trivial" o "como todos saben";
- tono infantilizante.

El estudiante es principiante, no incapaz.

# Código

No presentar grandes bloques de código sin explicación.

El código debe introducirse progresivamente.

Cuando aparezca código:

1. explicar primero qué queremos conseguir;
2. mostrar el fragmento mínimo necesario;
3. explicar qué partes son relevantes;
4. mostrar cómo comprobar que funciona.

Priorizar inicialmente la lectura y modificación de código sobre la escritura desde cero.

El estudiante debería aprender primero a identificar:

- dónde se define un texto;
- dónde se define una variable;
- dónde se define una duración;
- dónde se define una respuesta;
- dónde ocurre una aleatorización;
- dónde se guardan datos.

Solo posteriormente aumentar la complejidad.

# Uso de Codex

Codex debe presentarse como herramienta de implementación y asistencia, no como autoridad metodológica.

Las actividades deben enseñar progresivamente a formular mejores instrucciones.

Ejemplo inicial:

> Creá un archivo README.md y escribí una breve descripción del proyecto.

Ejemplo intermedio:

> Agregá una pregunta de edad. Debe ser obligatoria y aceptar valores entre 18 y 80. No modifiques ninguna otra parte del estudio.

Ejemplo avanzado:

> Revisá la implementación de la asignación aleatoria entre las condiciones positiva, neutra y negativa. Antes de modificar archivos, explicá cómo está implementada actualmente y qué riesgos encontrás. Luego proponé un cambio y esperá la aprobación antes de implementarlo.

Cuando Codex realice modificaciones importantes, promover siempre el ciclo:

1. inspeccionar;
2. planificar;
3. modificar;
4. ejecutar;
5. verificar;
6. documentar.

# Accesibilidad económica

Las actividades obligatorias del curso deben poder realizarse sin comprar software ni contratar una suscripción paga de IA.

Priorizar:

- herramientas gratuitas;
- ejecución local;
- jsPsych;
- Node.js;
- npm;
- Git;
- GitHub;
- VS Code u otro editor gratuito;
- Quarto;
- Codex con acceso gratuito cuando esté disponible.

Las herramientas pagas pueden mencionarse como alternativas opcionales, nunca como requisito.

No diseñar actividades cuya resolución dependa de una gran cantidad de uso de IA.

Preferir tareas pequeñas, delimitadas y verificables.

# Proyecto acumulativo

El estudiante debe trabajar sobre un proyecto que crece durante el curso.

La progresión aproximada debe ser:

## Etapa 1

```text
mi-primer-estudio/
└── README.md
```

## Etapa 2

```text
mi-primer-estudio/
├── index.html
├── experiment.js
└── README.md
```

## Etapa 3

```text
mi-primer-estudio/
├── index.html
├── experiment.js
├── styles.css
└── README.md
```

## Etapa posterior

```text
mi-primer-estudio/
├── index.html
├── src/
│   ├── experiment.js
│   └── questionnaires.js
├── styles/
├── README.md
└── AGENTS.md
```

No introducir esta estructura completa antes de que los estudiantes necesiten comprenderla.

# Decisiones del curso

Estas decisiones fueron tomadas por el autor del curso. Todos los capítulos, apéndices y checkpoints deben respetarlas.

## Producto final

El producto final del curso es un **estudio de encuesta online** publicado y funcionando. Su secuencia es:

1. consentimiento informado;
2. cuestionario sociodemográfico;
3. una o más escalas psicológicas (candidatas: satisfacción con la vida, personalidad o afecto positivo y negativo);
4. pantalla final de cierre y explicación del estudio (*debriefing*).

Los ítems de las escalas deben provenir de versiones proporcionadas explícitamente por el autor del curso. No redactarlos ni reproducirlos de memoria.

## jsPsych

- Cargar jsPsych y sus plugins desde internet mediante etiquetas `<script>` en `index.html`, sin npm ni herramientas de compilación.
- Fijar siempre una versión exacta en cada dirección (por ejemplo, `jspsych@8.3.0`). No usar direcciones sin versión.
- El estudio debe poder ejecutarse abriendo `index.html` en el navegador o publicándolo en GitHub Pages.
- No introducir Node.js, npm ni el concepto de dependencia salvo que un capítulo posterior lo justifique.

## Escalas psicológicas

- En los capítulos se usa una escala ficticia con fines pedagógicos, identificada como tal en el texto y en el código.
- En el proyecto final, cada estudiante incorpora una escala real cuyos ítems, instrucciones, opciones de respuesta y referencia provee el docente.
- El libro debe indicar con claridad dónde se incorpora ese contenido autorizado.

## Editor de texto

- Windows: Notepad++.
- macOS: CotEditor.
- Ambos son gratuitos y livianos. Presentarlos cuando los estudiantes necesiten leer archivos de código, con números de línea y resaltado de sintaxis.
- No exigir VS Code ni otros editores pesados. Pueden mencionarse como alternativas opcionales.

## Git

Postergar Git. No es necesario explicarlo en profundidad. Cuando haga falta para publicar, introducir solo lo mínimo indispensable.

## Publicación y datos

- Publicación del estudio: GitHub y GitHub Pages.
- Guardado de datos: DataPipe (`pipe.jspsych.org`).
- No usar OSF como destino: DataPipe dejó de crear experimentos en OSF y dejará de escribir allí después del 16 de noviembre de 2026.
- Presentar dos destinos de DataPipe:
  - Opción 1: Google Drive (carpeta privada en la cuenta del investigador).
  - Opción 2: Zenodo (depósito privado hasta que se publica; publicar genera un DOI).
- En jsPsych 8, integrar DataPipe con la extensión `@jspsych/extension-pipe`, con versión fija. El plugin anterior `jsPsychPipe` sigue funcionando, pero no se recomienda para estudios nuevos.
- La extensión guarda cada pantalla a medida que ocurre y genera archivos parciales cuando una persona abandona el estudio. Relacionar este comportamiento con el consentimiento informado y con la posibilidad de retirarse.
- Antes de escribir sobre DataPipe, verificar su documentación vigente, porque cambió de manera importante en septiembre de 2026.

# Checkpoints

Mantener versiones recuperables del proyecto.

Ejemplo:

```text
proyectos/
├── 01-inicial/
├── 02-primer-jspsych/
├── 03-formulario/
├── 04-escalas/
├── 05-aleatorizacion/
├── 06-encuesta-ampliada/
└── 07-estudio-completo/
```

Cada checkpoint debe funcionar de manera independiente.

Esto permite continuar el curso aunque el estudiante haya roto accidentalmente su versión anterior.

# Metodología de investigación

No tratar jsPsych únicamente como una herramienta técnica.

Relacionar constantemente la implementación con conceptos de metodología:

- constructo;
- operacionalización;
- variable;
- nivel de medición;
- condición experimental;
- asignación aleatoria;
- manipulación;
- medida dependiente;
- ensayo;
- bloque;
- tiempo de reacción;
- precisión;
- dato faltante;
- calidad de datos;
- reproducibilidad.

Siempre distinguir:

> decisión metodológica

de

> implementación técnica.

Un programa que funciona puede implementar un estudio metodológicamente incorrecto.

# Instrumentos psicológicos

No inventar ítems ni instrucciones de instrumentos psicológicos reales.

Cuando sea necesario usar una escala protegida o cuyos ítems no estén proporcionados en el proyecto:

- utilizar una escala ficticia con fines pedagógicos;
- usar ítems proporcionados explícitamente;
- o indicar claramente dónde debe incorporarse el contenido autorizado.

No asumir que una escala está correctamente implementada solo porque el código funciona.

# Datos

Desde etapas tempranas enseñar que toda interacción produce datos.

Relacionar interfaces con estructura de datos.

Ejemplo:

```text
Pregunta:
¿Cuál es tu edad?

Variable:
edad

Tipo:
numérica

Restricción:
18–80
```

Mostrar progresivamente estructuras como:

```text
id
edad
condicion
respuesta
rt
correcto
```

El estudiante debe aprender a anticipar qué base de datos producirá su estudio antes de recolectar información.

# Quarto

Utilizar recursos nativos de Quarto cuando mejoren la comprensión:

- callouts;
- pestañas;
- código plegable;
- figuras;
- diagramas;
- tablas;
- referencias cruzadas;
- ejercicios destacados.

Utilizar callouts con moderación y de forma consistente.

Ejemplos de categorías:

- Idea clave.
- Atención.
- Error frecuente.
- Para investigar.
- Actividad.
- Con Codex.

No saturar el libro con elementos visuales innecesarios.

# Consistencia

Antes de incorporar un concepto nuevo, comprobar que:

- ya fue explicado;
- o se explica en ese mismo capítulo.

No utilizar conceptos técnicos anticipadamente.

Mantener terminología consistente en todo el libro.

Ejemplos:

- utilizar "carpeta" y no alternar arbitrariamente con "directorio" sin explicar equivalencia;
- introducir "directorio" como término técnico cuando corresponda;
- explicar `trial` antes de utilizarlo como término corriente;
- explicar "dependencia" antes de pedir `npm install`.

# Desarrollo del libro

Cuando se solicite crear o modificar un capítulo:

1. leer primero los capítulos relacionados;
2. identificar qué conceptos ya conoce el estudiante en ese punto;
3. evitar anticipar contenido de capítulos posteriores;
4. mantener coherencia con el proyecto acumulativo;
5. conservar el estilo existente;
6. verificar enlaces internos y referencias cruzadas;
7. renderizar el Quarto Book cuando sea apropiado;
8. informar errores de renderizado;
9. no ocultar warnings relevantes.

# Revisión

Cuando se pida revisar el libro completo, prestar especial atención a:

- saltos de dificultad;
- conceptos utilizados antes de explicarse;
- actividades demasiado complejas;
- contradicciones;
- comandos obsoletos;
- versiones de software;
- dependencia excesiva de IA;
- código que no funciona;
- proyectos de checkpoint inconsistentes;
- explicaciones metodológicas incorrectas;
- cambios de terminología;
- repeticiones innecesarias.

# Criterio final

Antes de considerar terminado un capítulo, preguntarse:

> ¿Un estudiante de Psicología que hasta ahora resolvía sus estudios online con Google Forms podría seguir este capítulo sin ayuda externa y comprender qué está haciendo?

Si la respuesta es no, simplificar, agregar contexto o dividir el contenido en pasos más pequeños.