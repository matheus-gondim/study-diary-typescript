// string
let nome: string = "João";
console.log(nome);
// nome = 28

// numbers
let idade: number = 27;
// idade = 'Ana'
idade = 27.5;
console.log(idade);

// boolean
let possuiHobbies: boolean = false;
console.log(possuiHobbies);

// tipos explícitos
let minhaIdade: number;
minhaIdade = 27;
console.log(typeof minhaIdade);

// array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
console.log(hobbies);

// tuplas => tupla e uma estrutura semelhante ao um array mas que tem varios tipos de argumento,
// elas sempre devem seguir a seguencia dos tipos
let endereco: [string, number, string] = ["Av Principal", 99, ""];
console.log(endereco);
endereco = ["Rua Importante", 1260, "Bloco C"];
console.log(endereco);

// enums
enum Cor {
  Cinza, // 0
  Verde = 100, // 100
  Azul = 10, // 2
  Laranja,
  Amarelo,
  Vermelho = 100,
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);

// any
let carro: any = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2019 };
console.log(carro);

// funções
function retornaMeuNome(): string {
  return nome;
}

console.log(retornaMeuNome());

function digaOi(): void {
  console.log("Oi");
}

digaOi();

function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}
console.log(multiplicar(4.7, 9));

// tipo função
let calculo: (x: number, y: number) => number;
calculo = multiplicar;
console.log(calculo(5, 6));

// Tipo objetos
let usuario: { nome: string; idade: number } = {
  nome: "João",
  idade: 27,
};
console.log(usuario);

usuario = {
  idade: 31,
  nome: "Maria",
};
console.log(usuario);

// Desafio
/*
    Criar um objeto funcionário com:
        - Array de strings com os nomes dos supervisores
        - Função de bater ponto que recebe a hora (número) 
            e retorna uma string
            -> Ponto normal (<= 8)
            -> Fora do horário (> 8)
*/

//Alias (Criando tipos)
type Funcionario = {
  supervisores: string[];
  baterPonto: (horas: number) => string;
};

let funcionario: Funcionario = {
  supervisores: ["Ana", "Fernando"],
  baterPonto(horario: number): string {
    return horario <= 8 ? "Ponto normal" : "Fora do horário";
  },
};

console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));

//Union Types
let nota: number | string = 10;
console.log(`Minha nota é ${nota}!`);

// checando tipos manualmente
let valor = 30;

if (typeof valor === "number") {
  console.log("É um number!");
} else {
  console.log(typeof valor);
}

//never type => quando nunca vai finalizar a função ou que vai retornar com falha
function falha(msg: string): never {
  throw new Error(msg);
}

const produto = {
  nome: "Sabão",
  preco: 1,
  validarProduto() {
    if (!this.nome || this.nome.trim().length == 0) {
      falha("Precisa ter um nome");
    }
    if (this.preco <= 0) falha("Preco inválido!");
  },
};
produto.validarProduto();

let altura: number | null = 12;
altura = null;

type Contato = {
  nome: string;
  tel1: string;
  tel2: string | null;
};

const contato1: Contato = {
  nome: "Fulano",
  tel1: "98765432",
  tel2: null,
};

// Desafio
type ContaBancaria = {
  saldo: number;
  depositar: (valor: number) => void;
};

type Correntista = {
  nome: string;
  contaBancaria: ContaBancaria;
  contatos: string[];
};

let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor: number) {
    this.saldo += valor;
  },
};

let correntista: Correntista = {
  nome: "Ana Silva",
  contaBancaria: contaBancaria,
  contatos: ["34567890", "98765432"],
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);
