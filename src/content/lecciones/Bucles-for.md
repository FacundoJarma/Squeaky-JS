---
    title: El bucle For ¡inicio, fin e iteracion en una sola linea!
    difficult: Medio
    classList: col-span-2 row-span-1
    index: 9
---

El bucle `for` se utiliza para realizar una secuencia de instrucciones para cada uno de los valores de una lista o de un rango de valores.

## Declaracion

```js
for (let i = VALOR_INICIAL; i < VALOR_FINAL; ITERACION) {
  //Accion que se va a repetir
}
```

Como puedes ver, el bucle esta definiendo una variable `i` dentro del `for`. Esta variable sera la que **iteraremos** en el bucle, es decir, el valor de la variable `i` se modificara segun "le especifiquemos" en cada iteracion.

#### Ejemplo real de uso

Supongamos que queremos hacer un cronometro que inicia en 1 y finaliza en 10. Esto lo podremos hacer de la siguiente manera:

```js
for (let i = 1; i <= 10; i++) {
  alert(i);
}
```

Como se puede ver, la variable `i` se incrementa en cada iteracion, pero solo si es menor o igual a 10. Por lo tanto el bucle termina cuando `i` es mayor a 10.
