class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        alert(`Olá, meu nome é ${this.nome} e sou um(a) ${this.cargo}.`);
    }

    trabalhar() {
        alert(`${this.nome} está trabalhando.`);
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        alert(`${this.nome} está gerenciando o departamento de ${this.departamento}.`);
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        alert(`${this.nome} está programando na linguagem ${this.linguagem}.`);
    }
}

document.getElementById("funcionarioForm").addEventListener("submit", function (event) {
    event.preventDefault();

    try {
        const nome = document.getElementById("nome").value;
        const idade = parseInt(document.getElementById("idade").value);
        const cargo = document.getElementsByClassName("cargo").value;

        if (!nome || !idade) {
            throw new Error("Todos os campos devem ser preenchidos.");
        }

        let funcionario;

        cargo.forEach(element => {
            if (element === "gerente") {
                const departamento = document.getElementById("departamento").value;
                funcionario = new Gerente(nome, idade, element, departamento);
            } else if (element === "desenvolvedor") {
                const linguagem = document.getElementById("linguagem").value;
                funcionario = new Desenvolvedor(nome, idade, element, linguagem);
            } else {
                throw new Error("Cargo inválido. Escolha entre 'gerente' ou 'desenvolvedor'.");
            }
        });

        funcionario.seApresentar();
        funcionario.trabalhar();
    } catch (error) {
        console.error("Erro ao cadastrar funcionário:", error.message);
    }
});
