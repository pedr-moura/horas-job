

let box = document.getElementById('tela')

function showNewProjectCreate(){

    box.innerHTML = `
    <div id="box" class="box"> 
            <div class="navbar">
            <span class="moveinfo">Jobb</span>
                <p>💡 NOVO PROJETO</p>
                <button onclick="closeNewProjectCreate()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </button>
            </div>

            <p>
                <input type="text" name="newProjectName" id="newProjectName" placeholder="Nome do Projeto" maxlength="25">
            </p>

            <p>
            <input type="text" name="newProjectGit" id="newProjectLink" value="github.com/">
            </p>

            <br>
            <div class="options">
                <button class="button" onclick="processNewProject()">Começar agora</button>
                <button class="button" onclick="saveCreateNewProject()">Salvar</button>
            </div>
            <br>
        </div>`


}

function processNewProject(){

    let newProjectName = document.getElementById('newProjectName')
    let newProject = newProjectName.value

    if (newProject == '') {
        newProjectName.style.border = '1px solid red'
    }else{
        openProject(newProject.toLowerCase())   
    }

    console.log(newProject);
}
function saveCreateNewProject() {
    let newProjectName = document.getElementById('newProjectName')
    let newProject = newProjectName.value
    
    if(newProject == ''){
        newProjectName.style.border = '1px solid red'
    }else{    
        processNewProject()
        closeNewProjectCreate()
    }
    



}

function closeNewProjectCreate() {
    box.innerHTML = ``
}

//newProjectName -> nome do projeto
//newProjectLink -> link

function viewProjects() {

        // Obter os valores dos elementos HTML
        var uploadNameProject = document.getElementById("uploadNameProject").innerText;
        var hoursCount = document.getElementById("hoursCount").innerText;

        // Formatar os dados para enviar na URL
        var dados = "uploadNameProject=" + encodeURIComponent(uploadNameProject) + "&hoursCount=" + encodeURIComponent(hoursCount);

        // Montar a URL da API
        var urlAPI = `http://-------api--------/?id=${idUsuario}&` + dados;

        // Enviar os dados para a API via GET
        fetch(urlAPI, {
            method: 'GET'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao enviar os dados para a API');
            }
            return response.json();
        })
        .then(data => {
            console.log('Resposta da API:', data);
            // Faça algo com a resposta da API, se necessário
        })
        .catch(error => {
            console.error('Erro:', error);
        });

    closeNewProjectCreate()
    showProjectPage()
    
}


function openProject(projectName) {
    showOverviewPage()
    

  for (const projeto in projects) {
    
 let acumulado = 0
 if (projects[projectName]) {
    totalDoProjeto = projects['value'] * projects[projectName].acumulado
    totalDoProjeto = totalDoProjeto.toFixed(2);
    acumulado = projects[projectName].acumulado
 }else{
    totalDoProjeto = 0
 }
 let totalDoProjetoFormatado = totalDoProjeto.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});


    box.innerHTML = 
    `<div id="box" class="box">
        <div class="navbar">
        <span class="moveinfo">Jobb</span>
            <p id="uploadNameProject"> ${projectName.toUpperCase()}</p>
            <button onclick="closeNewProjectCreate()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
            </button>
        </div>
        
        <div class="contab">
            <span id="showCount"><b>${acumulado}</b> Horas dedicadas</span>  <br>
            <span id="showCash"><b>R$ ${totalDoProjetoFormatado}</b> Valor estimado</span>
        </div>
        <br>

        <span id="buttonCount" >
        <button class="button" onclick="initCountHoursProject()">Contar</button>
        </span>

        <div id="statusCount"></div>
        <div id="textCount">...</div>
        <br><br>
        
        `
  }
   
}

function initCountHoursProject() {
    let statusCount = document.getElementById('statusCount');
    let textCount = document.getElementById('textCount');
    let buttonCount = document.getElementById('buttonCount');
    let showCount = document.getElementById('showCount');
    let showCash = document.getElementById('showCash');

    statusCount.innerHTML = '🟢';
    textCount.innerHTML = `<span style="color: #85f181;">Trabalhando...</span>`;
    buttonCount.innerHTML = '<button class="button" onclick="viewProjects()">Parar</button>';

    let horaInicio = new Date();
    
    setInterval(function() {
        let diferencaEmMilissegundos = new Date() - horaInicio;
        let horasPassadas = diferencaEmMilissegundos / (1000 * 60 * 60);

        showCount.innerHTML = `<b style="color: #85f181;"  id="hoursCount">${horasPassadas.toFixed(4)}</b> Horas adicionadas ao projeto`;

        let valorAgregado = horasPassadas * value
        var formattedValue = valorAgregado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        showCash.innerHTML = `<b style="color: #85f181;" id="valueCount">${formattedValue}</b> Valor agregado`;
    }, 1000);
}

function alterarValue(){
    box.innerHTML = `
    <div id="box" class="box"> 
            <div class="navbar">
            <span class="moveinfo">Jobb</span>
                <p>🔐 VALIDAÇÃO </p>
                <button onclick="closeNewProjectCreate()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </button>
            </div>

            <p>Valor por hora:</p>
            <input type="number" name="" placeholder="R$ Valor" id="value" min="0" value="${value}">

            <br>
            <p>Digite '<strong>12345</strong>' para validar</p>
            <input type="password" name="" placeholder="" id="password">
            <br>
            <br>
            <button class="button" style="width: 100%; background: #ffc83d;" onclick="saveValue()"> Salvar </button>
            <br>
            <br>

        </div>`
}

function saveValue() {
    let password = document.getElementById('password');
    let passwordValue = password.value;

    if (passwordValue !== '' && passwordValue == userPassword) {
        let valueInput = document.getElementById('value');
        let valueToSend = valueInput.value;

        // Verifica se o valor a ser enviado é um número válido
        if (!isNaN(parseFloat(valueToSend)) && isFinite(valueToSend)) {
            // URL da API para atualizar o valor (substitua 'sua-api.com' pela URL real)
            let apiUrl = `https://------api--------/?id=${idUsuario}&valor=` + encodeURIComponent(valueToSend);

            // Envia a solicitação GET para a API
            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro ao atualizar o valor');
                    }
                    // Fecha o modal de criação de novo projeto se a atualização for bem-sucedida
                    closeNewProjectCreate();
                })
                .catch(error => {
                    console.error('Erro ao atualizar o valor:', error);
                    // Manipula o erro, se necessário
                });
        } else {
            // Se o valor a ser enviado não for um número válido, exibe uma mensagem de erro
            alert('Por favor, insira um valor numérico válido.');
        }
        closeNewProjectCreate()
    } else {
        // Se a senha estiver incorreta ou vazia, exibe uma mensagem de erro
        password.style.border = '1px solid red';
    }
    
}