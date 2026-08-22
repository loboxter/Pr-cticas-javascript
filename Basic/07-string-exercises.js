//1- concadena 2 cadenas de texto
let saludo = ('hola como estas')
let greeting = ('welcome')
console.log(saludo + greeting)
//2- muestra la longitud de una cadena de texto
console.log(saludo.length)
//3- muestra el primer y ultimo caracter de un string
console.log(saludo[0])
console.log(greeting[6])
//4-convierte a mayus y minus un string
console.log(saludo.toUpperCase())
console.log(greeting.toLowerCase())
//5- crea una cadena de texto en varias lineas
let mensaje = `Hola me llamo Sebas
y este es mi proyecto
de JavaScript`
//6-interpola el valor de una variable
let email = "lobotrxtq@gmail.com"
console.log(`Hola, ${saludo}! tu email es
     ${email}`)
//7-reemplaza todos los espacios en blanco de un string por guiones
console.log(saludo.replaceAll(" ","-"))
//8-comprobar si tiene una letra
console.log(saludo.includes("h"))

//9-comprobar si 2 strings son iguales
console.log(saludo === greeting)
//10-si 2 strings tienen lamisma longitud
console.log(saludo.length === greeting.length)