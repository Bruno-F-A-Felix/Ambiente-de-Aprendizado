const qs = (el) => document.querySelector(el);
const qsAll = (el) => document.querySelectorAll(el); // 'el' é uma vatiavel criada dentro do parametro da função. Seu valor em enviado quando chamado

pizzaJson.forEach(element => {
    let pizzaOption = qs('.pizza-item').cloneNode(true);  // Primeiro precisamos clonar um elemento molde para criarmos um novo e adiciona-lo em seguida

    pizzaOption.querySelector('.pizza-item--img img').src = element.img;
    pizzaOption.querySelector('.pizza-item--price').innerHTML = `R$ ${element.price.toFixed(2)}`;
    pizzaOption.querySelector('.pizza-item--name').innerHTML = element.name;
    pizzaOption.querySelector('.pizza-item--desc').innerHTML = element.description;

    qs('.pizza-area').appendChild(pizzaOption);  // Dessa forma fazemos a adição de novos elementos, diferente do innerHTML que sobrescreve
});

