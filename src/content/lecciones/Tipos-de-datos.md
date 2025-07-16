---
    title: Tipos de datos
    difficult: Fácil
    classList: row-span-1 lg:col-span-2
    index: 3
    exerciceCols: 3
    exercises: ["3-1", "3-2"]
---
 
### Lección: Tipos de Datos en JavaScript 

En JavaScript, los tipos de datos son las diferentes categorías de valores que se pueden usar y manipular en un programa. Conocer los tipos de datos es fundamental para comprender cómo funcionan las operaciones y cómo manipular la información en JavaScript.

### Tipos de Datos Primitivos en JavaScript

JavaScript tiene siete tipos de datos primitivos, que son los más básicos y no se pueden descomponer en otros tipos. Estos tipos primitivos son inmutables, lo que significa que sus valores no se pueden cambiar directamente (aunque sí se pueden reasignar).

#### Number
Representa tanto números enteros como decimales. Todos los números en JavaScript son del tipo Number, y se pueden usar para realizar operaciones matemáticas.

```js
let edad = 25;       // Entero
let precio = 19.99;  // Decimal
```

#### BigInt
BigInt es un tipo de dato especial introducido en ECMAScript 2020 para representar números enteros que son demasiado grandes para el tipo Number. Los valores BigInt se crean añadiendo una n al final de un número.

```js
let numeroGrande = 1234567890123456789012345678901234567890n;
```

#### String
Los String son cadenas de texto y se definen entre comillas simples ('...'), comillas dobles ("..."), o backticks (`...`) para strings de plantillas. Se utilizan para representar texto.

```js
let nombre = "Juan";
let saludo = `Hola, ${nombre}`; // Usa plantilla de string
```

#### Boolean
Boolean representa un valor lógico y solo puede tener dos valores: true (verdadero) o false (falso). Es útil para tomar decisiones en el código.

```js
let esMayor = true;
let tienePermiso = false;
```
#### Undefined
Undefined significa que una variable ha sido declarada pero aún no tiene un valor asignado. Si creas una variable sin asignarle un valor, su tipo será undefined.

```js
let resultado;
console.log(resultado); // undefined
```

#### Null
Null representa la ausencia intencional de un valor. Es similar a undefined, pero null suele usarse cuando deseas indicar explícitamente que una variable no tiene valor.

```js
let usuario = null;
```

#### Symbol
Symbol es un tipo de dato único e inmutable, introducido en ECMAScript 2015 (ES6), y se usa principalmente para crear identificadores únicos que no pueden ser replicados.

```js
let simboloUnico = Symbol("descripcion");
```

### Tipo de Dato No Primitivo: Object
Además de los tipos primitivos, JavaScript tiene un tipo de dato no primitivo llamado Object. Los Object (objetos) se usan para almacenar colecciones de datos y más estructuras complejas.

#### Object
Los objetos son colecciones de propiedades y valores y se definen utilizando llaves {}. Cada propiedad tiene un nombre y un valor asociado.

```js
let persona = {
    nombre: "Ana",
    edad: 30,
    esEmpleado: true
};
```

#### Array
Los Array son un tipo especial de Object que permite almacenar listas de elementos. Los elementos están ordenados por índices numéricos, comenzando desde cero.

```js
let frutas = ["manzana", "banana", "naranja"];
```

#### Function
Las funciones también son objetos en JavaScript y se pueden almacenar en variables. Son bloques de código reutilizables que se pueden ejecutar en cualquier parte del programa.

```js
function saludar(nombre) {
    return `Hola, ${nombre}`;
}
```


