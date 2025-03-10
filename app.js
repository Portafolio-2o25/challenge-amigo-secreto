// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Author : Felipe Toro R.
// Date   : 08 Marzo 2025

var arrayAmigos = [];

// Al darle click al boton Añadir el texto ingresado se guarda en una array
function agregarAmigo() {
   // prompt("Conexion exitosa");
      
   let obtenerNombreInputTxt = document.getElementById('amigo').value;
   esValido = validarTextoIngresado(obtenerNombreInputTxt);  // se lanzan alertas en caso que NO sea valido

   if(esValido) { // Si es valido se agrega
        
        arrayAmigos.push(obtenerNombreInputTxt);
        document.getElementById('amigo').value = ""; // Limpiar campo
        actualizarListaHtmlLi(arrayAmigos);
   
    } else {

        console.log("Probar otra cadena de texto");

    }

}

function sortearAmigo() {
    let estaVacia = validarListaAmigos(arrayAmigos);

    if (estaVacia) {

        alert("No hay amigos a sortear, por favor agregue nombre");

    } else {
        //procesar
        let indiceAmigo =  Math.floor(Math.random()*(arrayAmigos.length))+1;
        let nombreGanador = arrayAmigos[indiceAmigo-1];

        agregarListaHtml(nombreGanador, '#resultado' , true); 
    }


}


function actualizarListaHtmlLi(lista) {
    //console.log(lista);
    
    let contenedorListaHtmlUl = document.querySelector('#listaAmigos');
    contenedorListaHtmlUl.innerHTML = "";

    for (let index = 0; index < lista.length; index++) {
        
        const element = lista[index];
        agregarListaHtml(element, '#listaAmigos' );
       
    }

}

function agregarListaHtml(txt, id, limpiar = false) {
    let lu = document.querySelector(id);
    limpiar = (limpiar) ? lu.innerHTML = "" : 0;

    let elementoLi = document.createElement('li');
    elementoLi.innerHTML = txt;

    lu.appendChild(elementoLi);
}

function validarListaAmigos(lista) {

    // valida que lista sea tipo array y no este vacia
    if(!Array.isArray(lista) || !lista.length) {
        return true;
    }

    return false;
}

function validarTextoIngresado(inputTxt) {
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (inputTxt == "" || inputTxt == null){
        alert("Por favor, inserte un nombre.");
        return false;
    } else if (inputTxt.length > 20) {
        alert("Por favor, inserte un nombre de máximo 20 caracteres.");
        return false;
    } else if (format.test(inputTxt) == true) { // contiene chars espaciales
        alert("No se aceptan caracteres espaciales");
        return false;
    } else{
        return true;
    }

}