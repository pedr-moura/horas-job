let dataAtual = new Date()
let hora = document.getElementById('hora')

function actualizarHora() {
    var dataAtual = new Date();
    hora.innerHTML = `${dataAtual.getHours()} : ${dataAtual.getMinutes()} : ${dataAtual.getSeconds()}`;
}

setInterval(actualizarHora, 1000);

let data = document.getElementById('data')

function actualizarDia() {
    var dataAtual = new Date();
    data.innerHTML = `${dataAtual.getUTCDate()} / ${dataAtual.getUTCMonth()} / ${dataAtual.getUTCFullYear()}`;
}

setInterval(actualizarDia, 1000);