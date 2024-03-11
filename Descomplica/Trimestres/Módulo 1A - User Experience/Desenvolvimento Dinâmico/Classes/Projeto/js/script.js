class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        console.log(`Olá, meu nome é ${this.nome} e sou um(a) ${this.cargo}.`);
    }

    trabalhar() {
        console.log(`${this.nome} está trabalhando.`);
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        console.log(`${this.nome} está gerenciando o departamento de ${this.departamento}.`);
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        console.log(`${this.nome} está programando em ${this.linguagem}.`);
    }
}

// Criando instâncias
const gerente1 = new Gerente("Ana", 35, "Gerente de Projetos", "TI");
const desenvolvedor1 = new Desenvolvedor("Carlos", 28, "Desenvolvedor Web", "JavaScript");

// Chamando métodos
gerente1.seApresentar();
gerente1.trabalhar();
gerente1.gerenciar();

desenvolvedor1.seApresentar();
desenvolvedor1.trabalhar();
desenvolvedor1.programar();
