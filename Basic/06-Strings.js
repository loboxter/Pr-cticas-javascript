// string


//concatenacion
let myName = "Brais!"
let greeting = "Hola, " + myName
console.log(greeting)
console.log(typeof greeting)


//Longitud
console.log(greeting.length)


//Acceso a caracteres
console.log(greeting[0])
console.log(greeting[11])

//métodos comunes
console.log(greeting.toLocaleUpperCase()) //Pasa todo a mayuscula
console.log(greeting.toLowerCase()) // pasa todo a minuscula
console.log(greeting.indexOf("Brais")) // el indice donde se encuentra una letra o elemento 
console.log(greeting.includes()) //Comprueba si existe
console.log(greeting.slice(0, 10)) //sirve para cortar letras o elementos
console.log(greeting.replace("Brais", "MoureDev")) //sirve para reemplazar palabras.

// plantillas literales
let message = `Hola, este es mi
curso de JavaScript`

console.log(message)
let email = "braismoure@mouredev.com"

console.log(`Hola, ${myName}! Tu email es ${email}.`)