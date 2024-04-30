let hora = document.getElementById('hora');
let data = document.getElementById('dayUm');
let ultimos4Dias = document.getElementById('ultimos4Dias');

function atualizarHora() {
    var dataAtual = new Date();

    hora.innerHTML = `${dataAtual.getHours()}:${dataAtual.getMinutes()}:${dataAtual.getSeconds()}`;
}

function atualizarDia() {
    var dataAtual = new Date();
}

function obterUltimos4Dias() {
    var hoje = new Date();
    var dias = [];

    for (var i = -1; i < 8; i++) {
        var data = new Date(hoje);
        data.setDate(hoje.getDate() - i);
        
        if (i == -1) {
            dias.push(`
            <div class="option">
                    <input class="input" type="radio" name="btn" value="${hoje.getDate()}" checked="">
                    <div class="btn">
                      <span class="span">Hoje</span>
                    </div>
                  </div>
            `);
            
        }else{
            dias.push(`
            <div class="option">
                    <input class="input" type="radio" name="btn" value="${data.getDate() - 1}" checked="">
                    <div class="btn">
                      <span class="span">${data.getDate() - 1}</span>
                    </div>
                  </div>
            `);
        }

        
    }

    return dias.reverse(); // Reverte a ordem para que os dias apareçam do mais recente para o mais antigo
}

function atualizarUltimos4Dias() {
    var dias = obterUltimos4Dias();
    ultimos4Dias.innerHTML = dias.join('<br>');
}


atualizarHora();
atualizarDia();
atualizarUltimos4Dias();

setInterval(atualizarHora, 1000);

var dataAtual = new Date();
const radioInputs = document.querySelectorAll('.input');
let dateShow = document.getElementById('dateShow')
dateShow.innerHTML = `${dataAtual.getDate() }/${dataAtual.getMonth()+1}/${dataAtual.getFullYear()}`

radioInputs.forEach(input => {
    input.addEventListener('change', function() {


   

        if (this.checked) {
            const selectedValue = this.value;
            dateShow.innerHTML = `${selectedValue}/${dataAtual.getMonth() + 1}/${dataAtual.getFullYear()}`

            clearProjectHome()
            showProjectsHome()
        }



    });
});