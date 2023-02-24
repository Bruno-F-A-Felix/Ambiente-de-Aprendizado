const form = document.getElementById("novoItem"); // Pegamos todo o formulario
const lista = document.getElementById("lista");   // Pegamos a lista de itens que vamos alimentar

form.addEventListener("submit", (evento) => {    // Monitoramos o envio do formulario
    evento.preventDefault();                      // Fazemos com que o evento padrão de envio do formulario seja cancelado

    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value);
    // Aqui coletamos os valores das tags 'nome' e 'quantidade' dentro do formulario
})

function criaElemento(nome, quantidade) {           // Função para alimentar a lista
    const novoItem = document.createElement('li');
    novoItem.classList.add("item");                  // Criando a tag <li> e adicionando a Class="item"

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;               // Criando a tag <strong> e inserindo o valor nela

    novoItem.appendChild(numeroItem);   // Adicionando a tag <strong> na tag <li>
    novoItem.innerHTML += nome;         // Concatenando a tag <strong> com o valor 'nome'

    lista.appendChild(novoItem);    // Adicionando um novo item a lista.
}