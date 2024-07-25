let tuScoreTexto = document.querySelector("#tuScore");
let pcScoreTexto = document.querySelector("#pcScore");
let resultadoTexto = document.querySelector("#resultado");
let boton1 = document.querySelector("#boton1");
let boton2 = document.querySelector("#boton2");
let boton3 = document.querySelector("#boton3");

// Valores iniciales
let tuScore = 0;
let pcScore = 0;
let resultado = ""
let modoActual = 0;

const objetos = [
    {
        nombre: "piedra",
        ganaContra: "tijeras",
        pierdeContra: "papel"
    },
    {
        nombre: "papel",
        ganaContra: "piedra",
        pierdeContra: "tijeras"
    },
    {
        nombre: "tijeras",
        ganaContra: "papel",
        pierdeContra: "piedra"
    }
]

const modos = [
    {
        nombre: "inicio",
        "texto de botones": ["PIEDRA", "PAPEL", "TIJERAS"],
        "funciones de botones": [jugarPiedra, jugarPapel, jugarTijeras]
    },
    {
        nombre: "perdiste",
        "texto de botones": ["CONTINUAR", "REINICIAR", "REINICIAR"],
        "funciones de botones": [continuar, reiniciar, reiniciar]
    }
]

boton1.onclick = jugarPiedra;
boton2.onclick = jugarPapel;
boton3.onclick = jugarTijeras;

function pcElige(){
    return objetos[Math.floor(Math.random() * 3)];
}

function jugar(objeto) {
    let eleccionPc = pcElige();
    let eleccionTu = objetos[objeto];
    if(eleccionTu.nombre == eleccionPc.pierdeContra) {
        resultado = "Ganaste\n";
        tuScore++;
    } else if (eleccionTu.nombre === eleccionPc.ganaContra) {
        resultado = "Perdiste\n";
        pcScore++;
        modoActual++;
        decidir();
    } else {
        resultado = "Empate\n";
    }
    tuScoreTexto.innerText = tuScore;
    pcScoreTexto.innerText = pcScore;
    resultadoTexto.innerHTML = "<strong>" + resultado + "</strong><br><br>";
    resultadoTexto.innerHTML += "Tú escogiste:" + eleccionTu.nombre + ". <br> PC escogió: " + eleccionPc.nombre;
}

//Funciones de elección
function jugarPiedra(){
    jugar(0);
}

function jugarPapel(){
    jugar(1);
}

function jugarTijeras(){
    jugar(2);
}

//Funciones de decisión
function continuar(){
    modoActual--;
    cargarValores();
    resultado = "Presiona un botón para jugar.";
    resultadoTexto.innerText = resultado;
}

function reiniciar(){
    tuScore = 0;
    pcScore = 0;
    tuScoreTexto.innerText = tuScore;
    pcScoreTexto.innerText = pcScore;
    continuar();
}

function decidir(){
    cargarValores();
}

function cargarValores() {
    if(modoActual){
        boton3.style.display = "none";
    } else {
        boton3.style.display = "block";
    }
    boton1.innerText = modos[modoActual]["texto de botones"][0];
    boton2.innerText = modos[modoActual]["texto de botones"][1];
    boton3.innerText = modos[modoActual]["texto de botones"][2];
    boton1.onclick = modos[modoActual]["funciones de botones"][0];
    boton2.onclick = modos[modoActual]["funciones de botones"][1];
    boton3.onclick = modos[modoActual]["funciones de botones"][2];
}

cargarValores();
