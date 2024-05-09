let projects = {
    'value': '50',
    'projeto1': {
        // informações do projeto 1
        'name': '-----------------------',
        'last-data': '29/4/2024',
        'horas': '7.39',
        'acumulado': '7.39',
        'git' : 'https://github.com/pedr-moura',
        'format-data': '2024-04-29',
        'type': 'study'
    },
    'projeto2': {
        // informações do projeto 2
        'name': 'projeto2',
        'last-data': '28/4/2024',
        'horas': '2.20',
        'acumulado': '7.39',
        'git' : 'https://github.com/pedr-moura',
        'format-data': '2024-04-28',
        'type': 'job'
    },
    'projeto3': {
        // informações do projeto 3
        'name': 'projeto3',
        'last-data': '27/4/2024',
        'horas': '2.50',
        'acumulado': '7.39',
        'git' : 'https://github.com/pedr-moura',
        'format-data': '2024-04-27',
        'type': 'study'
    },
    'projeto4': {
        // informações do projeto 3
        'name': 'projeto4',
        'last-data': '27/4/2024',
        'horas': '2.00',
        'acumulado': '7.39',
        'git' : 'https://github.com/pedr-moura',
        'format-data': '2024-04-27',
        'type': 'study'
    },
    'projeto5': {
        // informações do projeto 3
        'name': 'projeto5',
        'last-data': '27/4/2024',
        'horas': '3.00',
        'acumulado': '7.39',
        'git' : 'https://github.com/pedr-moura',
        'format-data': '2024-04-26',
        'type': 'study'
    },
    'projeto6': {
        // informações do projeto 3
        'name': 'projeto6',
        'last-data': '27/4/2024',
        'horas': '4.62',
        'acumulado': '7.39',
        'git' : 'https://github.com/pedr-moura',
        'format-data': '2024-04-25',
        'type': 'job'
    },
    'projeto7': {
        // informações do projeto 3
        'name': 'projeto7',
        'last-data': '24/4/2024',
        'horas': '1.00',
        'acumulado': '7.39',
        'git' : 'https://github.com/pedr-moura',
        'format-data': '2024-04-24',
        'type': 'job'
    },
    'projeto8': {
        // informações do projeto 3
        'name': 'projeto8',
        'last-data': '3/5/2024',
        'horas': '2.00',
        'acumulado': '7.39',
        'git' : 'https://github.com/pedr-moura',
        'format-data': '2024-05-03',
        'type': 'job'
    },
    'projeto9': {
        // informações do projeto 3
        'name': 'projeto9',
        'last-data': '3/5/2024',
        'horas': '2.00',
        'acumulado': '7.39',
        'git' : 'https://github.com/pedr-moura',
        'format-data': '2024-05-03',
        'type': 'job'
    },
    'projeto10': {
        // informações do projeto 3
        'name': 'projeto10',
        'last-data': '3/5/2024',
        'horas': '2.00',
        'acumulado': '7.39',
        'git' : 'https://github.com/pedr-moura',
        'format-data': '2024-05-03',
        'type': 'job'
    },
    'projeto11': {
        // informações do projeto 3
        'name': 'projeto11',
        'last-data': '3/5/2024',
        'horas': '2.00',
        'acumulado': '7.39',
        'git' : 'https://github.com/pedr-moura',
        'format-data': '2024-05-03',
        'type': 'job'
    },
    'projeto12': {
        // informações do projeto 3
        'name': 'projeto12',
        'last-data': '3/5/2024',
        'horas': '2.00',
        'acumulado': '7.39',
        'git' : 'https://github.com/pedr-moura',
        'format-data': '2024-05-03',
        'type': 'job'
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