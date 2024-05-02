let projects = {

    'projeto1': {
        // informações do projeto 1
        'name': '-----------------------',
        'last-data': '29/4/2024',
        'horas': '10.39',
        'format-data': '2024-04-29'
    },
    'projeto2': {
        // informações do projeto 2
        'name': 'projeto2',
        'last-data': '28/4/2024',
        'horas': '1.00',
        'format-data': '2024-04-28'
    },
    'projeto3': {
        // informações do projeto 3
        'name': 'projeto3',
        'last-data': '27/4/2024',
        'horas': '2.00',
        'format-data': '2024-04-27'
    },
    'projeto4': {
        // informações do projeto 3
        'name': 'projeto4',
        'last-data': '27/4/2024',
        'horas': '2.00',
        'format-data': '2024-04-27'
    },
    'projeto5': {
        // informações do projeto 3
        'name': 'projeto5',
        'last-data': '27/4/2024',
        'horas': '2.00',
        'format-data': '2024-04-26'
    },
    'projeto6': {
        // informações do projeto 3
        'name': 'projeto6',
        'last-data': '27/4/2024',
        'horas': '2.00',
        'format-data': '2024-04-29'
    }
};


let value = ['50']; // valor para simulação
let userPassword = ['12345']; // senha para simulação


// show projects home
let projectsHome = document.getElementById('showProjectsHome')

var hoje = new Date();

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
              </p>`
            }else{
                if (dateShow.innerHTML == 'all'){
                    projectsHome.innerHTML += `
                    <p>
                    <span class="horasProject">${horas} h</span>
                    <span class="nameProject">${name}</span>
                    
                
                  </p>`
                }
            }

            if (dateShow.innerHTML == `${hoje.getDate() + 1}/${hoje.getMonth()}/${hoje.getFullYear()}`) {

                projectsHome.innerHTML += `
                <p>
                <span class="horasProject">${horas} h</span>
                <span class="nameProject">${name}</span>
              </p>`
            }


        }
        
    }
}
function clearProjectHome() {
    projectsHome.innerHTML = ``
}
showProjectsHome()