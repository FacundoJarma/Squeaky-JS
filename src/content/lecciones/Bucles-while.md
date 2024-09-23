---
    title: Bucles, que son y aprendiendo sobre el while, el bucle por excelencia.
    difficult: Medio
    classList: col-span-2 row-span-2
    index: 7
---

## ¿Qué son los bucles?

Una de las herramientas mas utilizadas en una aplicacion son los bucles. Un bucle no es mas que lo que nos imaginamos que es, una secuencia de instrucciones que se repite varias veces.

Un bucle nos permite ejecutar la misma intruccionees varias veces. En JavaScript tenemos los bucles `while`, `for` y `do...while`. Pero en esta leccion solo veremos el `while`. Este bucle tiene una sintaxis sencialla y es tan facil como decir que siempre que una condicion sea verdadera vamos a continuar ejecutando estas instrucciones.

# sintaxis

```js
while (condición) {
  // Las instrucciones a ejecutar mientras la condición sea verdadera
}
```

# Ejemplos

```js
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
```
