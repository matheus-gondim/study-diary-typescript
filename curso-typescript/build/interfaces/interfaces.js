"use strict";
function saudarComOla(pessoa) {
    console.log(`Ola, ${pessoa.nome}`);
}
function mudarNome(pessoa) {
    pessoa.nome = "Joana";
}
const pessoa = {
    nome: "João",
    idade: 27,
    saudar(sobrenome) {
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
class Cliente {
    constructor() {
        this.nome = "";
        this.ultimaCompra = new Date();
    }
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = "Han";
meuCliente.saudar("Solo");
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, exp) {
    // FORMAS DE FAZER POTENCIA
    // Math.pow(3,10)
    // 3 ** 10
    // Array(exp).fill(base).reduce((acc, elem) => acc * elem);
    return Math.pow(base, exp);
};
console.log(potencia(3, 10));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
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
//# sourceMappingURL=interfaces.js.map