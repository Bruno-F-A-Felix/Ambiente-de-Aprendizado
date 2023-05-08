// 'el' é uma vatiavel criada dentro do parametro da função. Seu valor em enviado quando chamado
const qs = (el) => document.querySelector(el);
const qsAll = (el) => document.querySelectorAll(el);

// Vetor de strings contendo valorSubTotal@quantidade@tipoDePizza
cart = []

// Tamanhos, selecionamos todas as tags que contem o tamanho das pizzas
const sizes = qsAll('.pizzaInfo--size');

// ValorSubTotal, Selecionamos todas as tags que mostram o valor da pizza no modal
const priceHtmlElement = qs("[data-priceModal]");

// Quantidade, Pegamos a tag que contém o valor da quantidade de pizza selecionada
const quantityHtmlElement = qs('.pizzaInfo--qt');

// TipoDePizza, Variavel para monitorar qual pizza estamos trabalhando
let thisPizzaKey

// Preço, Variavel para monitorar o valor da pizza que estamos trabalhando
let thisPizzaPrice
