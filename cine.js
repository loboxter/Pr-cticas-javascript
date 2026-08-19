let edad= 20;
let tienePermisoDePadres = false;

if (edad >= 18) {
    console.log('Puede pasar')
} else if (edad < 18 && tienePermisoDePadres) {
   console.log("Pasa con autorización")
} else {
    console.log('No entra');
}