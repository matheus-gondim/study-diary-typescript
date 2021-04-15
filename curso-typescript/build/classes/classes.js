"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new Data(3, 11, 1991);
aniversarioEsperto.dia = 4;
console.log(aniversarioEsperto);
const casamentoEsperto = new Data(); // pode omitir os "()"
casamentoEsperto.ano = 2017;
console.log(casamentoEsperto);
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off)`;
    }
    precoComDesconto() {
        return parseFloat((this.preco * (1 - this.desconto)).toFixed(2));
    }
}
const prod1 = new Produto("Caneta", 4.2);
prod1.desconto = 0.06;
console.log(prod1.resumo());
const prod2 = new Produto("Caderno", 18.8, 0.15);
console.log(prod2.resumo());
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    // protected => serve para transmitir um metodo ou atributo pro herança
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida)
            this.velocidadeAtual = novaVelocidade;
        else
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro("Ford", "Ka", 185);
console.log(carro1.acelerar());
console.log(carro1.frear());
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super("Ferrari", modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari("F40", 324);
console.log(f40.acelerar());
console.log(f40.frear());
// Getters & Setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120)
            this._idade = valor;
    }
}
const pessoa1 = new Pessoa();
pessoa1.idade = 10;
console.log(pessoa1);
//Atributos e métodos estáticos
class Matematica {
    static areaCirc(raio) {
        return Math.pow(raio, 2) * this.PI;
    }
}
Matematica.PI = 3.1416;
console.log(Matematica.areaCirc(4));
// CLASS ABSTRACT
// As classes abstratas são classes básicas das quais outras classes podem ser derivadas.
// Eles não podem ser instanciados diretamente. Ao contrário de uma interface,
// uma classe abstrata pode conter detalhes de implementação para seus membros.
// Métodos marcados com abstract não contêm uma implementação e devem ser implementados em classes derivadas.
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((acc, elm) => acc + elm);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((acc, elm) => acc * elm);
    }
}
let c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
c1 = new Multiplicacao();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
// Singleton => serve para ter uma unica instancia
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date();
    }
}
Unico.instance = new Unico();
console.log(Unico.getInstance().agora());
// readonly
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHrlice = new Aviao("Tu-114", "PT-ABC");
console.log(turboHrlice);
//# sourceMappingURL=classes.js.map