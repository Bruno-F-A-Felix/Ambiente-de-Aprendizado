function mostrarNomeCompleto() {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let resultado = document.getElementById("resultado");

    if (nome === "" || sobrenome === "") {
        resultado.textContent = "Nome ou sobrenome inválido.";
    } else {
        resultado.textContent = `Nome completo: ${nome} ${sobrenome}`;
    }
}
