// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let participantes = [];

function agregarNombre() {
    let input = document.getElementById("nombreInput");
    let nombre = input.value.trim();
    let mensajeError = document.getElementById("mensajeError");

    if (nombre === "") {
        mensajeError.textContent = "⚠️ Ingresa un nombre válido.";
        return;
    }
    if (participantes.includes(nombre)) {
        mensajeError.textContent = "⚠️ Ese nombre ya está en la lista.";
        return;
    }

    mensajeError.textContent = ""; 
    participantes.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaParticipantes");
    lista.innerHTML = "";
    
    participantes.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });

    document.getElementById("sortearBtn").disabled = participantes.length < 2;
}

function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function sortearAmigoSecreto() {
    let asignaciones = {};
    let mezclados = [...participantes];

    do {
        mezclarArray(mezclados);
    } while (mezclados.some((nombre, i) => nombre === participantes[i]));

    for (let i = 0; i < participantes.length; i++) {
        asignaciones[participantes[i]] = mezclados[i];
    }

    mostrarResultados(asignaciones);
}

function mostrarResultados(asignaciones) {
    let listaResultados = document.getElementById("resultados");
    listaResultados.innerHTML = "";

    for (let persona in asignaciones) {
        let li = document.createElement("li");
        li.textContent = `${persona} → ${asignaciones[persona]}`;
        listaResultados.appendChild(li);
    }
}
