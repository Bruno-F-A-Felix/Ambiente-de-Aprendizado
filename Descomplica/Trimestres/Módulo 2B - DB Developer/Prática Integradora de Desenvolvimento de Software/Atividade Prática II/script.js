document.getElementById('form-cliente').addEventListener('submit', function(event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let dataNascimento = document.getElementById('data-nascimento').value;
    let email = document.getElementById('email').value;
    let endereco = document.getElementById('endereco').value;

    if (nome && dataNascimento && email && endereco) {
        let tabela = document.getElementById('tabela-clientes');
        let novaLinha = tabela.insertRow();

        let celulaNome = novaLinha.insertCell(0);
        let celulaDataNascimento = novaLinha.insertCell(1);
        let celulaEmail = novaLinha.insertCell(2);
        let celulaEndereco = novaLinha.insertCell(3);

        celulaNome.textContent = nome;
        celulaDataNascimento.textContent = dataNascimento;
        celulaEmail.textContent = email;
        celulaEndereco.textContent = endereco;

        document.getElementById('form-cliente').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
