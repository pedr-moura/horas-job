let viewoff = document.getElementById('viewoff')
let viewon = document.getElementById('viewon')

let showValueSection = document.getElementById('showValueSection')
let showHoursSection = document.getElementById('showHoursSection')

let totalHoras = 0
let horasJob = 0
for (let project in projects) {
    if(projects.hasOwnProperty(project)) {

        if (projects[project].type == 'job') {
            totalHoras += parseFloat(projects[project].horas)

            horasJob += parseFloat(projects[project].horas)
        }
        if (projects[project].type == 'study') {
            totalHoras += parseFloat(projects[project].horas)
        }
    }
}

let totalValue = horasJob * value;
// Arredonda o valor para duas casas decimais
totalValue = totalValue.toFixed(2);
let totalValueFormatado = totalValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

showHoursSection.innerHTML = `${totalHoras} horas`

function onViewValue() {
    if ( viewon.style.display == 'block') {
        viewon.style.display = 'none'
        viewoff.style.display = 'block'
        showValueSection.innerHTML = 'R$ -.---,--'
    }else{
        viewon.style.display = 'block'
        viewoff.style.display = 'none'
        showValueSection.innerHTML = `${totalValueFormatado}`
    }
}