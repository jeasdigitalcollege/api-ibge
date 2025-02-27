const SELECT_REGIAO = document.getElementById("regiao");
const SELECT_ESTADO = document.getElementById("estado");
const SELECT_CIDADE = document.getElementById("cidade");

function atualizarRegioes() {
    let regioes = [
        'Norte',
        'Nordeste',
        'Sudeste',
        'Centro-Oeste',
        'Sul'
    ]

    /*
    regioes.forEach(cadaRegiao => {
        SELECT_REGIAO.innerHTML += `<option>${cadaRegiao}</option>`;   
    });*/

    regioes = regioes.map(cada => `<option>${cada}</option>`);
    SELECT_REGIAO.innerHTML += regioes;   
}

function atualizarEstados() {
    let estados = [
        'Amazonas',
        'Pará',
        'Piaui',
        'Ceará',
        'Rio de Janeiro',
        'São Paulo',
        'Paraná',
        'Rio Grande do Sul'
    ]

    /*
    estados.forEach(cadaEstado => {
        SELECT_ESTADO.innerHTML += `<option>${cadaEstado}</option>`;   
    });*/

    estados = estados.map(cada => `<option>${cada}</option>`);
    SELECT_ESTADO.innerHTML += estados;   

}

function atualizarCidades() {
    let cidades = [
        'Fortaleza',
        'Caucaia',
        'Aquiraz',
        'Maranguape'
    ]

    /*
    cidades.forEach(cadaCidade => {
        SELECT_CIDADE.innerHTML += `<option>${cadaCidade}</option>`;   
    });*/

    cidades = cidades.map(cada => `<option>${cada}</option>`);
    SELECT_CIDADE.innerHTML += cidades;   

}

atualizarRegioes();
