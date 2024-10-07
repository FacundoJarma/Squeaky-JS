---
    classList: row-span-1 col-span-2
    difficult: Medio
    title: Estructuras de Control Condicionales. If, Else, Else If
    index: 5
    exerciceCols: 2
    exercises: ["5-1", "5-2", "5-3"]
---

En JavaScript, las estructuras de control condicionales nos permiten tomar decisiones dentro de nuestro código. Una de las más comunes es la estructura `if`, que nos permite evaluar una condición y ejecutar un bloque de código si la condición es verdadera. También podemos usar `else if` para evaluar otras condiciones adicionales y `else` para ejecutar un bloque de código si ninguna de las condiciones anteriores es verdadera.

El `if` evaluea si una condicion es _verdadera_ o _falsa_ y solo en caso de que sea verdadera se va a ajecutar un bloque de código. Vamos ahora como es la sintaxis de esta estructura.

## Sintaxis de If

```js
if (condicion) {
  //Que hacer despues de la condicion
}
```

## Sintaxis de else if

```js
else if (condicion) {
    //Que hacer si la condicion previa no se cumple, pero la condicion actual si
}
```

## Sintaxis de else

```js
else {
    //Que hacer si ninguna condicion previa se cumple
}
```

Como podemos ver, el simepre va un `if` antes que un `else if`, ya que el `else if` seria como un **en caso de que lo anterior no sea correcto, vamos a preguntar si esto es correcto**. Por ultimo, puede o no haber un `else`, y este seria como un **si nada de lo anterior fue correcto hace esto**

Ahora vamos con un ejemplo de uso:

## Ejemplo de uso de if, else if y if

```js
var edad = 18;

if (edad > 18) {
  alert("Sos mayor de edad");
} else if (edad > 10) {
  alert("Sos adolescente");
} else {
  alert("Sos menor de 10 años");
}
```
