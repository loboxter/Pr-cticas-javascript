let luzSemaforo = ("rojo")
let hayAutosEsperando = true;

if (luzSemaforo === "rojo" && hayAutosEsperando) {
    console.log('Detente, hay autos esperando. 🛑');

} else if (luzSemaforo === "amarillo") {
    console.log('Precaución, baja la velocidad.⚠️');
    
} else if (luzSemaforo === "verde") {
    console.log('Avanza con seguridad.🟢');

} else {
   console.log('Semáforo intermitente / Apagado')
}
