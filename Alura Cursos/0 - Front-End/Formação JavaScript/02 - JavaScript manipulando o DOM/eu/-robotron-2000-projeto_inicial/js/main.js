/* COMENTANDO O PROJETO PRONTO - TENTATIVA 04 */
const buttons = document.querySelectorAll("[data-peca]");
const roboStatus = document.querySelectorAll("[data-estatistica]");

buttons.forEach(element => {
    element.addEventListener('click', e => {
        let buttonSignal = e.target.dataset.controle;
        let pecaClicada = e.target.dataset.peca;
        let elementoPai = e.target.parentNode;

        clickCheck(buttonSignal, pecaClicada, elementoPai);
    });
});
function clickCheck(buttonSignal, pecaClicada, elementoPai){
    let buttonType = elementoPai.querySelector("[data-contador]");

    if(buttonSignal === "-" && buttonType.value > 0){
        buttonType.value = parseInt(buttonType.value) - 1;
        addValues(buttonSignal, pecaClicada);
    } else{
        buttonType.value = parseInt(buttonType.value) + 1;
        addValues(buttonSignal, pecaClicada);
    }
}
function addValues(buttonSignal, pecaClicada){
    roboStatus.forEach(element => {
        if(buttonSignal === "-"){
            element.textContent = parseInt(element.textContent) - peca[pecaClicada][element.dataset.estatistica];
        } else{
            element.textContent = parseInt(element.textContent) + peca[pecaClicada][element.dataset.estatistica];
        }
    });
}

/* COMENTANDO O PROJETO PRONTO - TENTATIVA 03 

const buttons = document.querySelectorAll("[data-controle]");
const roboStatus = document.querySelectorAll("[data-estatistica]");

buttons.forEach(element => {
     element.addEventListener('click', e => {
        clickCheck(e.target.dataset.controle, e.target.dataset.peca, e.target.parentNode);
     });
});

function clickCheck(buttonSignal, buttonType, elementDad){
    let counter = elementDad.querySelector("[data-contador]");

    if(buttonSignal === "+"){
        counter.value = parseInt(counter.value) + 1;
        addValues(buttonSignal, buttonType);
    } else if(counter.value > 0 && buttonSignal === "-"){
        counter.value = parseInt(counter.value) - 1;
        addValues(buttonSignal, buttonType);
    }
}

function addValues(buttonSignal, buttonType){
    roboStatus.forEach(element => {
        if(buttonSignal === "+")
            element.textContent = parseInt(element.textContent) + pecas[buttonType][element.dataset.estatistica];
        else
            element.textContent = parseInt(element.textContent) - pecas[buttonType][element.dataset.estatistica];
    });
}
*/
/* COMENTANDO O PROJETO PRONTO - TENTATIVA 02 - UPGRADE COM NÃO NUMEROS NEGATIVOS

const botoes = document.querySelectorAll("[data-controle]"); // Aqui pegamos todos os botões de mais e menos
const dadosDoRobo = document.querySelectorAll("[data-estatistica]"); // Aqui temos todas as estatisticas do robo

botoes.forEach(element => { // Percorremos todos os botões
    element.addEventListener('click', evento => {   // Monitoramos quais serão clicados
        verificaBotao(evento.target.dataset.controle, evento.target.parentNode, evento.target.dataset.peca);  // Função para adicionar ou remover
    });
});

function verificaBotao (botaoClick, elementoPAI, pecaClicada){  // Aqui fazemos a soma ou subtração
    let valor = elementoPAI.querySelector("[data-contador]");   // A partir do elemento PAI conseguimos o <input>

    if(botaoClick === "+"){
        valor.value = parseInt(valor.value) + 1;
        adicionaValores(botaoClick, pecaClicada);
    } else if(parseInt(valor.value) > 0 && botaoClick === "-"){
        valor.value = parseInt(valor.value) - 1;
        adicionaValores(botaoClick, pecaClicada);
    }
}

function adicionaValores(botaoClick, pecaClicada){
    //element.dataset.estatistica
    dadosDoRobo.forEach(element => {
        if(botaoClick === "+")
            element.textContent = parseInt(element.textContent) + pecas[pecaClicada][element.dataset.estatistica];
        else
            element.textContent = parseInt(element.textContent) - pecas[pecaClicada][element.dataset.estatistica];
    });
}
*/
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
    let valor = elementoPai.querySelector("[data-contador]"); // Pegando o elemento que contem a contagem

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

