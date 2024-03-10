// Criei esse código de forma um pouco avançado em relação ao conteúdo pois já possuo alguns conhecimentos em JS e já me acostumei a usa-lo com o HTML, espero que não tenha problemas.
// Qualquer coisa professor pode entrar em contato comigo que te envio o código por inteiro assim que eu tiver tempo de publicar no meu GitHub.

const drinks = [2.00, 2.50, 1.50]
const drinksContainer = document.querySelector('#drinks')
const showPrice = drinksContainer.querySelector('#price')
const optionsContainer = drinksContainer.querySelector('#options')
const buttons = optionsContainer.querySelectorAll('button')

buttons.forEach(element => {
    element.addEventListener('click', (e) => {
        switch (element.id) {
            case 'coffe':
                showPrice.innerHTML = `Valor: ${drinks[0]}`
                break;
            case 'milk':
                showPrice.innerHTML = `Valor: ${drinks[1]}`
                break;
            case 'tea':
                showPrice.innerHTML = `Valor: ${drinks[2]}`
                break;
            default:
                showPrice.innerHTML = 'Está bebida está em falta, temos somente Café, Leite e Chá'
                break;
        }
    })
});

