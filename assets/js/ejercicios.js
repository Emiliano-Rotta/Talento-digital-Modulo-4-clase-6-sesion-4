//Ejercicios individuales:


// Ejercicio 1: Combinar Objetos con Spread y Valores por Defecto
// Consigna:
// Tienes un objeto usuario que contiene información básica: usuario = { nombre: 'Luis', edad: 30 }. También tienes otro objeto datosAdicionales que puede contener información adicional: datosAdicionales = { ciudad: 'Valencia', profesion: 'Desarrollador' }. Utiliza el operador Spread para combinar ambos objetos en un nuevo objeto llamado perfilCompleto, asegurándote de que si datosAdicionales no incluye profesion, se establezca un valor por defecto como 'Desconocido'. Muestra el objeto resultante en la consola.
// let usuario = { nombre: 'Luis', edad: 30 }
// let datosAdicionales = { ciudad: 'Valencia', profesion: 'Desarrollador' }

// let perfilCompleto = {
//     ...usuario,
//     ...datosAdicionales,
//     profesion: datosAdicionales.profesion || "Desconocido",
// }
// console.log(perfilCompleto)
//-----------------------------------------

// Ejercicio 2: Clonación y Modificación de Objetos
// Consigna:
// Tienes un objeto producto que describe un producto en una tienda: producto = { id: 1, nombre: 'Laptop', precio: 1000 }. Usa el operador Spread para crear un nuevo objeto productoConDescuento que contenga la misma información pero con un precio reducido en un 20%. Asegúrate de que el objeto original no se modifique. Muestra ambos objetos en la consola. tips: para reducir un 20%, hay que multiplicar el valor por 0.8

// var producto = { id: 1, nombre: 'Laptop', precio: 1000 }

// var productoConDescuento = {
//     ...producto,
//     precio: producto.precio *0.8
// }
// // productoConDescuento.precio = productoConDescuento.precio * 0.8

// console.log(producto)
// console.log(productoConDescuento)


//----------------------------------------------

// Ejercicio 3: Fusionar y Ordenar Arrays
// Consigna:
// Tienes tres arrays de números: arrayA = [5, 10, 15], arrayB = [3, 6, 9], y arrayC = [12, 0, 8]. Utiliza el operador Spread para combinar todos estos arrays en un solo array arrayFinal, y luego ordénalo en orden ascendente. Muestra el array ordenado en la consola.
// tips: para ordenar usar el metodo sort

const arrayA = [5, 10, 15]
const arrayB = [3, 6, 9]
const arrayC = [12, 0, 8]

const arrayFinal = [...arrayA, ...arrayB, ...arrayC]

arrayFinal.sort((a, b) => a - b)

console.log(arrayFinal)