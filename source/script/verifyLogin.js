window.projects = null;

function obterParametroGET(nome) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nome);
}

function redirecionarPara(url) {
    window.location.href = url;
}

const idUsuario = obterParametroGET('id');

if (idUsuario !== null) {
    // Tente obter os dados do localStorage
    const projectsData = localStorage.getItem('projectsData');

    
    if (projectsData) {

        window.projects = JSON.parse(projectsData);

    } else {
        console.error('Erro: Dados não encontrados na localStorage');
        redirecionarPara(`/api/?id=${idUsuario}`);
    }
} else {
    redirecionarPara('/login');
}
