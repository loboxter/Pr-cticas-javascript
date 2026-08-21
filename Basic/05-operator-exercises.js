//1-Operadores aritméticos

let Suma = 2+2
let Resta = 1-1
let Multiplicación = 2*2
let División = 10/5
let Módulo = 20%3
let Sumando = 4
let Restando = 2
let rojo = 5
let verde = 20

//2-Operadores asignación
Suma = 4
Resta += 2
Multiplicación -= 2
División *= 2
Módulo /= 2
Sumando %= 2
Restando **= 2


//3- 5 comparaciones verdades con diferentes operadores de comparación
console.log(2 > 1)
console.log(2 < 5)
console.log(Sumando != Restando)
console.log(Multiplicación === Sumando)
console.log(Suma != División )

//4- 5 comparaciones falsas con diferentes operadores de comparación
console.log(2 < 1)
console.log(2 > 9)
console.log(Sumando == Restando)
console.log(Suma === Resta)
console.log(rojo == verde)

//5- utuliza el operador lógico and(&&).
console.log((Sumando < Restando) && (Multiplicación > Sumando))

//6- usa el operador logico or(||).
console.log((2 > 1) || (Restando > Sumando))

//7-combina ambos operadores lógicos
console.log((2 >1) && (3 < 5) || (Restando == 10))

//8-Añade alguna negación (!).
console.log(!(Suma == Restando))

//9-Utiliza el operador ternario.
console.log(2 > 1 ? "Correcto" : "Incorrecto")

//10-Combinar operadores aritmeticos, comparacion y asignación.
Suma += verde + 2;
console.log(Suma);

Resta /= (rojo = 2);
console.log(Restando);

let puntaje = 10;
puntaje += Sumando * 2;
console.log(puntaje >20);
