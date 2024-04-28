let box = document.getElementById('box')

function showNewProjectCreate(){
    box.innerHTML = `
        <div class="box"> 
            <div class="navbar">
                <p>💡 NOVO PROJETO</p>
                <button onclick="closeNewProjectCreate()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                </button>
            </div>

            <p>
                <input type="text" name="newProjectName" id="newProjectName" placeholder="Nome do Projeto...">
            </p>

            <p>
            <input type="text" name="newProjectGit" id="newProjectLink" placeholder="Link do Projeto">
            </p>

            <br>
            <div class="options">
                <button class="button">Começar agora</button>
                <button class="button">Salvar</button>
            </div>
            <br>
        </div>`
}

function closeNewProjectCreate() {
    box.innerHTML = ``
}

//newProjectName -> nome do projeto
//newProjectLink -> link

let projects = ['Web App para manutencao', 'projeto 2', 'projeto 3']


function viewProjects() {
    box.innerHTML = 
    `<div class="box"> 
        <div class="navbar">
            <p>📚 PROJETOS</p>
            <button onclick="closeNewProjectCreate()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
            </button>
        </div>
        <div id="projetos">
        </div>
        `
        let listProjects = document.getElementById('projetos')

        for (let c = 0; c < projects.length; c++) {
            const element = projects[c];
            listProjects.innerHTML += `
            <p class="projetos"><span>${element.toLowerCase()}</span>
            
            <button class="button"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
          </svg></button>

            <button class="button"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-stopwatch" viewBox="0 0 16 16">
            <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z"/>
            <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3"/>
          </svg></button>
            

            </p>
            
            `
        }

        box.innerHTML += `
        </div>`
}


