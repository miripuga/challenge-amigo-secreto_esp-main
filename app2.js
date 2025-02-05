let amigos = [];

function agregarAmigo() {
    let nuevoAmigo = document.getElementById("amigo").value;
    

        if (nuevoAmigo.trim() === ""){
        document.getElementById("resultado").innerHTML = `No has ingresado datos aún`;
        }else{
        document.getElementById("resultado").innerHTML = "";
        amigos.push(nuevoAmigo);
        }
    
    document.getElementById("amigo").value = "";
    document.getElementById("amigo").focus();
    
    mostrarAmigos();
} 

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
    
}
function sortearAmigo() {

    if (amigos.length === 0) {
        document.getElementById("resultado").innerHTML = `No hay personas para realizar el sorteo`;
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `El amigo secreto es: ${amigoSorteado}`;
}