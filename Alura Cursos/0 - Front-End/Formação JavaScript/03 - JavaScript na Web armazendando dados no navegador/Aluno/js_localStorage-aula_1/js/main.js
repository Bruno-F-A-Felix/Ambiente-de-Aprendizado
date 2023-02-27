const form = document.getElementById("novoItem"); // Pegamos todo o formulario
const lista = document.getElementById("lista");   // Pegamos a lista de itens que vamos alimentar
const itens = JSON.parse(localStorage.getItem("item")) || []; // Criamos o array de elementos da lista vazio caso não tenha nada salvo no localStorage

itens.forEach( (elemento) => {          // Aqui estamos percorrendo todo o Array de itens
    console.log(elemento.nome, elemento.quantidade);    // Verificando se está tudo certinho.
});

form.addEventListener("submit", (evento) => {    // Monitoramos o envio do formulario
    evento.preventDefault();                      // Fazemos com que o evento padrão de envio do formulario seja cancelado

    const nome = evento.target.elements['nome'];                // Elemento 'nome' dentro do form
    const quantidade = evento.target.elements['quantidade'];    // Elemento 'quantidade' dentro do form

    criaElemento(nome.value, quantidade.value);
    // Aqui coletamos os valores das tags 'nome' e 'quantidade' dentro do formulario

    nome.value = "";        // Resetando o valor de nome para receber um novo ou o mesmo
    quantidade.value = "";  // Resetando o valor da quantidade para receber um novo ou o mesmo
})

function criaElemento(nome, quantidade) {           // Função para alimentar a lista
    const novoItem = document.createElement('li');
    novoItem.classList.add("item");                  // Criando a tag <li> e adicionando a Class="item"

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;               // Criando a tag <strong> e inserindo o valor nela

    novoItem.appendChild(numeroItem);   // Adicionando a tag <strong> na tag <li>
    novoItem.innerHTML += nome;         // Concatenando a tag <strong> com o valor 'nome'

    lista.appendChild(novoItem);    // Adicionando um novo item a lista.

    let itemAtual = {       // Criando um objeto para coletar os dados dos itens que acabaram de ser adicionados
        "nome": nome,
        "quantidade": quantidade,
    }

    itens.push(itemAtual);  // Criando um array de objetos, ou seja, um array de itens.

    localStorage.setItem("item", JSON.stringify(itens)); // Inserindo o array de objetos. JSON.stringify() -> É o método utilizado para converter valores em JavaScript para tipo texto string.

    /*
    Forma de inserção anterior, deixei pois possuí um conhecimento válido

    localStorage.setItem("nome", nome); // setItem() -> Dessa forma inserimos um item de nome: 'nome', e dado: 'nome'
    localStorage.setItem("quantidade", quantidade); // O mesmo vale aqui para quantidade

    localStorage.clear -> Limpa todos os dados em nosso localStorage.
    */
}