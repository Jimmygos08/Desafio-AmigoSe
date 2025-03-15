// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Requerimientos de alura, deben poder ingresar nombres, realizar un sorteo y arrojar un nombre aleatorio quien sera el amigo secreto.

//Debe permitir agregar nombre mediante el boton añadir.
//Debe tener validacion de datos de entrada, si intentan ingresar un campo vacio debe aparecer un alert quen indique que se ingrese un nombre valido.
//Al hacer click en el boton "sortear amigo", la aplicacion debera escoger un nombre aleatorio y mostralo en pantalla.

//Base de datos de nombres ingresados.
let nombreIngresado = [];

function agregarAmigo() {

        const amigoIngresado = document.getElementById("amigo");
        const nombre = amigoIngresado.value.trim();

        if (nombre) {
            nombreIngresado.push(nombre);
            
            amigoIngresado.value = ""; //limpiara la caja donde se ingresan los nombres
            actualizarLista();
        }else{
            alert("Ingrese un nombre valido.");
        }

}

// Funcion para actualizar la lista en pantalla
function actualizarLista(){
     const lista = document.getElementById("listaAmigos");
     lista.innerHTML = "";
     nombreIngresado.forEach((nombre, index)=> {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
     });


}

// Funcion para sortear los nombres ingresados aleatoriamente
function sortearAmigo(){
    if (nombreIngresado.length === 0) {
        alert("Ingrese un nombre valido");
        return;
    }

     const listaAmigos = Math.floor(Math.random() * nombreIngresado.length);
     const nombreGanador = nombreIngresado[listaAmigos];
     document.getElementById("resultado").textContent = "El amigo ganador es: " + nombreGanador;


}
