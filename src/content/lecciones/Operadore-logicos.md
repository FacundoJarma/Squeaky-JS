---
    title: Operadores Logicos
    difficult: Fácil
    classList: col-span-1 row-span-1
    index: 12
---
## ¿Que son los operadores logicos?
Los operadores lógicos en programación, y específicamente en JavaScript, se utilizan para combinar o invertir condiciones lógicas. Estos operadores se usan generalmente en declaraciones condicionales para evaluar múltiples condiciones y determinar el flujo del programa.

## Funcionamienton de AND (&&)
Este operador devuelve true si ambas condiciones son verdaderas. Si una o ambas son falsas, devuelve false.

## Ejemplo 

```js
let a = true;
let b = false;
console.log(a && b); // false (ambos deben ser true)
console.log(a && true); // true
```

## Funcionamiento de OR (||)
Devuelve true si al menos una de las condiciones es verdadera. Solo devuelve false si todas las condiciones son falsas.

## Ejemplo 
```js
let a = true;
let b = false;
console.log(a || b); // true (al menos una es true)
console.log(false || false); // false (todas son false)
```

## Funcionamiento de OR (!)
Este operador invierte el valor de la condición. Si la condición es verdadera, se convierte en falsa, y si es falsa, se convierte en verdadera.

## Ejemplo 
```js
let a = true;
console.log(!a); // false (invierte el valor de a)
console.log(!false); // true
```
## Ejemplos combinados 
Puedes combinar varios operadores lógicos en una sola expresión para evaluar múltiples condiciones:
```js
let a = 5;
let b = 10;

console.log(a > 3 && b < 15); // true (ambas condiciones son true)
console.log(a > 6 || b < 15); // true (una condición es true)
console.log(!(a > 6)); // true (a > 6 es false, pero con NOT se invierte)
```



