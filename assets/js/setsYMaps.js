// Sets y maps

// Sets
// Un Set es una colección de valores únicos en JavaScript.
// Los Sets permiten almacenar cualquier tipo de datos, incluyendo objetos, 
// y no permiten duplicados. 
//Esto es útil cuando necesitas garantizar que un conjunto de elementos no contenga valores repetidos.


// Características de Sets:
// Los valores son únicos: no se permiten duplicados.
// Los Sets son iterables, lo que significa que puedes usar bucles para recorrer sus elementos.
// Puedes agregar, eliminar y verificar la existencia de elementos de manera eficiente.


// Métodos Comunes:
// add(value): Agrega un nuevo elemento al Set.
// delete(value): Elimina un elemento del Set.
// has(value): Devuelve true si el valor existe en el Set, de lo contrario, false.
// clear(): Elimina todos los elementos del Set.
// size: Propiedad que devuelve el número de elementos en el Set.

const numeros = new Set();
numeros.add(1) //se agrega 1
console.log(numeros)
numeros.add(2)//se agrega 2
console.log(numeros)
numeros.add(2) //no se agregará porque esta duplicado.
console.log(numeros)
numeros.delete(2) //se borra el 2
console.log(numeros)
console.log(numeros.has(1)) //devuelve true porque existe el 1
console.log(numeros.size) //devuelve la cantidad de elementos del set

numeros.clear() //borra todos los elementos.. 
console.log(numeros)