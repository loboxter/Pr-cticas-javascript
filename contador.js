let contador = 0;
let segundos = 0;
let intervalo;
let cronometroActivo = false;

function manejarClic() {
    if (cronometroActivo === false) {
        cronometroActivo = true;
        
        intervalo = setInterval(function() {
            segundos = segundos + 1;

            if (segundos === 10) {
                document.getElementById("cronometro").innerText = segundos;
                clearInterval(intervalo);
                cronometroActivo = false;

                setTimeout(function() {
                    alert("¡Tiempo cumplido!");
                    reiniciar();
                }, 50);
                return;
            }

            document.getElementById("cronometro").innerText = segundos;
        }, 1000);
    }

    contador = contador + 1;
    document.getElementById("numero").innerText = contador;
}

function reiniciar() {
    clearInterval(intervalo);
    segundos = 0;
    document.getElementById("cronometro").innerText = segundos;

    contador = 0;
    document.getElementById("numero").innerText = contador;

    cronometroActivo = false;
}