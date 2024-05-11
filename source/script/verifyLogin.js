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
    const projectsData = localStorage.getItem('projectsData');

    if (projectsData) {
        window.projects = JSON.parse(projectsData);
    } else {
        console.error('Erro: Dados não encontrados na localStorage');
        carregarDados('/api/?id=' + idUsuario);
    }
} else {
    redirecionarPara('/login');
}

function carregarDados(url) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {

            const data = JSON.parse(xhr.responseText);

            localStorage.setItem('projectsData', JSON.stringify(data));
        } else {
            console.error('Erro ao carregar os dados: ' + xhr.statusText);
        }
    };

    xhr.onerror = function() {
        console.error('Erro de rede ao tentar carregar os dados');
    };

    xhr.send();
}


if (idUsuario !== 'pedromoura') {
    redirecionarPara(`../login/`);
}