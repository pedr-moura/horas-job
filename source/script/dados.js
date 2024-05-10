if(window.projects){
    console.log('🟢');
}

let value = projects['value'];
let userPassword = ['12345']; // senha para simulação

var hoje = new Date();
let projectsHome = document.getElementById('showProjectsHome')
let selectProjectsHome = document.getElementById('dateShow')

function showProjectsHome() {
    clearProjectHome();

    Object.keys(window.projects).forEach(projeto => {
        let projetoData = window.projects[projeto]['last-data'];
        
        if (projetoData === selectProjectsHome.textContent) {
            projectsHome.innerHTML += `<p>${window.projects[projeto]['name']} <span>${window.projects[projeto]['horas']} h </span><br></p>`;
        }
    });
    
}

function clearProjectHome() {
    projectsHome.innerHTML = ``
}
showProjectsHome()

