---
    classList: row-span-2 col-span-1
    difficult: Fácil
    title: Como podemos mostrar información por la pantalla.
    index: 4
---

Una de las funciones principales que tienen las web es mostrar informacion. Una de las maneras más sencillas de hacerlo es mediante la función `alert()`, de la cual hablaremos en esta lección.

Para empezar `alert()` es una función **nativa** de JavaScript, lo que significa que siempre que podamos usar JavaScript, seremos capaces de utilizar esta función.

## ¿Cómo funciona y ejemplos de uso?

La función `alert()` muestra un cuadro de diálogo con un mensaje en la pantalla. Este mensaje suele ser una cadena de texto que queremos mostrar al usuario.

Por ejemplo, si queremos mostrar un mensaje de bienvenida cuando nuestra web se carga, podemos hacerlo de la siguiente manera: `alert("Bienvenido a SquaekyJS");`

**Puedes ver un ejemplo de esto en [Codi.link](https://codi.link/%7C%7CYWxlcnQoIkJpZW52ZW5pZG8gYSBTcXVhZWt5SlMiKTs=)**

Creo que para este punto ya es sencillo de deducir. `alert` va a mostrar un cuadro de dialogo que contenga el mensaje que escribas entre _parentesis_ (). Este mensaje debe estar entre comillas (ya que esta es la forma en la cual JS maneja los textos)

> <div style="display: flex; align-items: center; gap: 1em;"> <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-alert-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" /></svg>
> <h4>Recuerda</h4>
> </div>
>
> Siempre que escribas JavaScript, todos los textos dentro de tu codigo deben escribirse entre comillas. Esta es la forma en la que JS sabe que debe mostrar texto y no ejecutar codigo.

### ¿Que cosas puedo mostrar y que cosas no?

Es fundamental entender este punto. Hay ciertos tipos de datos que podemos mostrar y otros que no podemos. (Si tiene dudas sobre cuales son los tipos de datos, [revea la leccion pasada](/lecciones/tipos-de-datos)).

Veamos una lista de aquellas cosas que **si** podemos mostrar:

1. Strings
2. Integer
3. Float
4. Double

Ahora, una de aquellas que **no** podemos mostrar:

1. Arrays
2. Objects
3. Functions
4. DOM Elements
