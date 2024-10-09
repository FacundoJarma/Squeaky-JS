---
    title: DOM
    difficult: Fácil
    classList: col-span-2 row-span-2
    index: 15
---

## ¿Que es el DOM?
El DOM (Document Object Model) es una interfaz de programación que representa y permite interactuar con los documentos HTML o XML como una estructura jerárquica de nodos. Cada parte de un documento (etiquetas, atributos, contenido) es un nodo en el DOM, y puedes acceder, modificar, eliminar o crear nodos usando JavaScript.

En otras palabras, el DOM convierte un documento HTML en una estructura de objetos que puede ser manipulada dinámicamente por lenguajes como JavaScript, permitiendo cambios en la estructura, estilo y contenido de la página web sin necesidad de recargarla.

## ¿Cómo funciona el DOM?
Cuando un navegador carga una página web, convierte el HTML en un árbol DOM. Este árbol DOM refleja la estructura jerárquica del documento HTML. JavaScript puede interactuar con el DOM para cambiar la apariencia o el comportamiento del sitio web.

## Estructura del DOM 
Con el siguiente ejemplo:
```js
<!DOCTYPE html>
<html>
  <head>
    <title>Mi Página</title>
  </head>
  <body>
    <h1>Encabezado</h1>
    <p>Este es un párrafo.</p>
  </body>
</html>
```
#### La estructura es: 
```js
Document
 └── html
     ├── head
     │   └── title
     │       └── "Mi Página"
     └── body
         ├── h1
         │   └── "Encabezado"
         └── p
             └── "Este es un párrafo."
```
## Como Acceder al DOM
Usamos selectores de JavaScript, como ```getElementById```, ```getElementsByClassName```, ```querySelector```, etc., para acceder a los elementos.

```js
// Acceder a un elemento por su ID
let encabezado = document.getElementById("miEncabezado");
console.log(encabezado.textContent); // Muestra el texto del encabezado
```
## Modificar el contenido del DOM
```js
let parrafo = document.querySelector("p");
parrafo.textContent = "Nuevo contenido del párrafo.";
```

## Crear y Agregar Elementos 
```js
let nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Este es un nuevo párrafo.";
document.body.appendChild(nuevoParrafo);
```
##  Eliminar un nodo del DOM
```js
let parrafoEliminar = document.querySelector("p");
parrafoEliminar.remove(); // Elimina el primer párrafo encontrado
```
## Propiedades y métodos importantes del DOM
``document``: Es la raíz del árbol DOM y representa el documento completo.

``document``.getElementById(): Selecciona un elemento por su ID.
``document``.querySelector(): Selecciona el primer elemento que coincide con un selector CSS.
``document``.querySelectorAll(): Selecciona todos los elementos que coinciden con un selector CSS.

``document``.createElement(): Crea un nuevo elemento HTML.

#### Nodos y atributos:

``element.textContent``: Permite acceder o modificar el contenido de texto de un elemento.

``element.innerHTML``: Permite obtener o establecer el contenido HTML de un elemento.

``element.style``: Permite modificar el estilo de un elemento (colores, márgenes, etc.).

#### Métodos de modificación:

``appendChild()``: Agrega un nuevo nodo como hijo.

``removeChild()``: Elimina un nodo hijo.

## Ejemplos prácticos de manipulación del DOM
#### Cambiar el contenido de un elemento
```js
<h1 id="titulo">Este es el título original</h1>

<script>
  let titulo = document.getElementById("titulo");
  titulo.textContent = "Nuevo título modificado con JavaScript";
</script>
```
#### Cambiar el estilo de un Elemento 
```js
<p id="parrafo">Este párrafo cambiará de color.</p>

<script>
  let parrafo = document.getElementById("parrafo");
  parrafo.style.color = "red";  // Cambia el color del texto a rojo
  parrafo.style.fontSize = "20px";  // Cambia el tamaño de la fuente
</script>
```
#### Agregar un nuevo elemento
```js
<ul id="lista">
  <li>Elemento 1</li>
  <li>Elemento 2</li>
</ul>

<script>
  let lista = document.getElementById("lista");
  let nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = "Elemento 3";  // Crea un nuevo elemento de lista
  lista.appendChild(nuevoElemento);  // Lo agrega a la lista
</script>
```
#### Eliminar un Elemento
```js
<p id="parrafoEliminar">Este párrafo será eliminado.</p>

<script>
  let parrafo = document.getElementById("parrafoEliminar");
  parrafo.remove();  // Elimina el párrafo
</script>
```
## Conclusion  
El DOM es la representación de un documento HTML como un conjunto de objetos que JavaScript puede manipular. Usando JavaScript y el DOM, puedes crear sitios web interactivos que respondan a las acciones del usuario, actualizando el contenido, la estructura o el estilo de la página sin necesidad de recargarla.
