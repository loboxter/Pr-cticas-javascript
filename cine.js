let edad= 15;
let tienePermisoDePadres = true;

if (edad >= 18) {
    console.log('Puede pasar')
} else if (edad < 18 && tienePermisoDePadres) {
   console.log("Pasa con autorización")
} else {
    console.log('No entra');
}