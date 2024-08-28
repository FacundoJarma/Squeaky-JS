---
    title: Como poder diferenciar que bucle usar en cada caso.
    difficult: Medio
    classList: col-span-3 row-span-1
    index: 10
---

Hola! Nos alegra mucho que hayas decicido comenzar a parender JavaScript junto a Squaeky. Para empezar vamos a explicarte la dinamica de la aplicacion y para que sirve JS (JavaScript).

Elegir qué bucle utilizar depende del caso específico y de cómo deseas manejar las condiciones de repetición. Aquí te explico cómo tomar una decisión basada en el comportamiento de los bucles y sus características:

## ¿Cuándo usar while?

Usa while cuando no sabes exactamente cuántas veces se ejecutará el bloque de código, pero quieres que la condición sea verificada antes de que se ejecute cualquier iteración.
Ideal para cuando no necesariamente necesitas que el bloque de código se ejecute al menos una vez.

## Escenario 

Cuando estás esperando a que se cumpla una condición, como recibir datos de una red, o en situaciones donde el bucle puede no ejecutarse si la condición ya es falsa desde el principio.


```js
let isDataReady = false;

while (!isDataReady) {
    // Código que espera la disponibilidad de los datos
    isDataReady = checkDataAvailability(); 
    // Verifica la condición cada vez antes de ejecutar
}

```

## ¿Cuándo usar do...while?

Usa do...while cuando quieres que el bloque de código se ejecute al menos una vez, independientemente de si la condición es verdadera o falsa al inicio.
Ideal para cuando necesitas que el código siempre corra primero, luego verifique la condición para decidir si continuará ejecutándose o no.

## Escenario

Cuando se requiere que algo suceda por lo menos una vez, como un proceso de inicio de sesión donde primero se realiza una acción (como pedir credenciales) y luego se verifica si la acción fue exitosa.

```js
let passwordCorrect = false;

do {
    // Pedir al usuario que ingrese su contraseña
    passwordCorrect = checkPassword(); 
    // Ejecuta primero y luego verifica si la contraseña es correcta
} while (!passwordCorrect);

```

## ¿Cuándo usar for?

Usa for cuando sabes exactamente cuántas veces se debe ejecutar el bloque de código, o cuando trabajas con estructuras de datos como arrays.
Ideal para situaciones donde tienes un número determinado de iteraciones o trabajas con una secuencia conocida de valores.

## Escenario 

Cuando necesitas recorrer una lista de elementos o repetir una acción un número fijo de veces.

```js
for (let i = 0; i < 10; i++) {
    // Código que se ejecutará 10 veces
    console.log(i);
}

```

## Resumen 

Usa while: Cuando la cantidad de iteraciones es incierta y quieres que la condición se verifique antes de ejecutar el código.

Usa do...while: Cuando el código debe ejecutarse al menos una vez y la condición se evalúa después.

Usa for: Cuando sabes de antemano cuántas veces se va a ejecutar el bucle o si estás recorriendo un array o colección.