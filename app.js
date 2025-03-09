// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Author : Felipe Toro R.
// Date   : 08 Marzo 2025

let arrayAmigos = [];

// Al darle click al boton Añadir el texto ingresado se guarda en una array
function agregarAmigo() {
   // prompt("Conexion exitosa");
   
   
   let obtenerNombreInputTxt = document.getElementById('amigo').value;
   //console.log(obtenerNombreInputTxt);

   if(obtenerNombreInputTxt != "" && obtenerNombreInputTxt != null) {
        
        arrayAmigos.push(obtenerNombreInputTxt);
        document.getElementById('amigo').value = ""; // Limpiar campo
        actualizarListaHtmlLi(arrayAmigos);
   
    } else {

        alert("Por favor, inserte un nombre.");

    }

}

function sortearAmigo() {
    prompt("Conexion exitosa");


}


function actualizarListaHtmlLi(lista) {
    //console.log(lista);
    
    let contenedorListaHtmlUl = document.querySelector('#listaAmigos');
    contenedorListaHtmlUl.innerHTML = "";

    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        //console.log(element);

        let elementoLi = document.createElement('li');
        elementoLi.innerHTML = element;

        contenedorListaHtmlUl.appendChild(elementoLi);
    }

}