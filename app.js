let numeroSecreto = 0;
console.log(numeroSecreto)
let intentos = 0;
let listanumerosorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verrificarIntento () {
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value); //Se esta usando el ID del parametro
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Felicidades! Acertaste el número secreto en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else { //Cuando no acertó
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos ++
        limpiarCaja();
    } 
    return;
}

function limpiarCaja (){
    document.querySelector('#numeroUsuario').value = ''; //Aqui usamos querySelect con ID, pero para esto en los parametros se usa un "#"
    }

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listanumerosorteados);
    // si ya se sortearon todos los número entonces
    if (listanumerosorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //si el numero sorteado esta en la lista
        if (listanumerosorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listanumerosorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    }
}

function condicionesIniciales (){
    asignarTextoElemento ('h1', 'Juego del número secreto');
    asignarTextoElemento ('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1
}

function reiniciarjuego () {
    //se borre lo que haya en caja
    limpiarCaja();
    // Poner mensajes iniciales
    //generar nuevo nuemero aleatorio
    //reiniciar contador
    condicionesIniciales();
    //desabilitar boton
    document.getElementById('reiniciar').setAttribute('disabled','True');
}

condicionesIniciales();
