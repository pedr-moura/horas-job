let sectionSideLeft = document.getElementById('sectionSideLeft')
let sectionSideRight = document.getElementById('sectionSideRight')

let sectionProjects = document.getElementById('sectionProjects')


function showProjectPage(){
  sectionSideLeft.style.display = 'none'
  sectionSideRight.style.display = 'none'

  ///
  sectionProjects.style.display = 'block'
  sectionProjects.innerHTML = `projetos aparecerão aqui`
  showProjectList() 
}
function showProjectList() {
  sectionProjects.innerHTML = '';

  const projectList = document.createElement('ul');
 
  for (const projeto in projects) {
    
    const projectItem = document.createElement('li');
    projectItem.innerHTML = `<a onclick="openProject('${projects[projeto].name}')">acessar</a> <a href="${projects[projeto].git}"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
  </svg></a><span>${projects[projeto].name}</span> <b>${projects[projeto].acumulado}h</b> 
    <button onclick="removeProject('${projeto}')"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
  </svg></button>`; // Adiciona um botão para remover o projeto
    projectList.appendChild(projectItem);

  }

  sectionProjects.appendChild(projectList);
}

function removeProject(projetoId) {
  // Exibe um alerta para confirmar a remoção
  const confirmarRemocao = confirm("Tem certeza de que deseja remover este projeto?");
  
  // Se o usuário confirmar a remoção
  if (confirmarRemocao) {
      fetch(`-----------api-------------/remover?projetoId=${projetoId}`, {
          method: 'GET',
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Erro ao remover projeto');
          }
          // Atualiza a lista de projetos após a remoção
          showProjectList();
      })
      .catch(error => {
          console.error('Erro ao remover projeto:', error);
      });
  }
}




function showOverviewPage(){
  sectionSideLeft.style.display = 'block'
  sectionSideRight.style.display = 'block'
  sectionProjects.style.display = 'none'
}

showOverviewPage()


let projectPage = document.querySelector('input[type="radio"][id="projectPage"]')

function searchInProjects(){
  showProjectPage()
  
  projectPage.checked = true

}

