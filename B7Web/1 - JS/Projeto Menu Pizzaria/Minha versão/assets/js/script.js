// 'el' é uma vatiavel criada dentro do parametro da função. Seu valor em enviado quando chamado
const qs = (el) => document.querySelector(el);
const qsAll = (el) => document.querySelectorAll(el);

// Primeiro precisamos clonar um elemento molde para criarmos um novo e adiciona-lo em seguida
pizzaJson.map((element, index) => {
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