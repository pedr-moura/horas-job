let projects = {

    'projeto1': {
        // informações do projeto 1
        'name': 'aaaaaaaaaaaaaaaaaaaaaaa',
        'last-data': '29/4/2024',
        'horas': '10.39'
    },
    'projeto2': {
        // informações do projeto 2
        'name': 'projeto2',
        'last-data': '28/4/2024',
        'horas': '1.00'
    },
    'projeto3': {
        // informações do projeto 3
        'name': 'projeto3',
        'last-data': '27/4/2024',
        'horas': '2.00'
    },
    'projeto4': {
        // informações do projeto 3
        'name': 'projeto4',
        'last-data': '27/4/2024',
        'horas': '2.00'
    },
    'projeto5': {
        // informações do projeto 3
        'name': 'projeto5',
        'last-data': '27/4/2024',
        'horas': '2.00'
    },
    'projeto6': {
        // informações do projeto 3
        'name': 'projeto6',
        'last-data': '27/4/2024',
        'horas': '2.00'
    }
};



let value = ['50']; // valor para simulação
let userPassword = ['12345']; // senha para simulação

// show projects home
let projectsHome = document.getElementById('showProjectsHome')

function showProjectsHome(){

    for (let project in projects) {
        if (projects.hasOwnProperty(project)){
            const element = projects[project]

            const name = element['name']
            const horas = element['horas']
            const lastData = element['last-data']

            let dateShow = document.getElementById('dateShow')

            if (lastData == dateShow.innerHTML) {
                projectsHome.innerHTML += `
                <p>
                <span class="horasProject">${horas} h</span>
                <span class="nameProject">${name}</span>
                <span class="dataProject">Ultimo vez em ${lastData}</span>
                
            
              </p>`
            }


        }
        
    }
}
function clearProjectHome() {
    projectsHome.innerHTML = ``
}
showProjectsHome()