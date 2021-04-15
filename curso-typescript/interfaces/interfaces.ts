// interface é um modelo de objeto
interface Humano {
  //propriedade obrigatoria
  nome: string;

  //propriedade opcional
  idade?: number;

  //propriedades dentro de cochetes, são propriedades com nome dinamicas
  [prop: string]: any;

  //função como propriedade
  saudar(sobrenome: string): void;
}

function saudarComOla(pessoa: Humano) {
  console.log(`Ola, ${pessoa.nome}`);
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = "Joana";
}

const pessoa: Humano = {
  nome: "João",
  idade: 27,
  saudar(sobrenome: string) {
    console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
  },
};

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({ nome: "Jonas", idade: 27, altura: 1.75 });
pessoa.saudar("Skywalker");

// usando no contexto de class
// implements => serve para implementar uma interface a uma class
// extends => serve para implementar um interface a uma interface ou uma class a uma class
class Cliente implements Humano {
  nome: string = "";
  ultimaCompra: Date = new Date();
  saudar(sobrenome: string) {
    console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
  }
}

const meuCliente = new Cliente();
meuCliente.nome = "Han";
meuCliente.saudar("Solo");
console.log(meuCliente.ultimaCompra);

// usando no contexto de função
interface FuncaoCalculo {
  (a: number, b: number): number;
}

let potencia: FuncaoCalculo;
potencia = function (base: number, exp: number): number {
  // FORMAS DE FAZER POTENCIA
  // Math.pow(3,10)
  // 3 ** 10
  // Array(exp).fill(base).reduce((acc, elem) => acc * elem);
  return base ** exp;
};
console.log(potencia(3, 10));

// Herança
interface A {
  a(): void;
}

interface B {
  b(): void;
}

interface ABC extends A, B {
  c(): void;
}

class RealA implements A {
  a(): void {}
}

class RealAB implements A, B {
  a(): void {}
  b(): void {}
}

class RealABC implements ABC {
  a(): void {}
  b(): void {}
  c(): void {}
}

// Adicionando funções ao prototype do objeto usando interface

interface Object {
  log(): void;
}

Object.prototype.log = function () {
  console.log(this.toString());
};

const x = 2;
x.log();

const y = 3;
y.log();

const z = 4;
z.log();
