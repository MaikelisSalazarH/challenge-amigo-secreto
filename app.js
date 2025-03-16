// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// 1.- Array para almacenar los nombres
let amigos = [];

// 2.- Función para agregar amigos a la lista
function agregarAmigo() {
     // Capturar el valor del campo de entrada
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre válido.");
        return;
    }
    
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

// 3.- Función para actualizar la lista en la interfaz
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// 4.- Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    document.getElementById("resultado").innerHTML = `<li>El amigo secreto sorteado es: ${amigoSorteado}</li>`;
}
