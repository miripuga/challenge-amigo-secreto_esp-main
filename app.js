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
            document.getElementById ('resultado').innerHTML = '';
            amigos.push(newAmigo); 
        }

        document.getElementById('amigo').value ='';
        document.getElementById('amigo').focus();

        listaAmigos()
    }

//agregar el nombre a la lista
    function listaAmigos (){
        let lista =document.getElementById('listaAmigos');

        lista.innerHTML='';

    for(let i=0; i<amigos.length; i++){
        const li =document.createElement ('li');
        li.textContent =amigos[i];
        lista.appendChild(i);
    }
}

//funcion para sortear amigos
function sortearAmigo() {
    if(amigos.length === 0) {
        alert("No hay ningun amigo para sortear, agrega al menos uno");
        return
    }
    const amigoAleatorio = Math.floor(Math.random() *amigos.length);

    const amigoSeleccionado = amigos[amigoAleatorio];

    const resultado = document.getElementById ('resultado');
    resultado.innerHTML = `Amigo seleccionado: <strong>${amigoSeleccionado}</strong>`;
}