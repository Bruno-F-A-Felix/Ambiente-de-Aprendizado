const c = (el) => document.querySelector(el);     // Encurtando o caminho para fazer a chamada do 'querySelector'
const cs = (el) => document.querySelectorAll(el); // Encurtando o caminho para fazer a chamada do 'querySelectorAll'
let pizzaAmount, pizzaIndex, pizzaPrice, pizzaIdSelected;
let cart = [];

pizzaJson.map ((item, index) => {                             // Fazendo um 'map()' para percorrer todo o banco de dados, do qual 'item' = elemento, e o 'index' = index do elemento
    let pizzaItem = c('.models .pizza-item').cloneNode(true); // Clonando a estrutura 'pizza-item' em 'pizzaItem' para melhor manipulação

    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;                          // Inserindo imagens na seguencia
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;                      // Inserindo o nome na seguencia
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;               // Inserindo a descrição na seguencia
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`; // Inserindo o preço na sequencia

    /*pizzaItem.querySelector('a').addEventListener('click', (e) => { // Aqui monitoramos o evento de click na Tag <a /> e passamos o resultado para 'e'
        e.preventDefault();                                         // Definindo primeiramente para que caso ocorra um click nada aconteça, caso contrario ele recarrega a página zerando tudo
        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        pizzaAmount = 1;                                            // Criando a variavel de monitoramento sobre a quantidade de pizzas selecionadas para o carrinho
        pizzaIndex = key;                                           // Criando a variavel de monitoramento sobre em qual pizza estamos trabalhando
        pizzaPrice = pizzaJson[pizzaIndex].price.toFixed(2);

        c('.pizzaWindowArea .pizzaBig img').src = pizzaJson[key].img;                             // Inserindo a imagem em seu respectivo chamado
        c('.pizzaWindowArea .pizzaInfo h1').innerHTML = pizzaJson[key].name;                      // Inserindo o titulo em seu respectivo chamado
        c('.pizzaWindowArea .pizzaInfo .pizzaInfo--desc').innerHTML = pizzaJson[key].description; // Inserindo a descrição em seu respectivo chamado
        c('.pizzaInfo--price .pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`; // Inserindo o preço no seu respectivo chamado
        c('.pizzaInfo--size.selected').classList.remove('selected');
        cs('.pizzaWindowArea .pizzaInfo--size').forEach((size, sizeIndex) => {                    // Percorrendo por todos os tamanhos de pizzas
            size.addEventListener('click', () => {                                                // Monitorando o click em um dos tamanhos
                size.classList.add('selected');
            });
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];                         // Inserindo o peso de cada tamanho
        });

        c('.pizzaWindowArea').style.opacity = 0;                        // Inicio do efeito de chamado do menu de compra
        c('.pizzaWindowArea').style.display = 'flex';                   // Executando um comando assim que ocorrer o click, chamando o menu de compra
        setTimeout(() => c('.pizzaWindowArea').style.opacity = 1, 200); /* Fim do efeito de chamado do menu de compre, é necessario o 'setTimeout' se 
                                                                           não o JS pula direto para o 'opacity = 1' sem executar o 'transition' no style.css
    });*/

    c('.pizza-area').append(pizzaItem); // Publicando os elementos HTML uma ao lado do outro
});
openModal();

