let totalCompra = 60;
let esMiembro = true;

if (totalCompra >= 100 ) {
    let totalFinal = totalCompra*0.80;
    console.log('Se le aplica un 20%, Total a pagar: ' + totalFinal);
} else if (totalCompra < 100 && esMiembro === true){
    let totalFinal = totalCompra*0.90;
    console.log('Se le aplica un 10%. Total a pagar: ' + totalFinal);
} else {
    console.log('No hay descuento. Total a pagar: ' + totalCompra);
}