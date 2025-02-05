// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//array para almacenar nombres
let amigos = [];

//funcion para agregar amigos
function agregarAmigo(){
    //capturar el valor del campo de entrada
    let newAmigo = document.getElementById ("amigo").value;
    
    //validar la entrada que no este vacio
    if(newAmigo.trim() === '') {
        document.getElementById('resultado').innerHTML = 'Por favor inserte un nombre';
        } else {
            //verificar que no esta repetido
            if(amigos.includes(newAmigo)){
                document.getElementById('resultado').innerHTML=`El nombre ${newAmigo} ya esta en la lista`
            } else {
                amigos.push(newAmigo);
                document.getElementById ('resultado').innerHTML = '';
            } 
        }
            
        document.getElementById('amigo').value ='';
        document.getElementById('amigo').focus();

        listaAmigos();
    }

//agregar el nombre a la lista
function listaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    // Recorrer los amigos y agregarlos a la lista
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

//funcion para sortear amigos
function sortearAmigo() {
    if(amigos.length === 0) {
        document.getElementById('resultado').innerHTML ="No hay ningun amigo para sortear, agrega a tus amigos";
        return;
    }
    let amigoAleatorio = Math.floor(Math.random() *amigos.length);

    let amigoSeleccionado = amigos[amigoAleatorio];

    let resultado = document.getElementById ('resultado');
    resultado.innerHTML = `Amigo seleccionado: <strong>${amigoSeleccionado}</strong>`;
}