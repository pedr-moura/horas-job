let viewoff = document.getElementById('viewoff')
let viewon = document.getElementById('viewon')

let showValueSection = document.getElementById('showValueSection')
let showHoursSection = document.getElementById('showHoursSection')

function onViewValue() {
    if ( viewon.style.display == 'block') {
        viewon.style.display = 'none'
        viewoff.style.display = 'block'
        showValueSection.innerHTML = 'R$ X.XXX,XX'
        showHoursSection.innerHTML = 'X.XX horas'
    }else{
        viewon.style.display = 'block'
        viewoff.style.display = 'none'
        showValueSection.innerHTML = 'R$ 1.234,56'
        showHoursSection.innerHTML = '1.23 horas'
    }
}