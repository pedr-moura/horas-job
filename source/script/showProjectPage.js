let sectionSideLeft = document.getElementById('sectionSideLeft')
let sectionSideRight = document.getElementById('sectionSideRight')

function showProjectPage(){
  sectionSideLeft.style.display = 'none'
  sectionSideRight.style.display = 'none'

  ///
}

function showOverviewPage(){
  sectionSideLeft.style.display = 'block'
  sectionSideRight.style.display = 'block'
}

showOverviewPage()


let projectPage = document.querySelector('input[type="radio"][id="projectPage"]')

function searchInProjects(){
  showProjectPage()
  
  projectPage.checked = true

}