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
let quantityHtmlElement = qs('.pizzaInfo--qt');

// TipoDePizza, Variavel para monitorar qual pizza estamos trabalhando
let thisPizzaKey

// Primeiro precisamos clonar um elemento molde para criarmos um novo e adiciona-lo em seguida
pizzaJson.forEach((element, index) => {
    let pizzaOption = qs('.pizza-item').cloneNode(true);

    pizzaOption.querySelector('a').setAttribute('data-key', index);
    pizzaOption.querySelector('.pizza-item--img img').src = element.img;
    pizzaOption.querySelector('.pizza-item--price').innerHTML = `R$ ${(element.price + 10).toFixed(2)}`;
    pizzaOption.querySelector('.pizza-item--name').innerHTML = element.name;
    pizzaOption.querySelector('.pizza-item--desc').innerHTML = element.description;

    // Dessa forma fazemos a adição de novos elementos, diferente do innerHTML que sobrescreve
    qs('.pizza-area').appendChild(pizzaOption);

    // Aqui eu abro a pizza que escolhi
    pizzaOption.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();

        let key = e.target.parentNode;
        let modeTag = pizzaOption.querySelector('.pizza-item--img');

        // Enviando informação para saber qual pizza estou clicando
        key === modeTag ? openModal(modeTag.parentNode) : openModal(key);
    });
});
function openModal(key){

    // Armazenando em thisPizzaKey o valor de data-key do elemento 'a'
    thisPizzaKey = key.dataset.key
    let thisPizzaPrice;
    let quantitiesButtom = qsAll('.pizzaInfo--qtButtom')

    qs('.pizzaBig img').src = pizzaJson[thisPizzaKey].img;
    qs('.pizzaInfo h1').innerHTML = pizzaJson[thisPizzaKey].name;
    qs('.pizzaInfo--desc').innerHTML = pizzaJson[thisPizzaKey].description;

    // Setando para o maior tamanho de pizza
    qs('[data-selected]').classList.add('selected');

    // Coletando o valor da pizza clicada
    thisPizzaPrice = pizzaJson[thisPizzaKey].price.toFixed(2);
    priceHtmlElement.innerHTML = `R$ ${(parseFloat(thisPizzaPrice) + 10).toFixed(2)}`;

    // Modifica os valores de preço dependendo do tamanho escolhido
    setPriceBySize(thisPizzaKey, thisPizzaPrice, priceHtmlElement, quantityHtmlElement);

    // Altera o valor total de acordo com a quantidade de pizza selecionada
    setPriceByQuantities(quantitiesButtom, quantityHtmlElement, thisPizzaPrice)

    qs('.pizzaWindowArea').style.opacity = 0;
    qs('.pizzaWindowArea').style.display = 'flex';
    setTimeout(()=>{
        qs('.pizzaWindowArea').style.opacity = 1;
    }, 200);
}
function setPriceBySize(thisPizzaKey, thisPizzaPrice, priceHtmlElement, quantityHtmlElement){
    for (let index = 0; index < sizes.length; index++) {
        let element = sizes[index];
        
        element.querySelector('span').innerHTML = pizzaJson[thisPizzaKey].sizes[element.dataset.key];
        element.addEventListener('click', () => {
            if(element.dataset.key === "0"){
                quantityHtmlElement.innerHTML = 1
                qs('.pizzaInfo--size.selected').classList.remove('selected');
                element.classList.add('selected');
                priceHtmlElement.innerHTML = `R$ ${parseFloat(thisPizzaPrice).toFixed(2)}`;
            }else if(element.dataset.key === "1"){
                quantityHtmlElement.innerHTML = 1
                qs('.pizzaInfo--size.selected').classList.remove('selected');
                element.classList.add('selected');
                priceHtmlElement.innerHTML = `R$ ${(parseFloat(thisPizzaPrice) + 5).toFixed(2)}`;
            }else if(element.dataset.key === "2"){
                quantityHtmlElement.innerHTML = 1
                qs('.pizzaInfo--size.selected').classList.remove('selected');
                element.classList.add('selected');
                priceHtmlElement.innerHTML = `R$ ${(parseFloat(thisPizzaPrice) + 10).toFixed(2)}`;
            }
        });
    }
}
function setPriceByQuantities(quantitiesButtom, quantityHtmlElement, thisPizzaPrice){
    quantitiesButtom.forEach(element => {
        element.addEventListener('click', () =>{
            if (element.dataset.qt === "-" && parseInt(quantityHtmlElement.textContent) > 1) {
                quantityHtmlElement.innerHTML = parseInt(quantityHtmlElement.textContent) - 1
                let num = parseFloat(priceHtmlElement.textContent.match(/\d+\.\d+/)[0]);
                priceHtmlElement.innerHTML = `R$ ${(num - parseFloat(thisPizzaPrice)).toFixed(2)}`
            }else if(element.dataset.qt === "+"){
                quantityHtmlElement.innerHTML = parseInt(quantityHtmlElement.textContent) + 1
                let num = parseFloat(priceHtmlElement.textContent.match(/\d+\.\d+/)[0]);
                priceHtmlElement.innerHTML = `R$ ${(num + parseFloat(thisPizzaPrice)).toFixed(2)}`
            }
        })
    });
}
function clickCloseWindow(){
    qs('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        qs('.pizzaWindowArea').style.display = 'none';
    }, 500);
}
function cartUpdate(){


    clickCloseWindow()    
}