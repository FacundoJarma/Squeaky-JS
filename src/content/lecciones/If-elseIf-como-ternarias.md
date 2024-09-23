---
    title: If y Else IF expresados como ternarias
    difficult: Medio
    classList: col-span-2 row-span-1
    index: 6
    exercises: ["6-1"]
---

Siguiendo con la explicación, si queremos ver un ejemplo práctico, imagina que queremos hacer un programa que nos salude en español o en inglés dependiendo de la preferencia del usuario. Podemos hacer esto de la siguiente manera:
En la lección anterior, hablamos sobre como utilizar `if` y `else if` para evaluar condiciones y ejecutar un bloque de código dependiendo de si se cumple o no. Sin embargo, en este caso, vamos a hablar de como hacer lo mismo utilizando una sintaxis un poco diferente, utilizando los llamados "operadores ternarios".

### Operadores ternarios

Los operadores ternarios son una forma de evaluar una condición y en base a ese resultado, devolver un valor u otro. La sintaxis de este operador es la siguiente:

```js
const resultado = condicion ? valor_si_es_verdadera : valor_si_es_falsa;
```

### Ejemplos

Por ejemplo, si queremos dar la bienvenida en español o en inglés, podemos hacerlo de la siguiente manera:

```js
const hablaEspañol = true;
const saludo = hablaEspañol ? "Hola" : "Hello";
```
