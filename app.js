// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    amigos.push(nombreAmigo);
    
    inputAmigo.value = '';
    
    mostrarListaAmigos();
}

function mostrarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    
    listaAmigos.innerHTML = '';
    
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    
    if (amigos.length === 0) {
        alert('No hay amigos para sortear. Por favor, añada al menos un nombre.');
        return;
    }   
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);   
    const amigoSorteado = amigos[indiceAleatorio];
    resultado.innerHTML = '';
    const elementoResultado = document.createElement('li');
    elementoResultado.textContent = `El amigo sorteado es: ${amigoSorteado}`;
    resultado.appendChild(elementoResultado);
}