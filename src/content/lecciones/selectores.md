---
    title: Selectores JS
    difficult: Fácil
    classList: col-span-1 row-span-2
    index: 16
---
## Selectrores JS

Los selectores en JavaScript te permiten seleccionar elementos del DOM (Document Object Model) para luego manipularlos. A través de los selectores, puedes acceder a un elemento HTML específico o a un conjunto de elementos y realizar acciones como cambiar su contenido, agregar o eliminar clases, modificar su estilo, entre otros.

## Métodos principales para seleccionar elementos en JavaScript
``getElementById``: Selecciona un elemento por su ID

``getElementsByClassName``: Selecciona elementos por su clase

``getElementsByTagName``: Selecciona elementos por su etiqueta HTML

``querySelector``: Selecciona el primer elemento que coincida con el selector CSS	

``querySelectorAll``: Selecciona todos los elementos que coincidan con el selector CSS	

## getElementById
#### sitaxis
```js   
document.getElementById("idElemento");
```
#### Ejemplo
```js
<p id="parrafo1">Este es el primer párrafo.</p>

<script>
  let parrafo = document.getElementById("parrafo1");
  console.log(parrafo.textContent);  // Imprime: "Este es el primer párrafo."
</script>
```
## getElementsByClassName
#### sitaxis
```js   
document.getElementsByClassName("nombreClase");
```
#### Ejemplo
```js
<p class="mensaje">Mensaje 1</p>
<p class="mensaje">Mensaje 2</p>

<script>
  let mensajes = document.getElementsByClassName("mensaje");
  console.log(mensajes.length);  // Imprime: 2
  console.log(mensajes[0].textContent);  // Imprime: "Mensaje 1"
</script>
```
## getElementsByTagName
#### sitaxis
```js   
document.getElementsByTagName("nombreEtiqueta");
```
#### Ejemplo
```js
<p>Primer párrafo.</p>
<p>Segundo párrafo.</p>

<script>
  let parrafos = document.getElementsByTagName("p");
  console.log(parrafos.length);  // Imprime: 2
  console.log(parrafos[1].textContent);  // Imprime: "Segundo párrafo."
</script>
```
## querySelector
#### sitaxis
```js   
document.querySelector("selectorCSS");
```
#### Ejemplo
```js
<p id="parrafo1" class="parrafo">Hola</p>
<p id="parrafo2" class="parrafo">Adiós</p>

<script>
  let primerParrafo = document.querySelector(".parrafo");
  console.log(primerParrafo.textContent);  // Imprime: "Hola" (el primer elemento con la clase 'parrafo')
</script>
```
## querySelectorAll
#### sitaxis
```js   
document.querySelectorAll("selectorCSS");
```
#### Ejemplo
```js
<p class="mensaje">Mensaje 1</p>
<p class="mensaje">Mensaje 2</p>

<script>
  let mensajes = document.querySelectorAll(".mensaje");
  mensajes.forEach(function(mensaje) {
    console.log(mensaje.textContent);
  });
  // Imprime: "Mensaje 1"
  // Imprime: "Mensaje 2"
</script>
```

## Ejemplos Avanzados 
#### Seleccionar un elemento con un atributo específico
Usando ``querySelector`` o ``querySelectorAll``, puedes seleccionar elementos con atributos específicos, como seleccionar un ``<input>`` de tipo ``text``:
```js
let inputText = document.querySelector('input[type="text"]');
```
#### Seleccionar un elemento dentro de otro
Puedes usar ``querySelectorAll`` para seleccionar elementos específicos dentro de otro elemento:
```js
<div id="contenedor">
  <p class="texto">Este es un texto dentro del contenedor.</p>
  <p class="texto">Otro texto en el mismo contenedor.</p>
</div>

<script>
  let textosEnContenedor = document.querySelectorAll("#contenedor .texto");
  textosEnContenedor.forEach(function(texto) {
    console.log(texto.textContent);
  });
</script>
```
## Conclusion 
``getElementById`` es ideal para seleccionar un solo elemento por su ID.

``getElementsByClassName`` y ``getElementsByTagName`` son útiles para obtener listas de elementos según su clase o etiqueta, pero devuelven HTMLCollections, que tienen algunas limitaciones.

``querySelector`` y ``querySelectorAll`` son más modernos y flexibles, ya que permiten usar cualquier selector CSS para seleccionar elementos del DOM.




