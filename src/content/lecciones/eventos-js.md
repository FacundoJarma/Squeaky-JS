---
    title: Eventos en JS
    difficult: Medio
    classList: col-span-2 row-span-2
    index: 14
---

## ¿Que son los eventos?
Los eventos en JavaScript son acciones que ocurren en el navegador, como hacer clic en un botón, mover el ratón, cargar una página, escribir en un campo de texto, entre otros. Estos eventos permiten a los desarrolladores interactuar con el usuario y responder a sus acciones, lo que hace que las páginas web sean más dinámicas e interactivas.

## Ejemplos comunes de Eventos
``click``: Se activa cuando el usuario hace clic en un elemento.

``mouseover``: Se activa cuando el usuario pasa el ratón sobre un elemento.

``keyup``: Se activa cuando se suelta una tecla después de haber sido presionada.

``load``: Se activa cuando la página o un recurso (imagen, video, etc.) se ha cargado completamente.

``submit``: Se activa cuando un formulario es enviado.

## Eventos en html Ejepmlo
Una forma de asociar eventos a un elemento es directamente en el código HTML utilizando atributos como onclick, onmouseover, onchange, etc. Aunque esto es simple, no es la mejor práctica en proyectos complejos, ya que mezcla la lógica de JavaScript con la estructura HTML.
```js
<button onclick="saludar()">Haz clic aquí</button>

<script>
  function saludar() {
    alert("¡Hola, mundo!");
  }
</script>
```

## usando addEventlistener

```js
elemento.addEventListener('tipo_de_evento', funcion);
```
elemento: Es el elemento HTML al que quieres asociar el evento (como un botón o un campo de texto).

tipo_de_evento: Es el tipo de evento que deseas manejar (por ejemplo, 'click', 'mouseover', 'keyup', etc.).

funcion: Es la función que se ejecutará cuando ocurra el evento.
## Ejemplo 

```js
<button id="miBoton">Haz clic aquí</button>

<script>
  // Seleccionar el botón
  let boton = document.getElementById("miBoton");

  // Añadir un evento 'click' al botón
  boton.addEventListener("click", function() {
    alert("¡Has hecho clic en el botón!");
  });
</script>
```
En este ejemplo, cuando el usuario hace clic en el botón, aparece una alerta con un mensaje.

## Tipos de Eventos 

### Eventos de ratón (mouse):

``click``: Cuando se hace clic en un elemento.

``dblclick``: Cuando se hace doble clic en un elemento.

``mouseover``: Cuando el ratón pasa sobre un elemento.

``mouseout``: Cuando el ratón sale de un elemento.

### Eventos de teclado (keyboard):

``keydown``: Cuando una tecla es presionada.

``keyup``: Cuando una tecla es liberada.

``keypress``: Similar a keydown, pero solo para teclas que producen un valor.

### Eventos de formulario:

``submit``: Cuando un formulario es enviado.

``change``: Cuando el valor de un campo cambia (por ejemplo, un input o select).

### Eventos de ventana (window):

``load``: Cuando una página o recurso se ha cargado completamente.

``resize``: Cuando se redimensiona la ventana del navegador.

``scroll``: Cuando el usuario desplaza el contenido de la ventana.

## Ejemplo practico 

#### Evento Click

```js 
<button id="botonSaludo">Saludar</button>

<script>
  let boton = document.getElementById("botonSaludo");
  boton.addEventListener("click", function() {
    alert("Hola, has hecho clic en el botón.");
  });
</script>
```

#### Evento keyup

```js
<input type="text" id="campoTexto" placeholder="Escribe algo...">

<script>
  let campo = document.getElementById("campoTexto");
  campo.addEventListener("keyup", function(evento) {
    console.log("Tecla presionada: " + evento.key);
  });
</script>
```

#### Evento mouseover 
```js
<img src="imagen.jpg" id="miImagen" alt="Imagen">

<script>
  let imagen = document.getElementById("miImagen");
  imagen.addEventListener("mouseover", function() {
    alert("Has pasado el ratón sobre la imagen.");
  });
</script>
```

## Prevencion de Comportamiento Predeterminado 
Algunos eventos, como el envío de formularios o el clic en enlaces, tienen comportamientos predeterminados que puedes querer evitar (por ejemplo, evitar que un formulario se envíe al servidor).

#### Ejemplo de preventDefault

```js
<a href="https://www.google.com" id="enlace">Ir a Google</a>

<script>
  let enlace = document.getElementById("enlace");
  enlace.addEventListener("click", function(evento) {
    evento.preventDefault(); // Evita que se navegue a Google
    alert("Navegación bloqueada.");
  });
</script>
```
## Conclucion 
Los eventos en JavaScript son esenciales para hacer que las páginas web sean interactivas y dinámicas. Con addEventListener puedes manejar diversos eventos sin mezclar la lógica con el HTML, lo que hace tu código más limpio y fácil de mantener.