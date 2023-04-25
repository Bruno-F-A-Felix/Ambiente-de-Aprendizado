const qs = (el) => document.querySelector(el);
const qsAll = (el) => document.querySelectorAll(el); // 'el' é uma vatiavel criada dentro do parametro da função. Seu valor em enviado quando chamado
const sizes = qsAll('.pizzaInfo--size');    // Tamanhos, selecionamos todas as tags que contem o tamanho das pizzas
const priceHtmlElement = qs("[data-priceModal]");
//const quantities = qsAll('.pizzaInfo--qtButtom'); // Quantidades, selecionamos todas as tags que contem a opção de escolha da quantidade

pizzaJson.forEach((element, index) => {
    let pizzaOption = qs('.pizza-item').cloneNode(true);  // Primeiro precisamos clonar um elemento molde para criarmos um novo e adiciona-lo em seguida

    pizzaOption.querySelector('a').setAttribute('data-key', index);
    pizzaOption.querySelector('.pizza-item--img img').src = element.img;
    pizzaOption.querySelector('.pizza-item--price').innerHTML = `R$ ${(element.price + 10).toFixed(2)}`;
    pizzaOption.querySelector('.pizza-item--name').innerHTML = element.name;
    pizzaOption.querySelector('.pizza-item--desc').innerHTML = element.description;

    qs('.pizza-area').appendChild(pizzaOption);  // Dessa forma fazemos a adição de novos elementos, diferente do innerHTML que sobrescreve

    pizzaOption.querySelector('a').addEventListener('click', (e)=>{ // Aqui eu abro a pizza que escolhi
        e.preventDefault();

        let key = e.target.parentNode;
        let modeTag = pizzaOption.querySelector('.pizza-item--img');

        key === modeTag ? openModal(modeTag.parentNode) : openModal(key); // Enviando informação para saber qual pizza estou clicando
    });
});
function openModal(key){ // Abrindo a pizza do qual eu cliquei
    let thisPizzaKey = key.dataset.key //Armazenando em thisPizzaKey o valor de data-key do elemento 'a'
    let thisPizzaPrice; //Variavel para armazenar o valor da pizza.
    let quantityHtmlElement = qs('.pizzaInfo--qt');

    qs('.pizzaBig img').src = pizzaJson[thisPizzaKey].img;
    qs('.pizzaInfo h1').innerHTML = pizzaJson[thisPizzaKey].name;
    qs('.pizzaInfo--desc').innerHTML = pizzaJson[thisPizzaKey].description;
    qs('[data-selected]').classList.add('selected');    // Setando para o maior tamanho de pizza
    thisPizzaPrice = pizzaJson[thisPizzaKey].price.toFixed(2); // Coletando o valor da pizza clicada
    priceHtmlElement.innerHTML = `R$ ${(parseFloat(thisPizzaPrice) + 10).toFixed(2)}`;

    setPriceBySize(thisPizzaKey, thisPizzaPrice, priceHtmlElement, quantityHtmlElement); // Modifica os valores de preço dependendo do tamanho escolhido

    let quantities = qsAll('.pizzaInfo--qtButtom')
    quantities.forEach(element => {
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
