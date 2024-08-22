---
    classList: row-span-1 col-span-2
    difficult: Medio
    title: Estructuras de Control Condicionales. If, Else, Else If
    index: 5
    exercises: ["5-1"]
---

En JavaScript, las estructuras de control condicionales nos permiten tomar decisiones dentro de nuestro código. Una de las más comunes es la estructura `if`, que nos permite evaluar una condición y ejecutar un bloque de código si la condición es verdadera. También podemos usar `else if` para evaluar otras condiciones adicionales y `else` para ejecutar un bloque de código si ninguna de las condiciones anteriores es verdadera.

## Sintaxis de If

```js
if (condicion) {
    alert () //Que hacer despues de la condicion
}
```

## Sintaxis de else if

```js
else if (condicion) {
    alert () //Que hacer si la condicion previa no se cumple, pero la condicion actual si
}
```

## Sintaxis de else

```js
else {
    alert () //Que hacer si ninguna condicion previa se cumple
}
```

## Ejemplo de uso de if, else if y if

```js
var edad = 18;

if (edad>18){
    alert("sos mayor de edad")
}
else if (edad>10 ){
    alert("sos adolecente")
}
else{
    alert("sos muy chico")
}

```




