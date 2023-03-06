/* COMENTANDO O PROJETO PRONTO - TENTATIVA 01

const controle = document.querySelectorAll("[data-controle]");       //Botões de mais e menos
const estatistica = document.querySelectorAll("[data-estatistica]"); //Habilidades do robo

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode); //parentNode -> Elemento Pai
        atualizaEstatistica(evento.target.dataset.controle, evento.target.dataset.peca); //dataset -> Mostra todos os 'data-' que tem no elemento selecionado. Retorna o elemento
    })
})

function  manipulaDados (valorControle, elementoPai){ // Função para adicionar pontos as partes do robo
    let valor = elementoPai.querySelector("[data-contador]");

    valorControle === "-" ? valor.value = parseInt(valor.value) - 1 : valor.value = parseInt(valor.value) + 1;
}

function atualizaEstatistica(valorControle, parteDoRobo){ //Função para atualizar os valores das estatiscas
    if(valorControle === "-")
        estatistica.forEach ((elemento) => {
            elemento.textContent = parseInt(elemento.textContent) - pecas[parteDoRobo][elemento.dataset.estatistica];
        });
    else
        estatistica.forEach ((elemento) => {
            elemento.textContent = parseInt(elemento.textContent) + pecas[parteDoRobo][elemento.dataset.estatistica];
        });
}

*/

/* COMENTANDO O PROJETO PRONTO - TENTATIVA 02 */

const botao = document.querySelectorAll([data-controle]);

botao.forEach(element => {
    element.addEventListener('click', evento => {
        
    });
});