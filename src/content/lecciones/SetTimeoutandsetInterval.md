---
    title: setTimeout y setInterval
    difficult: Medio
    classList: col-span-1 row-span-1
    index: 17
---
## ¿Que es el setTimeout y setInterval?
En JavaScript, las funciones setTimeout y setInterval son utilizadas para manejar tareas asíncronas, que permiten ejecutar código después de un intervalo de tiempo específico o repetidamente a intervalos regulares.

## setTimeout
setTimeout ejecuta una función o bloque de código una sola vez después de un período de tiempo determinado. Es útil cuando necesitas retrasar la ejecución de una tarea sin bloquear el resto del código.
```js
setTimeout(función, milisegundos, [parámetros]);
```
``función``: La función que deseas ejecutar después del tiempo especificado.

``milisegundos``: El tiempo que se debe esperar antes de ejecutar la función (en milisegundos).

``[parámetros]``: (Opcional) Cualquier parámetro que se desea pasar a la función.

#### Ejepmlo
```js
setTimeout(() => {
    console.log('Hola después de 3 segundos');
}, 3000); // Esto imprimirá el mensaje después de 3 segundos.
```

##### Cancelar un setTimeout
Puedes cancelar un ``setTimeout`` antes de que se ejecute usando ``clearTimeout``.
```js
let idTimeout = setTimeout(() => {
    console.log('Este mensaje no se mostrará');
}, 5000);

clearTimeout(idTimeout); // Cancela la ejecución.
```
## setInterval
``setInterval`` ejecuta una función repetidamente, con un intervalo de tiempo fijo entre cada ejecución. Esto es útil cuando necesitas realizar una tarea a intervalos regulares, como actualizar la hora en una interfaz o realizar una comprobación periódica.
```js
setInterval(función, milisegundos, [parámetros]);
```
``función``: La función que se ejecutará repetidamente.

``milisegundos``: Intervalo de tiempo entre cada ejecución (en milisegundos).

``[parámetros]``: (Opcional) Cualquier parámetro que se desee pasar a la función.

#### Ejemplo 
```js
setInterval(() => {
    console.log('Este mensaje se imprime cada 2 segundos');
}, 2000); // Ejecuta la función cada 2 segundos.
```

##### Cancelar un setInterval
Puedes detener el intervalo utilizando ``clearInterval``.
```js
let idInterval = setInterval(() => {
    console.log('Esto se imprimirá varias veces');
}, 1000);

setTimeout(() => {
    clearInterval(idInterval); // Detiene el intervalo después de 5 segundos.
}, 5000);
```
