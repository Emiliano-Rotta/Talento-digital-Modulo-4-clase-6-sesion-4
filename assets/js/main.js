//Destructuring

// const persona = {
//     nombre: "Paulina",
//     apellido: "Ahumada",
//     edad: 25
// }

// const curso = {
//     nombre: "Full Stack Javascript",
//     horas: 478
// }

// // si con const o var esto se solucionaria?

// const { nombre, apellido, edad } = persona
// console.log(nombre)
// const { nombre: nombreCurso, horas } = curso
// console.log(nombreCurso)


// var mascota = "perro"
// console.log(mascota)
// var mascota = "gato"
// console.log(mascota)

// let mascota = "perro"
// console.log(mascota)
// mascota = "gato"
// console.log(mascota)

// const mascota = "perro"
// console.log(mascota)
// mascota = "gato" //Uncaught TypeError: invalid assignment to const 'mascota'
// console.log(mascota)

//------------------------------------------------
//Operador Spread


// let arrayUno = [1, 2, 3]
// let arrayDos = arrayUno

// arrayDos.push(4)

// console.log(arrayUno) //1234
// console.log(arrayDos) //1234


// let arrayUno = [1, 2, 3]
// let arrayDos = [...arrayUno]

// arrayDos.push(4)

// console.log(arrayUno) //123
// console.log(arrayDos) //1234

// for (let i = 0; i < arrayDos.length; i++) {
//     arrayDos[i]= arrayDos[i]*2;

// }

// console.log(arrayUno) // 246
// console.log(arrayDos) // 246

// let numUno = 10
// let numDos = numUno

// numDos = 20

// console.log(numUno) //20    10
// console.log(numDos) //20    20

//----------------------------------
// concatenar

// let arrayNombre = ["Emiliano", "Rotta"]
// let arrayEdad = [31]
// let arrayProfesion = ["Programador", "Docente"]

// let arrayTotal = ["Emiliano", "Rotta", 31, "Profesion: ", "programador", "docente"]
// console.log(arrayTotal)


// arrayProfesion.unshift("Profesion: ")
// let arrayTotal = arrayNombre.concat(arrayEdad).concat(arrayProfesion)
// console.log(arrayTotal)

// let arrayTotal = [...arrayNombre, ...arrayEdad, "Profesion: ", ...arrayProfesion]
// console.log(arrayTotal)
///--------------------------------------

let personaUno = { nombre: 'Paulina', edad: 25 };
let profesion = { ciudad: 'Santiago', profesion: 'Diseñadora' };

// let personaTres = personaUno // esto guarda la referencia y no el valor..


// let personaTres = {...personaUno} // guardo los valores fotocopia
// console.log(personaTres)
// console.log(personaUno)

// personaTres.nombre = "Juan"

// console.log(personaTres)
// console.log(personaUno)


const personaCompleta = {...personaUno, ...profesion}
console.log(personaCompleta)