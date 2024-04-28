let hora = document.getElementById('hora');

function actualizarHora() {
    var dataAtual = new Date();
    var horaAtual = dataAtual.getHours();
    var minutoAtual = dataAtual.getMinutes();
    var segundoAtual = dataAtual.getSeconds();

    hora.innerHTML = `${dataAtual.getHours()}:${dataAtual.getMinutes()}:${dataAtual.getSeconds()}`;
    

    localStorage.setItem('dataAtual', dataAtual);
}

actualizarHora();

setInterval(actualizarHora, 1000);

let data = document.getElementById('data')

function actualizarDia() {
    var dataAtual = new Date();
    data.innerHTML = `${dataAtual.getUTCDate()} / ${dataAtual.getUTCMonth()} / ${dataAtual.getUTCFullYear()}`;
}

setInterval(actualizarDia, 1000);