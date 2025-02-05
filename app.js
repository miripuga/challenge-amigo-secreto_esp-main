// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//array para almacenar nombres
let amigos = [];

//funcion para agregar amigos
function agregarAmigo(){
    //capturar el valor del campo de entrada
    const agregarAmigo = document.getElementById ("amigo");
    const nombreAmigo = agregarAmigo.ariaValueMax.trim ();
    
    //validar la entrada que no este vacio
    if(nombre === '') {
        alert ('Por favor inserte un nombre');
        return;
    }

    //validar que no este repetido
    if (amigos.includes (nombreAmigo)){
        alert (`El nombre ${nombreAmigo} ya se encuentra en la lista`);
        return;
    }

    //agregar el nombre si no esta repetido
    amigos.push(nombreAmigo);

    //limpiar el campo de entrada
    agregarAmigo.ariaValue='';

    //actualizar la lista en HTML
    actualizarLista();
}

//funcion para actualizar lista de amigos
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
//borrar el contenido
    listaAmigos.innerHTML = "":

    for(let i=0; i<amigos.length; i++){
        const li =document.createElement ('li');
        li.textContent =amigos(i);
        listaAmigos.appendChild(i);
    }

    
}

//funcion para sortear amigos