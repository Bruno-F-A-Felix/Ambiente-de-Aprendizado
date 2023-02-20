const controle = document.querySelectorAll("[data-controle]");       //Botões de mais e menos
const estatistica = document.querySelectorAll("[data-estatistica]"); //Habilidades do robo

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode); //parentNode -> Elemento Pai
        atualizaEstatistica(evento.target.dataset.peca); //dataset -> Mostra todos os 'data-' que tem no elemento selecionado
    })
})

function  manipulaDados (valorControle, elementoPai){ // Função para adicionar pontos as partes do robo
    let valor = elementoPai.querySelector("[data-contador]");

    valorControle === "-" ? parseInt(valor.value) - 1 : parseInt(valor.value) + 1;
}