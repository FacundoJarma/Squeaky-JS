---
    title: Las diferencias entre while y do while.
    difficult: Medio
    classList: col-span-1 row-span-1
    index: 8
---

Hola! Nos alegra mucho que hayas decicido comenzar a parender JavaScript junto a Squaeky. Para empezar vamos a explicarte la dinamica de la aplicacion y para que sirve JS (JavaScript).

## While

Se usa cuando quieres verificar la condición antes de ejecutar el bloque de código. Es posible que el código no se ejecute nunca si la condición es falsa desde el inicio.

```js
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
```

## Do....while

 Se usa cuando necesitas que el código se ejecute al menos una vez antes de verificar la condición.

 ```js
 let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

 ```