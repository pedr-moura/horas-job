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

    for (var i = -1; i < 6; i++) {
        var data = new Date(hoje);
        data.setDate(hoje.getDate() - i);

        if (i == -1) {
            dias.push(`
            <div class="option">
                    <input class="input" type="radio" name="btn" value="${hoje.getDate() +1}" >
                    <div class="btn" id="dayChecked" >
                      <span class="span" id="spanChecked">Todos</span>
                    </div>
                  </div>
            `);
        }else{
            if (i == 0) {
                dias.push(`
                <div class="option">
                        <input class="input" type="radio" name="btn" value="${hoje.getDate()}" checked>
                        <div class="btn">
                          <span class="span">Hoje</span>
                        </div>
                      </div>
                `);
                
            }else{
                dias.push(`
                <div class="option">
                        <input class="input" type="radio" name="btn" value="${data.getDate()}">
                        <div class="btn">
                          <span class="span">${data.getDate()}</span>
                        </div>
                      </div>
                `);
            }
        }


        
    }

    return dias.reverse(); // Reverte a ordem para que os dias apareçam do mais recente para o mais antigo
}

function atualizarUltimosDias() {
    var dias = obterUltimos4Dias();
    ultimos4Dias.innerHTML = dias.join('<br>');
}


atualizarHora();
atualizarDia();
atualizarUltimosDias();

setInterval(atualizarHora, 1000);

var dataAtual = new Date();

const radioInputs = document.querySelectorAll('.input');
let dateShow = document.getElementById('dateShow')
dateShow.innerHTML = `${dataAtual.getDate()}/${dataAtual.getMonth() + 1}/${dataAtual.getFullYear()}`

radioInputs.forEach(input => {
    input.addEventListener('change', function() {

    if (this.checked) {
                
                const selectedValue = this.value;
                dateShow.innerHTML = `${selectedValue}/${dataAtual.getMonth() + 1}/${dataAtual.getFullYear()}`
    
                if (selectedValue > Number(dataAtual.getDate())) {
                    dateShow.innerHTML = `${selectedValue}/${dataAtual.getMonth()}/${dataAtual.getFullYear()}`
        
                    clearProjectHome()
                    showProjectsHome()
                }

                clearProjectHome()
                showProjectsHome()
                
    }
    
        


    });
});
obterUltimos4Dias()