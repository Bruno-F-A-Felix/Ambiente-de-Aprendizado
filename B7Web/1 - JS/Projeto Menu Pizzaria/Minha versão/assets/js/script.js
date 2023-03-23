const qs = (el) => document.querySelector(el);
const qsAll = (el) => document.querySelectorAll(el); // 'el' é uma vatiavel criada dentro do parametro da função. Seu valor em enviado quando chamado

pizzaJson.forEach((element, index) => {
    let pizzaOption = qs('.pizza-item').cloneNode(true);  // Primeiro precisamos clonar um elemento molde para criarmos um novo e adiciona-lo em seguida

    pizzaOption.querySelector('a').setAttribute('data-key', index);
    pizzaOption.querySelector('.pizza-item--img img').src = element.img;
    pizzaOption.querySelector('.pizza-item--price').innerHTML = `R$ ${element.price.toFixed(2)}`;
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

    qs('.pizzaBig img').src = pizzaJson[count].img;
    qs('.pizzaInfo h1').innerHTML = pizzaJson[count].name;
    qs('.pizzaInfo--desc').innerHTML = pizzaJson[count].description;
    qs('.pizzaInfo--size.selected').classList.remove('selected');
    qs('[data-selected]').classList.add('selected');

    console.log(setPrice(count));

//    qs('.pizzaInfo--actualPrice').innerHTML = setPrice(count);

    qs('.pizzaWindowArea').style.opacity = 0;
    qs('.pizzaWindowArea').style.display = 'flex';
    setTimeout(()=>{
        qs('.pizzaWindowArea').style.opacity = 1;
    }, 200);
}

function setPrice(count){
    let sizes = qsAll('.pizzaInfo--size');

    return("Funcionou");

    /*
        sizes.forEach(element => {
        element.querySelector('span').innerHTML = pizzaJson[count].sizes[element.dataset.key];

        return("Funcionou");

        /*
                    element.addEventListener('click', e => {

            switch (element.dataset.key) {
                case 0:
                    e.target.classList.add('selected');
                    return(000);
                case 1:
                    e.target.classList.add('selected');
                    return(111);
                case 2:
                    e.target.classList.add('selected');
                    return(222);
                default:
                    break;
            }
        });
    });

    */
}

/*
            if(element.dataset.key === "0"){
                console.log(e.parentNode);
            }else if(element.dataset.key === "1"){
                console.log(e.parentNode);
            }else if(element.dataset.key === "2"){
                console.log(e.parentNode);
            }




*/