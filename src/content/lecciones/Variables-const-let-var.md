---
    classList: row-span-1 col-span-1
    difficult: Fácil
    title: Variables Const, Let y Var
    index: 2
    exercises: ["2-1"]
---

Durante la ejecucion de un programa hay demasiados datos que necesitamos guardar, desde la informacion del usuario, hasta un simple contador. Para guardar estos datos, utilizamos algo llamado variables.

**Una variable es un espacio de memoria que almacena un valor.**

Una variable esta compuesta de dos partes. Para empezar, un nombre, una forma de identificar que variable estamos creando o utilizando y por último, el valor que queremos que tenga esa variable. De esta forma, un ejemplo de como crear varaible seria de esta forma:

`nombreVariable = valorVariable;`

## Tipos de variables:

Si bien esto es asi en muchos lenguajes. Dentro de Javascript existe una tercera parte que nos habla acerca de como esta varible se va a utilizar durante la programacion. Esto se conoce como _tipo de variable_. En esta lección vamos a ver las tres formas de crear una variable en Javascript:

1. Const: Const nos dice que uan ves que creemos una variable y le asginemos un valor, ese valor no podra cambiar. Es decir, durante toda la ejecucion del programa, el valor de la varaible no podra cambiar.

2. Let: Let nos dice que una vez que creemos una variable, esa variable podra cambiar, podria empezar siendo 0, luego 1 y por ultimo 10. Por otra parte Let establece que la variable es local, auqneu es un termino medio confuso.

3. Var: Var nos dice que una vez que creemos una variable, esa variable podra cambiar. Por otro parte, Var nos dice que la variable es global.

## Ejemplos de uso de variables:

```js
const nombreVariable = "valor";
let nombreVariable2 = "valor";
var nombreVariable3 = "valor";
```

Como se puede observar, primero definimos como actuara la variable, luego el nombre y por ultimo el valor.
