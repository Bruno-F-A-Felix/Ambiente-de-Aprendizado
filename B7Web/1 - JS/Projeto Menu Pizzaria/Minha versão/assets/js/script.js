const qs = (el) => document.querySelector(el);
const qsAll = (el) => document.querySelectorAll(el); // 'el' é uma vatiavel criada dentro do parametro da função. Seu valor em enviado quando chamado
const sizes = qsAll('.pizzaInfo--size');    // Tamanhos, selecionamos todas as tags que contem o tamanho das pizzas

pizzaJson.forEach((element, index) => {
    let pizzaOption = qs('.pizza-item').cloneNode(true);  // Primeiro precisamos clonar um elemento molde para criarmos um novo e adiciona-lo em seguida

    pizzaOption.querySelector('a').setAttribute('data-key', index);
    pizzaOption.querySelector('.pizza-item--img img').src = element.img;
    pizzaOption.querySelector('.pizza-item--price').innerHTML = `R$ ${(element.price + 10).toFixed(2)}`;
    pizzaOption.querySelector('.pizza-item--name').innerHTML = element.name;
    pizzaOption.querySelector('.pizza-item--desc').innerHTML = element.description;

    qs('.pizza-area').appendChild(pizzaOption);  // Dessa forma fazemos a adição de novos elementos, diferente do innerHTML que sobrescreve

    pizzaOption.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();

        let key = e.target.parentNode;
        let modeTag = pizzaOption.querySelector('.pizza-item--img');

        key === modeTag ? openModal(modeTag.parentNode) : openModal(key);
    });
});
function openModal(key){
    let count = key.dataset.key
    let pricePizza;

    qs('.pizzaBig img').src = pizzaJson[count].img;
    qs('.pizzaInfo h1').innerHTML = pizzaJson[count].name;
    qs('.pizzaInfo--desc').innerHTML = pizzaJson[count].description;
    qs('[data-selected]').classList.add('selected');
    pricePizza = pizzaJson[count].price.toFixed(2);
    qs('.pizzaInfo--actualPrice').innerHTML = `R$ ${(parseFloat(pricePizza) + 10).toFixed(2)}`;

    setPrice(count, pricePizza, qs('.pizzaInfo--actualPrice'));

    qs('.pizzaWindowArea').style.opacity = 0;
    qs('.pizzaWindowArea').style.display = 'flex';
    setTimeout(()=>{
        qs('.pizzaWindowArea').style.opacity = 1;
    }, 200);
}
function setPrice(count, pricePizza, htmlElement){
    for (let index = 0; index < sizes.length; index++) {
        let element = sizes[index];
        
        element.querySelector('span').innerHTML = pizzaJson[count].sizes[element.dataset.key];
        element.addEventListener('click', () => {
            if(element.dataset.key === "0"){
                qs('.pizzaInfo--size.selected').classList.remove('selected');
                element.classList.add('selected');
                htmlElement.innerHTML = `R$ ${parseFloat(pricePizza).toFixed(2)}`;
            }else if(element.dataset.key === "1"){
                qs('.pizzaInfo--size.selected').classList.remove('selected');
                element.classList.add('selected');
                htmlElement.innerHTML = `R$ ${(parseFloat(pricePizza) + 5).toFixed(2)}`;
            }else if(element.dataset.key === "2"){
                qs('.pizzaInfo--size.selected').classList.remove('selected');
                element.classList.add('selected');
                htmlElement.innerHTML = `R$ ${(parseFloat(pricePizza) + 10).toFixed(2)}`;
            }
        });
    }
}