function openModal(){
    cs('.pizza-area .pizza-item').forEach((pizzaItemOption) => {
        pizzaItemOption.querySelector('a').addEventListener('click', (e) => {
            e.preventDefault();                                         // Definindo primeiramente para que caso ocorra um click nada aconteça, caso contrario ele recarrega a página zerando tudo
            let key = e.target.closest('.pizza-item').getAttribute('data-key'); // Pegando o valor de data-key da respectiva pizza clicada
            pizzaAmount = 1;                                            // Criando a variavel de monitoramento sobre a quantidade de pizzas selecionadas para o carrinho
            pizzaIndex = key;                                           // Criando a variavel de monitoramento sobre em qual pizza estamos trabalhando
            pizzaIdSelected = key + 1;                                  // Criando variavel para identificar o ID da pizza selecionada
            pizzaPrice = parseFloat(pizzaJson[pizzaIndex].price.toFixed(2)); // Pegando o valor da pizza que acabamos de clicar
        
            c('.pizzaWindowArea .pizzaBig img').src = pizzaJson[key].img;                             // Inserindo a imagem em seu respectivo chamado
            c('.pizzaWindowArea .pizzaInfo h1').innerHTML = pizzaJson[key].name;                      // Inserindo o titulo em seu respectivo chamado
            c('.pizzaWindowArea .pizzaInfo .pizzaInfo--desc').innerHTML = pizzaJson[key].description; // Inserindo a descrição em seu respectivo chamado
            c('.pizzaInfo--price .pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`; // Inserindo o preço no seu respectivo chamado
            c('.pizzaInfo--pricearea .pizzaInfo--qt').innerHTML = pizzaAmount;                        // Resetando a quantidade de pizzas selecionadas

            cs('.pizzaWindowArea .pizzaInfo--size').forEach((size, sizeIndex) => {                    // Percorrendo por todos os tamanhos de pizzas
                sizeIndex === 2 ? size.classList.add('selected') : size.classList.remove('selected');
                size.addEventListener('click', () => {
                    removeSelected();
                    size.classList.add('selected');
                    pizzaAmount = 1;
                    c('.pizzaInfo--pricearea .pizzaInfo--qt').innerHTML = pizzaAmount;                        // Resetando a quantidade de pizzas selecionadas

                    pizzaPrice = parseFloat(pizzaJson[pizzaIndex].price.toFixed(2));
                    c('.pizzaInfo--price .pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaPrice.toFixed(2)}`; // Inserindo o preço no seu respectivo chamado

                });
                size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];                         // Inserindo o peso de cada tamanho
            });
        
            c('.pizzaWindowArea').style.opacity = 0;                        // Inicio do efeito de chamado do menu de compra
            c('.pizzaWindowArea').style.display = 'flex';                   // Executando um comando assim que ocorrer o click, chamando o menu de compra
            setTimeout(() => c('.pizzaWindowArea').style.opacity = 1, 200); /* Fim do efeito de chamado do menu de compre, é necessario o 'setTimeout' se 
                                                                               não o JS pula direto para o 'opacity = 1' sem executar o 'transition' no style.css*/
        });
    });
}

function clickCloseWindow(){                                                  // Função de fechar o menu de compra
    c('.pizzaWindowArea').style.opacity = 0;                             // Toranando o menu de compra invisivel
    setTimeout(() => c('.pizzaWindowArea').style.display = 'none', 500); // Fechando o menu de compra utilizando do 'setTimeout' ativando o 'transition' do style.css
    openModal();
}

function removeSelected(){
    cs('.pizzaWindowArea .pizzaInfo--size').forEach((size) => size.classList.remove('selected') );
}

c('.pizzaInfo--pricearea .pizzaInfo--qtmenos').addEventListener('click', (qtm) =>{
    if(pizzaAmount > 1){
        pizzaAmount--;
        pizzaPrice -= parseFloat(pizzaJson[pizzaIndex].price.toFixed(2));
        c('.pizzaInfo--pricearea .pizzaInfo--qt').innerHTML = pizzaAmount;             // Atualizando a quantidade
        c('.pizzaInfo--price .pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaPrice.toFixed(2)}`; // Inserindo o novo preço no seu respectivo chamado
    
    } else 
        qtm.preventDefault();
});

c('.pizzaInfo--pricearea .pizzaInfo--qtmais').addEventListener('click', () =>{
    pizzaAmount++;
    pizzaPrice += parseFloat(pizzaJson[pizzaIndex].price.toFixed(2));
    c('.pizzaInfo--pricearea .pizzaInfo--qt').innerHTML = pizzaAmount;             // Atualizando a quantidade
    c('.pizzaInfo--price .pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaPrice.toFixed(2)}`; // Inserindo o novo preço no seu respectivo chamado

});

c('.pizzaInfo .pizzaInfo--addButton').addEventListener('click', () => { // Aqui monitora o click no botão de Adicionar ao Carriho
    // Qual a pizza ??
    pizzaIndex;                 // Esse pizzaIndex já está atualizado com a posição da respectiva pizza que clicamos
    // Qual o ID da pizza ??
    pizzaIdSelected;            // Esse pizzaIdSelected já está atualizado com o valor do ID da respsctiva pizza clicada
    // Qual o tamanho ??
    let pizzaSize = parseInt(c('.pizzaWindowArea .pizzaInfo--size.selected').getAttribute('data-key'));
    // Quantas pizzas ??
    pizzaAmount;
    // Adicionando ao carrinho
    let key = cart.findIndex((item) => item.id == pizzaIdSelected);  // Criando variavel de verificação se há pizzas retorna o valor do seu index, se não retorna -1

    // O ERRO TÁ AQUI NO PIZZAINDEX SOBRE O PIZZASIZE

    if(key > -1){                                           // Verificando se já há uma mesma pizza adicionada
        if(cart[pizzaIndex].pizzaSize == pizzaSize)         // Verificando se já há o mesmo tamanho de pizza resquisitado
            cart[pizzaIndex].pizzaAmount += pizzaAmount;    // Se já há a mesma pizza e mesmo tamanho, apenas acrescentar a nova quantidade
        else
            cart.push({                     // Mesmo que seja a mesma pizza, mas tamanho diferente, criar um novo Objeto
                id:parseInt(pizzaIdSelected),
                pizzaSize,
                pizzaAmount
            });
    } else
        cart.push({
            id:parseInt(pizzaIdSelected),
            pizzaSize,
            pizzaAmount
        });
    // Mostrando ou removendo o carrinho de compras
    updateCart();
    // Fechando o modal
    clickCloseWindow();
    
});

function updateCart(){
    if(cart.length > 0){
        c('aside').classList.add('show');
        c('.cart--area .cart').innerHTML = '';
        for (let key in cart) {
            let pizzaItem = pizzaJson.find((item) => item.id == cart[key].id);
            let cartItem = c('.models .cart--item').cloneNode(true);
            let pizzaItemSize;
            switch (cart[key].pizzaSize) {
                case 0:
                    pizzaItemSize = 'P';
                    break;
                case 1:
                    pizzaItemSize = 'M';
                    break;
                case 2:
                    pizzaItemSize = 'G';
                    break;
            }

            cartItem.querySelector('img').src = pizzaItem.img;
            cartItem.querySelector('.cart--item-nome').innerHTML = `${pizzaItem.name} (${pizzaItemSize})`;
            cartItem.querySelector('.cart--item--qtarea .cart--item--qt').innerHTML = cart[key].pizzaAmount;

            c('.cart--area .cart').append(cartItem);
        }
    }
    else
        c('aside').classList.remove('show');
}
