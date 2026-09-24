# Instrucciones para agentes

## Sobre este proyecto

Este proyecto es un estudio de encuesta online construido con jsPsych 8.3.0. Se ejecuta abriendo `index.html` en un navegador y se publica con GitHub Pages. Los datos se guardan con DataPipe.

Archivos principales:

- `index.html`: carga jsPsych, los plugins, la extensión de DataPipe y los estilos.
- `experiment.js`: define las pantallas, su orden y las reglas del estudio.
- `styles.css`: define la apariencia. No debe cambiar el procedimiento.
- `diseno.md`: describe las decisiones metodológicas del estudio.
- `diccionario.md`: describe cada variable que registra el estudio.

## Reglas

- No redactes, completes ni modifiques ítems, instrucciones u opciones de respuesta de escalas psicológicas. Usá solamente el texto exacto que se te indique.
- No modifiques el texto del consentimiento ni de la pantalla de cierre, salvo que el pedido incluya el texto exacto.
- No cambies las versiones de jsPsych, de los plugins ni de la extensión. Toda dirección de `unpkg.com` debe tener una versión fija.
- No agregues bibliotecas, npm ni herramientas de compilación.
- Conservá los nombres de variables (`name`) y las etiquetas `pantalla`. Si un cambio los afecta, avisá antes de hacerlo.
- No modifiques el valor de `DATAPIPE_ID`.
- No agregues archivos de datos al proyecto ni leas datos de participantes.
- Antes de modificar más de un archivo, explicá el plan y esperá la aprobación.
- Después de cada cambio, indicá qué archivos y qué líneas modificaste.
- Si un cambio afecta alguna variable, indicá qué parte de `diccionario.md` habría que actualizar.

## Verificación

El plan de pruebas está en `README.md`. Las decisiones metodológicas no las toma el agente: están en `diseno.md`.
