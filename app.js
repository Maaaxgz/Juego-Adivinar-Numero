let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;
let listaNumerosSorteados = [];

function asignarTextoElemento(elemento, texto){
	let elementoHTML = document.querySelector(elemento);
	elementoHTML.innerHTML = texto;
	return;
}

function verificarIntento(){
	let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
	//console.log(numeroUsuario);
	console.log(intentos);
	if(numeroSecreto === numeroUsuario){
		asignarTextoElemento('p', `Acertaste en ${intentos} ${intentos > 1 ? 'intentos' : 'intento'}!`);
		document.getElementById('reiniciar').removeAttribute('disabled');
	}else{
		limpiarInput();
		if(numeroUsuario > numeroSecreto){
			asignarTextoElemento('p', 'El numero secreto es menor');
		}else{
			asignarTextoElemento('p', 'El numero secreto es mayor');
		}
		intentos += 1;
	}
	return;
}

function generarNumeroSecreto() {
	let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
	console.log(numeroGenerado, listaNumerosSorteados);
	if(listaNumerosSorteados.length == numeroMaximo){
		asignarTextoElemento('p', 'Ya se sortearon todos los numero posibles');
	}else{
		if(listaNumerosSorteados.includes(numeroGenerado)){
			return generarNumeroSecreto();
		}else{
			listaNumerosSorteados.push(numeroGenerado);
			return numeroGenerado;
		}
	}
}

function limpiarInput(){
	document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
	asignarTextoElemento('h1', 'Juego del Numero Secreto!');
	asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}:`);
	numeroSecreto = generarNumeroSecreto();
	//console.log(numeroSecreto);
	intentos = 1;
	document.getElementById('reiniciar').setAttribute('disabled', true);
}

function reiniciarJuego(){
	limpiarInput();
	condicionesIniciales();
}

condicionesIniciales();
